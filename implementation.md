# NISM Learn — Implementation State

_Living document. Update after every chapter. Lets a fresh session resume exactly where the last left off._

Last updated: 2026-08-21 (Ch.17 complete)

---

## How to resume (read this first)

1. `git log --oneline -10` and `git status` to see the latest state.
2. Read `CLAUDE.md` §7 (Progress status) + this file for the current frontier.
3. Read the **exact chapter source `.md` in full** before building (see CLAUDE.md §1 for paths).
4. Copy the structure of the most recently built chapter (currently **Ch.17**) — same `<head>` order, script order, `NISM_ROOT`, bootstrap pattern.
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
- **Ch.17 Operational Aspects of Investment Management** — ✅ built & active (this session, 2026-08-21).
  - `index.html` + `quiz-data.js` (83 questions incl. 20 scenario-based; meta-row count set dynamically from `NISM_CH17_QUESTIONS.length`).
  - Fact-heavy chapter (no core maths) → "interactive element" requirement met by 3 explorers + 4 tap-matchers + animated SVG:
    - **PAN-requirement explorer** (segmented: micro MF / micro-HUF / FD>₹50k / BSBDA / NPS Tier II / demat → PAN exempt vs required, with the ₹50,000 + individuals-only rule).
    - **Repatriation explorer** (NRE / FCNR / NRO / India-income → freely repatriable vs USD 1 million/FY).
    - **Transmission decision tree** (holding: single/joint/HUF × nomination yes/no → nominee / joint holders supersede nominee / legal heirs / new Karta).
    - Tap-matchers: KYC & identity (KRA, CERSAI/CKYCR, eSign, VIPV, IPV waiver, PwD 23 May 2025), PoA (General/Specific/India/abroad), NRI accounts (NRE/NRO/FCNR/RFC/PINS), payment instruments (ASBA/RTGS/NEFT/cheques/cash).
    - Animated **demat-flow SVG** (Investor → DP → R&T+Depository → credit; draw-on-scroll via IntersectionObserver).
    - Folio-maintenance card grid (address/name/status/lien/transmission/nomination), concept flip deck (10), revision date/threshold deck (12).
  - Key facts wired exactly to source: ASBA mandatory 1 Jan 2016; uniform KYC 1 Jan 2012; CERSAI notified 26 Nov 2015 / RI upload 1 Aug 2016; PwD circular 23 May 2025; compulsory demat >₹10cr; 12-char ISIN; physical transfer ended 1 Apr 2019; Section 6 residence test (182 / 60+365); FEMA Notification 13; NRO cap USD 1 million/FY; PINS 5%/10%/24%; simplified transmission ₹5 lakh physical / ₹15 lakh demat; MF nomination 1 Oct 2022, up to 10 (from 1 Mar 2025); RTGS ≥₹2 lakh / NEFT no min / IFSC 11-char; cash MF ≤₹50,000 (Sept 2012); SEBI (IA) Regs 2013, 5-year records; MITC (no custody, no guaranteed returns, consent per trade, advance fee ≤1 yr, one-quarter breakage, no cash, direct plans, never ask OTP/credentials); BSE StAR MF / NSE NMF II.
- **Ch.18–20** (Module 6: Key Regulations, Ethical Issues, Grievance Redress) — `coming-soon` stubs. **Next up: Ch.18 (Key Regulations).**

### XB — Investment Adviser Level 2 (20 chapters, modules 7–12)
- Not started. Book is a `coming-soon` stub with `modules: []`; only `books/xb/index.html` exists.
- When starting XB: scaffold module folders `module-07-...`…`module-12-...`, chapter folders `chapter-01`…`chapter-20`, and fill the XB `modules` array in curriculum.js with marks from XB `00-front-matter.md`. See CLAUDE.md §1 for the module/chapter map.

---

## Decisions / notes
- Fact-heavy Ch.15 has no core maths, so the "live calculator" requirement is met by tap-to-match widgets, the BB&K quadrant, the life-cycle explorer and an illustrative net-worth calculator (net worth = assets − liabilities), per CLAUDE.md §4.
- Meta-row question count is set dynamically from `NISM_CH15_QUESTIONS.length` so it stays honest.
- Verification note: dev server / browser preview cannot be launched in unattended scheduled-task runs. Ch.15 was validated statically (structure copied from Ch.14, question bank counts checked). **When resuming interactively, serve on localhost (README, port 8877) and click through Ch.15 to confirm quiz mount, matchers, calculators and scrollspy before moving on.**

## Next steps
1. Build **Ch.18** (Key Regulations) — Module 6, fact-heavy (SCRA, SEBI Act, PFUTP, Insider Trading, IA Regulations, PMLA). Use tap-to-match / animated widgets for the "interactive element" requirement (no core maths).
2. Then rest of Module 6: Ch.19 (Ethical Issues) → Ch.20 (Grievance Redress).
3. Then scaffold and build XB (modules 7–12).
