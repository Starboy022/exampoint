# NISM Learn — Project Guide

Interactive, static HTML/CSS/JS exam-prep app for the **NISM Series-X Investment Adviser** certifications (no build step, no framework, no dependencies). Navigation flows one direction: home page → book (XA / XB) → module → chapter. Each chapter is its own folder for separation of concerns.

Personal-use app: **no auth, no backend, no production hardening.** Progress lives in the browser's `localStorage` only.

---

## 1. Knowledge sources (exam workbooks — the single content authority)

Two workbook folders hold the full, chapter-split source content. **Always read the exact chapter `.md` in full before building that chapter** — use its real examples, numbers, named cases, and regulatory facts, never generic finance content. Act as both a senior investment adviser (accuracy) and senior dev (implementation).

### XA — `NISM-Series-X-A Investment Adviser Level 1 knowledge/`
Level 1. **6 modules, 20 chapters (Ch.1–20).** Total exam 150 marks, 60% pass. Per-module marks (from curriculum): M1 = 37, M2 = 10, M3 = 30, M4 = 23, M5 = 20, M6 = 30.

- M1 Personal Financial Planning — Ch.1 Intro to PFP, Ch.2 Time Value of Money, Ch.3 Evaluating Financial Position of Clients, Ch.4 Debt Management & Loans
- M2 Indian Financial Markets — Ch.5 Intro to Indian Financial Markets, Ch.6 Securities Market Segments
- M3 Investment Products — Ch.7 Intro to Investment, Ch.8 Investing in Stocks, Ch.9 Fixed Income Securities, Ch.10 Understanding Derivatives
- M4 Investment Through Managed Portfolio — Ch.11 Mutual Funds, Ch.12 Portfolio Manager, Ch.13 Alternative Investment Funds (AIFs)
- M5 Portfolio Construction, Performance Monitoring & Evaluation — Ch.14 Intro to Modern Portfolio Theory, Ch.15 Portfolio Construction Process, Ch.16 Portfolio Performance Measurement & Evaluation
- M6 Operations, Regulatory Environment, Compliance & Ethics — Ch.17 Operational Aspects, Ch.18 Key Regulations, Ch.19 Ethical Issues, Ch.20 Grievance Redress Mechanism

Each module folder also has a `sample-questions.md`. Front matter: `00-front-matter.md`; index: `INDEX.md`.

### XB — `NISM Series-X-B Investment Adviser Level 2 knowledge/`
Level 2. **6 modules (7–12), 20 chapters (Ch.1–20), numbering continues from XA.** Each module folder has a `module-end-questions.md`. Front matter: `00-front-matter.md`; index: `INDEX.md`.

- M7 Risk Management & Insurance Planning — Ch.1 Basics of Insurance, Ch.2 Life Insurance Products, Ch.3 Non-Life Insurance Products
- M8 Retirement Planning — Ch.4 Retirement Planning Basics, Ch.5 Retirement Products, Ch.6 Miscellaneous Aspects of Retirement Planning
- M9 Taxation — Ch.7 Concepts in Taxation, Ch.8 Capital Gains, Ch.9 Income from Other Sources, Ch.10 Taxation of Debt Products, Ch.11 Taxation of Equity Products, Ch.12 Taxation of Other Products, Ch.13 Tax Provisions for Special Cases
- M10 Estate Planning — Ch.14 Basics of Estate Planning, Ch.15 Tools for Estate Planning
- M11 Behavioural Finance — Ch.16 Basics of Behavioural Finance, Ch.17 Behavioural Finance in Practice
- M12 Comprehensive Investment Advice — Ch.18 Risk Profiling for Investors, Ch.19 Comparison of Products across Categories, Ch.20 Case Studies

> XB app pages are **not yet built** — the XB book is a `"coming-soon"` stub in `curriculum.js` with `modules: []`, and only `books/xb/index.html` exists. When building XB, mirror the XA folder/module scheme (module folders `module-07-...` … `module-12-...`, chapter folders `chapter-01` … `chapter-20`) and fill in the XB `modules` array in `curriculum.js` with marks from `00-front-matter.md`.

---

## 2. Architecture & file layout

```
index.html            Home — book cards + overall progress (NISM_ROOT = "")
dashboard.html        Stats, accuracy heatmap, target score, weak/mastered topics
books/xa/index.html   XA landing — module accordion + chapter cards, driven by curriculum
books/xb/index.html   XB landing (stub)
books/xa/module-0N-<slug>/chapter-NN/
    index.html        Lesson markup + page-specific <script> + <style>
    quiz-data.js      MCQ bank ONLY — never inline the question bank into the lesson HTML
assets/css/           design-system.css, components.css, chapter.css
assets/js/            curriculum.js, progress.js, nav.js, quiz-engine.js
README.md             How to run locally
```

### Shared JS modules (all IIFEs exposing a `window.Nism*` global)

- **`assets/js/curriculum.js`** — **single source of truth** for books → modules → chapters. Exposes `window.NISM_CURRICULUM` and `window.NismCurriculum` with helpers: `getBook(bookId)`, `flattenChapters(book)`, `findChapter(bookId, chapterId)`, `getPrevNext(bookId, chapterId)`, `totalChapterCount(book)`, and `root`. Every chapter entry has `{ id:"chNN", number, title, summary, path, status }` where `status` is `"active"` or `"coming-soon"`. Paths are built through the ROOT-relative `p()` helper — see §3.
- **`assets/js/progress.js`** — `localStorage` progress under key `nismLearnProgressV1`. Exposes `window.NismProgress`: `getChapterProgress`, `recordQuizResult(bookId, chapterId, score, total, timeMs)`, `isChapterComplete`, `chapterAccuracyPct`, `getModuleStats`, `getBookStats`, `getOverallStats`, `getTargetScore`, `setTargetScore`, `resetAll`, and constants `MASTERY_THRESHOLD` / `WEAK_THRESHOLD`.
- **`assets/js/quiz-engine.js`** — generic MCQ renderer. `window.NismQuiz.mount(container, config)`. Shuffles questions and options, renders animated results ring + full review, supports scenario panels (§5). `config.onComplete(score, total, timeMs)`.
- **`assets/js/nav.js`** — `window.NismNav`: `renderBreadcrumb(container, trail)`, `renderTopbarProgress(container, bookId)`, `renderChapterFooterNav(container, bookId, chapterId)`, `initTocScrollSpy`, plus wiring for flip cards / mini-checks / steppers / SVG a11y via `initAll()`. Auto-runs SVG accessibility on `DOMContentLoaded`.

### CSS layers (reuse existing classes; only add chapter-specific CSS in the page's own `<style>`)

- **`design-system.css`** — CSS custom-property tokens (colors incl. `--gold-600`, `--font-display`, spacing, radii), light/dark mode.
- **`components.css`** — shared components (cards, topbar, buttons, badges).
- **`chapter.css`** — lesson + quiz UI. Key classes: `.chapter-shell`, `.chapter-hero`, `.chapter-meta-row`, `.lesson-main`, `.lesson-section`, `.section-kicker`, `.section-divider`, `.toc-rail`, `.diagram-frame`, `.stepper`/`.step`/`.step-rail`/`.step-num`/`.step-line`/`.step-body`, `.flip-grid`/`.flip-card`/`.flip-card-inner`/`.flip-face`/`.flip-front`/`.flip-back`, `.mini-check`/`.mini-opt`, `.callout`/`.callout-example`/`.callout-insight`/`.callout-caution`, `.compare-table`, `.chapter-footer-nav`, `.nav-link-card`, and the quiz set `.quiz-shell`/`.quiz-card`/`.quiz-question`/`.quiz-options`/`.quiz-option`/`.quiz-scenario`/`.quiz-scenario-tag`/`.quiz-results`/`.result-ring`/`.review-list`/`.review-item`/`.review-scenario`.

---

## 3. Coding standards & conventions (must-follow)

**Path convention.** Every chapter page sets `window.NISM_ROOT` to the relative path back to the app root **before** any shared script loads:
- root `index.html` → `""`
- `books/xa/index.html` → `"../../"`
- `books/xa/.../chapter-NN/index.html` → `"../../../../"`

**`<head>` — stylesheet order** (chapter page): `design-system.css`, then `components.css`, then `chapter.css`. Include `<title>` as `Ch. N — <Title> | NISM Learn` and a real `<meta name="description">`.

**Bottom-of-body script order** (exact):
```html
<script>window.NISM_ROOT = "../../../../";</script>
<script src="../../../../assets/js/curriculum.js"></script>
<script src="../../../../assets/js/progress.js"></script>
<script src="../../../../assets/js/nav.js"></script>
<script src="../../../../assets/js/quiz-engine.js"></script>
<script src="quiz-data.js"></script>
<script> /* page bootstrap: breadcrumb, topbar progress, footer nav, card renderers, quiz mount */ </script>
```

**Quiz data file.** `quiz-data.js` assigns exactly one global: `window.NISM_CH0N_QUESTIONS = [ … ]` (zero-padded two digits, e.g. `NISM_CH07_QUESTIONS`). MCQ bank only — no lesson markup, no rendering logic.

**Topbar.** Every page's topbar carries Home / Course / Dashboard links plus a progress badge (`renderTopbarProgress`).

**Page bootstrap pattern** (in the chapter's inline script):
```js
var BOOK_ID = "xa", CHAPTER_ID = "ch10";
var book = window.NismCurriculum.getBook(BOOK_ID);
window.NismNav.renderBreadcrumb(document.getElementById("breadcrumb"), [ …trail… ]);
window.NismNav.renderTopbarProgress(document.getElementById("book-progress-badge"), BOOK_ID);
window.NismNav.renderChapterFooterNav(document.getElementById("chapter-footer-nav"), BOOK_ID, CHAPTER_ID);
// build flip decks / cards from JS arrays, wire calculators, then:
window.NismQuiz.mount(document.getElementById("quiz"), {
  questions: window.NISM_CH10_QUESTIONS,
  onComplete: function (score, total, timeMs) {
    window.NismProgress.recordQuizResult(BOOK_ID, CHAPTER_ID, score, total, timeMs);
  }
});
```

**`onComplete` contract.** Must forward **all three** args — `recordQuizResult(bookId, chapterId, score, total, timeMs)`. Dropping `timeMs`/`total` undercounts dashboard accuracy/time stats.

**Activating a chapter.** Building the page is not enough — flip that chapter's `status` from `"coming-soon"` to `"active"` in `curriculum.js`. That is what surfaces it on the book/home pages and in prev/next nav.

**Testing.** Always serve over `http://localhost` (see README; default port 8877 — use a different port if another server holds it), **never** `file://` — `localStorage` is unreliable/blocked across `file://` tabs. A launch config `nism-app` is saved in `.claude/launch.json` for Claude Code's browser preview.

---

## 4. Required interactivity for EVERY chapter (the Chapter 1 & 2 standard)

Match Ch.1/Ch.2 depth. Each chapter must include:

1. **Hero** — module/chapter badges, lede, meta row, and a "Learning objectives" checklist card matching the source's objectives. Keep meta-row counts (questions, calculators, read time) **honest** to what's actually built.
2. **TOC rail** (`.toc-rail`) with scrollspy over `.lesson-section`s (`initTocScrollSpy`).
3. **Inline mini knowledge-checks** (`.mini-check` with `.mini-opt` + `.feedback[data-correct-msg][data-wrong-msg]`) — at least one per major section.
4. **At least one custom SVG diagram with CSS animation** — draw-on-scroll lines, count-up numbers, animated bars/curves — revealed via `IntersectionObserver`.
5. **Flip / flash cards** (`.flip-card` in a `.flip-grid`, built from a JS array), including a **formula/summary flashcard deck** wherever the chapter has formulas or key terms.
6. **Interactive elements where the topic allows** — live calculators with range sliders / segmented toggles that recompute on `input`. Reproduce the workbook's worked examples exactly as the **default state**, then let the user vary inputs.
7. **Callouts** — `.callout-example` for worked examples / DYK boxes, `.callout-insight` for regulatory/key notes, `.callout-caution` for pitfalls.
8. **End-of-chapter assessment** — `NismQuiz.mount` reading `window.NISM_CH0N_QUESTIONS`, standard `onComplete`, and footer prev/next nav.

**Fact-heavy chapters with no maths** (e.g. Ch.5): the "live calculator" requirement is satisfied by other interactivity — tap-to-match widgets, animated regulator/structure SVGs, staggered-reveal flow diagrams. Keep the meta-row honest (e.g. "N learning objectives" instead of "N calculators").

---

## 5. Assessment & scenario-based questions (required)

**Maximise assessment questions**, drawn from every subsection, in original phrasing (not verbatim copies). Include **scenario / case-study questions**, not just recall MCQs — aim for a healthy share (Ch.2 had ~18 of 37).

Question shapes in `quiz-data.js`:
```js
// Standard recall
{ q, options:[...], correct, explain }
// Scenario — renders a styled case-study panel above the question (quiz flow AND review)
{ scenario:"Ravi invests ₹5,00,000 …", q:"What is …?", options:[...], correct, explain }
```
- `correct` is the index into the **original** `options` order (the engine shuffles at render).
- `q`, `scenario`, and each option render as **HTML**.
- Use realistic named-client cases with numbers the reader can actually compute; put the "why" in `explain`.

---

## 6. Content rules

- **One chapter at a time.** Do not batch-generate chapters unprompted.
- **Chapter-exact content.** Read the source `.md` fully first; use its actual examples/numbers/cases. Verify every financial and regulatory fact.
- No auth / backend / production hardening — this is a personal study tool.

---

## 7. Progress status (keep current when chapters are activated)

- **XA — COMPLETE (`status:"active"`):** Ch.1–20 (all 6 modules). Every chapter built to the standard above with `index.html` + `quiz-data.js` and activated in `curriculum.js`.
- **XB — not started:** book is a `"coming-soon"` stub with `modules: []`; only `books/xb/index.html` exists. See §1 for the module/chapter map to scaffold. **Next up: XB Ch.1 (Basics of Insurance, Module 7).**
