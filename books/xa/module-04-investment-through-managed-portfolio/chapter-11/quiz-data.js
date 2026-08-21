/* ==========================================================================
   NISM Series-X-A · Module 4 · Chapter 11 — Mutual Funds
   Question bank for the end-of-chapter assessment.

   Shapes:
     Standard  { q, options:[...], correct, explain }
     Scenario  { scenario, q, options:[...], correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH11_QUESTIONS = [

  /* ---------- 11.1 Meaning & features ---------- */
  {
    q: "A mutual fund allows investors to:",
    options: [
      "Get exposure to an asset class of their choice (equity, debt, gold, real estate) through a pooled, professionally managed vehicle",
      "Guarantee a fixed rate of return regardless of market movements",
      "Avoid all regulation by SEBI",
      "Trade only in physical commodities"
    ],
    correct: 0,
    explain: "Mutual funds are investment products through which investors can invest in an asset class of their choice such as equity, debt, gold or real estate — getting exposure to the same securities without investing directly."
  },
  {
    q: "Who is the <strong>promoter</strong> of a mutual fund?",
    options: [
      "The sponsor",
      "The trustees",
      "The AMC",
      "The custodian"
    ],
    correct: 0,
    explain: "A mutual fund is set up by a sponsor, who is its promoter. Trustees are appointed to protect investor interests, and an AMC is appointed to manage the schemes."
  },
  {
    q: "The entity appointed to take care of the interests of investors in the various schemes of a mutual fund is the:",
    options: [
      "Trustees",
      "Sponsor",
      "Registrar &amp; Transfer (R&amp;T) agent",
      "Custodian"
    ],
    correct: 0,
    explain: "Trustees are appointed to take care of the interests of the investors in the various schemes launched by the mutual fund."
  },
  {
    q: "The Asset Management Company (AMC) is responsible for:",
    options: [
      "Launching and marketing a scheme, collecting funds, investing per the scheme's objective and enabling investor transactions",
      "Protecting investor interests as a fiduciary trustee",
      "Only holding the securities in safe custody",
      "Regulating the mutual fund industry"
    ],
    correct: 0,
    explain: "The AMC manages the activities related to launching a scheme, marketing it, collecting funds, investing per the scheme's investment objectives and enabling investor transactions. It creates a product with the approval of the trustees and SEBI."
  },
  {
    q: "The offer document issued when a scheme first invites subscription from investors is called the:",
    options: [
      "New Fund Offer (NFO)",
      "Follow-on Public Offer (FPO)",
      "Rights issue",
      "Private placement memorandum"
    ],
    correct: 0,
    explain: "The mutual fund invites subscription by issuing an offer document giving all details of the proposed fund — this is the New Fund Offer (NFO) of the scheme."
  },
  {
    q: "The abridged offer document available with the application form, containing essential scheme information, is the:",
    options: [
      "Key Information Memorandum (KIM)",
      "Scheme Information Document (SID)",
      "Statement of Additional Information (SAI)",
      "Annual Report"
    ],
    correct: 0,
    explain: "The application form along with the abridged offer document called the Key Information Memorandum (KIM) is available with the AMC, investor service centres and other distribution points."
  },
  {
    q: "Which entity maintains investor records, investment details and communicates with investors?",
    options: [
      "The Registrar &amp; Transfer (R&amp;T) agent",
      "The custodian",
      "The sponsor",
      "The stock exchange"
    ],
    correct: 0,
    explain: "The activities related to maintaining investor records and investment details and communicating with investors is done by the R&T agent of the scheme."
  },
  {
    q: "The portfolio of securities built from investors' pooled money is owned by:",
    options: [
      "The investors who contributed the funds, in proportion to their contribution",
      "The AMC that manages it",
      "The sponsor who promoted the fund",
      "SEBI, as the regulator"
    ],
    correct: 0,
    explain: "The funds are invested in a portfolio that reflects the stated objective. This portfolio is owned only by the investors who have contributed the funds, in proportion to their contribution."
  },

  /* ---------- 11.2 Concepts & terms ---------- */
  {
    q: "A mutual fund scheme is fundamentally defined by its:",
    options: [
      "Investment objective",
      "Expense ratio",
      "Fund manager's name",
      "Number of units outstanding"
    ],
    correct: 0,
    explain: "A mutual fund scheme is defined by its investment objective, which states what the scheme intends to achieve. The asset class, securities selected and management style all depend on it."
  },
  {
    scenario: "A &amp; B invest in GTX Equity Fund when the price of each unit is ₹10. A invests ₹5,000 and B invests ₹10,000.",
    q: "How many units are allotted to A and B respectively?",
    options: [
      "500 units and 1,000 units",
      "50 units and 100 units",
      "5,000 units and 10,000 units",
      "1,000 units and 500 units"
    ],
    correct: 0,
    explain: "Units = amount invested ÷ price per unit. A: 5,000 ÷ 10 = 500 units. B: 10,000 ÷ 10 = 1,000 units. Each unit represents one share of the fund."
  },
  {
    q: "Mutual fund units:",
    options: [
      "Can be allotted in decimals, so the investor gets value for their entire investment",
      "Must always be allotted in whole numbers only",
      "Can only be bought in lots of 100",
      "Represent debt owed by the fund to the investor"
    ],
    correct: 0,
    explain: "Units can be allotted in decimals too, which ensures the investor gets value for their entire investment amount."
  },
  {
    q: "The <strong>net assets</strong> of a scheme are:",
    options: [
      "Total assets (current market value of the portfolio plus current assets) minus the fees and expenses of managing the fund",
      "Only the cash held by the scheme",
      "The face value of all units issued",
      "The sponsor's capital contribution"
    ],
    correct: 0,
    explain: "Total assets = current value of the portfolio plus current assets (cash, receivables). From this, fees and expenses of managing the fund are deducted to arrive at the net assets, which belong to the unit holders."
  },
  {
    q: "Which of the following will cause the net assets of a scheme to <strong>go up</strong>?",
    options: [
      "Investors buying additional units, the portfolio rising in value, or income (dividend/interest) earned by the portfolio",
      "Investors redeeming their units",
      "A fall in the value of the securities held",
      "Accounting for scheme expenses"
    ],
    correct: 0,
    explain: "Net assets rise when investors bring in fresh money, when portfolio value rises, or when the portfolio earns income. They fall on redemptions, falls in value, or when expenses are accounted for."
  },
  {
    q: "The Net Asset Value (NAV) of a scheme is calculated as:",
    options: [
      "Net assets ÷ Number of outstanding units",
      "Total assets ÷ Face value",
      "Net assets × Number of outstanding units",
      "Number of units ÷ Net assets"
    ],
    correct: 0,
    explain: "NAV = Net assets ÷ Number of outstanding units of the scheme. All investor transactions are conducted at the current NAV."
  },
  {
    scenario: "NUM Equity Fund collects ₹1,00,000 and allots 10,000 units (NAV ₹10). Later the portfolio value rises so net assets become ₹1,20,000, with units outstanding unchanged at 10,000.",
    q: "What is the new NAV?",
    options: [
      "₹12",
      "₹10",
      "₹11.11",
      "₹1.20"
    ],
    correct: 0,
    explain: "NAV = 1,20,000 ÷ 10,000 = ₹12. An increase in net assets (portfolio rising) has led to a rise in NAV."
  },
  {
    scenario: "In NUM Equity Fund, net assets are ₹1,20,000 with 10,000 units (NAV ₹12). An investor now redeems 1,000 units when NAV is ₹12.",
    q: "What happens to the NAV immediately after this redemption?",
    options: [
      "It stays at ₹12 — the fall in net assets is exactly offset by the fall in units",
      "It rises to ₹13.33",
      "It falls to ₹10",
      "It falls to ₹11.11"
    ],
    correct: 0,
    explain: "Net assets fall to ₹1,08,000 and units to 9,000, so NAV = 1,08,000 ÷ 9,000 = ₹12. A redemption at NAV does not change the NAV, because the decrease in net assets is offset by the decrease in units."
  },
  {
    scenario: "A scheme's NAV is ₹11.11 (net assets ₹1,00,000, 9,000 units). Hypothetically an investor buying 1,000 units is wrongly allotted units at the ₹10 face value, bringing in ₹10,000.",
    q: "What is the impact on the NAV, and why does it matter?",
    options: [
      "NAV falls to ₹11 — allotting units at a price different from NAV harms all existing investors",
      "NAV stays at ₹11.11 because transactions are always at NAV",
      "NAV rises to ₹12 benefiting existing investors",
      "There is no impact as face value equals NAV"
    ],
    correct: 0,
    explain: "Net assets become ₹1,10,000 and units 10,000, so NAV = ₹11. Because units were allotted at a price (₹10) different from NAV (₹11.11), the NAV falls and this impacts all investors — which is why transactions must be conducted at NAV."
  },
  {
    q: "The NAV of a scheme (other than liquid schemes) is calculated:",
    options: [
      "Every business day",
      "Once a week",
      "Only at the end of each month",
      "Only when an investor requests it"
    ],
    correct: 0,
    explain: "The NAV of a scheme (other than liquid schemes, where NAV is calculated on a daily basis including holidays) is calculated every business day so that investors can value holdings and transact."
  },
  {
    q: "The purpose of standard <strong>cut-off timings</strong> across all mutual funds is to:",
    options: [
      "Ensure equity and fairness so no investor gets preferential treatment in NAV allocation",
      "Reduce the fund's expense ratio",
      "Guarantee same-day redemption for all schemes",
      "Allow the AMC to choose the most favourable NAV"
    ],
    correct: 0,
    explain: "Cut-off timings are a standard followed across all mutual funds so there is equity and fairness in allocation and no investor gets preferential treatment. The applicable NAV depends on when the request is received, provided clear funds hit the account by cut-off time."
  },
  {
    q: "The process of valuing a scheme's portfolio daily at current market prices is called:",
    options: [
      "Marking to market",
      "Amortisation",
      "Rupee cost averaging",
      "Load balancing"
    ],
    correct: 0,
    explain: "Marking to market is valuing the portfolio on a daily basis at current value — the price at which it would be realised if liquidated. If a security is not traded or the price is stale, SEBI has laid down the valuation method."
  },

  /* ---------- 11.3 Open/Close/Interval/ETF ---------- */
  {
    q: "An <strong>open-ended</strong> scheme:",
    options: [
      "Allows investors to buy additional units and redeem continuously at the current NAV, and runs in perpetuity",
      "Offers units only during the NFO and has a fixed tenor",
      "Cannot ever be wound up",
      "Has a fixed, unchanging unit capital"
    ],
    correct: 0,
    explain: "An open-ended scheme allows continuous investment and redemption at current NAV and is for perpetuity unless investors wind it up. Its unit capital changes with every investment or redemption."
  },
  {
    q: "In a <strong>closed-end</strong> scheme, an investor who wants to exit before the term ends can:",
    options: [
      "Sell the units to other investors on a stock exchange where the scheme is mandatorily listed",
      "Redeem directly with the AMC at NAV any day",
      "Only wait until the scheme matures with no interim exit",
      "Convert the units into an open-ended scheme at will"
    ],
    correct: 0,
    explain: "A closed-end scheme offers units only during the NFO and is closed thereafter. To exit in the interim, investors sell units to other investors on the stock exchange, where closed-end schemes are mandatorily listed. The fund's unit capital does not change (though AUM at MTM will)."
  },
  {
    q: "<strong>Interval funds</strong> are:",
    options: [
      "A variant of closed-end funds that become open-ended during specified transaction periods (minimum 2 days, with a minimum 15-day gap between periods)",
      "Open-ended funds that close permanently after one year",
      "Funds that trade continuously like a stock all day",
      "Funds with no listing requirement"
    ],
    correct: 0,
    explain: "Interval funds are a variant of closed-end funds that become open-ended during specified periods (minimum two days, with a minimum gap of 15 days between two transaction periods). Like closed-ended funds, they must be listed on a stock exchange."
  },
  {
    q: "A key difference between an <strong>ETF</strong> and a normal open-ended fund is that:",
    options: [
      "In an ETF investors trade with each other on the exchange at multiple intraday prices; in an open-ended fund the investor transacts with the mutual fund at a single day's NAV",
      "ETFs are not linked to any underlying portfolio",
      "ETFs can never track an index",
      "Open-ended funds are listed and traded all day like a stock"
    ],
    correct: 0,
    explain: "ETFs are listed on the exchange and can be traded all day at multiple prices — investors trade with each other. In an open-ended fund, the investor is on one side and the mutual fund on the other, at a single NAV for the day."
  },

  /* ---------- 11.4 Regulatory framework ---------- */
  {
    q: "The primary regulator of mutual funds in India is:",
    options: [
      "SEBI, under the SEBI (Mutual Funds) Regulations, 1996",
      "RBI, under the Banking Regulation Act",
      "AMFI, under the Companies Act",
      "IRDAI, under the Insurance Act"
    ],
    correct: 0,
    explain: "SEBI is the primary regulator. The SEBI (Mutual Funds) Regulations, 1996 (with amendments) govern setting up a fund, launching schemes, managing portfolios, investor protection and services."
  },
  {
    q: "Which body is the <strong>industry association</strong> that recommends best practices and represents the mutual fund industry to the regulator?",
    options: [
      "AMFI (Association of Mutual Funds in India)",
      "SEBI",
      "RBI",
      "NISM"
    ],
    correct: 0,
    explain: "AMFI is the industry body that oversees the functioning of the industry, recommends best practices, and represents the industry's requirements to the regulator, government and other stakeholders."
  },
  {
    q: "Apart from SEBI, the <strong>RBI</strong> is involved in mutual funds specifically for:",
    options: [
      "Foreign exchange transactions such as international investments, investments by foreign nationals, and the banking system's role",
      "Approving every scheme's NFO",
      "Setting the NAV of debt schemes",
      "Appointing the trustees"
    ],
    correct: 0,
    explain: "The RBI is involved for specific areas involving foreign exchange transactions — investments in international markets, investments by foreign nationals, and the role of the banking system in the industry."
  },
  {
    q: "The <strong>MF Lite</strong> regulations rolled out by SEBI on 31 December 2024 apply to:",
    options: [
      "Mutual funds running only passive funds",
      "All actively managed equity funds",
      "Only closed-end debt funds",
      "Foreign portfolio investors"
    ],
    correct: 0,
    explain: "On 31 December 2024, SEBI rolled out MF Lite regulations, applicable to Mutual Funds running only passive funds."
  },

  /* ---------- 11.5 Products: equity ---------- */
  {
    q: "SEBI permits how many schemes per category for each mutual fund?",
    options: [
      "Only one scheme per category (with exceptions like index funds/ETFs on different indices, FoFs with different underlying schemes, and sectoral/thematic funds)",
      "Unlimited schemes per category",
      "Exactly two schemes per category",
      "Five schemes per category"
    ],
    correct: 0,
    explain: "Only one scheme per category is permitted per mutual fund. Exceptions are index funds and ETFs tracking different indices, Fund of Funds with different underlying schemes, and sectoral/thematic funds investing in different sectors/themes."
  },
  {
    q: "The difference between a <strong>passive</strong> and an <strong>active</strong> equity fund is that:",
    options: [
      "A passive fund simply replicates an index in the same proportion with no stock selection; an active fund selects stocks aiming to beat the index",
      "A passive fund selects stocks to beat the index; an active fund replicates an index",
      "Both replicate an index, differing only in fees",
      "A passive fund can only hold debt securities"
    ],
    correct: 0,
    explain: "Passive funds invest in the companies of an index in the same proportion, with no security selection. Active funds select stocks based on a strategy intended to generate higher returns than the index — carrying selection risk."
  },
  {
    q: "As classified by SEBI, <strong>large-cap</strong> companies are those ranked:",
    options: [
      "1st to 100th by full market capitalisation in the AMFI list",
      "101st to 250th by full market capitalisation",
      "251st onwards by full market capitalisation",
      "Any company with a share price above ₹1,000"
    ],
    correct: 0,
    explain: "Large-cap companies are ranked 1 to 100 in terms of full market capitalisation in the AMFI list. A large-cap fund must invest at least 80% of total assets in such companies."
  },
  {
    q: "To be classified as a <strong>large-cap fund</strong>, the minimum investment in large-cap companies is:",
    options: [
      "At least 80% of total assets",
      "At least 65% of total assets",
      "At least 35% of total assets",
      "At least 50% of total assets"
    ],
    correct: 0,
    explain: "To be classified as a large-cap fund, at least 80% of the total assets should be invested in large-cap companies."
  },
  {
    q: "<strong>Mid-cap</strong> companies are ranked ___ by full market capitalisation, and a mid-cap fund must invest at least ___ in them.",
    options: [
      "101st to 250th; 65%",
      "1st to 100th; 80%",
      "251st onwards; 65%",
      "101st to 250th; 35%"
    ],
    correct: 0,
    explain: "Mid-cap companies are ranked 101st to 250th by full market capitalisation. To be classified as a mid-cap fund, at least 65% of total assets must be invested in such companies."
  },
  {
    q: "A <strong>Large &amp; Mid-cap fund</strong> must invest:",
    options: [
      "A minimum of 35% of total assets in large-cap and a minimum of 35% in mid-cap companies",
      "At least 80% in large-cap only",
      "At least 65% in small-cap companies",
      "100% in mid-cap companies"
    ],
    correct: 0,
    explain: "A Large &amp; Mid-cap fund must invest a minimum of 35% of total assets in large-cap companies and a minimum of 35% in mid-cap companies."
  },
  {
    q: "<strong>Small-cap</strong> companies are defined as those ranked:",
    options: [
      "251st onwards by full market capitalisation in the AMFI list",
      "1st to 100th",
      "101st to 250th",
      "Only unlisted companies"
    ],
    correct: 0,
    explain: "Companies ranked from 251 onwards by total market capitalisation in the AMFI list are small-cap. A small-cap fund must invest at least 65% of total assets in such companies."
  },
  {
    q: "Under current SEBI norms, a <strong>Multi-cap fund</strong> must invest:",
    options: [
      "At least 75% in equity, with a minimum of 25% each in large-cap, mid-cap and small-cap",
      "At least 65% in large-cap only",
      "100% in a single market-cap segment",
      "A minimum of 10% in each of three asset classes"
    ],
    correct: 0,
    explain: "A multi-cap fund must invest at least 75% of assets in equity, with a minimum of 25% in large-caps, 25% in mid-caps and 25% in small-caps."
  },
  {
    q: "A <strong>Flexicap fund</strong> is distinguished by:",
    options: [
      "No minimum investment limits across market caps (free to invest per its view), with at least 65% of the corpus in equities",
      "A mandatory 25% in each market-cap segment",
      "Investing only in large-cap stocks",
      "Holding at least 80% in a single sector"
    ],
    correct: 0,
    explain: "In flexicap funds there are no minimum limits across market caps and the fund is free to invest per its requirements. Overall at least 65% of the corpus must be in equities."
  },
  {
    q: "A <strong>sector fund</strong> (e.g. banking or technology) carries higher risk mainly because:",
    options: [
      "It is concentrated in one sector with less diversification, and sector performance tends to be cyclical",
      "It is forced to hold cash at all times",
      "It cannot invest more than 20% in equities",
      "It is a closed-end fund by law"
    ],
    correct: 0,
    explain: "Sector funds concentrate in a particular sector, so risk is higher due to less diversification. Sector performance is cyclical, so investments must be timed well. An open-ended sector fund must invest at least 80% of total assets in that sector's equity."
  },
  {
    q: "Compared with sector funds, <strong>theme-based funds</strong> are:",
    options: [
      "More diversified (they span multiple sectors within a theme) but still carry high concentration risk; at least 80% must be in the theme",
      "Less diversified than sector funds",
      "Required to invest only in a single stock",
      "Restricted to government securities"
    ],
    correct: 0,
    explain: "Theme funds invest across multiple sectors forming a theme (e.g. infrastructure spans construction, cement, banking, logistics). They are more diversified than sector funds but still have high concentration risk; at least 80% of assets must be in the theme."
  },
  {
    q: "Under the Thematic category, an <strong>ESG</strong> scheme can be launched with strategies such as:",
    options: [
      "Exclusion, Integration, Best-in-class &amp; Positive Screening, Impact investing, Sustainable objectives, and Transition-related investments",
      "Only large-cap selection",
      "Only arbitrage between cash and futures",
      "Only investing in government securities"
    ],
    correct: 0,
    explain: "An ESG scheme (under Thematic) can follow one of: Exclusion, Integration, Best-in-class &amp; Positive Screening, Impact investing, Sustainable objectives, or Transition/transition-related investments."
  },
  {
    q: "A <strong>Value fund</strong> seeks to:",
    options: [
      "Identify companies trading below their inherent value, benefiting as the market recognises true value (lower risk, longer horizon; min 65% in equity)",
      "Buy only the most expensive momentum stocks",
      "Hold a concentrated portfolio of at most 30 stocks",
      "Invest only in high-dividend-yield stocks"
    ],
    correct: 0,
    explain: "Value funds identify companies trading below inherent value, expecting to benefit as the market recognises it. Such funds carry lower risk and need a longer horizon. At least 65% of assets must be in equity."
  },
  {
    q: "SEBI's rule regarding <strong>Value</strong> and <strong>Contra</strong> funds is that an AMC:",
    options: [
      "Can offer either a Value fund or a Contra fund, but not both",
      "Must offer both a Value and a Contra fund",
      "Can offer neither",
      "Can offer unlimited numbers of each"
    ],
    correct: 0,
    explain: "A Contra fund adopts a contrarian strategy, buying undervalued/underperforming stocks. An AMC can have either a Value or a Contra fund, not both."
  },
  {
    q: "<strong>Dividend yield funds</strong> invest in:",
    options: [
      "Stocks with high dividend yield — typically stable earners bought for pay-out rather than capital appreciation (min 65% in equity)",
      "Only zero-dividend growth stocks",
      "Only bonds paying high coupons",
      "Undervalued turnaround stocks"
    ],
    correct: 0,
    explain: "Dividend yield funds invest in stocks with high dividend yield — companies with stable earnings but limited growth, bought for dividend pay-out rather than capital appreciation. At least 65% of assets must be in equity."
  },
  {
    q: "SEBI limits the number of stocks in a <strong>Focused fund</strong> portfolio to:",
    options: [
      "30 stocks",
      "50 stocks",
      "100 stocks",
      "There is no limit"
    ],
    correct: 0,
    explain: "Focused funds hold a concentrated portfolio; SEBI's regulation limits the number of stocks to 30. Risk may be higher because diversification is lower."
  },
  {
    scenario: "Ramesh, filing under the old tax regime, wants an equity fund that also gives him a tax deduction under Section 80C. His adviser suggests an ELSS.",
    q: "Which statement about ELSS is correct?",
    options: [
      "It gives a Section 80C deduction up to ₹1,50,000/year, must hold at least 80% in equity, and has a 3-year lock-in during which units can't be redeemed, transferred or pledged",
      "It has no lock-in and can be redeemed any day",
      "It provides tax benefits under the new tax regime only",
      "It must hold at least 80% in debt securities"
    ],
    correct: 0,
    explain: "ELSS is an open-end equity fund giving Section 80C deduction up to ₹1,50,000/year (old regime). It must hold at least 80% in equity and locks in the investment for 3 years, during which it cannot be redeemed, transferred or pledged."
  },

  /* ---------- 11.5.2 Debt funds ---------- */
  {
    q: "<strong>Overnight funds</strong> invest in securities with a maturity of:",
    options: [
      "One day",
      "91 days",
      "One year",
      "Three years"
    ],
    correct: 0,
    explain: "Overnight funds invest in securities with a maturity of one day."
  },
  {
    q: "<strong>Liquid funds</strong> invest in debt securities with a maturity of:",
    options: [
      "Less than 91 days",
      "One day only",
      "Between 3 and 6 months (Macaulay duration)",
      "Greater than 7 years"
    ],
    correct: 0,
    explain: "Liquid funds invest in debt securities with less than 91 days to maturity."
  },
  {
    q: "Match the debt fund to its Macaulay duration band: an <strong>Ultra Short Duration Fund</strong> has a portfolio Macaulay duration of:",
    options: [
      "3 months to 6 months",
      "6 months to 12 months",
      "1 year to 3 years",
      "Greater than 7 years"
    ],
    correct: 0,
    explain: "Ultra Short Duration Funds invest such that the Macaulay duration of the portfolio is between 3 months and 6 months. (Low Duration = 6–12 months; Short Duration = 1–3 years.)"
  },
  {
    q: "A <strong>Low Duration Fund</strong> maintains a portfolio Macaulay duration of:",
    options: [
      "6 months to 12 months",
      "3 months to 6 months",
      "1 year to 3 years",
      "3 years to 4 years"
    ],
    correct: 0,
    explain: "Low Duration Funds invest such that the Macaulay duration of the fund is between 6 months and 12 months."
  },
  {
    q: "The Macaulay duration bands for Short / Medium / Medium-to-Long duration funds are respectively:",
    options: [
      "1–3 years / 3–4 years / 4–7 years",
      "3–6 months / 6–12 months / 1–3 years",
      "4–7 years / 7–10 years / &gt;10 years",
      "1–2 years / 2–5 years / 5–10 years"
    ],
    correct: 0,
    explain: "Short duration = 1–3 years; Medium duration = 3–4 years; Medium to Long duration = 4–7 years. For Medium and Medium-to-Long funds, duration may be reduced to one year in anticipated adverse situations."
  },
  {
    q: "A <strong>Long Duration Fund</strong> invests such that the portfolio Macaulay duration is:",
    options: [
      "Greater than 7 years",
      "Between 4 and 7 years",
      "Between 1 and 3 years",
      "Exactly 10 years"
    ],
    correct: 0,
    explain: "A Long Duration fund invests in debt and money market securities such that the Macaulay duration of the portfolio is greater than 7 years."
  },
  {
    q: "In a <strong>falling interest rate</strong> scenario, long-term debt funds tend to:",
    options: [
      "Post higher returns, as falling rates cause mark-to-market gains that augment interest income",
      "Post lower returns than liquid funds",
      "Suffer capital losses",
      "Be unaffected by rate changes"
    ],
    correct: 0,
    explain: "Market rates and bond values move inversely, so falling rates cause a mark-to-market gain. Long-term debt funds then post higher returns, as interest income is augmented by capital gains — greater the tenor, greater the impact."
  },
  {
    q: "A <strong>Corporate bond fund</strong> must invest at least 80% of total assets in corporate debt rated:",
    options: [
      "AA+ and above",
      "AA and below",
      "A and below",
      "Any rating"
    ],
    correct: 0,
    explain: "A Corporate bond fund invests at least 80% of total assets in corporate debt instruments rated AA+ and above."
  },
  {
    q: "A <strong>Credit Risk Fund</strong> invests a minimum of 65% of total assets in corporate debt rated:",
    options: [
      "AA and below",
      "AA+ and above",
      "AAA only",
      "Government securities only"
    ],
    correct: 0,
    explain: "Credit Risk Funds invest a minimum of 65% of total assets in corporate debt instruments rated AA and below — taking on higher credit risk for higher yield."
  },
  {
    q: "A <strong>Banking &amp; PSU fund</strong> invests a minimum of 80% of total assets in debt of:",
    options: [
      "Banks, Public Financial Institutions, PSUs and municipal bonds",
      "Only private corporate issuers",
      "Only equity of banks",
      "Government securities across maturities"
    ],
    correct: 0,
    explain: "A Banking and PSU fund invests a minimum of 80% of total assets in debt instruments of banks, Public Financial Institutions, Public Sector Undertakings and municipal bonds."
  },
  {
    q: "<strong>Gilt funds</strong> invest at least 80% in government securities. Their key risk is:",
    options: [
      "High sensitivity to interest rate changes (though there is no default risk)",
      "High default/credit risk",
      "Low liquidity of the underlying securities",
      "Currency risk"
    ],
    correct: 0,
    explain: "Open-ended gilt funds invest at least 80% in government securities across maturities. There is no default risk and liquidity is high, but prices are very sensitive to interest rate changes. They are popular with provident funds/PF trusts mandated to hold G-secs."
  },
  {
    q: "A <strong>Dynamic bond fund</strong> is characterised by:",
    options: [
      "Flexible, dynamic management across durations — moving along the yield curve as its interest-rate view changes, with no fixed maturity restriction",
      "A fixed maturity that matches the scheme term",
      "Holding only floating-rate instruments",
      "Investing only in AAA corporate bonds"
    ],
    correct: 0,
    explain: "Dynamic bond funds have no restrictions on security type or maturity. They move across the yield curve to exploit yield changes; if rates are expected to rise, duration is reduced and vice versa. SEBI categorises them as investing 'across durations'."
  },
  {
    q: "An open-ended <strong>Floating Rate fund</strong> invests a minimum of 65% in floating-rate instruments, whose key feature is:",
    options: [
      "The coupon is periodically reset to a market benchmark, giving low interest-rate risk",
      "The coupon is fixed for the entire term",
      "They never pay any coupon",
      "They are always long-duration"
    ],
    correct: 0,
    explain: "Floating rate funds invest a minimum of 65% in floating-rate instruments, whose coupon is periodically revised (e.g. every 6 months) with reference to a market rate. Because the coupon tracks market rates, interest-rate risk is low."
  },
  {
    scenario: "Interest rates are expected to rise. An investor wants to lock into current high yields and is comfortable holding for a fixed 3-year term, matched to the underlying securities' maturity.",
    q: "Which product best fits, and why?",
    options: [
      "A Fixed Maturity Plan (FMP) — a closed-end fund whose securities' maturities match the scheme term, eliminating price risk if held to maturity and locking in high yields",
      "A liquid fund, because it has the lowest risk",
      "A long-duration gilt fund, to maximise capital gains",
      "An overnight fund, for daily liquidity"
    ],
    correct: 0,
    explain: "FMPs are closed-end funds investing in debt with maturities matching the scheme term. Held passively to maturity, price/interest-rate risk is eliminated — making them the preferred choice in a rising-rate environment, as investors lock into high yields."
  },
  {
    q: "How does a <strong>Target Maturity Fund (TMF)</strong> differ from an FMP?",
    options: [
      "A TMF is open-ended (can be bought/redeemed with the AMC) and has a wider maturity range, whereas an FMP is closed-end",
      "A TMF is always shorter than an FMP",
      "A TMF has no defined maturity date",
      "An FMP is open-ended and a TMF is closed-end"
    ],
    correct: 0,
    explain: "Target Maturity Funds have a defined maturity date, are open-ended (purchased from/redeemed with the AMC), and have a wider maturity range than FMPs (3–15 years floated). Both FMPs and TMFs have maturity roll-down — residual maturity falls each day."
  },

  /* ---------- 11.5.3 Hybrid funds ---------- */
  {
    q: "A <strong>Conservative Hybrid Fund</strong> invests:",
    options: [
      "75%–90% in debt and 10%–25% in equity, focusing on regular income with limited equity exposure",
      "65%–80% in equity and 20%–35% in debt",
      "40%–60% in each of debt and equity",
      "Equal 10% in at least three asset classes"
    ],
    correct: 0,
    explain: "Conservative hybrid funds invest 75%–90% in debt and 10%–25% in equity. The debt is conservatively managed for regular income; equity is low and mostly large-cap. They are taxed as debt funds and suit traditional debt investors seeking limited equity exposure."
  },
  {
    q: "An <strong>Aggressive Hybrid Fund</strong> invests:",
    options: [
      "65%–80% in equity and 20%–35% in debt",
      "75%–90% in debt and 10%–25% in equity",
      "40%–60% in each of equity and debt",
      "At least 95% in a single underlying fund"
    ],
    correct: 0,
    explain: "Aggressive Hybrid Funds are predominantly equity-oriented, investing 65%–80% in equity and 20%–35% in debt. A mutual fund may offer either an Aggressive Hybrid or a Balanced Hybrid fund (not both)."
  },
  {
    q: "A <strong>Balanced Hybrid Fund</strong> allocates:",
    options: [
      "40%–60% in debt and 40%–60% in equity",
      "75%–90% in debt",
      "65%–80% in equity",
      "At least 65% in arbitrage positions"
    ],
    correct: 0,
    explain: "A Balanced Hybrid Fund invests 40%–60% of total assets in debt and 40%–60% in equity. Mutual funds may offer either an Aggressive Hybrid or a Balanced Hybrid fund."
  },
  {
    q: "A <strong>Dynamic Asset Allocation / Balanced Advantage</strong> fund typically:",
    options: [
      "Dynamically manages equity–debt allocation, often taking short/contra equity positions to cut net exposure while keeping over 65% long equity for tax purposes",
      "Holds a fixed 50:50 equity–debt split at all times",
      "Invests only in arbitrage opportunities",
      "Cannot use derivatives"
    ],
    correct: 0,
    explain: "Dynamic Asset Allocation (Balanced Advantage) funds dynamically manage equity and debt. They usually take short (contra) equity positions to reduce net equity exposure but maintain more than 65% long equity for taxation purposes."
  },
  {
    q: "A <strong>Multi Asset Allocation Fund</strong> must invest:",
    options: [
      "In at least three asset classes, with a minimum of 10% in each (foreign securities not treated as a separate class)",
      "In exactly two asset classes",
      "At least 80% in a single sector",
      "Only in equity and arbitrage"
    ],
    correct: 0,
    explain: "Multi Asset Allocation Funds invest in at least three asset classes with a minimum of 10% in each. The manager tilts allocation based on views. Foreign securities are not treated as a separate asset class."
  },
  {
    q: "An <strong>Arbitrage fund</strong> earns returns by:",
    options: [
      "Buying in the spot (cash) market and selling in the derivatives market to capture the interest-rate differential (the future–spot gap)",
      "Speculating on the direction of the market",
      "Investing only in long-term bonds",
      "Holding physical gold"
    ],
    correct: 0,
    explain: "Arbitrage funds exploit the price differential between cash and derivatives markets — buying in spot and selling in the derivatives market to earn the interest element (the future–spot difference), realisable when the future is sold."
  },
  {
    q: "An <strong>Equity Savings fund</strong> invests in:",
    options: [
      "Equity, debt and arbitrage opportunities — minimum 65% in equity and minimum 10% in debt",
      "Only debt securities",
      "Only arbitrage positions",
      "At least 80% in a single sector"
    ],
    correct: 0,
    explain: "Equity Savings funds invest in equity, debt and arbitrage — a minimum of 65% of total assets in equity and equity-related instruments and a minimum of 10% in debt investments."
  },
  {
    scenario: "A closed-end fund invests ₹90 in debt for 3 years so it grows to ₹100 at maturity, and puts the remaining amount into equity derivatives for upside.",
    q: "What type of fund is this?",
    options: [
      "A Capital Protection Fund (a closed-end hybrid)",
      "An Arbitrage fund",
      "A Gilt fund",
      "An ELSS"
    ],
    correct: 0,
    explain: "This is a Capital Protection Fund — a closed-end hybrid. A portion of principal (e.g. ₹90) is invested in debt to grow to the principal (₹100) at maturity, protecting capital, while the rest is invested in equity derivatives for higher returns."
  },

  /* ---------- 11.5.5 / 11.5.6 Life cycle, other funds ---------- */
  {
    q: "The <strong>Solution Oriented Schemes</strong> category was:",
    options: [
      "Discontinued by SEBI with effect from 26 February 2026",
      "Made mandatory for all AMCs from 2024",
      "Merged into equity schemes in 2020",
      "Renamed as Life Cycle Funds"
    ],
    correct: 0,
    explain: "SEBI discontinued the Solution Oriented Scheme category with effect from 26 February 2026."
  },
  {
    q: "A <strong>Life Cycle Fund</strong> may be launched with:",
    options: [
      "A minimum tenure of 5 years and a maximum of 30 years, in multiples of 5 years, with up to 6 funds active for subscription at a time",
      "No maturity date, running in perpetuity",
      "A maximum tenure of 3 years",
      "Only an equity portfolio"
    ],
    correct: 0,
    explain: "Life Cycle Funds are open-ended with predetermined maturity and a glide path for goal-based investing, across Equity, Debt, InvITs, ETCDs, Gold &amp; Silver ETF. Minimum tenure 5 years, maximum 30, in multiples of 5, with up to 6 funds active at any time. Exit loads: 3% in year 1, 2% in year 2, 1% in year 3."
  },
  {
    q: "A <strong>Fund of Funds (FoF)</strong>:",
    options: [
      "Invests in other mutual funds (min 95% in the underlying fund) rather than holding securities directly, and imposes an additional layer of cost",
      "Holds only individual stocks and bonds directly",
      "Must invest only within the same fund house",
      "Enjoys the same equity tax concessions as an equity fund"
    ],
    correct: 0,
    explain: "A FoF invests in other mutual funds (95% of assets in the underlying fund), not securities directly. It adds cost (underlying funds' expenses are in the NAV). Multi-manager FoFs invest across different AMCs. Equity FoFs don't get equity funds' tax concessions."
  },
  {
    q: "Over a two-year horizon in the growth option, an equity FoF is taxable (since the 23 July 2024 Union Budget) at:",
    options: [
      "12.5% plus surcharge and cess",
      "10% flat with no surcharge",
      "Nil — it is fully exempt",
      "30% as ordinary income"
    ],
    correct: 0,
    explain: "Equity FoFs do not enjoy equity funds' concessions. Over a two-year horizon in the growth option, an FoF is taxable at 12.5% plus surcharge and cess (since the Union Budget of 23 July 2024)."
  },
  {
    q: "An <strong>ETF</strong> replicating an index must hold at least ___ of total assets in the index securities, and its price is:",
    options: [
      "95%; real-time and known at the time of transaction (unlike end-of-day NAV)",
      "80%; fixed once a day",
      "65%; set weekly",
      "50%; the same as the sponsor's cost"
    ],
    correct: 0,
    explain: "An ETF must hold at least 95% of total assets in the tracked index's securities. ETF prices are real-time and known at transaction time, changing along with the underlying index — unlike NAV, computed at end of day."
  },
  {
    q: "For every unit of a <strong>Gold ETF</strong> issued, the fund holds:",
    options: [
      "Physical gold of 99.5% purity (Gold ETFs may also invest up to 20% of net assets in banks' gold deposit schemes)",
      "Physical gold of 90% purity only",
      "Only gold-mining company shares",
      "Cash equal to the gold price"
    ],
    correct: 0,
    explain: "For every ETF unit issued, the fund holds physical gold of 99.5% purity (silver 99.9%). Gold ETFs may invest in banks' gold deposit schemes up to 20% of net assets. Actual returns may be a little lower than market due to fund expenses and cash holdings."
  },
  {
    q: "A <strong>Real Estate Mutual Fund</strong> must:",
    options: [
      "Hold not less than 75% of net assets in physical real estate and related securities (min 35% in physical assets), be closed-end and be listed on a stock exchange",
      "Be open-ended with daily redemption",
      "Invest only in equity shares of real estate companies",
      "Hold at least 95% in a single property"
    ],
    correct: 0,
    explain: "Real Estate Mutual Funds require at least 35% of the portfolio in physical assets, and not less than 75% of net assets in physical assets and such securities (e.g. mortgage-backed securities, real estate company debt). They are closed-end and listed."
  },
  {
    q: "An <strong>Infrastructure Debt Scheme</strong> has a minimum investment of:",
    options: [
      "₹1 crore, with a minimum unit face value of ₹10 lakh, a tenor of at least 5 years, and 90% invested in specified infrastructure securities",
      "₹10,000, open-ended with daily NAV",
      "₹50 lakh, with monthly redemption",
      "₹5 lakh, with a 3-year lock-in"
    ],
    correct: 0,
    explain: "Infrastructure Debt Schemes are closed-ended, tenor at least 5 years, with 90% invested in specified infrastructure securities. Minimum investment ₹1 crore, minimum unit face value ₹10 lakh, NAV disclosed at least quarterly, units listed on an exchange."
  },
  {
    q: "SEBI's new asset class, <strong>Specialized Investment Funds (SIF)</strong>, has a minimum investment threshold of:",
    options: [
      "₹10 lakh — positioned between mutual funds and PMS (₹50 lakh)",
      "₹50 lakh — the same as PMS",
      "₹1 crore — the same as AIFs",
      "₹1 lakh — the same as a normal SIP"
    ],
    correct: 0,
    explain: "SIF is a new asset class with a minimum investment threshold of ₹10 lakh, positioned between Mutual Funds (very low ticket) and PMS (minimum ₹50 lakh). It allows strategies like long-short funds, high-yield credit and non-hedging derivative use."
  },

  /* ---------- 11.6 Investment options ---------- */
  {
    q: "In the <strong>growth option</strong> of a mutual fund scheme:",
    options: [
      "Returns are retained in the scheme, appreciating the NAV; the investor realises the gain by redeeming units",
      "Returns are paid out as periodic dividends",
      "The NAV falls each time income is generated",
      "The investor receives units instead of cash every month"
    ],
    correct: 0,
    explain: "In the growth option, returns generated are retained in the scheme and translate into an appreciation of the NAV (and hence the value of the investment). The investor realises this by redeeming units."
  },
  {
    q: "Under the <strong>Income Distribution cum Capital Withdrawal (IDCW)</strong> option (formerly 'dividend'):",
    options: [
      "Returns are paid out as periodic dividends, and the NAV falls to the extent of the pay-out — which may include part of the investor's own capital",
      "Returns are always reinvested and never paid out",
      "The NAV never changes on a pay-out",
      "The pay-out is guaranteed and fixed each period"
    ],
    correct: 0,
    explain: "IDCW pays out returns as periodic dividends. The NAV falls to the extent of the dividend paid from net assets. The amount can include part of the investor's own capital, so they should check the breakup."
  },

  /* ---------- 11.7 Triggers ---------- */
  {
    q: "A <strong>trigger</strong> option in a mutual fund investment:",
    options: [
      "Automatically redeems or transfers units when a pre-set condition (a return %, a value, a NAV level, a date, or an index level) is reached",
      "Guarantees a minimum return",
      "Prevents the investor from ever redeeming",
      "Increases the SIP amount automatically each month"
    ],
    correct: 0,
    explain: "A trigger automatically redeems/transfers units when a pre-set condition is met — a specified return over cost, a set value, a NAV level, a specific date, or an index level. It lets the investor achieve an aim without continuously tracking the investment."
  },

  /* ---------- 11.8 Process ---------- */
  {
    q: "A folio in a mutual fund can have a maximum of how many holders?",
    options: [
      "Three holders",
      "Two holders",
      "One holder only",
      "Five holders"
    ],
    correct: 0,
    explain: "The application form provides for joint holder details for two joint holders — a folio can have up to three holders in total. The mode of holding and operating the folio must be provided."
  },
  {
    q: "The applicable NAV for a purchase of units depends on which factors?",
    options: [
      "The type of scheme, day of transaction, time of application, and availability of clear funds to the mutual fund",
      "Only the amount invested",
      "The distributor's commission",
      "The investor's age"
    ],
    correct: 0,
    explain: "The applicable NAV depends on: (a) type of scheme, (b) day of transaction, (c) time of application, and (d) availability of clear funds to the mutual fund (for all liquid fund purchases, and for non-liquid purchases)."
  },
  {
    q: "When making an <strong>additional purchase</strong>, quoting the existing <strong>folio number</strong>:",
    options: [
      "Eliminates the need to re-provide personal information already recorded (name, address, PAN, KYC, etc.)",
      "Is not permitted; a fresh folio must always be opened",
      "Changes the NAV applicable",
      "Is required only for NRIs"
    ],
    correct: 0,
    explain: "The folio number is the investor's unique identity, under which personal information and PAN/KYC compliance are recorded. Quoting it for an additional purchase eliminates the need to provide all the information again."
  },
  {
    q: "The <strong>Instant Access Facility (IAF)</strong> for liquid fund redemptions is limited to:",
    options: [
      "₹50,000 or 90% of the latest value of investment, whichever is lower, per day per scheme per investor (resident individuals only)",
      "₹1,00,000 with no other limit",
      "Any amount, for all investor types",
      "10% of the investment, for NRIs only"
    ],
    correct: 0,
    explain: "IAF credits the redemption amount on the day of the request from liquid funds, for resident individual investors only. The limit is ₹50,000 or 90% of the latest value of the investment, whichever is lower, per day per scheme per investor."
  },
  {
    scenario: "An NRI originally invested in a scheme using repatriable funds and now wishes to redeem.",
    q: "Where can the redemption proceeds be credited?",
    options: [
      "To an NRO or NRE account specified by the investor",
      "Only to a resident savings account",
      "Only to an NRO account, never NRE",
      "To any third party's account"
    ],
    correct: 0,
    explain: "If the investment was made from repatriable funds, redemption proceeds can be credited to an NRO or NRE account specified by the investor. If made from an NRO/rupee account, proceeds can only go to a similar account from which repatriation is regulated."
  },
  {
    q: "Mutual funds may <strong>restrict redemptions</strong> from a scheme when:",
    options: [
      "There is a systemic crisis or events that constrict market-wide liquidity (not issuer-specific), market failures/closures, or unexpected operational issues",
      "A single investor wants to redeem a large amount",
      "The NAV has risen too fast",
      "The fund manager simply prefers not to pay"
    ],
    correct: 0,
    explain: "Redemptions may be restricted during a systemic crisis or events constricting market-wide liquidity — when the market at large becomes illiquid (not restricted to a specific issuer), market failures and closures, and unexpected operational issues."
  },
  {
    q: "In SEBI's May 2020 circular, schemes that are being <strong>wound up</strong> must be:",
    options: [
      "Listed on the stock exchanges to provide an exit route to investors in the interim",
      "Immediately liquidated within 24 hours",
      "Converted into a new open-ended scheme",
      "Merged with a gilt fund"
    ],
    correct: 0,
    explain: "In a May 2020 circular, SEBI required all schemes being wound up to be listed on the stock exchanges to provide an exit route, since realising all assets and paying investors can take considerable time."
  },
  {
    q: "A <strong>switch</strong> is:",
    options: [
      "A single transfer from one scheme/option to another scheme or option of the same mutual fund; because a redemption occurs, exit loads and taxes apply",
      "A free transfer with no tax or exit load",
      "A transfer only allowed between different fund houses",
      "The automatic reinvestment of dividends"
    ],
    correct: 0,
    explain: "A switch is a single transfer from one scheme/option to another of the same mutual fund (inter-scheme) or between options of the same scheme (intra-scheme). Since a redemption happens, exit loads and taxes apply."
  },
  {
    q: "In <strong>dividend reinvestment</strong>:",
    options: [
      "The declared dividend is used to buy more units of the same scheme at the post-dividend NAV, compounding returns automatically",
      "The dividend is paid out in cash to the investor",
      "The dividend is transferred to a different scheme",
      "The investor must manually place a fresh purchase order"
    ],
    correct: 0,
    explain: "Dividend reinvestment uses the declared dividend to purchase more units of the same scheme (instead of paying out), enabling compounding. It happens automatically in two steps: dividend declaration, then conversion into new units at the post-dividend NAV."
  },

  /* ---------- 11.9 Systematic transactions ---------- */
  {
    q: "The primary advantage a <strong>Systematic Investment Plan (SIP)</strong> gives an investor is:",
    options: [
      "Rupee cost averaging — buying more units when prices are low and fewer when high, lowering the average cost over time",
      "A guaranteed fixed return",
      "Complete elimination of market risk",
      "A higher NAV than lump-sum investors"
    ],
    correct: 0,
    explain: "In an SIP the same amount is invested each instalment, so investors buy more units when the price is low and fewer when high. Over time the average acquisition cost falls — this is rupee cost averaging, the primary advantage of SIPs."
  },
  {
    q: "Which of the following is <strong>NOT</strong> a decision the investor makes when enrolling for an SIP?",
    options: [
      "The exact NAV at which each instalment will be allotted",
      "The scheme, plan and option",
      "The amount, periodicity and date of each instalment",
      "The tenor of the plan and the mode of payment"
    ],
    correct: 0,
    explain: "The investor decides the scheme/plan/option, instalment amount, periodicity, date, tenor and payment mode. The applicable NAV is determined at the time each instalment is executed — it cannot be chosen in advance."
  },
  {
    q: "An SIP can be discontinued by:",
    options: [
      "The investor giving written notice, or automatically on dishonour of cheques / insufficient funds",
      "The distributor, without informing the investor",
      "SEBI, at its discretion",
      "It can never be discontinued once started"
    ],
    correct: 0,
    explain: "An SIP can be discontinued by the investor giving written notice to the fund (and bank, for electronic instructions). It may also be cancelled if payment for one or more instalments fails due to cheque dishonour or insufficient funds."
  },
  {
    q: "A <strong>Systematic Withdrawal Plan (SWP)</strong> lets an investor:",
    options: [
      "Make recurring redemptions at the applicable NAV on each date, benefiting from NAV volatility (fewer units redeemed when NAV is high)",
      "Make recurring purchases at a fixed price",
      "Transfer units to another investor tax-free",
      "Avoid all capital gains tax on redemption"
    ],
    correct: 0,
    explain: "An SWP enables recurring redemptions at the applicable NAV on each date, providing a defined pay-out. Since withdrawals happen at different points, the investor benefits from NAV volatility — when NAV is high, fewer units are redeemed for the same amount. Exit loads and capital gains tax apply."
  },
  {
    scenario: "Sunita has built a corpus in an equity fund and, as her goal approaches, wants to move it gradually into a short-term debt fund of the same AMC to avoid the risk of redeeming everything on a day the NAV is low.",
    q: "Which facility should she use?",
    options: [
      "A Systematic Transfer Plan (STP) — periodic redemption from the source (equity) scheme and investment into the target (debt) scheme",
      "A Systematic Investment Plan (SIP)",
      "An Instant Access Facility (IAF)",
      "A one-time full switch"
    ],
    correct: 0,
    explain: "An STP combines periodic redemption from a source scheme and investment into a target scheme of the same mutual fund. Moving gradually avoids the risk of the NAV being low on a single redemption date — exactly Sunita's concern."
  },
  {
    q: "How does a <strong>Dividend Transfer Plan (DTP)</strong> differ from dividend reinvestment?",
    options: [
      "In a DTP the dividend is transferred to a <em>different</em> target scheme, while the original investment stays intact; reinvestment buys more units of the <em>same</em> scheme",
      "A DTP pays the dividend out in cash",
      "A DTP redeems the entire original investment",
      "There is no difference between them"
    ],
    correct: 0,
    explain: "A DTP invests in a scheme under the IDCW option and transfers the declared dividend to a different target fund, keeping the original investment intact. Reinvestment instead buys more units of the same scheme. E.g. transferring equity dividends to a debt scheme books profits regularly."
  },
  {
    scenario: "Under a value averaging plan with an assumed growth rate, ₹10,000 is invested in month 1 (expected to be worth ₹10,100 by month 2). In month 2 the actual value of the investment has fallen to ₹9,900.",
    q: "How much is invested in month 2 under value averaging?",
    options: [
      "₹10,200 — topping up the ₹200 shortfall from the ₹10,100 target",
      "₹10,000 — the same fixed amount as an SIP",
      "₹9,900 — matching the current value",
      "₹9,800 — investing less because value fell"
    ],
    correct: 0,
    explain: "Value averaging targets ₹10,100 but the actual value is ₹9,900 — a ₹200 shortfall. To make it up, the plan invests ₹10,200 in month 2. Value averaging invests more when the market is down and less when it is up."
  },
  {
    scenario: "Continuing the value averaging example: instead, in month 2 the actual value of the investment has risen to ₹10,400 (against the ₹10,100 target).",
    q: "How much is invested in month 2 now?",
    options: [
      "₹9,700 — investing ₹300 less because of the ₹300 excess value",
      "₹10,000 — the fixed SIP amount",
      "₹10,400 — matching the current value",
      "₹10,700 — topping up because value grew"
    ],
    correct: 0,
    explain: "The value is ₹10,400 vs the ₹10,100 target — an excess of ₹300. So month-2 investment is ₹9,700 (₹10,000 − ₹300). This automatically ensures more is invested when prices are down and less when up."
  },
  {
    q: "A key <strong>challenge</strong> of value averaging (versus a normal SIP) is that:",
    options: [
      "The calculations get complex as instalments grow, and normal SIPs don't allow varying the amount each month, so the investor must manage the difference themselves",
      "It always underperforms a fixed SIP",
      "It has no way to invest more when prices fall",
      "It is banned by SEBI"
    ],
    correct: 0,
    explain: "Value averaging's challenges are the growing complexity of calculations and the fact that normal SIPs don't allow such monthly changes — so the investor must manage the difference themselves. Some AMCs offer products that vary the SIP amount by market level."
  },

  /* ---------- 11.10 Investment modes ---------- */
  {
    q: "The core difference between a <strong>Direct plan</strong> and a <strong>Regular plan</strong> is:",
    options: [
      "The direct plan has a lower expense ratio (no distributor commission), so its NAV and net returns are higher, though the portfolio is identical",
      "The direct plan holds a different, riskier portfolio",
      "The regular plan has no distributor involved",
      "The direct plan is only for institutional investors"
    ],
    correct: 0,
    explain: "Both plans have the same portfolio. The direct plan lets the investor invest directly with the fund house with no distributor, so it has a lower expense ratio and a larger net return. The regular plan pays distribution commission and has a higher expense ratio."
  },
  {
    q: "SEBI requires that every mutual fund scheme:",
    options: [
      "Offer a Direct plan, featuring a lower expense ratio for investors who don't use the distribution network",
      "Offer only a Regular plan",
      "Charge the same expense ratio for direct and regular plans",
      "Prohibit direct investment"
    ],
    correct: 0,
    explain: "All mutual fund schemes must offer a direct plan, which features a lower expense ratio for investors who do not use the distribution network set up by the mutual fund."
  },
  {
    scenario: "An investor is knowledgeable about mutual funds, comfortable transacting online, and does not need hand-holding for the process.",
    q: "What would the investment adviser most appropriately explain?",
    options: [
      "The direct plan is a 'do-it-yourself' route with a lower expense ratio, but with no distributor to help if issues arise — the investor must monitor and transact themselves",
      "The regular plan is always cheaper and should be chosen",
      "Direct plans hold a superior portfolio to regular plans",
      "The investor cannot access direct plans without a distributor"
    ],
    correct: 0,
    explain: "The adviser should clarify that the direct plan is a do-it-yourself approach with a lower expense ratio but no one to help if problems arise — the investor must complete and monitor everything. It suits knowledgeable investors who can manage transactions online."
  },
  {
    q: "The role of the investment adviser regarding direct vs regular plans is to:",
    options: [
      "Assess the investor's situation, knowledge, time and ability to self-manage, and explain both the cost angle and the service trade-off before deciding which plan suits",
      "Always push the investor into the regular plan for higher commission",
      "Hide the existence of the direct plan",
      "Guarantee the investor a return in either plan"
    ],
    correct: 0,
    explain: "The adviser must ensure the investor understands the difference, noting that cost is just one angle — the regular plan provides an intermediary's help. The adviser assesses whether the investor has the knowledge, time and space to self-manage before recommending a plan."
  }
];
