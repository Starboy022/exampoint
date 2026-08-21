# NISM Learn — Implementation State

_Living document. Update after every chapter. Lets a fresh session resume exactly where the last left off._

Last updated: 2026-08-21

---

## How to resume (read this first)

1. `git log --oneline -10` and `git status` to see the latest state.
2. Read `CLAUDE.md` §7 (Progress status) + this file for the current frontier.
3. Read the **exact chapter source `.md` in full** before building (see CLAUDE.md §1 for paths).
4. Copy the structure of the most recently built chapter (currently **Ch.15**) — same `<head>` order, script order, `NISM_ROOT`, bootstrap pattern.
5. Build `index.html` + `quiz-data.js`, then flip `status` to `"active"` in `assets/js/curriculum.js`.
6. Update this file + `todo.md`, then commit.

## Build standard (per CLAUDE.md §4/§5) — checklist per chapter

- [ ] Hero with module/chapter badges, lede, honest meta-row, learning-objectives checklist
- [ ] TOC rail with scrollspy over `.lesson-section`s
- [ ] ≥1 inline mini knowledge-check per major section
- [ ] ≥1 custom animated SVG diagram (IntersectionObserver reveal)
- [ ] Flip/flash cards incl. a formula/summary deck
- [ ] Interactive element (live calculator OR tap-to-match / animated widgets for fact-heavy chapters)
- [ ] Callouts (example / insight / caution)
- [ ] End-of-chapter assessment via `NismQuiz.mount` reading `window.NISM_CHNN_QUESTIONS`, incl. scenario questions
- [ ] `onComplete` forwards all three args to `recordQuizResult`
- [ ] Footer prev/next nav
- [ ] Flip `status` to `"active"` in curriculum.js

---

## Progress

### XA — Investment Adviser Level 1 (20 chapters)
- **Ch.1–14** — built & active (pre-existing).
- **Ch.15 Portfolio Construction Process** — ✅ built & active (this session, 2026-08-21).
  - `index.html` + `quiz-data.js` (70 questions incl. 10 scenario-based).
  - Interactive: correlation/ESG/goal/benchmark tap-matchers, 5-step process stepper, IPS-purpose & liquidity card grids, net-worth live calculator, BB&K psychographic quadrant, life-cycle explorer (age slider → phase + moving dot on animated net-worth curve), animated SAA-vs-TAA SVG, principle/concept/revision flip decks.
- **Ch.16 Portfolio Performance Measurement and Evaluation** — ⏭️ NEXT. `coming-soon` stub in curriculum. Source: `NISM-Series-X-A .../module-05-.../chapter-16-portfolio-performance-measurement-and-evaluation.md`. Note the Module 5 `sample-questions.md` includes a Sharpe-ratio question (SD of return in denominator) relevant here.
- **Ch.17–20** (Module 6: Operations, Key Regulations, Ethical Issues, Grievance Redress) — `coming-soon` stubs.

### XB — Investment Adviser Level 2 (20 chapters, modules 7–12)
- Not started. Book is a `coming-soon` stub with `modules: []`; only `books/xb/index.html` exists.
- When starting XB: scaffold module folders `module-07-...`…`module-12-...`, chapter folders `chapter-01`…`chapter-20`, and fill the XB `modules` array in curriculum.js with marks from XB `00-front-matter.md`. See CLAUDE.md §1 for the module/chapter map.

---

## Decisions / notes
- Fact-heavy Ch.15 has no core maths, so the "live calculator" requirement is met by tap-to-match widgets, the BB&K quadrant, the life-cycle explorer and an illustrative net-worth calculator (net worth = assets − liabilities), per CLAUDE.md §4.
- Meta-row question count is set dynamically from `NISM_CH15_QUESTIONS.length` so it stays honest.
- Verification note: dev server / browser preview cannot be launched in unattended scheduled-task runs. Ch.15 was validated statically (structure copied from Ch.14, question bank counts checked). **When resuming interactively, serve on localhost (README, port 8877) and click through Ch.15 to confirm quiz mount, matchers, calculators and scrollspy before moving on.**

## Next steps
1. Build **Ch.16** (Portfolio Performance Measurement and Evaluation) — likely maths-heavy (Sharpe, Treynor, Jensen's alpha, information ratio, return measures). Include live calculators for the performance ratios.
2. Then Module 6: Ch.17 → Ch.18 → Ch.19 → Ch.20.
3. Then scaffold and build XB (modules 7–12).
