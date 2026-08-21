/* ==========================================================================
   NISM Series-X-A · Module 5 · Chapter 15 — Portfolio Construction Process
   Question bank for the end-of-chapter assessment.

   Shapes:
     Standard  { q, options:[...], correct, explain }
     Scenario  { scenario, q, options:[...], correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH15_QUESTIONS = [

  /* ---------- 15.1 Asset allocation ---------- */
  {
    q: "Asset allocation is best described as:",
    options: [
      "The process of deciding how to distribute an investor's wealth across different asset classes",
      "Picking the single best-performing stock in the market",
      "Timing the exact top and bottom of the market",
      "Calculating an individual security's beta"
    ],
    correct: 0,
    explain: "Asset allocation is the process of deciding how to distribute an investor's wealth into different asset classes for investment purposes."
  },
  {
    q: "An 'asset class' is defined as:",
    options: [
      "A collection of securities with similar characteristics, attributes and risk/return relationships",
      "A single company's shares",
      "Any security listed on a stock exchange",
      "A government-issued bond only"
    ],
    correct: 0,
    explain: "An asset class is a collection of securities that have similar characteristics, attributes and risk/return relationships — e.g. bonds, equities, cash and cash-like securities."
  },
  {
    q: "Which of the following is a valid sub-division of the equity asset class?",
    options: [
      "Large cap, mid cap and small cap",
      "Treasury, corporate and junk bonds",
      "Emergency cash and near-term goals",
      "SAA and TAA"
    ],
    correct: 0,
    explain: "Equity can be divided into large cap, mid cap and small cap. (Treasury/corporate/junk are sub-classes of bonds.)"
  },
  {
    q: "Professional investment experience suggests that, in the long run, the major influence on the performance of an investment portfolio is:",
    options: [
      "The asset-allocation decision",
      "The choice of individual products within an asset class",
      "The frequency of trading",
      "The brokerage firm used"
    ],
    correct: 0,
    explain: "In the long run the asset-allocation decision majorly influences portfolio performance; the choice of individual products within an asset class contributes less to the end result."
  },

  /* ---------- 15.2 Correlation ---------- */
  {
    q: "Correlation coefficients vary in the range:",
    options: [
      "−1 to +1",
      "0 to 1",
      "0 to 100",
      "−100 to +100"
    ],
    correct: 0,
    explain: "Correlation measures the strength and direction of the relationship between two variables and ranges from −1 to +1."
  },
  {
    q: "A correlation coefficient of +1 between two securities indicates:",
    options: [
      "A perfect positive relationship — they move together in the same direction",
      "A perfect negative relationship",
      "No relationship at all",
      "The securities are risk-free"
    ],
    correct: 0,
    explain: "A value of +1 indicates a perfect positive relationship: the two variables move together in the same direction."
  },
  {
    q: "Correlation between two securities that belong to the SAME asset class is expected to be:",
    options: [
      "High, because they are sensitive to the same major economic/investment factors",
      "Always negative",
      "Always exactly zero",
      "Low, because they never move together"
    ],
    correct: 0,
    explain: "Investments in the same asset class are sensitive to the same major economic/investment factors, so their correlation is expected to be high; correlation across different asset classes tends to be low."
  },
  {
    q: "Why should advisers NOT rely solely on past correlation metrics when making asset-allocation decisions?",
    options: [
      "Correlations among asset classes change over time and across economic/market regimes",
      "Past correlations are always exactly −1",
      "Correlation cannot be calculated in Excel",
      "Regulations forbid using historical data"
    ],
    correct: 0,
    explain: "Correlations can and do change over time and in different economic situations; future correlation may differ from the past, so investors should not depend solely on past correlation metrics."
  },
  {
    scenario: "Meera holds a portfolio of large-cap equities and wants to add a second asset class to reduce overall portfolio risk without giving up too much return.",
    q: "To maximise the diversification benefit, she should prefer an asset class whose returns have:",
    options: [
      "Low or negative correlation with her existing equities",
      "A correlation of +1 with her equities",
      "The highest possible correlation with her equities",
      "Identical return drivers to her equities"
    ],
    correct: 0,
    explain: "Correlation is the most relevant factor in reaping diversification benefits. Adding an asset class with low/negative correlation reduces portfolio risk more than one that moves in lockstep (correlation +1) with the existing holdings."
  },

  /* ---------- 15.3 Process & IPS ---------- */
  {
    q: "The three broad elements of the portfolio management process are:",
    options: [
      "Planning, execution and evaluation",
      "Buying, holding and forgetting",
      "Marketing, sales and reporting",
      "Auditing, taxation and compliance"
    ],
    correct: 0,
    explain: "The portfolio management process comprises planning, execution and evaluation — moving from planning through execution to feedback."
  },
  {
    q: "The FIRST step in the portfolio management process is:",
    options: [
      "Development of the policy statement (IPS) for the portfolio",
      "Measuring performance",
      "Rebalancing the portfolio",
      "Selling all existing holdings"
    ],
    correct: 0,
    explain: "The first step is development of the policy statement — a road map identifying the investor's risk appetite and defining investment objectives, goals and constraints."
  },
  {
    q: "The Investment Policy Statement (IPS) forms the basis for:",
    options: [
      "Strategic asset allocation — the interaction of the investor's risk-return needs and expected returns",
      "The daily trading calendar of the exchange",
      "The company's balance sheet",
      "Insider trading decisions"
    ],
    correct: 0,
    explain: "The IPS forms the basis for strategic asset allocation, which is essentially an interaction between the investor's risk-return requirements and expected investment returns."
  },
  {
    q: "Why does the IPS need to be updated and revised periodically?",
    options: [
      "Because investors' requirements change over time",
      "Because SEBI reissues it every month",
      "Because correlations are always constant",
      "Because it is a legal tax document"
    ],
    correct: 0,
    explain: "Since investors' requirements change over a period of time, the IPS also needs to be updated and revised periodically."
  },
  {
    q: "Which of the following is one of the four purposes served by the policy statement?",
    options: [
      "Protecting the investor against the manager's inappropriate or unethical decisions",
      "Guaranteeing a fixed annual return",
      "Eliminating all investment risk",
      "Removing the need for a benchmark"
    ],
    correct: 0,
    explain: "The IPS's four purposes: realistic return expectations, effective manager decisions aligned with objectives, a framework for evaluating the manager, and protection against inappropriate/unethical decisions."
  },
  {
    q: "Preparing an IPS is said to inculcate:",
    options: [
      "A disciplined system and process in managing investments, reducing inappropriate decisions",
      "A guarantee of market-beating returns",
      "An obligation to trade daily",
      "A requirement to avoid all equities"
    ],
    correct: 0,
    explain: "Preparation of the IPS inculcates a disciplined system and process in managing investments and reduces the possibility of making inappropriate decisions."
  },

  /* ---------- 15.4 Objectives ---------- */
  {
    q: "The relationship between liquidity and return is generally:",
    options: [
      "Inverse — relatively illiquid investments require an illiquidity risk premium",
      "Directly proportional — more liquid assets always pay more",
      "Non-existent",
      "Always exactly equal"
    ],
    correct: 0,
    explain: "Liquidity has an inverse relationship with return; relatively illiquid investments require a premium for being less liquid — the illiquidity risk premium."
  },
  {
    q: "If the primary investment objective is capital preservation, the asset allocation will typically be tilted towards:",
    options: [
      "Safe bonds and debt securities",
      "High-beta small-cap equities",
      "Speculative derivatives",
      "Illiquid private equity"
    ],
    correct: 0,
    explain: "If capital preservation is the primary objective, allocation is tilted towards safe bonds and debt securities; capital appreciation objectives tilt towards higher-return assets like equity."
  },
  {
    scenario: "Retired schoolteacher Mr. Rao wants a steady monthly cash flow from his corpus to supplement his pension.",
    q: "His investment objective is best classified as, and points toward, which asset choices?",
    options: [
      "Regular income — dividend-paying stocks, interest-paying bonds and/or rent-paying realty",
      "Capital appreciation — concentrated small-cap equities",
      "Capital preservation only — 100% cash",
      "Speculation — index options"
    ],
    correct: 0,
    explain: "A regular-income objective directs funds to asset classes generating periodical income: dividend-paying stocks, interest-paying bonds and/or rent-paying realty."
  },

  /* ---------- 15.5 Constraints ---------- */
  {
    q: "The three categories into which the need for liquidity falls are:",
    options: [
      "Emergency cash, near-term goal, and investment flexibility",
      "Stocks, bonds and gold",
      "SAA, TAA and rebalancing",
      "Environmental, social and governance"
    ],
    correct: 0,
    explain: "The needs for liquidity fall into three categories: emergency cash, near-term goal, and investment flexibility."
  },
  {
    q: "The emergency cash reserve is usually measured at:",
    options: [
      "Two to three months' spending (more if income is volatile or at risk)",
      "Ten years' spending",
      "One day's spending",
      "The entire portfolio value"
    ],
    correct: 0,
    explain: "The emergency cash reserve is usually measured at two to three months' spending, but could be more if the individual's income source is at risk or volatile."
  },
  {
    q: "Under the RBI's Liberalised Remittance Scheme (LRS), a resident individual can remit overseas per financial year up to:",
    options: [
      "USD 2,50,000",
      "USD 25,000",
      "USD 5,00,000",
      "Unlimited amounts"
    ],
    correct: 0,
    explain: "Under the LRS, resident individuals (including minors) may freely remit up to USD 2,50,000 per financial year for permissible current/capital account transactions. It was introduced in 2004 at USD 25,000 and revised upward over time."
  },
  {
    q: "The LRS is an example of which type of investment constraint?",
    options: [
      "Regulatory constraint",
      "Liquidity constraint",
      "Tax constraint",
      "Unique preference"
    ],
    correct: 0,
    explain: "The LRS cap on overseas remittance is a regulatory constraint — regulations can limit the investment choices available to investors."
  },
  {
    q: "Trading in securities on the basis of unpublished price-sensitive information by company insiders is:",
    options: [
      "Prohibited",
      "Encouraged for better returns",
      "Allowed once a year",
      "A tax constraint"
    ],
    correct: 0,
    explain: "People with access to non-public (insider) information are prohibited from trading on the basis of that information — cited under regulatory constraints."
  },
  {
    q: "Why does tax play an important role in portfolio management decisions?",
    options: [
      "Different investments and different kinds of income (interest, dividend, rent, capital gains) are taxed differently, and the same return may attract different tax depending on the investor's bracket",
      "All investment income is tax-free in India",
      "Tax rates never change",
      "Capital gains and interest are always taxed identically"
    ],
    correct: 0,
    explain: "Different investments and income types are taxed differently, and the same form of return may attract different tax liability depending on the recipient's tax bracket — so tax understanding must be part of the IPS."
  },

  /* ---------- 15.6 Exposure limits ---------- */
  {
    q: "Under SEBI (Portfolio Managers) Regulations, 2020, the agreement between the portfolio manager and the investor must include:",
    options: [
      "The investment approach — the type of securities/instruments and the proportion of exposure",
      "The manager's personal bank statements",
      "A guarantee of returns",
      "The exchange's trading holidays"
    ],
    correct: 0,
    explain: "Per SEBI PMS Regulations 2020, the agreement must include the investment approach — a broad outlay of the type of securities/permissible instruments and the proportion of exposure."
  },
  {
    q: "Setting exposure limits to specific sectors, entities and asset classes is primarily intended to avoid:",
    options: [
      "Concentration risk",
      "Liquidity",
      "Diversification",
      "Tax liability"
    ],
    correct: 0,
    explain: "After considering the investor's objective, risk appetite, liquidity, tax/regulatory constraints and horizon, exposure limits are set to avoid 'concentration risk', which the manager must adhere to."
  },

  /* ---------- 15.7 Unique needs / ESG ---------- */
  {
    q: "Sustainable investing considers which criteria alongside financial returns?",
    options: [
      "Environmental, Social and Governance (ESG)",
      "Only past price momentum",
      "Only dividend yield",
      "Only the company's market capitalisation"
    ],
    correct: 0,
    explain: "Sustainable investing considers environmental, social and governance (ESG) criteria while selecting investments, aiming for financial returns together with a positive impact on society."
  },
  {
    q: "'Board independence, board diversity and executive compensation' are examples of factors under which ESG pillar?",
    options: [
      "Governance",
      "Environmental",
      "Social",
      "Financial"
    ],
    correct: 0,
    explain: "Governance factors include board independence, board diversity and executive compensation. (Social: workplace safety, community development, human rights. Environmental: pollution, water use, clean technology.)"
  },
  {
    q: "The KEY difference between ethical investing and sustainable/socially conscious investing is that ethical investing is:",
    options: [
      "More personalised — driven by the investor's own moral views, typically screening out 'sin' areas",
      "Based purely on a standard set of ESG guidelines with no personal input",
      "Concerned only with maximising returns",
      "Illegal in India"
    ],
    correct: 0,
    explain: "Sustainable investing screens on an overall set of ESG guidelines, whereas ethical investing is more personalised — depending heavily on the investor's own views and typically avoiding 'sin' areas like gambling, alcohol, smoking or firearms."
  },
  {
    scenario: "An investor tells her adviser she will not, under any circumstances, hold shares of tobacco or firearms companies, purely on moral grounds.",
    q: "The adviser should:",
    options: [
      "Record this unique preference clearly in the IPS and exclude those stocks",
      "Ignore the request since it may reduce returns",
      "Treat it as a regulatory constraint imposed by SEBI",
      "Wait until rebalancing to decide"
    ],
    correct: 0,
    explain: "Each investor is unique; any specific personal/ethical preference should be clearly specified in the IPS. This is ethical investing — a personalised moral screen."
  },

  /* ---------- 15.8 Goals ---------- */
  {
    q: "On a goal sheet, each goal is recorded along with its:",
    options: [
      "Priority, time period and amount needed",
      "The manager's commission",
      "The stock's ISIN",
      "The correlation coefficient"
    ],
    correct: 0,
    explain: "Investors record their needs and goals along with the priority and the time frame for each, plus the funds needed for the same."
  },
  {
    q: "For NEAR-TERM HIGH-PRIORITY goals, the typical investment vehicles are:",
    options: [
      "Cash equivalents or fixed-income instruments with maturities matching the goal date",
      "Concentrated small-cap equity bets",
      "Illiquid private equity",
      "Leveraged derivatives"
    ],
    correct: 0,
    explain: "Near-term high-priority goals carry high emotional priority and a short horizon, so vehicles tend to be cash equivalents or fixed-income instruments with maturity dates matching the goal — the cost of missing them is too great to risk volatility."
  },
  {
    scenario: "A 30-year-old investor is starting to build a retirement corpus for retirement at 60.",
    q: "Because this is a long-term high-priority goal with a long runway, the preferred approach is usually:",
    options: [
      "A diversified approach using several different asset classes",
      "A single fixed deposit only",
      "Holding 100% cash until retirement",
      "An aggressive single-stock concentration"
    ],
    correct: 0,
    explain: "For long-term high-priority goals like a retirement corpus, the long-term nature means a diversified approach utilising several different asset classes is usually preferred."
  },
  {
    q: "For LOW-PRIORITY goals (e.g. buying a farmhouse or a luxury car 'someday'), investors usually take:",
    options: [
      "More aggressive investment approaches",
      "Only capital-guaranteed products",
      "The most conservative possible approach",
      "No investment at all"
    ],
    correct: 0,
    explain: "Low-priority goals are not particularly painful if not achieved, so more aggressive investment approaches are usually taken for them."
  },

  /* ---------- 15.9 Financial position ---------- */
  {
    q: "Personal financial statements used to analyse an investor's financial position include:",
    options: [
      "A net-worth (balance sheet) statement and an income-expense statement",
      "Only the company's annual report",
      "Only the tax return",
      "Only the demat holding statement"
    ],
    correct: 0,
    explain: "A convenient way to analyse financial position is by constructing personal financial statements: a statement of net worth (balance sheet) and an income-expense statement."
  },
  {
    q: "Net worth is calculated as:",
    options: [
      "Total assets (at market value) minus total liabilities",
      "Total income minus total expenses",
      "Total assets plus total liabilities",
      "Annual salary times ten"
    ],
    correct: 0,
    explain: "For net worth, all assets are recorded at estimated market value and all liabilities are subtracted from the assets. The difference between assets and liabilities is net worth."
  },
  {
    q: "It is suggested that net worth be calculated:",
    options: [
      "Periodically, at least once a year",
      "Once in a lifetime",
      "Every trading day",
      "Only at retirement"
    ],
    correct: 0,
    explain: "It is suggested that net worth be calculated periodically, at least once in a year."
  },
  {
    scenario: "A client owns a house worth ₹80L, investments of ₹20L, and savings/jewellery of ₹10L. She owes ₹40L on a home loan and ₹5L on a car loan.",
    q: "Her net worth is:",
    options: [
      "₹65 lakh",
      "₹110 lakh",
      "₹45 lakh",
      "₹155 lakh"
    ],
    correct: 0,
    explain: "Assets = 80 + 20 + 10 = ₹110L; Liabilities = 40 + 5 = ₹45L; Net worth = 110 − 45 = ₹65L."
  },

  /* ---------- 15.10 Psychographic ---------- */
  {
    q: "Psychographic analysis of an investor bridges the gap between:",
    options: [
      "Standard finance (rational investors) and behavioural finance (normal, biased investors)",
      "Debt markets and equity markets",
      "Taxation and regulation",
      "SAA and TAA"
    ],
    correct: 0,
    explain: "Psychographic analysis bridges standard finance, which treats investors as rational, and behavioural finance, which views them as normal human beings susceptible to biases and cognitive errors."
  },
  {
    q: "The Bailard, Biehl & Kaiser (BB&K) framework classifies investor personalities along two axes:",
    options: [
      "Level of confidence (confident ↔ anxious) and method of action (careful ↔ impetuous)",
      "Age and net worth",
      "Return and liquidity",
      "Tax bracket and residency"
    ],
    correct: 0,
    explain: "BB&K focuses on two aspects: the level of confidence (confidence/anxiousness) and the method of action (carefulness/impetuousness)."
  },
  {
    scenario: "An investor is very self-assured about money and career, but is methodical and analytical — she researches thoroughly and decides calmly before acting.",
    q: "In the BB&K framework she is best described as a:",
    options: [
      "Individualist (confident + careful)",
      "Celebrity (anxious + impetuous)",
      "Guardian (anxious + careful)",
      "Adventurer (confident + impetuous)"
    ],
    correct: 0,
    explain: "Confident plus careful/analytical corresponds to the Individualist in the BB&K classification."
  },
  {
    q: "In the BB&K framework, an investor who is anxious about the future and cautious, seeking capital protection and guidance, is a:",
    options: [
      "Guardian",
      "Adventurer",
      "Individualist",
      "Celebrity"
    ],
    correct: 0,
    explain: "Anxious plus careful describes the Guardian — the most risk-averse profile, focused on capital protection."
  },

  /* ---------- 15.11 Life cycle ---------- */
  {
    q: "In the ACCUMULATION phase of the life cycle, the investor can typically undertake:",
    options: [
      "More high-return, high-risk, capital-gain-oriented investments, given a long horizon and growing income",
      "Only capital-guaranteed products",
      "Pure income-generating assets only",
      "No investments at all"
    ],
    correct: 0,
    explain: "In the accumulation (early-career) phase, net worth is small relative to liabilities but the long horizon and growing income let the investor take on more high-return, high-risk, capital-gain-oriented investments."
  },
  {
    q: "The CONSOLIDATION phase is characterised by:",
    options: [
      "Income exceeding expenses, with high-capital-gain investments balanced by some lower-risk assets",
      "Complete reliance on accumulated assets for living expenses",
      "The investor having no income source",
      "Gifting assets to charity"
    ],
    correct: 0,
    explain: "In the consolidation (mid-to-late-career) phase, income exceeds expenses and portfolios consolidate; with 15–20 years to retirement, high-capital-gain investments are balanced with some lower-risk assets."
  },
  {
    scenario: "A retiree now meets all living expenses from her accumulated investments and retirement corpus rather than from a salary.",
    q: "She is in the ______ phase, where the focus shifts toward:",
    options: [
      "Decumulation/Spending — stability, with dividend, interest and rental income (plus some growth for inflation-hedging)",
      "Accumulation — maximum high-risk capital gains",
      "Gifting — leaving a legacy only",
      "Consolidation — building the corpus"
    ],
    correct: 0,
    explain: "This is the decumulation/spending phase: living expenses come from accumulated assets, so the focus is on stability and income (dividends, interest, rent), with some growth/inflation-hedge exposure since the horizon can still exceed 15–20 years."
  },
  {
    q: "The GIFTING phase arises when:",
    options: [
      "The investor realises they have more assets than they will need for their own spending",
      "The investor runs out of money",
      "The investor first starts earning",
      "The investor takes maximum leverage"
    ],
    correct: 0,
    explain: "The gifting phase is the final stage, when a person realises they have more assets than needed for spending; investments may then aim to leave a legacy or support a charitable cause."
  },
  {
    q: "The boundaries between the life-cycle stages are described as:",
    options: [
      "Fuzzy on the time scale, not fixed by exact age",
      "Precisely fixed at 30, 45 and 60",
      "Identical for every investor",
      "Set by regulation"
    ],
    correct: 0,
    explain: "It is important to note that the boundaries between the life-cycle stages are fuzzy on the time scale."
  },

  /* ---------- 15.12 Forecasting ---------- */
  {
    q: "Portfolio management integrates two sets of information: information about the investor and:",
    options: [
      "Capital-market forecasts of the risk-return opportunities available",
      "The manager's own salary",
      "The exchange's trading holidays",
      "The broker's client list"
    ],
    correct: 0,
    explain: "Portfolio management integrates the investor's inputs (objectives, goals, personality, life-cycle phase, liquidity, tax/other constraints) with capital-market forecasts establishing the expected risk-return opportunities."
  },
  {
    q: "A useful starting point for forecasting the future risk and return of asset classes is:",
    options: [
      "Historical risk-return data on the various asset classes",
      "The manager's intuition alone",
      "The colour of the annual report",
      "The number of employees in each company"
    ],
    correct: 0,
    explain: "Historical risk-return on various asset classes provides a good starting point to understand the risk-return relationship and to forecast future return possibilities."
  },

  /* ---------- 15.13 Benchmarking ---------- */
  {
    q: "The purpose of a benchmark portfolio in the IPS is to:",
    options: [
      "Provide a framework for evaluating portfolio performance by comparing 'apple with apple'",
      "Guarantee the portfolio's returns",
      "Replace the need for asset allocation",
      "Eliminate all portfolio risk"
    ],
    correct: 0,
    explain: "The IPS provides a framework for evaluating performance, typically via a benchmark portfolio matching the composition of the investor's portfolio — comparing 'apple with apple'."
  },
  {
    q: "An appropriate benchmark for a portfolio invested in large-cap equities would be:",
    options: [
      "BSE 30 or NIFTY 50",
      "A short-term money-market rate",
      "A mid-cap index",
      "A gold price index"
    ],
    correct: 0,
    explain: "For large-cap equities, BSE 30 or NIFTY 50 is an appropriate benchmark; a large-cap portfolio must be compared to a large-cap index."
  },
  {
    q: "Why is a benchmark reviewed on a regular basis?",
    options: [
      "If the nature of the investment or the benchmark's composition changes, the benchmark may need to change too",
      "Because SEBI mandates a new benchmark every week",
      "Because benchmarks expire annually",
      "Because returns are guaranteed by the benchmark"
    ],
    correct: 0,
    explain: "A benchmark once selected should be reviewed regularly; if the nature of the investment changes or the benchmark composition changes, there may be a need to change the benchmark."
  },
  {
    scenario: "A manager compares a portfolio invested entirely in long-term corporate bonds against a large-cap equity index.",
    q: "This is problematic because:",
    options: [
      "A wrong benchmark can paint a misleading picture and lead to wrong investment decisions — a debt portfolio needs a bond index of similar maturity and credit profile",
      "Any index works equally well for any portfolio",
      "Bonds cannot be benchmarked at all",
      "Only equity portfolios need benchmarks"
    ],
    correct: 0,
    explain: "Benchmark selection is crucial; a wrong selection can paint a completely different picture leading to wrong decisions. A bond portfolio needs a benchmark representing the nature of the investments — a bond index of similar maturity and credit profile."
  },

  /* ---------- 15.14 Asset allocation decision ---------- */
  {
    q: "The asset-allocation decision ultimately results from:",
    options: [
      "The interaction between information about the investor and the forecast risk-return on investment opportunities",
      "A random selection of asset classes",
      "The manager's personal preference alone",
      "Whatever the previous year's best performer was"
    ],
    correct: 0,
    explain: "The interaction between information about the investor and the risk-return forecast on investment opportunities culminates in the asset-allocation decision, which follows logically from the investor's needs, goals, risk preferences and liquidity needs."
  },
  {
    q: "After forecasting risk and return across asset classes, the portfolio manager decides the mix of assets that:",
    options: [
      "Optimises the after-tax returns for the investor",
      "Minimises the manager's own effort",
      "Maximises trading volume",
      "Ignores the investor's tax position"
    ],
    correct: 0,
    explain: "After developing a forecast on risk and return across asset classes, the manager decides the mix of assets that optimises the after-tax returns for the investor."
  },

  /* ---------- 15.15 Construction principles ---------- */
  {
    q: "In selecting an EQUITY portfolio, large-cap exposure is used mainly to provide:",
    options: [
      "An element of stability, while mid/small caps offer higher (but more volatile) capital appreciation",
      "Guaranteed dividends",
      "Zero risk",
      "Tax exemption"
    ],
    correct: 0,
    explain: "Large-cap exposure gives stability to the portfolio, while mid and small caps, though more volatile, can lead to higher capital appreciation; the right mix depends on the investor's risk-taking ability."
  },
  {
    q: "The bulk of returns from equities typically comes from:",
    options: [
      "Capital appreciation",
      "Dividend yield alone",
      "Interest payments",
      "Rental income"
    ],
    correct: 0,
    explain: "Higher dividend-yield stocks can generate cash flow from equities, but capital appreciation provides the bulk of returns from equities."
  },
  {
    q: "When selecting a DEBT portfolio, a key principle is to:",
    options: [
      "Match the maturity of the instruments to the investment horizon",
      "Always buy the longest-dated bond available",
      "Ignore credit risk entirely",
      "Never use short-term instruments"
    ],
    correct: 0,
    explain: "In selecting a debt portfolio, match the maturity of the investment to the horizon; short-term debt instruments serve short-term goals, and the investor's credit-risk appetite shapes the medium/long-term mix."
  },
  {
    q: "Hybrid portfolios are designed to:",
    options: [
      "Provide stability plus potential upside, often easing the transition as a long-term goal nears",
      "Guarantee the highest possible return",
      "Hold only a single asset class",
      "Eliminate the need for any equity"
    ],
    correct: 0,
    explain: "Hybrid portfolios blend stability with potential upside and are used as a long-term goal approaches, ensuring a smooth transition in the asset-allocation mix rather than managing debt and equity separately."
  },
  {
    q: "'Other' portfolios that add assets like gold, precious metals or alternative investments aim primarily to:",
    options: [
      "Raise overall return and provide different exposure for diversification, reducing risk and adding stability",
      "Concentrate risk in a single sector",
      "Avoid all forms of diversification",
      "Guarantee capital"
    ],
    correct: 0,
    explain: "Other portfolios add elements like gold or alternatives to raise overall return while providing different exposure and diversification, helping reduce risk and maintain stability."
  },

  /* ---------- 15.16 SAA vs TAA ---------- */
  {
    q: "Strategic Asset Allocation (SAA) is best described as:",
    options: [
      "The long-term target policy portfolio — essentially the IPS translated into asset weights",
      "A daily short-term trading strategy",
      "A method of insider trading",
      "The manager's personal trading account"
    ],
    correct: 0,
    explain: "SAA is the target policy portfolio giving target allocation among the major asset classes — essentially the IPS translated into asset weights — and is the long-term asset-allocation decision."
  },
  {
    q: "Tactical Asset Allocation (TAA) involves:",
    options: [
      "Short-term shifts within the SAA framework to exploit market opportunities, then rebalancing back",
      "Never changing the allocation once set",
      "Ignoring the strategic allocation entirely",
      "Only investing in cash"
    ],
    correct: 0,
    explain: "TAA is the short-term asset-allocation decision taken within the broad SAA framework — timing markets to exploit temporary discrepancies, then rebalancing to the target after booking gains."
  },
  {
    q: "The distinction 'time in the market' vs 'timing the markets' maps to:",
    options: [
      "SAA = time in the market; TAA = timing the markets",
      "SAA = timing the markets; TAA = time in the market",
      "Both mean the same thing",
      "Neither relates to asset allocation"
    ],
    correct: 0,
    explain: "SAA decisions involve 'time in the market', whereas TAA is about 'timing the markets' — attempting to beat the market through short-term tilts."
  },
  {
    scenario: "A manager, working within a client's long-term policy mix, believes equities are temporarily overvalued and debt undervalued, expecting an equity correction.",
    q: "A TAA response would be to:",
    options: [
      "Temporarily reduce the equity proportion and increase debt, then rebalance to target after booking gains",
      "Permanently abandon the strategic allocation",
      "Sell the entire portfolio and hold cash forever",
      "Do nothing, since TAA forbids any change"
    ],
    correct: 0,
    explain: "In TAA the manager times markets — if equities look overvalued and debt undervalued, they may reduce equity and increase debt to exploit the discrepancy, then rebalance to the target allocation after booking gains."
  },
  {
    q: "According to Ibbotson & Kaplan (2000), building on Brinson, Hood & Beebower (1986), asset allocation explains approximately what share of the variation in a SINGLE fund's returns over time?",
    options: [
      "90 percent",
      "40 percent",
      "10 percent",
      "5 percent"
    ],
    correct: 0,
    explain: "For a single fund, asset allocation explains about 90% of the fund's variation in returns over time; across all portfolios it explains an average of about 40% of the variation."
  },

  /* ---------- 15.17 Rebalancing ---------- */
  {
    q: "The primary reason a portfolio needs periodic rebalancing is:",
    options: [
      "Price changes cause asset classes to produce different returns, drifting the portfolio away from its target allocation",
      "Brokers require it for commissions",
      "Regulations demand daily rebalancing",
      "Rebalancing guarantees higher returns"
    ],
    correct: 0,
    explain: "Over time, asset classes produce different returns that change the portfolio's asset allocation; to keep the original risk-return characteristics, the portfolio may require rebalancing (also triggered by changes in goals or risk tolerance)."
  },
  {
    q: "The IPS's rebalancing policy should answer questions relating to:",
    options: [
      "'How often' and 'how much' — the periodicity and the tolerance for deviation from the target",
      "The manager's holiday schedule",
      "The exchange's listing fees",
      "The colour scheme of statements"
    ],
    correct: 0,
    explain: "The IPS should include a rebalancing policy answering 'how often' and 'how much' — the periodicity for rebalancing and the tolerance for deviation from the target policy portfolio."
  },
  {
    q: "The two types of cost involved in rebalancing are:",
    options: [
      "Transaction cost and tax cost",
      "Fixed cost and variable cost",
      "Direct cost and indirect cost",
      "Setup cost and closing cost"
    ],
    correct: 0,
    explain: "There are two types of cost in rebalancing — transaction cost (research, brokerage etc.) and tax cost (liability from selling appreciated assets), plus a possible opportunity cost."
  },
  {
    scenario: "A portfolio holds a large allocation to private equity and real estate. The manager wants to rebalance frequently.",
    q: "The main practical difficulty is that:",
    options: [
      "These relatively illiquid investments pose higher transaction costs, making rebalancing harder than with listed equities or government bonds",
      "Private equity and real estate never change in value",
      "There is no tax on these assets",
      "Rebalancing is legally prohibited for such assets"
    ],
    correct: 0,
    explain: "Relatively illiquid investments like private equity and real estate pose challenges in rebalancing due to higher transaction costs; rebalancing is comparatively easier with more liquid assets like listed equities or government bonds."
  },
  {
    q: "Portfolio rebalancing fundamentally involves:",
    options: [
      "A trade-off between the cost of rebalancing and the cost of NOT rebalancing",
      "Always rebalancing daily regardless of cost",
      "Never rebalancing under any circumstances",
      "Guaranteeing zero tax"
    ],
    correct: 0,
    explain: "Rebalancing involves a simple trade-off: the cost of rebalancing versus the cost of not rebalancing. Any deviation from an optimal target is undesirable, but rebalancing costs (transaction, tax, opportunity) must be weighed."
  }

];
