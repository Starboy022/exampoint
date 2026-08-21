/* ==========================================================================
   NISM Series-X-A · Module 1 · Chapter 4
   Debt Management and Loans — end-of-chapter question bank.

   Two shapes (see quiz-engine.js):
     Standard:  { q, options, correct, explain }
     Scenario:  { scenario, q, options, correct, explain }  — renders a styled
                case-study panel above the question.
   Kept separate from index.html so the assessment can be maintained
   independently of the lesson markup.
   ========================================================================== */

window.NISM_CH04_QUESTIONS = [
  // ---------------- 4.1 Purpose of debt ----------------
  {
    q: "According to the workbook, debt is:",
    options: [
      "Always bad and should be avoided entirely",
      "Not inherently bad — it must be judged by what it funds and the ability to service it",
      "Only acceptable for buying a car",
      "A guaranteed way to increase wealth"
    ],
    correct: 1,
    explain: "Debt is not always bad; it must be seen in perspective — for an appreciating asset it can be beneficial, provided income can bear the interest and repayment."
  },
  {
    q: "Using borrowed funds instead of own funds, which can raise the return on an investment, is called:",
    options: ["Amortisation", "Leverage", "Hypothecation", "Moratorium"],
    correct: 1,
    explain: "Leverage is the use of debt over own funds; per the Modigliani–Miller idea it can increase the return on an investment."
  },
  {
    scenario: "A parent needs to fund a child's higher education. They can either take an education loan or withdraw from their retirement corpus, which is currently compounding at a healthy rate.",
    q: "Which does the workbook generally favour, and why?",
    options: [
      "Withdraw from retirement — avoid all interest cost",
      "Take the education loan — future income repays it while the corpus keeps compounding untouched",
      "Neither — the child should drop the course",
      "Always use a credit card for flexibility"
    ],
    correct: 1,
    explain: "An education loan can beat raiding retirement savings: future income repays the loan while existing investments keep compounding, preserving that benefit."
  },

  // ---------------- 4.2 DTI & cash flow ----------------
  {
    q: "The debt-to-income (DTI) ratio measures:",
    options: [
      "The total assets of a household",
      "The ability to meet debt obligations from available income",
      "The interest rate charged on a loan",
      "The credit score of the borrower"
    ],
    correct: 1,
    explain: "DTI gauges the share of income consumed by debt servicing — the ability to meet debt obligations from available income. Lower is better."
  },
  {
    scenario: "An employee earns ₹15,000 a month and pays ₹7,500 towards debt servicing.",
    q: "What is the DTI ratio, and how should it be read?",
    options: [
      "50% — too high; little is left for expenses, emergencies or investing",
      "50% — perfectly healthy",
      "25% — comfortable",
      "7.5% — excellent"
    ],
    correct: 0,
    explain: "DTI = 7,500 ÷ 15,000 = 50%, which is too high — half the income goes to debt, leaving little for other needs and no room to borrow in a crisis."
  },
  {
    q: "The workbook recommends changing the household mindset from 'Income − Expenses = Savings' to:",
    options: [
      "'Income − Savings = Expenses' — pay yourself first, then spend",
      "'Income + Debt = Expenses' — borrow to spend more",
      "'Expenses − Income = Savings'",
      "'Income = Savings' — never spend"
    ],
    correct: 0,
    explain: "Save first, spend the rest: Income − Savings = Expenses. An SIP auto-debited from salary enforces this."
  },
  {
    q: "Consumption expenditure differs from investment expenditure in that consumption expenditure:",
    options: [
      "Creates an income-generating asset",
      "Creates no income-generating asset once spent (e.g. a restaurant meal)",
      "Is always larger than investment expenditure",
      "Is tax-deductible"
    ],
    correct: 1,
    explain: "Consumption expenditure (eating out, clothes, salon) creates no asset; investment expenditure (a bond, a property) creates an asset that can generate future income."
  },
  {
    scenario: "A client receives an unexpectedly large annual bonus (a windfall). They are used to living without it.",
    q: "What is the recommended approach?",
    options: [
      "Immediately upgrade their lifestyle to match the new income",
      "Set a healthy portion aside for the future — often to pre-pay loans — and park the rest in liquid assets until a decision is reached",
      "Assume such windfalls will recur and plan spending around them",
      "Invest the entire amount in equities the same day"
    ],
    correct: 1,
    explain: "A healthy portion of a windfall should be set apart (often to pre-pay loans); it can wait in risk-free liquid assets until deployed, and should never be relied on to recur."
  },
  {
    q: "'Zero-base budgeting' applied to household finance means:",
    options: [
      "Spending down to a zero bank balance each month",
      "Building each month's budget from scratch, justifying every expense rather than copying last month's",
      "Having zero debt at all times",
      "Setting all discretionary expenses to zero"
    ],
    correct: 1,
    explain: "Zero-base budgeting builds the budget from scratch — each expense is thought through and not incurred merely because it was last time."
  },

  // ---------------- 4.3 Leverage & counselling ----------------
  {
    scenario: "A credit-card issuer charges 3% per month on revolving balances. A client assumes that's 'just 36% a year'.",
    q: "What is the true compounded annual cost, and what's the lesson?",
    options: [
      "Exactly 36% — simple multiplication is fine",
      "42.6% — because (1 + 3%)¹² − 1 compounds; revolving credit should be avoided",
      "3% — the monthly rate is the annual rate",
      "18% — banks cap it by law"
    ],
    correct: 1,
    explain: "(1.03)¹² − 1 = 42.6%. Monthly interest compounds, so the effective annual cost far exceeds 3%×12; revolving credit should be avoided."
  },
  {
    q: "Financing a risky, volatile investment (e.g. margin financing for stocks) with debt is dangerous because:",
    options: [
      "It is illegal in India",
      "A fall in the investment magnifies the loss, since the cost of debt must still be paid",
      "The interest is always 0%",
      "It improves the credit score"
    ],
    correct: 1,
    explain: "Debt-funded volatile bets magnify losses — a price fall still leaves the cost of debt to be serviced, risking the household's financial security."
  },
  {
    q: "Which debt-rescheduling step specifically HURTS the borrower's credit score?",
    options: [
      "Paying off the costliest debt first from savings",
      "Selling the funded asset to pre-pay",
      "Formally agreeing a revised loan schedule with the lender",
      "Refinancing via a cheaper balance transfer"
    ],
    correct: 2,
    explain: "Formal re-scheduling of a loan hurts the credit history/score, affecting future loan access and pricing — it's a last resort."
  },

  // ---------------- 4.4 Credit score ----------------
  {
    q: "Credit bureaus in India are licensed by the RBI and governed by:",
    options: [
      "The Companies Act, 2013",
      "The Credit Information Companies (Regulation) Act, 2005",
      "SEBI (Investment Advisers) Regulations, 2013",
      "The Banking Regulation Act, 1949"
    ],
    correct: 1,
    explain: "Credit information companies are RBI-licensed and governed by the Credit Information Companies (Regulation) Act, 2005."
  },
  {
    q: "The CIBIL TransUnion Score is a three-digit number ranging from:",
    options: ["0 to 100", "300 to 900", "1 to 10", "100 to 1000"],
    correct: 1,
    explain: "The CIBIL TransUnion Score ranges from 300 to 900 — a higher score improves loan eligibility and terms."
  },
  {
    q: "Under RBI norms on free credit reports, every individual is entitled to:",
    options: [
      "One free full credit report each year from each credit bureau",
      "A free report only after taking a loan",
      "Unlimited free reports every day",
      "No free reports at all"
    ],
    correct: 0,
    explain: "RBI entitles each individual to one free full credit report a year from each bureau (CIBIL, Experian, CRIF Highmark, Equifax), matching what lenders see, with the ability to rectify errors."
  },
  {
    scenario: "Two applicants apply for the same loan. Applicant A pays every EMI on time and keeps card utilisation low. Applicant B maxes out credit-card limits and carries several personal loans.",
    q: "How will their credit scores most likely compare?",
    options: [
      "B's score will be higher — more credit means more experience",
      "A's score will be higher — timely payments and low utilisation help; heavy unsecured debt and high utilisation hurt",
      "Both scores will be identical",
      "Neither will have a score until age 40"
    ],
    correct: 1,
    explain: "On-time payments, low utilisation and a healthy credit mix lift the score; high utilisation and too much unsecured debt drag it down."
  },

  // ---------------- 4.6 Secured vs unsecured ----------------
  {
    q: "Secured loans generally carry lower interest rates than unsecured loans because:",
    options: [
      "They are always smaller",
      "The lender holds an asset as security and can recover dues by selling it, lowering its risk",
      "The government fixes their rates",
      "They have no repayment schedule"
    ],
    correct: 1,
    explain: "Collateral reduces the lender's risk, so secured loans (home, vehicle, gold) cost less. Unsecured loans rest only on the borrower's guarantee, so they're costlier."
  },
  {
    q: "Which of the following is an UNSECURED loan?",
    options: ["Home loan", "Gold loan", "Credit-card dues", "Loan against securities"],
    correct: 2,
    explain: "Credit-card dues (and personal loans) are unsecured — no collateral — hence their steep interest rates. The others are secured."
  },

  // ---------------- 4.7 Loan terms ----------------
  {
    scenario: "Ravi takes a car loan. The car is registered in and stays with him, but the financier notes a charge on it and can repossess it if he defaults.",
    q: "This charge arrangement is called:",
    options: ["Pledge", "Hypothecation", "Mortgage", "Lease"],
    correct: 1,
    explain: "Hypothecation creates a charge while the (movable) asset stays with the borrower; on default the lender repossesses and sells it. A car loan is the classic example."
  },
  {
    q: "The key difference between a pledge and a mortgage is that in a pledge:",
    options: [
      "The asset is immovable and stays with the borrower",
      "A movable asset is held by the lender until repayment, whereas a mortgage is over immovable property",
      "There is no security at all",
      "The interest rate is always higher"
    ],
    correct: 1,
    explain: "In a pledge, a movable asset stays with the lender until the loan is repaid; a mortgage is a charge over immovable property (which stays with the borrower)."
  },
  {
    q: "How does hire purchase differ from a lease?",
    options: [
      "In hire purchase the user can become the owner after the final instalment; in a lease the lessor stays the owner",
      "A lease always transfers ownership; hire purchase never does",
      "They are identical",
      "Hire purchase has no instalments"
    ],
    correct: 0,
    explain: "Under hire purchase, ownership passes to the buyer on the final instalment. In a lease, the lessor remains the owner and the lessee never owns the asset."
  },
  {
    scenario: "During the Covid outbreak, a borrower was granted a 6-month moratorium on EMIs. He assumed those 6 months of EMIs were simply waived.",
    q: "What actually happens under a moratorium?",
    options: [
      "The EMIs are cancelled with no cost",
      "Repayments pause and no default is counted, but interest keeps accruing (with compounding) and the missed EMIs are pushed back",
      "The loan is closed early",
      "The interest rate drops to zero"
    ],
    correct: 1,
    explain: "A moratorium pauses repayment without a default or score hit, but the interest meter keeps running (compounding); missed EMIs are deferred and must be repaid with the added interest."
  },
  {
    q: "Pre-EMI interest refers to:",
    options: [
      "A penalty for early repayment",
      "Interest-only payments while a loan is not fully disbursed (e.g. an under-construction home)",
      "The processing fee on a loan",
      "The final EMI of a loan"
    ],
    correct: 1,
    explain: "Pre-EMI interest is the interest-only payment made until the full loan is disbursed (common for under-construction property); regular principal+interest EMIs start later."
  },
  {
    q: "RBI has mandated that there be NO pre-payment charges on:",
    options: [
      "Car loans",
      "Home loans taken from banks (floating rate)",
      "Credit-card dues",
      "Personal loans"
    ],
    correct: 1,
    explain: "RBI mandates no pre-payment charges on bank home loans; other loans (e.g. car loans) may restrict prepayment or levy charges."
  },

  // ---------------- 4.8 Types of borrowing ----------------
  {
    q: "An overdraft facility is best described as:",
    options: [
      "A 30-year loan for buying a house",
      "Permission to use more than the account balance up to a limit, with interest charged only for the period overdrawn — often used by businesses",
      "A loan that never charges interest",
      "A type of credit score"
    ],
    correct: 1,
    explain: "An overdraft lets the holder draw beyond the balance up to a sanctioned limit; interest applies only for the overdrawn period. It's a flexible short-term facility, typically used by businesses."
  },
  {
    q: "P2P (peer-to-peer) loans are characterised by:",
    options: [
      "Being fully secured with low interest rates",
      "Being unsecured, usually small and short-term, with high rates and no recourse to an asset on default",
      "Being issued only by the RBI",
      "Having no risk to the lender"
    ],
    correct: 1,
    explain: "P2P loans are direct person-to-person, unsecured, small and short-term; with no collateral the lender's risk is high, so rates are steep."
  },
  {
    q: "Which is described as the MOST expensive way to borrow (though the easiest)?",
    options: ["Home loan", "Loan against securities", "Credit-card debt", "Education loan"],
    correct: 2,
    explain: "Credit-card debt is the most expensive but easiest borrowing — one swipe — which is why control over spending matters so much."
  },

  // ---------------- 4.9 Loan calculations ----------------
  {
    scenario: "A ₹1,00,000 loan is taken at 12% per annum for 5 years, repaid monthly on a reducing-balance basis.",
    q: "The monthly EMI is approximately:",
    options: ["₹2,224", "₹1,667", "₹27,741", "₹1,955"],
    correct: 0,
    explain: "PMT(0.12/12, 60, −100000) ≈ ₹2,224.44 per month. (₹27,741 would be the yearly instalment; ₹1,955 is the 6-year EMI.)"
  },
  {
    scenario: "The same ₹1,00,000 / 12% loan is a borrower's only debt; they earn ₹10,000 a month. The EMI is ₹2,224.44. They then extend the tenor from 5 to 6 years, cutting the EMI to ₹1,955.02.",
    q: "What happens to the debt-servicing (DTI) ratio?",
    options: [
      "It rises from 22.24% to 29.55%",
      "It falls from 22.24% to 19.55%",
      "It stays at 22.24%",
      "It falls to 0%"
    ],
    correct: 1,
    explain: "DTI = EMI ÷ income. At ₹2,224.44 it's 22.24%; extending the tenor lowers the EMI to ₹1,955.02, so DTI falls to 19.55%."
  },
  {
    q: "An adviser insists a loan's interest be computed on a 'reducing-balance' basis rather than a flat basis because:",
    options: [
      "Flat-rate is illegal",
      "On reducing balance, each repayment lowers the principal on which future interest is charged, giving a genuinely lower effective cost",
      "Reducing balance has no interest",
      "It changes the credit score"
    ],
    correct: 1,
    explain: "Reducing-balance charges interest only on the outstanding principal, so repayments actually cut the interest base — a flat rate keeps charging on the original amount, costing more."
  },

  // ---------------- 4.10 Restructuring ----------------
  {
    scenario: "A borrower with a ₹3,00,000 loan at 7% over 3 years (EMI ₹9,263) is in stress. The lender extends the tenor to 5 years.",
    q: "The main effect of extending the tenor is:",
    options: [
      "The EMI falls (to about ₹5,940), easing monthly outgo, but total interest paid rises",
      "The EMI rises and total interest falls",
      "Nothing changes",
      "The loan is instantly closed"
    ],
    correct: 0,
    explain: "Extending 3→5 years drops the EMI from ₹9,263 to about ₹5,940 — lower monthly outgo, but interest accrues over more months, so total interest rises."
  },
  {
    scenario: "For the same ₹3,00,000 / 7% / 3-year loan (EMI ₹9,263), the lender instead takes a haircut, reducing the outstanding to ₹2,00,000 over the same 3 years.",
    q: "The new EMI is about ₹6,175. Why is this 'real relief' for the borrower?",
    options: [
      "Because the tenor was extended",
      "Because the present value of what they must repay is genuinely lower — a smaller principal over the same period",
      "Because the interest rate rose",
      "Because the credit score improves automatically"
    ],
    correct: 1,
    explain: "A haircut cuts the principal, so the PV of the future payments is genuinely lower (EMI falls to ~₹6,175 over the same 3 years) — real relief, not just re-timed pain."
  },
  {
    q: "Why must a borrower check the PRESENT VALUE of future payments when a loan is restructured?",
    options: [
      "Because the EMI stream's present value equals the loan — only the PV reveals whether a change is real relief or just re-timed cost",
      "Because PV changes the credit score",
      "Because lenders are legally required to reduce PV",
      "Present value is irrelevant to loans"
    ],
    correct: 0,
    explain: "The EMI cash-flow stream's PV equals the loan amount. Only by comparing PVs can the borrower tell genuine relief (e.g. a haircut) from a change that merely re-times the same burden."
  },

  // ---------------- 4.11 Amortisation ----------------
  {
    q: "In an amortising loan, the split of an EMI over the loan's life is such that:",
    options: [
      "Interest and principal are always equal",
      "Early EMIs are interest-heavy and later EMIs are principal-heavy",
      "Early EMIs are principal-heavy and later EMIs are interest-heavy",
      "Only principal is ever paid"
    ],
    correct: 1,
    explain: "Interest is charged on the outstanding, which is largest early on — so early EMIs are interest-heavy, shifting to principal-heavy as the balance falls."
  },
  {
    scenario: "On a ₹10,00,000 loan for 10 years, the first month's EMI is split into principal and interest. At 5% the interest component is ₹4,166; at 9% it is ₹7,500.",
    q: "What does this show about the effect of a higher interest rate on the early EMIs?",
    options: [
      "A higher rate sends more of each early EMI to principal",
      "A higher rate sends more of each early EMI to interest, so principal is repaid more slowly",
      "The rate has no effect on the split",
      "A higher rate removes the interest component"
    ],
    correct: 1,
    explain: "First-month interest = P × r/12: ₹4,166 at 5% vs ₹7,500 at 9%. The higher rate makes the interest slice larger, so less of the early EMI reduces principal."
  },
  {
    q: "Which Excel functions give the principal and interest components of a specific EMI, respectively?",
    options: [
      "PPMT and IPMT",
      "PV and FV",
      "RATE and NPER",
      "SUM and AVERAGE"
    ],
    correct: 0,
    explain: "PPMT returns the principal portion and IPMT the interest portion of a given period's payment; PMT gives the total EMI."
  },

  // ---------------- 4.12 / 4.13 Evaluate & EMI-vs-tenure ----------------
  {
    q: "When comparing loans, why does the workbook prefer external benchmarks (like the repo rate) over internal bank benchmarks?",
    options: [
      "External benchmarks are always lower",
      "They are transparent and transmit rate changes faster; internal benchmarks move slowly",
      "Internal benchmarks are illegal",
      "External benchmarks never change"
    ],
    correct: 1,
    explain: "Repo-linked (external) benchmarks are transparent and pass on rate changes quickly, whereas internal bank benchmarks transmit changes slowly."
  },
  {
    scenario: "A floating-rate home-loan borrower is told the benchmark rate has risen. The bank asks whether to raise the EMI or extend the tenure.",
    q: "What is the usual default preference, and why?",
    options: [
      "Raise the EMI — always cheaper overall",
      "Hold the EMI and extend the tenure — it keeps the monthly outgo (chosen to be affordable) steady and avoids sudden budget strain",
      "Close the loan immediately",
      "Switch to a credit card"
    ],
    correct: 1,
    explain: "The EMI was set to be affordable, so it's usually easier to hold it steady and flex the tenure — you track one fixed amount and a rate rise won't suddenly strain cash flow."
  },

  // ---------------- 4.14 Invest vs repay ----------------
  {
    scenario: "A client has a lump sum. She holds a personal loan at 18% and is considering instead investing the money in a debt fund expected to yield 7%.",
    q: "What is the sound recommendation?",
    options: [
      "Invest — 7% is a good return",
      "Repay the 18% loan first — no low-risk investment reliably beats an 18% guaranteed 'return' from clearing costly debt",
      "Split it 50:50 regardless",
      "Keep it in cash indefinitely"
    ],
    correct: 1,
    explain: "Clearing an 18% loan is a guaranteed 18% saving; a 7% investment can't reliably beat that, so repaying the high-cost debt wins."
  },
  {
    scenario: "Another client has a 7% home loan and can invest long-term in a diversified equity portfolio expected to compound at ~12%.",
    q: "What consideration makes investing potentially the better choice — and what caveat applies?",
    options: [
      "The 12% return exceeds the 7% loan cost, so investing can win over time — but equity carries extra risk that must be accepted",
      "There is no risk in equities",
      "The loan rate is irrelevant",
      "Investing is always wrong if any loan exists"
    ],
    correct: 0,
    explain: "When the expected return (12%) comfortably exceeds the loan rate (7%) and compounds, investing can win long-term — but the equity risk is real and must be acknowledged."
  },

  // ---------------- 4.15 Strategies ----------------
  {
    q: "The avalanche debt-payoff strategy pays off debts in order of:",
    options: [
      "Smallest balance first",
      "Highest interest rate first",
      "Oldest loan first",
      "Random order"
    ],
    correct: 1,
    explain: "Avalanche targets the highest-interest debt first to cut the interest burden fastest."
  },
  {
    scenario: "A household has: credit card ₹30,000 @ 42%, personal loan ₹1.2 lakh @ 21%, car loan ₹1 lakh @ 12%, and housing loan ₹15 lakh @ 8%.",
    q: "Under the SNOWBALL strategy, which debt is cleared FIRST?",
    options: [
      "Housing loan (largest balance)",
      "Credit card (smallest balance, ₹30,000)",
      "Personal loan (highest rate after the card)",
      "Car loan"
    ],
    correct: 1,
    explain: "Snowball ignores rates and starts with the smallest balance for a motivational quick win — here the ₹30,000 credit card."
  },
  {
    scenario: "Same four debts (credit card ₹30k @42%, personal ₹1.2L @21%, car ₹1L @12%, housing ₹15L @8%).",
    q: "The BLIZZARD strategy would clear them in which order?",
    options: [
      "Housing → car → personal → credit card",
      "Credit card (smallest, for momentum) → personal loan (highest remaining rate) → car loan → housing loan",
      "Car → housing → credit card → personal",
      "Strictly smallest to largest balance"
    ],
    correct: 1,
    explain: "Blizzard starts snowball (smallest balance = credit card) for motivation, then switches to avalanche (highest remaining rate first): personal loan → car loan → housing loan."
  },
  {
    q: "The main RISK of the pure avalanche strategy is that:",
    options: [
      "It always costs more in interest",
      "If the highest-rate loans are small in amount, paying them first may not relieve the overall interest pressure much",
      "It is illegal",
      "It ignores interest rates entirely"
    ],
    correct: 1,
    explain: "If the costliest loans are small, clearing them first won't cut the total interest outgo as much as hoped — that's avalanche's weakness."
  }
];
