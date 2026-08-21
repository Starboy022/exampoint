/* ==========================================================================
   NISM Series-X-A · Module 3 · Chapter 10 — Understanding Derivatives
   Question bank for the end-of-chapter assessment.

   Shapes:
     Standard  { q, options:[...], correct, explain }
     Scenario  { scenario, q, options:[...], correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH10_QUESTIONS = [

  /* ---------- 10.1 Basics of derivatives ---------- */
  {
    q: "A derivative is best defined as:",
    options: [
      "A contract or product whose value is derived from the value of some other asset (the underlying)",
      "A security that pays a guaranteed fixed coupon",
      "An ownership stake in a company",
      "A bank deposit insured by DICGC"
    ],
    correct: 0,
    explain: "A derivative is a contract whose value is derived from the value of some other asset — the underlying — which can be metals, energy, agri commodities or financial assets like shares and bonds."
  },
  {
    q: "Under Indian law, derivatives are treated as 'securities' and their trading is governed by which Act?",
    options: [
      "The Securities Contracts (Regulation) Act, 1956 [SC(R)A]",
      "The Companies Act, 2013",
      "The Banking Regulation Act, 1949",
      "The Income Tax Act, 1961"
    ],
    correct: 0,
    explain: "The SC(R)A, 1956 defines 'derivative' and treats derivatives as securities; hence the trading of derivatives is governed by the regulatory framework under the SC(R)A. Section 45U(a) of the RBI Act, 1934 gives a separate definition covering interest-rate/FX/credit derivatives."
  },
  {
    q: "Section 45U(a) of the RBI Act, 1934 defines a derivative as an instrument settled at a future date whose value derives from a change in:",
    options: [
      "Interest rate, foreign-exchange rate, credit rating/index, or the price of securities (or a combination)",
      "Only the price of gold",
      "Only a company's dividend policy",
      "The bank's savings-account rate"
    ],
    correct: 0,
    explain: "Under RBI Act s.45U(a), a derivative's value derives from a change in interest rate, FX rate, credit rating or credit index, price of securities, or a combination — and it includes interest-rate swaps, forward-rate agreements, currency swaps and currency options."
  },

  /* ---------- 10.2 Underlying concepts ---------- */
  {
    q: "Why is a futures contract described as a 'zero-sum game'?",
    options: [
      "The net positions of buyer and seller always sum to zero — one's gain equals the other's loss",
      "Both parties always make a profit",
      "Both parties always make a loss",
      "Neither party can ever profit"
    ],
    correct: 0,
    explain: "Buyer and seller hold opposing views; on maturity only one profits, but the combined net position of both is always zero — hence a zero-sum game. This assumes no taxes and no transaction costs."
  },
  {
    q: "Under SEBI's current settlement rules for equity derivatives:",
    options: [
      "Stock derivatives are physically settled (delivery of the stock); index derivatives are cash-settled",
      "All equity derivatives are cash-settled",
      "All equity derivatives are physically settled",
      "Index derivatives are physically settled; stock derivatives are cash-settled"
    ],
    correct: 0,
    explain: "SEBI mandated physical settlement (delivery of the underlying stock) for all stock derivatives, whereas index derivatives are cash-settled (exchange of price differentials, no delivery of the underlying)."
  },
  {
    q: "The initial margin on a futures position has two mandatory components:",
    options: [
      "SPAN margin and ELM (Extreme Loss Margin)",
      "Premium margin and brokerage",
      "STT and stamp duty",
      "Mark-to-market and dividend"
    ],
    correct: 0,
    explain: "Initial margin has two components — SPAN margin and ELM (extreme loss margin) — both mandatorily deposited before a trade. It should be large enough to cover the loss in 99% of cases; the greater the stock's volatility, the greater the initial margin."
  },
  {
    scenario: "A trader buys 3 lots of a call option (lot size 500, so 1,500 options) at a premium of ₹12 per option.",
    q: "The premium margin charged to the option buyer equals:",
    options: [
      "₹18,000 — the premium (₹12) × quantity (1,500)",
      "₹6,000 — half the premium value",
      "₹1,500 — one rupee per option",
      "Nothing — buyers pay no premium margin"
    ],
    correct: 0,
    explain: "Premium margin is paid by the buyers of option contracts and equals the option premium × the quantity purchased = ₹12 × 1,500 = ₹18,000."
  },
  {
    q: "Open interest is:",
    options: [
      "The total number of outstanding derivative contracts that have not been settled — a measure of money flow, NOT trading volume",
      "The same thing as the day's trading volume",
      "The interest rate charged on a margin loan",
      "The premium paid on an option"
    ],
    correct: 0,
    explain: "Open interest is the total outstanding (unsettled) derivative contracts — a measure of the flow of money into a market, not trading volume. Rising open interest means new money entering; falling open interest means money leaving."
  },

  /* ---------- 10.3.1 Forwards ---------- */
  {
    q: "The four commonly used derivative products are:",
    options: [
      "Forwards, Futures, Options and Swaps",
      "Shares, Bonds, Deposits and Gold",
      "Calls, Puts, Straddles and Strangles",
      "Hedging, Speculation, Arbitrage and Margin"
    ],
    correct: 0,
    explain: "The four commonly used derivative products are Forwards, Futures, Options and Swaps."
  },
  {
    scenario: "On 9 March 2018, gold's market (spot) price is ₹30,425 for 10 grams. A buyer instead agrees with the goldsmith to take delivery and pay after 1 month, at a quoted price of ₹30,450 for 10 grams. No money or gold changes hands today.",
    q: "What kind of transaction is this, and what is the buyer's position?",
    options: [
      "A forward contract — the buyer is 'long forward' and the goldsmith is 'short forward'",
      "A cash-market (spot) transaction at the spot price",
      "A futures contract traded on an exchange",
      "An option, since the buyer can walk away"
    ],
    correct: 0,
    explain: "Agreeing today to buy and pay/deliver later at a fixed price is a forward. The buyer has bought forward ('long forward'); the goldsmith has sold forward ('short forward'). Both are obliged to honour it regardless of gold's price at delivery. The ₹30,425 spot deal would have been the cash-market transaction."
  },
  {
    q: "Forward contracts are:",
    options: [
      "Bilateral OTC transactions where price, quantity, quality, time and place are negotiated between the two parties",
      "Standardised contracts traded on an exchange",
      "Contracts guaranteed by a clearing house",
      "Contracts that give a right but not an obligation"
    ],
    correct: 0,
    explain: "Forwards are bilateral over-the-counter (OTC) transactions with terms negotiated between the two parties. They fix the price and thereby avoid price risk, but are not listed/traded on exchanges."
  },
  {
    scenario: "A and B agree that A will buy 100 kg of rice at ₹20/kg from B in 6 months. After 6 months the market price is ₹30/kg, and B refuses to deliver at ₹20.",
    q: "Which limitation of forward contracts does B's refusal illustrate?",
    options: [
      "Counterparty (default / credit) risk",
      "Liquidity risk",
      "Margin risk",
      "Regulatory risk"
    ],
    correct: 0,
    explain: "Counterparty risk is the risk of economic loss from a counterparty failing to fulfil its obligation. With rice at ₹30, B has an incentive to default on delivering at ₹20 (and A would default if the price fell to ₹15). It is also called default or credit risk."
  },
  {
    q: "Why do tailor-made forward contracts suffer from liquidity risk?",
    options: [
      "Their bespoke terms make other market participants uninterested, and they are not listed/traded on exchanges",
      "They are settled through a clearing house",
      "The exchange changes their terms daily",
      "They require large initial margins"
    ],
    correct: 0,
    explain: "Because forwards are tailor-made to the two parties' specific requirements, other participants may not be interested, and they are not listed or traded on exchanges — making them hard to access or exit (liquidity risk)."
  },

  /* ---------- 10.3.2 Futures ---------- */
  {
    q: "A futures contract is best described as:",
    options: [
      "A standardised forward contract traded on an organised exchange, with the exchange (via a clearing house) as counterparty to both sides",
      "A private bilateral contract negotiated directly between two parties",
      "A right, but not an obligation, to buy or sell",
      "An ownership claim on a company"
    ],
    correct: 0,
    explain: "Futures are standardised forwards traded on an exchange. The exchange becomes counterparty to both buyer and seller through a clearing house, which guarantees settlement. Futures create an obligation on both parties."
  },
  {
    q: "In a futures contract, the exchange decides all contract terms EXCEPT:",
    options: [
      "The price — which is discovered through the free interaction of buyers and sellers",
      "The quantity — which each trader sets individually",
      "The quality — which is left unspecified",
      "The margin — which is optional"
    ],
    correct: 0,
    explain: "The exchange standardises quality, quantity, etc.; only the price is discovered through the free interaction of buyers and sellers. Margins are payable by both parties, and trading is on a centralised platform (the exchange)."
  },
  {
    q: "A trader who BUYS a futures contract takes a ______ position; one who SELLS takes a ______ position.",
    options: [
      "long; short",
      "short; long",
      "call; put",
      "hedged; naked"
    ],
    correct: 0,
    explain: "A trader who buys futures takes a long position; one who sells futures takes a short position. The words 'buy' and 'sell' are figurative — no money or underlying changes hands when the deal is signed."
  },

  /* ---------- 10.3.3 Options ---------- */
  {
    q: "An option contract gives its buyer:",
    options: [
      "The right, but not the obligation, to buy or sell the underlying — for which the buyer pays a premium",
      "The obligation to buy or sell the underlying at expiry",
      "An ownership share in the underlying company",
      "A guaranteed profit at expiry"
    ],
    correct: 0,
    explain: "An option gives its buyer/holder the right, but not the obligation, to buy or sell the underlying on/before a stated date at a stated price, for a premium. The buyer exercises only when favourable; the writer (seller) is obligated to honour the contract."
  },
  {
    q: "A Call option gives the buyer the right to ______; a Put option gives the buyer the right to ______.",
    options: [
      "buy the underlying; sell the underlying",
      "sell the underlying; buy the underlying",
      "buy the underlying; buy the underlying",
      "vote in the company; receive dividends"
    ],
    correct: 0,
    explain: "A Call option gives the buyer a right to BUY the underlying; a Put option gives the buyer a right to SELL the underlying."
  },
  {
    scenario: "A call option has a strike price of ₹500, while the underlying stock trades at ₹560 in the market.",
    q: "This call option is:",
    options: [
      "In-The-Money (ITM) — the underlying's price exceeds the strike, so exercising is profitable",
      "Out-of-The-Money (OTM)",
      "At-The-Money (ATM)",
      "Worthless, because options never have value before expiry"
    ],
    correct: 0,
    explain: "For a call, when the underlying's price (₹560) is greater than the strike (₹500), the option is In-The-Money: the holder can buy at ₹500 and sell at ₹560. ATM is when price = strike; OTM (for a call) is when price < strike."
  },
  {
    q: "The intrinsic value and time value of an option are:",
    options: [
      "Intrinsic value = excess of current price over the strike; time value = the excess a buyer pays over intrinsic value (expecting future gains while time remains)",
      "Intrinsic value = the premium; time value = the strike price",
      "Both always equal to zero",
      "Intrinsic value = time to expiry; time value = the underlying's price"
    ],
    correct: 0,
    explain: "Intrinsic value is the excess of the current price over the strike (positive only for ITM options). Time value is the extra a buyer pays over the intrinsic value, reflecting the chance the option gains value before maturity."
  },

  /* ---------- 10.3.4 Swaps ---------- */
  {
    q: "A swap is a contract in which two parties agree to:",
    options: [
      "A specified exchange of cash flows on future date(s) — most commonly interest-rate and currency swaps",
      "Exchange ownership of two companies",
      "Buy and sell the same share simultaneously",
      "Deliver a physical commodity immediately"
    ],
    correct: 0,
    explain: "A swap is a contract for a specified exchange of cash flows on future dates. Interest-rate swaps and currency swaps are the most common."
  },
  {
    scenario: "A borrower owes a quarterly floating interest of 'T-bill rate + spread' but prefers to pay a fixed rate. She enters an interest-rate swap: she pays the dealer a fixed rate and receives T-bill + spread from the dealer each quarter.",
    q: "What is the net effect for the borrower?",
    options: [
      "Her floating-rate legs cancel, converting her borrowing into a net fixed-rate obligation",
      "She now pays both fixed and floating rates",
      "She must exchange the entire principal with the dealer each quarter",
      "She converts her fixed borrowing into floating"
    ],
    correct: 0,
    explain: "The floating rate she receives from the swap offsets the floating dues on her borrowing, leaving her net obligation as the fixed rate paid to the dealer — converting floating-rate borrowing into a fixed-rate obligation."
  },
  {
    q: "In an interest-rate swap, the principal amount ('notional amount'):",
    options: [
      "Is never exchanged — only the interest computed on it is exchanged on each settlement date",
      "Is fully exchanged upfront by both parties",
      "Is exchanged only at maturity",
      "Determines the option premium"
    ],
    correct: 0,
    explain: "The principal (notional amount) is agreed upon but never exchanged; only the interest on that amount is exchanged on each settlement date between the counterparties."
  },
  {
    q: "FIMMDA — the Fixed Income Money Market and Derivatives Association of India — is:",
    options: [
      "A voluntary market body of commercial banks, financial institutions and primary dealers for the bond, money and derivatives markets",
      "A government regulator that licenses stock exchanges",
      "A clearing house that settles all futures trades",
      "A credit rating agency"
    ],
    correct: 0,
    explain: "FIMMDA is a voluntary market body — an association of commercial banks, financial institutions and primary dealers — for the bond, money and derivatives markets. It interfaces with regulators, develops benchmarks and standard documentation, and can arbitrate member disputes."
  },

  /* ---------- 10.4 Structure ---------- */
  {
    q: "Which pairing correctly matches the derivative to its market structure?",
    options: [
      "Forwards are OTC derivatives; futures are exchange-traded derivatives",
      "Forwards are exchange-traded; futures are OTC",
      "Both forwards and futures are exchange-traded",
      "Both forwards and futures are OTC"
    ],
    correct: 0,
    explain: "Forwards are OTC (non-standard, bilateral, rely on counterparty trust). Futures are exchange-traded (standardised, settled through a clearing house that maintains margins and lets anonymous parties trade)."
  },
  {
    q: "Exchange-traded derivatives allow parties who do not know one another to trade because:",
    options: [
      "Buyers and sellers maintain margins with the clearing house, which stands behind the settlement",
      "Each party personally guarantees the other",
      "The government insures every contract",
      "No margins are ever required"
    ],
    correct: 0,
    explain: "Exchange-traded derivatives are standardised and settled through a clearing house. Buyers and sellers maintain margins with the clearing house, so anonymous players can contract on the strength of its settlement process."
  },

  /* ---------- 10.5 Purpose ---------- */
  {
    q: "Derivatives are typically used for three purposes:",
    options: [
      "Hedging, Speculation and Arbitrage",
      "Saving, Lending and Borrowing",
      "Buying, Holding and Selling",
      "Insuring, Depositing and Withdrawing"
    ],
    correct: 0,
    explain: "Derivatives are typically used for hedging (protecting an existing investment from price risk), speculation (taking a view without an underlying holding) and arbitrage (exploiting price differences)."
  },
  {
    scenario: "A trader with no existing holding in a stock buys its futures purely because she believes the price will rise, planning to profit from the move.",
    q: "This use of derivatives is:",
    options: [
      "Speculation — a trade not supported by an underlying existing investment",
      "Hedging — protecting an existing investment",
      "Arbitrage — exploiting a price difference across markets",
      "Margining"
    ],
    correct: 0,
    explain: "A speculative trade is not backed by an underlying existing investment; it simply implements a view about future prices. She bears the cost of the long position (managing the required margins)."
  },
  {
    q: "The 'law of one price', which underlies arbitrage, states that:",
    options: [
      "Two identical assets cannot trade at different prices in two different markets (beyond transaction costs)",
      "Every asset must trade at exactly ₹100",
      "Prices always rise over time",
      "Options and futures must have the same premium"
    ],
    correct: 0,
    explain: "The law of one price says two identical assets cannot trade at different prices in two markets — arbitrageurs buy cheap and sell dear, and their trades themselves close the gap. Prices can differ only to the extent of transaction costs (transport, storage, insurance, interest, etc.)."
  },

  /* ---------- 10.6 Benefits, costs & risks ---------- */
  {
    q: "Which is a stated benefit of derivatives?",
    options: [
      "They enable hedging and better risk management, enhance liquidity, and improve price discovery",
      "They guarantee a profit to all participants",
      "They remove counterparty risk entirely",
      "They are risk-free for everyone"
    ],
    correct: 0,
    explain: "Derivatives enable hedging and better risk management (symmetrical and asymmetrical payoffs), enhance the liquidity of underlying markets, reduce trading costs, and increase participation, information dissemination and price discovery."
  },
  {
    q: "Because derivatives are leveraged instruments, they carry risks such as counterparty, price, liquidity, legal/regulatory and operational risk. The workbook therefore advises participants to:",
    options: [
      "Carefully read the Model Risk Disclosure Document given by the broker before trading",
      "Trade with borrowed money to amplify returns",
      "Ignore the risk disclosures since the exchange guarantees profits",
      "Only trade OTC forwards"
    ],
    correct: 0,
    explain: "Derivatives may be unsuitable for those with limited resources, experience or low risk tolerance. Participants are advised to carefully read the Model Risk Disclosure Document — issued by exchange members — before trading in the cash or F&O segments."
  },

  /* ---------- 10.7 Equity, currency & commodity derivatives ---------- */
  {
    q: "When the underlying of a derivative is an exchange rate, the contract is a ______ derivative; when it is oil or wheat, it is a ______ derivative.",
    options: [
      "currency; commodity",
      "commodity; currency",
      "equity; interest-rate",
      "index; stock"
    ],
    correct: 0,
    explain: "When the underlying is an exchange rate the contract is a currency derivative; when the underlying is a commodity (e.g. oil or wheat) it is a commodity derivative. Both futures and options are available on commodities and currencies."
  },
  {
    scenario: "A biscuit manufacturer wants to lock in the price of 10 tonnes of wheat for future use rather than buy it in the spot market today.",
    q: "How can he do this, and what does the futures contract assure?",
    options: [
      "Buy wheat futures on a commodity exchange — assuring delivery at the contracted price on a specified future date, whatever the actual price then",
      "Buy wheat in the spot market for immediate delivery",
      "Sell wheat put options to earn a premium",
      "Enter a currency swap for wheat"
    ],
    correct: 0,
    explain: "He can buy wheat futures at a commodity futures exchange. The standardised futures contract provides for delivery of the physical commodity at the originally contracted price on a specified future date, irrespective of the price prevailing then."
  },
  {
    q: "Commodities traded on Indian exchanges are grouped into four major categories:",
    options: [
      "Bullion, Metals, Energy and Agriculture",
      "Gold, Silver, Copper and Oil",
      "Debt, Equity, Currency and Index",
      "Forwards, Futures, Options and Swaps"
    ],
    correct: 0,
    explain: "Commodities on Indian exchanges fall into four categories: Bullion, Metals, Energy and Agriculture. Commodity futures trading requires a SEBI certificate of registration and happens on exchanges like MCX, NCDEX, ICEX, NSE and BSE."
  },
  {
    q: "Currency derivatives in India are available on which four currency pairs (against the Rupee)?",
    options: [
      "US Dollar (USD), Euro (EUR), Great Britain Pound (GBP) and Japanese Yen (JPY)",
      "USD, Swiss Franc, Canadian Dollar and Yuan",
      "Only USD and EUR",
      "Gold, Silver, Oil and Gas"
    ],
    correct: 0,
    explain: "Currency derivatives are available on four pairs — USD, EUR, GBP and JPY (against the Rupee). Cross-currency futures & options on EUR-USD, GBP-USD and USD-JPY are also available."
  },
  {
    q: "A defining feature of the currency (FX) market, unlike other asset classes, is that:",
    options: [
      "Every trade is a currency pair — you buy one currency and sell another",
      "There is only ever one currency involved in a trade",
      "Currencies cannot be traded as derivatives",
      "The underlying is always a commodity"
    ],
    correct: 0,
    explain: "The most significant feature of the currency market is the currency pair: every FX trade buys one currency and sells another. In a currency derivative the underlying is an exchange rate."
  },

  /* ---------- 10.8 Markets, pricing & strategies ---------- */
  {
    q: "Derivative trading was introduced in India in:",
    options: [
      "June 2000",
      "January 1995",
      "March 2010",
      "June 2013"
    ],
    correct: 0,
    explain: "Derivative trading was introduced in India in June 2000; turnover has increased dramatically since, making India's equity derivative markets among the largest in the world."
  },
  {
    q: "The pricing of a futures contract is based on the principle of cost of carry, expressed as:",
    options: [
      "F = S + carry costs (futures price = spot price + carrying cost)",
      "F = S − carry costs",
      "F = S × premium",
      "F = strike price + intrinsic value"
    ],
    correct: 0,
    explain: "Futures are priced on the carry-cost principle: F = S + carry costs. The difference between the futures and spot price reflects the interest on the money for the period, so that no arbitrage profit exists between the two markets."
  },
  {
    scenario: "A stock trades at ₹100 in the spot market. Its futures (delivery 20 days away) trade at ₹120. The cost of borrowing funds to buy spot and hold for 20 days works out to exactly ₹20.",
    q: "Is there an arbitrage profit, and what does the ₹20 represent?",
    options: [
      "No arbitrage profit — the ₹20 is the carry cost (interest for 20 days): 120 = 100 + 20",
      "Yes — a guaranteed ₹20 riskless profit",
      "No — because futures can never exceed spot",
      "Yes — the ₹20 is the option premium"
    ],
    correct: 0,
    explain: "F = S + carry costs → 120 = 100 + 20. The ₹20 gap equals the interest (carry cost) for 20 days. Since borrowing to buy spot and sell futures costs exactly ₹20, there is no arbitrage profit. Carry cost is a market-driven rate, not a fixed risk-free rate."
  },
  {
    q: "The difference between the spot price and the futures price of the same underlying is called the:",
    options: [
      "Basis",
      "Premium",
      "Strike",
      "Notional"
    ],
    correct: 0,
    explain: "The difference between the spot and futures price is the basis. If the trader's cost of carry differs from the basis, there is an arbitrage profit to be made on the basis."
  },
  {
    q: "'Spot-future convergence' means that on the settlement (expiry) date:",
    options: [
      "The spot and futures prices of the same underlying become identical, and the carry cost is zero",
      "The futures price is always double the spot price",
      "The option premium falls to zero",
      "The basis widens to its maximum"
    ],
    correct: 0,
    explain: "On the settlement day the spot and futures are at the same level (spot-future convergence), because the carry cost of buying spot and selling futures is zero when settlement coincides with expiry. So on expiry, spot and future prices are identical."
  },
  {
    scenario: "On 3 March 2017, stock XYZ is ₹3,984 in the cash market while its futures (delivery 30 March, i.e. 27 days) trade at ₹4,032. A trader buys the cash and sells the futures, locking in the ₹48 difference.",
    q: "The annualised arbitrage profit, per the workbook, is closest to:",
    options: [
      "16.29% p.a. — (48 ÷ 3,984) × (365 ÷ 27)",
      "1.2% p.a.",
      "48% p.a.",
      "27% p.a."
    ],
    correct: 0,
    explain: "Profit = (48 ÷ 3,984) × (365 ÷ 27) ≈ 16.287% p.a. Buying cheap in the cash market and selling dear in futures locks the profit in, since spot-future convergence closes both legs at the same price on settlement."
  },
  {
    q: "Option contracts feature an ______ payoff — the upside and downside are not uniform.",
    options: [
      "asymmetric",
      "symmetric",
      "linear",
      "guaranteed"
    ],
    correct: 0,
    explain: "An option contract features an asymmetric payoff: the upside and downside are not uniform (unlike futures, whose payoff is symmetric/linear)."
  },
  {
    scenario: "An investor buys (goes long) a call option, paying a premium of ₹15.",
    q: "What is the buyer's maximum loss, and on what does the profit depend?",
    options: [
      "Maximum loss is limited to the ₹15 premium; profit depends on the underlying's price at exercise/expiry",
      "Maximum loss is unlimited; profit is capped at ₹15",
      "There is no possible loss; profit is guaranteed",
      "Maximum loss equals the strike price"
    ],
    correct: 0,
    explain: "A buyer is 'long on option': he has the right to exercise, his potential loss is limited to the premium paid (₹15), and his profit depends on the level of the underlying at exercise/expiry."
  },
  {
    scenario: "A trader writes (sells / goes short) an equity option and collects a premium.",
    q: "What is the writer's maximum profit and potential loss?",
    options: [
      "Maximum profit is the premium received; potential loss is theoretically unlimited",
      "Maximum profit is unlimited; loss is limited to the premium",
      "Both profit and loss are capped at the premium",
      "There is no profit or loss for a writer"
    ],
    correct: 0,
    explain: "A writer (short on option) has an obligation but no right. Maximum profit is the premium received, but potential loss is theoretically unlimited. In India options are mostly European (exercised on expiry); American-style writers can be assigned any time."
  },
  {
    q: "In the Indian market, equity options are mostly of which style?",
    options: [
      "European — exercised only on expiry",
      "American — exercisable any time before expiry",
      "Bermudan — exercisable on several set dates",
      "Asian — settled on an average price"
    ],
    correct: 0,
    explain: "In the Indian market it is mostly European options (exercised on expiry). Assignment risk any time during the contract's life applies to American options."
  },

  /* ---------- Additional coverage ---------- */
  {
    q: "The zero-sum-game description of derivatives rests on two assumptions:",
    options: [
      "No taxes and no transaction costs",
      "Rising prices and low volatility",
      "Physical settlement and daily margins",
      "A guaranteed risk-free rate and zero inflation"
    ],
    correct: 0,
    explain: "The net positions of buyer and seller sum to zero only under the usual assumptions that there are no taxes and no transaction costs."
  },
  {
    q: "Cash settlement of a derivative means that on expiry/exercise the counterparties:",
    options: [
      "Settle through an exchange of price differentials, without delivering the physical underlying",
      "Always deliver the physical underlying asset",
      "Roll the contract forward indefinitely",
      "Exchange the notional principal"
    ],
    correct: 0,
    explain: "Cash settlement settles the position through exchange of the price differentials — the actual (physical) underlying is not delivered. Index derivatives in India are cash-settled; stock derivatives are physically settled."
  },
  {
    q: "Margin is defined as the funds or securities deposited by Clearing Members as collateral before a trade. Its purpose is to:",
    options: [
      "Ensure all financial commitments on a member's open positions can be offset within a specified time",
      "Pay the broker's commission",
      "Guarantee a minimum profit to the member",
      "Cover the government's stamp duty"
    ],
    correct: 0,
    explain: "Margin is collateral deposited before executing a trade, intended to ensure that all financial commitments related to a Clearing Member's open positions can be offset within a specified period."
  },
  {
    q: "How does the initial margin relate to the volatility of the underlying stock?",
    options: [
      "The greater the volatility, the greater the risk — and therefore the greater the initial margin",
      "Volatility has no effect on the initial margin",
      "Higher volatility reduces the initial margin",
      "Initial margin depends only on the option premium"
    ],
    correct: 0,
    explain: "The initial margin should be large enough to cover the loss in 99% of cases. The greater the volatility of the stock, the greater the risk, and therefore the greater the initial margin."
  },
  {
    q: "An increase in open interest in a futures/options market represents:",
    options: [
      "New or additional money coming into the market",
      "Money flowing out of the market",
      "A fall in trading volume",
      "The expiry of all contracts"
    ],
    correct: 0,
    explain: "Open interest measures the flow of money into a market. Increasing open interest represents new/additional money coming in; decreasing open interest indicates money flowing out."
  },
  {
    q: "The essential idea behind entering a forward contract is to:",
    options: [
      "Fix the price and thereby avoid price risk",
      "Speculate with leverage",
      "Earn a premium as the seller",
      "Trade anonymously on an exchange"
    ],
    correct: 0,
    explain: "By entering a forward, one fixes the price and thereby avoids price risk — one is assured of the price at which one can buy/sell the underlying. Any alteration of terms is possible only if both parties agree."
  },
  {
    q: "OTC derivatives (such as forwards) are characterised as:",
    options: [
      "Non-standard contracts that depend on the trust between counterparties, prevalent among institutions comfortable dealing with each other",
      "Standardised contracts guaranteed by a clearing house",
      "Contracts always settled by physical delivery on an exchange",
      "Contracts with no counterparty risk"
    ],
    correct: 0,
    explain: "OTC derivatives are settled on mutually agreed terms; they are non-standard and rely on counterparty trust, prevalent only among institutions comfortable dealing with each other."
  },
  {
    scenario: "An investor already owns a portfolio of shares and wants to protect its value against a possible fall in prices over the next month.",
    q: "Using derivatives for this purpose is called:",
    options: [
      "Hedging",
      "Speculation",
      "Arbitrage",
      "Margining"
    ],
    correct: 0,
    explain: "When an investor holds an asset/portfolio and a desired value or objective, she can use derivative markets to protect that value from future price movements — this is hedging."
  },
  {
    q: "Under the law of one price, prices for the same tradable asset in two markets can differ only to the extent of:",
    options: [
      "Transaction costs — transport, storage, insurance, interest and similar costs",
      "The option premium",
      "The initial margin",
      "The dividend paid"
    ],
    correct: 0,
    explain: "Arbitrage forces identical assets toward the same price; they can differ only to the extent of transaction costs such as transportation, storage, insurance and interest costs."
  },
  {
    q: "A currency future (FX future) is:",
    options: [
      "A futures contract to exchange one currency for another on a future date at an exchange rate fixed on the purchase date",
      "A right, but not obligation, to exchange currencies",
      "A bilateral OTC swap of interest cash flows",
      "An ownership claim on a foreign company"
    ],
    correct: 0,
    explain: "A currency future is a futures contract to exchange one currency for another at a specified future date, at an exchange rate fixed on the purchase date. A currency option, by contrast, grants the right but not the obligation, for a premium."
  },
  {
    q: "Which of these is NOT one of the national exchanges where commodity derivatives are traded in India?",
    options: [
      "RBI Commodity Board",
      "Multi Commodity Exchange of India (MCX)",
      "National Commodity & Derivatives Exchange (NCDEX)",
      "Indian Commodity Exchange (ICEX)"
    ],
    correct: 0,
    explain: "Commodity derivatives trade on MCX, NCDEX, ICEX, NSE and BSE — all requiring a SEBI certificate of registration. There is no 'RBI Commodity Board'."
  },
  {
    q: "Commodity futures contracts are described as highly uniform and well-defined because they explicitly state:",
    options: [
      "The quantity and quality, the delivery time and place, the closing method, and permissible price fluctuations",
      "Only the price, leaving everything else open",
      "Only the delivery date, with quantity negotiated later",
      "The dividend and voting rights"
    ],
    correct: 0,
    explain: "A commodity futures contract is standardised: it states the commodity's quantity and quality, the acceptable delivery date and place, the method of closing, and the permissible (min/max daily) price fluctuations."
  },
  {
    q: "For a call option, when the underlying's market price is LOWER than the strike price, the option is:",
    options: [
      "Out-of-The-Money (OTM)",
      "In-The-Money (ITM)",
      "At-The-Money (ATM)",
      "Always exercised for a profit"
    ],
    correct: 0,
    explain: "For a call, ITM = price above strike, ATM = price equal to strike, and OTM = price below strike (no gain from exercising). Only ITM options have positive intrinsic value."
  },
  {
    q: "In a futures contract, margins are payable by:",
    options: [
      "Both parties (buyer and seller)",
      "Only the buyer",
      "Only the seller",
      "Neither party"
    ],
    correct: 0,
    explain: "A key feature of futures is that margins are payable by both parties. The exchange fixes all other terms (quality, quantity) and only the price is discovered by buyers and sellers."
  },
  {
    q: "The 'carry cost' embedded in a futures price is:",
    options: [
      "A market-driven rate reflecting the risk assumed by lenders — not a fixed risk-free rate",
      "Always exactly equal to the RBI repo rate",
      "A fixed, risk-free interest rate",
      "The option premium plus intrinsic value"
    ],
    correct: 0,
    explain: "Carry cost is not a risk-free or fixed interest rate — it is a market-driven rate driven by the risk assumed by the lenders to the trading position."
  },
  {
    q: "The Model Risk Disclosure Document that derivative participants are advised to read is:",
    options: [
      "Issued by members (brokers) of the exchanges, containing important information on trading in the Equities and F&O segments",
      "A SEBI licence granted to each investor",
      "A guarantee of profits in F&O trading",
      "A tax return filed with the exchange"
    ],
    correct: 0,
    explain: "The Model Risk Disclosure Document is issued by exchange members and given to clients at the time of signing the agreement; it contains important information on trading in the Equities and F&O segments, and should be read before trading."
  },
  {
    scenario: "In a futures market, one stock's futures trade well above its spot price.",
    q: "Per the workbook's convention, when futures trade higher than the spot price, the basis is:",
    options: [
      "Positive",
      "Negative",
      "Always zero",
      "Undefined until expiry"
    ],
    correct: 0,
    explain: "The workbook states that the difference between spot and futures price is the basis, and if futures trade at a level higher than spot prices, the basis is positive."
  },
  {
    q: "Spot-future arbitrage funds work on the principle that:",
    options: [
      "Equal but opposite positions in cash and futures lock in a profit, since spot-future convergence closes both legs at the same price on settlement",
      "Futures always fall to zero at expiry",
      "The cash market price is irrelevant",
      "Arbitrage requires taking a directional view on prices"
    ],
    correct: 0,
    explain: "When the spot-futures gap exceeds a normal cost of carry, a trader creates equal but opposite positions in cash and futures. Because opposite positions are locked in and spot-future convergence occurs at settlement, the profit is locked in — the basis of arbitrage funds."
  },
  {
    q: "Futures were innovated primarily to overcome which limitations of forward contracts?",
    options: [
      "Illiquidity, counterparty (default) risk, lack of transparency and settlement complications",
      "Excessive standardisation and low leverage",
      "Their listing on exchanges",
      "The presence of a clearing house"
    ],
    correct: 0,
    explain: "Forwards suffer illiquidity, counterparty risk, lack of transparency and settlement complications (done directly between the parties). Bringing contracts to a centralised trading platform — i.e. futures — solves these issues."
  }
];
