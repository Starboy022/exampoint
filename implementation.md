# NISM Learn — Implementation State

_Living document. Update after every chapter. Lets a fresh session resume exactly where the last left off._

Last updated: 2026-08-22 (Ch.19 complete)

---

## How to resume (read this first)

1. `git log --oneline -10` and `git status` to see the latest state.
2. Read `CLAUDE.md` §7 (Progress status) + this file for the current frontier.
3. Read the **exact chapter source `.md` in full** before building (see CLAUDE.md §1 for paths).
4. Copy the structure of the most recently built chapter (currently **Ch.19**) — same `<head>` order, script order, `NISM_ROOT`, bootstrap pattern.
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
- **Ch.18 Key Regulations** — ✅ built & active (this session, 2026-08-22).
  - `index.html` + `quiz-data.js` (97 questions incl. 16 scenario-based; meta-row count set dynamically from `NISM_CH18_QUESTIONS.length`).
  - Regulation-heavy chapter → "interactive element" requirement met by 2 live calculators + 1 explorer + 3 tap-matchers + animated SVG:
    - **Regulation 15EB penalty calculator** (days slider → penalty = max ₹1 lakh, ₹1 lakh/day, capped at ₹1 crore; cap bites at 100 days).
    - **Individual → non-individual transition calculator** (clients slider + fee slider → breach when clients > 300 OR FY fees > ₹3 crore, whichever earlier; in-principle registration valid 3 months).
    - **"Is IA registration required?" explorer** (segmented: insurance agent / pension advisor / MF distributor / CA-advocate / general commentary / clients-outside-India → exempt; NRI-PIO / personalised paid advice → required).
    - Tap-matchers: regulator→domain (SEBI/RBI/IRDAI/PFRDA), adviser obligations (fiduciary+15-day / risk profiling / suitability / disclosures / 5-yr records / segregation / implementation / fees), other acts (FEMA/Contract/Guardian&Wards/NI/IBC/FATCA-CRS).
    - Animated **regulatory-hierarchy SVG** (SCRA+SEBI Act → SEBI → PFUTP/Intermediaries/Insider Trading; draw-on-scroll + pop-in via IntersectionObserver).
    - Concept flip deck (10), revision date/threshold deck (12), IA-definitions card grid (6), 11 mini-checks.
  - Key facts wired exactly to source: SCRA 1956 (exchanges/contracts/listing); SEBI Act 1992 functions; PFUTP 2003 (fraud = act/omission to induce dealing, wrongful gain inconsequential; 5 instances); Intermediaries Regs 2008 code of conduct; Insider Trading 2015 (insider = connected person OR access to UPSI); IA Regs 2013 — investment advice incl. financial planning, excl. mass-media & trading calls; registration valid till suspended/cancelled; Reg 7 qualification (PG/NISM PGP-IA/CFA) + NISM certification; exemptions incl. NRI/PIO carve-out; 300-client/₹3-crore transition; part-time 75-client cap; deposit lien for ODR; fiduciary + 15-day own-account rule (24h revised assessment); risk profiling (no double negatives/leading questions); suitability; disclosures; 5-year records + yearly CA/CS/CMA audit; group-level advisory/distribution segregation; implementation only via direct plans (no commission/implementation fee); advance fee ≤1 year (individual & HUF non-accredited only); Third Schedule code of conduct; Investor Charter (SEBI circular 2 Jun 2025, complaint disclosure by 7th of succeeding month, don't give funds/credentials); BSE Administration & Supervision Ltd (parent exchange ≥15 yrs, ≥₹200 cr net-worth, ISCs ≥20 cities); Reg 15EB penalty (₹1 lakh min, ₹1 lakh/day, ₹1 crore cap); SEBI (IFSC) Guidelines 2015 (27 Mar 2015); PMLA 2002 Sec 3/12/12AA (5-yr records, Aadhaar EDD); SEBI AML/CFT (FATF-aligned) + KRA Regs 2011; FEMA 1999 (FPI <10%); Indian Contract Act 1872 (Sec 2(h) 'agreement enforceable by law'); Guardian & Wards Act 1890 (minor <18); NI Act 1881 (note=undertaking, bill=order, cheque=bill on banker); IBC 2016 (five parts); FATCA/CRS (KRA upload 1 Jul 2024, Form 61B); 18.9 case studies (unregistered IA; forged experience certificate → restraint + cancellation).
- **Ch.19 Ethical Issues** — ✅ built & active (this session, 2026-08-22).
  - `index.html` + `quiz-data.js` (68 questions incl. 18 scenario-based; meta-row count set dynamically from `NISM_CH19_QUESTIONS.length`).
  - Principles/ethics chapter (no maths) → "interactive element" requirement met by a dilemma explorer + Do/Don't sorter + 2 tap-matchers + animated SVG:
    - **Ethical-dilemma resolution explorer** (segmented: unneeded-service / sign-up-many / personal-vs-professional-values [term vs ULIP] / underperformer-push / aggressive-to-elderly → shows the dilemma type + ethically correct resolution).
    - **SEBI "Do or Don't?" sorter** (12 statements, self-checking with running score; advance on any button).
    - Tap-matchers: the 6 grievance areas → workbook examples (small-cap for seniors / arbitrage-as-liquid / small-cap rally / churning / distress-debt AIF / poor aftersales); the SEC Code of Ethics 7 elements (a–g).
    - Animated **law→ethics→trust SVG** (legal floor → ethics above → trust crown, "years to build, moments to lose"; rise/draw/pop via IntersectionObserver).
    - Fiduciary-obligation card grid (6), concept flip deck (9), key-terms revision deck (12), 8 mini-checks.
  - Key facts wired exactly to source: ethics = moral principles guiding behaviour affecting others, from Greek 'ethos' (custom/habit/character); fundamental principles honesty/fairness/diligence/care/respect; law is only the floor, ethics goes a step beyond; Client First = no conflict of interest; trust "years to build, moments to lose"; Zig Ziglar quote; 6 grievance areas with examples; ethical dilemma = two alternatives neither superior; pure dilemma = both violate a principle; personal-vs-professional values (term vs ULIP/whole-life); resolution via deeper analysis / most-good-or-least-damage / reframing; finfluencers & justification imperative; fiduciary = act in best interest, uberrimae fidei (utmost good faith), no profit at client's cost, full disclosure (incl. perceived conflicts), suitable advice, reasonable/objective basis, proper execution; SEBI Do's (10) & Don'ts (9) — pay only advisory fees via banking channels, risk profiling, written signed/stamped T&C, don't give money to IA, don't fall for assured returns/gifts/follower counts; yearly compliance audit by a Practising CA, disclose material observations; SEC (US) — disclose financial condition + disciplinary events within 10 years, written code of ethics (7 elements a–g incl. IPO/limited-offering pre-approval, quarterly personal-trade reports to CCO); Australia — competence/honesty/integrity/fairness, bans/disqualification, Section 961B Corporations Act 2001 'best interests' standard.
- **Ch.20** (Module 6: Grievance Redress Mechanism) — `coming-soon` stub. **Next up: Ch.20 (Grievance Redress Mechanism) — the final XA chapter.**

### XB — Investment Adviser Level 2 (20 chapters, modules 7–12)
- Not started. Book is a `coming-soon` stub with `modules: []`; only `books/xb/index.html` exists.
- When starting XB: scaffold module folders `module-07-...`…`module-12-...`, chapter folders `chapter-01`…`chapter-20`, and fill the XB `modules` array in curriculum.js with marks from XB `00-front-matter.md`. See CLAUDE.md §1 for the module/chapter map.

---

## Decisions / notes
- Fact-heavy Ch.15 has no core maths, so the "live calculator" requirement is met by tap-to-match widgets, the BB&K quadrant, the life-cycle explorer and an illustrative net-worth calculator (net worth = assets − liabilities), per CLAUDE.md §4.
- Meta-row question count is set dynamically from `NISM_CH15_QUESTIONS.length` so it stays honest.
- Verification note: dev server / browser preview cannot be launched in unattended scheduled-task runs. Ch.15 was validated statically (structure copied from Ch.14, question bank counts checked). **When resuming interactively, serve on localhost (README, port 8877) and click through Ch.15 to confirm quiz mount, matchers, calculators and scrollspy before moving on.**

## Next steps
1. Build **Ch.20** (Grievance Redress Mechanism) — the **last XA chapter**. Read `chapter-20-*.md` in full first; grievance redress across capital markets, banking, insurance and pensions (likely SCORES, Online Dispute Resolution/ODR, ombudsman schemes, SEBI/RBI/IRDAI/PFRDA channels). Process-heavy → use decision-tree/route explorers, animated escalation-flow SVG, tap-matchers for the "interactive element".
2. After Ch.20, XA (all 20 chapters) is complete — update CLAUDE.md §7 progress status.
3. Then scaffold and build XB (modules 7–12): create module folders `module-07-...`…`module-12-...`, chapter folders `chapter-01`…`chapter-20`, fill the XB `modules` array in curriculum.js from XB `00-front-matter.md`, and build chapter-by-chapter.
