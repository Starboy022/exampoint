/* ==========================================================================
   NISM Series-X-A · Module 5 · Chapter 14 — Introduction to Modern Portfolio Theory
   Question bank for the end-of-chapter assessment.

   Shapes:
     Standard  { q, options:[...], correct, explain }
     Scenario  { scenario, q, options:[...], correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH14_QUESTIONS = [

  /* ---------- 14.1 Framework / MPT ---------- */
  {
    q: "The adage 'don't put all your eggs in one basket' captures the benefit of:",
    options: [
      "Diversification — spreading investments across areas/asset classes to reduce risk",
      "Leverage — borrowing to amplify returns",
      "Market timing",
      "Concentrating in a single high-return asset"
    ],
    correct: 0,
    explain: "The adage addresses the benefit of diversification — spreading investments across different areas or asset classes to reduce risk, since not every asset behaves similarly at all times."
  },
  {
    q: "Before 1950, the investing community:",
    options: [
      "Knew the benefits of diversification but had no way to quantify them",
      "Had never heard of diversification",
      "Could precisely measure portfolio variance",
      "Believed diversification increased risk"
    ],
    correct: 0,
    explain: "Prior to 1950, investors were familiar with the benefits of holding a diversified portfolio, but they had no way of quantifying those benefits — which is what Markowitz's work went on to provide."
  },
  {
    q: "Modern Portfolio Theory originates from a 1952 article titled 'Portfolio Selection', authored by:",
    options: [
      "Harry Markowitz",
      "William Sharpe",
      "Eugene Fama",
      "John Bogle"
    ],
    correct: 0,
    explain: "In 1952, The Journal of Finance published 'Portfolio Selection' by Harry Markowitz. Its ideas form the foundation of Modern Portfolio Theory (MPT)."
  },
  {
    q: "Harry Markowitz was awarded the Nobel Prize in Economics for his portfolio theory in:",
    options: [
      "1990",
      "1952",
      "1976",
      "2000"
    ],
    correct: 0,
    explain: "Decades after his 1952 article, Harry Markowitz was honoured with the Nobel Prize in Economics in 1990 for his portfolio theory."
  },
  {
    q: "MPT quantified the concept of diversification by introducing the statistical notion of:",
    options: [
      "Covariance / correlation between investment assets",
      "The price-to-earnings ratio",
      "Duration",
      "Beta only"
    ],
    correct: 0,
    explain: "MPT quantified diversification by introducing the statistical notion of covariance, or correlation, between investment assets, and showed that the variance of the rate of return is a meaningful measure of portfolio risk."
  },
  {
    q: "In MPT, the meaningful measure of portfolio risk that Markowitz mathematically demonstrated is the:",
    options: [
      "Variance (and standard deviation) of the rate of return",
      "Absolute rupee value of the portfolio",
      "Number of securities held",
      "Dividend yield"
    ],
    correct: 0,
    explain: "Markowitz mathematically demonstrated that the variance of the rate of return is a meaningful measure of portfolio risk, and derived the formula for computing the variance of a portfolio."
  },
  {
    q: "In simple terms, MPT provides a framework for constructing and selecting portfolios based on:",
    options: [
      "The expected performance of the investments and the risk appetite of the investor",
      "Only the historical dividend record",
      "The broker's recommendation",
      "Only the size of the company"
    ],
    correct: 0,
    explain: "MPT provides a framework for constructing and selecting portfolios based on the expected performance of the investments and the risk appetite of the investor."
  },

  /* ---------- 14.2 Assumptions ---------- */
  {
    q: "A core MPT assumption is that, given two assets with equal expected return, an investor will:",
    options: [
      "Select the asset with the lower risk",
      "Select the asset with the higher risk",
      "Be indifferent between them regardless of risk",
      "Select neither"
    ],
    correct: 0,
    explain: "MPT assumes an investor wants to maximise return for a given level of risk. Given two assets with equal rate of return, investors select the one with lower risk."
  },
  {
    q: "Under MPT, each investment alternative is represented by:",
    options: [
      "A probability distribution of expected returns over a holding period",
      "A single guaranteed return",
      "The promoter's promise",
      "A fixed coupon only"
    ],
    correct: 0,
    explain: "Investors consider each investment alternative as being represented by a probability distribution of expected returns over some holding period."
  },
  {
    q: "MPT assumes investors maximise:",
    options: [
      "One-period expected utility, choosing the action with the maximum expected utility",
      "Only their absolute wealth, ignoring utility",
      "The number of trades",
      "Short-term trading profits alone"
    ],
    correct: 0,
    explain: "Investors maximise one-period expected utility — they choose the action or event with the maximum expected utility, assigning utility scores to the portfolio choices available."
  },
  {
    q: "The principle that 'the per-rupee increment to utility decreases with wealth' is called:",
    options: [
      "Diminishing marginal utility of wealth",
      "Increasing marginal utility of wealth",
      "Constant marginal utility",
      "The risk-free rate"
    ],
    correct: 0,
    explain: "Utility curves demonstrate diminishing marginal utility of wealth — although investors differ in their rate of decrease, each additional rupee adds less to utility as wealth grows."
  },
  {
    q: "Under MPT, an investor's utility curve is a function of:",
    options: [
      "Expected return and the expected variance (or standard deviation) of returns only",
      "Expected return only",
      "The company's brand value",
      "Trading volume"
    ],
    correct: 0,
    explain: "Investors base decisions solely on expected return and risk, so their utility curves are a function of expected return and the expected variance (or standard deviation) of returns only."
  },

  /* ---------- 14.3 Risk attitudes ---------- */
  {
    q: "A prospect that has a zero risk premium is called a:",
    options: [
      "Fair game",
      "Risk-free asset",
      "Certainty equivalent",
      "Efficient portfolio"
    ],
    correct: 0,
    explain: "A prospect that has a zero risk premium is called a fair game. Risk-averse investors reject a fair game."
  },
  {
    q: "A <strong>risk-averse</strong> investor will:",
    options: [
      "Reject a fair game and require a positive expected risk premium to take on risk",
      "Accept any fair game willingly",
      "Ignore risk entirely",
      "Prefer higher risk for its own sake"
    ],
    correct: 0,
    explain: "Risk-averse investors reject fair games. They invest in risk-free opportunities or in opportunities with a positive expected risk premium — and the greater the risk, the greater the risk premium they demand."
  },
  {
    q: "The <strong>Certainty Equivalent Rate (CER)</strong> is:",
    options: [
      "The rate a risk-free investment must offer to be equally attractive as the risky investment",
      "The historical average return of the market",
      "The risk-free rate plus inflation",
      "The maximum possible return of the portfolio"
    ],
    correct: 0,
    explain: "The certainty equivalent rate is the rate that a risk-free investment has to offer to be equally attractive as a risky investment. Investors compare the utility of the risky portfolio with a risk-free investment offering the same utility."
  },
  {
    q: "A <strong>highly</strong> risk-averse investor may assign a risky portfolio a CER that is:",
    options: [
      "Below the risk-free rate, leading them to reject the risky portfolio",
      "Always above the expected return",
      "Exactly equal to the expected return",
      "Irrelevant to their decision"
    ],
    correct: 0,
    explain: "A highly risk-averse investor may assign a risky portfolio a CER below the risk-free rate of return and reject it. A less risk-averse investor may assign a higher CER and accept the same portfolio."
  },
  {
    q: "For a <strong>risk-neutral</strong> investor, the portfolio's certainty equivalent rate is:",
    options: [
      "The expected rate of return on the risky portfolio (risk is irrelevant)",
      "Always below the risk-free rate",
      "Zero",
      "The standard deviation of returns"
    ],
    correct: 0,
    explain: "A risk-neutral investor evaluates opportunities solely on expected return with no regard to risk — providing no penalty for risk. For them, the portfolio CER equals the expected rate of return on the risky portfolio."
  },
  {
    q: "A <strong>risk-seeking</strong> investor differs from a risk-averse one in that they:",
    options: [
      "Will engage in a fair game and make an upward adjustment to utility for risk",
      "Reject all fair games",
      "Ignore expected return",
      "Always demand a larger risk premium"
    ],
    correct: 0,
    explain: "A risk-seeking investor will engage in a fair game and makes an upward adjustment for utility — unlike a risk-averse investor, who makes a downward adjustment for utility."
  },
  {
    q: "When assigning utility scores to competing portfolios, higher scores go to portfolios with:",
    options: [
      "Higher expected return and lower risk (a better risk-return profile)",
      "Higher risk regardless of return",
      "Lower expected return",
      "The most securities"
    ],
    correct: 0,
    explain: "Higher utility scores are assigned to portfolios with a better risk-return profile — higher expected return raises the utility score, while higher risk lowers it."
  },
  {
    q: "Why do investors demand a <strong>risk premium</strong>?",
    options: [
      "As compensation for bearing risk — the greater the risk, the greater the premium demanded",
      "Because regulators mandate it",
      "To reduce their expected return",
      "Only when markets are falling"
    ],
    correct: 0,
    explain: "The presence of risk means more than one outcome is possible; investors demand a risk premium for bearing that risk. The greater the risk, the greater the demand for risk premium."
  },

  /* ---------- 14.4 Individual security return & risk ---------- */
  {
    q: "The expected rate of return of an individual investment is:",
    options: [
      "The sum of the potential returns multiplied by their corresponding probabilities",
      "The highest possible return",
      "The simple average of the best and worst return",
      "The most recent year's return"
    ],
    correct: 0,
    explain: "Expected return equals the sum of the potential returns, each multiplied by its corresponding probability of occurrence."
  },
  {
    q: "Standard deviation of expected returns is:",
    options: [
      "The square root of the variance — a measure of dispersion of returns around the expected value",
      "The variance multiplied by two",
      "The mean of the returns",
      "Always equal to the expected return"
    ],
    correct: 0,
    explain: "Standard deviation is the square root of the variance. It measures the dispersion of returns around the expected value; a larger variance (larger SD) indicates greater dispersion, hence larger risk."
  },
  {
    q: "A larger variance (larger standard deviation) of returns indicates:",
    options: [
      "Greater dispersion of returns, and hence larger risk",
      "Lower risk",
      "A guaranteed higher return",
      "No relationship with risk"
    ],
    correct: 0,
    explain: "Larger variance (larger standard deviation) indicates greater dispersion of returns around the expected value — hence larger risk."
  },
  {
    q: "When computing the variance of a sample of historical returns, the sum of squared deviations is divided by:",
    options: [
      "n − 1 (the number of observations minus one)",
      "n (the number of observations)",
      "n + 1",
      "The mean return"
    ],
    correct: 0,
    explain: "For the sample variance illustrated, the sum of the squared deviations from the mean is divided by n − 1. In the workbook's 5-year example, 353.20 ÷ 4 = 88.3, and the standard deviation is √88.3 ≈ 9.40."
  },
  {
    q: "The expected return of a <strong>portfolio</strong> is:",
    options: [
      "The weighted average of the expected returns of its constituents (weights = proportions of the portfolio)",
      "The simple average of the highest and lowest returns",
      "The return of the largest holding only",
      "Always higher than every constituent's return"
    ],
    correct: 0,
    explain: "A portfolio's expected return is the weighted average of the expected returns of its constituents. In the workbook example (A 0.2×0.09, B 0.1×0.12, C 0.3×0.15, D 0.4×0.18), the weighted returns sum to 0.147, i.e. 14.7%."
  },
  {
    q: "The correct sequence to compute the variance of a series of returns is:",
    options: [
      "List returns → compute the mean → find each deviation from the mean → square the deviations → sum them (→ divide by n−1)",
      "Square the returns → add them → take the square root",
      "Multiply all returns together",
      "Subtract the smallest return from the largest"
    ],
    correct: 0,
    explain: "The steps are: list the yearly returns, compute the mean, subtract the mean from each year's return (deviation), square each deviation, and add all the squared deviations — then divide by n−1 for the sample variance."
  },

  /* ---------- 14.5 Two-security portfolio risk ---------- */
  {
    q: "The variance of a two-security portfolio has three terms:",
    options: [
      "The weighted variance of security 1, the weighted variance of security 2, and the weighted covariance between them",
      "Three separate expected returns",
      "The mean, median and mode of returns",
      "Three risk-free rates"
    ],
    correct: 0,
    explain: "In a two-investment portfolio there are three terms: the weighted variance of investment 1, the weighted variance of investment 2, and the weighted covariance between investments 1 and 2 (with the variance weights squared)."
  },
  {
    q: "Portfolio variance is described as a function of:",
    options: [
      "Weighted averages of the individual variances (weights squared) plus the weighted covariances between the assets",
      "The simple sum of the individual standard deviations",
      "Only the largest asset's variance",
      "The number of assets alone"
    ],
    correct: 0,
    explain: "Portfolio variance is a function of the weighted averages of the individual variances (where the weights are squared) plus the weighted covariances between all the assets in the portfolio."
  },
  {
    q: "The diversification benefit of combining two securities is greatest when the correlation between their returns is:",
    options: [
      "Low or negative (below +1)",
      "Exactly +1.0",
      "Greater than +1.0",
      "Irrelevant to the benefit"
    ],
    correct: 0,
    explain: "When the correlation is +1.0 the two securities move perfectly together and there is no diversification benefit (the portfolio SD is just the weighted average of the SDs). The lower (or more negative) the correlation, the greater the reduction in portfolio risk."
  },
  {
    q: "If two securities are perfectly positively correlated (ρ = +1), the portfolio's risk is:",
    options: [
      "The weighted average of the two securities' standard deviations — no diversification benefit",
      "Always zero",
      "Higher than either security's risk",
      "Unrelated to the individual risks"
    ],
    correct: 0,
    explain: "With ρ = +1.0 the securities move in perfect lockstep, so the portfolio standard deviation equals the weighted average of the individual standard deviations — there is no risk reduction from diversification."
  },
  {
    q: "Covariance (and correlation) between two assets matters in MPT because it:",
    options: [
      "Captures how the assets move together, and thus how much risk diversification can remove",
      "Determines the expected return only",
      "Is always equal to the variance",
      "Has no effect on portfolio risk"
    ],
    correct: 0,
    explain: "Covariance/correlation measures how two assets move relative to each other. It is the third term in the portfolio-variance formula and drives how much risk diversification can eliminate."
  },

  /* ---------- 14.6 Efficient Frontier ---------- */
  {
    q: "The <strong>Efficient Frontier</strong> is best described as the set of portfolios that offer:",
    options: [
      "The maximum expected return for a given level of risk (or the minimum risk for a given expected return)",
      "The highest possible risk",
      "A guaranteed return with zero risk",
      "Only single-security holdings"
    ],
    correct: 0,
    explain: "The efficient frontier is the set of optimal portfolios that offer the highest expected return for a given level of risk (equivalently, the lowest risk for a given expected return). Portfolios below it are inefficient."
  },
  {
    q: "A portfolio that lies <em>below</em> the efficient frontier is:",
    options: [
      "Inefficient — another portfolio offers more return for the same risk (or less risk for the same return)",
      "The optimal portfolio",
      "Always risk-free",
      "On the frontier by definition"
    ],
    correct: 0,
    explain: "Portfolios below the efficient frontier are inefficient: for the same level of risk a higher-return portfolio exists on the frontier, or for the same return a lower-risk portfolio exists."
  },
  {
    q: "On a risk-return graph, the efficient frontier is plotted with:",
    options: [
      "Expected return on the vertical axis and standard deviation (risk) on the horizontal axis",
      "Time on the vertical axis and price on the horizontal axis",
      "Standard deviation on the vertical axis and return on the horizontal axis",
      "Probability on both axes"
    ],
    correct: 0,
    explain: "The efficient frontier is drawn with expected return E(R) on the vertical axis and standard deviation of return (risk) on the horizontal axis; the frontier is the upper-left boundary of the feasible set."
  },

  /* ---------- 14.7 Portfolio Optimization Process ---------- */
  {
    q: "The <strong>inputs</strong> to the portfolio optimization process include all of the following EXCEPT:",
    options: [
      "The broker's commission schedule",
      "Expected returns of the securities in the investment universe",
      "Volatility and correlation (risk-return) estimates",
      "Constraints on portfolio choice and the investor's objectives"
    ],
    correct: 0,
    explain: "The optimization inputs are: expected returns of the securities in the specified universe, volatility & correlation estimates, constraints on portfolio choice, and the investor's objectives. The broker's commission schedule is not one of the stated inputs."
  },
  {
    q: "The <strong>outputs</strong> of the portfolio optimization process are:",
    options: [
      "The efficient frontier and the investor's optimal portfolio",
      "A single guaranteed-return bond",
      "The risk-free rate",
      "Only a list of securities to avoid"
    ],
    correct: 0,
    explain: "Portfolio optimization takes the risk-return estimates, constraints and objectives and produces two outputs: the efficient frontier and the optimal portfolio for the investor."
  },
  {
    q: "Constraints on portfolio choice (e.g. limits on certain holdings) enter the optimization process as:",
    options: [
      "An input that shapes the feasible set and the resulting optimal portfolio",
      "An output of the process",
      "A substitute for expected returns",
      "The definition of the risk-free rate"
    ],
    correct: 0,
    explain: "Constraints on portfolio choice are one of the inputs to optimization, alongside expected returns, volatility & correlation estimates and investor objectives; they shape the feasible set and hence the optimal portfolio."
  },

  /* ---------- 14.8 Estimation issues ---------- */
  {
    q: "A key 'estimation issue' in applying MPT is that:",
    options: [
      "Expected returns, volatilities and correlations are only estimates, and errors in them affect the optimised portfolio",
      "The formulas are unknown",
      "Diversification cannot be quantified",
      "Variance cannot be computed"
    ],
    correct: 0,
    explain: "MPT depends on inputs — expected returns, volatilities and correlations — that must be estimated. These estimates carry error, and the optimisation output is only as good as the quality of the inputs."
  },
  {
    q: "Because MPT inputs are estimated (often from historical data), a practical caution is that:",
    options: [
      "Past data may not reliably predict future returns, volatilities or correlations",
      "The efficient frontier is always exact",
      "Correlations never change over time",
      "Estimation removes all portfolio risk"
    ],
    correct: 0,
    explain: "Estimation issues arise because inputs are frequently drawn from historical data, which may not reliably predict future returns, volatilities or correlations — so the estimated efficient frontier and optimal portfolio are subject to error."
  },

  /* ================= SCENARIO / CASE-STUDY QUESTIONS ================= */
  {
    scenario: "Stock A's returns are forecast as: Boom (probability 0.3) 15%, Normal (0.5) 10%, Recession (0.2) 2%.",
    q: "What is the expected return of Stock A?",
    options: [
      "9.9%",
      "10.0%",
      "15.0%",
      "8.4%"
    ],
    correct: 0,
    explain: "Expected return = Σ(probability × return) = 0.3(15%) + 0.5(10%) + 0.2(2%) = 4.5% + 5.0% + 0.4% = 9.9%."
  },
  {
    scenario: "Stock B's returns are forecast as: Boom (0.3) 25%, Normal (0.5) 20%, Recession (0.2) 1%.",
    q: "What is the expected return of Stock B?",
    options: [
      "17.7%",
      "20.0%",
      "15.3%",
      "22.0%"
    ],
    correct: 0,
    explain: "Expected return = 0.3(25%) + 0.5(20%) + 0.2(1%) = 7.5% + 10.0% + 0.2% = 17.7%."
  },
  {
    scenario: "An investor must choose between Stock A (E(R) 9.9%) and Stock B (E(R) 17.7%). Both are available, and the investor is rational under MPT.",
    q: "If the two stocks had the SAME expected return, which would a risk-averse investor prefer, and on what basis?",
    options: [
      "The one with lower risk (lower standard deviation)",
      "The one with higher risk, for excitement",
      "Whichever has the higher price",
      "They would refuse to choose"
    ],
    correct: 0,
    explain: "MPT assumes that, given two assets with equal expected return, an investor selects the one with lower risk. Between equal-return assets, the lower-standard-deviation asset is preferred."
  },
  {
    scenario: "A mutual fund's annual returns over five years are 15%, 12%, 20%, −5% and 10%.",
    q: "What is the mean (average) annual return?",
    options: [
      "10.4%",
      "12.0%",
      "9.4%",
      "8.8%"
    ],
    correct: 0,
    explain: "Mean = (15 + 12 + 20 − 5 + 10) ÷ 5 = 52 ÷ 5 = 10.4%."
  },
  {
    scenario: "For the same fund (returns 15%, 12%, 20%, −5%, 10%; mean 10.4%), the squared deviations from the mean sum to 353.20.",
    q: "Using n − 1 in the denominator, what are the variance and standard deviation?",
    options: [
      "Variance ≈ 88.3, standard deviation ≈ 9.40",
      "Variance ≈ 70.6, standard deviation ≈ 8.40",
      "Variance ≈ 353.2, standard deviation ≈ 18.8",
      "Variance ≈ 44.2, standard deviation ≈ 6.65"
    ],
    correct: 0,
    explain: "Variance = 353.20 ÷ (5 − 1) = 353.20 ÷ 4 = 88.3. Standard deviation = √88.3 ≈ 9.40."
  },
  {
    scenario: "A portfolio holds four assets: A (weight 0.2, return 9%), B (0.1, 12%), C (0.3, 15%) and D (0.4, 18%).",
    q: "What is the portfolio's expected return?",
    options: [
      "14.7%",
      "13.5%",
      "15.0%",
      "12.0%"
    ],
    correct: 0,
    explain: "Portfolio return = Σ(weight × return) = 0.2(9%) + 0.1(12%) + 0.3(15%) + 0.4(18%) = 1.8% + 1.2% + 4.5% + 7.2% = 14.7%."
  },
  {
    scenario: "Two securities A and B each have an expected return of 15% and a standard deviation of 5%. They are combined in equal weights (0.5 each), with a correlation coefficient of 0.5 between their returns.",
    q: "What is the portfolio's expected return, and how does its risk compare with 5%?",
    options: [
      "Expected return 15%; portfolio standard deviation ≈ 4.33%, i.e. below 5% (a diversification benefit)",
      "Expected return 15%; portfolio standard deviation exactly 5%",
      "Expected return 30%; risk 10%",
      "Expected return 7.5%; risk 2.5%"
    ],
    correct: 0,
    explain: "The expected return is the weighted average, 15%. Portfolio variance = 0.5²(0.05²) + 0.5²(0.05²) + 2(0.5)(0.5)(0.5)(0.05)(0.05) = 0.001875, so SD = √0.001875 ≈ 4.33% — below 5% because the correlation is under +1."
  },
  {
    scenario: "The same two securities (each E(R) 15%, SD 5%, equal weights) are now perfectly positively correlated (ρ = +1.0).",
    q: "What is the portfolio's standard deviation?",
    options: [
      "5% — no diversification benefit when ρ = +1",
      "0% — risk is eliminated",
      "4.33% — the same as with ρ = 0.5",
      "2.5% — half the individual risk"
    ],
    correct: 0,
    explain: "With ρ = +1.0, the portfolio SD equals the weighted average of the individual SDs = 0.5(5%) + 0.5(5%) = 5%. Perfectly correlated assets give no diversification benefit."
  },
  {
    scenario: "The same two securities (each SD 5%, equal weights) now have a correlation of ρ = −1.0.",
    q: "What happens to the portfolio's standard deviation?",
    options: [
      "It falls to 0% — with equal SDs, equal weights and ρ = −1, the risk is fully offset",
      "It rises to 10%",
      "It stays at 5%",
      "It becomes negative"
    ],
    correct: 0,
    explain: "With equal standard deviations, equal weights and ρ = −1.0, the covariance term exactly offsets the two variance terms: variance = 0.000625 + 0.000625 − 0.00125 = 0, so SD = 0%. Perfect negative correlation can eliminate risk here."
  },
  {
    scenario: "A highly risk-averse investor is evaluating a risky portfolio. She assigns it a certainty equivalent rate (CER) that is below the prevailing risk-free rate of return.",
    q: "What will she do?",
    options: [
      "Reject the risky portfolio and prefer the risk-free investment",
      "Accept the risky portfolio because CER is positive",
      "Be indifferent between the two",
      "Demand a lower risk premium"
    ],
    correct: 0,
    explain: "When a highly risk-averse investor's CER for a risky portfolio falls below the risk-free rate, the risk-free investment is more attractive, so she rejects the risky portfolio. A less risk-averse investor might assign a higher CER and accept it."
  },
  {
    scenario: "Two investors evaluate the same risky portfolio. Investor X ignores the risk entirely and looks only at the expected return; Investor Y makes an upward adjustment to utility for taking on risk and would even accept a fair game.",
    q: "How are X and Y best described?",
    options: [
      "X is risk-neutral; Y is risk-seeking",
      "X is risk-averse; Y is risk-neutral",
      "Both are risk-averse",
      "X is risk-seeking; Y is risk-neutral"
    ],
    correct: 0,
    explain: "A risk-neutral investor evaluates opportunities solely on expected return with no penalty for risk (Investor X). A risk-seeking investor engages in fair games and makes an upward adjustment to utility for risk (Investor Y)."
  },
  {
    scenario: "An adviser is running a portfolio optimizer. She feeds in the expected returns of the investment universe, the volatility and correlation estimates, the client's constraints and objectives.",
    q: "What two outputs should she expect from the optimization?",
    options: [
      "The efficient frontier and the client's optimal portfolio",
      "The risk-free rate and the inflation rate",
      "A single stock recommendation only",
      "The broker's commission and taxes"
    ],
    correct: 0,
    explain: "Portfolio optimization takes those inputs (expected returns, volatility & correlation estimates, constraints, objectives) and produces the efficient frontier and the optimal portfolio for the investor."
  },
  {
    scenario: "An analyst builds an 'optimal' portfolio using expected returns and correlations estimated purely from the last three years of data. The next year, several correlations shift sharply and returns disappoint.",
    q: "Which MPT limitation does this illustrate?",
    options: [
      "Estimation issues — inputs are only estimates, and historical data may not predict future returns, volatilities or correlations",
      "That variance cannot be computed",
      "That diversification is impossible",
      "That the efficient frontier does not exist"
    ],
    correct: 0,
    explain: "This is the classic estimation-issue caution: MPT's outputs are only as reliable as its estimated inputs, and historical estimates of returns, volatilities and correlations may not hold in the future."
  },
  {
    scenario: "A prospect offers an expected payoff exactly equal to its cost, with uncertainty around the outcome — i.e. a zero risk premium.",
    q: "This is a 'fair game'. Who would reject it, and who might engage in it?",
    options: [
      "A risk-averse investor rejects it; a risk-seeking investor engages in it",
      "A risk-averse investor engages in it; a risk-seeking investor rejects it",
      "Both reject it",
      "Both engage in it enthusiastically"
    ],
    correct: 0,
    explain: "A fair game has a zero risk premium. Risk-averse investors reject fair games (they need a positive premium), whereas risk-seeking investors will engage in a fair game, making an upward adjustment to utility for the risk."
  }
];
