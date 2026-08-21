/* ==========================================================================
   NISM Series-X-A · Module 2 · Chapter 6
   Securities Market Segments — end-of-chapter question bank.

   Two shapes (see quiz-engine.js):
     Standard:  { q, options, correct, explain }
     Scenario:  { scenario, q, options, correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   ========================================================================== */

window.NISM_CH06_QUESTIONS = [
  // ---------------- 6.1 Primary market — nature & functions ----------------
  {
    q: "The primary market is best defined as the market where:",
    options: [
      "Equity or debt funds are raised by companies from outside investors through an offer of securities",
      "Existing securities are traded between investors",
      "Only government securities are auctioned",
      "Derivatives are created by financial intermediaries"
    ],
    correct: 0,
    explain: "The primary (new issue) market is where companies raise equity or debt from 'outside' investors — those not associated with the promoters — by issuing securities directly."
  },
  {
    q: "The primary market is also called the \"new issue market\" because:",
    options: [
      "Securities are issued for the first time by the company",
      "Only new companies can use it",
      "Prices are always fixed by SEBI",
      "It opens every new financial year"
    ],
    correct: 0,
    explain: "It is the 'new issue market' because securities are issued for the first time; investors buy directly from the issuer."
  },
  {
    q: "Expanding an issuer's ability to raise capital from public investors who were not part of the early stages of the business is known as:",
    options: ["Going public", "Book building", "Novation", "Disinvestment"],
    correct: 0,
    explain: "'Going public' is the process of opening up capital raising to public investors, making long-term capital available from a larger group."
  },
  {
    q: "In the primary market, government securities are priced through:",
    options: [
      "An auction process conducted by RBI on behalf of the government",
      "A fixed price set by SEBI",
      "The book-building route with a wide price band",
      "Negotiation between two retail investors"
    ],
    correct: 0,
    explain: "G-Secs are issued by RBI on behalf of the government and priced through an auction; banks and institutional investors bid the rates they will accept."
  },
  {
    scenario: "Meera's start-up has grown beyond what its promoters and their associates can fund. Her adviser suggests raising money from a wider group of outside investors through a public issue of shares.",
    q: "Which primary-market function most directly explains why this could let her raise funds on better terms than her existing lenders offered?",
    options: [
      "Access to wider markets and investors",
      "Regulatory supervision",
      "Better disclosures",
      "Liquidity for securities"
    ],
    correct: 0,
    explain: "Access to wider markets lets a company move away from restrictive known sources of funding to a wider group of investors, often at much more competitive terms."
  },
  {
    q: "How does a primary-market issue improve corporate governance through 'ownership diversification'?",
    options: [
      "It broadens ownership and enables separation of ownership from management, with independent directors representing public shareholders",
      "It guarantees a fixed return to all shareholders",
      "It removes the need for auditors",
      "It lets promoters retain 100% control"
    ],
    correct: 0,
    explain: "As new equity holders come in, ownership becomes broad-based, ownership and management separate, and independent directors representing public shareholders raise governance standards."
  },
  {
    q: "Why does listing after a public issue provide 'liquidity for securities'?",
    options: [
      "Mandatory listing opens the secondary market, where securities can be bought and sold easily in small or large quantities",
      "It guarantees the share price will rise",
      "It exempts the company from disclosures",
      "It converts equity into debt"
    ],
    correct: 0,
    explain: "A public issue distributes securities widely and it is mandatory to list them, opening the secondary market where they can be traded easily."
  },

  // ---------------- 6.1.2–6.1.4 Types of issues, issuers, investors ----------------
  {
    q: "A \"public issue\" of securities means:",
    options: [
      "An Initial Public Offer (IPO) or a Further Public Offer (FPO)",
      "A private placement to institutional investors",
      "A preferential allotment to a select group",
      "A bonus issue to existing shareholders"
    ],
    correct: 0,
    explain: "A public issue is an IPO (by an unlisted issuer) or an FPO (by a listed issuer), open to anyone eligible to invest."
  },
  {
    q: "Private placement is primarily:",
    options: [
      "A wholesale issue of securities to a select set of institutional investors by an unlisted company",
      "An offer open to all members of the public",
      "A free allotment of shares to existing shareholders",
      "An auction of treasury bills"
    ],
    correct: 0,
    explain: "In a private placement, securities are issued to a select set of investors — primarily a wholesale issue to institutional investors by an unlisted company."
  },
  {
    scenario: "Sunrise Ltd is already listed. It wants to raise capital quickly by issuing eligible securities to mutual funds, FPIs and insurance companies on a private-placement basis, without a full public offer.",
    q: "This route is a:",
    options: [
      "Qualified Institutions Placement (QIP)",
      "Initial Public Offer (IPO)",
      "Rights issue",
      "Bonus issue"
    ],
    correct: 0,
    explain: "A QIP is an issue of eligible securities by a listed issuer to qualified institutional buyers (MFs, FPIs, insurers) on a private-placement basis."
  },
  {
    q: "A preferential issue:",
    options: [
      "Is an issue by a listed issuer to a select person or group on a private-placement basis, excluding ESOP/ESPS, sweat equity and depository receipts",
      "Must always be open to the general public",
      "Can only be made by an unlisted company",
      "Is a free distribution of shares"
    ],
    correct: 0,
    explain: "A preferential issue is made by a listed issuer to a select person/group on a private-placement basis under SEBI rules, excluding ESOP/ESPS, sweat equity and depository receipts."
  },
  {
    q: "Treasury bills in India are issued:",
    options: [
      "Only by the Central Government, for maturities such as 91, 182 and 364 days",
      "By both Central and State Governments",
      "Only by State Governments",
      "By private companies for short-term funds"
    ],
    correct: 0,
    explain: "Only the Central Government issues treasury bills (short-term, < 1 year: 91/182/364 days). State Governments issue only dated securities/bonds (SGS)."
  },
  {
    q: "Government securities (G-Secs) are described as \"risk-free gilt-edged\" instruments because:",
    options: [
      "They carry no risk of default",
      "They are guaranteed to double in value",
      "They are exempt from all market movement",
      "They are issued only to foreign investors"
    ],
    correct: 0,
    explain: "G-Secs carry no default risk and are therefore called risk-free gilt-edged instruments."
  },
  {
    scenario: "An Alternative Investment Fund (AIF) wants to raise a large pool of capital and considers advertising to the general public to attract as many investors as possible.",
    q: "What does the adviser correctly point out?",
    options: [
      "An AIF can only raise money through private placement and cannot invite the public at large",
      "An AIF must always make an IPO",
      "An AIF can raise funds only from the government",
      "An AIF cannot raise any debt"
    ],
    correct: 0,
    explain: "AIFs are privately pooled investments that raise money through private placement; an AIF cannot make an invitation to the public at large (though it may borrow debt)."
  },
  {
    q: "A key feature distinguishing REIT/InvIT units offered in a public offer from a normal IPO is that they:",
    options: [
      "Have a higher minimum amount for investment",
      "Cannot be listed on a stock exchange",
      "Are always issued free of cost",
      "Can only be bought by the government"
    ],
    correct: 0,
    explain: "REITs (real estate) and InvITs (infrastructure) list their units on an exchange, but carry a higher minimum investment than a normal IPO."
  },
  {
    q: "Mutual funds raise money in the primary market through:",
    options: [
      "A New Fund Offer (NFO) of units for a defined scheme",
      "An auction of treasury bills",
      "A rights issue of equity shares",
      "A buyback of units"
    ],
    correct: 0,
    explain: "Mutual funds make a New Fund Offer (NFO) of units — closed-end (funds returned at the end) or open-ended (exit anytime at prevailing value)."
  },

  // ---------------- 6.1.5 IPO / FPO ----------------
  {
    q: "The first public offer of shares ever made by a company is called:",
    options: ["An Initial Public Offer (IPO)", "A Further Public Offer (FPO)", "A rights issue", "A preferential issue"],
    correct: 0,
    explain: "The first public offer of shares is an IPO; after that, a further offer to the public is an FPO."
  },
  {
    scenario: "Zenith Ltd makes an IPO in which the company issues brand-new shares to public investors to fund a new plant.",
    q: "What happens to the company's issued share capital and to the money raised?",
    options: [
      "Issued share capital increases and the money goes to the company; existing shareholders' percentage holding falls",
      "Issued share capital is unchanged and the money goes to the promoters",
      "Issued share capital falls and the money goes to SEBI",
      "Nothing changes; the shares are given free"
    ],
    correct: 0,
    explain: "A fresh issue creates new shares: issued capital rises, the money reaches the company, and existing holders' percentage falls."
  },
  {
    scenario: "The government offers a portion of its shares in a PSU to the public in an IPO. No new shares are created.",
    q: "This is an example of an offer for sale. Where do the proceeds go and what happens to the company's share capital?",
    options: [
      "Proceeds go to the government (the selling shareholder); the company's share capital is unchanged",
      "Proceeds go to the company; share capital increases",
      "Proceeds are split equally between the company and SEBI",
      "Proceeds are refunded to investors; no shares change hands"
    ],
    correct: 0,
    explain: "In an offer for sale (like PSU disinvestment) existing shares are sold, so proceeds go to the seller (the government) and the company's share capital is unchanged — only the shareholder list changes."
  },
  {
    q: "A Further Public Offer (FPO) is made by:",
    options: [
      "An issuer that has already made an IPO and now makes a further issue of securities to the public",
      "An unlisted company making its very first public offer",
      "A company issuing free bonus shares",
      "A mutual fund launching a new scheme"
    ],
    correct: 0,
    explain: "An FPO is a further issue to the public by a company that has already done an IPO — to raise growth capital, retire debt, meet minimum public shareholding, or let promoters dilute after lock-in."
  },

  // ---------------- 6.1.6 Pricing / book building ----------------
  {
    q: "In a fixed price issue, the price at which shares will be allotted is:",
    options: [
      "Decided by the company with its lead manager and disclosed to investors before they apply",
      "Discovered only after the issue closes",
      "Set by the highest bidder",
      "Always equal to the face value"
    ],
    correct: 0,
    explain: "In a fixed price issue the company, with its lead manager, fixes and discloses the price upfront so investors know it when applying."
  },
  {
    q: "In a book-built issue, the price band can run from the floor price up to:",
    options: ["20% above the floor price", "10% above the floor price", "50% above the floor price", "5% above the floor price"],
    correct: 0,
    explain: "The price band runs from the floor price to a maximum of 20% above it; bids must be at/above the floor or within the band."
  },
  {
    q: "The 'cut-off price' in a book-built issue is:",
    options: [
      "The price at which the issue gets fully subscribed; all bids at or above it are successful",
      "The lowest price in the band, always",
      "The average of all bid prices",
      "The face value of the share"
    ],
    correct: 0,
    explain: "The cut-off is the price at which the issue is fully subscribed; everyone who bid at or above it is a successful bidder eligible for allotment."
  },
  {
    scenario: "A company offers 5,000 shares within a price band of ₹120–₹144. Bids arrive: ₹144 → 1,000; ₹140 → 1,500; ₹135 → 2,500; ₹130 → 1,000; ₹120 → 500.",
    q: "At what price is the offer of 5,000 shares filled (the cut-off price)?",
    options: ["₹135", "₹144", "₹130", "₹120"],
    correct: 0,
    explain: "Cumulative demand from the top: ₹144→1,000; ₹140→2,500; ₹135→5,000. It reaches exactly 5,000 at ₹135 — the cut-off. All bids at ₹135 and above succeed."
  },
  {
    scenario: "Using the same demand book (₹144→1,000; ₹140→1,500; ₹135→2,500…), suppose the company had instead offered only 2,500 shares.",
    q: "What would the cut-off price be?",
    options: ["₹140", "₹135", "₹144", "₹120"],
    correct: 0,
    explain: "Cumulative demand reaches 2,500 at ₹140 (1,000 at ₹144 + 1,500 at ₹140). So a 2,500-share offer fills at a cut-off of ₹140."
  },
  {
    q: "In a book-built issue, retail investors may be allotted shares at a discount to the cut-off price, but the discount cannot be more than:",
    options: [
      "10% below the price allotted to other categories of investors",
      "50% below the cut-off",
      "20% below the floor price",
      "There can be no discount at all"
    ],
    correct: 0,
    explain: "Retail investors may get a discount to the cut-off, but not lower by more than ten percent of the price at which shares are allotted to the other category of investors."
  },

  // ---------------- 6.1.7–6.1.10 Process, ASBA, debt, rights ----------------
  {
    q: "Primary market offerings are principally governed by:",
    options: [
      "SEBI's ICDR Regulations, 2018 and the Companies Act, plus RBI rules for non-resident money",
      "Only the RBI Act",
      "Only the Income Tax Act",
      "The Depositories Act alone"
    ],
    correct: 0,
    explain: "Public issues are subject to SEBI (ICDR) Regulations, 2018 and the Companies Act, and to RBI regulations for issues to non-residents and receipt of money from abroad."
  },
  {
    q: "The document a company files with SEBI giving all information about the issuer and the proposed issue is the:",
    options: ["Prospectus", "Letter of allotment", "Debenture trust deed", "Circuit filter"],
    correct: 0,
    explain: "A draft prospectus is filed with SEBI for comments; the final prospectus is filed with the Registrar of Companies, SEBI and the exchange."
  },
  {
    scenario: "Rohan wants to apply to an IPO. His adviser explains the mandatory payment mechanism where his application money stays in his own bank account and is only taken if he receives an allotment.",
    q: "Which facility is this?",
    options: [
      "ASBA (Application Supported by Blocked Amount)",
      "A demand draft paid to the company",
      "A margin deposit with the exchange",
      "A systematic investment plan"
    ],
    correct: 0,
    explain: "ASBA blocks the application money in the investor's bank account and releases it only on allotment. SEBI has added UPI-with-block for retail applications through intermediaries."
  },
  {
    q: "In a book-built offer, the minimum application value must fall within SEBI's prescribed range of:",
    options: ["₹10,000 to ₹15,000", "₹5,000 to ₹7,000", "₹1,00,000 to ₹1,50,000", "₹500 to ₹1,000"],
    correct: 0,
    explain: "Investors must bid for the minimum bid lot so that the minimum application value adheres to SEBI's prescribed ₹10,000–₹15,000 range."
  },
  {
    q: "'Bidding at the cut-off' means the investor:",
    options: [
      "Will accept the price determined by the bidding process, ensuring the application is accepted",
      "Bids the lowest price in the band to save money",
      "Refuses any allotment above face value",
      "Withdraws from the issue automatically"
    ],
    correct: 0,
    explain: "Bidding at the cut-off means accepting whatever price the process determines, which ensures the investor's application is always accepted."
  },
  {
    scenario: "An IPO receives bids at the cut-off and above for far more shares than were offered.",
    q: "How are shares allotted in this over-subscribed issue?",
    options: [
      "On a proportionate basis, with a refund to the extent shares allotted are lower than applied for",
      "First-come, first-served to the earliest applicants",
      "Entirely to institutional investors, none to retail",
      "The issue is cancelled and all money returned"
    ],
    correct: 0,
    explain: "In an over-subscribed issue, shares are allotted proportionately and investors are refunded for the shortfall between shares applied for and allotted."
  },
  {
    q: "For a public issue of debt securities (e.g. debentures), which of the following is required?",
    options: [
      "Mandatory listing, a credit rating from at least one agency, and appointment of debenture trustees",
      "No listing and no rating",
      "A guaranteed coupon set by SEBI",
      "Approval from the Income Tax Department only"
    ],
    correct: 0,
    explain: "A public debt issue must be listed, must obtain a credit rating from at least one agency (all ratings disclosed if more than one), and must appoint SEBI-registered debenture trustees to protect investors."
  },
  {
    q: "Debenture trustees in a public issue of debt securities are:",
    options: [
      "SEBI-registered banks/financial institutions who oversee investors' interests and check that any charged security is adequate",
      "The company's own directors",
      "Retail investors elected by ballot",
      "Officials of the stock exchange"
    ],
    correct: 0,
    explain: "Debenture trustees are SEBI-registered banks and financial institutions who protect debenture holders and, for secured debentures, ensure the charged property is adequate."
  },
  {
    scenario: "Anita holds shares in a company making a rights issue but does not want to subscribe to the new shares.",
    q: "What can she do with her Rights Entitlement (RE)?",
    options: [
      "Sell the RE on the stock exchange at the prevailing market price, since it has its own ISIN and is tradable",
      "Nothing — the RE simply lapses with no value",
      "Convert the RE into a bonus share automatically",
      "Return the RE to SEBI for a refund"
    ],
    correct: 0,
    explain: "The RE has its own ISIN and can be traded on the exchange, so a shareholder who does not want to subscribe can sell the RE at the prevailing market price. Rights applications are only via ASBA."
  },

  // ---------------- 6.2 Secondary market ----------------
  {
    q: "A defining feature of the secondary market is that:",
    options: [
      "Transactions do not result in additional capital to the issuer — funds are only exchanged between investors",
      "Every trade brings fresh capital to the company",
      "Only new securities can be traded",
      "The regulator sets each day's prices"
    ],
    correct: 0,
    explain: "The secondary market is where issued securities are traded between investors; it brings no new capital to the issuer and supports the primary market by providing liquidity and price discovery."
  },
  {
    q: "The secondary market's 'price discovery' function means:",
    options: [
      "Buy/sell prices reflect investors' collective assessment of a security's worth, updated continuously",
      "SEBI fixes a single fair price each morning",
      "Prices never change once a stock is listed",
      "Only the issuer knows the true price"
    ],
    correct: 0,
    explain: "Prices reflect investors' collective assessment; rising demand lifts price (a good-prospects signal) and more sellers push it down."
  },
  {
    scenario: "A well-run listed company's shares trade around ₹100, while its face value is ₹10. It now wants to raise fresh equity capital.",
    q: "How does secondary-market price discovery help this fresh issue?",
    options: [
      "It indicates the company could issue fresh shares at a price close to ₹100 — the value investors have already discovered",
      "It forces the company to issue at the ₹10 face value",
      "It prevents the company from raising any further capital",
      "It sets the price at exactly double the market price"
    ],
    correct: 0,
    explain: "Market valuation benefits issuers raising further capital by indicating the price at which new capital could be issued — here, close to ₹100."
  },
  {
    scenario: "A company is being run inefficiently, its share price is falling, and it becomes undervalued. An acquirer buys a significant stake, takes over the board and improves governance.",
    q: "Which secondary-market function does this illustrate?",
    options: [
      "Medium for corporate control",
      "Liquidity",
      "Information signalling",
      "Indicating economic activity"
    ],
    correct: 0,
    explain: "Stock markets act as a market for corporate control: underperformers get undervalued and become takeover targets, so even the threat of takeover disciplines management."
  },
  {
    q: "The most widely tracked benchmark indices in India are:",
    options: ["The S&P BSE Sensex and the NSE Nifty 50", "The RBI Repo Index and the T-Bill Index", "The IRDAI Index and the PFRDA Index", "The Gold Index and the Silver Index"],
    correct: 0,
    explain: "The S&P BSE Sensex and NSE Nifty 50 are the most popularly watched indices; a stock market index is a barometer of economic performance."
  },

  // ---------------- 6.2.2–6.2.3 Structure & market info ----------------
  {
    q: "Market Infrastructure Institutions in the secondary market include:",
    options: [
      "Stock exchanges, clearing corporations and depositories",
      "Only individual retail investors",
      "The Ministry of Finance and RBI only",
      "Insurance companies and pension funds"
    ],
    correct: 0,
    explain: "The secondary market's Market Infrastructure Institutions are stock exchanges, clearing corporations and depositories; other participants are investors, issuers, intermediaries and the regulator."
  },
  {
    q: "Market capitalisation of a company is calculated as:",
    options: [
      "Number of shares outstanding × market price per share",
      "Face value × number of shareholders",
      "Annual turnover ÷ number of trades",
      "Net profit × price-to-earnings ratio"
    ],
    correct: 0,
    explain: "Market cap = shares outstanding × market price per share; it measures the market value of the company's share capital."
  },
  {
    scenario: "An adviser is describing three stocks: one is among the largest companies with very high liquidity, another is medium-sized with good liquidity, and a third is small with limited liquidity.",
    q: "In order, these are:",
    options: [
      "Blue-chip/large-cap, mid-cap and small-cap stocks",
      "Small-cap, mid-cap and large-cap stocks",
      "Penny, gilt and blue-chip stocks",
      "Value, growth and index stocks"
    ],
    correct: 0,
    explain: "Blue-chip (large-cap) stocks are the largest and most liquid; mid-caps are medium-sized with good liquidity; small-caps are smaller with less liquidity."
  },
  {
    q: "The market turnover ratio is computed as:",
    options: [
      "Turnover in rupees ÷ market capitalisation",
      "Market capitalisation ÷ GDP",
      "Number of shares ÷ number of shareholders",
      "Dividend ÷ share price"
    ],
    correct: 0,
    explain: "Turnover ratio = turnover (₹) ÷ market cap. Higher liquidity means a higher turnover ratio; higher turnover in a stock means better liquidity."
  },

  // ---------------- 6.2.4 Risk management ----------------
  {
    q: "The Capital Adequacy Requirements for exchange members consist of:",
    options: [
      "The Base Minimum Capital (BMC) plus additional/optional capital related to business volume",
      "Only a one-time registration fee",
      "A percentage of the member's personal income",
      "A refundable deposit equal to daily turnover"
    ],
    correct: 0,
    explain: "Capital adequacy = Base Minimum Capital (a deposit against which no trade exposure is allowed) plus additional capital, adequate to cover all margins, tied to business volume."
  },
  {
    scenario: "An investor buys 100 shares of Company X at ₹100 each — a ₹10,000 trade. To cover default risk, the exchange requires a 17% margin paid upfront.",
    q: "How much margin does the buyer pay in advance?",
    options: ["₹1,700", "₹10,000", "₹170", "₹17,000"],
    correct: 0,
    explain: "Margin = 17% of the ₹10,000 trade value = ₹1,700. Brokers collect margin from clients when the order is placed; exchanges collect from brokers when it is executed."
  },
  {
    q: "A margin is best described as:",
    options: [
      "Funds deposited with the clearing corporation to cover the risk of non-payment of dues or non-delivery of securities",
      "A fee paid to SEBI for every trade",
      "The profit an investor is guaranteed",
      "A tax on capital gains"
    ],
    correct: 0,
    explain: "A margin is the amount deposited with the clearing corporation to cover the risk of non-payment or non-delivery; both buyers and sellers pay a percentage upfront."
  },
  {
    q: "India's index-based market-wide circuit breakers are triggered at index movements of:",
    options: [
      "10%, 15% and 20%",
      "5%, 10% and 15%",
      "2%, 5% and 10%",
      "20%, 30% and 40%"
    ],
    correct: 0,
    explain: "Market-wide circuit breakers apply at 10%, 15% and 20%, triggered by whichever of the BSE Sensex or Nifty 50 is breached first, bringing a coordinated nationwide halt."
  },
  {
    scenario: "Midway through a trading session the benchmark index falls sharply and breaches the 20% level.",
    q: "What is the consequence under the market-wide circuit breaker system?",
    options: [
      "Trading is halted for the remainder of the day across all equity and equity-derivative markets",
      "Trading continues but with doubled margins",
      "Only that one stock is suspended for an hour",
      "SEBI reverses all trades of the day"
    ],
    correct: 0,
    explain: "A 20% move triggers a coordinated trading halt for the rest of the day across all equity and equity-derivative markets nationwide."
  },
  {
    q: "Which scrips have NO daily price band (though an operating range may apply)?",
    options: [
      "Scrips on which derivatives are available, or scrips in indices on which derivatives are available",
      "All small-cap scrips",
      "Every scrip listed for the first time",
      "Government securities"
    ],
    correct: 0,
    explain: "No price bands apply to scrips with derivatives (or in derivative indices); to prevent non-genuine prices, the exchange may fix a 10% operating range. Remaining scrips get a 20% band."
  },
  {
    scenario: "On a stock exchange, the clearing corporation legally steps in between the buyer and seller of every trade, becoming the counterparty to both and guaranteeing settlement even if a member defaults.",
    q: "This process is called:",
    options: ["Novation", "Dematerialisation", "Disinvestment", "Book building"],
    correct: 0,
    explain: "Novation is the clearing corporation becoming counterparty to all trades, eliminating counterparty risk; margins and the Core Settlement Guarantee Fund (Core SGF) back the guarantee."
  },
  {
    q: "The primary objective of the Core Settlement Guarantee Fund (Core SGF) is to:",
    options: [
      "Guarantee the settlement of trades in each segment even if a clearing member fails to honour commitments",
      "Pay dividends to investors",
      "Compensate investors for market losses",
      "Fund the exchange's marketing expenses"
    ],
    correct: 0,
    explain: "The Core SGF guarantees settlement in each segment (cash, equity derivatives, currency derivatives); if a clearing member defaults, it funds that member's obligations to complete settlement."
  },
  {
    q: "Among the actions an exchange can take on abnormal price movements is:",
    options: [
      "Shifting a scrip to the trade-to-trade segment, forcing members to give/take delivery",
      "Guaranteeing a minimum price for the scrip",
      "Banning the company from ever listing again",
      "Refunding all buyers automatically"
    ],
    correct: 0,
    explain: "On abnormal moves, exchanges may impose special margins, reduce circuit-filter limits, or move a scrip to trade-to-trade (compulsory delivery) to curb intraday-closing volatility."
  },
  {
    q: "How often does a stock exchange inspect the books of a market segment's trading members?",
    options: ["At least once a year", "Once every five years", "Only when an investor complains", "Never — inspection is done by SEBI alone"],
    correct: 0,
    explain: "The exchange inspects trading members' books of each market segment at least once a year to check compliance; violations lead to disciplinary action."
  },

  // ---------------- 6.3 Corporate actions ----------------
  {
    q: "Eligibility for a corporate action (like a dividend or bonus) is determined by:",
    options: [
      "A record date (or book-closure period) — shareholders on the records that day are entitled",
      "The order in which shares were originally bought",
      "The size of each shareholder's demat account",
      "A lottery run by the exchange"
    ],
    correct: 0,
    explain: "Companies announce a record date or book-closure period; investors whose names appear on the records that day are entitled to the corporate benefit."
  },
  {
    scenario: "A company with 10 lakh shares of ₹10 each wants to raise more capital by issuing another 10 lakh shares. To protect existing shareholders from having their proportionate holding halved, it must first offer the new shares to them.",
    q: "This offer to existing shareholders is a:",
    options: ["Rights issue", "Bonus issue", "Buyback", "Stock split"],
    correct: 0,
    explain: "The Companies Act requires a company raising capital through fresh shares to first offer them to existing shareholders — a rights issue — to prevent dilution of their proportionate holding."
  },
  {
    scenario: "A company announces a bonus issue in the ratio 1:3. Vikram holds 300 shares.",
    q: "How many bonus shares does he receive, and is any payment required from him?",
    options: [
      "100 bonus shares, with no payment required",
      "300 bonus shares, paid at face value",
      "900 bonus shares, paid at market price",
      "No shares; he must pay a subscription fee"
    ],
    correct: 0,
    explain: "A 1:3 bonus gives 1 free share per 3 held → 300 ÷ 3 = 100 bonus shares, without any consideration. Bonus shares come from free reserves built of genuine profits."
  },
  {
    q: "A company is prohibited from making a bonus issue if it:",
    options: [
      "Has defaulted on payment of interest or principal on any debt securities or fixed deposit",
      "Has more than 1,000 shareholders",
      "Has ever paid a dividend",
      "Is listed on more than one exchange"
    ],
    correct: 0,
    explain: "A company cannot make a bonus issue if it has defaulted on interest/principal of any debt securities or a fixed deposit; bonus shares are made from free reserves of genuine profits."
  },
  {
    q: "Which statement about dividends is correct?",
    options: [
      "A loss-making company cannot pay a dividend, and listed companies must declare dividends on a per-share basis",
      "Dividends may be paid out of the share premium account",
      "Dividends may be paid out of the revaluation reserve",
      "A company that failed to redeem preference shares may still declare dividends"
    ],
    correct: 0,
    explain: "Dividends come only from profits; a loss-making company (or one that failed to redeem preference shares) cannot pay them; they cannot come from share premium, revaluation or capital redemption reserves; SEBI mandates per-share declaration."
  },
  {
    scenario: "An investor holds 100 shares of a company with face value ₹10, trading at ₹1,000. The company announces a stock split in the ratio 1:5.",
    q: "After the split, the investor's position is:",
    options: [
      "500 shares of face value ₹2, priced around ₹200 — holding value unchanged at ₹1,00,000",
      "20 shares of face value ₹50, priced around ₹5,000",
      "500 shares of face value ₹10, priced around ₹1,000",
      "100 shares of face value ₹2, priced around ₹200"
    ],
    correct: 0,
    explain: "A 1:5 split turns each share into 5: 500 shares, face value ₹2, price ~₹200. The holding value is unchanged (500 × ₹200 = ₹1,00,000 = 100 × ₹1,000)."
  },
  {
    q: "From the company's perspective, a stock split:",
    options: [
      "Leaves the share capital unchanged, since more shares are offset by a lower face value",
      "Doubles the share capital",
      "Reduces the share capital to zero",
      "Converts equity into debt"
    ],
    correct: 0,
    explain: "In a split, the increase in the number of shares is offset by the fall in face value, so the company's share capital does not change."
  },
  {
    q: "Companies typically undertake a stock split when:",
    options: [
      "The share price is very high and restricting investor participation, to improve liquidity",
      "They are making losses and need cash",
      "They want to reduce the number of shareholders",
      "They wish to delist from the exchange"
    ],
    correct: 0,
    explain: "A split lowers a high share price, encouraging participation and improving liquidity, without changing the value of holdings."
  },
  {
    scenario: "A company has surplus cash with no productive use and wants to increase its Earnings Per Share (EPS) and support its share price by reducing the number of shares outstanding.",
    q: "Which corporate action fits, and what is a key eligibility condition?",
    options: [
      "Share buyback — permitted only if the company has not defaulted on debt, deposits, preference redemption, dividend or term-loan interest",
      "Bonus issue — permitted only if the company is loss-making",
      "Rights issue — permitted only if the share price is below face value",
      "Stock split — permitted only after delisting"
    ],
    correct: 0,
    explain: "A buyback uses reserves/surplus to repurchase and extinguish shares, reducing capital and supporting EPS/price. It is barred if the company defaulted on debt, deposits, preference redemption, dividend or term-loan interest."
  },
  {
    q: "In a buyback, the shares bought back by the company are:",
    options: [
      "Extinguished, leading to a reduction in the company's share capital",
      "Re-issued immediately to new investors",
      "Held as treasury stock and traded by the company",
      "Converted into debentures"
    ],
    correct: 0,
    explain: "Bought-back shares are extinguished, reducing share capital; buybacks support EPS and the share price using surplus cash."
  },
  {
    scenario: "A company's shares are permanently removed from the stock exchange because it repeatedly failed to comply with regulations and the listing agreement.",
    q: "This is an example of:",
    options: [
      "Compulsory delisting",
      "Voluntary delisting",
      "A bonus issue",
      "Reverse book building by choice"
    ],
    correct: 0,
    explain: "Delisting can be compulsory (for non-compliance with regulations/listing agreement) or voluntary (the company buys back shares via reverse book building). Here it is compulsory."
  },
  {
    q: "An 'offer for sale' as a corporate action means:",
    options: [
      "Existing investors sell their shares to the public; no new shares are issued and the money goes to the sellers",
      "The company issues new shares to raise fresh capital",
      "Shareholders receive free bonus shares",
      "The company buys back and extinguishes shares"
    ],
    correct: 0,
    explain: "In an offer for sale, existing investors sell their shares to the public — no new shares are issued, and the proceeds go to the selling investors, not the company (often to give anchor investors an exit)."
  }
];
