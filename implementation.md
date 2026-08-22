# NISM Learn — Implementation State

_Living document. Update after every chapter. Lets a fresh session resume exactly where the last left off._

Last updated: 2026-08-22 (**XB Ch.2 Life Insurance Products built & active**; XB Ch.1 done; XA fully built; master Cheat Sheet covers XA + XB Ch.1–2)

---

## How to resume (read this first)

1. `git log --oneline -10` and `git status` to see the latest state.
2. Read `CLAUDE.md` §7 (Progress status) + this file for the current frontier.
3. Read the **exact chapter source `.md` in full** before building (see CLAUDE.md §1 for paths).
4. Copy the structure of the most recently built chapter (currently **XB Ch.2** at `books/xb/module-07-.../chapter-02/`; the next frontier is **XB Ch.3**) — same `<head>` order, script order, `NISM_ROOT`, bootstrap pattern.
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
- [ ] **Append/refresh the chapter's block in `assets/js/cheatsheet-data.js`** (formulas/ratios/years/acronyms/tax sections+rules, chapter-exact; add a flagship calculator only for high-value math)

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
- **Ch.20 Grievance Redress Mechanism** — ✅ built & active (this session, 2026-08-22). **Final XA chapter — XA is now fully built (all 20 chapters active).**
  - `index.html` + `quiz-data.js` (56 questions incl. 12 scenario-based; meta-row count set dynamically from `NISM_CH20_QUESTIONS.length`).
  - Process/routing-heavy chapter (no maths) → "interactive element" requirement met by a route explorer + "In SCORES?" sorter + 2 tap-matchers + animated SVG:
    - **"Route my grievance" explorer** (segmented: capital market / IA / banking / insurance / NPS / MF-pension / insurance-pension / NBFC-deposit / unlisted-company deposit → shows regulator + the full escalation chain: provider → regulator/portal → ombudsman/tribunal → courts).
    - **"In SCORES, or not?" sorter** (10 statements, self-checking with running score) — separates documented complaints vs SEBI/SCORES exclusions (trading-price dissatisfaction, no docs, illiquidity, private agreement, delisted/sick company, sub-judice).
    - Tap-matchers: the 7 robust-system features (source/date/nature/internal-vs-escalate/status-ATR/ageing/escalation); forum→authority (SCORES→SEBI, Banking Ombudsman & BCSBI→RBI, Insurance Ombudsman→Govt of India, IGMS→IRDAI, CRA/NPS Trust→PFRDA, SAT→appeals vs SEBI/IRDAI/PFRDA).
    - Animated **escalation-ladder SVG** (4 rungs bottom-to-top: provider → regulator/portal → ombudsman/tribunal → courts; draw-on-scroll + pop-in via IntersectionObserver).
    - Insurance grounds/resolution + SAT Section 15T/15U two-col cards, other-fora card grid (2), concept flip deck (9), timelines/facts revision deck (12), 10 mini-checks.
  - Key facts wired exactly to source: Consumer Protection Act 1986 (consumer = buys goods/avails services for consideration, excl. resale/commercial purpose); first approach provider → then regulator; robust-system 7 features (source under SEBI Act/SCRA/Depositories Act/Companies Act 2013; date/time; nature/frivolous; internal-vs-escalate; status/ATR; ageing report; escalation); IA system SEBI-mandated (display Compliance Officer + CEO/Partner/Proprietor name/address/email/phone; escalate to SEBI via SCORES); capital market — participant → SCORES → ODR portal (within law of limitation from issue/last/disputed transaction, whichever later); SCORES = SEBI online redressal for all its products/entities; SCORES exclusions (incomplete/non-specific, no docs, guidance-seeking, non-trading/illiquidity, trading-price dissatisfaction, non-listing of private offer, private-agreement disputes); SEBI won't deal with unlisted/delisted/wound-up/liquidated/sick, sub-judice, other-regulator purview; ATR within stipulated time; banking — RBI set up BCSBI ("Code of Banks' Commitments to Customers"), three-tier Branch→Zonal→GM-Customer Service, Integrated Ombudsman (RBI-appointed, credit cards of banks & NBFCs, approach after 1 month, award if no settlement in 1 month), CPGRAMS www.pgportal.gov.in; insurance — Insurance Ombudsman appointed by Govt of India under Redressal of Public Grievance Rules 1998, grounds (repudiation/premium/legal construction/delay/non-issue of document), recommendation within 1 month (mutual mediation), speaking Award within 3 months, acceptance within 1 month, IRDAI via IGMS, then courts/CPA 1986; pension — MF→SEBI/SCORES, insurance→IRDAI, NPS CRA = NSDL e-Governance Infrastructure Ltd (appointed by PFRDA), GRO at Mumbai HO, escalate to NPS Trust after 30 days (PFRDA Redressal of Subscriber Grievance Regulations 2015, responds in 30 days), then Ombudsman; SAT — Section 15U (not bound by CPC, natural justice, civil-court powers, judicial proceeding under IPC), Section 15T (appeal vs SEBI Board/adjudicating officer/IRDAI/PFRDA within 45 days), Supreme Court within 60 days; other fora — NBFC deposit non-repayment → NCLT or Consumer forum, company deposits/unlisted-company bonds & debentures → Ministry of Company Affairs website.

### XB — Investment Adviser Level 2 (20 chapters, modules 7–12)
- **Launched (2026-08-22).** XB book flipped to `status:"active"` in curriculum.js with the full 6-module / 20-chapter `modules` array; `totalMarks:150`, `passPercent:60`; module marks **M7=25, M8=30, M9=20, M10=20, M11=10, M12=45** (from XB `00-front-matter.md`). XB chapters restart numbering at 1 (modules continue 7–12). `books/xb/index.html` rewritten from the stub into a data-driven landing page (mirrors `books/xa/index.html`, `getBook("xb")`, MODULE_COLORS bar/legend/accordion). Only `ch01` is `"active"`; the other 19 are `"coming-soon"`.
- **Ch.1 Basics of Insurance (Module 7)** — ✅ built & active (2026-08-22). **First XB chapter.**
  - `index.html` + `quiz-data.js` (72 questions incl. ~15 scenario-based; meta-row count set dynamically from `NISM_CH01_QUESTIONS.length`). `BOOK_ID="xb"`, `CHAPTER_ID="ch01"`, `NISM_ROOT="../../../../"`, quiz global `window.NISM_CH01_QUESTIONS`.
  - Interactive: **3 live calculators** reproducing workbook defaults — deductible+co-pay (₹40k claim, ₹1,000 ded + 10% co-pay → **₹35,100**; Policy 2 ₹5,000 ded → ₹35,000), contribution (two ₹5-lakh policies, ₹30k loss → **₹15,000 each**), risk-pool premium (100 merchants, ₹10,00,000/ship, 2 lost → **₹20,000**; drop to 40 payers → ₹50,000). Plus **3 tap-matchers** (insurable-risk 7 tests, claim-side concepts, broker/agent/corporate-agent), an **indemnity vs defined-benefit sorter**, an **animated risk-pooling SVG** (IntersectionObserver draw-on-reveal), and concept + revision (dates/sections) flip decks.
  - Content is chapter-exact: merchant-ships & King's-employees examples, 7 insurable-risk tests, utmost good faith + insurable interest, indemnity/benefit, subrogation, contribution, co-pay/deductible, cashless, nominee vs beneficial nominee **Sec 39(7)** (Feb 2015), **Sec 45** 3-year rule, **5-year** health moratorium, insurance-before-investment, investing-through-insurance (₹20,20,000 "premium back"), 5 planning steps, and regulations (health standardisation + **GST exemption 22 Sep 2025**, ULIP 4%/8% + 5-yr lock-in, broker/agent/corporate-agent 3+3+3, bancassurance, SEBI (IA) 2013 carve-out).
  - Cheat sheet: appended `xb` book → Module 7 → `ch01` block to `cheatsheet-data.js` (26 items across formula/ratio/year/acronym/taxrule). No new flagship calculator added (insurance math is chapter-specific and covered inline).
  - Verified on localhost:8877 (0 console errors; calculators show ₹35,100 / ₹15,000×2 / ₹20,000; 72 quiz Qs; footer next = disabled coming-soon Ch.2; XB landing & home card active; cheat sheet shows Basics of Insurance items). Screenshot capture unavailable in this environment.
- **Ch.2 Life Insurance Products (Module 7)** — ✅ built & active (2026-08-22).
  - `index.html` + `quiz-data.js` (**62 questions incl. 14 scenario-based**). `BOOK_ID="xb"`, `CHAPTER_ID="ch02"`, `NISM_ROOT="../../../../"`, quiz global `window.NISM_CH02_QUESTIONS`.
  - Interactive: **4 live calculators** reproducing workbook defaults — **paid-up SA** (Surinder ₹10L SA, 10/50 premiums → **₹2,00,000**), **HLV** (₹10L income, age 33→60, 8%/6% → **₹2,10,04,210**, ordinary-annuity PV at 1.89% adjusted rate), **need-based** (Anil ₹9,96,000/31yr annuity-due + ₹40L loan − ₹1.5cr cover/investments → **₹1,26,43,984**; rate rounded to 1.89% to match the workbook's `PV(1.89%,…)`), **inherent return** (Excel RATE via bisection: ROP extra ₹8,057→₹5,24,190 = **4.61%**; endowment extra ₹3,06,916→₹2,14,00,000 = **5%**). Plus **2 tap-matchers** (product types term/ROP/endowment/whole-life/ULIP/mortgage; riders), an **animated premium-comparison SVG** (term ₹9,416 / ROP ₹17,473 / endowment ₹3,16,332, grow-bar on reveal), 24 flip cards (concept + revision), 8 mini-checks.
  - Content is chapter-exact: elements (death cover/survival benefit, min SA 10×/7×/5×, bonus types, surrender 30%→90%, paid-up, ULIP discontinuance ₹6,000/5-yr lock-in), HLV & need-based analysis (HLV ≥ need-based), product types + Mr Jeevan term+MF vs ULIP case, riders, mortgage insurance, loan/assignment facilities, **MWPA 1874** (spouse/children only, unchangeable post-divorce, creditor shield), telescopic premiums (₹8cr → 4×₹2cr), tax rules (**ULIP >₹2.5L premium on/after 01.02.2021 → capital gains**; **traditional >₹5L on/after 1 Apr 2023 → income from other sources**), LRS USD 2,50,000 for foreign policies, **GST exemption 22 Sep 2025**.
  - Cheat sheet: appended Module 7 → `ch02` block to `cheatsheet-data.js` (26 items across formula/ratio/year/acronym/taxrule); HLV item linked to the `tvm` flagship calc.
  - Fixed two slider-default snapping bugs found in verification: rate FV slider `step` 10000→10 (so ₹5,24,190 default is reachable → 4.61%, not ₹5,20,000 → 4.57%), and need-based deduction slider `max` 1cr→3cr (so the ₹1.5cr default isn't clamped → additional cover ₹1,26,43,984, not ₹1,76,43,984).
  - Verified on localhost:8877 (0 console errors; all 4 calculators show workbook defaults ₹2,00,000 / ₹2,10,04,210 / ₹1,26,43,984 / 4.61%; 62 quiz Qs; footer prev = Ch.1, next = disabled coming-soon Ch.3; XB landing shows Ch.2 clickable; cheat sheet shows Life Insurance Products items). Screenshot capture unavailable in this environment.
- **Remaining:** Ch.3–20 (build one per session; scaffold each `chapter-NN/` folder as you go). **Next up: XB Ch.3 (Non-Life Insurance Products, Module 7).**

### Master Cheat Sheet — ✅ built (2026-08-22, covers all of XA)
- **Files:** `cheatsheet.html` (root-level standalone page, peer to Home/Dashboard) + `assets/js/cheatsheet-data.js` (single source of truth, mirrors curriculum.js chapter order).
- **Coverage:** every high-value formula, ratio, year, acronym/abbreviation, tax section, and tax rule across XA Ch.1–20 (all 6 modules). Item shape `{ cat, term, expr, note, calc? }`, `cat` ∈ formula|ratio|year|acronym|taxsection|taxrule; term/expr/note render as HTML.
- **Two views (toggle):** By-Chapter and By-Category, with search + category chips (sticky controls).
- **5 flagship live calculators** (slider-driven, workbook-example defaults): `tvm` (time value of money), `emi` (loan EMI), `ratios` (personal-finance ratios), `bond` (bond yield/duration), `riskratio` (Sharpe/Treynor/Sortino — defaults Rp 10.5% / Rf 5.5% / σ 6.5% / β 1.00 / semi 4.5% → Sharpe 0.7692, Treynor 0.05, matching Ch.16). CALCS registry + `CALC_ORDER = ["tvm","emi","ratios","bond","riskratio"]`; `window.NismCheatsheetPage = { selectCalc, CALCS, CALC_ORDER }`. Non-math items are flip-to-reveal + shuffle revision cards.
- **Nav:** "Cheat Sheet" topbar link (`.nav-link`) wired on all 24 pages (index, dashboard, both book indexes, all 20 XA chapters) with per-file relative prefix.
- **Maintenance rule (user-requested, standing):** every future chapter build/update must append/refresh its block in `cheatsheet-data.js` — now part of the per-chapter checklist above. Recorded in memory (`cheatsheet-maintenance`), todo.md, and CLAUDE.md §4.

---

## Decisions / notes
- Fact-heavy Ch.15 has no core maths, so the "live calculator" requirement is met by tap-to-match widgets, the BB&K quadrant, the life-cycle explorer and an illustrative net-worth calculator (net worth = assets − liabilities), per CLAUDE.md §4.
- Meta-row question count is set dynamically from `NISM_CH15_QUESTIONS.length` so it stays honest.
- Verification note: dev server / browser preview cannot be launched in unattended scheduled-task runs. Ch.15 was validated statically (structure copied from Ch.14, question bank counts checked). **When resuming interactively, serve on localhost (README, port 8877) and click through Ch.15 to confirm quiz mount, matchers, calculators and scrollspy before moving on.**

## Next steps
1. **XA complete; XB Ch.1 & Ch.2 built & active.** (CLAUDE.md §7 progress status updated.)
2. Build **XB Ch.3 (Non-Life Insurance Products, Module 7)**: read `.../module-07-.../chapter-03-non-life-insurance-products.md` in full, scaffold `books/xb/module-07-.../chapter-03/`, build `index.html` + `quiz-data.js` (global `NISM_CH03_QUESTIONS`) to the §4/§5 standard copying the XB Ch.2 structure, flip `ch03` to `"active"` in curriculum.js, append its block to `cheatsheet-data.js`, verify on localhost, then commit.
3. Continue XB Ch.4–20 one per session, scaffolding each chapter folder as you go.
