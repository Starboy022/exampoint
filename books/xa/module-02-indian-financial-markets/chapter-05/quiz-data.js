/* ==========================================================================
   NISM Series-X-A · Module 2 · Chapter 5
   Introduction to the Indian Financial Markets — end-of-chapter question bank.

   Two shapes (see quiz-engine.js):
     Standard:  { q, options, correct, explain }
     Scenario:  { scenario, q, options, correct, explain }
   ========================================================================== */

window.NISM_CH05_QUESTIONS = [
  // ---------------- 5.1 Economy ----------------
  {
    q: "The Indian economy has evolved from being agriculture-based to one dominated by:",
    options: [
      "Services and manufacturing, contributing about three-fourths of GDP",
      "Mining and fisheries",
      "Only agriculture, which still dominates GDP",
      "Tourism alone"
    ],
    correct: 0,
    explain: "Services and manufacturing together now contribute roughly three-fourths of India's GDP."
  },
  {
    q: "In the financial system, foreign exchange markets primarily:",
    options: [
      "Set the price of agricultural commodities",
      "Affect import costs and enable global investment while mitigating currency risk",
      "Provide life insurance cover",
      "Issue government securities"
    ],
    correct: 1,
    explain: "Forex markets influence import costs and enable global investments while helping mitigate currency risk."
  },

  // ---------------- 5.2 Markets ----------------
  {
    q: "The core economic function of financial markets is to:",
    options: [
      "Guarantee profits to all investors",
      "Channel surplus funds from lenders/investors to borrowers/businesses",
      "Eliminate all investment risk",
      "Fix interest rates permanently"
    ],
    correct: 1,
    explain: "Financial markets allocate resources by channelling surplus funds from those with a surplus to those who need funds, aided by intermediaries."
  },
  {
    q: "Markets classified by MATURITY are:",
    options: [
      "Primary and secondary markets",
      "Money markets (short-term) and capital markets (long-term)",
      "Spot and forward markets",
      "Life and general markets"
    ],
    correct: 1,
    explain: "By maturity: money markets handle short-term (< 1 year) funds; capital markets provide long-term funding via debt and equity."
  },
  {
    scenario: "A company issues brand-new shares to the public for the first time to raise capital. Separately, an investor sells 100 of those shares to another investor a month later on the exchange.",
    q: "In which markets do these two events occur, respectively?",
    options: [
      "Both in the primary market",
      "The new issue in the primary market; the later sale in the secondary market",
      "The new issue in the secondary market; the later sale in the primary market",
      "Both in the money market"
    ],
    correct: 1,
    explain: "New securities are issued in the primary market (capital raising); subsequent trading between investors happens in the secondary market (liquidity & price discovery)."
  },

  // ---------------- 5.3 Regulators ----------------
  {
    q: "India follows a sectoral regulatory model. Which regulator oversees the securities market?",
    options: ["RBI", "SEBI", "IRDAI", "PFRDA"],
    correct: 1,
    explain: "SEBI regulates the securities market (and commodity derivatives). RBI = banks, IRDAI = insurance, PFRDA = pension."
  },
  {
    q: "The FSDC (Financial Stability and Development Council) is:",
    options: [
      "A stock exchange",
      "A government-established body that monitors financial stability, sector development and financial inclusion",
      "A credit rating agency",
      "A private bank"
    ],
    correct: 1,
    explain: "The FSDC is a government body monitoring and addressing financial stability, financial-sector development and financial inclusion."
  },
  {
    scenario: "A client is unhappy with how his life insurer computed the surrender value of a policy and wants to know which authority governs such terms.",
    q: "The correct regulator is:",
    options: ["SEBI", "IRDAI", "RBI", "PFRDA"],
    correct: 1,
    explain: "IRDAI regulates insurance and defines terms such as sum assured, surrender value, claims settlement, nomination and assignment."
  },
  {
    scenario: "An adviser is helping a subscriber understand the National Pension System (NPS) — its fund managers, custodians and central record-keeping agency.",
    q: "Which authority regulates all of this?",
    options: ["PFRDA", "SEBI", "EPFO", "IRDAI"],
    correct: 0,
    explain: "PFRDA, under the PFRDA Act, 2013, regulates the NPS and registers its fund managers, custodians, central record-keeping agency and trustee banks."
  },
  {
    q: "SEBI was established as a statutory body under:",
    options: [
      "The RBI Act, 1934",
      "The SEBI Act, 1992",
      "The Companies Act, 2013",
      "The SCRA, 1956"
    ],
    correct: 1,
    explain: "SEBI is a statutory body appointed by an Act of Parliament — the SEBI Act, 1992."
  },
  {
    q: "Which is NOT a core function of the RBI?",
    options: [
      "Formulating and monitoring monetary policy",
      "Acting as banker to the government and to banks",
      "Managing foreign exchange and issuing currency",
      "Licensing and regulating insurance companies"
    ],
    correct: 3,
    explain: "Licensing insurers is IRDAI's job. RBI handles monetary policy, is banker to government and banks, manages forex and issues currency."
  },
  {
    q: "IRDAI operates under which statute, and the life-insurance sector was opened to private players in which year?",
    options: [
      "IRDA Act 1999; opened in 2001",
      "SEBI Act 1992; opened in 1991",
      "PFRDA Act 2013; opened in 2005",
      "Companies Act 2013; opened in 2013"
    ],
    correct: 0,
    explain: "IRDAI is governed by the IRDA Act, 1999; the life-insurance sector was opened to private service providers in 2001."
  },

  // ---------------- Govt bodies / SRO ----------------
  {
    scenario: "A finance student is mapping the Ministry of Finance. She needs the department that is the nodal agency for macroeconomic policy and the functioning of the capital market, including stock exchanges.",
    q: "Which department is it?",
    options: [
      "Department of Revenue",
      "Department of Economic Affairs",
      "Department of Expenditure",
      "Department of Investment and Public Asset Management"
    ],
    correct: 1,
    explain: "The Department of Economic Affairs is the nodal agency for macroeconomic policy and covers the capital market including stock exchanges."
  },
  {
    q: "Which Ministry of Finance department administers policy for public-sector banks, insurance and pension reforms?",
    options: [
      "Department of Financial Services",
      "Department of Revenue",
      "Department of Expenditure",
      "Department of Economic Affairs"
    ],
    correct: 0,
    explain: "The Department of Financial Services administers policy for PSU banks, term-lending institutions, life & general insurance and pension reforms."
  },
  {
    q: "The Ministry of Corporate Affairs administers all of the following EXCEPT:",
    options: [
      "The Companies Act, 2013",
      "The Competition Act, 2002",
      "The SEBI Act, 1992",
      "Oversight of ICAI, ICSI and ICMAI"
    ],
    correct: 2,
    explain: "The SEBI Act is administered in the securities-market context by SEBI/DEA, not MCA. MCA handles the Companies Act, LLP Act, Competition Act and the three professional institutes."
  },
  {
    q: "Under SEBI (SRO) Regulations, 2004, a Self-Regulatory Organisation explicitly EXCLUDES:",
    options: [
      "A stock exchange",
      "A group of stock brokers",
      "A depository participant",
      "A mutual fund distributor body"
    ],
    correct: 0,
    explain: "The SRO definition covers an organisation of intermediaries recognised by SEBI but explicitly excludes a stock exchange."
  },

  // ---------------- 5.4.1 Banking ----------------
  {
    q: "The RBI supervises the financial sector through which body?",
    options: [
      "The Securities Appellate Tribunal",
      "The Board for Financial Supervision (BFS)",
      "The FSDC",
      "The Tariff Advisory Committee"
    ],
    correct: 1,
    explain: "The RBI performs its supervisory function under the guidance of the Board for Financial Supervision (BFS)."
  },
  {
    scenario: "A fintech wants to launch a bank that offers small savings accounts and remittances to low-income households, issues debit cards, but does no lending and caps deposits at ₹1 lakh per customer.",
    q: "This describes which category of bank?",
    options: ["Small Finance Bank", "Payment bank", "Regional Rural Bank", "Co-operative bank"],
    correct: 1,
    explain: "Payment banks accept demand deposits up to ₹1,00,000, issue ATM/debit (not credit) cards, offer payments/remittances, and cannot lend."
  },
  {
    scenario: "A borrower is turned away by banks as too high-risk, and approaches a company that does lending and hire-purchase but cannot offer a chequing facility or demand deposits and has no DICGC deposit insurance.",
    q: "This lender is a:",
    options: [
      "Scheduled commercial bank",
      "Non-Banking Finance Company (NBFC)",
      "Payment bank",
      "Co-operative bank"
    ],
    correct: 1,
    explain: "NBFCs do bank-like lending/leasing/hire-purchase but cannot accept demand deposits, cannot issue cheques and lack DICGC insurance — filling gaps banks won't reach."
  },
  {
    q: "Regulation of Housing Finance Companies has been taken over by which regulator?",
    options: [
      "The National Housing Bank",
      "The Reserve Bank of India",
      "SEBI",
      "The Ministry of Housing"
    ],
    correct: 1,
    explain: "HFCs were earlier regulated by the National Housing Bank; their regulation has since been taken over by the RBI."
  },
  {
    q: "Small Finance Banks are approved by the RBI primarily to:",
    options: [
      "Trade in the derivatives market",
      "Supply savings vehicles and credit to small businesses, marginal farmers, micro & small industries and the unorganised sector",
      "Only issue credit cards",
      "Manage the National Pension System"
    ],
    correct: 1,
    explain: "Small Finance Banks provide savings and banking facilities and supply credit to small businesses, marginal farmers, micro/small industries and the unorganised sector."
  },

  // ---------------- Money & forex ----------------
  {
    q: "Money-market instruments are characterised by maturities of:",
    options: ["Under one year", "1 to 5 years", "Over 10 years", "Exactly 7 years"],
    correct: 0,
    explain: "The money market trades short-term instruments with maturities under one year — call money, CPs, CDs, commercial bills and Treasury Bills."
  },
  {
    q: "Which of these is a money-market instrument?",
    options: ["Equity shares", "Treasury Bills", "A 10-year corporate bond", "A ULIP"],
    correct: 1,
    explain: "Treasury Bills (with call/short-notice money) are among the most significant money-market segments; equities and long bonds are capital-market instruments."
  },
  {
    scenario: "A trader quotes the pair USD/INR. A colleague asks which currency is the 'base' and which is the 'quoting' currency.",
    q: "The correct answer is:",
    options: [
      "USD is the base; INR is the quoting currency",
      "INR is the base; USD is the quoting currency",
      "Both are base currencies",
      "Neither — the pair has no base"
    ],
    correct: 0,
    explain: "The first currency in a pair is the base (USD); the second is the quoting currency (INR)."
  },
  {
    q: "Which body publishes daily reference rates for major currency pairs (USD/INR, EUR/INR, GBP/INR, JPY/INR) on Mumbai business days?",
    options: [
      "FBIL — Financial Benchmark India Pvt. Ltd.",
      "SEBI",
      "The Tariff Advisory Committee",
      "NSDL"
    ],
    correct: 0,
    explain: "FBIL publishes daily reference rates for the major currency pairs on Mumbai business days."
  },
  {
    q: "In the forex spot market's merchant segment, merchants are:",
    options: [
      "Market makers giving two-way quotes",
      "Price takers who buy/sell at the price given by banks",
      "The regulators of the market",
      "Not allowed to participate"
    ],
    correct: 1,
    explain: "In the interbank segment banks make the market with two-way quotes; in the merchant segment, merchants are price takers."
  },
  {
    q: "RBI has directed Credit Information Companies to furnish individuals a Free Full Credit Report:",
    options: ["Once a calendar year", "Once a month", "Only after taking a loan", "Never"],
    correct: 0,
    explain: "RBI directs CICs to furnish a Free Full Credit Report (including the credit score) to each individual borrower once in a calendar year."
  },
  {
    scenario: "A lending app wants to consolidate a customer's data held across banks and share it with a lender — but only with the customer's explicit, revocable consent.",
    q: "Which RBI-licensed entity performs this role?",
    options: ["A credit rating agency", "An Account Aggregator", "A depository participant", "A custodian"],
    correct: 1,
    explain: "Account Aggregators are RBI-licensed entities that consolidate customer financial data and share it with third parties only with the customer's express, revocable consent."
  },

  // ---------------- 5.4.2 Securities ----------------
  {
    q: "The term 'securities' is defined in:",
    options: [
      "Section 2(h) of the Securities Contracts (Regulation) Act, 1956",
      "The SEBI Act, 1992",
      "The Companies Act, 2013",
      "The RBI Act, 1934"
    ],
    correct: 0,
    explain: "Securities are defined in Section 2(h) of the SCRA, 1956 — shares, bonds, derivatives, CIS & MF units, G-secs, etc."
  },
  {
    q: "Which is EXCLUDED from the SCRA definition of 'securities'?",
    options: [
      "Government securities",
      "Mutual-fund units",
      "A unit-linked insurance policy combining life cover and investment",
      "Derivatives"
    ],
    correct: 2,
    explain: "ULIPs (combining life risk and investment, issued by insurers) are specifically excluded from the SCRA definition of securities."
  },
  {
    q: "India's two depositories are:",
    options: ["NSE and BSE", "NSDL and CDSL", "CIBIL and Experian", "NSDL and NSE"],
    correct: 1,
    explain: "NSDL and CDSL are the two depositories that hold securities in dematerialised (electronic) form."
  },
  {
    scenario: "An investor buys shares through her broker. The shares must be held electronically, in an account opened for her by an entity that acts as an agent of the depository.",
    q: "That entity is a:",
    options: [
      "Clearing corporation",
      "Depository Participant (DP)",
      "Credit rating agency",
      "Registrar and Transfer Agent"
    ],
    correct: 1,
    explain: "A Depository Participant acts as the depository's agent, opening and maintaining investors' demat accounts. Brokers and banks often provide DP services."
  },
  {
    q: "The role of a clearing corporation is to:",
    options: [
      "Issue new shares to the public",
      "Ensure confirmation, settlement and delivery of trades, with risk-management systems",
      "Rate the creditworthiness of bond issuers",
      "Advise clients on portfolio construction"
    ],
    correct: 1,
    explain: "Clearing corporations ensure the confirmation, settlement and delivery of exchange trades and run risk-management systems so a member's default doesn't threaten the system."
  },
  {
    scenario: "A large mutual fund needs an entity to hold its securities, manage its cash, settle its trades and collect corporate benefits on its behalf.",
    q: "Which intermediary provides this service, typically as a large bank?",
    options: ["A custodian", "A stock broker", "A depository participant", "An investment bank"],
    correct: 0,
    explain: "Custodians work with institutional investors — holding securities, managing cash, settling trades and collecting benefits/rights. They are usually large banks."
  },
  {
    q: "A key difference between an Asset Management Company and a Portfolio Manager is that a Portfolio Manager:",
    options: [
      "Issues units representing a pool of money",
      "Does NOT pool investors' money or issue any security — it manages a portfolio on the investor's behalf",
      "Is not allowed to charge a fee",
      "Is regulated by IRDAI"
    ],
    correct: 1,
    explain: "AMCs offer units representing a pooled portfolio (mutual funds). Portfolio managers neither pool money nor issue securities; they manage a portfolio for the investor. Both charge fees."
  },
  {
    q: "Credit rating agencies are especially important for which securities, and why?",
    options: [
      "Equity shares, to predict their price",
      "Debt securities, to signal the issuer's risk of default",
      "Currency pairs, to set exchange rates",
      "Insurance policies, to set premiums"
    ],
    correct: 1,
    explain: "Ratings matter most for debt securities, giving investors a standardised read on the issuer's default risk."
  },
  {
    scenario: "An investor completes KYC once, and later opens accounts with several intermediaries without re-submitting the same documents each time, because a central record is maintained.",
    q: "Which entity maintains this central KYC record for individuals?",
    options: [
      "The CKYC Registry (via KYC Registration Agencies like CVL, CAMS, NDML)",
      "The stock exchange",
      "The clearing corporation",
      "FBIL"
    ],
    correct: 0,
    explain: "KYC Registration Agencies maintain central KYC records — the CKYC Registry for individuals — so documents aren't re-submitted for every intermediary."
  },

  // ---------------- 5.4.3 Insurance ----------------
  {
    q: "Which life-insurance product is pure risk protection with NO maturity benefit?",
    options: ["Endowment policy", "Whole life policy", "Term insurance", "ULIP"],
    correct: 2,
    explain: "Term insurance is pure protection — the sum assured is paid only if the insured event (death) occurs; there is no maturity benefit."
  },
  {
    q: "In insurance distribution, an individual agent is typically permitted to represent:",
    options: [
      "Any number of insurers across all lines",
      "One life insurer, one general insurer and one standalone health insurer",
      "Only one insurer of any type",
      "Only foreign insurers"
    ],
    correct: 1,
    explain: "Individual agents are IRDAI-certified and typically represent one life insurer, one general insurer and one standalone health insurance company. Brokers, by contrast, can sell any company's policies."
  },
  {
    scenario: "After a car accident, a general insurer needs an independent professional to assess the claim and quantify the loss before settlement.",
    q: "Who performs this assessment?",
    options: [
      "A third-party administrator (TPA)",
      "A surveyor and loss assessor",
      "A depository participant",
      "A registrar and transfer agent"
    ],
    correct: 1,
    explain: "Surveyors and loss assessors are used by general insurers to assess claims and the quantum of loss. TPAs process health-insurance claims."
  },

  // ---------------- 5.4.4 Pension ----------------
  {
    q: "The National Pension System (NPS) is best described as:",
    options: [
      "A defined-benefit scheme with a fixed pension by rank",
      "A voluntary, defined-contribution scheme offering a menu of fund managers and investment choices",
      "A life-insurance product regulated by IRDAI",
      "A money-market instrument"
    ],
    correct: 1,
    explain: "The NPS is a voluntary, defined-contribution retirement scheme with a choice of fund managers and investment options, regulated by PFRDA."
  },
  {
    scenario: "A private-sector employee's retirement savings are built through mandatory contributions from both herself and her employer, administered by a statutory organisation, with part of the employer's share earmarked for a pension scheme.",
    q: "This describes:",
    options: [
      "The Employee Provident Fund (EPF/EPFO), with part funding the Employee Pension Scheme",
      "The National Pension System only",
      "A unit-linked insurance plan",
      "A defined-benefit government pension"
    ],
    correct: 0,
    explain: "Private-sector retirement is largely covered by the EPF (administered by EPFO), with employee and employer contributing; part of the employer's contribution funds the Employee Pension Scheme."
  }
];
