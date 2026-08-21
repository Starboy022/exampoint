# NISM Learn — Project Guide

Interactive, static HTML/CSS/JS exam-prep app for NISM certification (no build step, no framework). One home page → books (XA, XB) → modules → chapters. Each chapter is its own folder for separation of concerns.

## Architecture (see also user memory `nism_app_architecture`)

- `index.html` — home; `dashboard.html` — stats/heatmap; `books/xa/index.html` — module accordion driven by curriculum.
- `books/xa/module-0N-.../chapter-NN/` — one folder per chapter, each with **`index.html`** (lesson markup) + **`quiz-data.js`** (MCQ bank only). Never inline the question bank into the lesson HTML.
- `assets/js/curriculum.js` — **single source of truth** for books/modules/chapters. Adding a chapter = flip its `status` from `"coming-soon"` to `"active"` here.
- `assets/js/progress.js` — localStorage progress (`window.NismProgress`).
- `assets/js/quiz-engine.js` — generic MCQ renderer (`window.NismQuiz.mount`); shuffles questions/options; animated results + review. **Supports scenario questions** (see below).
- `assets/js/nav.js` — breadcrumbs, prev/next, TOC scrollspy, and wires flip cards / mini-checks / steppers via `window.NismNav.initAll()`.
- `assets/css/` — `design-system.css` (tokens, dark mode), `components.css`, `chapter.css` (lesson + quiz UI). Reuse existing classes; only add chapter-specific CSS in the page's own `<style>` block.

**Path convention:** every chapter page sets `window.NISM_ROOT = "../../../../"` **before** loading `curriculum.js`. Add Home/Course/Dashboard links to the topbar on every page.

**`onComplete` contract:** quiz `onComplete(score, total, timeMs)` must forward all three args to `NismProgress.recordQuizResult(bookId, chapterId, score, total, timeMs)`, or dashboard accuracy/time stats undercount.

**Always test over `http://localhost`** (a port ≠ 8877 if another chat's server holds it), never `file://` — localStorage is unreliable across `file://` tabs.

## Content rules (see user memory `nism_app_style_preferences`)

- **One chapter at a time.** Don't batch-generate chapters unprompted.
- **Chapter-exact content.** Read that chapter's source `.md` in `NISM-Series-X-A Investment Adviser Level 1 knowledge/` fully first; use its actual examples and numbers, not generic finance content. Verify financial/regulatory accuracy (act as senior adviser + senior dev).
- **Maximise assessment questions**, drawn from every subsection, in original phrasing.
- Personal-use app: no auth/backend/production hardening.

## Required interactivity for EVERY chapter (the Chapter 1 & 2 standard)

Match Ch.1/Ch.2's depth. Each chapter must include:

1. **Hero** — module/chapter badges, lede, meta row, and a "Learning objectives" checklist card matching the source's objectives. Keep meta-row counts (questions, calculators, read time) accurate to what's actually built.
2. **TOC rail** (`.toc-rail`) with scrollspy over `.lesson-section`s.
3. **Inline mini knowledge-checks** (`.mini-check` with `.mini-opt` + `.feedback[data-correct-msg][data-wrong-msg]`) — at least one per major section, to double-check the reader mid-lesson.
4. **At least one custom SVG diagram** with **CSS animation** (draw-on-scroll lines, count-up numbers, animated bars/curves), revealed via `IntersectionObserver`.
5. **Flip / flash cards** (`.flip-card` in a `.flip-grid`, built from a JS array) — including a **formula/summary flashcard deck** where the chapter has formulas or key terms.
6. **Interactive elements where the topic allows** — e.g. live calculators with range sliders/segmented toggles that recompute on `input`. Reproduce the workbook's worked examples exactly as the default state, then let the user vary inputs.
7. **Callouts** — `callout-example` for worked examples / DYK boxes, `callout-insight` for regulatory/key notes.
8. **End-of-chapter assessment** — `NismQuiz.mount` reading `window.NISM_CH0N_QUESTIONS`, with the standard `onComplete` handler and footer prev/next nav.

## Scenario-based questions (required)

Question generation must include **scenario / case-study questions**, not just recall MCQs. The quiz engine renders an optional `scenario` field as a styled panel above the question (in both the quiz flow and the results review). Shapes:

```js
// Standard
{ q, options:[...], correct, explain }
// Scenario — case study panel above the question
{ scenario:"Ravi invests ₹5,00,000 …", q:"What is …?", options:[...], correct, explain }
```

Aim for a healthy share of scenario questions (Ch.2 had ~18 of 37). Use realistic named-client cases with numbers the reader can compute; put the "why" in `explain`. `correct` is the index into the ORIGINAL `options` order (the engine shuffles). `q`/`scenario`/options render as HTML.

## Progress tracking

- **Written (`status:"active"`):** all of Module 1 — Ch.1 (Intro to Personal Financial Planning), Ch.2 (Time Value of Money), Ch.3 (Evaluating the Financial Position of Clients), Ch.4 (Debt Management and Loans); all of Module 2 — Ch.5 (Introduction to the Indian Financial Markets), Ch.6 (Securities Market Segments).
- **Remaining:** Modules 3–6 chapters (Ch.7–20) are `"coming-soon"` stubs in `curriculum.js` with correct titles/paths — build following this standard, then flip status. Next up is Module 3 Ch.7 (Introduction to Investment).
- **Note for fact-heavy chapters with no maths (like Ch.5):** the "live calculator" requirement is satisfied by other interactive elements — tap-to-match widgets, animated regulator/structure SVGs, staggered-reveal flow diagrams — since there are no worked calculations. Keep the meta-row honest (e.g. "N learning objectives" instead of "N calculators").
