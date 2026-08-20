/* ==========================================================================
   NISM Learn — Quiz engine
   Generic renderer for an end-of-chapter assessment. Consumes a plain array
   of MCQ objects and mounts an interactive, animated quiz flow into a
   container element. No external dependencies.

   Question shape:
     { q: "...", options: ["...", "...", "...", "..."], correct: 0, explain: "..." }

   Scenario-based question shape (optional `scenario` field renders a styled
   case-study panel above the question, in both the quiz flow and the review):
     { scenario: "Ravi invests ...", q: "What is ...?", options: [...],
       correct: 2, explain: "..." }
   ========================================================================== */

(function () {
  var ICONS = {
    check:
      '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15"/><path d="M6 10.5l2.5 2.5L14 7.5" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>',
    cross:
      '<svg viewBox="0 0 20 20" fill="none"><circle cx="10" cy="10" r="9" fill="currentColor" opacity="0.15"/><path d="M7 7l6 6M13 7l-6 6" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>'
  };
  var LETTERS = ["A", "B", "C", "D", "E", "F"];

  function shuffle(arr) {
    var a = arr.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }

  function prepareQuestions(rawQuestions) {
    return shuffle(rawQuestions).map(function (item) {
      var optionOrder = shuffle(item.options.map(function (text, i) { return i; }));
      var correctNewIndex = optionOrder.indexOf(item.correct);
      return {
        scenario: item.scenario || "",
        q: item.q,
        options: optionOrder.map(function (i) { return item.options[i]; }),
        correct: correctNewIndex,
        explain: item.explain || ""
      };
    });
  }

  function mount(container, config) {
    var questions = prepareQuestions(config.questions);
    var total = questions.length;
    var answers = new Array(total).fill(null);
    var timings = new Array(total).fill(0);
    var current = 0;
    var questionShownAt = 0;

    renderIntro();

    function renderIntro() {
      container.innerHTML =
        '<div class="quiz-intro reveal">' +
          '<span class="badge badge-gold">Chapter Assessment</span>' +
          "<h2>Test what you've learned</h2>" +
          '<p style="max-width:520px;margin:0 auto 26px;color:var(--text-secondary)">' +
            total + " questions drawn from every section of this chapter. Answer honestly — you can retake this as many times as you like." +
          "</p>" +
          '<button class="btn btn-primary" id="quiz-start-btn">Start Assessment</button>' +
        "</div>";
      container.querySelector("#quiz-start-btn").addEventListener("click", function () {
        current = 0;
        renderQuestion();
      });
    }

    function renderQuestion() {
      var item = questions[current];
      var pct = Math.round((current / total) * 100);
      questionShownAt = performance.now();

      container.innerHTML =
        '<div class="quiz-progress-row">' +
          "<span>Question " + (current + 1) + " / " + total + "</span>" +
          '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
        "</div>" +
        '<div class="quiz-card">' +
          (item.scenario ? '<div class="quiz-scenario"><span class="quiz-scenario-tag">Scenario</span>' + item.scenario + "</div>" : "") +
          '<div class="quiz-question">' + item.q + "</div>" +
          '<div class="quiz-options" id="quiz-options"></div>' +
          '<div class="quiz-explain" id="quiz-explain"></div>' +
          '<div class="quiz-nav-row"><button class="btn btn-primary" id="quiz-next-btn" disabled>' +
            (current === total - 1 ? "See results" : "Next question") +
          "</button></div>" +
        "</div>";

      var optsEl = container.querySelector("#quiz-options");
      item.options.forEach(function (optText, i) {
        var btn = document.createElement("button");
        btn.className = "quiz-option";
        btn.innerHTML = '<span class="letter">' + LETTERS[i] + '</span><span>' + optText + "</span>";
        btn.addEventListener("click", function () { selectAnswer(i); });
        optsEl.appendChild(btn);
      });

      var nextBtn = container.querySelector("#quiz-next-btn");
      nextBtn.addEventListener("click", function () {
        if (current < total - 1) {
          current++;
          renderQuestion();
        } else {
          renderResults();
        }
      });

      function selectAnswer(i) {
        if (answers[current] !== null) return; // already answered
        answers[current] = i;
        timings[current] = Math.max(0, Math.round(performance.now() - questionShownAt));
        var optionEls = optsEl.querySelectorAll(".quiz-option");
        optionEls.forEach(function (el, idx) {
          el.disabled = true;
          if (idx === item.correct) el.classList.add("correct");
          if (idx === i && i !== item.correct) el.classList.add("wrong");
          if (idx === i) el.classList.add("selected");
        });
        var explainEl = container.querySelector("#quiz-explain");
        if (item.explain) {
          explainEl.innerHTML = "<strong>" + (i === item.correct ? "Correct. " : "Not quite. ") + "</strong>" + item.explain;
          explainEl.classList.add("show");
        }
        nextBtn.disabled = false;
      }
    }

    function renderResults() {
      var score = 0;
      questions.forEach(function (item, i) { if (answers[i] === item.correct) score++; });
      var pct = Math.round((score / total) * 100);
      var timeMs = timings.reduce(function (sum, t) { return sum + t; }, 0);

      var verdict, sub;
      if (pct >= 80) { verdict = "Excellent work"; sub = "You have a strong grip on this chapter."; }
      else if (pct >= 60) { verdict = "Good progress"; sub = "You're close — revisit the sections below marked incorrect."; }
      else { verdict = "Keep practising"; sub = "Reread the chapter, then retake the assessment."; }

      var reviewHtml = questions.map(function (item, i) {
        var yourIdx = answers[i];
        var isCorrect = yourIdx === item.correct;
        var icon = isCorrect ? ICONS.check : ICONS.cross;
        var iconColor = isCorrect ? "var(--green-500)" : "var(--red-500)";
        var yourLine = isCorrect
          ? '<div class="a correct-answer">' + LETTERS[yourIdx] + ". " + item.options[yourIdx] + "</div>"
          : '<div class="a your-wrong">Your answer: ' + LETTERS[yourIdx] + ". " + item.options[yourIdx] + '</div>' +
            '<div class="a correct-answer">Correct: ' + LETTERS[item.correct] + ". " + item.options[item.correct] + "</div>";
        return (
          '<div class="review-item">' +
            (item.scenario ? '<div class="review-scenario">' + item.scenario + "</div>" : "") +
            '<div class="q"><span class="status-icon" style="color:' + iconColor + '">' + icon + "</span>" + (i + 1) + ". " + item.q + "</div>" +
            yourLine +
            (item.explain ? '<div class="expl">' + item.explain + "</div>" : "") +
          "</div>"
        );
      }).join("");

      container.innerHTML =
        '<div class="quiz-results reveal">' +
          '<div class="result-ring" style="--pct:' + pct + '"><div><div class="big">' + pct + "%</div><div class=\"small\">" + score + " / " + total + "</div></div></div>" +
          '<div class="result-verdict">' + verdict + "</div>" +
          '<div class="result-sub">' + sub + "</div>" +
          '<div class="result-actions">' +
            '<button class="btn btn-ghost" id="quiz-retry-btn">Retake assessment</button>' +
            (config.onContinueLabel ? '<a class="btn btn-primary" href="' + config.onContinueHref + '">' + config.onContinueLabel + "</a>" : "") +
          "</div>" +
          '<div class="section-divider">Review your answers</div>' +
          '<div class="review-list">' + reviewHtml + "</div>" +
        "</div>";

      container.querySelector("#quiz-retry-btn").addEventListener("click", function () {
        questions = prepareQuestions(config.questions);
        answers = new Array(total).fill(null);
        timings = new Array(total).fill(0);
        current = 0;
        renderQuestion();
      });

      if (typeof config.onComplete === "function") {
        config.onComplete(score, total, timeMs);
      }
    }
  }

  window.NismQuiz = { mount: mount };
})();
