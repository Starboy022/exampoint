/* ==========================================================================
   NISM Series-X-A · Module 4 · Chapter 12 — Portfolio Manager
   Question bank for the end-of-chapter assessment.

   Shapes:
     Standard  { q, options:[...], correct, explain }
     Scenario  { scenario, q, options:[...], correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH12_QUESTIONS = [

  /* ---------- 12.1 Overview of portfolio managers ---------- */
  {
    q: "What is the central aim of portfolio management?",
    options: [
      "Selecting and managing a basket of assets that minimises risk while maximising return on investments",
      "Guaranteeing a fixed return irrespective of market conditions",
      "Investing only in a single stock chosen by the client",
      "Avoiding the securities market entirely"
    ],
    correct: 0,
    explain: "Risk and return are the two key aspects of investment. Portfolio management involves selecting and managing a basket of assets that minimises risk while maximising return, with the manager designing customised solutions for clients."
  },
  {
    q: "A portfolio manager is defined as a:",
    options: [
      "Body corporate which, under a contract with a client, advises, directs or undertakes the management or administration of a portfolio of securities or the client's funds",
      "An individual person acting informally for friends and family",
      "A stock exchange that lists securities",
      "A bank that only accepts deposits"
    ],
    correct: 0,
    explain: "A portfolio manager is a body corporate that, pursuant to a contract or arrangement with a client, advises or directs or undertakes on behalf of the client (whether as a discretionary portfolio manager or otherwise) the management or administration of a portfolio of securities or the client's funds."
  },
  {
    q: "Portfolio managers in India are registered and regulated under:",
    options: [
      "SEBI (Portfolio Managers) Regulations, 2020",
      "SEBI (Mutual Funds) Regulations, 1996",
      "The Banking Regulation Act, 1949",
      "The Companies Act alone"
    ],
    correct: 0,
    explain: "Portfolio managers are registered and regulated under the SEBI (Portfolio Managers) Regulations, 2020. As per SEBI guidelines, PMS can be offered only by SEBI-registered entities."
  },
  {
    q: "According to SEBI, portfolio management services (PMS) can be offered:",
    options: [
      "Only by SEBI-registered entities",
      "By any individual with a demat account",
      "By any company without registration",
      "Only by public sector banks"
    ],
    correct: 0,
    explain: "As per SEBI guidelines, PMS can be offered only by SEBI-registered entities."
  },
  {
    q: "Portfolio Management Service in India began in <strong>January 1993</strong>, when SEBI issued the first Portfolio Managers Regulations. What does this timing highlight?",
    options: [
      "These regulations came even before the mutual fund regulations, showing the sector's importance to the regulator",
      "PMS was unregulated until 2020",
      "PMS was introduced after mutual funds",
      "PMS was launched by the RBI"
    ],
    correct: 0,
    explain: "The SEBI (Portfolio Managers) Regulations, 1993 were among the first regulations issued — coming even before the mutual fund regulations — which shows the importance of the sector to the regulator."
  },
  {
    q: "In India, the major providers of portfolio management services are:",
    options: [
      "Big brokerage firms, asset management companies and independent experts",
      "Only nationalised banks",
      "Only insurance companies",
      "Only the stock exchanges"
    ],
    correct: 0,
    explain: "The major providers of PMS in India are big brokerage firms, asset management companies and independent experts."
  },

  /* ---------- 12.2 Types of PMS ---------- */
  {
    q: "On the basis of the <em>provider</em> of the service, PMS is classified as:",
    options: [
      "PMS by AMCs, PMS by brokerage houses, and boutique (independent) PMS houses",
      "Equity, debt and hybrid PMS",
      "Discretionary, non-discretionary and advisory PMS",
      "Large-cap, mid-cap and small-cap PMS"
    ],
    correct: 0,
    explain: "By provider, PMS is classified as: PMS by asset management companies, PMS by brokerage houses, and boutique (independent) PMS houses."
  },
  {
    q: "On the basis of <em>product class</em>, PMS is classified into all of the following EXCEPT:",
    options: [
      "Insurance-linked PMS",
      "Equity-based PMS",
      "Fixed income based PMS",
      "Commodity PMS"
    ],
    correct: 0,
    explain: "By product class, PMS is classified as equity-based, fixed income based, commodity, mutual fund, and multi-asset based PMS. Insurance-linked PMS is not a listed category."
  },
  {
    q: "A <strong>discretionary</strong> portfolio manager:",
    options: [
      "Exercises discretion over the investment of funds and independently manages each investor's funds as per the contract",
      "Must consult the client before every single transaction",
      "Only gives non-binding advice that the client executes",
      "Is prohibited from making any investment decision"
    ],
    correct: 0,
    explain: "A discretionary portfolio manager exercises (or may exercise) any degree of discretion as to the investment of funds or management of the portfolio, and individually and independently manages the funds of each investor as per the contract."
  },
  {
    q: "Under a <strong>non-discretionary</strong> PMS, who takes the buy/sell decisions and decides the timing?",
    options: [
      "The investor (the manager consults the client for every transaction and only executes)",
      "The portfolio manager, at his own discretion",
      "The stock exchange",
      "SEBI"
    ],
    correct: 0,
    explain: "A non-discretionary portfolio manager manages funds as per the client's directions and does not exercise discretion on buy/sell. What to buy/sell and when rest with the investor; the manager executes the trades with the client's consent."
  },
  {
    q: "In an <strong>advisory</strong> PMS role, the portfolio manager:",
    options: [
      "Suggests investment ideas / gives non-binding advice, while the investor takes the decisions and executes the transactions",
      "Takes all decisions and executes all trades independently",
      "Holds the client's securities in his own name",
      "Guarantees returns to the client"
    ],
    correct: 0,
    explain: "In the advisory role the portfolio manager provides non-binding investment advice; the investor takes the decisions and also executes the transactions. Advisory services are typically used by institutional clients who manage portfolios on their own but hire country experts."
  },
  {
    q: "Advisory services are typically used by:",
    options: [
      "Institutional clients who manage portfolios on their own but hire experts for specific markets",
      "First-time retail investors with no market knowledge",
      "Investors who want the manager to take every decision",
      "Clients investing less than ₹1 lakh"
    ],
    correct: 0,
    explain: "Advisory services are typically used for institutional clients, who manage portfolios on their own but typically hire country experts in each country."
  },
  {
    q: "Under a non-discretionary PMS, the <em>execution</em> of the trade is done by:",
    options: [
      "The portfolio manager (with the client's consent)",
      "The client personally at the exchange",
      "The custodian",
      "SEBI"
    ],
    correct: 0,
    explain: "In a non-discretionary PMS, decisions on what/when to buy or sell rest with the investor, but the execution of the trade is done by the portfolio manager — providing investment management services with the consent of the client."
  },

  /* ---------- 12.3 Structure of PMS ---------- */
  {
    q: "A portfolio manager must be a <strong>body corporate</strong>. This broadly means:",
    options: [
      "A corporate entity that has a legal existence",
      "An individual acting in a personal capacity",
      "A partnership of two friends without registration",
      "A charitable trust with no legal identity"
    ],
    correct: 0,
    explain: "A portfolio manager is a body corporate. 'Body corporate' broadly means a corporate entity which has a legal existence."
  },

  /* ---------- 12.4 Registration requirements ---------- */
  {
    q: "To act as a portfolio manager, obtaining which of the following is mandatory?",
    options: [
      "A certificate of registration from SEBI under the Portfolio Managers Regulations",
      "A licence from the RBI",
      "Membership of AMFI",
      "A broking licence from a stock exchange"
    ],
    correct: 0,
    explain: "To act as a portfolio manager, obtaining a certificate of registration from SEBI under the Portfolio Managers Regulations is a mandatory requirement."
  },
  {
    q: "The application for registration as a portfolio manager is made to SEBI:",
    options: [
      "In Form A of Schedule I, along with a non-refundable fee",
      "Verbally, without any fee",
      "In Form B, with a refundable deposit",
      "Through the stock exchange only"
    ],
    correct: 0,
    explain: "The application must be made to SEBI in Form A of Schedule I along with a non-refundable fee. Form A is a very detailed form covering the applicant's particulars, organisation structure, infrastructure, business plan, financials and more."
  },
  {
    q: "The net-worth requirement to be registered as a portfolio manager is:",
    options: [
      "Five crore rupees",
      "Fifty lakh rupees",
      "One crore rupees",
      "Ten crore rupees"
    ],
    correct: 0,
    explain: "One of the conditions the regulator considers is that the applicant fulfils the net-worth requirement of five crore rupees."
  },
  {
    q: "The <strong>principal officer</strong> of a portfolio manager applicant must have a professional qualification (finance, law, accountancy or business management) plus:",
    options: [
      "Experience of at least five years in related activities in the securities market and the relevant NISM certification",
      "Experience of at least two years and no certification",
      "Only a graduation degree",
      "Ten years of experience in any field"
    ],
    correct: 0,
    explain: "The principal officer must have a professional qualification in finance, law, accountancy or business management, experience of at least five years in related securities-market activities (portfolio manager, stock broker, investment adviser, research analyst or fund manager), and the relevant NISM certification."
  },
  {
    q: "Besides the Principal Officer and Compliance Officer, the applicant must employ at least one person who has:",
    options: [
      "A graduation from a recognised university and at least two years' experience in related securities-market activities",
      "A doctorate and ten years' experience",
      "No qualification but five years' experience",
      "Only a NISM certificate"
    ],
    correct: 0,
    explain: "In addition to the Principal Officer and Compliance Officer, the applicant must employ at least one person with a graduation from a recognised university/institution and at least two years' experience in related securities-market activities."
  },
  {
    q: "Which officer must a portfolio manager applicant have appointed as part of the registration conditions?",
    options: [
      "A compliance officer",
      "A marketing officer",
      "A public relations officer",
      "A recovery officer"
    ],
    correct: 0,
    explain: "Among the conditions the regulator takes into account is that the applicant has appointed a compliance officer, along with adequate infrastructure and manpower."
  },
  {
    q: "The certificate of registration granted to a portfolio manager:",
    options: [
      "Is valid unless it is suspended or cancelled by the regulator",
      "Must be renewed every year",
      "Expires automatically after three years",
      "Is valid only for a single client"
    ],
    correct: 0,
    explain: "The certificate of registration granted shall be valid unless it is suspended or cancelled by the regulator."
  },
  {
    q: "Before granting registration, the regulator considers, among other things, that the applicant is a <strong>fit and proper person</strong> and that:",
    options: [
      "Granting the certificate is in the interest of investors",
      "The applicant is the largest firm in the market",
      "The applicant has never advertised its services",
      "The applicant operates only offline"
    ],
    correct: 0,
    explain: "The regulator considers, among other conditions, that the applicant is a fit and proper person and that the grant of the certificate to the applicant is in the interest of investors."
  },
  {
    q: "Form A requires a business plan covering a period of:",
    options: [
      "Three years",
      "One year",
      "Five years",
      "Ten years"
    ],
    correct: 0,
    explain: "Form A of Schedule I requires, among other information, a business plan for three years, along with particulars of the applicant, organisation structure, infrastructural facilities, financial information and experience."
  },

  /* ---------- 12.5 Responsibilities ---------- */
  {
    q: "A portfolio manager shall NOT accept from a client funds or securities worth less than:",
    options: [
      "Fifty lakh rupees",
      "Five lakh rupees",
      "Five crore rupees",
      "One lakh rupees"
    ],
    correct: 0,
    explain: "A portfolio manager shall not accept from the client funds or securities worth less than fifty lakh rupees — the minimum ticket size for PMS."
  },
  {
    q: "A portfolio manager must act in a <strong>fiduciary capacity</strong> with regard to the client's funds. This means:",
    options: [
      "Acting in the client's best interest and for the client's benefit, not the manager's own",
      "Guaranteeing a minimum return",
      "Keeping the client's securities in the manager's own name",
      "Investing only in the manager's associate companies"
    ],
    correct: 0,
    explain: "A portfolio manager shall act in a fiduciary capacity with regard to the client's funds — placing the client's interest first and managing the funds for the client's benefit."
  },
  {
    q: "How must a portfolio manager hold each client's securities?",
    options: [
      "Segregated in separate accounts for each client",
      "Pooled together in a single omnibus account",
      "In the portfolio manager's personal account",
      "In the sponsor's account"
    ],
    correct: 0,
    explain: "The portfolio manager shall segregate each client's holding in securities in separate accounts."
  },
  {
    q: "The funds of all clients must be kept by the portfolio manager in a separate account maintained in:",
    options: [
      "A Scheduled Commercial Bank",
      "The manager's own current account",
      "A co-operative credit society",
      "Cash in the office safe"
    ],
    correct: 0,
    explain: "The portfolio manager shall keep the funds of all clients in a separate account maintained in a Scheduled Commercial Bank."
  },
  {
    q: "A portfolio manager may invest a maximum of what proportion of a client's portfolio in securities of its own associates / related parties?",
    options: [
      "30%, with a one-time written consent from the client",
      "50%, with no consent needed",
      "10%, with SEBI approval each time",
      "100%, at the manager's discretion"
    ],
    correct: 0,
    explain: "A portfolio manager shall invest a maximum of 30% of the client's portfolio in securities of its own associates/related parties, and a one-time written consent must be taken from the client for the same."
  },
  {
    q: "A portfolio manager shall NOT make investments in:",
    options: [
      "Below investment grade securities",
      "Listed equity shares",
      "Government securities",
      "Investment-grade corporate bonds"
    ],
    correct: 0,
    explain: "Portfolio managers shall not make investments in below investment grade securities."
  },
  {
    q: "With regard to funds and securities, a portfolio manager shall NOT:",
    options: [
      "Borrow funds or securities on behalf of the client",
      "Execute trades on behalf of the client",
      "Charge a fixed fee",
      "Provide a disclosure document"
    ],
    correct: 0,
    explain: "The portfolio manager shall not borrow funds or securities on behalf of the client, nor derive any direct or indirect benefit out of the client's funds or securities."
  },
  {
    q: "A portfolio manager may lend securities held on behalf of clients to a third person:",
    options: [
      "No — except as provided under the regulations",
      "Yes — freely, at the manager's discretion",
      "Yes — but only to associates",
      "Yes — only during market holidays"
    ],
    correct: 0,
    explain: "The portfolio manager shall not lend securities held on behalf of the clients to a third person except as provided under these regulations."
  },
  {
    q: "The discretionary portfolio manager must manage each client's funds in a manner that:",
    options: [
      "Does not partake of the character of a Mutual Fund (individually and independently, per the client's needs)",
      "Pools all clients into one common scheme like a mutual fund",
      "Mirrors the largest client's portfolio for everyone",
      "Follows the client's instruction on every trade"
    ],
    correct: 0,
    explain: "The discretionary portfolio manager shall individually and independently manage the funds of each client in accordance with the client's needs, in a manner which does not partake of the character of a Mutual Fund."
  },
  {
    q: "Regarding client complaints, a portfolio manager must:",
    options: [
      "Ensure proper and timely handling of complaints and take appropriate action immediately",
      "Forward all complaints only to the stock exchange",
      "Ignore complaints below ₹50 lakh",
      "Handle complaints only once a year"
    ],
    correct: 0,
    explain: "The portfolio manager shall ensure proper and timely handling of complaints from his clients and take appropriate action immediately."
  },
  {
    q: "A portfolio manager must ensure that any person or entity involved in distributing its services:",
    options: [
      "Carries out distribution in compliance with the regulations and circulars issued from time to time",
      "Is a relative of the principal officer",
      "Is registered as a stock broker",
      "Charges no fee to investors"
    ],
    correct: 0,
    explain: "The portfolio manager shall ensure that any person or entity involved in the distribution of its services carries out the distribution activities in compliance with the regulations and circulars issued thereunder from time to time."
  },

  /* ---------- 12.6 Cost, expenses & fees ---------- */
  {
    q: "The <strong>fixed cost</strong> of a PMS is:",
    options: [
      "An amount payable to the manager regardless of the investment outcome — usually a fixed percentage of the amount managed (e.g. ~1%)",
      "A share of profits payable only if targets are met",
      "A penalty for early exit",
      "A fee paid only in loss years"
    ],
    correct: 0,
    explain: "The fixed cost is the amount that has to be paid to the PMS manager no matter what the outcome — usually a fixed percentage of the amount managed (something like 1%). Brokerage and other transaction costs also become a fixed cost for the investor."
  },
  {
    q: "When assets are bought and sold, the brokerage and other transaction costs charged to the investor are:",
    options: [
      "A fixed cost for the investor (based on the actual amount transacted)",
      "A performance-linked cost",
      "Waived entirely under SEBI rules",
      "Borne by SEBI"
    ],
    correct: 0,
    explain: "In addition to the management fee, the brokerage and other costs involved when assets are bought and sold become a fixed cost for the investor, charged based on the actual amount."
  },
  {
    q: "The <strong>performance-linked cost</strong> (profit-sharing fee) is designed to:",
    options: [
      "Incentivise the fund manager to deliver better performance — a share of profits payable if agreed targets are met",
      "Cover the manager's office rent",
      "Compensate the investor for losses",
      "Pay SEBI's registration fee"
    ],
    correct: 0,
    explain: "The performance-linked cost (profit-sharing fee) is an additional fee to incentivise the manager to perform better. Targets are set in the PMS agreement; if met, a percentage of the profits may be taken as additional fees. These can turn out to be quite high."
  },
  {
    q: "The <strong>high watermark</strong> principle means the profit-sharing fee is charged only when:",
    options: [
      "The portfolio value exceeds its previous highest level on which fees were last paid",
      "The portfolio falls below its starting value",
      "The market index reaches an all-time high",
      "The client requests it"
    ],
    correct: 0,
    explain: "The high watermark is the value/NAV at which fees were last paid. Under this principle, once fees are calculated on a certain level of assets, the next payment comes only when that previous higher level is crossed — so the manager is not paid again for merely recovering from poor performance."
  },
  {
    q: "The <strong>hurdle rate</strong> in a PMS is:",
    options: [
      "The rate of return that must be crossed before any profit-sharing fee is charged",
      "The maximum return the manager can earn",
      "The SEBI-mandated minimum net worth",
      "The exit load percentage"
    ],
    correct: 0,
    explain: "The hurdle rate, mentioned in the PMS agreement, is the return that must be crossed before extra (profit-sharing) fees apply. For example, with an 8% hurdle rate, no profit-sharing is calculated until the return crosses 8%."
  },
  {
    q: "Under the <strong>'no catch-up'</strong> concept, the profit-sharing fee is calculated on:",
    options: [
      "Only the incremental gains above the hurdle rate",
      "The full gains right from the first rupee earned",
      "The client's original capital",
      "The fixed fee already paid"
    ],
    correct: 0,
    explain: "Under the 'no catch-up' concept, only the incremental amount above the hurdle rate is considered for the profit-sharing fee. Under the 'catch-up' concept, once the hurdle is crossed the fee is calculated on the full earnings (catching up from the first rupee)."
  },
  {
    q: "Under the <strong>'catch-up'</strong> concept, once the hurdle rate is crossed, the fee is calculated on:",
    options: [
      "The total earnings (the fee 'catches up' from the first rupee earned)",
      "Only the amount above the hurdle",
      "Nothing — no fee is ever charged",
      "Half of the incremental gain"
    ],
    correct: 0,
    explain: "The catch-up concept looks at the fee right from the first earning, which then needs to 'catch up' to the total earnings — so the profit-sharing fee is computed on the full gains once the hurdle is crossed."
  },
  {
    q: "For the purpose of profit-sharing, PMS returns are computed:",
    options: [
      "Per financial year",
      "Every single day",
      "Once every five years",
      "Only at the end of the contract"
    ],
    correct: 0,
    explain: "Returns are computed per financial year. Provided returns are higher than the hurdle rate, profit sharing applies as per terms — subject to the current fund value being higher than the previous high watermark."
  },

  /* ---------- 12.7 Direct access facility ---------- */
  {
    q: "The <strong>direct access facility</strong> in PMS means:",
    options: [
      "The investor puts money directly into the PMS without any distributor/intermediary, at a lower cost",
      "The investor gets guaranteed higher returns",
      "The investor can trade the PMS units on a stock exchange",
      "The manager takes over all the investor's other accounts"
    ],
    correct: 0,
    explain: "The direct access facility lets an investor approach the PMS provider directly, with no distributors involved in selling the plan. As in a mutual fund's direct plan, the lower expenses mean a lower amount is charged to the investor, raising net returns."
  },
  {
    q: "How does a PMS <strong>regular plan</strong> differ from its direct access facility?",
    options: [
      "The regular plan operates in the traditional way, with normal expenses including amounts paid to distributors",
      "The regular plan invests in a different, riskier portfolio",
      "The regular plan is only for NRIs",
      "The regular plan has no fees at all"
    ],
    correct: 0,
    explain: "The regular plan operates in the traditional way with its normal expenses, including amounts paid to distributors. The management of funds itself does not differ between direct and regular routes — only the cost does."
  },
  {
    q: "A PMS is required to offer the direct access facility so that:",
    options: [
      "Any investor who wants to skip intermediaries can approach the PMS provider directly",
      "Only high-net-worth clients can invest",
      "SEBI can collect additional fees",
      "Distributors can earn higher commission"
    ],
    correct: 0,
    explain: "The PMS has to offer the direct access facility so that any investor who wants to skip the intermediaries can directly approach the PMS provider and invest. The rest of the fund-management process does not differ."
  },
  {
    q: "When advising a client on PMS, the investment adviser should FIRST assess:",
    options: [
      "Whether the client actually needs a PMS compared with other instruments, then the suitability of the direct access plan and the service type",
      "Which distributor pays the highest commission",
      "The colour of the PMS brochure",
      "How to avoid giving the client a disclosure document"
    ],
    correct: 0,
    explain: "The investment adviser must consider the client's position — whether the client needs a PMS versus other instruments — and only once that is clear, assess the suitability of the direct access plan and whether a discretionary, non-discretionary or advisory service fits."
  },
  {
    q: "For a client who is aware of the nature of the investment, an investment adviser can suggest the direct access facility because it:",
    options: [
      "Enables the client to save on costs without affecting performance",
      "Guarantees a higher return",
      "Removes the need for a PMS agreement",
      "Eliminates all market risk"
    ],
    correct: 0,
    explain: "When the client is aware of what the investment involves, the adviser can recommend the direct access facility to save on costs. The other factors related to the PMS do not change, so there is no impact on performance — and the client may achieve a higher net return."
  },

  /* ---------- 12.8 SEBI performance disclosure ---------- */
  {
    q: "Before taking up management of a portfolio, a portfolio manager must:",
    options: [
      "Enter into a written agreement with the client specifying the details required under the SEBI (Portfolio Managers) Regulations, 2020",
      "Obtain a verbal confirmation only",
      "Get approval from the stock exchange",
      "File an FIR with the police"
    ],
    correct: 0,
    explain: "The portfolio manager, before taking up an assignment, must enter into a written agreement with the client specifying the details stated in the SEBI (Portfolio Managers) Regulations, 2020."
  },
  {
    q: "The <strong>Disclosure Document</strong> that a portfolio manager provides to the client must include, among other things:",
    options: [
      "The quantum and manner of payment of fees for each service, portfolio risks specific to each investment approach, and related-party disclosures per ICAI accounting standards",
      "Only the manager's photograph",
      "A guaranteed rate of return",
      "The home addresses of all other clients"
    ],
    correct: 0,
    explain: "The Disclosure Document must include, inter alia, the quantum and manner of payment of fees for each activity, portfolio risks specific to each investment approach, and disclosures on related parties as required under the accounting standards issued by the ICAI."
  },
  {
    q: "The portfolio manager's Disclosure Document must be:",
    options: [
      "Made available on the portfolio manager's website and filed with SEBI",
      "Kept secret from investors",
      "Published only in a newspaper",
      "Filed only with the stock exchange"
    ],
    correct: 0,
    explain: "The Disclosure Document is required to be made available on the website of the portfolio manager as well as filed with SEBI."
  },
  {
    q: "How must a portfolio manager report its performance?",
    options: [
      "Uniformly across its disclosures to SEBI, marketing materials, reports to clients and its website",
      "Differently for each audience to look most attractive",
      "Only to SEBI, never to clients",
      "Only in years of positive returns"
    ],
    correct: 0,
    explain: "The portfolio manager shall report its performance uniformly in the disclosures to SEBI, in marketing materials, in reports to clients and on its website — preventing cherry-picking of figures."
  },
  {
    q: "In the Disclosure Document, the portfolio manager must disclose:",
    options: [
      "The range of fees charged under various heads",
      "The names of all its profitable clients",
      "The manager's personal tax returns",
      "A guaranteed return figure"
    ],
    correct: 0,
    explain: "The portfolio manager shall disclose the range of fees charged under various heads in the disclosure document."
  },

  /* ================= SCENARIO / CASE-STUDY QUESTIONS ================= */
  {
    scenario: "Meera has ₹40 lakh she would like to place with a SEBI-registered portfolio manager under a discretionary PMS.",
    q: "Can the portfolio manager accept this mandate?",
    options: [
      "No — a portfolio manager cannot accept funds or securities worth less than ₹50 lakh from a client",
      "Yes — there is no minimum investment for PMS",
      "Yes — but only under an advisory arrangement",
      "No — the minimum is ₹5 crore"
    ],
    correct: 0,
    explain: "The portfolio manager shall not accept from a client funds or securities worth less than fifty lakh rupees. With only ₹40 lakh, Meera falls below the PMS minimum ticket size and cannot be onboarded."
  },
  {
    scenario: "Rohan opens a PMS account with an initial corpus of ₹50 lakh. In the first year the portfolio grows to ₹60 lakh, and the profit-sharing fee is calculated on the ₹10 lakh gain. In the second year the portfolio value falls to ₹55 lakh.",
    q: "Under the high watermark principle, on what basis is the profit-sharing fee charged in the second year?",
    options: [
      "No profit-sharing fee is charged until the value crosses the previous high of ₹60 lakh",
      "Fee is charged on the full ₹55 lakh",
      "Fee is charged on the ₹5 lakh recovered from a lower point",
      "Fee is charged on ₹10 lakh again"
    ],
    correct: 0,
    explain: "The high watermark is the previous high (₹60 lakh) on which fees were last paid. Since the second-year value (₹55 lakh) is below that high, no profit-sharing fee is charged until the portfolio crosses ₹60 lakh again."
  },
  {
    scenario: "A PMS agreement sets an 8% hurdle rate. In a given financial year the portfolio earns a return of 7%.",
    q: "What profit-sharing fee applies for that year?",
    options: [
      "None — the return has not crossed the 8% hurdle rate",
      "A fee on the full 7% return",
      "A fee on 1% (the shortfall)",
      "A fee at double the normal rate"
    ],
    correct: 0,
    explain: "The hurdle rate is the return that must be crossed before any profit-sharing fee is calculated. A 7% return is below the 8% hurdle, so no profit-sharing fee is charged that year."
  },
  {
    scenario: "A PMS has an 8% hurdle rate and a 20% profit-sharing fee. In a year the portfolio returns 12% on a ₹1 crore corpus. The agreement uses the <strong>'no catch-up'</strong> method.",
    q: "The profit-sharing fee is calculated on:",
    options: [
      "Only the incremental 4% above the hurdle (i.e. 20% of ₹4 lakh = ₹80,000)",
      "The full 12% gain (20% of ₹12 lakh)",
      "The 8% hurdle amount",
      "Nothing, because catch-up was not chosen"
    ],
    correct: 0,
    explain: "Under 'no catch-up', only the incremental gain above the hurdle counts. Return 12% − hurdle 8% = 4% of ₹1 crore = ₹4 lakh; 20% of that = ₹80,000. (Under 'catch-up', the 20% would apply to the full ₹12 lakh gain.)"
  },
  {
    scenario: "Same PMS — 8% hurdle, 20% profit-sharing, 12% return on a ₹1 crore corpus — but this agreement uses the <strong>'catch-up'</strong> method.",
    q: "The profit-sharing fee is calculated on:",
    options: [
      "The full ₹12 lakh gain (20% = ₹2.4 lakh)",
      "Only the ₹4 lakh above the hurdle",
      "The ₹8 lakh hurdle amount",
      "Nothing"
    ],
    correct: 0,
    explain: "Under the 'catch-up' concept, once the hurdle is crossed the fee is charged on the full earnings from the first rupee. So 20% of the entire ₹12 lakh gain = ₹2.4 lakh — more than the ₹80,000 the 'no catch-up' method would charge."
  },
  {
    scenario: "Kabir wants a PMS where he personally decides what to buy and sell and when, but he does not have the time to place the orders at the exchange himself.",
    q: "Which type of PMS suits him?",
    options: [
      "Non-discretionary — the client decides, and the manager only executes the trades",
      "Discretionary — the manager decides everything",
      "Advisory — the manager only suggests ideas and the client executes",
      "None — he must open a broking account instead"
    ],
    correct: 0,
    explain: "In a non-discretionary PMS the buy/sell decisions and timing rest with the investor, while the portfolio manager executes the trades with the client's consent — exactly Kabir's requirement."
  },
  {
    scenario: "A large institution manages its own global portfolio but wants specialist ideas for the Indian market. It will make and execute all decisions itself.",
    q: "Which PMS service fits this institution?",
    options: [
      "Advisory service — the manager gives non-binding advice while the institution decides and executes",
      "Discretionary service — the manager takes all decisions",
      "Non-discretionary service — the manager executes the trades",
      "A retail SIP"
    ],
    correct: 0,
    explain: "Advisory services suit institutional clients who manage portfolios on their own but hire experts for specific markets. The manager provides non-binding advice; the institution takes and executes the decisions."
  },
  {
    scenario: "A portfolio manager wants to invest a portion of a client's ₹1 crore portfolio in securities issued by its own group companies (associates).",
    q: "What does the regulation require?",
    options: [
      "A maximum of 30% may be invested in associates/related parties, with a one-time written consent from the client",
      "Up to 100% may be invested in associates freely",
      "No investment in associates is ever allowed",
      "Up to 50% with SEBI's approval for each trade"
    ],
    correct: 0,
    explain: "A portfolio manager may invest a maximum of 30% of the client's portfolio in securities of its own associates/related parties, and must obtain a one-time written consent from the client for it."
  },
  {
    scenario: "An investment adviser is reviewing a knowledgeable, self-directed client who has decided to allocate ₹1 crore to a particular PMS strategy and is comfortable transacting on their own.",
    q: "What is the adviser most likely to recommend to improve the client's net return?",
    options: [
      "The direct access facility of the PMS, which cuts out distributor costs without changing the strategy or performance",
      "The regular plan, to ensure a distributor is always involved",
      "Splitting the money across ten PMS providers",
      "Avoiding PMS altogether regardless of suitability"
    ],
    correct: 0,
    explain: "For a client aware of the investment's nature, the adviser can recommend the direct access facility. It lowers expenses (no distributor commission) without changing the fund management or performance, raising the client's net return."
  },
  {
    scenario: "A firm applying to SEBI for portfolio-manager registration proposes a principal officer who holds an MBA in finance and has four years of experience in the securities market, along with the relevant NISM certification.",
    q: "Is the principal officer eligible on the experience criterion?",
    options: [
      "No — the principal officer needs at least five years of experience in related securities-market activities",
      "Yes — four years is sufficient with an MBA",
      "Yes — no experience is required if certified",
      "No — an MBA is not an acceptable qualification"
    ],
    correct: 0,
    explain: "The principal officer must have a professional qualification (finance/law/accountancy/business management), the relevant NISM certification, AND at least five years' experience in related securities-market activities. Four years falls short of the five-year requirement."
  },
  {
    scenario: "A start-up wishes to register as a portfolio manager. It has adequate office space and staff, an appointed compliance officer and a qualified principal officer, but a net worth of only ₹3 crore.",
    q: "Can it be granted registration on the net-worth criterion?",
    options: [
      "No — the net-worth requirement for a portfolio manager is ₹5 crore",
      "Yes — ₹3 crore meets the requirement",
      "Yes — net worth is not a criterion",
      "No — the requirement is ₹10 crore"
    ],
    correct: 0,
    explain: "Among the registration conditions, the applicant must fulfil the net-worth requirement of five crore rupees. A net worth of ₹3 crore does not meet the threshold."
  },
  {
    scenario: "A portfolio manager keeps all client money together in its own current account and holds every client's shares in a single pooled demat account 'for operational convenience'.",
    q: "Is this permissible?",
    options: [
      "No — client funds must be kept in a separate account with a Scheduled Commercial Bank, and each client's securities must be segregated in separate accounts",
      "Yes — pooling is allowed for convenience",
      "Yes — provided the clients are all associates",
      "No — but only the funds rule is breached, not the securities rule"
    ],
    correct: 0,
    explain: "The portfolio manager must keep client funds in a separate account with a Scheduled Commercial Bank and must segregate each client's holdings in separate accounts. Pooling funds into the manager's own account and clubbing clients' securities violates both requirements — and the fiduciary duty owed to clients."
  }
];
