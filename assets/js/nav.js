/* ==========================================================================
   NISM Learn — Shared navigation & in-page interaction helpers
   Breadcrumbs, prev/next chapter cards, TOC scrollspy, reveal-on-scroll
   steppers, flip cards and inline knowledge-check widgets.
   Depends on curriculum.js and progress.js being loaded first.
   ========================================================================== */

(function () {
  function renderBreadcrumb(container, trail) {
    var html = trail
      .map(function (item, i) {
        var isLast = i === trail.length - 1;
        if (isLast) return '<span class="current">' + item.label + "</span>";
        return '<a href="' + item.href + '">' + item.label + '</a><span class="sep">/</span>';
      })
      .join("");
    container.innerHTML = html;
  }

  function renderTopbarProgress(container, bookId) {
    var book = window.NismCurriculum.getBook(bookId);
    if (!book) { container.innerHTML = ""; return; }
    var stats = window.NismProgress.getBookStats(book);
    container.innerHTML =
      "<span>" + stats.done + " / " + stats.total + " chapters</span>" +
      '<div class="progress-track sm" style="width:90px"><div class="progress-fill" style="width:' + stats.pct + '%"></div></div>';
  }

  function chapterCardHtml(dir, entry) {
    if (!entry) return "<span></span>";
    var disabled = entry.chapter.status !== "active";
    var href = disabled ? "javascript:void(0)" : entry.chapter.path;
    return (
      '<a class="nav-link-card ' + dir + (disabled ? '" aria-disabled="true" style="opacity:.5;pointer-events:none;' : '') + '" href="' + href + '">' +
        '<div><div class="dir">' + (dir === "prev" ? "Previous" : "Next") + "</div>" +
        '<div class="ttl">Ch. ' + entry.chapter.number + " — " + entry.chapter.title + "</div></div>" +
      "</a>"
    );
  }

  function renderChapterFooterNav(container, bookId, chapterId) {
    var pn = window.NismCurriculum.getPrevNext(bookId, chapterId);
    container.innerHTML = chapterCardHtml("prev", pn.prev) + chapterCardHtml("next", pn.next);
  }

  function initTocScrollSpy(tocContainer, sectionSelector) {
    var links = Array.prototype.slice.call(tocContainer.querySelectorAll("a"));
    var sections = Array.prototype.slice.call(document.querySelectorAll(sectionSelector));
    if (!links.length || !sections.length) return;

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          var link = tocContainer.querySelector('a[href="#' + entry.target.id + '"]');
          if (!link) return;
          if (entry.isIntersecting) {
            links.forEach(function (l) { l.classList.remove("active"); });
            link.classList.add("active");
          }
        });
      },
      { rootMargin: "-15% 0px -70% 0px", threshold: 0 }
    );
    sections.forEach(function (s) { observer.observe(s); });
  }

  function initStepperReveal() {
    var steps = Array.prototype.slice.call(document.querySelectorAll(".step"));
    if (!steps.length) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    steps.forEach(function (s) { observer.observe(s); });
  }

  function initFlipCards() {
    Array.prototype.slice.call(document.querySelectorAll(".flip-card")).forEach(function (card) {
      card.addEventListener("click", function () { card.classList.toggle("flipped"); });
      card.setAttribute("tabindex", "0");
      card.setAttribute("role", "button");
      card.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); card.classList.toggle("flipped"); }
      });
    });
  }

  function initMiniChecks() {
    Array.prototype.slice.call(document.querySelectorAll(".mini-check")).forEach(function (block) {
      var opts = Array.prototype.slice.call(block.querySelectorAll(".mini-opt"));
      var feedback = block.querySelector(".feedback");
      opts.forEach(function (opt) {
        opt.addEventListener("click", function () {
          if (block.dataset.answered) return;
          block.dataset.answered = "true";
          var isCorrect = opt.dataset.correct === "true";
          opts.forEach(function (o) {
            o.disabled = true;
            if (o.dataset.correct === "true") o.classList.add("correct");
          });
          if (!isCorrect) opt.classList.add("wrong");
          if (feedback) {
            feedback.textContent = isCorrect
              ? (feedback.dataset.correctMsg || "Correct.")
              : (feedback.dataset.wrongMsg || feedback.dataset.correctMsg || "Not quite — see explanation above.");
            feedback.classList.add("show");
          }
        });
      });
    });
  }

  function initAll() {
    initStepperReveal();
    initFlipCards();
    initMiniChecks();
  }

  window.NismNav = {
    renderBreadcrumb: renderBreadcrumb,
    renderTopbarProgress: renderTopbarProgress,
    renderChapterFooterNav: renderChapterFooterNav,
    initTocScrollSpy: initTocScrollSpy,
    initStepperReveal: initStepperReveal,
    initFlipCards: initFlipCards,
    initMiniChecks: initMiniChecks,
    initAll: initAll
  };
})();
