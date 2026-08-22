/* NISM Series-X-B · Module 7 · Chapter 1 — Basics of Insurance
   MCQ bank only. `correct` is the index into the ORIGINAL options order (engine shuffles).
   q / scenario / options render as HTML. */
window.NISM_CH01_QUESTIONS = [

  /* ---------- Need for insurance, risk transfer / retention ---------- */
  {
    q: "Insurance is best described as a form of:",
    options: [
      "Risk transfer, where the insured pays a premium and the insurer indemnifies the financial loss",
      "Risk retention, where the individual bears the financial consequence himself",
      "Speculation, offering a chance of both profit and loss",
      "A guaranteed investment scheme with assured returns"
    ],
    correct: 0,
    explain: "Insurance transfers the financial consequence of a risk from the insured to the insurer in return for a premium. Bearing the loss yourself is risk retention; a chance of profit and loss is speculative risk, which is not insurable."
  },
  {
    q: "The economic benefit that insurance protects can arise from which of these assets?",
    options: [
      "Both physical assets (like ships or buildings) and human assets (an earning individual)",
      "Only physical assets such as property and machinery",
      "Only financial assets such as shares and bonds",
      "Only human assets, since only life can be insured"
    ],
    correct: 0,
    explain: "Insurance protects the economic benefit that flows from assets, which can be physical (ships, buildings, machinery) or human (an earning individual)."
  },
  {
    q: "In the merchant-ships example, if the risk covered is a ship being lost at sea and the sum assured is ₹10,00,000, the ₹20,000 each merchant pays into the fund is called the:",
    options: ["Premium", "Sum assured", "Deductible", "Subrogation amount"],
    correct: 0,
    explain: "The periodic amount paid by the insured into the common pool is the premium. Here the sum assured is ₹10,00,000 (the ship's value) and the premium is ₹20,000."
  },
  {
    scenario: "Every month 100 merchants each send a ship to India. A lost ship costs ₹10,00,000. On average 2 ships are lost each month.",
    q: "How much must each merchant pay into the insurance fund so that both merchants who lose ships can be fully compensated?",
    options: ["₹20,000", "₹10,000", "₹40,000", "₹2,00,000"],
    correct: 0,
    explain: "Total loss = 2 × ₹10,00,000 = ₹20,00,000. Split among 100 merchants = ₹20,000 each. This converts an uncertain ₹10,00,000 loss into a certain ₹20,000 cost."
  },
  {
    scenario: "The same 100 merchants face 2 lost ships a month at ₹10,00,000 each, but only 40 merchants agree to join the insurance fund.",
    q: "What premium must each of the 40 participants now pay?",
    options: ["₹50,000", "₹20,000", "₹8,000", "₹1,00,000"],
    correct: 0,
    explain: "The pool still needs ₹20,00,000, but now only 40 pay, so ₹20,00,000 ÷ 40 = ₹50,000. Too few participants makes the premium unviable — this is why 'a large number of exposure units' is a requirement of an insurable risk."
  },
  {
    scenario: "A king has 500 employees, each earning ₹2,00,000 a year and the sole breadwinner for his family. About 2 employees are expected to die during the year, and the king wants to assure each family a sum of ₹20,00,000.",
    q: "What additional amount per employee funds this arrangement?",
    options: ["₹8,000", "₹40,000", "₹20,000", "₹4,000"],
    correct: 0,
    explain: "Total needed = 2 × ₹20,00,000 = ₹40,00,000. Split among 500 employees = ₹8,000 each — just 4% of the ₹2,00,000 salary. This is the seed of life insurance: risk covered = loss of income due to death, sum assured = ₹20,00,000, premium = ₹8,000."
  },
  {
    q: "Why might a person whose parents have a genetic history of heart disease or diabetes be charged a higher health-insurance premium?",
    options: [
      "The probability of a claim (the event occurring during the contract) is higher",
      "Genetic conditions are speculative risks",
      "Such persons have no insurable interest in their own health",
      "The sum assured must always be lower for them"
    ],
    correct: 0,
    explain: "The premium depends on the expected loss and the probability of the covered event during the contract. A higher chance of illness raises the expected claim, so the premium is higher."
  },

  /* ---------- Insurable risk — 7 requirements ---------- */
  {
    q: "Which of the following is NOT one of the requirements of an insurable risk?",
    options: [
      "The risk must offer the insured a prospect of financial gain",
      "There must be a large number of exposure units",
      "The chance of loss must be calculable",
      "The premium must be economically feasible"
    ],
    correct: 0,
    explain: "An insurable risk must be a PURE risk with NO prospect of gain — only the possibility of loss or no loss. A prospect of gain makes it a speculative (uninsurable) risk."
  },
  {
    q: "Investing in the stock market cannot be insured because it is:",
    options: [
      "A speculative risk (a chance of gain as well as loss), not a pure risk",
      "A pure risk with too small a loss",
      "Covered instead by the principle of subrogation",
      "Always profitable and therefore needs no cover"
    ],
    correct: 0,
    explain: "Stock investing can result in profit or loss, making it a speculative risk. Only pure risks (loss or no loss, never gain) are insurable — this links to the Principle of Indemnity."
  },
  {
    q: "Death is a certain event, yet life insurance is possible because:",
    options: [
      "The timing of death is uncertain, even though death itself is certain",
      "Death is a speculative risk",
      "The insured can decide when to make a claim",
      "Death causes no measurable financial loss"
    ],
    correct: 0,
    explain: "Life insurance is the exception to the rule that the loss must be accidental and uncertain: death is certain but its timing is not, and that uncertainty makes it insurable."
  },
  {
    q: "The requirement that the loss be 'determinable and measurable' means the loss must be:",
    options: [
      "Definite as to cause and amount, and calculable from definite evidence",
      "Large enough to bankrupt the insured",
      "Payable only in cash to the insured",
      "Spread across a large number of insurers"
    ],
    correct: 0,
    explain: "The loss must be definite in cause and amount — death for life insurance, fire for property, medical bills for health — so the insurer can determine and settle it from clear evidence."
  },
  {
    q: "The requirement that a premium be 'economically feasible' means:",
    options: [
      "The premium must be affordable and far less than the value of the risk covered",
      "The premium must equal the sum assured",
      "The premium must be paid only once in a lifetime",
      "The premium must be higher than the expected loss"
    ],
    correct: 0,
    explain: "If the premium approached the value of the risk covered, retaining the risk would make more sense than transferring it. The premium must be affordable and far below the sum covered."
  },
  {
    q: "For the insurer to price a policy, the chance of loss must be calculable — meaning the insurer can estimate the:",
    options: [
      "Average frequency and average severity of future losses",
      "Exact identity of who will claim",
      "Insured's personal wealth",
      "Stock-market return for the year"
    ],
    correct: 0,
    explain: "The insurer must be able to estimate, with reasonable accuracy, how often losses occur (frequency) and how large they are (severity) to set a viable premium."
  },

  /* ---------- Fundamental principles ---------- */
  {
    q: "'Uberrimae fidei', a fundamental principle of insurance, means:",
    options: [
      "Utmost good faith — the insured must disclose all material information truthfully",
      "Indemnity — restoring the insured's financial position",
      "Subrogation — recovering from a third party",
      "Contribution — sharing a claim between insurers"
    ],
    correct: 0,
    explain: "Uberrimae fidei is the principle of utmost good faith. Because the insured knows more about themselves than the insurer, they must truthfully disclose all material information."
  },
  {
    q: "Which of the following would generally be considered 'material information' that must be disclosed to a life/health insurer?",
    options: [
      "Family medical history, personal medical history, and smoking/drinking habits",
      "Only the insured's current bank balance",
      "Only the insured's postal address",
      "Nothing — the insurer's medical test reveals everything"
    ],
    correct: 0,
    explain: "Material information is anything that could influence the insurer's perception of risk — family and personal medical history, habits like smoking and drinking, and the nature of one's profession. When in doubt, disclose."
  },
  {
    scenario: "Meena, a regular smoker, declares herself a non-smoker on the proposal form to get a lower premium. Four years later she makes a health claim, and the insurer discovers she smokes.",
    q: "What is the most likely consequence?",
    options: [
      "The insurer can reject the claim for breach of utmost good faith (non-disclosure of material information)",
      "The insurer must pay in full because the medical test should have caught it",
      "The insurer must pay half the claim",
      "Nothing happens because smoking is not material"
    ],
    correct: 0,
    explain: "Smoking materially affects the insurer's risk perception. Suppressing it breaches utmost good faith, entitling the insurer to reject the claim — wasting all premiums paid. (Note: Section 45's 3-year rule protects LIFE policies from repudiation after 3 years, but the underlying duty of disclosure still applies.)"
  },
  {
    q: "The principle of 'insurable interest' requires that the insured:",
    options: [
      "Would be financially worse off if the insured event occurs and better off if it does not",
      "Must be emotionally attached to the subject of insurance",
      "Must own more than one insurance policy",
      "Must be related by blood to the insurer"
    ],
    correct: 0,
    explain: "Insurable interest means the insured stands to suffer a monetary loss if the risk materialises and benefits if it does not. It must be a lawful, financial interest — not merely emotional."
  },
  {
    q: "Which pair generally has insurable interest in each other WITHOUT needing to prove financial dependence?",
    options: [
      "Spouses (relationships of blood and marriage / direct dependents)",
      "An aunt and her nephew",
      "Two unrelated business competitors",
      "A cousin and a distant relative"
    ],
    correct: 0,
    explain: "Direct dependents and relationships of blood and marriage (like spouses) have insurable interest in each other. Distant relatives — aunts, uncles, cousins, nieces, nephews — must prove financial dependence."
  },
  {
    q: "A lender has an insurable interest in the life of a borrower:",
    options: [
      "Up to the amount outstanding on the loan",
      "For an unlimited amount",
      "Only if they are blood relatives",
      "Only after the loan is fully repaid"
    ],
    correct: 0,
    explain: "A lender's insurable interest in a borrower extends up to the outstanding loan amount. Similarly, an employer has insurable interest in key employees."
  },

  /* ---------- Indemnity vs benefit ---------- */
  {
    q: "An indemnity insurance policy:",
    options: [
      "Makes good the actual loss incurred, which must first be determined",
      "Pays a fixed pre-estimated sum regardless of actual loss",
      "Can never involve a cashless claim",
      "Applies only to life insurance"
    ],
    correct: 0,
    explain: "Indemnity insurance reimburses the actual ascertained loss (e.g. Mediclaim, property, car insurance). Determination of the actual loss is required before the claim is paid."
  },
  {
    q: "Which of the following is a DEFINED-BENEFIT (not indemnity) policy?",
    options: [
      "A critical-illness policy paying a fixed lump sum on diagnosis",
      "A Mediclaim policy reimbursing hospital bills",
      "A motor policy paying for accident repairs",
      "A property policy paying for fire damage"
    ],
    correct: 0,
    explain: "Defined-benefit policies pay a fixed pre-estimated sum where actual loss is hard to ascertain (life, critical illness) or too small to measure (daily hospital cash). Mediclaim, motor and property cover are indemnity."
  },
  {
    q: "A daily hospital cash allowance pays a fixed sum for each day of hospitalisation. It is a defined-benefit policy because:",
    options: [
      "The incidental losses are small and not easily ascertained, so a fixed sum is simpler",
      "Hospital expenses can always be measured precisely",
      "It is a speculative product",
      "It reimburses exact bills"
    ],
    correct: 0,
    explain: "Where the actual loss is small or difficult to ascertain, a defined benefit (a fixed pre-agreed amount) is used instead of measuring the exact loss."
  },

  /* ---------- Subrogation ---------- */
  {
    scenario: "Anil's car is damaged in an accident caused by another driver's negligence. His insurer pays his repair claim promptly and then pursues the at-fault driver to recover the amount.",
    q: "The insurer's right to recover from the at-fault third party is called:",
    options: ["Subrogation", "Contribution", "Indemnity", "Co-payment"],
    correct: 0,
    explain: "Subrogation lets the insurer step into the insured's shoes to recover the loss from the responsible third party after settling the claim. It speeds the insured's payout; a policy without subrogation rights would be more expensive."
  },

  /* ---------- Contribution ---------- */
  {
    scenario: "Priya has insured the same shop against flood under two indemnity policies, each with a sum assured of ₹5,00,000. A flood causes an ascertained loss of ₹30,000.",
    q: "How much does each insurer pay under the principle of contribution?",
    options: ["₹15,000 each", "₹30,000 each", "₹5,00,000 each", "₹7,500 each"],
    correct: 0,
    explain: "Contribution shares the loss proportionately by sum assured. With equal ₹5-lakh policies, each insurer pays half of ₹30,000 = ₹15,000. The insured cannot recover more than the actual loss — contribution applies only to indemnity policies."
  },
  {
    q: "The principle of contribution applies:",
    options: [
      "Only to indemnity policies, where the same risk is covered by more than one policy",
      "Only to life insurance policies",
      "To all defined-benefit policies",
      "Only when there is a single insurer"
    ],
    correct: 0,
    explain: "Contribution lets one insurer claim a proportionate share from another when the same risk is covered by multiple policies. It is an indemnity-only concept because the ascertained loss caps the total claim."
  },

  /* ---------- Co-pay & deductible ---------- */
  {
    q: "A co-pay clause in a health policy means the insured:",
    options: [
      "Bears an agreed percentage of every admissible claim",
      "Pays a fixed rupee amount before any claim is admissible",
      "Pays nothing at all towards claims",
      "Receives a fixed benefit regardless of the bill"
    ],
    correct: 0,
    explain: "A co-pay is a percentage of the claim the insured agrees to bear. Higher co-pay lowers the premium and makes the insured cost-sensitive. (A deductible, by contrast, is a fixed amount.)"
  },
  {
    q: "A deductible in an insurance policy is:",
    options: [
      "A fixed amount the insured pays first, after which the claim becomes admissible",
      "A percentage of every claim the insured bears",
      "The commission paid to the agent",
      "The total sum assured"
    ],
    correct: 0,
    explain: "A deductible is a fixed first amount borne by the insured. Types include compulsory and voluntary deductibles; a higher deductible lowers the premium."
  },
  {
    q: "In India, motor (car) insurance for vehicles with engine capacity up to 1600 CC carries a compulsory deductible of:",
    options: ["₹1,000", "₹5,000", "₹500", "₹2,000"],
    correct: 0,
    explain: "Cars up to 1600 CC have a compulsory deductible of ₹1,000 (₹2,000 for above 1600 CC). Deductibles can be compulsory or voluntary."
  },
  {
    scenario: "A claim of ₹40,000 is admissible. Policy 1 has a deductible of ₹1,000 and a co-pay of 10%. Policy 2 has a deductible of ₹5,000 and no co-pay.",
    q: "How much does the insurer pay under Policy 1?",
    options: ["₹35,100", "₹35,000", "₹36,000", "₹34,000"],
    correct: 0,
    explain: "Policy 1: ₹40,000 − ₹1,000 deductible = ₹39,000; less 10% co-pay (₹3,900) = ₹35,100. (Policy 2 pays ₹40,000 − ₹5,000 = ₹35,000.) A deductible is a fixed first slice; co-pay is a percentage of what remains."
  },
  {
    scenario: "A health claim of ₹2,00,000 is admissible under a policy with a 15% co-pay and no deductible.",
    q: "How much does the insured have to bear?",
    options: ["₹30,000", "₹15,000", "₹1,70,000", "₹2,000"],
    correct: 0,
    explain: "15% of ₹2,00,000 = ₹30,000 borne by the insured; the insurer pays the remaining ₹1,70,000."
  },
  {
    q: "All else equal, choosing a HIGHER voluntary deductible will:",
    options: [
      "Lower the premium",
      "Raise the premium",
      "Have no effect on the premium",
      "Increase the sum assured"
    ],
    correct: 0,
    explain: "By agreeing to bear a larger first slice of any loss, the insured reduces the insurer's exposure, so the premium falls. The same logic applies to a higher co-pay."
  },

  /* ---------- Cashless ---------- */
  {
    q: "A cashless claim settlement means:",
    options: [
      "The insurer pays the hospital or garage directly, avoiding a cash-flow block for the insured",
      "The insured never has to pay any premium",
      "No claim documents are ever required",
      "The claim is paid only in cash to the insured"
    ],
    correct: 0,
    explain: "In a cashless claim the insurer settles directly with the network hospital or garage. It is relevant to indemnity products (health/car). Because the approved network keeps changing, it shouldn't be the main reason to choose an insurer."
  },

  /* ---------- Nominee / Sec 45 / moratorium ---------- */
  {
    q: "Ordinarily (before the beneficial-nominee concept), a nominee under a life insurance policy is:",
    options: [
      "A trustee who receives the money but must account for it to the legal heirs",
      "The absolute owner of the claim amount in all cases",
      "The insurer's representative",
      "Barred from receiving any money"
    ],
    correct: 0,
    explain: "By default a nominee merely holds the claim money in trust for the legal heirs. The 2015 amendment created the 'beneficial nominee' exception for close family."
  },
  {
    q: "The 'beneficial nominee' concept under Section 39(7) of the Insurance Act, 1938 (added by the February 2015 amendment) applies when the nominee is the policyholder's:",
    options: [
      "Parent, spouse, or children (or any of them)",
      "Employer",
      "Business partner",
      "Insurance agent"
    ],
    correct: 0,
    explain: "When the nominee of a life policy is a parent, spouse or children, that person is beneficially entitled to the claim — not merely a trustee accountable to other legal heirs."
  },
  {
    q: "Under Section 45 of the Insurance Act, 1938, after how long can a life insurance policy no longer be called into question on any ground?",
    options: [
      "3 years from issuance / commencement of risk / revival (whichever is later)",
      "5 years from issuance",
      "1 year from issuance",
      "10 years from issuance"
    ],
    correct: 0,
    explain: "Section 45: no life policy can be questioned after 3 years from the date of issue, commencement of risk, or revival (whichever is later). Within those 3 years a claim can be repudiated only for fraud."
  },
  {
    scenario: "A life insurance death claim is filed 4 years after the policy commenced. The insurer suspects a minor non-disclosure at proposal but has no evidence of fraud.",
    q: "Can the insurer deny the claim?",
    options: [
      "No — after 3 years (Section 45) the policy cannot be called into question on any ground",
      "Yes — any non-disclosure allows denial at any time",
      "Yes — but only 50% of the claim",
      "Only if the premium was paid monthly"
    ],
    correct: 0,
    explain: "Beyond 3 years, Section 45 bars the insurer from repudiating the policy on any ground, including non-disclosure. Repudiation for fraud is possible only within the first 3 years."
  },
  {
    q: "The 'moratorium period' for a health insurance policy — after which no claim is contestable except for proven fraud or specified permanent exclusions — is:",
    options: [
      "5 continuous years of premium payment",
      "3 continuous years",
      "8 continuous years",
      "1 continuous year"
    ],
    correct: 0,
    explain: "After 5 continuous years of a health policy without breaks, no claim can be contested except for proven fraud and specified permanent exclusions. A fresh 5-year moratorium applies to any enhanced sum insured."
  },

  /* ---------- Insurance in personal finance ---------- */
  {
    q: "Why does insurance take priority over investments in a personal financial plan?",
    options: [
      "Income is the base of every goal, and one uninsured event can derail the entire plan",
      "Insurance always earns a higher return than investments",
      "SEBI mandates insurance before any investment",
      "Investments cannot be started without a life policy"
    ],
    correct: 0,
    explain: "Every goal depends on income. Protecting that income (like a batsman wearing protective gear before facing a fast bowler) comes before investing to reach the goals."
  },
  {
    q: "The 'batsman's protective gear' analogy in the chapter illustrates that:",
    options: [
      "Protecting the plan (insurance) comes before playing shots (investing for goals)",
      "Insurance slows down wealth creation and should be avoided",
      "A financial plan needs no protection",
      "Investments should always precede insurance"
    ],
    correct: 0,
    explain: "Even the greatest batsman never bats without pads and guards because a single hit could end his career. Likewise, the plan must be protected first, then investments made to reach goals."
  },
  {
    q: "A personal-accident disability policy and a critical-illness policy primarily address which insurance need?",
    options: [
      "Income replacement — replacing earnings lost when earning ability is impaired",
      "Asset protection — protecting household goods",
      "Income protection — meeting large one-off bills",
      "None — they are investment products"
    ],
    correct: 0,
    explain: "These policies replace income lost when the insured is incapacitated, so they meet an income-replacement need — often more relevant than life cover for a young person with no dependents."
  },

  /* ---------- Investing through insurance ---------- */
  {
    scenario: "A merchant wants his ₹20,000 premium returned if his ship arrives safely. Investments earn 12% p.a. (about 1% per month).",
    q: "Roughly what premium must he now pay for this 'premium-back' feature on a one-month cover?",
    options: [
      "About ₹20,20,000 — more than the ship itself",
      "Still ₹20,000",
      "About ₹40,000",
      "About ₹2,00,000"
    ],
    correct: 0,
    explain: "The insurer keeps ₹20,000 for the pool and must invest ₹20,00,000 that grows to ₹20,20,000 in a month to be returned — so the premium balloons to ₹20,20,000. Chasing 'premium back' pushes premiums up so steeply that people cut cover, defeating the purpose."
  },
  {
    q: "When evaluating an investment-cum-insurance product, an adviser should FIRST:",
    options: [
      "Decouple the two elements and check whether the risk cover is adequate",
      "Check whether the investment return beats the equity market",
      "Check whether the premium is the lowest in the market",
      "Recommend it because bundling is always convenient"
    ],
    correct: 0,
    explain: "Separate the insurance and investment components. Test risk-cover adequacy first — if inadequate, eliminate the product because its primary purpose fails. Only then assess the investment return separately."
  },
  {
    q: "The chapter's view on bundled investment-cum-insurance products is that:",
    options: [
      "An insurer's primary job is risk coverage; investment products are best bought from entities specialising in them",
      "They are always the best way to invest",
      "The investment return should be judged before the risk cover",
      "They eliminate the need for utmost good faith"
    ],
    correct: 0,
    explain: "Because the primary role of an insurer is risk coverage, the investment element should be examined separately and compared with pure investment products of a similar profile."
  },

  /* ---------- Five steps of insurance planning ---------- */
  {
    q: "The five steps of insurance planning, in order, are:",
    options: [
      "Identify the need → estimate the coverage → identify the suitable product → optimise the premium → monitor the coverage",
      "Optimise the premium → identify the need → monitor → estimate coverage → choose product",
      "Estimate coverage → monitor → identify need → optimise premium → choose product",
      "Choose product → identify need → monitor → estimate coverage → optimise premium"
    ],
    correct: 0,
    explain: "The sequence is: (1) identify the insurance need, (2) estimate the coverage, (3) identify the most suitable product, (4) optimise the premium, and (5) monitor the coverage."
  },
  {
    q: "Insurance needs are generally grouped into which three categories?",
    options: [
      "Income replacement, income protection, and asset protection",
      "Life, health, and travel",
      "Fixed, floating, and hybrid",
      "Compulsory, voluntary, and optional"
    ],
    correct: 0,
    explain: "Income replacement (life, critical illness, accidental disability, annuities), income protection (health, motor), and asset protection (e.g. household insurance)."
  },
  {
    q: "Over-insurance (buying more cover than needed) is undesirable because it:",
    options: [
      "Wastes premium on cover that is not required",
      "Always leads to claim rejection",
      "Violates the principle of subrogation",
      "Is illegal under the Insurance Act"
    ],
    correct: 0,
    explain: "Over-insurance wastes premium, while under-insurance means part of the risk is effectively retained. Coverage should be estimated to match the actual need."
  },
  {
    q: "Which of the following is a legitimate way to OPTIMISE (reduce) the premium for the same cover?",
    options: [
      "Choosing a higher deductible, using the no-claim bonus, and taking E-Insurance",
      "Concealing material information from the insurer",
      "Reducing the sum assured below the required cover",
      "Never reviewing the policy again"
    ],
    correct: 0,
    explain: "Premium optimisation includes sharing non-mandatory information (motor), a higher deductible, the no-claim bonus, and E-Insurance (electronic policies, often discounted) — all without cutting the needed cover. Concealment is fraud, and cutting the sum assured reduces cover."
  },
  {
    q: "Insurance coverage should be monitored and reviewed particularly when:",
    options: [
      "Life events change the demands on income — marriage, children, buying a house, a big raise",
      "The stock market rises",
      "Only when a claim is rejected",
      "Never — insurance is a one-time decision"
    ],
    correct: 0,
    explain: "Insurance is not a one-time activity. Cover should be reviewed at life events that change income demands, and may even be reduced over time as goals are met."
  },
  {
    scenario: "A 30-year-old can buy a 30-year term policy (to age 60) for ₹13,800 a year, or a 40-year term policy (to age 70) for ₹16,200 a year.",
    q: "What does the extra ₹2,400 a year primarily buy?",
    options: [
      "The option to keep the cover running beyond the earning years, for added flexibility",
      "A guaranteed investment return",
      "A refund of all premiums at maturity",
      "Immediate cashless hospitalisation"
    ],
    correct: 0,
    explain: "The extra ₹2,400 a year extends the term by 10 years — a relatively cheap way to buy flexibility to continue the policy beyond the earning phase."
  },

  /* ---------- Regulations: health ---------- */
  {
    q: "Under IRDAI health-insurance regulations, an insurer's list of exclusions:",
    options: [
      "May have fewer exclusions than prescribed, but never more",
      "May freely add any exclusion the insurer wishes",
      "Must always match a competitor's list",
      "Is not regulated at all"
    ],
    correct: 0,
    explain: "Exclusions are standardised. An insurer may offer fewer exclusions but cannot exceed the prescribed list. Mental illness, genetic disorders and congenital disease have been removed from exclusions."
  },
  {
    q: "Which of these has been REMOVED from the standard list of health-insurance exclusions?",
    options: [
      "Mental illness, genetic disorders and congenital disease",
      "Hospitalisation for accidents",
      "Day-care surgical procedures",
      "Pre- and post-hospitalisation expenses"
    ],
    correct: 0,
    explain: "IRDAI standardisation removed mental illness, genetic disorders and congenital disease from the list of permissible exclusions."
  },
  {
    q: "With effect from 22 September 2025, individual health insurance (and reinsurance) policies are:",
    options: [
      "Exempt from GST",
      "Taxed at 28% GST",
      "Subject to a new 5% service charge",
      "Available only through banks"
    ],
    correct: 0,
    explain: "All individual health insurance/reinsurance policies are exempt from GST with effect from 22 September 2025."
  },
  {
    q: "Regarding portability of health policies, which statement is correct?",
    options: [
      "Any health policy except group, top-up and super-top-up can be ported",
      "No health policy can ever be ported",
      "Only group policies can be ported",
      "Portability is banned by IRDAI"
    ],
    correct: 0,
    explain: "Any health policy other than group, top-up and super-top-up can be ported. A group policy can be ported to an individual policy — within the same company in the first year of leaving, and to any company from the second year."
  },
  {
    q: "IRDAI requires every general/health insurer to offer a standard individual health product that:",
    options: [
      "Has common wordings, seamless portability, and no add-ons",
      "Is available only to senior citizens",
      "Carries the highest premium in the market",
      "Excludes hospitalisation"
    ],
    correct: 0,
    explain: "The mandated standard individual health product has common wordings across insurers, seamless portability, and no add-ons, making comparison easier for buyers."
  },

  /* ---------- Regulations: ULIP ---------- */
  {
    q: "Benefit illustrations for a Unit Linked Insurance Product (ULIP) must be shown at which two return scenarios?",
    options: ["4% and 8%", "5% and 10%", "6% and 12%", "3% and 6%"],
    correct: 0,
    explain: "ULIP benefit illustrations use 4% and 8% return scenarios, and the prospect signs the illustration along with the proposal form."
  },
  {
    q: "The lock-in period for a ULIP is:",
    options: ["5 years", "3 years", "10 years", "1 year"],
    correct: 0,
    explain: "ULIPs have a 5-year lock-in. There are no surrender charges after 5 policy years, charges are capped from the 5th year, and partial withdrawals are allowed after the lock-in."
  },
  {
    q: "A lapsed ULIP can be revived within:",
    options: [
      "3 years of the date of lapsation",
      "5 years of lapsation",
      "1 year of lapsation",
      "It can never be revived"
    ],
    correct: 0,
    explain: "A lapsed ULIP can be revived within 3 years of the date of lapsation. Limited/regular-premium ULIPs must have level premiums and a premium-paying term of at least 5 years."
  },
  {
    q: "Except for pension and annuity products, all ULIPs must:",
    options: [
      "Carry a mortality or health cover",
      "Guarantee an 8% return",
      "Be free of all charges",
      "Have no lock-in period"
    ],
    correct: 0,
    explain: "All ULIPs other than pension/annuity products must provide a mortality or health cover, preserving the insurance character of the product."
  },

  /* ---------- Regulations: intermediaries ---------- */
  {
    q: "The key difference between an insurance broker and an insurance agent is that:",
    options: [
      "A broker represents the client, while an agent represents the insurance company",
      "A broker represents the insurer, while an agent represents the client",
      "Both represent the insurer equally",
      "Both represent the client equally"
    ],
    correct: 0,
    explain: "A direct broker acts on behalf of the client; an insurance agent (and corporate agent) acts on behalf of the insurance company."
  },
  {
    q: "Which intermediary can charge a fee to the client AND earn a commission from the insurer?",
    options: [
      "A direct insurance broker",
      "An insurance agent",
      "A corporate agent",
      "None of them"
    ],
    correct: 0,
    explain: "A direct broker, representing the client, can charge the client a fee and also earn commission from the insurer. Agents and corporate agents earn commission from the insurer only."
  },
  {
    q: "A composite corporate agent can work with a maximum of how many insurers?",
    options: [
      "3 life, 3 general and 3 health insurance companies",
      "1 life, 1 general and 1 health company",
      "Unlimited companies",
      "5 companies in total"
    ],
    correct: 0,
    explain: "A composite corporate agent may tie up with a maximum of 3 life, 3 general and 3 health insurers. (A composite insurance agent, by contrast, can represent only one life, one general and one health insurer.)"
  },
  {
    q: "When a bank acts as the corporate agent of an insurance company, the arrangement is called:",
    options: ["Bancassurance", "Reinsurance", "Subrogation", "Coinsurance"],
    correct: 0,
    explain: "A bank functioning as an insurer's corporate agent is known as bancassurance."
  },
  {
    q: "The three categories of insurance brokers are:",
    options: [
      "Direct, Reinsurance, and Composite",
      "Life, General, and Health",
      "Individual, Corporate, and Bank",
      "Primary, Secondary, and Tertiary"
    ],
    correct: 0,
    explain: "Brokers are Direct (arrange cover for clients), Reinsurance (arrange reinsurance so insurers spread risk), or Composite (both direct and reinsurance)."
  },
  {
    q: "Reinsurance brokers help insurers to:",
    options: [
      "Spread their risk by arranging reinsurance",
      "Sell policies directly to retail clients",
      "Avoid paying any claims",
      "Register as banks"
    ],
    correct: 0,
    explain: "Reinsurance brokers arrange reinsurance, enabling primary insurers to spread the risk they have underwritten."
  },
  {
    q: "To curb mis-selling, IRDAI requires an insurance agent to justify a product's suitability considering the client's age, income, family status, goals and existing cover. A client may waive this only by:",
    options: [
      "Giving written consent",
      "A verbal request",
      "Paying an extra fee",
      "It can never be waived"
    ],
    correct: 0,
    explain: "Suitability justification is mandatory, and the client can dispense with it only through written consent. Agents must also provide 4%/8% benefit illustrations and sign them with the policyholder."
  },
  {
    scenario: "Sunil is an IRDAI-registered insurance agent. He advises his clients only on life and health insurance products.",
    q: "Does the SEBI (Investment Advisers) Regulations, 2013 apply to him?",
    options: [
      "No — an agent advising solely on insurance products is exempt from IA regulations",
      "Yes — all insurance agents are covered by IA regulations",
      "Yes — but only for health products",
      "Only if he earns more than ₹10 lakh a year"
    ],
    correct: 0,
    explain: "Under SEBI (IA) Regulations, 2013, an IRDAI-registered agent/broker advising solely on insurance products is exempt. The exemption ends the moment he advises on non-insurance securities."
  },
  {
    scenario: "The same agent, Sunil, now begins advising clients on mutual funds and equity shares in addition to insurance.",
    q: "What is the consequence?",
    options: [
      "SEBI (IA) Regulations apply — he must observe risk profiling, suitability and fiduciary responsibility",
      "Nothing changes; he remains exempt",
      "He must surrender his insurance licence",
      "He is barred from advising on insurance"
    ],
    correct: 0,
    explain: "Advising on non-insurance securities/investment products brings the SEBI (IA) Regulations, 2013 into play, with their obligations of risk profiling, suitability and fiduciary responsibility."
  },
  {
    q: "An 'insurance intermediary' under the regulations includes:",
    options: [
      "Insurance brokers, reinsurance brokers, consultants, surveyors and loss assessors",
      "Only individual agents",
      "Only banks",
      "Only the policyholders themselves"
    ],
    correct: 0,
    explain: "The term covers insurance brokers, reinsurance brokers, insurance consultants, surveyors and loss assessors, among others."
  },
  {
    q: "A composite insurance AGENT can act for at most:",
    options: [
      "One life, one general and one health insurer (and one each mono-line)",
      "Three life, three general and three health insurers",
      "Any number of insurers",
      "Only one insurer of any single type"
    ],
    correct: 0,
    explain: "A composite insurance agent cannot represent more than one life, one general and one health insurer. (This contrasts with a composite corporate agent's 3+3+3 limit.)"
  },

  /* ---------- Integrative / concept-checks ---------- */
  {
    q: "The Principle of Indemnity — that insurance restores but must not enrich the insured — flows most directly from which requirement of an insurable risk?",
    options: [
      "There must be no prospect of gain (pure risk, not speculative)",
      "There must be a large number of exposure units",
      "The premium must be economically feasible",
      "The loss must be accidental"
    ],
    correct: 0,
    explain: "Because an insurable risk must offer no prospect of gain, insurance can only restore the pre-loss position — never be a source of profit. This is the Principle of Indemnity."
  },
  {
    q: "A policy that does NOT give the insurer subrogation rights would most likely be:",
    options: [
      "More expensive, because the insurer cannot recover from a third party",
      "Cheaper, because fewer claims are paid",
      "Illegal under the Insurance Act",
      "Identical in price to a normal policy"
    ],
    correct: 0,
    explain: "Subrogation lets the insurer recover paid claims from at-fault third parties. Without that right, the insurer's net cost rises, so such a policy would be more expensive."
  },
  {
    q: "Because a cashless-claim network of hospitals or garages keeps changing, the chapter advises that:",
    options: [
      "It should not be the primary reason for choosing an insurer",
      "It should be the only factor in choosing an insurer",
      "Cashless claims should be avoided entirely",
      "Cashless facility is banned by IRDAI"
    ],
    correct: 0,
    explain: "The approved cashless network changes over time, so while convenient, it shouldn't be the main basis for selecting an insurer."
  }
];
