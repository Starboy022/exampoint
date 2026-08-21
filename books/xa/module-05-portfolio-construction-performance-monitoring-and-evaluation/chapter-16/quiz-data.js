/* ==========================================================================
   NISM Learn — Chapter 16 question bank
   Portfolio Performance Measurement and Evaluation
   MCQ bank only. One global: window.NISM_CH16_QUESTIONS.
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   `q`, `scenario` and each option render as HTML.
   ========================================================================== */

window.NISM_CH16_QUESTIONS = [
  /* ---- Purpose & basics of performance measurement ---- */
  {
    q: "What is the primary purpose of measuring portfolio performance?",
    options: [
      "To assess whether the portfolio is meeting the investor's objectives and to compare against a benchmark",
      "To guarantee a fixed return every year",
      "To eliminate all investment risk",
      "To avoid paying taxes on gains"
    ],
    correct: 0,
    explain: "Performance measurement tells the adviser and investor whether returns are adequate for the risk taken and how the portfolio fares versus a suitable benchmark — it does not guarantee returns or remove risk."
  },
  {
    q: "Performance <em>evaluation</em> goes beyond performance <em>measurement</em> because it also asks:",
    options: [
      "<em>Why</em> the return was achieved — was it skill, risk-taking, or luck?",
      "Only what the absolute rupee gain was",
      "Only the NAV on the last day",
      "How much brokerage was paid"
    ],
    correct: 0,
    explain: "Measurement records the return; evaluation attributes it — separating manager skill from market movement, risk exposure and chance."
  },

  /* ---- Holding Period Return ---- */
  {
    q: "The Holding Period Return (HPR) captures:",
    options: [
      "Both income (dividends/interest) and capital appreciation over the holding period",
      "Only the dividend received",
      "Only the capital gain, ignoring income",
      "The return after adjusting for inflation only"
    ],
    correct: 0,
    explain: "HPR = (Income + (End value − Begin value)) / Begin value. It combines income and price change."
  },
  {
    scenario: "An investor buys a share for ₹100. During the year it pays a ₹5 dividend and the price rises to ₹115 at year-end.",
    q: "What is the Holding Period Return?",
    options: [
      "20%",
      "15%",
      "5%",
      "25%"
    ],
    correct: 0,
    explain: "HPR = (5 + (115 − 100)) / 100 = 20 / 100 = 20%. Income of ₹5 plus ₹15 capital gain on a ₹100 base."
  },
  {
    scenario: "A bond is bought for ₹1,000. It pays ₹80 interest during the year and is worth ₹1,170 at year-end.",
    q: "What is the Holding Period Return?",
    options: [
      "25%",
      "17%",
      "8%",
      "20%"
    ],
    correct: 0,
    explain: "HPR = (80 + (1,170 − 1,000)) / 1,000 = 250 / 1,000 = 25%."
  },

  /* ---- Time-weighted vs Money-weighted ---- */
  {
    q: "The Time-Weighted Rate of Return (TWRR) is preferred for judging a <em>manager's</em> performance because it:",
    options: [
      "Removes the distorting effect of investor cash inflows and outflows",
      "Always produces a higher number than money-weighted return",
      "Ignores compounding entirely",
      "Only works when there are large cash flows"
    ],
    correct: 0,
    explain: "TWRR neutralises the timing and size of client cash flows, which the manager does not control — isolating investment skill."
  },
  {
    q: "The Money-Weighted Rate of Return (MWRR) is essentially the:",
    options: [
      "Internal Rate of Return (IRR) of the portfolio's cash flows",
      "Simple average of annual returns",
      "Return quoted by the benchmark index",
      "Return before any fees"
    ],
    correct: 0,
    explain: "MWRR is the IRR that sets the present value of all cash flows (including the final value) to zero. It is sensitive to the timing and size of investor cash flows."
  },
  {
    scenario: "Because of well-timed large cash inflows just before a market rally, an investor's MWRR (IRR) works out to 15.15% while the portfolio's TWRR is 6.02% for the same period.",
    q: "Which figure better reflects the fund <em>manager's</em> stock-selection skill, and why?",
    options: [
      "TWRR (6.02%), because it strips out the effect of the investor's cash-flow timing",
      "MWRR (15.15%), because a bigger number is always better",
      "MWRR (15.15%), because it includes cash flows the manager controls",
      "Neither — only the absolute rupee gain matters"
    ],
    correct: 0,
    explain: "The 15.15% is inflated by the investor's lucky cash-flow timing, which the manager did not decide. TWRR of 6.02% isolates the manager's actual investment performance."
  },
  {
    q: "MWRR will differ most from TWRR when:",
    options: [
      "There are large cash flows into or out of the portfolio at times of strong market moves",
      "There are no cash flows at all",
      "The portfolio holds only cash",
      "Returns are exactly zero every period"
    ],
    correct: 0,
    explain: "With no interim cash flows the two measures coincide. The gap widens as cash-flow size and unfortunate/fortunate timing increase."
  },

  /* ---- Arithmetic vs Geometric mean ---- */
  {
    scenario: "A fund returns −50% in Year 1 and +100% in Year 2.",
    q: "What are its arithmetic mean return (AMR) and geometric mean return (GMR)?",
    options: [
      "AMR = 25%, GMR = 0%",
      "AMR = 0%, GMR = 25%",
      "AMR = 25%, GMR = 25%",
      "AMR = 50%, GMR = 50%"
    ],
    correct: 0,
    explain: "AMR = (−50 + 100)/2 = 25%. GMR = √((1−0.5)(1+1)) − 1 = √(0.5 × 2) − 1 = √1 − 1 = 0%. ₹100 → ₹50 → ₹100, so the true compounded return is 0%."
  },
  {
    q: "For measuring realised, compounded performance over multiple periods, which mean should be used?",
    options: [
      "The geometric mean return (GMR)",
      "The arithmetic mean return (AMR)",
      "The simple sum of returns",
      "The highest single-year return"
    ],
    correct: 0,
    explain: "GMR reflects actual compounding of wealth. AMR overstates multi-period performance because it ignores the drag of volatility."
  },
  {
    q: "The arithmetic mean is always ______ the geometric mean when returns vary:",
    options: [
      "Greater than or equal to",
      "Less than",
      "Exactly equal to",
      "Unrelated to"
    ],
    correct: 0,
    explain: "AMR ≥ GMR, with equality only when every periodic return is identical. The greater the volatility, the wider the gap."
  },

  /* ---- CAGR ---- */
  {
    scenario: "₹1,00,000 grows to ₹1,33,960 over 5 years with no cash flows in between.",
    q: "What is the CAGR (compound annual growth rate)?",
    options: [
      "6.02%",
      "6.79%",
      "33.96%",
      "5.00%"
    ],
    correct: 0,
    explain: "CAGR = (1,33,960 / 1,00,000)^(1/5) − 1 = (1.3396)^0.2 − 1 ≈ 6.02%."
  },
  {
    q: "CAGR is most appropriately used to describe:",
    options: [
      "The smoothed annual compounded growth of a lump-sum investment over several years",
      "The return of an investment with frequent large cash flows",
      "A single day's price change",
      "The dividend yield only"
    ],
    correct: 0,
    explain: "CAGR assumes a single investment compounding at a steady rate; it is not suitable when there are irregular interim cash flows (use MWRR/IRR then)."
  },

  /* ---- Gross vs net; fees & costs ---- */
  {
    scenario: "A portfolio earns a gross return of 20%. After deducting management fees and expenses, the investor keeps 13.88%.",
    q: "The gap between 20% and 13.88% is best described as the impact of:",
    options: [
      "Costs — management fees, expenses and charges borne by the investor",
      "Inflation only",
      "Taxes only",
      "Currency movement"
    ],
    correct: 0,
    explain: "Net return = gross return less all fees and expenses. Costs materially erode what the investor actually earns — hence the importance of net-of-fee reporting."
  },
  {
    q: "When comparing two funds, an investor should focus primarily on:",
    options: [
      "Net (post-fee) returns, since that is what the investor actually keeps",
      "Gross returns, since fees don't matter",
      "The fund with the flashiest advertisement",
      "The largest single-day gain"
    ],
    correct: 0,
    explain: "Gross returns flatter the fund; the investor experiences net returns. Always compare like-for-like on a net-of-fee basis."
  },

  /* ---- Pre-tax vs post-tax ---- */
  {
    scenario: "An investment yields a pre-tax return of 5%. The investor is in a bracket where the applicable tax rate on this return is 15%.",
    q: "What is the approximate post-tax return?",
    options: [
      "4.25%",
      "5.00%",
      "0.75%",
      "3.50%"
    ],
    correct: 0,
    explain: "Post-tax return = pre-tax × (1 − tax rate) = 5% × (1 − 0.15) = 5% × 0.85 = 4.25%."
  },
  {
    q: "Why is post-tax return an important lens for an adviser?",
    options: [
      "Because taxes reduce the return the investor actually retains, and tax treatment differs across products",
      "Because taxes are the same for every product and investor",
      "Because it always equals the pre-tax return",
      "Because it removes the need to consider risk"
    ],
    correct: 0,
    explain: "Different products (equity, debt, etc.) and different holding periods attract different tax rules, so post-tax return is what allows fair comparison for a given investor."
  },

  /* ---- Cash drag ---- */
  {
    scenario: "A manager's chosen stocks returned 10%, but the fund held a slice of idle cash all year, so the overall fund returned only 8.5%.",
    q: "The 1.5% shortfall is an example of:",
    options: [
      "Cash drag — uninvested cash lowering the overall return in a rising market",
      "A benchmark error",
      "A currency loss",
      "A tax on dividends"
    ],
    correct: 0,
    explain: "Holding uninvested cash 'drags' the return below the invested assets' return when markets rise. It is a cost of liquidity/timing."
  },

  /* ---- Benchmarking ---- */
  {
    q: "A good benchmark for a portfolio should be:",
    options: [
      "Representative of the portfolio's style, investable, and specified in advance",
      "Whichever index makes the fund look best in hindsight",
      "Always a broad market index regardless of the fund's mandate",
      "Changed frequently to match recent performance"
    ],
    correct: 0,
    explain: "A valid benchmark matches the fund's asset class and style, is investable and unambiguous, and is chosen before the period — not selected after the fact to flatter results."
  },
  {
    q: "A large-cap equity fund should ideally be benchmarked against:",
    options: [
      "A large-cap index reflecting its investment universe",
      "A short-term debt index",
      "A gold price index",
      "A small-cap-only index"
    ],
    correct: 0,
    explain: "The benchmark must reflect the fund's actual style and universe; a large-cap fund vs a large-cap index is an apples-to-apples comparison."
  },
  {
    q: "Comparing a fund's return to a benchmark that does <em>not</em> match its style (e.g. a mid-cap fund vs a large-cap index) leads to:",
    options: [
      "Misleading conclusions about the manager's skill",
      "A perfectly fair comparison",
      "A guaranteed outperformance",
      "Lower taxes"
    ],
    correct: 0,
    explain: "Style mismatch confounds the comparison — differences may reflect the benchmark mismatch rather than manager skill."
  },

  /* ---- Systematic vs unsystematic risk ---- */
  {
    q: "Which type of risk can be reduced through diversification?",
    options: [
      "Unsystematic (specific) risk",
      "Systematic (market) risk",
      "Both can be fully diversified away",
      "Neither can be reduced"
    ],
    correct: 0,
    explain: "Unsystematic (company/sector-specific) risk falls as the portfolio diversifies. Systematic (market-wide) risk cannot be diversified away and is measured by beta."
  },
  {
    q: "Systematic risk is measured by:",
    options: [
      "Beta (β)",
      "Standard deviation of the risk-free asset",
      "The number of stocks held",
      "The dividend yield"
    ],
    correct: 0,
    explain: "Beta measures sensitivity to market movements — i.e. systematic risk. Standard deviation captures total risk (systematic + unsystematic)."
  },
  {
    q: "Standard deviation of returns is a measure of:",
    options: [
      "Total risk (systematic plus unsystematic)",
      "Only systematic risk",
      "Only unsystematic risk",
      "The risk-free rate"
    ],
    correct: 0,
    explain: "Standard deviation captures the total variability of returns. Beta isolates only the systematic (market-related) portion."
  },

  /* ---- Beta ---- */
  {
    q: "A portfolio with a beta of 1.2 is expected to:",
    options: [
      "Move roughly 1.2× the market — amplifying both up and down moves",
      "Move opposite to the market",
      "Have no relationship with the market",
      "Always beat the market"
    ],
    correct: 0,
    explain: "Beta > 1 means the portfolio is more volatile than the market; a 1% market move implies ~1.2% portfolio move, in the same direction on average."
  },
  {
    scenario: "A portfolio holds 60% in a fund with beta 1.2 and 40% in a fund with beta 1.1.",
    q: "What is the portfolio beta?",
    options: [
      "1.16",
      "1.15",
      "1.20",
      "1.10"
    ],
    correct: 0,
    explain: "Portfolio beta is the weighted average: (0.60 × 1.2) + (0.40 × 1.1) = 0.72 + 0.44 = 1.16."
  },

  /* ---- Portfolio return (weighted average) ---- */
  {
    scenario: "A portfolio is 60% invested in an asset returning 16% and 40% in an asset returning 11.75%.",
    q: "What is the portfolio return?",
    options: [
      "14.30%",
      "13.88%",
      "16.00%",
      "11.75%"
    ],
    correct: 0,
    explain: "Portfolio return is the weighted average: (0.60 × 16%) + (0.40 × 11.75%) = 9.6% + 4.7% = 14.30%."
  },

  /* ---- Jensen's alpha / CAPM ---- */
  {
    q: "Jensen's alpha measures:",
    options: [
      "The excess return of a portfolio over the return predicted by CAPM for its beta",
      "The total return before fees",
      "The standard deviation of returns",
      "The dividend yield of the portfolio"
    ],
    correct: 0,
    explain: "Alpha = actual return − CAPM-required return. A positive alpha indicates the manager beat the risk-adjusted expectation."
  },
  {
    scenario: "A portfolio returned 25%. The market returned 15%, the risk-free rate is 5%, and the portfolio beta is 1.5.",
    q: "What is Jensen's alpha?",
    options: [
      "5%",
      "10%",
      "0%",
      "25%"
    ],
    correct: 0,
    explain: "CAPM required = Rf + β(Rm − Rf) = 5 + 1.5(15 − 5) = 5 + 15 = 20%. Alpha = actual − required = 25% − 20% = 5%."
  },
  {
    q: "A positive Jensen's alpha indicates that the manager:",
    options: [
      "Added value beyond what the portfolio's market risk (beta) would justify",
      "Took no risk at all",
      "Underperformed the risk-free rate",
      "Exactly matched the benchmark"
    ],
    correct: 0,
    explain: "Positive alpha = outperformance of the CAPM-predicted return, i.e. genuine risk-adjusted value added. Negative alpha signals underperformance."
  },

  /* ---- Sharpe ratio ---- */
  {
    q: "The Sharpe ratio measures excess return per unit of:",
    options: [
      "Total risk (standard deviation)",
      "Systematic risk (beta)",
      "Downside risk only",
      "Tracking error"
    ],
    correct: 0,
    explain: "Sharpe = (Rp − Rf) / σp, using standard deviation (total risk) in the denominator. Treynor uses beta instead."
  },
  {
    scenario: "A portfolio returned 10.5%, the risk-free rate is 5.5%, and the portfolio's standard deviation is 6.5%.",
    q: "What is the Sharpe ratio?",
    options: [
      "0.7692",
      "0.05",
      "1.6154",
      "0.5000"
    ],
    correct: 0,
    explain: "Sharpe = (10.5 − 5.5) / 6.5 = 5 / 6.5 ≈ 0.7692."
  },
  {
    q: "Between two funds, a <em>higher</em> Sharpe ratio means:",
    options: [
      "More excess return earned for each unit of total risk taken",
      "Higher absolute return regardless of risk",
      "Lower fees",
      "A larger fund size"
    ],
    correct: 0,
    explain: "A higher Sharpe ratio indicates superior risk-adjusted performance on a total-risk basis."
  },

  /* ---- Treynor ratio ---- */
  {
    q: "The Treynor ratio differs from the Sharpe ratio because its denominator is:",
    options: [
      "Beta (systematic risk) instead of standard deviation (total risk)",
      "Standard deviation instead of beta",
      "The risk-free rate",
      "The dividend yield"
    ],
    correct: 0,
    explain: "Treynor = (Rp − Rf) / βp. It is appropriate for a well-diversified portfolio where unsystematic risk is already removed."
  },
  {
    scenario: "A portfolio returned 10.5%, the risk-free rate is 5.5%, and the portfolio beta is 1.0.",
    q: "What is the Treynor ratio (expressed as a decimal)?",
    options: [
      "0.05",
      "0.50",
      "0.7692",
      "5.00"
    ],
    correct: 0,
    explain: "Treynor = (10.5% − 5.5%) / 1.0 = 5% / 1.0 = 0.05 (i.e. 5 percentage points of excess return per unit of beta)."
  },
  {
    q: "The Treynor ratio is most appropriate when the portfolio being evaluated is:",
    options: [
      "Well-diversified, so that only systematic risk remains relevant",
      "A single-stock portfolio with high specific risk",
      "Entirely in cash",
      "Undiversified and concentrated"
    ],
    correct: 0,
    explain: "Because Treynor uses beta, it assumes unsystematic risk has been diversified away; for undiversified portfolios Sharpe (total risk) is more informative."
  },

  /* ---- Sortino ratio ---- */
  {
    q: "The Sortino ratio improves on the Sharpe ratio by measuring risk as:",
    options: [
      "Only downside deviation (harmful volatility), not total volatility",
      "Beta instead of standard deviation",
      "Total return before fees",
      "The number of negative months only"
    ],
    correct: 0,
    explain: "Sortino replaces total standard deviation with downside deviation, penalising only returns below a target — recognising that upside volatility isn't 'bad' risk."
  },
  {
    q: "For an investor who is mainly concerned about losses rather than overall volatility, the most relevant of these ratios is:",
    options: [
      "The Sortino ratio",
      "The Treynor ratio",
      "The information ratio",
      "The tracking error"
    ],
    correct: 0,
    explain: "The Sortino ratio focuses on downside risk, aligning with an investor whose chief worry is negative outcomes."
  },

  /* ---- Information ratio & tracking error ---- */
  {
    q: "The information ratio measures:",
    options: [
      "Active return (over the benchmark) per unit of tracking error",
      "Total return per unit of standard deviation",
      "Excess return per unit of beta",
      "The dividend yield relative to the benchmark"
    ],
    correct: 0,
    explain: "Information ratio = (Rp − Rbenchmark) / tracking error. It rewards consistent active outperformance relative to a benchmark."
  },
  {
    q: "Tracking error is:",
    options: [
      "The standard deviation of the difference between the portfolio's returns and its benchmark's returns",
      "The absolute return of the benchmark",
      "The fund's expense ratio",
      "The beta of the benchmark"
    ],
    correct: 0,
    explain: "Tracking error quantifies how closely (or loosely) the portfolio follows its benchmark. A high tracking error means large active deviations."
  },
  {
    q: "An index fund is designed to have:",
    options: [
      "A very low tracking error relative to the index it replicates",
      "A high tracking error to beat the index",
      "A high information ratio from active bets",
      "A beta of zero"
    ],
    correct: 0,
    explain: "Passive index funds aim to mirror the index, so a low tracking error signals faithful replication — the opposite of an actively managed fund's objective."
  },

  /* ---- M-squared (M²) ---- */
  {
    q: "The M² (Modigliani–Modigliani) measure expresses risk-adjusted performance as:",
    options: [
      "A return figure at the same risk level as the market, so it can be compared directly in percentage terms",
      "A ratio with no units",
      "A beta value",
      "A tracking error in rupees"
    ],
    correct: 0,
    explain: "M² restates the Sharpe ratio as a percentage return the portfolio would have earned if levered/de-levered to the market's risk — easier to interpret than a raw ratio."
  },
  {
    scenario: "After adjusting a portfolio to the market's level of risk, its M² return works out to 26.7%, while the market returned 28%.",
    q: "What does this tell you?",
    options: [
      "On a risk-adjusted basis the portfolio underperformed the market by about 1.3%",
      "The portfolio outperformed the market by 26.7%",
      "The portfolio and market performed identically",
      "The portfolio took no risk"
    ],
    correct: 0,
    explain: "M² of 26.7% versus the market's 28% means that, at equal risk, the portfolio delivered 1.3 percentage points less — a risk-adjusted underperformance."
  },

  /* ---- Currency-adjusted return ---- */
  {
    scenario: "An Indian investor's overseas holding returned 15% in local-currency terms, but the foreign currency depreciated against the rupee over the period, reducing the realised return to about 6.79% in rupee terms.",
    q: "What does this illustrate?",
    options: [
      "Currency movements can materially change the return an investor actually realises on foreign assets",
      "Currency movements never affect foreign returns",
      "Depreciation of the foreign currency always increases rupee returns",
      "The local-currency return is the only one that matters"
    ],
    correct: 0,
    explain: "For cross-border investments the rupee return depends on both the asset's local return and the exchange-rate move. Here currency depreciation cut the 15% local return to ~6.79% in rupees."
  },
  {
    q: "For a foreign investment, the return an Indian investor ultimately cares about is the:",
    options: [
      "Currency-adjusted (rupee) return",
      "Local-currency return before any conversion",
      "The foreign benchmark's return",
      "The pre-tax local return only"
    ],
    correct: 0,
    explain: "The investor spends and measures wealth in rupees, so the return must be converted at prevailing exchange rates — the currency-adjusted return."
  },

  /* ---- Performance attribution ---- */
  {
    q: "Performance attribution analysis seeks to:",
    options: [
      "Break down excess return into components such as asset allocation and security selection",
      "Predict next year's exact return",
      "Calculate only the total rupee gain",
      "Set the fund's expense ratio"
    ],
    correct: 0,
    explain: "Attribution decomposes active return into sources — typically the allocation decision (weights across asset classes) and selection (picking securities within them) — to reveal where value was added or lost."
  },
  {
    q: "In attribution analysis, the <em>allocation</em> effect captures value added from:",
    options: [
      "Over- or under-weighting asset classes/sectors relative to the benchmark",
      "Picking individual winning stocks within a sector",
      "Paying lower fees",
      "Timing the tax year"
    ],
    correct: 0,
    explain: "The allocation effect reflects the weighting decisions across segments. The selection effect reflects security picking within each segment."
  },
  {
    q: "In attribution analysis, the <em>selection</em> effect captures value added from:",
    options: [
      "Choosing better-performing securities within an asset class or sector",
      "Deciding how much to put in equities versus bonds",
      "The overall market's movement",
      "The currency's movement"
    ],
    correct: 0,
    explain: "Selection isolates the manager's security-picking skill within each segment, holding the weighting decision aside."
  },
  {
    scenario: "A manager's fund beat its benchmark. Attribution shows a large positive selection effect but a slightly negative allocation effect.",
    q: "What is the fairest interpretation?",
    options: [
      "Strong stock-picking drove outperformance, partly offset by less effective asset-class weighting decisions",
      "The manager only got lucky with market direction",
      "Fees were the main driver of the result",
      "The benchmark was mis-specified"
    ],
    correct: 0,
    explain: "A positive selection effect points to good security picking; the negative allocation effect means the weighting choices detracted slightly. Net, selection dominated."
  },

  /* ---- Choosing the right measure (synthesis) ---- */
  {
    q: "To compare two <em>well-diversified</em> equity funds on a risk-adjusted basis, the most suitable single measure is:",
    options: [
      "The Treynor ratio (or Jensen's alpha), since only systematic risk is relevant",
      "The raw absolute return",
      "The gross expense ratio",
      "The number of holdings"
    ],
    correct: 0,
    explain: "For diversified portfolios, systematic-risk measures (Treynor, Jensen's alpha) are appropriate. Sharpe (total risk) is preferred when a portfolio may not be fully diversified."
  },
  {
    q: "Two funds have the same return, but Fund A has a higher standard deviation than Fund B. Which is the better risk-adjusted performer?",
    options: [
      "Fund B — it achieved the same return with less total risk (higher Sharpe ratio)",
      "Fund A — higher risk always means higher skill",
      "They are identical because returns match",
      "Cannot be judged without the fund size"
    ],
    correct: 0,
    explain: "Same return with lower risk = a higher Sharpe ratio for Fund B, i.e. superior risk-adjusted performance."
  },
  {
    q: "Why should performance always be evaluated on a <em>risk-adjusted</em> basis rather than by raw return alone?",
    options: [
      "Because a high raw return may simply reflect high risk-taking rather than skill",
      "Because raw returns are always negative",
      "Because risk never affects returns",
      "Because risk-adjusted returns are easier to advertise"
    ],
    correct: 0,
    explain: "Raw return ignores the risk taken to earn it. Two funds with identical returns can differ greatly in risk; risk-adjusted measures reveal which manager delivered more per unit of risk."
  },
  {
    q: "An adviser reviewing a client's portfolio performance should ultimately relate the results back to:",
    options: [
      "Whether the portfolio is on track to meet the client's stated financial goals and risk profile",
      "Only the single best-performing holding",
      "Whichever benchmark looks most flattering",
      "The absolute rupee value, ignoring goals"
    ],
    correct: 0,
    explain: "Performance evaluation is a means to an end: it feeds the review-and-rebalance cycle so the portfolio stays aligned with the client's goals, horizon and risk tolerance."
  },

  /* ---- Extra recall to round out coverage ---- */
  {
    q: "Which measure would you use to evaluate how consistently a manager beats a benchmark?",
    options: [
      "The information ratio",
      "The Sharpe ratio",
      "The Treynor ratio",
      "Jensen's alpha"
    ],
    correct: 0,
    explain: "The information ratio (active return ÷ tracking error) rewards consistent outperformance of the benchmark, not just a one-off excess return."
  },
  {
    q: "A fund reports a beta of 0.8. In a market that falls 10%, the fund would be expected to fall roughly:",
    options: [
      "8%",
      "12.5%",
      "10%",
      "0%"
    ],
    correct: 0,
    explain: "With beta 0.8 the fund moves ~0.8× the market: 0.8 × (−10%) = −8%. Lower beta means lower systematic-risk exposure."
  },
  {
    q: "Which statement about the geometric mean return is correct?",
    options: [
      "It reflects the actual compounded rate at which wealth grew over the period",
      "It is always higher than the arithmetic mean",
      "It ignores the effect of compounding",
      "It is only valid for a single period"
    ],
    correct: 0,
    explain: "GMR captures true compounded growth and is ≤ the arithmetic mean; the two are equal only when every period's return is identical."
  }
];
