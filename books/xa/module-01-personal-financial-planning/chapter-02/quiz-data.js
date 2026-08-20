/* ==========================================================================
   NISM Series-X-A · Module 1 · Chapter 2
   Time Value of Money — end-of-chapter question bank.

   Two question shapes are used (see quiz-engine.js):
     Standard:  { q, options, correct, explain }
     Scenario:  { scenario, q, options, correct, explain }  — the `scenario`
                field renders a styled case-study panel above the question.
   Kept separate from index.html so the assessment can be maintained
   independently of the lesson markup.
   ========================================================================== */

window.NISM_CH02_QUESTIONS = [
  // ---------------- 2.1 Concept ----------------
  {
    q: "The core principle behind the time value of money is that:",
    options: [
      "A rupee available today is worth more than the same rupee received in the future",
      "A rupee is worth exactly the same at every point in time",
      "Money loses value only because of inflation, nothing else",
      "A rupee in the future is worth more because it is safer"
    ],
    correct: 0,
    explain: "Money available now can be invested to earn a return, so it is worth more than the same amount received later. That is the essence of TVM."
  },
  {
    q: "Given no uncertainty, why does almost every investor prefer to receive ₹100 now rather than ₹100 a month later? (Choose the BEST combined reason.)",
    options: [
      "Only because of an instinctive preference for current consumption",
      "Only because of the ability to invest and earn a return",
      "Both an instinctive preference for current consumption AND the ability to invest the money to grow it",
      "Because ₹100 in a month is legally worth less"
    ],
    correct: 2,
    explain: "The workbook gives two reasons: an instinctive preference for current consumption, and the ability to invest today's money so it grows to more than ₹100."
  },
  {
    q: "Bringing a future cash flow back to its value today is called discounting. Growing a present amount to its value in the future is called:",
    options: ["Amortising", "Compounding", "Depreciating", "Annuitising"],
    correct: 1,
    explain: "Present inflows are grown to a future value using a compound interest rate — compounding. Discounting is the reverse."
  },
  {
    q: "As the discount rate rises, the present value of a fixed future cash flow:",
    options: ["Rises", "Falls", "Stays the same", "First rises, then falls"],
    correct: 1,
    explain: "PV moves inversely with the discount rate: a higher rate means you forego more return by waiting, so the present value is lower."
  },
  {
    q: "Which of the following is NOT one of the four parameters in a time-value-of-money problem?",
    options: ["Cash inflows or outflows", "Rate of interest", "The investor's credit score", "Time period and frequency of cash flows"],
    correct: 2,
    explain: "The four TVM parameters are the cash flows, the rate of interest, the time period, and the frequency of cash flows. Credit score is not one of them."
  },
  {
    scenario: "Meera is promised ₹1,000 that will be paid to her exactly 3 years from now. Her adviser values it two ways: once assuming a 5% discount rate, and once assuming an 8% discount rate.",
    q: "How will the two present values compare?",
    options: [
      "The 5% valuation (₹864) is higher than the 8% valuation (₹794)",
      "The 8% valuation is higher because 8% is a bigger number",
      "Both give exactly ₹1,000 because the amount is fixed",
      "Both give the same present value regardless of rate"
    ],
    correct: 0,
    explain: "A lower discount rate produces a higher present value. At 5% the ₹1,000 is worth ₹864 today; at 8% only ₹794."
  },
  {
    scenario: "An adviser must compare three offers for the SAME client: (A) ₹100 today, (B) ₹100 in one month, (C) ₹100 in one year. There is no uncertainty about any of them.",
    q: "Ranked from most to least valuable today, the correct order is:",
    options: [
      "A, then B, then C",
      "C, then B, then A",
      "B, then A, then C",
      "All three are equal because the amount is ₹100 each"
    ],
    correct: 0,
    explain: "The later a cash flow arrives, the lower its value today. So ₹100 now beats ₹100 in a month, which beats ₹100 in a year."
  },

  // ---------------- 2.2 Present Value ----------------
  {
    q: "The present value of a single future amount is calculated as:",
    options: [
      "PV = C × (1 + r)ⁿ",
      "PV = C / (1 + r)ⁿ",
      "PV = C × r × n",
      "PV = C / r"
    ],
    correct: 1,
    explain: "For a single future receipt, PV = C / (1 + r)ⁿ — the future amount divided by the compounding factor."
  },
  {
    q: "Present value is best described as:",
    options: [
      "The amount you would pay today for a cash flow that arrives in the future",
      "The total of all future cash flows added up without discounting",
      "The interest earned on an investment over its life",
      "The value of an asset after adding expected inflation"
    ],
    correct: 0,
    explain: "PV brings a future value down to today's price — it is what you would pay now for a future cash flow."
  },
  {
    scenario: "Shyam will receive ₹6,500 every year for the next 8 years. The relevant interest rate is 7% per annum. Someone offers to buy out this stream from him for a single lump sum today.",
    q: "Below what lump-sum offer should Shyam KEEP the annual stream rather than sell it?",
    options: [
      "Below ₹52,000 (8 × ₹6,500)",
      "Below ₹38,813 — the present value of the stream",
      "Below ₹6,500",
      "Below ₹45,500"
    ],
    correct: 1,
    explain: "The present value of ₹6,500 for 8 years at 7% is ₹38,813.44. Any lump sum above that is worth taking; below it, the stream is more valuable."
  },
  {
    scenario: "A retiree is choosing between ₹40,000 paid to him each year for 10 years, versus a lump sum today. His adviser discounts the stream at 7%.",
    q: "What does the present-value calculation of the annual stream let the adviser do?",
    options: [
      "Convert the future payments into a single comparable value today, so it can be judged against the lump sum",
      "Guarantee the retiree a 7% return",
      "Remove the effect of the interest rate entirely",
      "Prove the lump sum is always the better choice"
    ],
    correct: 0,
    explain: "Discounting the stream to a present value puts the future payments and the lump sum on the same footing — today's rupees — so they can be compared directly."
  },

  // ---------------- 2.3 Future Value & compounding ----------------
  {
    q: "The future value of an amount invested today is given by:",
    options: ["FV = PV / (1 + r)ⁿ", "FV = PV × (1 + r)ⁿ", "FV = PV × r × n", "FV = PV + r"],
    correct: 1,
    explain: "FV = PV × (1 + r)ⁿ compounds today's money forward to a future date."
  },
  {
    q: "An investment pays 8% p.a. compounded quarterly. The rate and number of periods to use in the formula are:",
    options: [
      "8% per period, 1 period a year",
      "2% per period (8%/4), 4 periods a year",
      "8% per period, 4 periods a year",
      "4% per period, 8 periods a year"
    ],
    correct: 1,
    explain: "Quarterly compounding means the per-period rate is 8%/4 = 2%, applied over 4 periods each year."
  },
  {
    q: "All else equal, increasing the frequency of compounding (say, from yearly to monthly):",
    options: [
      "Reduces the maturity value",
      "Increases the maturity value because interest earns interest more often",
      "Has no effect on the maturity value",
      "Only matters if the principal is above ₹1 lakh"
    ],
    correct: 1,
    explain: "The greater the frequency of compounding, the more often interest is paid on interest, and the greater the returns."
  },
  {
    scenario: "Krishna invests ₹5,00,000 in a 5-year deposit at 8%. In Scenario 1 he withdraws the interest each year and spends it (no compounding). In Scenario 2 he lets it compound yearly.",
    q: "How much MORE interest does compounding (Scenario 2) earn him over the 5 years than simple interest (Scenario 1)?",
    options: [
      "Nothing — both earn ₹2,00,000",
      "About ₹34,664 more (₹2,34,664 vs ₹2,00,000)",
      "About ₹1,00,000 more",
      "About ₹42,974 more"
    ],
    correct: 1,
    explain: "Simple interest = 5,00,000 × 8% × 5 = ₹2,00,000. Yearly compounding gives 5,00,000 × 1.08⁵ − 5,00,000 = ₹2,34,664 — about ₹34,664 more, the compounding benefit."
  },
  {
    scenario: "Same ₹5,00,000 at 8% for 5 years, but now compare Scenario 2 (compounded yearly → ₹2,34,664 interest) with Scenario 3 (compounded quarterly).",
    q: "What interest does the quarterly option earn, and why is it higher?",
    options: [
      "₹2,00,000 — quarterly compounding has no extra effect",
      "₹2,42,974 — interest is credited every quarter, so it starts earning interest sooner",
      "₹2,34,664 — it is identical to yearly compounding",
      "₹3,00,000 — the rate doubles when compounded quarterly"
    ],
    correct: 1,
    explain: "Quarterly: 5,00,000 × (1.02)²⁰ − 5,00,000 = ₹2,42,974. More frequent compounding pays interest sooner, so interest earns interest more often."
  },
  {
    scenario: "The Post Office Monthly Income Scheme pays interest every month; the Senior Citizens Scheme pays every quarter. A client asks which compounding pattern helps a cumulative investment grow fastest.",
    q: "The correct general principle to tell the client is:",
    options: [
      "The less frequently interest is paid, the more it compounds",
      "The greater the frequency of compounding, the more interest earns on interest — and the greater the return",
      "Frequency of compounding never affects returns",
      "Only annual compounding produces any growth"
    ],
    correct: 1,
    explain: "Greater compounding frequency means interest is credited and starts earning its own interest sooner, raising the effective return."
  },

  // ---------------- 2.4 CAGR ----------------
  {
    q: "The Compound Annual Growth Rate (CAGR) is computed as:",
    options: [
      "(FV / PV)^(1/n) − 1",
      "(FV − PV) / n",
      "(FV / PV) − 1",
      "(PV / FV)^n − 1"
    ],
    correct: 0,
    explain: "CAGR = (FV/PV)^(1/n) − 1 expresses total growth as a compounded annual rate."
  },
  {
    q: "CAGR is the accepted standard measure of return in financial markets EXCEPT when:",
    options: [
      "The investment is a mutual fund",
      "The holding period is less than one year",
      "The amount invested is small",
      "The return is positive"
    ],
    correct: 1,
    explain: "CAGR is standard except for returns over periods shorter than one year."
  },
  {
    scenario: "₹10.50 was invested in a mutual fund and redeemed for ₹12.25 at the end of exactly 3 years.",
    q: "The compounded rate of return (CAGR) is closest to:",
    options: ["5.27%", "16.67%", "9.54%", "18.07%"],
    correct: 0,
    explain: "CAGR = (12.25/10.50)^(1/3) − 1 = 5.27%. The 16.67% figure is the simple total gain, not the annualised rate."
  },
  {
    scenario: "An investor buys mutual-fund units at an NAV of ₹11 and redeems them at ₹13.50 after 450 days (a non-leap year).",
    q: "To find the CAGR for this fractional period, the exponent applied to (13.50/11) should be:",
    options: [
      "1/450",
      "365/450 (converting 450 days into years)",
      "450/365",
      "1/3, rounding to 3 years"
    ],
    correct: 1,
    explain: "Convert 450 days to years as 450/365, so the exponent is its reciprocal 365/450. CAGR = (13.5/11)^(365/450) − 1 = 18.07%."
  },
  {
    scenario: "₹100 grew to ₹120 over 2 years. An adviser wants the annualised return to compare it against a fixed deposit.",
    q: "Using CAGR = (FV/PV)^(1/n) − 1, the annualised return is approximately:",
    options: ["20.00%", "10.00%", "9.54%", "12.00%"],
    correct: 2,
    explain: "(120/100)^(1/2) − 1 = 1.0954 − 1 = 9.54%. Simply halving the 20% total gain (giving 10%) ignores compounding."
  },

  // ---------------- 2.5 EMI & NPER ----------------
  {
    q: "For a loan repaid through monthly EMIs, the PMT calculation requires you to:",
    options: [
      "Use the annual rate and the tenure in years directly",
      "Divide the annual rate by 12 and count the tenure in months",
      "Multiply the annual rate by 12 and use tenure in years",
      "Ignore the interest rate entirely"
    ],
    correct: 1,
    explain: "Because payments are monthly, the annual rate is divided by 12 and the tenure is expressed in months."
  },
  {
    scenario: "Satish takes a ₹30 lakh home loan for 20 years. At 6.5% p.a. his EMI is ₹22,367. The bank then revises the rate down to 6.25%.",
    q: "What happens to his EMI, approximately?",
    options: [
      "It rises to about ₹23,000",
      "It falls to about ₹21,928",
      "It stays at ₹22,367 — rate changes don't affect EMI",
      "It falls to about ₹15,000"
    ],
    correct: 1,
    explain: "A 0.25% rate cut lowers the EMI on the 20-year ₹30 lakh loan from ₹22,367 to about ₹21,928 — a saving of roughly ₹439 a month."
  },
  {
    q: "The Excel NPER function is used to find:",
    options: [
      "The monthly instalment on a loan",
      "The number of periods needed to repay a loan, given the amount, EMI and rate",
      "The present value of a perpetuity",
      "The compounded annual growth rate"
    ],
    correct: 1,
    explain: "NPER returns the number of periods (e.g. months) to repay a loan given its present value, the fixed payment and the rate."
  },
  {
    scenario: "A client owes ₹5,00,000 at 8% p.a. and can pay a fixed EMI of ₹12,000 a month. NPER(0.08/12, −12000, 500000) returns 48.97.",
    q: "How should the adviser interpret 48.97?",
    options: [
      "The loan needs about 48.97 months (roughly 4 years 1 month) to clear",
      "The interest rate is 48.97%",
      "The EMI should be ₹48,970",
      "The loan is worth ₹48.97 lakh"
    ],
    correct: 0,
    explain: "NPER is in periods — here months. 48.97 months ≈ 4 years and 1 month to fully repay the loan at that EMI."
  },
  {
    scenario: "For the same ₹5,00,000 loan at 8%, the client asks the adviser: 'If I raise my EMI above ₹12,000, what happens to the repayment period?'",
    q: "The adviser's correct answer is:",
    options: [
      "The number of months rises",
      "The number of months falls — a larger EMI clears the loan faster",
      "It stays exactly 48.97 months",
      "The loan can never be repaid"
    ],
    correct: 1,
    explain: "A higher fixed payment repays principal faster, so the NPER (months to repay) falls."
  },

  // ---------------- 2.6 Annuity ----------------
  {
    q: "An annuity is:",
    options: [
      "A one-time lump-sum payment",
      "A sum of money paid at regular periods, such as monthly, quarterly or annually",
      "A loan taken to buy a depreciating asset",
      "Interest that is never reinvested"
    ],
    correct: 1,
    explain: "An annuity is a regular, periodic payment — a pension is the classic example."
  },
  {
    q: "The key difference between an ordinary annuity and an annuity due is:",
    options: [
      "The interest rate used",
      "Whether the payment is made at the end (ordinary) or the start (due) of each period",
      "Whether the annuity is fixed or floating",
      "The number of years the annuity runs"
    ],
    correct: 1,
    explain: "Ordinary annuity pays at period-end; annuity due pays at period-start. In Excel this is the 'type' argument (0 vs 1)."
  },
  {
    q: "A fixed annuity differs from a floating annuity in that a floating annuity's payout:",
    options: [
      "Is always higher than a fixed annuity's",
      "Is benchmarked to inflation, an index or another agreed reference, so it changes",
      "Never changes once set",
      "Is paid only at retirement"
    ],
    correct: 1,
    explain: "Floating annuities are benchmarked (to inflation, an index, etc.), so the amount paid varies; a fixed annuity pays a predetermined amount."
  },
  {
    scenario: "An annuity pays ₹5,000 a year for 4 years at 10%. Valued as an ordinary annuity it is worth ₹15,849.33; valued as an annuity due it is worth ₹17,434.26.",
    q: "Why is the annuity due worth more?",
    options: [
      "Because a higher interest rate is applied to it",
      "Because each payment is received at the start of the period and can be invested a full period earlier",
      "Because it lasts one extra year",
      "Because the payments are larger under an annuity due"
    ],
    correct: 1,
    explain: "The payments and rate are identical; the annuity due simply pays each amount one period sooner (PV = ordinary × (1+r)), so it is worth more."
  },
  {
    scenario: "A client must PAY an annuity — say, a lease or a subscription — either at the start of each period (annuity due) or the end (ordinary annuity), at the same rate.",
    q: "From the PAYER's point of view, paying as an annuity due is:",
    options: [
      "Cheaper, because paying earlier saves money",
      "More costly, because paying earlier means losing the chance to earn a return on that money for the period",
      "Exactly the same cost either way",
      "Only relevant for pensions, not leases"
    ],
    correct: 1,
    explain: "Paying at the start of the period is more costly to the payer — the money leaves earlier, foregoing the return it could have earned during that period."
  },
  {
    scenario: "An adviser values ₹12,000 a year for 10 years at 5% using an annuity table, where the annuity factor is 7.7217.",
    q: "The present value of the annuity is:",
    options: ["₹92,660", "₹1,20,000", "₹77,217", "₹60,000"],
    correct: 0,
    explain: "PV = 12,000 × 7.7217 = ₹92,660 — the same result as PV(0.05, 10, −12000)."
  },

  // ---------------- 2.7 Perpetuity ----------------
  {
    q: "A perpetuity is:",
    options: [
      "A cash flow that continues for a fixed 30-year term",
      "A stream of equal cash flows that continues forever, with no finite end",
      "A single payment made at retirement",
      "A loan that must be repaid within one year"
    ],
    correct: 1,
    explain: "A perpetuity provides a constant cash flow for an unlimited period — perpetual bonds are the classic example."
  },
  {
    q: "The present value of a perpetuity paying a constant cash flow C at discount rate r is:",
    options: ["PV = C × r", "PV = C / r", "PV = C × (1 + r)", "PV = C / (1 + r)ⁿ"],
    correct: 1,
    explain: "The infinite discounted series collapses to PV = C / r."
  },
  {
    scenario: "A perpetual bond pays ₹10,000 in interest every year, forever. The prevailing discount rate is 8%.",
    q: "The value of this perpetuity today is:",
    options: ["₹1,25,000", "₹80,000", "₹10,800", "₹12,500"],
    correct: 0,
    explain: "PV = C / r = 10,000 / 0.08 = ₹1,25,000."
  },
  {
    scenario: "Two perpetual bonds each pay ₹9,000 a year. Bond X is valued at a 6% discount rate; Bond Y at a 9% discount rate.",
    q: "Which bond has the higher present value?",
    options: [
      "Bond X — a lower discount rate gives a higher value (₹1,50,000 vs ₹1,00,000)",
      "Bond Y — a higher rate always means a higher value",
      "Both are equal because the cash flow is the same",
      "Neither — perpetuities have no present value"
    ],
    correct: 0,
    explain: "PV = C/r. Bond X: 9,000/0.06 = ₹1,50,000. Bond Y: 9,000/0.09 = ₹1,00,000. A lower discount rate makes the endless stream more valuable."
  }
];
