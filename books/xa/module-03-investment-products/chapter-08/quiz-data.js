/* ==========================================================================
   NISM Series-X-A · Module 3 · Chapter 8
   Investing in Stocks — end-of-chapter question bank.

   Two shapes (see quiz-engine.js):
     Standard:  { q, options, correct, explain }
     Scenario:  { scenario, q, options, correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   ========================================================================== */

window.NISM_CH08_QUESTIONS = [
  // ---------------- 8.1 Equity as an investment ----------------
  {
    q: "Equity investors (shareholders) are best described as having a:",
    options: [
      "Residual claim on the business — a claim on net assets after all liabilities are paid",
      "First claim ahead of all lenders",
      "Contractual right to fixed periodic interest",
      "Guaranteed return of their capital"
    ],
    correct: 0,
    explain: "Shareholders are owners, not lenders, and hold a residual claim — a claim on the company's net assets (assets after all liabilities are paid). The company is not contractually obligated to repay them or pay periodic interest."
  },
  {
    q: "Which is TRUE of a company that issues equity shares?",
    options: [
      "It is not contractually obligated to repay shareholders or make periodic payments to them",
      "It must pay a fixed dividend every year",
      "It must repay the share capital on a set maturity date",
      "It must pay interest like it does to lenders"
    ],
    correct: 0,
    explain: "Unlike debt, equity carries no contractual obligation to repay the amount received or to make periodic payments. Dividends depend on profitability; capital appreciation depends on market conditions — neither is assured."
  },
  {
    q: "Why is the expected return to equity investors usually higher than to debt investors?",
    options: [
      "All residual benefits of deploying capital go to equity investors, who also bear more risk",
      "Equity is contractually guaranteed a higher coupon",
      "Debt holders have a residual claim",
      "Equity is always less risky than debt"
    ],
    correct: 0,
    explain: "Because all residual benefits go to the equity investor (and they bear higher risk), equity returns are expected to exceed debt returns. Choosing equity vs debt is a risk-return trade-off."
  },
  {
    scenario: "Anita wants stable, predictable returns and is willing to accept less. Vikram is willing to take on more risk in pursuit of higher returns.",
    q: "Based on the risk-return trade-off, which is the better fit?",
    options: [
      "Anita → debt; Vikram → equity",
      "Anita → equity; Vikram → debt",
      "Both should hold only debt",
      "Both should hold only equity"
    ],
    correct: 0,
    explain: "Investors desiring lower risk choose debt (lower but stable returns); those seeking higher returns choose equity, but must bear higher risk to earn it."
  },

  // ---------------- 8.2 Diversification: cross-sectional vs time-series ----------------
  {
    q: "Cross-sectional diversification of equity risk means:",
    options: [
      "Spreading investment across many different stocks/sectors at a given point in time",
      "Spreading investment across time by holding for the long term",
      "Investing only in a single leading stock",
      "Timing the market using technical charts"
    ],
    correct: 0,
    explain: "Cross-sectional diversification spreads money across many securities and sectors at one point in time, reducing risks specific to individual companies or sectors."
  },
  {
    q: "The 'time diversification' benefit of equities refers to:",
    options: [
      "Holding equities over the long term, which reduces the fluctuation of risk and improves risk-adjusted returns",
      "Buying and selling within the same day",
      "Diversifying across currencies",
      "Splitting an order into small trades"
    ],
    correct: 0,
    explain: "Over long horizons, equities provide time (time-series) diversification — reducing risk fluctuations and improving risk-adjusted returns."
  },

  // ---------------- 8.3 Risks ----------------
  {
    q: "Which risk affects ALL listed market-traded assets irrespective of business sector and CANNOT be diversified away (only hedged)?",
    options: [
      "Market risk",
      "Sector-specific risk",
      "Company-specific risk",
      "Liquidity risk"
    ],
    correct: 0,
    explain: "Market risk arises from market-wide dynamics and affects all listed assets regardless of sector. It cannot be diversified away, though it can be hedged. Beta is a proxy measure for market risk."
  },
  {
    q: "Beta is used as a proxy measure for:",
    options: [
      "Market risk",
      "Liquidity risk",
      "Currency risk",
      "Transactional risk"
    ],
    correct: 0,
    explain: "Beta is a proxy measure for market (systematic) risk — the sensitivity of a stock to overall market movements."
  },
  {
    q: "Sector-specific risks are also called:",
    options: [
      "Idiosyncratic risks — and can be diversified away across sectors",
      "Systematic risks that cannot be diversified",
      "Impact-cost risks",
      "Gilt-edged risks"
    ],
    correct: 0,
    explain: "Sector-specific (and company-specific) risks are non-market, idiosyncratic risks that can be diversified away — sector risk by investing across different sectors."
  },
  {
    scenario: "The government restricts international tourist movement. Airlines and hospitality firms suffer, but businesses serving domestic customers are unaffected.",
    q: "This illustrates which type of risk?",
    options: [
      "Sector-specific risk (diversifiable across sectors)",
      "Market risk (undiversifiable)",
      "Currency risk",
      "Transactional risk"
    ],
    correct: 0,
    explain: "Factors hitting some sectors but not others are sector-specific (idiosyncratic) risks — diversifiable by investing across different business sectors."
  },
  {
    scenario: "The whole airline industry faces turbulent times, yet one particular airline collapses while its peers survive due to factors unique to that one firm.",
    q: "The collapse of that single firm reflects:",
    options: [
      "Company-specific risk (diversifiable across companies)",
      "Market risk",
      "Liquidity risk",
      "Currency risk"
    ],
    correct: 0,
    explain: "Risks affecting only a single company (a corporate debacle) are company-specific — non-market risks that can be diversified away by holding different companies."
  },
  {
    q: "The risk that the counterparty fails to pay money or deliver shares when buying/selling equity is:",
    options: [
      "Transactional risk — mitigated by trading through the stock exchange",
      "Liquidity risk",
      "Market risk",
      "Currency risk"
    ],
    correct: 0,
    explain: "Transactional risk is the counterparty not fulfilling contract terms (non-payment or non-delivery). It is mitigated by transacting through the exchange, which has robust risk-mitigation procedures."
  },
  {
    q: "Liquidity risk in equities is measured by:",
    options: [
      "Impact cost",
      "Beta",
      "P/E ratio",
      "Dividend yield"
    ],
    correct: 0,
    explain: "Liquidity risk — not finding a buyer/seller — is measured by impact cost: the percentage price movement caused by a particular order size from the average of the best bid and offer."
  },
  {
    q: "A stock with a HIGH impact cost is:",
    options: [
      "Less liquid — thinly traded, so a single large trade moves its price considerably",
      "More liquid than average",
      "Always a large-cap blue chip",
      "Free of market risk"
    ],
    correct: 0,
    explain: "High impact cost signals low liquidity: thinly-traded stocks move a lot on a single large trade. A lower impact cost implies the stock is more liquid."
  },
  {
    q: "Currency risk becomes relevant to a stock market when:",
    options: [
      "The market is open to international investors (e.g. FPIs), linking it to exchange-rate movements",
      "The company pays dividends in rupees",
      "The company is unlisted",
      "The stock has a low P/E"
    ],
    correct: 0,
    explain: "Once markets open to international investors, currency risk sets in — exchange-rate volatility matters. FPIs move in and out with home-country interest-rate changes or sharp currency moves, pressuring the market."
  },

  // ---------------- 8.4 Overview of equity market ----------------
  {
    q: "Compared with unlisted companies, investments in LISTED companies are generally:",
    options: [
      "More liquid, more regulated and offer better disclosures (they abide by listing norms)",
      "Less liquid and less regulated",
      "Free of all market risk",
      "Guaranteed to appreciate"
    ],
    correct: 0,
    explain: "Listed companies abide by listing norms, so the space is more regulated with better disclosures, and listed equity is relatively more liquid than unlisted equity."
  },

  // ---------------- 8.5 Equity research & stock selection ----------------
  {
    q: "The core idea behind equity research is to:",
    options: [
      "Arrive at the intrinsic value of a stock to compare with its market price and decide buy/hold/sell",
      "Guarantee short-term trading profits",
      "Only read the daily price chart",
      "Predict the exact price tomorrow"
    ],
    correct: 0,
    explain: "Equity research analyses financial and non-financial information, the sector, competitors and the economy to estimate a stock's intrinsic value, then compares it to market price to decide buy/hold/sell."
  },
  {
    q: "Sell-side analysts:",
    options: [
      "Work for investment banking/broking/advisory firms and publish research with buy/hold/sell recommendations and price targets",
      "Work only for mutual/hedge/pension funds for internal use",
      "Are paid solely for the accuracy of their price predictions",
      "Never issue any recommendation"
    ],
    correct: 0,
    explain: "Sell-side analysts work for firms offering investment banking/broking/advisory and publish research reports with buy/hold/sell calls and price targets. They are paid for providing useful information; broad sector guidance is expected more than exact price predictions."
  },
  {
    q: "Buy-side analysts differ from sell-side analysts in that they:",
    options: [
      "Generate recommendations for internal use by their own fund managers, and are paid to be accurate",
      "Publish reports widely for the general public",
      "Do only technical charting",
      "Work for the stock exchange"
    ],
    correct: 0,
    explain: "Buy-side analysts work for fund managers (mutual/hedge/pension funds, PMs), generating recommendations for internal consumption. Because these drive the firm's own trades, they need to be more accurate and are paid for their investment recommendations."
  },
  {
    q: "Fundamental analysis determines a stock's intrinsic value based on fundamentals such as:",
    options: [
      "Future earnings/cash flows, interest rates and risk variables",
      "Only past price patterns and volume",
      "The colour of candlestick charts",
      "The number of shareholders"
    ],
    correct: 0,
    explain: "Fundamental analysis estimates intrinsic value from underlying economic factors — future earnings or cash flows, interest rates and risk variables — via economy, industry and company analysis."
  },
  {
    q: "Under fundamental analysis, an investor should BUY a stock when:",
    options: [
      "Market price is below intrinsic value (after considering transaction cost)",
      "Market price is above intrinsic value",
      "The chart shows a declining trend channel",
      "The P/E is higher than peers'"
    ],
    correct: 0,
    explain: "Buy if market price is below intrinsic value; do not buy (or sell) if above, after accounting for transaction costs. Fundamentalists believe price eventually converges to intrinsic value."
  },
  {
    scenario: "An analyst scans the macro-economic scenario first, then narrows to attractive industries, and finally picks companies within them.",
    q: "This is the:",
    options: [
      "Top-down approach",
      "Bottom-up approach",
      "Technical approach",
      "Asset-based approach"
    ],
    correct: 0,
    explain: "Starting from macro (economy) → industry → company is the top-down approach. Starting at company-specific factors and moving up to macro is bottom-up. The EIC (Economy-Industry-Company) framework is the common structure."
  },
  {
    q: "The 'EIC framework' in fundamental analysis stands for:",
    options: [
      "Economy, Industry, Company",
      "Earnings, Interest, Cash",
      "Equity, Investment, Capital",
      "Economy, Inflation, Currency"
    ],
    correct: 0,
    explain: "EIC = Economy, Industry, Company — the common approach to understanding the fundamental factors that impact a company's earnings, scanning both macro and micro data."
  },
  {
    q: "A macro-economic forecast for valuation should include estimates of:",
    options: [
      "GDP, inflation rates, interest rates and unemployment",
      "Only the company's EPS",
      "Only candlestick patterns",
      "Only the dividend per share"
    ],
    correct: 0,
    explain: "Important economic numbers include GDP, inflation, interest rates and unemployment. Analysts watch indices like WPI, CPI, IIP and GDP growth."
  },
  {
    q: "The stock market is described as a 'leading economic indicator' because:",
    options: [
      "Stock prices reflect expectations of future economic activity, so they improve before the actual economy does",
      "It always lags the real economy",
      "It only reflects past GDP data",
      "It is set by the RBI each month"
    ],
    correct: 0,
    explain: "Stock prices reflect expectations for future activity, so the market tends to improve before the economy does — a leading indicator (though sentiment/flows can make it run ahead or lag)."
  },
  {
    q: "Which sector is typically among the MOST interest-rate-sensitive?",
    options: [
      "Banks / financial institutions",
      "Pharmaceuticals",
      "Consumer staples (FMCG)",
      "Utilities only"
    ],
    correct: 0,
    explain: "Financial institution/bank stocks are typically among the most interest-sensitive sectors; sectors like pharmaceuticals are less affected by interest-rate changes."
  },
  {
    scenario: "The economy is in the early stages of recovery after a recession. An analyst is deciding which sectors to overweight.",
    q: "Which sectors are typically attractive at this stage?",
    options: [
      "Cyclical sectors — e.g. consumer durables like cars, PCs, refrigerators, tractors",
      "Defensive sectors like pharmaceuticals and FMCG",
      "Only gold and cash",
      "Only distressed securities"
    ],
    correct: 0,
    explain: "Cyclical industries (consumer durables) are attractive in the early stages of an economic recovery, benefiting from rising sales and economies of scale. High operating and financial leverage help in good times."
  },
  {
    scenario: "The economy has entered a recession and consumer spending power is falling.",
    q: "Which industries tend to outperform?",
    options: [
      "Defensive industries — consumer staples such as pharmaceuticals and FMCG",
      "Highly cyclical consumer durables",
      "Highly leveraged capital-intensive firms",
      "Luxury goods makers"
    ],
    correct: 0,
    explain: "In a recession, defensive industries (consumer staples like pharma and FMCG) outperform, because people keep spending on necessities even as spending power falls."
  },
  {
    q: "At the PEAK of the business cycle inflation rises. Which type of industry protects its profit margins best?",
    options: [
      "Industries able to pass on higher costs to consumers — e.g. basic materials like oil and metals",
      "Industries that cannot raise their prices",
      "Highly leveraged consumer-durable makers",
      "Loss-making start-ups"
    ],
    correct: 0,
    explain: "Industries that can pass on cost increases (basic materials such as oil and metals — rising inflation doesn't raise their extraction cost) can raise prices and even widen margins. Those unable to pass on costs see profitability suffer."
  },
  {
    q: "The four stages of the industry life cycle are usually depicted as:",
    options: [
      "Introduction (pioneering), growth, maturity, decline",
      "Boom, bust, recovery, peak",
      "Buy, hold, sell, exit",
      "Economy, industry, company, valuation"
    ],
    correct: 0,
    explain: "Analysts assess where an industry sits in its life cycle — introduction, growth, maturity and decline — as an input to intrinsic value."
  },
  {
    q: "In SWOT analysis, which pair deals with a firm's INTERNAL abilities?",
    options: [
      "Strengths and weaknesses",
      "Opportunities and threats",
      "Strengths and opportunities",
      "Weaknesses and threats"
    ],
    correct: 0,
    explain: "Strengths and weaknesses concern a company's internal ability (competitive advantages/disadvantages). Opportunities and threats concern external situations and factors."
  },
  {
    q: "A favourable change in consumer preference or a favourable tax environment would, in SWOT, be classified as:",
    options: [
      "An opportunity (external)",
      "A strength (internal)",
      "A weakness (internal)",
      "A threat (external)"
    ],
    correct: 0,
    explain: "Opportunities are favourable external factors (e.g. favourable tax environment, favourable shift in consumer preference). Threats are adverse external factors (stringent regulation, a big competitor, changing technology)."
  },
  {
    q: "A competitive strategy where a firm positions itself so its capabilities best DEFLECT competitive forces is a:",
    options: [
      "Defensive strategy",
      "Offensive strategy",
      "Passive strategy",
      "Relative strategy"
    ],
    correct: 0,
    explain: "A defensive strategy positions the firm to deflect competitive forces. An offensive strategy uses the firm's strengths to actively affect the competitive forces in the industry."
  },
  {
    q: "Which statement captures a key caution in stock selection?",
    options: [
      "Stocks of good companies need not be good investments — a great company can trade well above intrinsic value",
      "Any good company is always a good investment at any price",
      "Price and value always mean the same thing",
      "Intrinsic value is a known fact for everyone"
    ],
    correct: 0,
    explain: "A good company with superior management can trade far above intrinsic value and be a poor investment. As the saying goes: 'Price is a Fact but Value is an Opinion.'"
  },
  {
    q: "'Price is a Fact but Value is an Opinion' means:",
    options: [
      "Price is observable in the market, while value depends on the analyst's evaluation at a point in time",
      "Value is always higher than price",
      "Price and value are identical",
      "Value can be read directly off the exchange"
    ],
    correct: 0,
    explain: "Price is available from the market and known to all; value is based on the analyst's evaluation. Valuation is an art and a science, requiring knowledge, experience and judgment."
  },

  // ---------------- 8.5.4 Intrinsic value / DCF / asset-based ----------------
  {
    q: "The Discounted Cash Flow (DCF) approach is most appropriate when which THREE things are known?",
    options: [
      "The stream of future cash flows, their timing, and the investors' expected rate of return (discount rate)",
      "The stock's beta, its P/E and its dividend yield",
      "Only the current market price",
      "The number of shareholders, sector and turnover"
    ],
    correct: 0,
    explain: "DCF needs the stream of future cash flows, the timing of those cash flows, and the expected rate of return (discount rate). With these, the present value can be computed."
  },
  {
    q: "Why does the workbook prefer cash flows over accounting profits for valuation?",
    options: [
      "Profits are accounting estimates (accrual-based) and can be adjusted without cash movement, so they aren't directly comparable to cash returns",
      "Profits are always larger than cash flows",
      "Cash flows ignore the time value of money",
      "Profits cannot be measured"
    ],
    correct: 0,
    explain: "Because accrual accounting permits valid adjustments without any cash involvement, profits are estimates, not facts. So business profits and cash-flow returns aren't directly comparable — hence estimating cash flows from profit figures."
  },
  {
    q: "Asset-based valuation is most suitable for:",
    options: [
      "Asset-heavy businesses whose assets are carried near fair value — e.g. financial institutions, real estate, gold, gems & jewellery",
      "Early-stage tech start-ups with no assets",
      "Any business regardless of assets",
      "Only loss-making companies"
    ],
    correct: 0,
    explain: "Asset-based valuation suits asset-heavy firms where assets are reflected at fair market value (financial institutions, real estate, gold/gems/jewellery). Value of equity = value of firm − outsider liabilities. Its limitation: it ignores future profits/cash flows and value from R&D/innovation."
  },
  {
    q: "A limitation of the asset-based valuation approach is that it:",
    options: [
      "Does not recognise the value of future profits/cash flows or value creation from research and innovation",
      "Requires future cash-flow forecasts",
      "Can only be used for start-ups",
      "Ignores the balance sheet"
    ],
    correct: 0,
    explain: "Asset-based valuation values current adjusted assets but ignores future profits/cash flows and value creation from R&D and innovation."
  },

  // ---------------- 8.5.5 Relative valuation / ratios ----------------
  {
    q: "The most common stock valuation measure used by analysts is the:",
    options: [
      "Price-to-Earnings (P/E) ratio",
      "Impact cost",
      "Beta",
      "Market turnover"
    ],
    correct: 0,
    explain: "The P/E ratio (stock price ÷ EPS) is the most common valuation measure. EPS should be the latest 12 months, not just one quarter."
  },
  {
    scenario: "A stock trades at ₹100 and its latest 12-month EPS is ₹5.",
    q: "Its P/E ratio is:",
    options: [
      "20 times",
      "5 times",
      "500 times",
      "0.05 times"
    ],
    correct: 0,
    explain: "P/E = price ÷ EPS = 100 ÷ 5 = 20×. A P/E of 20 means investors pay ₹20 for every ₹1 of earnings."
  },
  {
    q: "A P/E ratio of 10 tells you that investors are willing to invest:",
    options: [
      "₹10 for every ₹1 of earnings the company generates",
      "₹1 for every ₹10 of earnings",
      "₹10 as a dividend per share",
      "10% of the market price as earnings"
    ],
    correct: 0,
    explain: "A P/E reflects how much an investor pays per rupee of earnings; a P/E of 10 means ₹10 invested for every ₹1 of earnings."
  },
  {
    q: "A FORWARD (leading) P/E is computed using:",
    options: [
      "Current market price ÷ sum of the expected next four quarters' EPS",
      "Current market price ÷ sum of the last four quarters' EPS",
      "Book value ÷ EPS",
      "Dividend per share ÷ price"
    ],
    correct: 0,
    explain: "Forward/leading P/E = current price ÷ expected next four quarters' EPS. Historical/trailing P/E uses the last four quarters' EPS; current P/E uses the most recent annual EPS."
  },
  {
    scenario: "The target company's P/E ratio is 18. The industry (and comparable firms') average P/E is 22.",
    q: "On a relative-valuation basis, the target firm is judged to be:",
    options: [
      "Undervalued",
      "Overvalued",
      "Fairly valued",
      "In default"
    ],
    correct: 0,
    explain: "A P/E of 18 versus an industry/market P/E of 22 suggests the firm is undervalued relative to peers."
  },
  {
    q: "Which is a stated limitation of the P/E ratio?",
    options: [
      "It is hard to interpret for unprofitable companies with negative EPS, and projected P/Es rely on estimates that may be inaccurate",
      "It can never change once computed",
      "It works only for banks",
      "It requires the discount rate and cash-flow timings"
    ],
    correct: 0,
    explain: "P/E limitations: projected P/Es depend on possibly-inaccurate earnings estimates; P/Es of loss-making firms (negative EPS) are hard to interpret; and P/E must be recomputed whenever price or earnings estimates change."
  },
  {
    scenario: "A company's shares trade at ₹40 and it declares a dividend of ₹2 per share.",
    q: "The dividend yield is:",
    options: [
      "5%",
      "20%",
      "2%",
      "0.5%"
    ],
    correct: 0,
    explain: "Dividend yield = (dividend per share ÷ market price) × 100 = (2 ÷ 40) × 100 = 5%."
  },
  {
    scenario: "A company has an EPS of ₹2.5 and its market price is ₹25.",
    q: "Its earnings yield is:",
    options: [
      "10%",
      "2.5%",
      "25%",
      "40%"
    ],
    correct: 0,
    explain: "Earnings yield = (EPS ÷ market price) × 100 = (2.5 ÷ 25) × 100 = 10%. The earnings yield is the inverse of the P/E ratio."
  },
  {
    q: "The earnings yield is:",
    options: [
      "The inverse of the P/E ratio (EPS ÷ price)",
      "The same as the dividend yield",
      "Price ÷ book value",
      "EV ÷ EBITDA"
    ],
    correct: 0,
    explain: "Earnings yield = EPS ÷ market price, which is exactly 1 ÷ (P/E). It helps judge under/overvaluation."
  },
  {
    q: "The PEG ratio is defined as:",
    options: [
      "The P/E ratio divided by the earnings growth rate",
      "Price divided by book value",
      "EV divided by EBITDA",
      "Dividend per share divided by price"
    ],
    correct: 0,
    explain: "PEG = P/E ÷ earnings (per share) growth. It scales the P/E by the company's growth."
  },
  {
    q: "The Price/Book (P/B) ratio is especially popular for valuing which sector?",
    options: [
      "Banks and financial services",
      "FMCG",
      "Information technology",
      "Airlines"
    ],
    correct: 0,
    explain: "P/B = market price per share ÷ shareholders' equity (book value) per share; it is very popular among banks and financial-services firms."
  },
  {
    q: "Economic Value Added (EVA) is calculated as:",
    options: [
      "Net after-tax operating profit − (invested capital × cost of capital)",
      "Market value − original capital contributed",
      "Price ÷ EPS",
      "EBITDA − depreciation"
    ],
    correct: 0,
    explain: "EVA (economic profit) = net after-tax operating profit − (invested capital × % cost of capital). It measures the true economic profit a company produces."
  },
  {
    q: "Market Value Added (MVA) is:",
    options: [
      "The difference between the firm's current market value and the original capital contributed by investors",
      "The firm's EBIT minus taxes",
      "The P/E multiplied by EPS",
      "The dividend yield times price"
    ],
    correct: 0,
    explain: "MVA = current market value of the firm − original capital contributed. Positive MVA means value added (needs to exceed investors' opportunity cost); negative MVA means value destroyed."
  },
  {
    q: "Enterprise Value (EV) of a business is:",
    options: [
      "Market capitalisation of equity + market value of debt − excess cash and cash equivalents",
      "Market capitalisation of equity only",
      "Total assets − total liabilities",
      "EBITDA × P/E"
    ],
    correct: 0,
    explain: "EV = market cap of equity + market value of debt − excess cash & equivalents. The intuition: to acquire a firm you'd pay for equity and debt, but not for the cash it already holds."
  },
  {
    q: "The EV/EBITDA multiple is especially useful for valuing:",
    options: [
      "Highly capital-intensive firms not yet making book profits at PAT or EBIT level, but generating surplus cash at EBITDA level",
      "Only profitable FMCG companies",
      "Loss-making firms with no cash flows",
      "Companies with no debt"
    ],
    correct: 0,
    explain: "EBITDA adjusts EBIT toward a cash measure. EV/EBITDA is very useful for capital-intensive firms not yet profitable at PAT/EBIT level but cash-surplus at EBITDA level."
  },
  {
    q: "Why is the EV/Sales ratio considered more comprehensive than the Price/Sales ratio?",
    options: [
      "EV takes account of both the company's equity and debt, while P/S ignores the capital structure",
      "P/S includes debt but EV does not",
      "EV/Sales ignores sales entirely",
      "They are identical measures"
    ],
    correct: 0,
    explain: "EV/Sales values a company on sales while accounting for both equity and debt; P/S does not consider the company's debt. EV/Sales is more meaningful for highly capital-intensive firms."
  },

  // ---------------- 8.6 Combining relative & DCF ----------------
  {
    q: "What is the relationship between relative-valuation multiples and DCF models?",
    options: [
      "Multiples are essentially a simplified version of DCF — both incorporate the same fundamental drivers of business value",
      "They are completely unrelated approaches",
      "Multiples ignore the value of future returns entirely",
      "DCF is a simplified version of multiples"
    ],
    correct: 0,
    explain: "A deeper look shows multiples are a simplified version of DCF; both embed the fundamental drivers of value. DCF depends on the growth rate of cash flows and the discount-rate estimate."
  },

  // ---------------- 8.7 Technical analysis ----------------
  {
    q: "The core assumption of technical analysis is that:",
    options: [
      "All information (fundamentals, economy, sentiment) is already reflected in the stock price, so studying price and volume patterns can forecast direction",
      "Only the balance sheet matters",
      "Intrinsic value must be computed first",
      "Prices move purely at random with no trends"
    ],
    correct: 0,
    explain: "Technical analysis assumes all price-affecting information is already reflected in prices; technicians (chartists) study historical price and volume patterns to forecast direction and magnitude, not fundamentals."
  },
  {
    q: "The three essential elements in understanding price behaviour (technical analysis) are:",
    options: [
      "Past prices (trend & direction), volume (strength of the trend), and the time span observed",
      "EPS, P/E and dividend yield",
      "GDP, inflation and interest rates",
      "Strengths, weaknesses and threats"
    ],
    correct: 0,
    explain: "Technical price behaviour rests on: the history of past prices (trend/direction), the volume accompanying moves (strength of the trend), and the time span over which price and volume are observed."
  },
  {
    q: "Which is an assumption of technical analysis?",
    options: [
      "Price adjustments are not instantaneous and prices move in trends that persist for appreciable periods",
      "Prices instantly and fully adjust to intrinsic value",
      "Supply and demand are governed only by rational factors",
      "Trends never change"
    ],
    correct: 0,
    explain: "Technical assumptions include: price is set by supply and demand (rational and irrational factors); adjustments aren't instantaneous so prices move in trends; trends persist, then change with supply/demand shifts detectable in market action."
  },
  {
    q: "A key difference between technical and fundamental analysis is that technical analysis:",
    options: [
      "Focuses on future price movements from historical data and is used mainly for short-term trading, not long-term investing",
      "Estimates intrinsic value from financial statements",
      "Is only used for long-term investing",
      "Requires collecting extensive fundamental data"
    ],
    correct: 0,
    explain: "Technical analysis is unconcerned with intrinsic value; it studies historical price data for short-term trading. Saying: 'identify a stock through fundamental analysis and do the timing through technical analysis' — though investors are encouraged to be long-term, not traders."
  },
  {
    q: "Technicians claim an advantage over fundamental analysts because they:",
    options: [
      "Do not depend heavily on financial accounting statements and save time collecting data",
      "Always know the exact intrinsic value",
      "Can guarantee returns",
      "Never make losses"
    ],
    correct: 0,
    explain: "Technicians argue financial statements lack much information (non-financial and psychological factors don't appear), and that they need only recognise a move to a new equilibrium — saving the time fundamental analysis requires."
  },
  {
    q: "Which of these is a popular technical trading rule / indicator listed in the chapter?",
    options: [
      "Moving averages",
      "P/E ratio",
      "SWOT analysis",
      "EV/EBITDA"
    ],
    correct: 0,
    explain: "Popular technical tools include trend-line analysis, moving averages and Bollinger-Band analysis. P/E, SWOT and EV/EBITDA are fundamental tools."
  },
  {
    scenario: "On a price chart, a technical analyst identifies a rising trend channel with clear troughs and peaks.",
    q: "Ideally, where does the technician want to BUY?",
    options: [
      "Near the trough (support) of the rising trend channel",
      "Near the peak of the channel",
      "At the sell point",
      "Only after the trend has clearly reversed downward"
    ],
    correct: 0,
    explain: "In trend-line analysis, the technician ideally buys near the trough (support) of a rising trend channel and sells near the peak — trading the channel."
  }
];
