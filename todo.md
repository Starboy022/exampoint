# NISM Learn — TODO

_Task tracker. Used to resume mid-stream. Keep in sync with `implementation.md`._

## In progress
- (none — XB Ch.2 complete → **XB: Ch.1 & Ch.2 built**)
- [x] **Master Cheat Sheet** — `cheatsheet.html` + `assets/js/cheatsheet-data.js` (all XA Ch.1–20; By-Chapter/By-Category toggle; 5 flagship calculators: TVM, EMI, personal-finance ratios, bond yield/duration, risk-adjusted ratios; flip-reveal + shuffle revision cards). Nav link wired on all 24 pages. Built 2026-08-22.

## Up next (in order)
- [ ] **XB Ch.3** — Non-Life Insurance Products (Module 7). Build to standard, activate in curriculum.js, append cheatsheet-data.js block.
- [ ] **XB Ch.4–20** — build chapter-by-chapter (one per session), scaffolding each chapter folder as you go.

## Done
- [x] XA Ch.1–14 (pre-existing)
- [x] **XA Ch.15** — Portfolio Construction Process (built + activated 2026-08-21; 70-question bank incl. 10 scenarios)
- [x] **XA Ch.16** — Portfolio Performance Measurement and Evaluation (built + activated 2026-08-21; 56-question bank incl. ~20 scenarios; 5 live calculators)
- [x] **XA Ch.17** — Operational Aspects of Investment Management (built + activated 2026-08-21; 83-question bank incl. 20 scenarios; 3 explorers + 4 tap-matchers + animated demat-flow SVG)
- [x] **XA Ch.18** — Key Regulations (built + activated 2026-08-22; 97-question bank incl. 16 scenarios; 2 live calculators [15EB penalty, 300/₹3cr transition] + exemption explorer + 3 tap-matchers + animated regulatory-hierarchy SVG)
- [x] **XA Ch.19** — Ethical Issues (built + activated 2026-08-22; 68-question bank incl. 18 scenarios; dilemma-resolution explorer + Do/Don't sorter + 2 tap-matchers [grievance areas, SEC Code of Ethics] + animated law→ethics→trust SVG)
- [x] **XA Ch.20** — Grievance Redress Mechanism (built + activated 2026-08-22; 56-question bank incl. 12 scenarios; route-my-grievance explorer + "In SCORES?" sorter + 2 tap-matchers [robust-system features, forum→authority] + animated escalation-ladder SVG). **Completes XA — all 20 chapters active.**
- [x] **XB Ch.2** — Life Insurance Products (Module 7). Built + activated 2026-08-22; 62-question bank incl. 14 scenarios; 4 live calculators (paid-up ₹2,00,000, HLV ₹2,10,04,210, need-based ₹1,26,43,984, inherent-return RATE 4.61%/5%) + 2 tap-matchers (product types, riders) + animated premium-comparison SVG; 24 flip cards, 8 mini-checks. Activated ch02 in curriculum.js, appended cheatsheet-data.js Module 7 / ch02 block. Fixed slider default snapping (rate FV, need-based deduction max).
- [x] **XB book launch + Ch.1** — Basics of Insurance (Module 7). Filled XB `modules` array in curriculum.js (6 modules / 20 chapters, marks M7=25/M8=30/M9=20/M10=20/M11=10/M12=45), rewrote `books/xb/index.html` from stub to data-driven landing, built chapter-01 to standard (72-question bank incl. ~15 scenarios; 3 calculators [deductible+co-pay ₹35,100, contribution ₹15,000×2, risk-pool ₹20,000] + 3 tap-matchers [insurable-risk 7 tests, claim concepts, broker/agent] + indemnity/benefit sorter + animated risk-pooling SVG), activated ch01 in curriculum.js, appended cheatsheet-data.js xb block. Built + verified 2026-08-22.
- [x] Created `implementation.md` and `todo.md` tracking files

## Reminders
- One chapter per session; read the source `.md` in full first (CLAUDE.md §1, §6).
- **Every chapter build must also update `assets/js/cheatsheet-data.js`** with that chapter's formulas/ratios/years/acronyms/tax sections+rules (chapter-exact). Required step, same as flipping curriculum.js to `"active"`.
- Serve on localhost, never `file://`. Verify interactively when possible (dev server blocked in unattended runs).
- Commit after each chapter.
