/* NISM Series-X-B · Module 7 · Chapter 2 — Life Insurance Products
   MCQ bank only. `correct` is the index into the ORIGINAL options order (engine shuffles).
   q / scenario / options render as HTML. */
window.NISM_CH02_QUESTIONS = [

  /* ---------- 2.1 Elements ---------- */
  {
    q: "A life insurance product that pays a benefit only if the insured dies within a specified period, and nothing if the insured survives, provides:",
    options: ["Death cover only", "Survival benefit only", "Both death cover and survival benefit", "A guaranteed maturity bonus"],
    correct: 0,
    explain: "Death cover pays only on death within the term. Term insurance provides death cover only; investment-cum-insurance policies combine death cover and survival benefit."
  },
  {
    q: "If the person buying a policy is different from the person whose life is insured, the buyer is called the proposer/policyholder and must have:",
    options: ["Insurable interest in the life being covered", "A higher income than the insured", "A medical degree", "A separate policy of his own"],
    correct: 0,
    explain: "Where the life insured differs from the buyer, the buyer (proposer/policyholder) must have an insurable interest in the individual being covered."
  },
  {
    q: "Under IRDAI Regulations, for a life policy with a term of MORE than 10 years taken by an individual BELOW 45, the minimum sum assured is:",
    options: ["10 times the annual premium", "7 times the annual premium", "5 times the annual premium", "Equal to the annual premium"],
    correct: 0,
    explain: "Term >10 years: minimum SA is 10× annual premium if age <45, and 7× if age >45. Term <10 years: 5× for all individuals."
  },
  {
    q: "For a life policy with a term of LESS than 10 years, the minimum sum assured is:",
    options: ["5 times the annual premium for all individuals", "10 times the annual premium", "7 times the annual premium", "3 times the annual premium"],
    correct: 0,
    explain: "If the term is less than 10 years, the minimum sum assured is 5× the annual premium, regardless of age."
  },
  {
    scenario: "Rakesh, aged 48, buys a life insurance policy with a term of 15 years and an annual premium of ₹50,000.",
    q: "What is the minimum sum assured his policy must carry?",
    options: ["₹3,50,000 (7× the annual premium)", "₹5,00,000 (10× the annual premium)", "₹2,50,000 (5× the annual premium)", "₹50,000 (1× the annual premium)"],
    correct: 0,
    explain: "Term is >10 years and age is above 45, so the minimum SA is 7× the annual premium = 7 × ₹50,000 = ₹3,50,000."
  },
  {
    q: "A 'reversionary bonus' is:",
    options: [
      "Declared at the insurer's discretion after the guaranteed-bonus period, only on participating policies",
      "Paid on every term insurance policy each year",
      "A fixed bonus guaranteed for the entire policy term",
      "The commission paid to the agent"
    ],
    correct: 0,
    explain: "Reversionary bonus depends on the insurer's performance, is declared at its discretion after the guaranteed-bonus period, and applies only to participating policies (whose premiums are higher than non-participating ones)."
  },
  {
    q: "A guaranteed bonus is:",
    options: [
      "Paid for the first few years (e.g. five) as a percentage of the sum assured, generally received at the end of the term",
      "Paid only on term insurance policies",
      "Never part of the policy benefits",
      "The same as the surrender value"
    ],
    correct: 0,
    explain: "Guaranteed bonus (relevant only to investment-cum-insurance policies) is paid for the first few years as a % of SA, forms part of the benefits, and is generally received at the end of the term."
  },
  {
    scenario: "Surinder took a 25-year investment-cum-insurance policy with a sum assured of ₹10,00,000, paying premiums half-yearly. After paying premiums for 5 years, he stops and makes the policy paid-up.",
    q: "What is the reduced (paid-up) sum assured?",
    options: ["₹2,00,000", "₹5,00,000", "₹1,00,000", "₹4,00,000"],
    correct: 0,
    explain: "Half-yearly over 25 years = 50 premiums due; 5 years = 10 paid. Paid-up SA = ₹10,00,000 × 10/50 = ₹2,00,000."
  },
  {
    q: "A traditional investment-cum-insurance policy acquires a surrender value only if it has been in force for at least:",
    options: [
      "3 years (2 years if the term is less than 10 years), with full premiums paid",
      "1 year",
      "5 years in all cases",
      "10 years"
    ],
    correct: 0,
    explain: "Surrender/cash value is acquired after 3 years in force (2 years if the term is under 10 years), provided full premiums have been paid."
  },
  {
    q: "The minimum surrender value of an eligible traditional policy is:",
    options: [
      "30% of all premiums paid, rising to 90% in the last two years",
      "10% of all premiums paid",
      "100% of all premiums paid",
      "50% of the sum assured"
    ],
    correct: 0,
    explain: "The minimum surrender value is 30% of premiums paid, going up to 90% in the last two years. For single-premium policies it ranges from 70% (first three years) to 90% (last two years)."
  },
  {
    q: "On surrendering a ULIP before 5 years, the discontinuance charge is capped at a maximum of:",
    options: ["₹6,000", "₹1,000", "₹10,000", "₹25,000"],
    correct: 0,
    explain: "A ULIP has a maximum discontinuance charge of ₹6,000; after deducting it, the balance fund is transferred to a discontinuation policy fund. The surrender value is paid at the end of the 5-year lock-in."
  },
  {
    q: "Non-payment of premium within the grace period causes a policy to lapse. A lapsed policy can be:",
    options: [
      "Revived/reinstated within the timeframe allowed by the insurer, by paying pending premiums plus a penalty",
      "Never revived under any circumstances",
      "Automatically converted into a term plan",
      "Revived only by the nominee"
    ],
    correct: 0,
    explain: "A lapsed policy can be revived/reinstated during the timeframe the insurer provides, by paying the pending premiums along with a penalty."
  },

  /* ---------- 2.2 Need analysis ---------- */
  {
    q: "Human Life Value (HLV) is:",
    options: [
      "The present value of the expected income over the working life of the individual that is available for dependents",
      "The total premium paid over the policy term",
      "The sum assured chosen by the insurer",
      "The market value of the insured's assets"
    ],
    correct: 0,
    explain: "HLV is the economic value attached to a human life — the present value of expected future income available for dependents over the working life."
  },
  {
    q: "In the HLV/need-based calculation, the discounting (adjusted) rate is computed as:",
    options: [
      "((1 + return on investment) ÷ (1 + inflation)) − 1",
      "return on investment − inflation, exactly",
      "(1 + inflation) ÷ (1 + return) − 1",
      "return on investment + inflation"
    ],
    correct: 0,
    explain: "Adjusted rate = ((1+ROI)/(1+inflation)) − 1. With 8% and 6% this gives ≈1.89%."
  },
  {
    scenario: "An insured earns ₹10,00,000 a year, is aged 33, plans to retire at 60, expects 8% return and 6% inflation.",
    q: "Roughly what is the estimated Human Life Value (PV of income over the 27 working years at the 1.89% adjusted rate)?",
    options: ["About ₹2.10 crore", "About ₹27 lakh", "About ₹5 crore", "About ₹1.05 crore"],
    correct: 0,
    explain: "Discounting rate ≈1.89%, n = 60−33 = 27 years; PV of ₹10,00,000/year ≈ ₹2,10,04,210 — about ₹2.10 crore."
  },
  {
    scenario: "Anil's need-based calculation gives a required corpus of ₹2,36,43,984. He has an outstanding loan of ₹40,00,000, existing life cover of ₹1,00,00,000 and investments of ₹50,00,000.",
    q: "What additional insurance cover does he need?",
    options: ["₹1,26,43,984", "₹2,36,43,984", "₹2,76,43,984", "₹86,43,984"],
    correct: 0,
    explain: "Corpus ₹2,36,43,984 + loan ₹40,00,000 = ₹2,76,43,984; deduct existing cover ₹1 crore and investments ₹50 lakh (₹1.5 crore) = ₹1,26,43,984 additional cover."
  },
  {
    q: "Comparing the two methods, the life-insurance requirement calculated by the HLV method will always be:",
    options: [
      "Higher than or equal to the need-based figure, because expenditure cannot exceed income",
      "Lower than the need-based figure",
      "Exactly equal to the need-based figure",
      "Unrelated to the need-based figure"
    ],
    correct: 0,
    explain: "HLV replaces the whole income; the need-based method replaces only the income actually required by dependents. Since expenditure cannot exceed income, HLV ≥ need-based, always."
  },
  {
    q: "Other things equal, a client who already holds a large amount of investments will have a need-based insurance requirement that is:",
    options: ["Lower — existing investments are deducted from the required corpus", "Higher", "Unchanged", "Exactly zero"],
    correct: 0,
    explain: "Existing investments (and cover) are subtracted from the corpus required, so more investments mean a lower additional insurance need."
  },

  /* ---------- 2.3 Types: Term ---------- */
  {
    q: "Term insurance is best described as:",
    options: [
      "A pure risk cover product with no investment component, offering the most affordable life cover",
      "An investment-cum-insurance product with guaranteed returns",
      "A policy that always returns the premium on survival",
      "A market-linked plan where the insured chooses the funds"
    ],
    correct: 0,
    explain: "Term insurance is pure risk cover — the premium buys protection and nothing else, so it is the most affordable way to cover life-insurance needs."
  },
  {
    q: "The three key factors to be considered in term insurance are:",
    options: [
      "Sum assured (death benefit), premium, and length of coverage (term)",
      "Bonus, surrender value, and NAV",
      "Rider, assignment, and nomination",
      "Fund choice, lock-in, and switching"
    ],
    correct: 0,
    explain: "Term insurance is defined by the sum assured (protection), the premium (cost), and the length of coverage. Insurers combine these three in many variants."
  },
  {
    scenario: "For a ₹1,00,00,000 cover over 30 years, the same insurer charges ₹9,416 a year for a pure term plan and ₹17,473 a year for a term plan with return of premium; the premiums returned on maturity total ₹5,24,190.",
    q: "The inherent annual return on the extra premium (₹8,057) works out to approximately:",
    options: ["4.61%", "8.00%", "17.47%", "1.89%"],
    correct: 0,
    explain: "Using Excel RATE with n=30, PMT=₹8,057 (17,473−9,416), FV=₹5,24,190, payment at the beginning of each year → about 4.61% p.a. on the extra premium."
  },
  {
    scenario: "The same insurer offers a ₹1 crore cover for 30 years: a pure term plan at ₹9,416/year and an endowment plan at ₹3,16,332/year, with ₹2,14,00,000 payable after 30 years per the official illustration.",
    q: "The inherent investment return on the extra premium of the endowment plan is approximately:",
    options: ["5%", "12%", "8%", "2%"],
    correct: 0,
    explain: "Extra premium = ₹3,16,332 − ₹9,416 = ₹3,06,916/year. Using RATE with n=30 and FV=₹2,14,00,000 → about 5% p.a. — and even that is not guaranteed."
  },
  {
    q: "For a term policy, extending coverage up to 85 or 100 years (rather than only the earning years) will:",
    options: ["Cost a much higher premium", "Cost a lower premium", "Cost the same premium", "Convert it into an endowment plan"],
    correct: 0,
    explain: "Term policies with extended coverage carry much higher premiums than term policies that cover only the earning years."
  },

  /* ---------- Endowment / Whole life ---------- */
  {
    q: "In an endowment policy, the 'accrued bonus' is:",
    options: [
      "Calculated (usually yearly) and paid only at the end of the tenure, added to the sum assured",
      "Guaranteed and fixed at the start of the policy",
      "Paid in cash every month",
      "Deducted from the sum assured"
    ],
    correct: 0,
    explain: "Accrued bonus is not pre-defined at commencement; it is generally calculated at the end of each year and paid at the end of the tenure. On death, SA plus bonus accrued till death is paid."
  },
  {
    q: "The single official document that clearly lays out the probable returns of an investment-cum-insurance policy, and which portion is guaranteed versus not guaranteed, is:",
    options: [
      "The insurer's official illustration (from its website)",
      "The agent's verbal quote",
      "The premium receipt",
      "The claim settlement ratio"
    ],
    correct: 0,
    explain: "The official illustration is the only official document specifying probable returns and clearly distinguishing the guaranteed from the non-guaranteed portion."
  },
  {
    q: "Whole life insurance policies were ORIGINALLY designed primarily to:",
    options: [
      "Pass on wealth to the next generation without payment of estate duty (life insurance payouts on death were exempt)",
      "Provide the highest possible market-linked returns",
      "Offer pure protection at the lowest cost",
      "Guarantee tax-free income during the insured's lifetime"
    ],
    correct: 0,
    explain: "Whole life policies were designed to pass wealth to the next generation free of estate duty. With estate duty abolished, they are now judged like any investment-cum-insurance policy."
  },

  /* ---------- ULIP & case study ---------- */
  {
    q: "The key feature that distinguishes a ULIP from endowment and whole-life policies is that:",
    options: [
      "The insured decides the portfolio (mix of debt and equity) for the savings portion",
      "The insurer guarantees the maturity value",
      "There is no lock-in period",
      "There is no insurance cover at all"
    ],
    correct: 0,
    explain: "In endowment and whole-life policies the insured has no say in how the savings are managed; a ULIP lets the insured choose the asset allocation. Risk-cover charges are deducted and the balance invested, with a daily NAV."
  },
  {
    q: "In a ULIP, the investment risk on the savings portion is borne by:",
    options: ["The insured (reducible via low-risk funds, but not eliminable)", "The insurer entirely", "IRDAI", "The nominee"],
    correct: 0,
    explain: "In ULIPs the insured bears the investment risk. It can be reduced (by choosing low-risk funds) but not eliminated."
  },
  {
    scenario: "Mr Jeevan (35) needs ₹1 crore cover. Option 1: term at ₹1,100/month plus ₹25,000/month in a mutual fund. Option 2: a Type-II ULIP at ₹26,100/month with the same ₹1 crore cover.",
    q: "Which is a genuine ADVANTAGE of Option 1 (term + mutual fund) over the ULIP?",
    options: [
      "The insurance and investment are fully divisible — you can pause/restart investing freely, with no lock-in",
      "It offers tax-free switching between insurer funds",
      "The insurance can never be discontinued",
      "It guarantees a higher return"
    ],
    correct: 0,
    explain: "Option 1 keeps the two contracts separate and divisible: the investment can be paused and restarted with no cost, and there is no 5-year lock-in. The ULIP is indivisible for 5 years and locked in."
  },
  {
    scenario: "In the Mr Jeevan comparison, the ULIP's annual premium is about ₹3,13,200 and the sum assured is ₹1 crore. The policy was taken before 1 February 2021.",
    q: "How is its maturity value taxed?",
    options: [
      "Tax-free — the sum assured (₹1 crore) exceeds 10× the annual premium",
      "Taxed as capital gains because premium exceeds ₹2.5 lakh",
      "Taxed as salary income",
      "Taxed at a flat 30%"
    ],
    correct: 0,
    explain: "For pre-01.02.2021 ULIPs, if the SA is at least 10× the annual premium, the maturity value is tax-free. ₹1 crore > 10 × ₹3,13,200, so it is exempt. (The ₹2.5 lakh capital-gains rule applies to policies taken on/after 01.02.2021.)"
  },
  {
    q: "Under the Finance Act 2021, the maturity proceeds of a ULIP are treated as capital gains and taxed if the annual premium exceeds:",
    options: ["₹2.5 lakh (for policies taken on/after 01.02.2021)", "₹5 lakh", "₹1 lakh", "₹10 lakh"],
    correct: 0,
    explain: "The Finance Act 2021 provides that ULIPs with annual premium above ₹2.5 lakh, taken on or after 01.02.2021, have their maturity proceeds taxed as capital gains."
  },
  {
    q: "The overriding conclusion of the term-plus-mutual-fund versus ULIP comparison is that a ULIP should be considered:",
    options: [
      "Only where insurance cover is actually required in the first place",
      "Always, because it bundles everything conveniently",
      "Never, under any circumstances",
      "Only by young investors with no dependents"
    ],
    correct: 0,
    explain: "If insurance is not needed, the ULIP's mortality charge is just an added cost. A ULIP is worth considering in place of term + mutual fund only where the insurance cover is genuinely required."
  },
  {
    q: "Compared with mutual funds, the transparency of a ULIP's costs is generally lower because:",
    options: [
      "Costs like mortality and administration charges are recovered by cancelling units rather than being embedded in the NAV, making return comparison difficult",
      "ULIPs never disclose any charges",
      "ULIP NAVs are not published",
      "Mutual funds have no regulator"
    ],
    correct: 0,
    explain: "Most ULIP costs are debited by cancelling units rather than being embedded in the NAV, and bonus units for loyal investors mean newer investors subsidise older ones — both make return comparison harder than for mutual funds."
  },

  /* ---------- Mortgage & riders ---------- */
  {
    q: "Mortgage (reducing-term) insurance is characterised by a sum assured that:",
    options: [
      "Decreases over time, matching a reducing home loan balance",
      "Increases every year with inflation",
      "Stays level for the entire term",
      "Doubles on the insured's death"
    ],
    correct: 0,
    explain: "In mortgage insurance the sum assured keeps going down with time, tracking the outstanding home loan as it is repaid."
  },
  {
    q: "Why are mortgage (reducing balance) insurance plans generally NOT popular?",
    options: [
      "In practice they are often not cheaper — sometimes more expensive — than level term, and prepaid loans waste the extra cover",
      "They are banned by IRDAI",
      "They offer no death benefit at all",
      "They require a medical test every year"
    ],
    correct: 0,
    explain: "Although cheaper in theory, in practice reducing-balance mortgage insurance is often not much cheaper — and sometimes costlier — than level term. Since home loans are usually prepaid, the premium for cover no longer needed goes waste."
  },
  {
    scenario: "An insured wants a rider that pays a pre-specified sum on diagnosis of a life-threatening illness, provided he survives 30 days, with the life cover reduced by the amount paid out.",
    q: "This describes a:",
    options: [
      "Critical illness rider on an accelerated sum insured basis",
      "Waiver of premium rider",
      "Guaranteed insurability option rider",
      "Double sum assured rider"
    ],
    correct: 0,
    explain: "A critical illness rider pays on diagnosis + 30-day survival. On an 'accelerated sum insured' basis, the life cover is reduced by the payout — cheaper, and often cheaper than a standalone CI policy from a general insurer."
  },
  {
    q: "The rider that lets a young insured ENHANCE cover in future without a fresh medical examination is the:",
    options: ["Guaranteed insurability option rider", "Waiver of premium rider", "Income benefit rider", "Accident death benefit rider"],
    correct: 0,
    explain: "The guaranteed insurability option rider allows enhancing cover without further medical examination — useful for young people expecting higher income (and possible health issues) later."
  },
  {
    q: "The rider under which future premiums are not required if a disability or loss of income makes payment difficult is the:",
    options: ["Waiver of premium rider", "Double sum assured rider", "Income benefit rider", "Critical illness rider"],
    correct: 0,
    explain: "The waiver of premium rider is triggered by a disability or loss of income that makes it hard to pay the premium — future premiums are waived while cover continues."
  },
  {
    q: "The 'income benefit rider' provides that, on the policyholder's death, the nominee receives:",
    options: [
      "A periodic fixed income instead of a lump sum",
      "Double the sum assured immediately",
      "A refund of all premiums",
      "A waiver of estate duty"
    ],
    correct: 0,
    explain: "The income benefit rider pays the nominee a periodic fixed income during the plan's remaining term, rather than a single lump sum on death."
  },
  {
    q: "Group insurance (e.g. an employer covering all employees under one policy) typically results in:",
    options: [
      "A lower premium than an individual policy for the same cover, and simpler claim processing",
      "A higher premium than individual cover",
      "No death benefit",
      "Compulsory medical tests for every employee"
    ],
    correct: 0,
    explain: "Group insurance is cheaper than individual cover for the same protection, and claim processing is simpler, often facilitated by the employer."
  },

  /* ---------- 2.4 Facilities ---------- */
  {
    q: "Why is it NOT possible to take a loan against a pure protection (term) policy?",
    options: [
      "It does not acquire any surrender value, so there is no security to lend against",
      "Term policies cannot be assigned",
      "IRDAI prohibits all loans against life policies",
      "Term policies have no nominee"
    ],
    correct: 0,
    explain: "Loans are given against surrender value; pure protection policies never acquire one. Only investment-cum-insurance policies can be borrowed against."
  },
  {
    q: "For a loan against an investment-cum-insurance policy, the interest rate charged by the insurance company on loans against its own policies is normally:",
    options: [
      "Lower than the rate charged by banks/NBFCs",
      "Higher than the rate charged by banks/NBFCs",
      "The same as banks/NBFCs",
      "Zero"
    ],
    correct: 0,
    explain: "Insurers usually charge a lower rate on loans against their own policies. Borrowing from a bank/NBFC makes sense mainly to combine several policies into one larger loan, or to rebuild a damaged credit score."
  },
  {
    q: "Assignment of a life insurance policy:",
    options: [
      "Transfers the interests in the policy and cancels an existing nomination (except assignment to the insurer for its own loan)",
      "Never affects the nomination",
      "Can only be done by the nominee",
      "Automatically doubles the sum assured"
    ],
    correct: 0,
    explain: "Assignment transfers the policy's interests (often to take a loan) and cancels an existing nomination — except when made to the insurer for its own loan, where the nomination is only affected to the extent of the insurer's interest. It is reinstated on re-assignment and needs the insurer's endorsement."
  },
  {
    scenario: "Vikram assigns his policy to a bank to secure a loan, cancelling his nomination. Two years later he repays the loan and the policy is re-assigned back to him.",
    q: "What happens to the earlier nomination?",
    options: [
      "It gets reinstated once the policy is re-assigned back to the policyholder",
      "It remains permanently cancelled",
      "It transfers to the bank",
      "A fresh medical exam is required to restore it"
    ],
    correct: 0,
    explain: "Assignment cancels the nomination, but the nomination is reinstated after the policy is re-assigned back to the policyholder."
  },

  /* ---------- 2.5 MWPA ---------- */
  {
    q: "A key purpose of buying a life policy under the Married Women's Property Act, 1874 is to:",
    options: [
      "Protect the policy proceeds from the insured's creditors",
      "Guarantee a higher investment return",
      "Allow the nominee to be changed freely",
      "Avoid paying any premium"
    ],
    correct: 0,
    explain: "An MWPA policy creates a trust that ring-fences the proceeds from the insured's creditors — a protection that ordinary (even beneficial) nomination does not provide."
  },
  {
    q: "Under a policy bought under the MWP Act, the nominees can be:",
    options: [
      "Only the spouse, children, or both (not parents)",
      "Any relative including parents",
      "Only the parents",
      "Any person, including business partners"
    ],
    correct: 0,
    explain: "Under the MWP Act, nominees can only be the spouse or children or both — parents cannot be nominees."
  },
  {
    scenario: "Mahesh buys a term policy under the MWP Act naming his wife as nominee. Some years later they divorce.",
    q: "What is the position of his ex-wife under the policy?",
    options: [
      "She continues to be the nominee — MWPA nominees cannot be changed, even after divorce",
      "She is automatically removed as nominee on divorce",
      "Mahesh can now claim the survival benefits himself",
      "The policy lapses automatically"
    ],
    correct: 0,
    explain: "Under an MWPA policy the nominees cannot be changed after purchase; even after divorce the wife continues as nominee. The insured himself can lay no claim to the policy amounts."
  },
  {
    q: "The declaration that a policy is being bought under the MWP Act must be made:",
    options: [
      "Only at the time of buying the policy",
      "Any time during the policy term",
      "Only after the first claim",
      "Only at maturity"
    ],
    correct: 0,
    explain: "The MWP Act declaration must be made only at the time of buying the policy; it can be made for any life policy, including term policies bought online or offline."
  },

  /* ---------- 2.6 Multiple companies / telescopic ---------- */
  {
    q: "Life insurance premiums are described as 'telescopic', which means:",
    options: [
      "A larger sum assured costs less per ₹1,000 of cover — premiums do not rise in the same proportion as the sum assured",
      "Premiums rise faster than the sum assured",
      "Premiums are the same regardless of cover",
      "Premiums reduce every year automatically"
    ],
    correct: 0,
    explain: "Telescopic pricing means the premium per ₹1,000 of cover falls as the sum assured rises, so a bigger cover is proportionately cheaper — which is why it often pays to buy from the same company."
  },
  {
    scenario: "Ramesh needs ₹8 crore of term cover, but his insurer's telescopic rates stop improving beyond ₹2 crore.",
    q: "What is the suggested approach?",
    options: [
      "Buy 4 policies of ₹2 crore each from the same company, keeping the option to give up policies as the need falls",
      "Buy a single ₹8 crore policy at any cost",
      "Split the cover across 8 different insurers",
      "Buy ₹2 crore only and self-insure the rest"
    ],
    correct: 0,
    explain: "Since telescopic rates stop after ₹2 crore, buying 4 × ₹2 crore policies from the same company retains the pricing benefit and lets the insured surrender individual policies later as the insurance need reduces."
  },
  {
    q: "Failing to disclose existing policies and pending proposals with other insurers on the proposal form:",
    options: [
      "Is treated as omission of a material fact and can be grounds to repudiate a claim or cancel the policy within the first 3 years",
      "Has no consequence whatsoever",
      "Only reduces the sum assured",
      "Automatically voids the policy after 10 years"
    ],
    correct: 0,
    explain: "The proposal form must list all existing policies and pending proposals so the insurer can assess the total risk cover. Omission is treated as failure to disclose a material fact and can lead to repudiation/cancellation within the first 3 years."
  },

  /* ---------- 2.7 Evaluate ---------- */
  {
    q: "In a traditional (non-ULIP) life insurance policy, the investment returns are typically:",
    options: [
      "Low, and the insured cannot choose the type of investment made by the insurer",
      "High and market-linked with full fund choice",
      "Guaranteed at 8% or more",
      "Identical to equity mutual fund returns"
    ],
    correct: 0,
    explain: "In traditional policies the insured cannot choose the investment, and returns are normally low. The inherent return is judged from the higher maturity value in the official illustration."
  },
  {
    scenario: "A traditional endowment policy is issued on 1 July 2023 with an annual premium of ₹7,00,000.",
    q: "How are the maturity proceeds taxed?",
    options: [
      "As 'Income from other sources' — premium exceeds ₹5 lakh and it was issued on/after 1 Apr 2023",
      "Fully tax-free",
      "As capital gains, like a ULIP above ₹2.5 lakh premium",
      "As salary income"
    ],
    correct: 0,
    explain: "For traditional policies issued on/after 1 Apr 2023 with premium above ₹5 lakh, the maturity proceeds are taxable as 'Income from other sources'. (The ₹2.5 lakh capital-gains rule is separate and applies to ULIPs.)"
  },
  {
    q: "When evaluating any investment-cum-insurance product, the correct sequence is to:",
    options: [
      "Decouple the two elements, check whether the risk cover is adequate first (eliminate if not), then evaluate the investment return separately",
      "Check the investment return first, then the cover",
      "Only compare the premium with competitors",
      "Buy it if it bundles investment and insurance conveniently"
    ],
    correct: 0,
    explain: "An insurer's primary job is risk coverage. Decouple insurance from investment; if the risk cover is inadequate the product fails its primary goal and is eliminated. Only then is the investment return assessed against comparable products."
  },
  {
    q: "Which is a valid consideration when choosing between online and offline TERM plans?",
    options: [
      "The insurer's brand/longevity, actual availability of the sought cover, premium after health & financial evaluation, riders, and the IRDAI claim settlement ratio",
      "Only the colour of the insurer's website",
      "Only whether the agent is a friend",
      "Only the maturity bonus"
    ],
    correct: 0,
    explain: "Considerations include brand faith, real availability of the cover/tenure, the premium after evaluating health and finances, rider availability, and the published claim settlement ratio (less critical if full disclosure was made)."
  },
  {
    q: "Online insurance plans, compared with offline plans, are often:",
    options: [
      "Cheaper, and offer instant policy issuance; brokers/web aggregators also provide online comparisons",
      "Always more expensive",
      "Unavailable to residents",
      "Not recognised by IRDAI"
    ],
    correct: 0,
    explain: "Many online plans are tailor-made, cheaper than offline counterparts, and offer instant issuance. Insurance brokers and web aggregators provide online comparisons and payment/issuance services."
  },

  /* ---------- 2.8 Global coverage ---------- */
  {
    q: "Does a life insurance policy pay if the insured's death occurs outside India?",
    options: [
      "Yes — defined-benefit policies (life, critical illness, accidental death) pay wherever the covered risk occurs",
      "No — Indian policies only cover deaths within India",
      "Only if the insured informed the insurer before travelling",
      "Only for accidental death, never natural death"
    ],
    correct: 0,
    explain: "Defined-benefit policies such as life, critical-illness and accidental-death cover pay wherever the covered risk occurs, since the event and its circumstances can be verified anywhere in the world."
  },
  {
    q: "A resident Indian can buy a life insurance policy from an insurer not registered in India by using:",
    options: [
      "The Liberalised Remittance Scheme (LRS), up to USD 2,50,000 per annum",
      "The IRDAI standard product route",
      "A special SEBI window",
      "No route — it is entirely prohibited"
    ],
    correct: 0,
    explain: "Residents can use their LRS entitlement of up to USD 2,50,000 per annum to buy foreign-currency life policies of foreign insurers — useful for forex-denominated goals like overseas education."
  },
  {
    scenario: "Neha buys a foreign-currency investment-cum-insurance policy from an overseas insurer under the LRS to fund her child's education abroad.",
    q: "What is the key caution she must keep in mind?",
    options: [
      "Claims and grievance redress are governed by the regulations of the country where the policy is issued",
      "IRDAI will settle any claim disputes for her",
      "The policy is automatically tax-free in India",
      "The LRS limit does not apply to insurance"
    ],
    correct: 0,
    explain: "Foreign policies and their grievance-redress mechanisms are governed by the issuing country's regulations, so caution is needed. The investment portion should be evaluated only after protection needs are met, and compared with similar LRS forex instruments."
  },

  /* ---------- Integrative ---------- */
  {
    q: "The single principle that governs the choice of ALL life insurance products in this chapter is:",
    options: [
      "Protection comes first — assess the adequacy of risk cover before any investment return",
      "Always pick the plan with the highest maturity value",
      "Always choose the cheapest premium regardless of cover",
      "Bundling insurance with investment is always best"
    ],
    correct: 0,
    explain: "Whether term, endowment, whole-life, ULIP or a foreign policy, the primary purpose is protection. Adequacy of risk cover is tested first; only then is the investment element evaluated separately."
  },
  {
    q: "Nomination under a life insurance policy can be:",
    options: [
      "Made at the time of taking the policy or later, and changed any number of times",
      "Made only once and never changed",
      "Made only by the insurer",
      "Changed only with a court order"
    ],
    correct: 0,
    explain: "Nomination is the policyholder's right to name who receives the death claim; it can be made at outset or subsequently and changed any number of times (except under an MWPA policy, where it is fixed)."
  },
  {
    q: "All life insurance and reinsurance policies are exempted from Goods and Services Tax (GST) with effect from:",
    options: ["22 September 2025", "1 February 2021", "1 April 2023", "22 September 2024"],
    correct: 0,
    explain: "All life insurance/reinsurance policies are exempt from GST with effect from 22 September 2025 (mirroring the health-insurance GST exemption)."
  }
];
