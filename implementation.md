# NISM Learn — Implementation State

_Living document. Update after every chapter. Lets a fresh session resume exactly where the last left off._

Last updated: 2026-08-21 (Ch.16 complete)

---

## How to resume (read this first)

1. `git log --oneline -10` and `git status` to see the latest state.
2. Read `CLAUDE.md` §7 (Progress status) + this file for the current frontier.
3. Read the **exact chapter source `.md` in full** before building (see CLAUDE.md §1 for paths).
4. Copy the structure of the most recently built chapter (currently **Ch.16**) — same `<head>` order, script order, `NISM_ROOT`, bootstrap pattern.
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
- **Ch.16 Portfolio Performance Measurement and Evaluation** — ✅ built & active (this session, 2026-08-21).
  - `index.html` + `quiz-data.js` (56 questions, ~20 scenario-based).
  - Interactive: 5 live calculators (HPR; CAGR/annualised; Alpha/Beta via CAPM; Sharpe/Treynor/Sortino; currency-adjusted return), risk-type tap-matcher, attribution tap-matcher, animated attribution SVG flow diagram, concept/revision flip decks, ratio card grid.
  - Worked-example defaults reproduce the workbook: HPR 20%; MWRR 15.15% vs TWRR 6.02%; AMR 25%/GMR 0%; gross 20% → net 13.88%; post-tax 4.25%; CAGR 6.02%; cash drag 8.5%; Jensen alpha 5%; portfolio beta 1.16; Sharpe 0.7692; Treynor 0.05 (decimal); M² 26.7% vs 28%; currency-adjusted 6.79%.
- **Ch.17–20** (Module 6: Operations, Key Regulations, Ethical Issues, Grievance Redress) — `coming-soon` stubs. **Next up: Ch.17 (Operational Aspects of Investment Management).**

### XB — Investment Adviser Level 2 (20 chapters, modules 7–12)
- Not started. Book is a `coming-soon` stub with `modules: []`; only `books/xb/index.html` exists.
- When starting XB: scaffold module folders `module-07-...`…`module-12-...`, chapter folders `chapter-01`…`chapter-20`, and fill the XB `modules` array in curriculum.js with marks from XB `00-front-matter.md`. See CLAUDE.md §1 for the module/chapter map.

---

## Decisions / notes
- Fact-heavy Ch.15 has no core maths, so the "live calculator" requirement is met by tap-to-match widgets, the BB&K quadrant, the life-cycle explorer and an illustrative net-worth calculator (net worth = assets − liabilities), per CLAUDE.md §4.
- Meta-row question count is set dynamically from `NISM_CH15_QUESTIONS.length` so it stays honest.
- Verification note: dev server / browser preview cannot be launched in unattended scheduled-task runs. Ch.15 was validated statically (structure copied from Ch.14, question bank counts checked). **When resuming interactively, serve on localhost (README, port 8877) and click through Ch.15 to confirm quiz mount, matchers, calculators and scrollspy before moving on.**

## Next steps
1. Build **Ch.17** (Operational Aspects of Investment Management) — Module 6, fact-heavy (KYC, dematerialisation, POA, documentation). Use tap-to-match / animated flow widgets to satisfy the "interactive element" requirement (no core maths).
2. Then rest of Module 6: Ch.18 (Key Regulations) → Ch.19 (Ethical Issues) → Ch.20 (Grievance Redress).
3. Then scaffold and build XB (modules 7–12).
