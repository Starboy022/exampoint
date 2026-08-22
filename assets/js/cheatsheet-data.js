/* ==========================================================================
   NISM Learn — Cheat Sheet data
   Single source of truth for exam-critical quick-reference items pulled from
   every chapter: formulas, ratios, years/dates, acronyms, tax sections and
   tax rules. Drives cheatsheet.html (By-Chapter and By-Category views,
   global search, category filters and flagship calculators).

   HOW TO EXTEND (do this for every new chapter you build):
     1. Find the book -> module -> chapter block below (add the module/chapter
        if it does not exist yet; keep numbers matching curriculum.js).
     2. Append cheat items to that chapter's `items` array.
     3. Each item: { cat, term, expr, note }
          cat  : one of CATS keys -> "formula" | "ratio" | "year" |
                 "acronym" | "taxsection" | "taxrule"
          term : the name / abbreviation / label (plain-ish HTML)
          expr : the formula, expansion, value or rule text (HTML allowed:
                 <sup>, <sub>, ×, ÷, ₹, →, etc.)
          note : optional one-line context / benchmark / worked figure
          calc : (optional) key of a flagship calculator in cheatsheet.html
                 to surface a "Try it" button -> "tvm" | "emi" | "ratios" |
                 "bond" | "riskratio"
     4. Chapter path/title come from curriculum.js (findChapter) — no need to
        duplicate the URL here.
   ========================================================================== */

(function () {
  var CS = {
    // Category metadata — order controls the filter-chip order in the UI.
    cats: [
      { key: "formula",    label: "Formulas",     short: "Formula",     accent: "gold" },
      { key: "ratio",      label: "Ratios",       short: "Ratio",       accent: "teal" },
      { key: "year",       label: "Years & Dates", short: "Year",       accent: "navy" },
      { key: "acronym",    label: "Acronyms",     short: "Acronym",     accent: "slate" },
      { key: "taxsection", label: "Tax Sections", short: "Tax §",       accent: "green" },
      { key: "taxrule",    label: "Tax Rules",    short: "Tax rule",    accent: "red" }
    ],

    books: [
      {
        id: "xa",
        code: "NISM-Series-X-A",
        title: "Investment Adviser (Level 1)",
        modules: [
          /* ============================ MODULE 1 ============================ */
          {
            number: 1,
            title: "Personal Financial Planning",
            chapters: [
              {
                id: "ch01", number: 1,
                title: "Introduction to Personal Financial Planning",
                items: [
                  { cat: "formula", term: "Net Worth", expr: "Net Worth = Total Assets &minus; Total Liabilities", note: "Core measure of financial well-being; track it periodically." },
                  { cat: "formula", term: "Save-first rule", expr: "Income &minus; Savings = Expenses", note: "Prefer this over Income &minus; Expenses = Savings — pay yourself first." },
                  { cat: "acronym", term: "SMART goals", expr: "Specific, Measurable, Achievable, Relevant, Time-bound", note: "Framework for setting valid financial goals." },
                  { cat: "acronym", term: "IA", expr: "Investment Adviser", note: "Must be registered with SEBI to give advice for consideration." },
                  { cat: "acronym", term: "SIP", expr: "Systematic Investment Plan", note: "Automated periodic investing; helps prioritise investment expenditure." },
                  { cat: "acronym", term: "PF", expr: "Provident Fund", note: "Employer + employee contribution counts as savings." },
                  { cat: "year", term: "6-step planning process", expr: "1 Establish relationship &rarr; 2 Gather data/goals &rarr; 3 Analyse status &rarr; 4 Develop plan &rarr; 5 Implement &rarr; 6 Monitor", note: "The financial planning process, in order." },
                  { cat: "taxrule", term: "Tax efficiency is secondary", expr: "Use post-tax return to compare products, but never let tax drive the decision", note: "Basis = client's requirement & risk appetite; tax is guidance/awareness only." },
                  { cat: "taxrule", term: "IA cannot do both roles", expr: "Individual IA must register as EITHER adviser OR distributor — not both", note: "Non-individual IAs need arm's-length client-level segregation." }
                ]
              },
              {
                id: "ch02", number: 2,
                title: "Time Value of Money",
                items: [
                  { cat: "formula", term: "Future Value", expr: "FV = PV &times; (1 + r)<sup>n</sup>", note: "r = rate per compounding period, n = number of periods.", calc: "tvm" },
                  { cat: "formula", term: "Present Value", expr: "PV = FV &divide; (1 + r)<sup>n</sup>", note: "Discounts a future amount back to today.", calc: "tvm" },
                  { cat: "formula", term: "PV of an annuity", expr: "PV = C &times; [1 &minus; (1 + r)<sup>&minus;n</sup>] &divide; r", note: "C = regular cash flow (ordinary annuity, end of period).", calc: "tvm" },
                  { cat: "formula", term: "CAGR (rate of return)", expr: "CAGR = (FV &divide; PV)<sup>1/n</sup> &minus; 1", note: "Standard return measure for periods &ge; 1 year; use (365/days) exponent for part-years.", calc: "tvm" },
                  { cat: "formula", term: "Perpetuity value", expr: "PV = C &divide; r", note: "Cash flow forever, e.g. a perpetual bond: ₹10,000 &divide; 8% = ₹1,25,000.", calc: "tvm" },
                  { cat: "formula", term: "Simple interest", expr: "Interest = P &times; r &times; t", note: "No compounding — interest withdrawn each period." },
                  { cat: "formula", term: "Adjust rate for frequency", expr: "Per-period r = annual r &divide; m ; n = years &times; m", note: "e.g. 8% quarterly &rarr; 2% for 20 periods over 5 years." },
                  { cat: "acronym", term: "TVM", expr: "Time Value of Money", note: "Money now is worth more than the same money later." },
                  { cat: "acronym", term: "CAGR", expr: "Compound Annual Growth Rate", note: "Excel: =RATE(years,,-PV,FV)." },
                  { cat: "acronym", term: "Ordinary annuity vs Annuity due", expr: "Ordinary = paid at END of period (type 0); Due = paid at START (type 1)", note: "Annuity due has higher value (₹17,434 vs ₹15,849 in the workbook example)." },
                  { cat: "acronym", term: "Excel TVM functions", expr: "PV, FV, RATE, PMT, NPER", note: "The five inter-linked time-value functions." }
                ]
              },
              {
                id: "ch03", number: 3,
                title: "Evaluating the Financial Position of Clients",
                items: [
                  { cat: "ratio", term: "Savings Ratio", expr: "Savings per year &divide; Annual Income", note: "= 1 &minus; Expenses Ratio. Higher is better.", calc: "ratios" },
                  { cat: "ratio", term: "Expenses Ratio", expr: "Annual Recurring Expenses &divide; Annual Income", note: "= 1 &minus; Savings Ratio. Non-recurring one-offs excluded.", calc: "ratios" },
                  { cat: "ratio", term: "Savings-to-Income Ratio", expr: "Total (accumulated) Savings &divide; Annual Income", note: "Measures readiness for long-term goals; &ge; 3&times; by early 40s. Excludes self-occupied home.", calc: "ratios" },
                  { cat: "ratio", term: "Leverage Ratio", expr: "Total Liabilities &divide; Total Assets", note: "= 1 &minus; Solvency Ratio. > 1 means assets can't cover debts.", calc: "ratios" },
                  { cat: "ratio", term: "Solvency Ratio", expr: "Net Worth &divide; Total Assets", note: "= 1 &minus; Leverage Ratio. Net worth must be positive.", calc: "ratios" },
                  { cat: "ratio", term: "Liquidity Ratio", expr: "Liquid Assets &divide; Monthly Expenses", note: "Comfortable at 4–6 (i.e. 4–6 months of cover).", calc: "ratios" },
                  { cat: "ratio", term: "Financial Assets Ratio", expr: "(Financial Assets &divide; Total Assets) &times; 100", note: "Higher preferred as goals near — financial assets are more liquid." },
                  { cat: "ratio", term: "Debt-to-Income Ratio", expr: "Monthly Debt Servicing &divide; Monthly Income", note: "Above 35–40% is seen as excessive.", calc: "ratios" },
                  { cat: "formula", term: "Net Worth", expr: "Total Assets &minus; Total Liabilities", note: "The headline number to monitor over time." },
                  { cat: "year", term: "Emergency fund size", expr: "6 months of expenses (incl. loan repayments)", note: "Held in liquid assets; can be laddered (~3 months liquid + rest higher-yield)." }
                ]
              },
              {
                id: "ch04", number: 4,
                title: "Debt Management and Loans",
                items: [
                  { cat: "formula", term: "EMI (Excel PMT)", expr: "EMI = PMT(rate&divide;12, n, &minus;Loan)", note: "e.g. ₹30L, 6.5%, 240 months &rarr; ₹22,367.", calc: "emi" },
                  { cat: "formula", term: "Debt Servicing Ratio", expr: "Monthly Debt Servicing &divide; Monthly Income", note: "50% is far too high; lower is safer.", calc: "ratios" },
                  { cat: "formula", term: "Revolving credit cost", expr: "Annual cost = (1 + monthly rate)<sup>12</sup> &minus; 1", note: "3% p.m. &rarr; 42.6% p.a. — avoid revolving credit." },
                  { cat: "formula", term: "EMI split (Excel)", expr: "PMT = EMI · PPMT = principal part · IPMT = interest part", note: "Early EMIs are mostly interest; principal share rises over time." },
                  { cat: "acronym", term: "EMI", expr: "Equated Monthly Instalment", note: "Fixed periodic loan repayment (amortisation)." },
                  { cat: "acronym", term: "DTI", expr: "Debt-to-Income ratio", note: "Lenders prefer a lower DTI; no single 'optimal' figure." },
                  { cat: "acronym", term: "LAP", expr: "Loan Against Property (home-equity loan)", note: "Borrow against real estate as collateral." },
                  { cat: "acronym", term: "MCLR", expr: "Marginal Cost of Lending Rate", note: "An internal bank benchmark for floating-rate loans." },
                  { cat: "acronym", term: "CIBIL", expr: "Credit Information Bureau (India) Limited", note: "CIBIL TransUnion Score: 3-digit, 300–900." },
                  { cat: "acronym", term: "P2P", expr: "Peer-to-Peer lending", note: "Direct person-to-person, unsecured; high risk/rate." },
                  { cat: "acronym", term: "Pledge vs Hypothecation vs Mortgage", expr: "Pledge = movable, asset with LENDER · Hypothecation = movable, asset with BORROWER (car loan) · Mortgage = immovable property", note: "Know which party holds the asset." },
                  { cat: "acronym", term: "M&M Theorem", expr: "Modigliani–Miller — leverage can raise the return on an investment", note: "Cited as why some debt (leverage) can be beneficial." },
                  { cat: "year", term: "Credit Information Companies (Regulation) Act", expr: "2005", note: "Governs credit bureaus; bureaus are licensed by the RBI." },
                  { cat: "year", term: "Free credit report", expr: "1 free full copy per year from each bureau", note: "Bureaus in India: CIBIL, Experian, CRIF Highmark, Equifax (calendar-year basis)." },
                  { cat: "year", term: "Home-loan prepayment charges", expr: "RBI: NIL pre-payment charges on (floating-rate) home loans from banks", note: "Other loans (e.g. car) may restrict prepayment or levy charges." },
                  { cat: "taxrule", term: "Tax-benefit debt paid last", expr: "When rescheduling, clear costliest debt (credit card, personal loans) first; keep tax-advantaged home/education loans for later", note: "Home & education loans give tax benefits, so lower real cost." },
                  { cat: "acronym", term: "Debt payoff strategies", expr: "Avalanche = highest interest first · Snowball = smallest balance first · Blizzard = snowball then avalanche", note: "Avalanche minimises interest; snowball builds motivation." }
                ]
              }
            ]
          },
          /* ============================ MODULE 2 ============================ */
          {
            number: 2,
            title: "Indian Financial Markets",
            chapters: [
              {
                id: "ch05", number: 5,
                title: "Introduction to the Indian Financial Markets",
                items: [
                  { cat: "acronym", term: "RBI", expr: "Reserve Bank of India", note: "Regulates banks; monetary authority; manager of forex; issuer of currency; banker to government." },
                  { cat: "acronym", term: "SEBI", expr: "Securities and Exchange Board of India", note: "Regulates securities market (and commodity derivatives); statutory body under SEBI Act, 1992." },
                  { cat: "acronym", term: "IRDAI", expr: "Insurance Regulatory and Development Authority of India", note: "Regulates insurance; licensing authority; IRDA Act, 1999." },
                  { cat: "acronym", term: "PFRDA", expr: "Pension Fund Regulatory and Development Authority", note: "Regulates the pension sector & NPS; PFRDA Act, 2013." },
                  { cat: "acronym", term: "FSDC", expr: "Financial Stability and Development Council", note: "Govt body for financial stability, sector development & inclusion." },
                  { cat: "acronym", term: "Four regulators (who does what)", expr: "RBI &rarr; banks · SEBI &rarr; securities & commodities · IRDAI &rarr; insurance · PFRDA &rarr; pension", note: "Central Government exercises oversight over all." },
                  { cat: "acronym", term: "NSDL &amp; CDSL", expr: "The two depositories in India", note: "Hold securities in dematerialised (electronic) form." },
                  { cat: "acronym", term: "NBFC", expr: "Non-Banking Finance Company", note: "Cannot accept demand deposits, issue cheques, or offer DICGC deposit insurance." },
                  { cat: "acronym", term: "FBIL", expr: "Financial Benchmark India Pvt. Ltd.", note: "Publishes daily reference rates for USD/EUR/GBP/JPY vs INR." },
                  { cat: "acronym", term: "CKYC vs KRA", expr: "CKYC Registry (individuals) · KRA (non-individuals — CVL, CAMS, NDML)", note: "Central KYC records so documents aren't re-submitted each time." },
                  { cat: "year", term: "SEBI Act", expr: "1992", note: "Constituted SEBI as statutory regulator of securities markets." },
                  { cat: "year", term: "SCRA (Securities Contracts Regulation Act)", expr: "1956 — securities defined in Section 2(h)", note: "Includes shares, derivatives, CIS/MF units, G-secs, etc." },
                  { cat: "year", term: "IRDA Act", expr: "1999", note: "Established IRDAI; life insurance opened to private players in 2001." },
                  { cat: "year", term: "PFRDA Act", expr: "2013", note: "Statutory backing to PFRDA; NPS is a defined-contribution scheme." },
                  { cat: "taxsection", term: "Section 54EC", expr: "Capital-gains-saving bonds (e.g. NHAI, REC)", note: "PSU tax-saving bonds to save long-term capital gains; primary issuances generally available." }
                ]
              },
              {
                id: "ch06", number: 6,
                title: "Securities Market Segments",
                items: [
                  { cat: "formula", term: "Market Capitalisation", expr: "Shares outstanding &times; Market price per share", note: "Large/blue-chip &gt; Mid cap &gt; Small cap. Market-cap-to-GDP gauges market size." },
                  { cat: "ratio", term: "Market Turnover Ratio", expr: "Turnover (₹) &divide; Market Capitalisation", note: "Higher ratio &rarr; higher liquidity." },
                  { cat: "taxrule", term: "Circuit breakers (market-wide)", expr: "10% · 15% · 20% either way", note: "Triggered by Sensex or Nifty 50, whichever is breached first; halts all equity & derivatives nationwide." },
                  { cat: "taxrule", term: "Daily price bands", expr: "2% / 5% / 10% (as specified); 20% on remaining scrips", note: "No band on derivatives-eligible scrips (10% operating range instead)." },
                  { cat: "taxrule", term: "Book-building price band", expr: "Floor price to 20% above the floor", note: "Cut-off price = price at which the issue gets subscribed." },
                  { cat: "taxrule", term: "ASBA minimum application value", expr: "₹10,000 to ₹15,000 (SEBI-prescribed range)", note: "Book-built issues; applications only via ASBA / UPI-ASBA." },
                  { cat: "taxrule", term: "Retail Individual Investor", expr: "Bid / application of ₹2 lakh or less", note: "Definition used for allotment categories." },
                  { cat: "acronym", term: "IPO vs FPO", expr: "Initial Public Offer (unlisted issuer) · Further Public Offer (already-listed issuer)", note: "Both can be fresh issue and/or offer for sale." },
                  { cat: "acronym", term: "ASBA", expr: "Application Supported by Blocked Amount", note: "Bank blocks money; funds released only on allotment. UPI-ASBA for retail." },
                  { cat: "acronym", term: "QIP", expr: "Qualified Institutions Placement", note: "Listed issuer to QIBs on a private-placement basis." },
                  { cat: "acronym", term: "RE (Rights Entitlement)", expr: "Tradeable right in a rights issue — separate ISIN", note: "Can be sold on exchange if the shareholder doesn't want to subscribe." },
                  { cat: "acronym", term: "Novation", expr: "Clearing corporation becomes counterparty to every trade", note: "Eliminates counterparty risk; backed by Core SGF (Settlement Guarantee Fund)." },
                  { cat: "acronym", term: "BMC", expr: "Base Minimum Capital", note: "Member deposit against which no exposure is allowed (part of capital adequacy)." },
                  { cat: "year", term: "SEBI ICDR Regulations", expr: "2018", note: "Issue of Capital and Disclosure Requirements — governs public issues." },
                  { cat: "taxrule", term: "Corporate actions — record date", expr: "Rights (ratio, e.g. 1:2), Bonus (from free reserves), Stock split (face value cut), Buyback (EPS support)", note: "Loss-making company cannot pay dividend; SEBI mandates per-share dividend." }
                ]
              }
            ]
          },
          /* ============================ MODULE 3 ============================ */
          {
            number: 3,
            title: "Investment Products",
            chapters: [
              {
                id: "ch07", number: 7,
                title: "Introduction to Investment",
                items: [
                  { cat: "formula", term: "Credit Spread", expr: "Corporate bond yield &minus; Govt bond yield (same maturity)", note: "= the risk premium for bearing default risk; higher default probability &rarr; wider spread." },
                  { cat: "taxrule", term: "Investment grade cut-off", expr: "BBB and above = investment grade; below BBB = high yield / junk", note: "Rating scale runs AAA (highest safety) &rarr; D (default)." },
                  { cat: "taxrule", term: "Managed-portfolio minimums", expr: "AIF &ge; ₹1 crore · PMS &ge; ₹50 lakh · MF = retail (no minimum)", note: "All three regulated by SEBI; MF high-touch, PMS/AIF light-touch. 'Rich man's mutual fund'." },
                  { cat: "taxrule", term: "LRS (Liberalised Remittance Scheme)", expr: "Invest up to $250,000 abroad per individual per year", note: "Geographical & currency diversification." },
                  { cat: "acronym", term: "RIA", expr: "Registered Investment Adviser", note: "Only SEBI-licensed RIAs may call themselves 'adviser'; SEBI (IA) Regulations, 2013." },
                  { cat: "acronym", term: "DVR", expr: "Differential Voting Rights (shares)", note: "Permitted in India since 2000; Tata Motors first issued in 2008 (1/10th voting, 5% higher dividend)." },
                  { cat: "acronym", term: "REIT / MLD", expr: "Real Estate Investment Trust · Market Linked Debenture", note: "REIT = small-ticket real-estate exposure; MLD = most common structured product." },
                  { cat: "acronym", term: "G-Sec", expr: "Government Security — risk-free gilt-edged", note: "Central govt issues T-bills (&lt;1 yr) & dated bonds; states issue only SGSs." },
                  { cat: "year", term: "Tata Motors DVR issue", expr: "2008", note: "1/10th voting rights + 5% higher dividend; DVRs permitted in India since 2000." }
                ]
              },
              {
                id: "ch08", number: 8,
                title: "Investing in Stocks",
                items: [
                  { cat: "ratio", term: "P/E Ratio", expr: "Market price per share &divide; EPS", note: "₹100 price, ₹5 EPS &rarr; P/E 20. Compare vs industry/market; lower than peers &rarr; undervalued." },
                  { cat: "ratio", term: "Dividend Yield", expr: "(Dividend per share &divide; Market price) &times; 100", note: "₹2 dividend at ₹40 price = 5%." },
                  { cat: "ratio", term: "Earnings Yield", expr: "(EPS &divide; Market price) &times; 100", note: "Inverse of P/E. ₹2.5 EPS at ₹25 = 10%." },
                  { cat: "ratio", term: "P/B Ratio", expr: "Price per share &divide; Book value (shareholders' equity) per share", note: "Popular for banks & financial-services valuation." },
                  { cat: "ratio", term: "PEG Ratio", expr: "(P/E Ratio) &divide; EPS growth rate", note: "P/E adjusted for growth." },
                  { cat: "formula", term: "Enterprise Value (EV)", expr: "Market cap of equity + Market value of debt &minus; Excess cash", note: "Basis for EV/EBITDA, EBIT/EV and EV/Sales multiples." },
                  { cat: "formula", term: "EVA (Economic Value Added)", expr: "NOPAT &minus; (Invested capital &times; Cost of capital)", note: "True economic profit; NOPAT = net after-tax operating profit." },
                  { cat: "formula", term: "MVA (Market Value Added)", expr: "Current market value of firm &minus; Original capital contributed", note: "Positive &rarr; value created; negative &rarr; value destroyed." },
                  { cat: "acronym", term: "EIC framework", expr: "Economy &rarr; Industry &rarr; Company", note: "Top-down fundamental analysis (bottom-up starts at company)." },
                  { cat: "acronym", term: "DCF", expr: "Discounted Cash Flow", note: "Intrinsic value = PV of future cash flows; needs cash flows, timing & discount rate." },
                  { cat: "acronym", term: "Beta (β)", expr: "Proxy measure for market (systematic) risk", note: "Market risk can't be diversified away, only hedged." },
                  { cat: "acronym", term: "Impact cost", expr: "Measure of liquidity risk", note: "Lower impact cost &rarr; more liquid stock." },
                  { cat: "taxrule", term: "\"Price is a fact, value is an opinion\"", expr: "Buy if intrinsic value &gt; market price; sell if market price &gt; intrinsic value", note: "Good company &ne; good investment if overpriced." }
                ]
              },
              {
                id: "ch09", number: 9,
                title: "Investing in Fixed Income Securities",
                items: [
                  { cat: "formula", term: "Bond Price", expr: "&Sigma; PV(coupons) + PV(face value)", note: "Discount each cash flow at the yield. 10% annual, 5-yr, 8% yield &rarr; ₹107.99.", calc: "bond" },
                  { cat: "formula", term: "Current Yield", expr: "(Annual coupon &divide; Current market price) &times; 100", note: "8.24 coupon at ₹103 &rarr; 8%.", calc: "bond" },
                  { cat: "formula", term: "Yield to Maturity (YTM)", expr: "Discount rate equating PV of all cash flows to the market price", note: "= the bond's internal rate of return (IRR); found by trial-and-error / interpolation.", calc: "bond" },
                  { cat: "formula", term: "Zero-coupon YTM", expr: "YTM = [(100 &minus; P) &divide; P] &times; (365 &divide; days) &times; 100", note: "Price P = 100 &divide; (1 + r &times; days/365)." },
                  { cat: "formula", term: "Perpetual bond value", expr: "Coupon &divide; Yield", note: "8% coupon on ₹100, 6% yield &rarr; ₹133.33." },
                  { cat: "formula", term: "Macaulay Duration", expr: "Weighted-avg time to recover price in PV terms (years)", note: "&le; maturity; equals maturity only for a zero-coupon bond.", calc: "bond" },
                  { cat: "formula", term: "Modified Duration", expr: "Macaulay Duration &divide; (1 + periodic yield)", note: "% price change per 1% yield change; always &lt; Macaulay duration." },
                  { cat: "formula", term: "Dirty vs Clean Price", expr: "Dirty (invoice) price = Clean price + Accrued interest", note: "Market quotes & all yield formulas use the clean price." },
                  { cat: "ratio", term: "CR / CY / YTM relationship", expr: "Par: CR = CY = YTM · Discount: CR &lt; CY &lt; YTM · Premium: CR &gt; CY &gt; YTM", note: "Price and yield move inversely." },
                  { cat: "taxrule", term: "Par value convention", expr: "₹100 for a Government bond · ₹10,000 for a corporate bond", note: "Quoted as % of face value (bid 106.35 = 106.35% of FV)." },
                  { cat: "taxrule", term: "T-Bill tenors", expr: "91, 182 and 364 days (weekly RBI auctions)", note: "Zero-coupon, issued at a discount, redeemed at par. 14-day T-bill not for public." },
                  { cat: "taxrule", term: "ISIN maturity cap", expr: "Max 12 new ISINs may mature in one financial year", note: "Issuers re-issue existing ISINs to stay within the limit." },
                  { cat: "year", term: "Day-count conventions", expr: "Bonds: 30/360 · Money market (T-bills): actual/365", note: "Frequency = 2 & basis = 30/360 for Indian G-secs (Excel YIELD)." },
                  { cat: "acronym", term: "Money-market instruments", expr: "Call (overnight) · Notice (2–14 d) · Term (15 d–1 yr) · T-bills · CP · CD · CMB · TREP", note: "CP: ₹5 lakh, 7 d–1 yr · CD: ₹1 lakh, banks 7 d–1 yr / FIs 1–3 yr." },
                  { cat: "acronym", term: "STRIPS / SGB / IIB / FRB", expr: "Separate Trading of Registered Interest & Principal · Sovereign Gold Bond · Inflation-Indexed Bond · Floating Rate Bond", note: "STRIPS = ZCBs with zero reinvestment risk." },
                  { cat: "acronym", term: "FIMMDA", expr: "Fixed Income Money Market and Derivatives Association of India", note: "Voluntary market body for bond, money & derivatives markets." }
                ]
              },
              {
                id: "ch10", number: 10,
                title: "Understanding Derivatives",
                items: [
                  { cat: "formula", term: "Futures Price (cost of carry)", expr: "F = S + Carry cost", note: "Spot ₹100 + interest for the period. On expiry, spot = futures (convergence)." },
                  { cat: "formula", term: "Basis", expr: "Futures price &minus; Spot price", note: "Positive basis when futures trade above spot." },
                  { cat: "formula", term: "Option premium", expr: "Premium = Intrinsic value + Time value", note: "Intrinsic = current price &minus; strike (calls); ITM options have positive intrinsic value." },
                  { cat: "formula", term: "Premium margin", expr: "Options premium &times; quantity purchased", note: "Paid by option buyers, in addition to initial margin." },
                  { cat: "taxrule", term: "Initial margin", expr: "SPAN margin + ELM (Extreme Loss Margin)", note: "Both mandatory pre-trade; sized to cover loss in 99% of cases; higher for volatile stocks." },
                  { cat: "taxrule", term: "Settlement mode", expr: "Stock derivatives &rarr; physical delivery · Index derivatives &rarr; cash settled", note: "SEBI-mandated physical settlement for all stock derivatives." },
                  { cat: "taxrule", term: "Option buyer vs writer", expr: "Buyer: right, no obligation, loss capped at premium · Writer: obligation, profit capped at premium, loss unlimited", note: "Indian options are mostly European (exercised on expiry)." },
                  { cat: "acronym", term: "SPAN", expr: "Standard Portfolio Analysis of Risk", note: "Margin-calculation software from Chicago Mercantile Exchange (CME)." },
                  { cat: "acronym", term: "Forwards vs Futures", expr: "Forwards = OTC, customised, counterparty risk · Futures = exchange-traded, standardised, cleared", note: "Futures overcome forwards' liquidity & counterparty risks." },
                  { cat: "acronym", term: "Open Interest", expr: "Total outstanding (unsettled) derivative contracts", note: "A measure of money flow — NOT trading volume." },
                  { cat: "acronym", term: "3 purposes of derivatives", expr: "Hedging · Speculation · Arbitrage", note: "Arbitrage rests on the law of one price." },
                  { cat: "acronym", term: "Currency-derivative pairs", expr: "USD, EUR, GBP, JPY (vs INR) + cross pairs EUR-USD, GBP-USD, USD-JPY", note: "Underlying of a currency derivative is an exchange rate." },
                  { cat: "year", term: "Derivatives trading in India", expr: "Introduced June 2000", note: "India's equity-derivative market is now among the world's largest." },
                  { cat: "year", term: "Legal definitions of 'derivative'", expr: "SC(R)A, 1956 · RBI Act, 1934 (Section 45U(a))", note: "Derivatives are 'securities' under SC(R)A." }
                ]
              }
            ]
          },
          /* ============================ MODULE 4 ============================ */
          {
            number: 4,
            title: "Investment Through Managed Portfolio",
            chapters: [
              {
                id: "ch11", number: 11,
                title: "Mutual Funds",
                items: [
                  { cat: "formula", term: "Net Asset Value (NAV)", expr: "NAV = (Assets &minus; Liabilities) &divide; Units outstanding", note: "Per-unit value at which units are bought/sold; struck each business day." },
                  { cat: "ratio", term: "Total Expense Ratio (TER)", expr: "Annual scheme expenses &divide; Average AUM", note: "Charged to the scheme daily; Direct plan TER &lt; Regular plan TER." },
                  { cat: "taxrule", term: "Market-cap categorisation (AMFI list)", expr: "Large = rank 1&ndash;100 · Mid = 101&ndash;250 · Small = 251 onwards", note: "Large-cap fund &ge; 80% in large caps; Small-cap fund &ge; 65% in small caps." },
                  { cat: "taxrule", term: "Large &amp; Mid / Multi cap minimums", expr: "Large&amp;Mid: &ge;35% large + &ge;35% mid · Multi cap: &ge;75% equity, min 25% each of large/mid/small", note: "SEBI scheme-categorisation rules." },
                  { cat: "taxrule", term: "Debt-fund duration buckets (Macaulay)", expr: "Short = 1&ndash;3 yr · Medium = 3&ndash;4 yr · Medium-to-long = 4&ndash;7 yr · Long &gt; 7 yr", note: "Liquid fund &le; 91 days; longer duration &rarr; higher interest-rate risk." },
                  { cat: "taxrule", term: "ETF / Index fund", expr: "ETF must hold &ge; 95% of assets in the securities of the index tracked", note: "Listed & traded on exchange; low expense ratio; returns track the index." },
                  { cat: "taxsection", term: "Section 80C — ELSS", expr: "Deduction up to ₹1,50,000 per year (old regime); 3-year lock-in", note: "ELSS is open-ended equity, &ge; 80% in equity; shortest lock-in among 80C options." },
                  { cat: "acronym", term: "SIP / STP / SWP", expr: "Systematic Investment / Transfer / Withdrawal Plan", note: "Invest periodically · shift between schemes · withdraw periodically." },
                  { cat: "acronym", term: "MF three-tier structure", expr: "Sponsor &rarr; Trustee &rarr; AMC (Asset Management Company)", note: "Set up as a Trust under SEBI (Mutual Funds) Regulations, 1996; Custodian holds assets." },
                  { cat: "acronym", term: "NFO / AUM / RTA", expr: "New Fund Offer · Assets Under Management · Registrar & Transfer Agent", note: "CAMS and KFintech are the main RTAs." },
                  { cat: "acronym", term: "Direct vs Regular plan", expr: "Direct = invest with the fund house, no distributor, lower TER · Regular = via distributor", note: "Same portfolio & NAV differs only by expenses." }
                ]
              },
              {
                id: "ch12", number: 12,
                title: "Portfolio Manager",
                items: [
                  { cat: "taxrule", term: "PMS minimum investment", expr: "Portfolio manager shall not accept funds/securities worth less than ₹50 lakh from a client", note: "'Rich man's mutual fund' — high ticket size." },
                  { cat: "taxrule", term: "PMS net-worth requirement", expr: "Applicant must have net worth of at least ₹5 crore", note: "Eligibility for SEBI registration as a portfolio manager." },
                  { cat: "taxrule", term: "TWRR disclosure mandate", expr: "Discretionary PMs must disclose performance using Time-Weighted Rate of Return for the immediately preceding 3 years", note: "TWRR removes the effect of cash-flow timing (vs MWRR/IRR)." },
                  { cat: "acronym", term: "PMS service types", expr: "Discretionary · Non-discretionary · Advisory", note: "Discretionary: PM decides & executes · Non-discretionary: client decides, PM executes · Advisory: PM only advises." },
                  { cat: "acronym", term: "High watermark principle", expr: "Performance fee only on gains above the highest previous portfolio value", note: "Protects the client from paying twice for the same gains." },
                  { cat: "acronym", term: "APMI", expr: "Association of Portfolio Managers in India", note: "Industry body for SEBI-registered portfolio managers." },
                  { cat: "year", term: "SEBI (Portfolio Managers) Regulations", expr: "2020", note: "Governs PMS registration, fees, minimum investment and disclosure." }
                ]
              },
              {
                id: "ch13", number: 13,
                title: "Overview of Alternative Investment Funds (AIFs)",
                items: [
                  { cat: "taxrule", term: "AIF minimum investment", expr: "&ge; ₹1 crore per investor (₹25 lakh for employees/directors of AIF/Manager, and for accredited investors)", note: "Privately pooled vehicle; not a retail product." },
                  { cat: "taxrule", term: "AIF scheme corpus", expr: "Each scheme shall have a corpus of at least ₹20 crore", note: "Minimum size to launch an AIF scheme." },
                  { cat: "taxrule", term: "Manager/Sponsor continuing interest", expr: "Cat I &amp; II: 2.5% of corpus or ₹5 crore (lower) · Cat III: 5% or ₹10 crore (lower)", note: "'Skin in the game'; cannot be met by waiving management fees." },
                  { cat: "taxrule", term: "Investee concentration limit", expr: "Cat I &amp; II &le; 25% of investable funds in one investee · Cat III &le; 10%", note: "Diversification cap per company." },
                  { cat: "taxrule", term: "Investors &amp; listing", expr: "Max 1,000 investors per scheme · listing lot &ge; ₹1 crore (after final close only)", note: "Angel-fund schemes have a separate investor cap." },
                  { cat: "acronym", term: "AIF three categories", expr: "Cat I = VCF/SME/social/infra (socially desirable) · Cat II = PE/debt (no leverage) · Cat III = hedge funds (complex/leverage)", note: "Cat I & II are close-ended; Cat III can be open- or close-ended." },
                  { cat: "taxrule", term: "Angel investor eligibility", expr: "Individual with net tangible assets &ge; ₹2 crore (excl. principal residence) + early-stage experience", note: "Angel Fund is a sub-category of VCF under Category I." },
                  { cat: "taxrule", term: "Accredited investor (individual)", expr: "Annual income &ge; ₹1 crore, OR net worth &ge; ₹5 crore (of which &ge; ₹2.5 crore financial assets)", note: "May access AIFs at ₹25 lakh ticket size instead of ₹1 crore." },
                  { cat: "year", term: "SEBI (Alternative Investment Funds) Regulations", expr: "2012", note: "Single framework replacing the older VCF Regulations, 1996." }
                ]
              }
            ]
          },
          /* ============================ MODULE 5 ============================ */
          {
            number: 5,
            title: "Portfolio Construction, Performance Monitoring and Evaluation",
            chapters: [
              {
                id: "ch14", number: 14,
                title: "Introduction to Modern Portfolio Theory",
                items: [
                  { cat: "formula", term: "Expected return of a security", expr: "E(R) = &Sigma; (Probability &times; Return in each scenario)", note: "e.g. 0.3(15%) + 0.5(10%) + 0.2(2%) = 9.9%." },
                  { cat: "formula", term: "Portfolio expected return", expr: "E(R<sub>p</sub>) = &Sigma; (Weight<sub>i</sub> &times; Expected return<sub>i</sub>)", note: "Weighted average of constituent returns." },
                  { cat: "formula", term: "Two-asset portfolio variance", expr: "&sigma;<sub>p</sub><sup>2</sup> = w<sub>1</sub><sup>2</sup>&sigma;<sub>1</sub><sup>2</sup> + w<sub>2</sub><sup>2</sup>&sigma;<sub>2</sub><sup>2</sup> + 2w<sub>1</sub>w<sub>2</sub>&sigma;<sub>1</sub>&sigma;<sub>2</sub>&rho;<sub>12</sub>", note: "Third term uses covariance = &rho; &times; &sigma;<sub>1</sub> &times; &sigma;<sub>2</sub>. Lower &rho; &rarr; more diversification benefit." },
                  { cat: "formula", term: "Variance / Standard deviation", expr: "Variance = &Sigma;(X &minus; X&#772;)<sup>2</sup> &divide; (n&minus;1) ; SD = &radic;Variance", note: "SD is the standard measure of total risk (dispersion of returns)." },
                  { cat: "acronym", term: "MPT", expr: "Modern Portfolio Theory (Harry Markowitz, 1952)", note: "Quantified diversification via covariance/correlation; Nobel Prize 1990." },
                  { cat: "acronym", term: "Efficient Frontier", expr: "Set of portfolios with max return for a given risk (or min risk for a given return)", note: "Optimal portfolio = tangency of investor's utility curve with the frontier." },
                  { cat: "acronym", term: "Investor risk attitudes", expr: "Risk-averse (rejects a fair game) · Risk-neutral (ignores risk) · Risk-seeking (accepts a fair game)", note: "CER = Certainty Equivalent Rate; risk-averse investor's CER &lt; risk-free rate." },
                  { cat: "year", term: "Markowitz 'Portfolio Selection'", expr: "Published 1952 (Journal of Finance); Nobel Prize 1990", note: "Foundation of Modern Portfolio Theory." }
                ]
              },
              {
                id: "ch15", number: 15,
                title: "Portfolio Construction Process",
                items: [
                  { cat: "acronym", term: "IPS", expr: "Investment Policy Statement", note: "Road map: objectives, goals, constraints, risk appetite; basis for strategic asset allocation." },
                  { cat: "acronym", term: "SAA vs TAA", expr: "Strategic Asset Allocation (long-term target policy portfolio) · Tactical Asset Allocation (short-term timing tilts)", note: "SAA = 'time in the market'; TAA = 'timing the markets'." },
                  { cat: "acronym", term: "Investment constraints", expr: "Liquidity · Time horizon · Tax · Regulatory · Unique needs/preferences", note: "Constraints (with objectives) shape the IPS and asset allocation." },
                  { cat: "acronym", term: "BB&K personality types", expr: "Bailard, Biehl & Kaiser: Individualist · Adventurer · Guardian · Celebrity (+ Straight Arrow)", note: "Two axes: confidence/anxiousness and careful/impetuous." },
                  { cat: "acronym", term: "Investor life-cycle phases", expr: "Accumulation &rarr; Consolidation &rarr; Spending (decumulation) &rarr; Gifting", note: "Risk capacity falls as the investor moves down the phases." },
                  { cat: "acronym", term: "Emergency-cash reserve", expr: "Usually 2&ndash;3 months' spending (more if income is volatile)", note: "Part of the liquidity constraint in the IPS." },
                  { cat: "taxrule", term: "Asset-allocation empirical support", expr: "Across portfolios AA explains ~40% of return variation; for a single fund ~90% over time", note: "Brinson, Hood & Beebower (1986); Ibbotson & Kaplan (2000)." },
                  { cat: "acronym", term: "ESG / Sustainable & Ethical investing", expr: "Environmental, Social, Governance screening", note: "Ethical investing is more personalised (avoids 'sin' sectors)." }
                ]
              },
              {
                id: "ch16", number: 16,
                title: "Portfolio Performance Measurement and Evaluation",
                items: [
                  { cat: "formula", term: "Holding Period Return (HPR)", expr: "HPR = [Income + (Ending &minus; Beginning)] &divide; Beginning", note: "₹5,000 income + (1,20,000 &minus; 1,00,000) on ₹1,00,000 = 25%." },
                  { cat: "formula", term: "Sharpe Ratio", expr: "(R<sub>p</sub> &minus; R<sub>f</sub>) &divide; &sigma;<sub>p</sub>", note: "Reward per unit of TOTAL risk. (10.5&minus;5.5)/6.5 = 0.7692. Higher is better.", calc: "riskratio" },
                  { cat: "formula", term: "Treynor Ratio", expr: "(R<sub>p</sub> &minus; R<sub>f</sub>) &divide; &beta;<sub>p</sub>", note: "Reward per unit of SYSTEMATIC risk (beta). Same numerator as Sharpe.", calc: "riskratio" },
                  { cat: "formula", term: "Sortino Ratio", expr: "(R<sub>p</sub> &minus; R<sub>f</sub>) &divide; Semi-standard deviation", note: "Adjusts excess return only for downside risk.", calc: "riskratio" },
                  { cat: "formula", term: "Jensen's Alpha (CAPM)", expr: "Alpha = R<sub>p</sub> &minus; [R<sub>f</sub> + &beta;(R<sub>m</sub> &minus; R<sub>f</sub>)]", note: "25% &minus; [5% + 1.5(15%&minus;5%)] = 5%. Reward for non-market (unsystematic) skill." },
                  { cat: "formula", term: "Information (Appraisal) Ratio", expr: "(R<sub>p</sub> &minus; R<sub>b</sub>) &divide; Tracking Error", note: "Active return &divide; active risk; tests whether alpha is skill or luck." },
                  { cat: "formula", term: "Portfolio Beta", expr: "&beta;<sub>p</sub> = &Sigma; (Weight<sub>i</sub> &times; &beta;<sub>i</sub>)", note: "0.6&times;1.2 + 0.4&times;1.1 = 1.16. &beta; &gt; 1 more volatile than market." },
                  { cat: "formula", term: "Post-tax return", expr: "Post-tax = Pre-tax &times; (1 &minus; tax rate)", note: "5% &times; (1 &minus; 15%) = 4.25%." },
                  { cat: "acronym", term: "TWRR vs MWRR", expr: "Time-Weighted (geometric, ignores cash-flow timing) · Money-Weighted (= IRR, depends on timing)", note: "SEBI mandates TWRR for PMS; MWRR ≈ what the client actually takes home." },
                  { cat: "acronym", term: "Tracking Error", expr: "SD of (portfolio return &minus; benchmark return)", note: "Lower TE &rarr; portfolio hugs the index; = active risk in the Information Ratio." },
                  { cat: "acronym", term: "Systematic vs Unsystematic risk", expr: "Systematic (market, measured by Beta, can't be diversified) · Unsystematic (company-specific, diversifiable)", note: "Alpha rewards unsystematic-risk skill; Beta rewards market risk." },
                  { cat: "acronym", term: "M&sup2; (Modigliani&ndash;Modigliani)", expr: "Return of a risk-matched portfolio, compared to the market", note: "Levers/de-levers the portfolio to the market's volatility, then compares returns." }
                ]
              }
            ]
          },
          /* ============================ MODULE 6 ============================ */
          {
            number: 6,
            title: "Operations, Regulatory Environment, Compliance and Ethics",
            chapters: [
              {
                id: "ch17", number: 17,
                title: "Operational Aspects of Investment Management",
                items: [
                  { cat: "acronym", term: "PAN / KYC / KRA", expr: "Permanent Account Number (Form 49A) · Know Your Customer · KYC Registration Agency", note: "PAN mandatory for most market transactions; Form 60/61 if no PAN." },
                  { cat: "acronym", term: "ASBA / UPI-ASBA", expr: "Application Supported by Blocked Amount", note: "Mandatory for public-issue applications from 1 Jan 2016; UPI-ASBA for retail." },
                  { cat: "acronym", term: "CKYCR / CERSAI", expr: "Central KYC Records Registry, operated by CERSAI", note: "Live from 2016; serves REs of all four regulators (RBI, SEBI, IRDAI, PFRDA)." },
                  { cat: "acronym", term: "NSDL &amp; CDSL / ISIN", expr: "The two depositories · International Securities Identification Number (12 characters)", note: "Demat holdings are fungible; identified by ISIN + number of shares." },
                  { cat: "acronym", term: "Demat / Remat forms", expr: "DRF (Dematerialisation Request Form) · RRF (Rematerialisation Request Form) · DRN", note: "DRFs must be preserved for at least 5 years." },
                  { cat: "acronym", term: "PoA / PRAN / POP-SP", expr: "Power of Attorney · Permanent Retirement Account Number (NPS) · Points of Presence Service Provider", note: "PoA holder can't open/close accounts or change nominations; no PoA for a minor." },
                  { cat: "acronym", term: "NRI account types", expr: "NRE (repatriable) · NRO (non-repatriable) · FCNR · PINS (Portfolio Investment Scheme)", note: "PINS is mandatory for NRI/PIO trading in listed shares." },
                  { cat: "taxrule", term: "PAN quoting thresholds", expr: "PAN needed for FD / insurance premium / cash NPS contribution above ₹50,000; MF micro-investment up to ₹50,000/yr is PAN-exempt", note: "Micro-investment exemption is for individuals only (not HUF/non-individuals)." },
                  { cat: "taxrule", term: "Demat mandatory for large issues", expr: "Public issues &gt; ₹10 crore must be issued only in dematerialised form", note: "Physical transfer of listed shares discontinued from 1 April 2019." },
                  { cat: "taxrule", term: "NRI residency test (Sec 6, IT Act)", expr: "Resident if in India &ge; 182 days in the year; OR &ge; 60 days in year AND &ge; 365 days in prior 4 years", note: "NRI = citizen/PIO who is not a resident under these tests." },
                  { cat: "taxrule", term: "NRO repatriation limit", expr: "Up to USD 1 million per financial year (from NRO account)", note: "NRE/FCNR proceeds are freely repatriable without limit." },
                  { cat: "taxrule", term: "NRI shareholding limits", expr: "Per NRI &le; 5% of paid-up capital · all NRIs together &le; 10% (raisable to 24% by special resolution)", note: "Applies on both repatriation & non-repatriation basis." },
                  { cat: "acronym", term: "FATCA / CRS", expr: "Foreign Account Tax Compliance Act · Common Reporting Standard", note: "Self-declaration mandatory for all investors from January 2016." },
                  { cat: "year", term: "Depositories Act", expr: "1996", note: "Enabled electronic (demat) holding; SEBI (Depositories & Participants) Regulations, 1996/2018." }
                ]
              },
              {
                id: "ch18", number: 18,
                title: "Key Regulations",
                items: [
                  { cat: "year", term: "SCRA — Securities Contracts (Regulation) Act", expr: "1956", note: "Regulates stock exchanges, securities contracts & listing; 'securities' defined in Sec 2(h)." },
                  { cat: "year", term: "SEBI Act", expr: "1992", note: "Establishes SEBI to protect investors and develop & regulate the securities market." },
                  { cat: "year", term: "PFUTP Regulations", expr: "2003", note: "SEBI (Prohibition of Fraudulent and Unfair Trade Practices) Regulations." },
                  { cat: "year", term: "SEBI (Intermediaries) Regulations", expr: "2008", note: "Code of Conduct & 'fit and proper' criteria (Schedule II) for intermediaries." },
                  { cat: "year", term: "SEBI (Prohibition of Insider Trading) Regulations", expr: "2015", note: "'Insider' = connected person or one with access to UPSI." },
                  { cat: "year", term: "SEBI (Investment Advisers) Regulations", expr: "2013", note: "IA must act in a fiduciary capacity; certificate valid till suspended/cancelled." },
                  { cat: "year", term: "PMLA — Prevention of Money-Laundering Act", expr: "2002", note: "Sec 3 defines the offence; Sec 12 requires record-keeping by reporting entities." },
                  { cat: "year", term: "FEMA / Indian Contract Act / Guardian &amp; Wards Act", expr: "FEMA 1999 · Contract Act 1872 (contract = Sec 2(h)) · Guardians & Wards Act 1890", note: "Minor = under 18 (Indian Majority Act, 1875)." },
                  { cat: "taxrule", term: "IA record retention", expr: "KYC, risk profiling, suitability, advice & rationale — kept for a minimum of 5 years", note: "PMLA also requires 5-year retention after the relationship ends." },
                  { cat: "taxrule", term: "IA own-account restriction", expr: "IA shall not trade against its own advice for 15 days (unless view changes, with 24-hr notice)", note: "Part of avoiding conflicts of interest." },
                  { cat: "taxrule", term: "Individual &rarr; non-individual IA trigger", expr: "Clients &gt; 300 OR advisory fee &gt; ₹3 crore in a FY", note: "Must apply for registration as a non-individual IA. Part-time IA client cap = 75." },
                  { cat: "taxrule", term: "Penalty for IA default (Sec 15EB)", expr: "&ge; ₹1 lakh, up to ₹1 lakh per day, subject to a maximum of ₹1 crore", note: "For failure to comply with SEBI regulations/directions." },
                  { cat: "acronym", term: "UPSI / KRA / IFSC", expr: "Unpublished Price Sensitive Information · KYC Registration Agency (KRA Regs 2011) · International Financial Services Centre", note: "BSE Administration & Supervision Ltd administers IAs." }
                ]
              },
              {
                id: "ch19", number: 19,
                title: "Ethical Issues",
                items: [
                  { cat: "acronym", term: "Fiduciary duty (uberrimae fidei)", expr: "Utmost good faith — always act in the client's best interest ('Client First')", note: "No profit at the client's cost; full disclosure of conflicts of interest." },
                  { cat: "acronym", term: "Four fiduciary obligations", expr: "Full disclosure · Suitable advice · Reasonable/objective basis · Proper execution", note: "Core duties of an Investment Adviser to the client." },
                  { cat: "acronym", term: "Churning", expr: "Excessive switching between products to earn more commission", note: "A key reason SEBI separates advice from distribution." },
                  { cat: "acronym", term: "Ethical dilemma", expr: "A choice between two options where neither is clearly superior", note: "Resolve by deeper analysis, greatest-good / least-harm, or reframing the problem." },
                  { cat: "taxrule", term: "Annual compliance audit", expr: "Yearly audit by a practising Chartered Accountant; disclose material observations to clients", note: "Also can be done by CS / CMA per SEBI IA Regulations." },
                  { cat: "acronym", term: "SEC (US) Code of Ethics", expr: "Written code reflecting fiduciary duty; disclose disciplinary events of past 10 years", note: "Global best practice reference for advisers." },
                  { cat: "acronym", term: "Australian 'best interests' standard", expr: "Section 961B, Corporations Act 2001", note: "Steps an adviser must take to satisfy the client's best interests." }
                ]
              },
              {
                id: "ch20", number: 20,
                title: "Grievance Redress Mechanism",
                items: [
                  { cat: "acronym", term: "SCORES", expr: "SEBI Complaints Redress System (online)", note: "Escalate here if the market participant doesn't resolve; then ODR." },
                  { cat: "acronym", term: "ODR", expr: "Online Dispute Resolution portal", note: "Mediation / conciliation / arbitration after SCORES; within the law of limitation." },
                  { cat: "acronym", term: "Redressal escalation ladder", expr: "Market participant &rarr; SCORES &rarr; ODR &rarr; Court/SAT", note: "Always approach the product/service provider first." },
                  { cat: "acronym", term: "Banking Ombudsman / RB-IOS", expr: "RBI Integrated Ombudsman Scheme; CPGRAMS for govt grievances", note: "Approach after 1 month if the bank hasn't resolved; BCSBI Code of Commitments." },
                  { cat: "acronym", term: "Insurance grievance route", expr: "Insurer &rarr; IGMS (IRDAI) &rarr; Insurance Ombudsman", note: "Ombudsman recommendation within 1 month; speaking award within 3 months." },
                  { cat: "acronym", term: "NPS grievance route", expr: "CRA &rarr; NPS Trust &rarr; Ombudsman (PFRDA)", note: "Escalate to NPS Trust if unresolved within 30 days." },
                  { cat: "taxrule", term: "SAT appeal timelines", expr: "Appeal to SAT within 45 days of the order; appeal to Supreme Court within 60 days of SAT order", note: "SAT hears appeals against SEBI, IRDAI & PFRDA orders (Sec 15T, SEBI Act)." },
                  { cat: "year", term: "Consumer Protection Act", expr: "1986", note: "Protects consumers of goods & services; consumer courts as an alternate forum." },
                  { cat: "acronym", term: "NCLT (other fora)", expr: "National Company Law Tribunal — NBFC deposit / unlisted-company bond complaints", note: "Or the Ministry of Corporate Affairs / Consumer forum." }
                ]
              }
            ]
          }
        ]
      },
      {
        id: "xb",
        code: "NISM-Series-X-B",
        title: "Investment Adviser (Level 2)",
        modules: [
          /* ============================ MODULE 7 ============================ */
          {
            number: 7,
            title: "Risk Management and Insurance Planning",
            chapters: [
              {
                id: "ch01", number: 1,
                title: "Basics of Insurance",
                items: [
                  { cat: "formula", term: "Insurance premium (risk pool)", expr: "Premium per participant = (Loss per unit &times; Units lost) &divide; No. of participants", note: "Merchant ships: (₹10,00,000 &times; 2) &divide; 100 = ₹20,000; if only 40 join &rarr; ₹50,000." },
                  { cat: "formula", term: "Deductible + Co-Pay payout", expr: "Insurer pays = (Claim &minus; Deductible) &times; (1 &minus; Co-Pay%)", note: "₹40,000 claim, ₹1,000 deductible, 10% co-pay &rarr; ₹39,000 &times; 0.90 = ₹35,100." },
                  { cat: "formula", term: "Deductible only (Policy 2)", expr: "Insurer pays = Claim &minus; Deductible", note: "₹40,000 &minus; ₹5,000 = ₹35,000 (no co-pay)." },
                  { cat: "formula", term: "Contribution (shared claim)", expr: "Insurer A share = Loss &times; SA<sub>A</sub> &divide; (SA<sub>A</sub> + SA<sub>B</sub>)", note: "Indemnity only. Two ₹5-lakh policies, ₹30,000 loss &rarr; ₹15,000 each." },
                  { cat: "ratio", term: "Co-Pay", expr: "A % of the admissible claim borne by the insured", note: "Higher co-pay &rarr; lower premium; makes the insured cost-sensitive." },
                  { cat: "ratio", term: "Deductible", expr: "A fixed amount the insured pays first before the claim is admissible", note: "Compulsory ₹1,000 on cars &le;1600 CC (₹2,000 above); types: compulsory & voluntary." },
                  { cat: "acronym", term: "Risk transfer vs retention", expr: "Transfer = pay premium, insurer indemnifies · Retention = bear the loss yourself", note: "Insurance is risk transfer via a common pool." },
                  { cat: "acronym", term: "7 tests of an insurable risk", expr: "Large no. of exposure units · insurable interest · accidental & unintentional · determinable & measurable · no prospect of gain · chance of loss calculable · premium economically feasible", note: "Pure risk only — speculative risk (stocks) is uninsurable." },
                  { cat: "acronym", term: "Uberrimae fidei", expr: "Utmost good faith — disclose all material information truthfully", note: "Family/medical history, habits, profession; non-disclosure &rarr; claim rejected." },
                  { cat: "acronym", term: "Insurable interest", expr: "Better off if the risk does not occur, worse off if it does; must be lawful & monetary", note: "Blood/marriage relations qualify; distant relatives need proof of dependence; lender up to loan outstanding." },
                  { cat: "acronym", term: "Indemnity vs Defined benefit", expr: "Indemnity = reimburse ascertained actual loss · Benefit = fixed pre-set sum", note: "Indemnity: Mediclaim, property, car. Benefit: life, critical illness, daily hospital cash." },
                  { cat: "acronym", term: "Subrogation", expr: "Insurer steps into the insured's shoes to recover from the at-fault third party", note: "A policy without subrogation rights costs more." },
                  { cat: "acronym", term: "Cashless claim", expr: "Insurer pays the hospital/garage directly instead of reimbursing", note: "Network keeps changing — not a decisive reason to choose an insurer." },
                  { cat: "acronym", term: "5 steps of insurance planning", expr: "Identify need &rarr; estimate coverage &rarr; identify product &rarr; optimise premium &rarr; monitor coverage", note: "Needs: income replacement · income protection · asset protection." },
                  { cat: "acronym", term: "Broker vs Agent", expr: "Direct broker &rarr; represents CLIENT (fee + commission) · Agent / corporate agent &rarr; represent INSURER (commission only)", note: "Broker categories: Direct, Reinsurance, Composite." },
                  { cat: "acronym", term: "Bancassurance", expr: "A bank acting as the corporate agent of an insurer", note: "Composite corporate agent: max 3 life + 3 general + 3 health insurers." },
                  { cat: "acronym", term: "ULIP benefit illustration", expr: "Two scenarios — 4% and 8% returns; signed by the prospect with the proposal form", note: "Charges capped from the 5th year." },
                  { cat: "year", term: "Beneficial nominee — Sec 39(7)", expr: "Feb 2015 amendment to the Insurance Act, 1938", note: "Parent/spouse/children nominee of a life policy is beneficially entitled (not just a trustee)." },
                  { cat: "year", term: "Section 45 — 3-year rule", expr: "No life policy questioned after 3 years from issue / risk commencement / revival (whichever is later)", note: "Within 3 years, repudiation only for fraud." },
                  { cat: "year", term: "Health moratorium — 5 years", expr: "5 continuous years of premium &rarr; claim non-contestable", note: "Except proven fraud & specified permanent exclusions; fresh 5 yrs for enhanced sum insured." },
                  { cat: "year", term: "ULIP lock-in — 5 years", expr: "5-year lock-in; no surrender charges after 5 policy years; lapsed ULIP revivable within 3 years", note: "Limited/regular premium: level premium, PPT &ge; 5 years." },
                  { cat: "year", term: "Health GST exemption", expr: "22 September 2025", note: "All individual health insurance/reinsurance policies exempt from GST." },
                  { cat: "taxrule", term: "Standardised health exclusions", expr: "Insurer may have FEWER exclusions but never more than prescribed", note: "Mental illness, genetic disorders & congenital disease removed from exclusions." },
                  { cat: "taxrule", term: "Health portability", expr: "Any health policy except group / top-up / super-top-up can be ported", note: "Group &rarr; individual: same company in year 1 of leaving, any company from year 2." },
                  { cat: "taxrule", term: "SEBI (IA) Regulations, 2013 carve-out", expr: "Agent/broker advising SOLELY on insurance is exempt; advising on non-insurance securities brings IA regs in", note: "Then: risk profiling, suitability & fiduciary responsibility apply." },
                  { cat: "taxrule", term: "Suitability & mis-selling curb", expr: "Agent must justify product suitability (age, income, family, goals, existing cover)", note: "Client can waive only by written consent; 4%/8% illustration signed by both." }
                ]
              },
              {
                id: "ch02", number: 2,
                title: "Life Insurance Products",
                items: [
                  { cat: "formula", term: "Paid-up sum assured", expr: "Paid-up SA = SA &times; (Premiums paid &divide; Premiums due)", note: "Surinder: ₹10,00,000 &times; 10/50 = ₹2,00,000 (half-yearly over 25 yrs = 50 due, 5 yrs = 10 paid)." },
                  { cat: "formula", term: "Adjusted (real) rate for HLV", expr: "r = ((1 + ROI) &divide; (1 + inflation)) &minus; 1", note: "8% & 6% &rarr; ≈1.89%. Used to discount future income to present value." },
                  { cat: "formula", term: "Human Life Value (HLV)", expr: "HLV = PV of annual income for working years (ordinary annuity at adjusted rate r)", note: "₹10,00,000/yr, age 33&rarr;60 (27 yrs), r=1.89% &rarr; ₹2,10,04,210. Excel: =PV(1.89%,27,&minus;1000000).", calc: "tvm" },
                  { cat: "formula", term: "Need-based cover", expr: "Corpus (annuity-due) + Loans &minus; Existing cover &minus; Investments", note: "Anil: ₹2,36,43,984 + ₹40L loan &minus; ₹1cr cover &minus; ₹50L inv = ₹1,26,43,984. Excel: =PV(1.89%,31,&minus;996000,,1)." },
                  { cat: "ratio", term: "HLV vs Need-based", expr: "HLV &ge; Need-based, always", note: "HLV replaces whole income; need-based replaces only income dependents require. Expenditure cannot exceed income." },
                  { cat: "ratio", term: "Inherent return — Return of Premium", expr: "RATE(n, extra premium, maturity return)", note: "₹1cr/30yr: extra ₹8,057/yr, returns ₹5,24,190 &rarr; ≈4.61% p.a." },
                  { cat: "ratio", term: "Inherent return — Endowment", expr: "RATE(n, extra premium, maturity return)", note: "₹1cr/30yr: extra ₹3,06,916/yr, returns ₹2,14,00,000 &rarr; ≈5% p.a. (not guaranteed)." },
                  { cat: "ratio", term: "Minimum sum assured (IRDAI)", expr: "Term &gt;10yr: 10&times; premium (age&lt;45), 7&times; (age&gt;45) · Term &lt;10yr: 5&times; (all)", note: "Rakesh 48, 15-yr term, ₹50k premium &rarr; 7&times; = ₹3,50,000." },
                  { cat: "ratio", term: "Surrender value — traditional", expr: "Min 30% of premiums paid &rarr; up to 90% in last two years", note: "Acquired after 3 yrs in force (2 yrs if term &lt;10yr). Single premium: 70% &rarr; 90%." },
                  { cat: "acronym", term: "Death cover vs Survival benefit", expr: "Death cover = pays on death in term · Survival benefit = pays on surviving", note: "Term = death cover only; investment-cum-insurance = both." },
                  { cat: "acronym", term: "Participating vs Non-participating", expr: "Par = eligible for reversionary bonus (higher premium) · Non-par = no bonus", note: "Reversionary bonus declared at insurer's discretion after guaranteed-bonus period." },
                  { cat: "acronym", term: "ULIP", expr: "Unit Linked Insurance Plan — insured chooses portfolio; daily NAV; investment risk on insured", note: "Charges recovered by cancelling units &rarr; low cost transparency vs mutual funds." },
                  { cat: "acronym", term: "ROP", expr: "Return of Premium term plan — refunds premiums on survival", note: "Costlier than pure term; inherent return on the extra premium ≈4.61%." },
                  { cat: "acronym", term: "Mortgage (reducing-term) insurance", expr: "SA falls with the outstanding home loan", note: "Often not cheaper than level term; unpopular as prepaid loans waste the cover." },
                  { cat: "acronym", term: "Riders", expr: "Double SA · Critical illness (accelerated, +30-day survival) · Accident/disability · Waiver of premium · Guaranteed insurability · Income benefit", note: "Add-ons that customise cover at low extra cost." },
                  { cat: "acronym", term: "Assignment", expr: "Transfers policy interests; cancels nomination (except to insurer for its loan)", note: "Nomination reinstated on re-assignment; needs insurer's endorsement." },
                  { cat: "acronym", term: "Telescopic premiums", expr: "Larger SA &rarr; lower premium per ₹1,000 of cover", note: "Ceiling ~₹2cr; ₹8cr need &rarr; buy 4 &times; ₹2cr policies from the same company." },
                  { cat: "acronym", term: "LRS route for foreign policies", expr: "Liberalised Remittance Scheme — up to USD 2,50,000 per annum", note: "Foreign policies governed by the issuing country's regulations; defined-benefit policies pay wherever risk occurs." },
                  { cat: "year", term: "MWPA — Married Women's Property Act", expr: "1874", note: "Nominees = spouse/children only (not parents); cannot be changed even after divorce; shields proceeds from creditors; declare at purchase." },
                  { cat: "year", term: "ULIP discontinuance charge cap", expr: "Max ₹6,000; 5-year lock-in", note: "Surrender value paid at end of the 5-year lock-in." },
                  { cat: "year", term: "Life insurance GST exemption", expr: "22 September 2025", note: "All life insurance/reinsurance policies exempt from GST." },
                  { cat: "taxrule", term: "ULIP maturity — Finance Act 2021", expr: "Annual premium &gt; ₹2.5 lakh (policy on/after 01.02.2021) &rarr; maturity taxed as capital gains", note: "Otherwise tax-free if SA &ge; 10&times; annual premium." },
                  { cat: "taxrule", term: "Traditional policy maturity", expr: "Issued on/after 1 Apr 2023 with premium &gt; ₹5 lakh &rarr; taxed as 'Income from other sources'", note: "Separate from the ULIP ₹2.5-lakh capital-gains rule." },
                  { cat: "taxrule", term: "Non-disclosure of policies/proposals", expr: "Omission of a material fact", note: "Grounds to repudiate a claim or cancel the policy within the first 3 years." },
                  { cat: "taxrule", term: "Product evaluation principle", expr: "Decouple insurance from investment; assess risk-cover adequacy FIRST", note: "Insurer's primary job is protection; evaluate return only after cover is adequate." }
                ]
              },
              {
                id: "ch03", number: 3,
                title: "Non-Life Insurance Products",
                items: [
                  { cat: "formula", term: "Top-up plan payout", expr: "Per claim: Top-up pays max(0, Claim &minus; Threshold), up to limit", note: "Threshold applied to EVERY claim. Base ₹5L, top-up ₹10L over ₹5L; claims 3+6+2+4 L &rarr; base ₹5L + top-up ₹1L = ₹6L only." },
                  { cat: "formula", term: "Super Top-up plan payout", expr: "Aggregate: Super pays max(0, &Sigma;Claims &minus; Threshold), up to limit", note: "Threshold applied ONCE on the yearly total. Same claims &rarr; base ₹5L + super ₹10L = ₹15L (full cover)." },
                  { cat: "formula", term: "Single claim (both plans)", expr: "Base pays up to base limit; top-up pays Claim &minus; Threshold", note: "₹8L claim, base ₹5L, threshold ₹5L &rarr; ₹5L base + ₹3L top-up. Top-up & super identical for a single claim." },
                  { cat: "formula", term: "Base + Super Top-up strategy", expr: "Base SI + Super top-up SI (deductible = Base SI) = total cover", note: "₹5L base + ₹10L super top-up (₹5L deductible) = ₹15L cheaply. Single ₹15L policy only slightly costlier." },
                  { cat: "ratio", term: "Contribution clause", expr: "Insurer A share = Loss &times; SA<sub>A</sub> &divide; &Sigma;SA (indemnity only)", note: "NOT applied if claim &le; chosen policy's SI (chosen insurer pays full). Applied only when claim exceeds chosen policy's SI." },
                  { cat: "ratio", term: "Health premium vs cover", expr: "Premium per extra lakh falls sharply, ~negligible after a point", note: "₹100L policy costs only a few thousand ₹ more than ₹50L &rarr; one large policy beats many small ones." },
                  { cat: "acronym", term: "Elements of non-life policy", expr: "Sum insured · 1-yr term · premium (SI &times; risk) · deductible · restore/recharge · no-claim bonus", note: "Term 2–3 yrs for health/two-wheeler; premium usually paid at inception." },
                  { cat: "acronym", term: "Restore vs Recharge", expr: "Restore = refill SI to 100% on partial OR full exhaustion · Recharge = refill only when reduced by a claim", note: "Both give a 'second' sum insured within the year — useful for family floaters." },
                  { cat: "acronym", term: "Indemnity vs Defined benefit", expr: "Indemnity = reimburse actual expense (health/property/motor) · Benefit = fixed sum (life/CI/accident)", note: "Multiple indemnity policies can't exceed actual loss; all defined-benefit policies pay in full." },
                  { cat: "acronym", term: "Property insurance", expr: "Structure + contents vs natural & man-made disasters", note: "Wilful destruction & normal wear-and-tear NOT covered; jewellery/art/antiques need add-on; often taken with a home loan." },
                  { cat: "acronym", term: "Health insurance", expr: "Indemnity — reimburses hospitalisation; in-patient (24hr+)/domiciliary/day-care", note: "Cashless (direct hospital settlement) · family floater · portability (unbroken policy) · pre-existing exclusion period." },
                  { cat: "acronym", term: "Motor insurance", expr: "Third-party liability COMPULSORY; own-damage/theft optional", note: "Indemnifies death/injury to any person + third-party property damage. Own-damage premium varies by insurer." },
                  { cat: "acronym", term: "Personal accident", expr: "Injury by external, violent & visible means", note: "Covers permanent total, permanent partial & temporary total disablement; permanent-disability cover often inadequate." },
                  { cat: "acronym", term: "Critical illness", expr: "Defined-benefit lump sum on specified disease + survival; NO payment on death", note: "Standalone or accelerated rider on a life policy; size like a life-insurance need." },
                  { cat: "acronym", term: "Liability insurance", expr: "Indemnity for legally-payable third-party damages (negligence or no-fault)", note: "Professional indemnity for doctors/lawyers/advisers; excludes intentional damage & criminal acts." },
                  { cat: "acronym", term: "Fidelity vs D&O vs Keyman", expr: "Fidelity = employee fraud/forgery loss · D&O = directors' wrongful-act liability · Keyman = life policy on key exec (company beneficiary)", note: "Fidelity taken where staff handle large cash/valuables." },
                  { cat: "acronym", term: "Overseas travel insurance", expr: "Indemnity cover abroad — medical/baggage/accident, reimbursement up to max", note: "May be mandatory for some countries; the designed exception to the 'India-only' indemnity rule." },
                  { cat: "year", term: "Non-life term", expr: "Typically 1 year", note: "Health & two-wheeler covers may run for 2 or 3 years." },
                  { cat: "year", term: "In-patient stay", expr: "At least overnight / 24 hours in hospital", note: "Plus domiciliary (treated at home) and many day-care procedures." },
                  { cat: "year", term: "Critical illness survival period", expr: "Minimum 30 days after diagnosis (comparison table: 15–30 days)", note: "No payout if the insured does not survive the specified period." },
                  { cat: "year", term: "Car No-Claim Bonus", expr: "Up to 50% of own-damage premium after 5 claim-free years", note: "Belongs to the person, not the car — transferable to a new car; buyer of a sold car does NOT inherit it." },
                  { cat: "year", term: "LRS limit for foreign policies", expr: "USD 2,50,000 per annum", note: "Residents may buy foreign insurers' general policies; governed by the issuing country's regulations & grievance mechanism." },
                  { cat: "taxrule", term: "Global coverage rule", expr: "Defined-benefit pays anywhere · Indemnity (health) pays India-only", note: "Easy to verify an event worldwide, hard to ascertain foreign expenses. Overseas travel = designed exception." },
                  { cat: "taxrule", term: "Super top-up admin requirement", expr: "Report EVERY claim to the super-top-up insurer, even unpaid ones", note: "So it can mark the aggregate threshold used. Keep base + top-up with the same insurer where possible." },
                  { cat: "taxrule", term: "Not covered — general exclusions", expr: "Wilful destruction & wear-and-tear (property) · intentional/criminal acts (liability)", note: "Valuables need a separate policy; pre-existing illnesses excluded for a fixed period." }
                ]
              }
            ]
          },
          /* ============================ MODULE 8 ============================ */
          {
            number: 8,
            title: "Retirement Planning",
            chapters: [
              {
                id: "ch04", number: 4,
                title: "Retirement Planning Basics",
                items: [
                  { cat: "formula", term: "Future cost under inflation", expr: "Future cost = Present cost &times; (1 + inflation)<sup>years</sup>", note: "₹100 @ 6% &rarr; ₹179 (10 yr), ₹321 (20 yr), ₹574 (30 yr). Inflation increases the corpus required." },
                  { cat: "formula", term: "Inflation-adjusted (real) return", expr: "r = ((1 + nominal) &divide; (1 + inflation)) &minus; 1", note: "8% return & 6% inflation &rarr; ≈1.89%. Use this real rate to discount future retirement income." },
                  { cat: "formula", term: "Replacement income — Year 1", expr: "Income at retirement &times; Replacement ratio", note: "Rajeev: ₹1,00,000&times;1.1<sup>10</sup> = ₹2,59,374; &times;0.50 = ₹1,29,687.", calc: "tvm" },
                  { cat: "formula", term: "Replacement income — later years", expr: "Prior year &times; (1 + inflation)", note: "Rajeev year 2: ₹1,29,687 &times; 1.07 = ₹1,38,765. Grown yearly to hold purchasing power." },
                  { cat: "formula", term: "Income at retirement (grown)", expr: "Current income &times; (1 + growth)<sup>years to retire</sup>", note: "₹1,00,000 &times; 1.1<sup>10</sup> = ₹2,59,374 (income growing 10% p.a. over 10 years)." },
                  { cat: "formula", term: "Expense Protection — expense at retirement", expr: "Total current retirement expense &times; (1 + inflation)<sup>years</sup>", note: "Ashish: (₹30,000 household + ₹15,000 additional) = ₹45,000; &times;1.06<sup>20</sup> = ₹1,44,321." },
                  { cat: "ratio", term: "Replacement ratio", expr: "Retirement income as a % of pre-retirement income", note: "e.g. 80% or 50%. Assumes the pre-retirement standard of living continues; income then grown by inflation." },
                  { cat: "ratio", term: "Years to retirement", expr: "Retirement age &minus; current age", note: "Lower &rarr; smaller inflation effect on cost. Longer &rarr; greater compounding, lower saving allocation." },
                  { cat: "ratio", term: "Years in retirement", expr: "Start of retirement &rarr; end of life (income to be secured)", note: "Estimated from life expectancy. Underestimating it = longevity risk (money runs out)." },
                  { cat: "acronym", term: "3 phases of retirement planning", expr: "Preparation &rarr; Initial/Pre-retirement &rarr; Final retirement", note: "Preparation: child education, home, insurance, ageing. Pre-retirement: learn rules & procedures." },
                  { cat: "acronym", term: "4-step planning process", expr: "Expenses &rarr; Income requirement &rarr; Time horizon &rarr; Corpus", note: "Corpus depends on periodic income, inflation, corpus return & retirement period." },
                  { cat: "acronym", term: "Retirement vs other goals", expr: "No loan finances retirement; longest accumulation & distribution; largest corpus", note: "Other goals (house/education) have hard horizons & loan options; retirement is often deferred &rarr; catastrophic." },
                  { cat: "acronym", term: "Accumulation vs Distribution stage", expr: "Accumulation = save & invest to build corpus · Distribution = corpus generates income", note: "Growth-oriented (risky) investments suit the accumulation stage." },
                  { cat: "acronym", term: "Two income-estimation methods", expr: "Replacement Ratio (anchored on income) · Expense Protection (anchored on expenses)", note: "Expense Protection needs a detailed budget; easier for those near retirement." },
                  { cat: "acronym", term: "Two employer arrangements", expr: "Payment by employer (lump sum &rarr; immediate annuity) · Funding through an irrevocable Trust", note: "Pay-as-you-go from current revenue is NOT allowed." },
                  { cat: "acronym", term: "Superannuation", expr: "A company pension plan; funds grow tax-free until retirement/withdrawal", note: "Once in place it is an employer liability to be provided for on accrual." },
                  { cat: "year", term: "Employees' Pension Scheme", expr: "1995", note: "The only statutory superannuation (pension) in India; others arrange annuities via LIC/IRDAI insurers." },
                  { cat: "year", term: "Inflation @ 6% illustration", expr: "₹100 &rarr; ₹179 / ₹321 / ₹574", note: "Same basket at 10, 20 and 30 years — why a corpus sized for today's expenses falls short." },
                  { cat: "acronym", term: "Approved superannuation fund — conditions", expr: "Irrevocable trust in India · &ge;90% employees in India · sole purpose annuities · employer contributes · benefits payable only in India", note: "Approved by the Commissioner of Income Tax under Part B, Fourth Schedule." },
                  { cat: "taxsection", term: "Section 10(13)", expr: "Payments from an approved superannuation fund exempt from total income", note: "On death, commutation of annuity on retirement/incapacitation, refund, or transfer to NPS (80CCD)." },
                  { cat: "taxsection", term: "Section 10(25)(iii)", expr: "Income received by trustees on behalf of the fund is exempt", note: "The fund accumulates in a tax-free environment." },
                  { cat: "taxsection", term: "Section 36(iv)", expr: "Employer's contribution allowed as a deduction from business income", note: "Within limits prescribed & CBDT conditions." },
                  { cat: "taxsection", term: "Section 80C", expr: "Employee's contribution to an approved superannuation fund deductible", note: "Subject to the ceiling prescribed by the Income Tax Act." },
                  { cat: "taxrule", term: "AS 15 (ICAI) — provide on accrual", expr: "Retirement benefits must be provided for in the year of accrual, not when due", note: "Bars pay-as-you-go; Insurance Act Sec 2(11) mandates an IRDAI insurer/funded arrangement." },
                  { cat: "taxrule", term: "Corpus review trigger", expr: "Review whenever there is a significant change in the financial situation", note: "Long horizon &rarr; many changing variables &rarr; periodic monitoring essential." },
                  { cat: "taxrule", term: "Reductions in living expense & taxes", expr: "Housing loan/education/work costs end; income often drops to a lower tax bracket", note: "These reduce the retirement income required; medical & travel costs rise." }
                ]
              }
            ]
          }
        ]
      }
    ]
  };

  // ---- Helpers -----------------------------------------------------------

  function getBook(bookId) {
    return CS.books.find(function (b) { return b.id === bookId; });
  }

  // Flat list of { book, module, chapter, item } across everything — powers
  // search and the By-Category view.
  function allItems() {
    var out = [];
    CS.books.forEach(function (book) {
      book.modules.forEach(function (mod) {
        mod.chapters.forEach(function (ch) {
          (ch.items || []).forEach(function (item) {
            out.push({ book: book, module: mod, chapter: ch, item: item });
          });
        });
      });
    });
    return out;
  }

  function catMeta(key) {
    return CS.cats.find(function (c) { return c.key === key; }) || null;
  }

  function countByCat() {
    var counts = {};
    CS.cats.forEach(function (c) { counts[c.key] = 0; });
    allItems().forEach(function (r) {
      if (counts[r.item.cat] === undefined) counts[r.item.cat] = 0;
      counts[r.item.cat]++;
    });
    return counts;
  }

  window.NISM_CHEATSHEET = CS;
  window.NismCheatsheet = {
    getBook: getBook,
    allItems: allItems,
    catMeta: catMeta,
    countByCat: countByCat,
    cats: CS.cats
  };
})();
