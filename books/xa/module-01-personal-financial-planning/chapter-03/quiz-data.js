/* ==========================================================================
   NISM Series-X-A · Module 1 · Chapter 3
   Evaluating the Financial Position of Clients — end-of-chapter question bank.

   Two question shapes are used (see quiz-engine.js):
     Standard:  { q, options, correct, explain }
     Scenario:  { scenario, q, options, correct, explain }  — the `scenario`
                field renders a styled case-study panel above the question.
   Kept separate from index.html so the assessment can be maintained
   independently of the lesson markup.
   ========================================================================== */

window.NISM_CH03_QUESTIONS = [
  // ---------------- 3.1 Cash flow management ----------------
  {
    q: "The starting point of the entire personal finance management process is:",
    options: ["Tax planning", "Cash flow", "Retirement planning", "Estate planning"],
    correct: 1,
    explain: "Cash flow — the time and amount of income against the time and amount of expense — is the starting point of the whole personal finance process."
  },
  {
    q: "A mismatch between the timing of cash inflows and outflows most directly forces a household to:",
    options: [
      "Take on debt to bridge the gap, which adds an interest cost",
      "Automatically increase its income",
      "Reduce its tax liability",
      "Convert all assets to gold"
    ],
    correct: 0,
    explain: "Even a slight timing mismatch between income and expense has to be bridged through debt, which comes at the extra cost of interest — reducing savings further."
  },
  {
    scenario: "Vikram's household looks fine on paper: budgeted income covers budgeted expenses with a surplus every month. Yet by the third week of most months, he finds the bank balance too low to cover routine bills.",
    q: "What does this most likely indicate?",
    options: [
      "His budget figures are irrelevant and should be discarded",
      "The paper income/expense figures are not being backed by matching actual cash flow, and cash management needs attention",
      "He should stop tracking his budget altogether",
      "His savings ratio must be negative"
    ],
    correct: 1,
    explain: "A budget can show a surplus on paper while actual cash management is poor — income and expense figures must be backed by real cash arriving and leaving at the right times."
  },

  // ---------------- 3.2 Preparing a household budget ----------------
  {
    q: "Which of the following is an example of a discretionary expense?",
    options: ["Loan EMI", "Income tax payment", "Entertainment and lifestyle spending", "PF contribution"],
    correct: 2,
    explain: "Discretionary expenses are non-essential and the first area to cut back — entertainment and lifestyle spending are the classic examples."
  },
  {
    q: "The 'monthly surplus in hand' differs from 'savings' in a household budget because:",
    options: [
      "Savings excludes PF/NPS contributions entirely",
      "Monthly surplus in hand is calculated after mandatory deductions like PF/NPS, which are then added back to arrive at savings",
      "They are always exactly the same figure",
      "Savings is calculated before any expenses are deducted"
    ],
    correct: 1,
    explain: "Monthly surplus in hand is net of mandatory PF/NPS deductions. Because that money still belongs to the individual, it is added back to compute total savings."
  },
  {
    scenario: "The ABC family's monthly budget: Mr. A earns ₹65,000 total income, Ms. B earns ₹72,000 — combined ₹1,37,000. Mandatory expenses (PF + tax + loan repayment) total ₹33,000, essential living expenses ₹64,000, and discretionary expenses ₹15,000. ₹18,000 is invested each month.",
    q: "What is the ABC family's total monthly expenses (mandatory + essential + discretionary)?",
    options: ["₹1,00,000", "₹1,12,000", "₹1,30,000", "₹1,37,000"],
    correct: 1,
    explain: "Total expenses = ₹33,000 (mandatory) + ₹64,000 (essential) + ₹15,000 (discretionary) = ₹1,12,000."
  },
  {
    scenario: "Continuing the ABC family's budget: total income ₹1,37,000; total expenses ₹1,12,000; investments ₹18,000; PF contribution (part of mandatory expenses) ₹9,000.",
    q: "What is the family's savings ratio?",
    options: ["18.0%", "24.8%", "34.0%", "12.4%"],
    correct: 1,
    explain: "Monthly surplus in hand = 1,37,000 − (1,12,000 + 18,000) = ₹7,000. Savings = PF (9,000) + Investments (18,000) + Surplus (7,000) = ₹34,000. Savings ratio = 34,000 ÷ 1,37,000 = 24.8%."
  },
  {
    q: "When preparing a household budget, the correct starting point is to:",
    options: [
      "List and total every source of income first",
      "List discretionary expenses first",
      "Calculate the savings ratio first",
      "Estimate net worth first"
    ],
    correct: 0,
    explain: "Preparing a household budget starts with listing out all the heads of income from various sources before considering any expense category."
  },

  // ---------------- 3.3 Cash inflows and outflows ----------------
  {
    q: "Cash management, as distinct from budgeting, is primarily concerned with:",
    options: [
      "Ensuring the actual cash available matches the timing and amount of needs, not just the figures on paper",
      "Filing income tax returns on time",
      "Choosing between mutual fund schemes",
      "Calculating the leverage ratio"
    ],
    correct: 0,
    explain: "Cash management ensures there is a proper balance between the need for and availability of actual cash — distinct from the budget figures, which may not always be backed by cash in hand."
  },
  {
    scenario: "Sunita earns ₹50,000 a month, of which ₹15,000 consists of reimbursements she must claim separately from her employer. In a particular month she forgets to file the reimbursement claim.",
    q: "What is Sunita's actual cash inflow for that month, and what is the risk this illustrates?",
    options: [
      "₹50,000 — there is no risk since her salary is fixed",
      "₹35,000 — a mismatch between the budgeted income figure and actual cash received, which can cause a cash crunch",
      "₹65,000 — reimbursements add to, not subtract from, her income",
      "₹15,000 — only the reimbursement counts as cash inflow"
    ],
    correct: 1,
    explain: "Only ₹35,000 (₹50,000 − ₹15,000 unclaimed reimbursement) is actually received. This shows how the full income figure used in a budget may not translate into actual cash in a given month."
  },
  {
    q: "An income and expenditure statement differs from a pure cash statement because:",
    options: [
      "It ignores expenses made on credit entirely",
      "It records income and expenses in the period they pertain to, even if the cash moves in a different period",
      "It only records inflows, never outflows",
      "It is prepared only once in a lifetime"
    ],
    correct: 1,
    explain: "The income and expenditure statement books an item in the period it relates to — e.g., salary earned in one month but received the next is still booked to the earlier month."
  },
  {
    scenario: "Rohan buys a laptop on his credit card in March. The credit card bill, including this purchase, is generated and paid in April.",
    q: "In the income and expenditure statement, which month should this expense be recorded in?",
    options: ["March, the month the expense was actually incurred", "April, the month the bill was paid", "Split equally between March and April", "Neither — credit card purchases are excluded from the statement"],
    correct: 0,
    explain: "Even though the payment is made in April when the bill is generated, the expense is recorded in March — the period in which it was actually incurred."
  },

  // ---------------- 3.4 Budgeting and forecasting ----------------
  {
    q: "In the recommended sequence for making a budget, which step comes immediately after listing and totalling regular income?",
    options: [
      "Deducting mandatory expenses to arrive at disposable income",
      "Deducting discretionary expenses to arrive at savings",
      "Calculating the leverage ratio",
      "Preparing the personal balance sheet"
    ],
    correct: 0,
    explain: "The sequence is: (1) total the regular income, (2) deduct mandatory expenses to get disposable income, (3) deduct essential living expenses, (4) deduct discretionary expenses to arrive at savings."
  },
  {
    q: "Which of the following is NOT one of the conditions/characteristics of forecasting described in the workbook?",
    options: [
      "It requires predicting how future events will play out",
      "It should be done on a specific, non-random basis",
      "It never changes once the initial assumptions are set",
      "It benefits from expert opinion and improves with experience"
    ],
    correct: 2,
    explain: "Forecasting assumptions CAN and do change along with evolving conditions — the workbook explicitly notes forecasting is a dynamic exercise, not a fixed, one-time prediction."
  },
  {
    scenario: "A household's savings consistently fall short of its goals. On review, the adviser finds mandatory expenses are unusually high because of heavy loan-repayment commitments, while income is already near its practical ceiling.",
    q: "What should the adviser focus on first?",
    options: [
      "Ignoring the shortfall since income cannot be raised further",
      "A debt-rationalisation exercise to ease the loan-repayment burden, and reviewing discretionary/living expenses for cuts",
      "Eliminating the PF contribution to boost take-home pay",
      "Suggesting the client stop budgeting altogether"
    ],
    correct: 1,
    explain: "Since income cannot easily be expanded, the workbook points to managing expenses — starting with a debt-rationalisation exercise if loan repayments are driving up mandatory expenses, and trimming discretionary/living expenses where possible."
  },
  {
    q: "Forecasting is best described as:",
    options: [
      "A one-time random guess about the future",
      "Looking ahead and, based on data, conditions and expected changes, arriving at an estimate on a defined basis",
      "A legal requirement for every investment adviser",
      "A synonym for budgeting with no distinct meaning"
    ],
    correct: 1,
    explain: "Forecasting is the ability to look ahead and plan for the future — an estimate arrived at on a specific basis, using available data and expected changes, and refined with experience."
  },

  // ---------------- 3.5 Monitoring budgets ----------------
  {
    q: "The primary purpose of monitoring a budget is to:",
    options: [
      "Replace the need for a personal balance sheet",
      "Record actual income and expenses, compare them to the plan, and take corrective action where there is a persistent variance",
      "Eliminate the need for an emergency fund",
      "Calculate the client's tax liability"
    ],
    correct: 1,
    explain: "Monitoring means recording what actually happened and comparing it to the budget — the resulting variance guides what corrective action is needed."
  },
  {
    scenario: "A household budgets ₹4,000 a month for conveyance. Over several consecutive months, the actual average spend comes to ₹6,000.",
    q: "What is the appropriate corrective action?",
    options: [
      "Ignore it — small month-to-month variances never matter",
      "Either raise the budgeted conveyance figure, or change the mode of conveyance to bring actual cost back down",
      "Stop monitoring the budget since it has clearly failed",
      "Reduce the household's essential living expense allocation instead"
    ],
    correct: 1,
    explain: "A consistent overshoot signals the budget is off track — the fix is either to raise the budget figure to reflect reality, or change behaviour (e.g., mode of conveyance) to bring the actual spend down."
  },
  {
    q: "Which of the following is NOT one of the steps suggested to raise a household's savings rate when there is a large gap between actual and desired savings?",
    options: [
      "Set an achievable target increase (e.g., 10%), then raise the target again once achieved",
      "Divert lump-sum or windfall receipts directly into savings",
      "Commit any rise in income to new discretionary spending",
      "Eliminate wasteful expenditure and cut discretionary expenses"
    ],
    correct: 2,
    explain: "The workbook explicitly says higher income should NOT be committed to additional expense — it should be left free to contribute to the savings rate."
  },

  // ---------------- 3.6 Personal balance sheet & net worth ----------------
  {
    q: "Net worth is calculated as:",
    options: ["Total Assets + Total Liabilities", "Total Assets − Total Liabilities", "Total Income − Total Expenses", "Total Liabilities ÷ Total Assets"],
    correct: 1,
    explain: "Net worth = Total Assets − Total Liabilities — the single most relevant measure of a household's financial strength."
  },
  {
    q: "Compared to financial assets, physical assets such as real estate and gold are generally characterised by:",
    options: [
      "Greater liquidity and heavier regulation",
      "Illiquidity, lighter or no regulation, and the need for specific skills to buy, manage and sell them",
      "Being available only in very small, standardized units",
      "Guaranteed appreciation with no valuation risk"
    ],
    correct: 1,
    explain: "Physical assets act as a natural inflation hedge but are illiquid, lightly regulated, and require specific skills and effort to transact — unlike standardised, more liquid financial assets."
  },
  {
    scenario: "Lakshmi owns a house (₹18,12,000), a car (₹3,25,000), mutual funds (₹8,40,000), PPF (₹3,20,000), shares (₹2,80,000) and cash & bank (₹45,000). Her liabilities are a housing loan of ₹12,02,000 and credit card dues of ₹5,000.",
    q: "What is Lakshmi's net worth?",
    options: ["₹36,22,000", "₹12,07,000", "₹24,15,000", "₹18,12,000"],
    correct: 2,
    explain: "Total assets = ₹36,22,000. Total liabilities = ₹12,02,000 + ₹5,000 = ₹12,07,000. Net worth = 36,22,000 − 12,07,000 = ₹24,15,000."
  },
  {
    scenario: "Continuing Lakshmi's balance sheet: total assets ₹36,22,000, of which the house alone accounts for ₹18,12,000 and the remaining investments (MF, PPF, shares, cash) for a comparatively smaller share.",
    q: "What does this asset mix suggest about Lakshmi's financial position, per the workbook's analysis?",
    options: [
      "Her portfolio is overly concentrated in growth-oriented equity assets",
      "Her investment figure is still relatively small compared to the value of the house, and she isn't heavily invested in growth assets like equity or equity mutual funds",
      "She has no liabilities and is fully debt-free",
      "Her net worth exceeds her total assets"
    ],
    correct: 1,
    explain: "The workbook's own analysis of this example notes that, relative to the house's value, the investment figure is still a bit less, and she isn't heavily into growth assets such as equity or equity-oriented mutual funds."
  },
  {
    q: "Why does the workbook describe leveraging (using loans to buy financial assets) as risky?",
    options: [
      "Financial assets never generate any return",
      "Because of the relatively higher volatility in the price of financial assets compared to the certainty of the loan repayment obligation",
      "Loans for financial assets are illegal in India",
      "Financial assets cannot be sold once purchased"
    ],
    correct: 1,
    explain: "Loans taken to buy financial assets are called leveraging and are considered risky because such assets tend to have higher price volatility, while the loan repayment obligation stays fixed."
  },

  // ---------------- 3.7 Creating a budget and savings plan ----------------
  {
    q: "Why does the workbook recommend building a contingency figure into a budget?",
    options: [
      "To inflate the reported savings ratio",
      "Because sudden, unexpected changes can disrupt the plan, and a contingency allocation keeps the budget robust",
      "It is a mandatory SEBI regulatory requirement",
      "To avoid paying taxes on savings"
    ],
    correct: 1,
    explain: "A contingency figure in the budget ensures the plan remains robust even when a sudden, unplanned change disrupts the household's finances."
  },
  {
    q: "According to the workbook, budget figures should ideally be based on:",
    options: [
      "Pure guesswork with no reference to history",
      "Actual past expenses, or the likely expense if circumstances have genuinely changed",
      "The lowest possible number to make the budget look favourable",
      "A fixed industry-wide average that never varies by household"
    ],
    correct: 1,
    explain: "Budget figures should be based on either actual historical expenses or a realistic estimate of likely expense where circumstances have changed — a record of past expenses helps arrive at the correct estimate."
  },
  {
    scenario: "An adviser sets up a client's monthly plan so that as soon as income is received, a fixed amount is automatically transferred into investment accounts, before any other spending happens.",
    q: "What principle from the budget-and-savings-plan process does this reflect?",
    options: [
      "Savings should be whatever is left over after discretionary spending",
      "The savings amount should be allocated and transferred automatically before it can be spent elsewhere, making it a fixed part of the budget",
      "Discretionary expenses should always be paid before mandatory expenses",
      "Automatic transfers are unnecessary if the client is disciplined"
    ],
    correct: 1,
    explain: "The workbook recommends allocating the savings amount before it is spent elsewhere, ideally via a direct automatic transfer, making the savings plan a fixed figure in the budget rather than a residual."
  },

  // ---------------- 3.8 Contingency planning ----------------
  {
    q: "The emergency fund should typically be sized to cover:",
    options: ["1 month of expenses", "3 months of expenses only, with no exceptions", "About 6 months of expenses", "2 years of expenses"],
    correct: 2,
    explain: "The emergency fund should be adequate to meet roughly six months of expenses, held in liquid assets, in case regular income becomes unavailable."
  },
  {
    scenario: "Rahul has high income security (a tenured government role) and wants to structure his ₹5,46,000 emergency-fund target (6 months × ₹91,000 monthly expenses) using the laddered approach.",
    q: "How should Rahul split the fund under laddering?",
    options: [
      "Keep the entire ₹5,46,000 in a single 5-year fixed deposit",
      "Keep roughly 3 months' worth (~₹2,73,000) in fully liquid assets, and the remaining ~₹2,73,000 in less-liquid assets that offer a better return",
      "Keep nothing liquid since his income is secure",
      "Split it evenly between gold and real estate"
    ],
    correct: 1,
    explain: "Laddering, suited to high income security, holds about 3 months' expenses in fully liquid assets and the rest of the 6-month target in less-liquid assets with better returns."
  },
  {
    q: "Regarding pre-nuptial agreements, the workbook notes that:",
    options: [
      "They are compulsory for all married couples in India",
      "Their legality in India has not been established, even though they are common among the wealthy in developed countries",
      "They are only relevant to business partnerships, not marriages",
      "SEBI regulates all pre-nuptial agreements"
    ],
    correct: 1,
    explain: "Pre-nuptial agreements — common among the wealthy in developed countries as protection against separation risk — have a legal status in India that has not been established."
  },
  {
    q: "Which contingency does life insurance most directly address, per the workbook's contingency-planning discussion?",
    options: [
      "The risk of a decline in equity markets",
      "The risk to a family that depends on the income of both earning members, if either were to pass away",
      "The risk of GST rate changes",
      "The risk of a bank changing its interest rate on deposits"
    ],
    correct: 1,
    explain: "A family dependent on both earning members' incomes needs protection if anything happens to either — life insurance mitigates exactly this risk."
  },
  {
    q: "One recommended way to keep investment flows and household-expense flows separate for better tracking is to:",
    options: [
      "Use a single shared account for everything, including all investments and expenses",
      "Keep each partner's salary account distinct (with the other as joint holder), used only for investing or transferring to a shared expense account",
      "Avoid opening any joint accounts under any circumstances",
      "Route all investments through a single partner's account only"
    ],
    correct: 1,
    explain: "The workbook suggests keeping each partner's salary account distinct — used only for investments, or to transfer to a shared account for household expenses — which aids expense monitoring, investment record-keeping and tax record-keeping."
  },

  // ---------------- 3.9 Personal finance ratios ----------------
  {
    q: "The Savings Ratio is calculated as:",
    options: ["Total Assets ÷ Total Liabilities", "Savings per year ÷ Annual Income", "Monthly Expenses ÷ Liquid Assets", "Net Worth ÷ Total Assets"],
    correct: 1,
    explain: "Savings Ratio = Savings per year ÷ Annual Income — the percentage of annual income a person is able to save."
  },
  {
    scenario: "XYZ's gross salary is ₹10,000 (including the employer's ₹500 PF contribution). Net take-home pay is ₹9,000 after the employee's own ₹500 PF deduction. XYZ also earns ₹200 in savings-account interest, and monthly expenses are ₹7,000.",
    q: "What is XYZ's savings ratio for the month?",
    options: ["10%", "18.6%", "31.4%", "45.0%"],
    correct: 2,
    explain: "Total income = 10,000 + 200 = ₹10,200. Savings = (9,000 net salary + 200 interest + 500 employer PF + 500 employee PF) − 7,000 expenses = ₹3,200. Savings ratio = 3,200 ÷ 10,200 = 31.4%."
  },
  {
    q: "Why is XYZ's employer's PF contribution included in the savings calculation even though it was never received directly in hand?",
    options: [
      "It is a workbook error and should be excluded",
      "Because it still belongs to the individual and accumulates in the PF account, so it counts as savings for the year",
      "Because employer contributions are taxable income",
      "Because PF contributions are refunded in cash every month"
    ],
    correct: 1,
    explain: "Savings is not limited to money received directly — amounts that accrue to the individual, such as an employer's PF or superannuation contribution, still count as part of that year's savings."
  },
  {
    scenario: "GGN has an annual salary of ₹12,00,000 and accumulated investments (PF balance, bank deposits, mutual fund units, PPF, NSC) of ₹15,00,000.",
    q: "What is GGN's accumulated Savings-to-Income ratio, and how does it compare to a suitable benchmark for someone in their early 40s?",
    options: [
      "0.8×, well below the suggested benchmark of at least 3×",
      "1.25×, below the suggested benchmark of at least 3× for the early 40s",
      "1.25×, already well above the suggested benchmark",
      "12.5×, far above any reasonable benchmark"
    ],
    correct: 1,
    explain: "Savings-to-Income ratio = 15,00,000 ÷ 12,00,000 = 1.25×. The workbook suggests at least 3× annual income is a suitable ratio by the early 40s, so GGN's 1.25× is still below that benchmark."
  },
  {
    q: "The Expense Ratio is best described as:",
    options: [
      "Annual Recurring Expenses ÷ Annual Income, equal to 1 − Savings Ratio",
      "Total Liabilities ÷ Total Assets",
      "Monthly Debt Servicing ÷ Monthly Income",
      "A ratio that always equals the Savings Ratio"
    ],
    correct: 0,
    explain: "Expense Ratio = Annual Recurring Expenses ÷ Annual Income. Since expenses plus savings equal income, Expense Ratio = 1 − Savings Ratio, and vice versa."
  },
  {
    scenario: "An investor holds real estate worth ₹50 lakh, investments and bank balances of ₹10 lakh, and a PF balance of ₹5 lakh — total assets ₹65 lakh. Against this, ₹10 lakh of the real estate loan is outstanding, credit card dues are ₹2 lakh, and a friend's loan of ₹1 lakh is owed — total liabilities ₹13 lakh.",
    q: "What is this investor's leverage ratio?",
    options: ["13%", "20%", "65%", "80%"],
    correct: 1,
    explain: "Leverage Ratio = Total Liabilities ÷ Total Assets = 13 ÷ 65 = 20%."
  },
  {
    scenario: "Using the same investor's figures — total assets ₹65 lakh, total liabilities ₹13 lakh.",
    q: "What is the investor's net worth and solvency ratio?",
    options: [
      "Net worth ₹52 lakh; solvency ratio 20%",
      "Net worth ₹78 lakh; solvency ratio 120%",
      "Net worth ₹52 lakh; solvency ratio 80%",
      "Net worth ₹13 lakh; solvency ratio 80%"
    ],
    correct: 2,
    explain: "Net worth = 65 − 13 = ₹52 lakh. Solvency Ratio = Net Worth ÷ Total Assets = 52 ÷ 65 = 80% (equivalently, 1 − 20% leverage)."
  },
  {
    q: "A leverage ratio greater than 1 (100%) for a client indicates that:",
    options: [
      "The client has no liabilities at all",
      "The client's assets are inadequate to cover their liabilities — a technically insolvent position",
      "The client is extremely wealthy",
      "The client's solvency ratio must also exceed 100%"
    ],
    correct: 1,
    explain: "A leverage ratio above 1 means total liabilities exceed total assets — the assets on hand cannot fully cover what is owed, a red flag for financial distress."
  },
  {
    q: "Which of the following would generally NOT be counted as a liquid asset for the purpose of the Liquidity Ratio?",
    options: [
      "A savings bank account balance",
      "A fixed deposit maturing within 6 months",
      "An open-end equity mutual fund, despite being redeemable within a day or two",
      "Units of a liquid mutual fund scheme"
    ],
    correct: 2,
    explain: "Even though open-end equity schemes can be redeemed quickly, their value fluctuates significantly in the short term, making them unsuitable to be classed as liquid assets for this ratio."
  },
  {
    scenario: "NFG's monthly expenses (including loan repayments) are ₹1.5 lakh. Holdings: equity shares ₹3L, savings bank ₹7L, short-term FD ₹2L, long-term FD ₹6L, liquid mutual fund ₹4L, other open-end mutual fund ₹5L, closed-end mutual fund ₹12L.",
    q: "What is NFG's liquidity ratio, counting only the appropriate liquid assets?",
    options: ["2.0", "4.66", "8.66", "22.0"],
    correct: 2,
    explain: "Liquid assets = savings bank (₹7L) + short-term FD (₹2L) + liquid MF (₹4L) = ₹13L. Liquidity Ratio = 13 ÷ 1.5 = 8.66 — well above the 4–6 comfort benchmark."
  },
  {
    scenario: "PQR's assets: shares ₹5 lakh, fixed deposits ₹10 lakh, mutual fund investments ₹12 lakh, land ₹9 lakh, gold ₹14 lakh.",
    q: "What is PQR's Financial Assets Ratio?",
    options: ["27%", "46%", "50%", "54%"],
    correct: 3,
    explain: "Financial assets = 5 + 10 + 12 = ₹27L. Total assets = 27 + (9 + 14) = ₹50L. Financial Assets Ratio = 27 ÷ 50 × 100 = 54%."
  },
  {
    scenario: "An individual has a monthly income of ₹1.5 lakh and monthly loan commitments (principal + interest) of ₹60,000.",
    q: "What is this individual's Debt-to-Income Ratio, and how should it be interpreted?",
    options: [
      "25%, comfortably below any threshold of concern",
      "40%, right at the level generally seen as excessive (35–40%)",
      "60%, but this is considered a healthy ratio",
      "150%, indicating the individual has no debt"
    ],
    correct: 1,
    explain: "Debt-to-Income Ratio = 60,000 ÷ 1,50,000 = 40%, which sits right at the 35–40% level the workbook flags as excessive — a large share of income is committed to debt servicing."
  },
  {
    q: "The Debt-to-Income Ratio differs from the Leverage Ratio because it measures:",
    options: [
      "The same thing — the two ratios are interchangeable",
      "The individual's ability to service current debt obligations from income, rather than the role of debt in acquiring assets",
      "Only mortgage debt, excluding all other loans",
      "The client's credit score directly"
    ],
    correct: 1,
    explain: "Leverage Ratio measures the extent of debt used in building up assets. Debt-to-Income Ratio instead measures whether current income can comfortably service all debt obligations — a distinct, income-based test lenders also use for loan eligibility."
  },
  {
    q: "Personal finance ratios are most useful to an investment adviser because they:",
    options: [
      "Replace the need to ever meet the client again",
      "Give a numerical snapshot of a client's financial position that, tracked periodically, reveals trends and areas needing corrective action",
      "Are fixed once calculated and never need to be recalculated",
      "Are used exclusively for tax filing purposes"
    ],
    correct: 1,
    explain: "Calculated from a client's income, expense, savings and investment data, personal finance ratios give a numerical snapshot that — reviewed periodically — reveals trends and flags where corrective action is needed."
  }
];
