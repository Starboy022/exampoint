/* ==========================================================================
   NISM Learn — Progress tracking
   Pure localStorage persistence, no backend. Tracks best quiz score and
   completion state per chapter.
   ========================================================================== */

(function () {
  var STORAGE_KEY = "nismLearnProgressV1";
  var TARGET_KEY = "nismTargetScoreV1";

  var MASTERY_THRESHOLD = 80; // % accuracy at/above this => topic considered mastered
  var WEAK_THRESHOLD = 60;    // % accuracy below this => topic flagged weak

  function readAll() {
    try {
      var raw = window.localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch (e) {
      return {};
    }
  }

  function writeAll(data) {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (e) {
      /* localStorage unavailable (e.g. private mode) — fail silently */
    }
  }

  function key(bookId, chapterId) {
    return bookId + ":" + chapterId;
  }

  function getChapterProgress(bookId, chapterId) {
    var all = readAll();
    return all[key(bookId, chapterId)] || null;
  }

  /**
   * Records one quiz attempt. timeMs is the total time spent answering
   * (sum across all questions in that attempt) and is optional — omit it
   * if the caller isn't tracking timing.
   */
  function recordQuizResult(bookId, chapterId, score, total, timeMs) {
    var all = readAll();
    var k = key(bookId, chapterId);
    var existing = all[k] || {
      bestScore: 0, bestTotal: total, attempts: 0,
      totalQuestionsAttempted: 0, totalCorrectAnswers: 0, totalTimeMs: 0
    };
    var pct = total > 0 ? score / total : 0;
    var bestPct = existing.bestTotal > 0 ? existing.bestScore / existing.bestTotal : 0;

    all[k] = {
      bestScore: pct >= bestPct ? score : existing.bestScore,
      bestTotal: pct >= bestPct ? total : existing.bestTotal,
      lastScore: score,
      lastTotal: total,
      attempts: (existing.attempts || 0) + 1,
      totalQuestionsAttempted: (existing.totalQuestionsAttempted || 0) + total,
      totalCorrectAnswers: (existing.totalCorrectAnswers || 0) + score,
      totalTimeMs: (existing.totalTimeMs || 0) + (timeMs || 0),
      completed: true,
      lastAttemptAt: new Date().toISOString()
    };
    writeAll(all);
    return all[k];
  }

  function isChapterComplete(bookId, chapterId) {
    var p = getChapterProgress(bookId, chapterId);
    return !!(p && p.completed);
  }

  function chapterAccuracyPct(bookId, chapterId) {
    var p = getChapterProgress(bookId, chapterId);
    if (!p || !p.bestTotal) return null;
    return Math.round((p.bestScore / p.bestTotal) * 100);
  }

  function getModuleStats(bookId, module) {
    var done = 0;
    module.chapters.forEach(function (c) {
      if (isChapterComplete(bookId, c.id)) done++;
    });
    return { done: done, total: module.chapters.length };
  }

  function getBookStats(book) {
    var done = 0, total = 0;
    book.modules.forEach(function (m) {
      m.chapters.forEach(function (c) {
        total++;
        if (isChapterComplete(book.id, c.id)) done++;
      });
    });
    return { done: done, total: total, pct: total ? Math.round((done / total) * 100) : 0 };
  }

  function getTargetScore(book) {
    try {
      var raw = window.localStorage.getItem(TARGET_KEY);
      var stored = raw ? JSON.parse(raw) : {};
      if (stored[book.id]) return stored[book.id];
    } catch (e) { /* ignore */ }
    return book.totalMarks ? Math.ceil(book.totalMarks * (book.passPercent || 60) / 100) : null;
  }

  function setTargetScore(book, marks) {
    var stored = {};
    try {
      var raw = window.localStorage.getItem(TARGET_KEY);
      stored = raw ? JSON.parse(raw) : {};
    } catch (e) { /* ignore */ }
    stored[book.id] = marks;
    try { window.localStorage.setItem(TARGET_KEY, JSON.stringify(stored)); } catch (e) { /* ignore */ }
  }

  /**
   * Full dashboard rollup for a book: preparation %, cumulative accuracy,
   * average time per question, per-module accuracy (for the weakness
   * heatmap), mastered/weak topic counts, and a recommended next step.
   */
  function getOverallStats(book) {
    var chaptersDone = 0, chaptersTotal = 0;
    var questionsAttempted = 0, correctAnswers = 0, totalTimeMs = 0;
    var weightedMarks = 0;
    var moduleStats = [];
    var nextUnstarted = null;
    var weakestChapter = null;

    book.modules.forEach(function (m) {
      var modDone = 0, modAccSum = 0, modAccCount = 0;
      m.chapters.forEach(function (c) {
        chaptersTotal++;
        var p = getChapterProgress(book.id, c.id);
        var isDone = !!(p && p.completed);
        if (isDone) chaptersDone++;
        if (isDone) modDone++;

        if (p) {
          questionsAttempted += p.totalQuestionsAttempted || 0;
          correctAnswers += p.totalCorrectAnswers || 0;
          totalTimeMs += p.totalTimeMs || 0;
          var acc = chapterAccuracyPct(book.id, c.id);
          if (acc !== null) {
            modAccSum += acc;
            modAccCount++;
            if (weakestChapter === null || acc < weakestChapter.accuracy) {
              weakestChapter = { module: m, chapter: c, accuracy: acc };
            }
          }
        }

        if (!isDone && c.status === "active" && nextUnstarted === null) {
          nextUnstarted = { module: m, chapter: c };
        }
      });

      weightedMarks += (m.marks || 0) * (m.chapters.length ? modDone / m.chapters.length : 0);

      var modAvgAcc = modAccCount ? Math.round(modAccSum / modAccCount) : null;
      var status = "not-started";
      if (modAvgAcc !== null) {
        if (modAvgAcc >= MASTERY_THRESHOLD && modDone === m.chapters.length) status = "mastered";
        else if (modAvgAcc < WEAK_THRESHOLD) status = "weak";
        else status = "in-progress";
      }
      moduleStats.push({ module: m, avgAccuracy: modAvgAcc, done: modDone, total: m.chapters.length, status: status });
    });

    var preparationPct = book.totalMarks ? Math.round((weightedMarks / book.totalMarks) * 100) : 0;
    var accuracyPct = questionsAttempted ? Math.round((correctAnswers / questionsAttempted) * 100) : null;
    var avgTimeSec = questionsAttempted ? Math.round((totalTimeMs / questionsAttempted) / 1000) : null;
    var masteredTopics = moduleStats.filter(function (s) { return s.status === "mastered"; });
    var weakTopics = moduleStats.filter(function (s) { return s.status === "weak"; });
    var estimatedScore = (accuracyPct !== null && book.totalMarks) ? Math.round((accuracyPct / 100) * book.totalMarks) : null;

    var recommended = null;
    if (weakestChapter && weakestChapter.accuracy < WEAK_THRESHOLD) {
      recommended = { type: "revise", module: weakestChapter.module, chapter: weakestChapter.chapter, reason: "Lowest accuracy so far (" + weakestChapter.accuracy + "%)" };
    } else if (nextUnstarted) {
      recommended = { type: "start", module: nextUnstarted.module, chapter: nextUnstarted.chapter, reason: "Next chapter in the syllabus" };
    } else if (weakestChapter) {
      recommended = { type: "revise", module: weakestChapter.module, chapter: weakestChapter.chapter, reason: "Keep sharpening your weakest area (" + weakestChapter.accuracy + "%)" };
    }

    return {
      chaptersDone: chaptersDone,
      chaptersTotal: chaptersTotal,
      preparationPct: preparationPct,
      questionsAttempted: questionsAttempted,
      correctAnswers: correctAnswers,
      accuracyPct: accuracyPct,
      avgTimeSec: avgTimeSec,
      estimatedScore: estimatedScore,
      targetScore: getTargetScore(book),
      moduleStats: moduleStats,
      masteredTopics: masteredTopics,
      weakTopics: weakTopics,
      recommended: recommended,
      mockExamsCompleted: 0
    };
  }

  function resetAll() {
    writeAll({});
  }

  window.NismProgress = {
    getChapterProgress: getChapterProgress,
    recordQuizResult: recordQuizResult,
    isChapterComplete: isChapterComplete,
    chapterAccuracyPct: chapterAccuracyPct,
    getModuleStats: getModuleStats,
    getBookStats: getBookStats,
    getOverallStats: getOverallStats,
    getTargetScore: getTargetScore,
    setTargetScore: setTargetScore,
    resetAll: resetAll,
    MASTERY_THRESHOLD: MASTERY_THRESHOLD,
    WEAK_THRESHOLD: WEAK_THRESHOLD
  };
})();
