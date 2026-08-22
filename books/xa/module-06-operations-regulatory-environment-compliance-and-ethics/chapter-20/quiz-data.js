/* ==========================================================================
   NISM Learn — Chapter 20: Grievance Redress Mechanism
   MCQ bank ONLY. Exposes a single global: window.NISM_CH20_QUESTIONS.
   Shapes:
     { q, options:[...], correct, explain }                 // recall
     { scenario, q, options:[...], correct, explain }        // case-study
   `correct` indexes the ORIGINAL options order (engine shuffles at render).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH20_QUESTIONS = [

  /* ---------------- 20.1 Consumer Protection Act ---------------- */
  {
    q: "The Consumer Protection Act, 1986 was enacted to:",
    options: [
      "Provide for better protection of the interests of consumers, including consumer councils and authorities for settling consumer disputes",
      "Regulate the listing of securities on stock exchanges",
      "Set interest rates for bank deposits",
      "License insurance companies"
    ],
    correct: 0,
    explain: "The Consumer Protection Act, 1986 provides for better protection of consumers' interests and for establishing consumer councils and other authorities for the settlement of consumer disputes."
  },
  {
    q: "Under the Consumer Protection Act, who is a 'consumer'?",
    options: [
      "A person who buys goods or hires/avails services for a consideration — but NOT one who obtains them for resale or for a commercial purpose",
      "Only a person who buys goods in cash, never on deferred payment",
      "Any person, including those buying for resale or commercial use",
      "Only registered investors in the securities market"
    ],
    correct: 0,
    explain: "A consumer buys goods or hires/avails services for a consideration (paid, promised, part-paid or under deferred payment), including a user/beneficiary with approval — but excludes a person obtaining them for resale or any commercial purpose."
  },
  {
    scenario: "A trader buys a bulk consignment of goods purely to resell them at a profit and later has a dispute with the seller.",
    q: "Is the trader a 'consumer' under the Consumer Protection Act, 1986?",
    options: [
      "No — a person who obtains goods for resale or for a commercial purpose is excluded from the definition of consumer",
      "Yes — anyone who buys goods is a consumer",
      "Yes, but only if the goods were paid for in full",
      "No, because only services (not goods) are covered"
    ],
    correct: 0,
    explain: "The definition of consumer expressly excludes a person who obtains goods for resale or for any commercial purpose. Buying to resell for profit is a commercial purpose, so the trader is not a 'consumer'."
  },

  /* ---------------- 20.2 Investor Grievance Redressal Mechanism ---------------- */
  {
    q: "What is the investor's first line of action when they have a grievance about a financial product or service?",
    options: [
      "Approach the concerned product or service provider to get the grievance resolved",
      "File a case directly in the Supreme Court",
      "Approach the Securities Appellate Tribunal first",
      "Complain to the Ministry of Company Affairs"
    ],
    correct: 0,
    explain: "The first line of action is to approach the concerned product/service provider. If it is not resolved to the investor's satisfaction, they can then approach the regulator of the respective industry."
  },
  {
    q: "Which of the following is a typical subject of an investor grievance?",
    options: [
      "The accuracy/extent of information or advice, fees/expenses/penalty charged, or a delayed or unattended service request",
      "The colour scheme of an adviser's office",
      "The weather affecting market prices",
      "The number of employees a broker has"
    ],
    correct: 0,
    explain: "Grievances typically concern the accuracy/extent of information or advice, fees or expenses or penalty charged in any form, or a service request that was delayed or left unattended."
  },

  /* ---------------- 20.3 Robust grievance redress system ---------------- */
  {
    q: "In a robust grievance system, the 'source of receipt of complaint' feature ensures that complaints arise from:",
    options: [
      "Relevant issues covered under acts/regulations such as the SEBI Act, SCRA, Depositories Act and relevant provisions of the Companies Act, 2013",
      "Any topic the investor feels strongly about",
      "Only verbal complaints made in person",
      "Complaints against any company worldwide"
    ],
    correct: 0,
    explain: "The 'source of receipt' feature ensures complaints arise from relevant issues covered under the SEBI Act, Securities Contract Regulation Act, Depositories Act and relevant provisions of the Companies Act, 2013 — so the right complaints are addressed."
  },
  {
    q: "Why does a robust system record the 'date and time of receipt of complaint'?",
    options: [
      "Because complaints must be received within a specific time period per the relevant acts, so the system isn't clogged with old, hard-to-dispose complaints",
      "To bill the investor by the hour",
      "To rank complaints by the investor's wealth",
      "To decide the investor's tax liability"
    ],
    correct: 0,
    explain: "Complaints must be received within a specific time period mentioned in the relevant acts. Recording date/time keeps the system from being clogged with old complaints, balancing how long complaints will be entertained."
  },
  {
    q: "The 'status of resolution / action taken' feature is delivered to the investor mainly through:",
    options: [
      "An Action Taken Report (ATR), or intimation that the complaint is resolved",
      "A press release to the media",
      "A public notice in the newspaper",
      "A phone call to the regulator's chairman"
    ],
    correct: 0,
    explain: "The investor sees progress through the Action Taken Report (ATR); if resolved, that is intimated. This increases investor confidence that action is being taken on the complaint."
  },
  {
    q: "The 'time taken for resolution (ageing report)' matters because:",
    options: [
      "A complaint must be resolved in a specific time so there is closure; if it drags on indefinitely, confidence in the whole system erodes",
      "Older complaints automatically win",
      "The regulator charges more for slow resolution",
      "It determines the adviser's registration number"
    ],
    correct: 0,
    explain: "Complaints must be resolved in a specific time period so the investor gets closure. A complaint dragging on indefinitely erodes confidence in the entire system — hence the ageing report."
  },
  {
    q: "In a robust system, where does a complaint normally 'land' first before being escalated?",
    options: [
      "The internal system of the entity complained against, giving a chance to resolve it at the source, before escalation to an outside agency",
      "The Supreme Court",
      "An external agency, always, before the entity sees it",
      "The Ministry of Company Affairs"
    ],
    correct: 0,
    explain: "Normally the first port of landing is the internal system of the entity complained against; only then is it escalated to an outside agency — giving a chance for resolution at the source. An escalation mechanism lets an independent party review if the investor is dissatisfied."
  },

  /* ---------------- 20.4 IA grievance system ---------------- */
  {
    q: "SEBI requires the offices of all Investment Advisers to prominently display:",
    options: [
      "The details of the Compliance Officer and the CEO/Partner/Proprietor — name, address, email and phone number",
      "The adviser's personal bank balance",
      "A list of the adviser's largest clients",
      "The daily closing price of the Sensex"
    ],
    correct: 0,
    explain: "Offices of all IAs must display the Compliance Officer's details and the CEO/Partner/Proprietor's details — name, address, email and phone number — so clients know whom to approach."
  },
  {
    scenario: "A client is not satisfied with how their Investment Adviser handled and responded to a complaint made directly to the adviser.",
    q: "What is the client's next step under SEBI's mandated system?",
    options: [
      "Lodge the grievance with SEBI through the SCORES system",
      "Approach the Insurance Ombudsman",
      "File directly with the NPS Trust",
      "Register with the National Company Law Tribunal"
    ],
    correct: 0,
    explain: "If the client is not satisfied with the intermediary's response, they can lodge the grievance with SEBI through the SCORES system. SEBI has mandated a grievance-redressal system for IAs."
  },

  /* ---------------- 20.5 Capital market / SCORES / ODR ---------------- */
  {
    q: "In the capital market, the correct escalation order for an investor grievance is:",
    options: [
      "First the market participant directly → then SCORES per its guidelines → then online dispute resolution via the ODR portal",
      "First SCORES → then the market participant → then the Supreme Court",
      "First the ODR portal → then the market participant",
      "First the Securities Appellate Tribunal → then SCORES"
    ],
    correct: 0,
    explain: "The investor first lodges directly with the market participant; if not satisfactorily redressed, escalates through SCORES; after exhausting options, may initiate online dispute resolution through the ODR portal."
  },
  {
    q: "SCORES is best described as:",
    options: [
      "The online investor redressal mechanism set up by SEBI for complaints related to all products and entities regulated by it",
      "A stock-trading app run by exchanges",
      "The banking ombudsman's portal",
      "A credit-rating agency"
    ],
    correct: 0,
    explain: "SCORES is SEBI's online investor redressal mechanism for complaints related to all products and entities it regulates — companies that made share issues, mutual funds, PMS, VCFs, and intermediaries such as brokers, merchant bankers, depositories, RTAs, distributors and financial advisers."
  },
  {
    q: "After a complaint is accepted in SCORES, the concerned entity is required to:",
    options: [
      "Respond with an Action Taken Report (ATR) within the stipulated time, with the investor able to check status online",
      "Pay the investor a fixed penalty immediately",
      "Delist from the stock exchange",
      "Refer the matter straight to the Supreme Court"
    ],
    correct: 0,
    explain: "SEBI examines the complaint to confirm it is within its purview, then forwards it to the concerned entity, which must respond with an Action Taken Report (ATR) within the stipulated time. The investor can check status online."
  },
  {
    scenario: "An investor files a SCORES complaint that simply says 'I am not satisfied with the current trading price of my shares' and attaches no supporting documents.",
    q: "How will this be treated?",
    options: [
      "It will not be addressed in SCORES — dissatisfaction with the trading price of shares (and allegations without supporting documents) is outside SCORES",
      "SEBI will set the share price to the investor's satisfaction",
      "It will be forwarded to the Banking Ombudsman",
      "SCORES will award compensation automatically"
    ],
    correct: 0,
    explain: "SCORES does not address complaints that are incomplete/not specific, allegations without supporting documents, or dissatisfaction with the trading price of shares. Such a complaint falls outside SCORES."
  },
  {
    q: "Which of the following complaints does SEBI itself NOT deal with?",
    options: [
      "Complaints against unlisted/delisted/wound-up/liquidated/sick companies, sub-judice matters, and complaints under another regulator's purview",
      "Complaints about a mutual fund's service, with documents",
      "Complaints against a registered broker's conduct",
      "Complaints against a depository participant"
    ],
    correct: 0,
    explain: "SEBI does not deal with complaints against unlisted/delisted/wound-up/liquidated/sick companies, sub-judice matters (under court/quasi-judicial consideration), or complaints falling under the purview of other regulatory bodies."
  },
  {
    q: "Which of these is NOT addressed within SCORES?",
    options: [
      "Seeking an explanation for non-trading or illiquidity of shares, or disputes arising out of a private agreement with a company/intermediary",
      "A documented complaint about a broker overcharging fees",
      "A complaint about a mutual fund's delayed redemption",
      "A complaint against a registrar and transfer agent"
    ],
    correct: 0,
    explain: "SCORES does not address requests for explanation of non-trading/illiquidity of shares, dissatisfaction with trading price, non-listing of a private offer, or disputes arising out of a private agreement with companies/intermediaries."
  },
  {
    q: "Dispute resolution through the ODR portal must be initiated:",
    options: [
      "Within the applicable law of limitation, reckoned from when the issue arose / the date of the last transaction / the disputed transaction, whichever is later",
      "Within 24 hours of the transaction, always",
      "Only after 10 years have passed",
      "Only during market trading hours"
    ],
    correct: 0,
    explain: "ODR can be initiated within the applicable law of limitation, reckoned from the date the issue arose, the date of the last transaction, or the date of the disputed transaction — whichever is later."
  },
  {
    q: "SCORES and ODR are described as alternate dispute redressal mechanisms because they aim to provide:",
    options: [
      "Easy, quick and inexpensive resolution of problems — while the investor still retains the option to approach the relevant court within the law of limitation",
      "Guaranteed compensation regardless of the merits",
      "A replacement for all courts, removing the judicial option",
      "Free investment advice"
    ],
    correct: 0,
    explain: "These are alternate dispute redressal mechanisms for easy, quick and inexpensive resolution. The investor still has the option to approach the relevant court, initiating the judicial process within the time provided by the law of limitation."
  },

  /* ---------------- 20.6 Banking ---------------- */
  {
    q: "The Banking Codes and Standards Board of India (BCSBI) was set up by the RBI as:",
    options: [
      "An independent, autonomous watchdog to ensure customers get fair treatment in their dealings with banks",
      "A commercial bank owned by the government",
      "A stock exchange for bank shares",
      "A department of the Ministry of Finance that sets interest rates"
    ],
    correct: 0,
    explain: "The RBI set up the BCSBI as an independent autonomous watchdog to ensure fair treatment of customers. It published the 'Code of Banks' Commitments to Customers', setting minimum standards and benchmarks in customer service."
  },
  {
    q: "The BCSBI's 'Code of Banks' Commitments to Customers' functions as banks':",
    options: [
      "Fair Practice Code, voluntarily adopted, setting minimum standards of banking practice and benchmarks in customer service",
      "Mandatory interest-rate schedule",
      "List of prohibited customers",
      "Annual profit target"
    ],
    correct: 0,
    explain: "Most banks are BCSBI members and have voluntarily adopted the Code as their Fair Practice Code in dealings with customers; it sets minimum standards of banking practice and benchmarks in customer service."
  },
  {
    q: "The Banking Ombudsman is appointed by which authority, and hears credit-card complaints against whom?",
    options: [
      "Appointed by the RBI; hears complaints related to credit cards issued by banks and by Non-Banking Finance Companies (NBFCs)",
      "Appointed by SEBI; only against listed companies",
      "Appointed by IRDAI; only against insurers",
      "Appointed by the courts; only against the government"
    ],
    correct: 0,
    explain: "The Banking Ombudsman is appointed by the RBI to address complaints about banking services, including credit cards issued by banks and by NBFCs, under the Integrated Ombudsman Scheme."
  },
  {
    scenario: "Meena complains directly to her bank about a wrongly charged penalty. One month passes with no satisfactory resolution.",
    q: "What can Meena do next?",
    options: [
      "Approach the Banking Ombudsman, since the bank did not provide a satisfactory resolution within one month",
      "Approach the Insurance Ombudsman",
      "File with the NPS Trust",
      "Approach SEBI through SCORES"
    ],
    correct: 0,
    explain: "If a grievance addressed directly to the bank does not get a satisfactory resolution within one month, the individual can approach the Banking Ombudsman."
  },
  {
    q: "Under the Integrated Ombudsman Scheme, if a valid complaint cannot be settled with the bank within one month, the ombudsman will:",
    options: [
      "Pass an award after giving both sides a chance to state their case",
      "Automatically fine the customer",
      "Refer the matter to SEBI",
      "Close the complaint with no action"
    ],
    correct: 0,
    explain: "If the complaint is valid the ombudsman attempts a settlement with the bank; if a settlement does not happen within one month, the ombudsman passes an award after giving both sides a chance to state their case."
  },
  {
    q: "Which disputes may be referred to the Banking (Integrated) Ombudsman?",
    options: [
      "Interest charged/credited, penalty or fees, ATM/debit/credit card issues, refusal of a loan without valid reasons, and receipt/payment of funds",
      "Only disputes about the stock market",
      "Only insurance claim rejections",
      "Only pension fund performance"
    ],
    correct: 0,
    explain: "The Integrated Ombudsman Scheme covers receipt/payment of funds, interest charged or credited, penalty or fees, disputes on ATM/debit/credit cards, refusing a loan without valid reasons, and similar banking service issues."
  },
  {
    q: "A bank's internal complaint resolution typically follows which three-tier structure before the ombudsman?",
    options: [
      "Branch Manager → Zonal Manager → GM-Customer Service",
      "Teller → Auditor → Chairman",
      "SEBI → RBI → IRDAI",
      "Branch → Court → Supreme Court"
    ],
    correct: 0,
    explain: "Banks typically have a three-tier complaint resolution system — Branch Manager, Zonal Manager and GM-Customer Service — after which a dissatisfied complainant may approach the Integrated Ombudsman."
  },
  {
    q: "CPGRAMS, referenced in the banking grievance process, stands for and does what?",
    options: [
      "Centralized Public Grievance Redress and Monitoring System — grievances are forwarded through it to concerned organisations for resolution, monitored and reviewed (www.pgportal.gov.in)",
      "Central Payment Gateway for Retail And Market Settlement — it settles trades",
      "Consumer Protection Grievance And Monitoring Solution — run by IRDAI",
      "Capital Public Grievance Redress And Market System — run by SEBI"
    ],
    correct: 0,
    explain: "CPGRAMS is the Centralized Public Grievance Redress and Monitoring System; grievances are processed and forwarded through it to concerned organisations for resolution/disposal, then monitored and periodically reviewed. The portal is www.pgportal.gov.in."
  },

  /* ---------------- 20.7 Insurance ---------------- */
  {
    q: "In insurance, a 'grievance/complaint' is defined as:",
    options: [
      "Any communication expressing dissatisfaction about an action or lack of action about the standard/deficiency of service of an insurer/intermediary, or asking for remedial action",
      "Any request for a new insurance policy",
      "A request to increase the sum assured",
      "A routine premium payment"
    ],
    correct: 0,
    explain: "A grievance/complaint is any communication expressing dissatisfaction about an action or lack of action about the standard of service/deficiency of service of an insurance company and/or intermediary, or asking for remedial action."
  },
  {
    q: "The Insurance Ombudsman is appointed by whom, and under which rules?",
    options: [
      "By the Government of India, under the Redressal of Public Grievance Rules, 1998",
      "By the RBI, under the Banking Regulation Act",
      "By SEBI, under the SEBI Act",
      "By the insurer's board, under company bye-laws"
    ],
    correct: 0,
    explain: "An Insurance Ombudsman is appointed by the Government of India under the Redressal of Public Grievance Rules, 1998, to hear grievances against insurers/intermediaries."
  },
  {
    q: "Which of the following is a valid ground for a complaint to the Insurance Ombudsman?",
    options: [
      "Partial or total repudiation of claims, disputes about premium, disputes on the legal construction of policies re claims, delay in claim settlement, or non-issue of documents after premium payment",
      "Dissatisfaction with the stock market",
      "A dispute about a bank ATM card",
      "A pension fund's investment returns"
    ],
    correct: 0,
    explain: "Grounds include partial/total repudiation of claims; disputes about premium paid/payable; disputes on the legal construction of policies relating to claims; delay in claim settlement; and non-issue of any insurance document after payment of premium."
  },
  {
    q: "When the Insurance Ombudsman takes up a complaint for settlement through mediation, the recommendation must be made:",
    options: [
      "Within one month of receipt of the complaint — provided both complainant and insurer request mediation in writing by mutual agreement",
      "Within one year, with no time limit on acceptance",
      "Within 45 days, but only for claim disputes",
      "Immediately on receipt, without hearing the insurer"
    ],
    correct: 0,
    explain: "If both parties, by mutual agreement, request mediation in writing, the Ombudsman makes a fair recommendation within one month of receipt of the complaint, sent to both complainant and insurer."
  },
  {
    scenario: "The Insurance Ombudsman's attempt to settle Rohan's complaint by recommendation fails.",
    q: "What happens next, and in what timeframe?",
    options: [
      "The Ombudsman disposes of the complaint by passing a speaking Award within 3 months of receipt; Rohan must convey acceptance in full and final settlement within one month",
      "The complaint is closed with no further action",
      "The Ombudsman passes an award within 45 days and no acceptance is needed",
      "The matter goes straight to the Supreme Court"
    ],
    correct: 0,
    explain: "If settlement by recommendation does not work, the Ombudsman passes a speaking Award within 3 months of receipt of the complaint; the complainant must convey acceptance in full and final settlement within one month to the insurer."
  },
  {
    q: "IRDAI's facility for online registration and tracking of policyholders' complaints is called:",
    options: [
      "IGMS — the Integrated Grievance Management System",
      "SCORES",
      "CPGRAMS",
      "The Integrated Ombudsman Scheme"
    ],
    correct: 0,
    explain: "IRDAI offers the Integrated Grievance Management System (IGMS) for online registration of policyholders' complaints, with online status tracking; a complaint registered through IGMS is forwarded to the concerned insurer."
  },
  {
    q: "If an insurance buyer is unhappy even with the Insurance Ombudsman's decision, what recourse remains?",
    options: [
      "The normal judicial process through courts, as well as under the Consumer Protection Act, 1986",
      "No further recourse is available",
      "Only SCORES",
      "Only the Banking Ombudsman"
    ],
    correct: 0,
    explain: "If the buyer is not happy with the Ombudsman's decision, the normal judicial process through courts, and recourse under the Consumer Protection Act, 1986, is available."
  },

  /* ---------------- 20.8 Pension sector / NPS ---------------- */
  {
    q: "For pension schemes issued by mutual funds versus insurance companies, the applicable grievance systems are:",
    options: [
      "MF pension schemes → SEBI's SCORES system; insurance-company pension schemes → IRDAI's grievance redressal system",
      "Both follow SCORES",
      "Both follow the IRDAI system",
      "Both follow the Banking Ombudsman"
    ],
    correct: 0,
    explain: "Pension schemes issued by mutual funds are regulated by SEBI (follow SCORES); pension schemes issued by insurance companies are regulated by IRDAI (follow the IRDAI grievance redressal system)."
  },
  {
    q: "For the National Pension System (NPS), the Central Recordkeeping Agency (CRA) appointed by PFRDA is:",
    options: [
      "NSDL e-Governance Infrastructure Limited",
      "The Reserve Bank of India",
      "The Insurance Ombudsman",
      "The National Company Law Tribunal"
    ],
    correct: 0,
    explain: "NSDL e-Governance Infrastructure Limited is the Central Recordkeeping Agency (CRA) appointed by PFRDA for the NPS. A subscriber can raise a grievance with the CRA on its website; resolution is via a call centre or written communication."
  },
  {
    q: "Where are NPS operations handled, and who is appointed there for grievances?",
    options: [
      "Only through the Head Office of NSDL e-Gov at Mumbai, where a Grievance Redressal Officer (GRO) is appointed",
      "At every bank branch, by the Branch Manager",
      "At IRDAI, by the Insurance Ombudsman",
      "At SEBI, by the Compliance Officer"
    ],
    correct: 0,
    explain: "NPS operations are handled only through NSDL e-Gov's Head Office at Mumbai, where a Grievance Redressal Officer (GRO) is appointed."
  },
  {
    scenario: "Anil, an NPS subscriber, files a grievance with the CRA. Thirty days pass and it remains unresolved.",
    q: "What can Anil do, under the PFRDA (Redressal of Subscriber Grievance) Regulations, 2015?",
    options: [
      "Escalate the grievance to the NPS Trust, which follows up with the intermediary and responds within thirty days",
      "Escalate directly to the Supreme Court",
      "File with the Banking Ombudsman",
      "Lodge a complaint on SCORES"
    ],
    correct: 0,
    explain: "If the grievance is not resolved within thirty days by the CRA/intermediary, the subscriber may escalate to the NPS Trust, which calls for resolution and responds to the subscriber within thirty days."
  },
  {
    q: "Under the NPS grievance regulations, if the NPS Trust does not resolve the grievance within thirty days or the subscriber is dissatisfied with its resolution, the subscriber may:",
    options: [
      "Prefer an appeal to the Ombudsman against the concerned intermediary or entity",
      "Do nothing further",
      "Approach the Insurance Ombudsman",
      "Register the complaint on IGMS"
    ],
    correct: 0,
    explain: "A subscriber whose grievance is not resolved by the intermediary within thirty days of submission to the NPS Trust, or who is dissatisfied with the NPS Trust's resolution, may prefer an appeal to the Ombudsman."
  },
  {
    q: "Which of the following is EXCLUDED from an NPS 'grievance/complaint'?",
    options: [
      "Complaints that are incomplete/not specific, mere suggestions, requests for guidance/explanation, matters beyond PFRDA's powers, disputes between intermediaries, and sub-judice matters",
      "A documented complaint about deficiency of service by an NPS intermediary",
      "A complaint seeking remedial action for an act of omission by an intermediary",
      "A complaint about an entity governed by the PFRDA Act"
    ],
    correct: 0,
    explain: "NPS grievances exclude complaints that are incomplete/not specific, communications offering suggestions, communications seeking guidance/explanation, matters beyond PFRDA's powers/Act, disputes between intermediaries, and sub-judice matters (except those in PFRDA's exclusive domain)."
  },

  /* ---------------- 20.9 Securities Appellate Tribunal ---------------- */
  {
    q: "According to Section 15U of the SEBI Act, the Securities Appellate Tribunal (SAT):",
    options: [
      "Is not bound by the Code of Civil Procedure, but is guided by the principles of natural justice and regulates its own procedure",
      "Must strictly follow the Code of Civil Procedure in every respect",
      "Cannot summon witnesses or examine documents",
      "Is a department within a stock exchange"
    ],
    correct: 0,
    explain: "Under Section 15U, the SAT is not bound by the Code of Civil Procedure but is guided by the principles of natural justice and has power to regulate its own procedure — while holding certain civil-court powers (summoning, discovery, evidence on affidavit, etc.)."
  },
  {
    q: "Section 15T of the SEBI Act ('Appeal to the SAT') allows an appeal by a person aggrieved by an order of:",
    options: [
      "The SEBI Board, an adjudicating officer appointed under the SEBI Act, or the IRDAI or the PFRDA",
      "The Banking Ombudsman only",
      "The Supreme Court only",
      "A private company's board of directors"
    ],
    correct: 0,
    explain: "Section 15T gives the right to appeal to the SAT to any person aggrieved by an order of (i) the SEBI Board, (ii) an adjudicating officer under the SEBI Act, or (iii) the IRDAI or the PFRDA."
  },
  {
    q: "Within what period must an appeal be filed with the SAT?",
    options: [
      "Within 45 days from the date the copy of the order (of SEBI / Adjudicating Officer / IRDAI / PFRDA) is received, in the specified form with the prescribed fee",
      "Within 60 days",
      "Within 90 days",
      "Within 30 days"
    ],
    correct: 0,
    explain: "Every appeal to the SAT should be filed within 45 days from the date a copy of the order is received, in the specified form along with the prescribed fee."
  },
  {
    scenario: "A firm is aggrieved by a decision of the Securities Appellate Tribunal and wants to challenge it further.",
    q: "What is the recourse, and the time limit?",
    options: [
      "File an appeal to the Supreme Court within 60 days from the date the SAT's decision/order is communicated",
      "File a fresh complaint on SCORES within 45 days",
      "Approach the Banking Ombudsman within 30 days",
      "There is no appeal beyond the SAT"
    ],
    correct: 0,
    explain: "Any person aggrieved by a decision or order of the SAT may file an appeal to the Supreme Court within 60 days from the date the SAT's decision/order is communicated to them."
  },
  {
    q: "Any proceeding before the SAT is deemed to be:",
    options: [
      "A judicial proceeding within the meaning of the provisions of the Indian Penal Code",
      "A private arbitration with no legal status",
      "An informal mediation only",
      "An administrative meeting of SEBI staff"
    ],
    correct: 0,
    explain: "Any proceeding before the SAT is deemed to be a judicial proceeding within the meaning of the provisions of the Indian Penal Code; the SAT also holds specified civil-court powers."
  },

  /* ---------------- 20.10 Other redressal fora ---------------- */
  {
    q: "A complaint about non-repayment of deposits or interest by an NBFC should be registered with:",
    options: [
      "The National Company Law Tribunal (NCLT) or the Consumer forum, in the prescribed form for the area of the company's registered office",
      "SEBI through SCORES",
      "The Insurance Ombudsman",
      "The Banking Ombudsman only"
    ],
    correct: 0,
    explain: "A complaint on non-repayment of deposits or payment of interest by an NBFC should be registered with the NCLT or the Consumer forum, in the prescribed form under the NCLT Rules for the area where the company's registered office is situated."
  },
  {
    q: "Complaints about non-repayment of company deposits, or about bonds/debentures issued by unlisted companies, can be filed with:",
    options: [
      "The Ministry of Company Affairs, on its website",
      "The Securities Appellate Tribunal",
      "IRDAI via IGMS",
      "The NPS Trust"
    ],
    correct: 0,
    explain: "If the complaint relates to non-repayment of deposits by companies, or to bonds/debentures issued by unlisted companies, it can be filed with the Ministry of Company Affairs on its website."
  },

  /* ---------------- Cross-cutting synthesis / routing scenarios ---------------- */
  {
    scenario: "Sunita bought units of a mutual fund and is unhappy with the fund house's service. She complained to the fund house but got no satisfactory response.",
    q: "Which redress route applies?",
    options: [
      "Escalate to SEBI through SCORES (mutual funds are SEBI-regulated), and, if still unresolved, use the ODR portal",
      "Approach the Insurance Ombudsman",
      "File with the NPS Trust",
      "Register with the Banking Ombudsman"
    ],
    correct: 0,
    explain: "Mutual funds are regulated by SEBI, so after the fund house, the grievance escalates through SCORES, and thereafter online dispute resolution via the ODR portal is available."
  },
  {
    scenario: "Faizal's health-insurance claim was partially repudiated by his insurer, and the insurer's grievance cell did not resolve it satisfactorily.",
    q: "What is Faizal's escalation path?",
    options: [
      "Escalate to IRDAI (e.g. via IGMS) and, if still unsatisfied, approach the Insurance Ombudsman; courts and the Consumer Protection Act remain available thereafter",
      "Escalate to SEBI through SCORES",
      "Escalate directly to the Securities Appellate Tribunal",
      "File with the NPS Trust"
    ],
    correct: 0,
    explain: "Insurance grievances go first to the insurer, then IRDAI (via IGMS), then the Insurance Ombudsman (partial/total repudiation of claims is a valid ground). If still unhappy, courts and the Consumer Protection Act, 1986 are available."
  },
  {
    scenario: "Ravi holds an NPS account and is dissatisfied with a service deficiency by an NPS intermediary. The CRA has not resolved it in 30 days.",
    q: "Where does Ravi escalate?",
    options: [
      "To the NPS Trust (under PFRDA's 2015 regulations); if still unresolved/unsatisfied, he may appeal to the Ombudsman",
      "To SEBI through SCORES",
      "To the Banking Ombudsman",
      "To the National Company Law Tribunal"
    ],
    correct: 0,
    explain: "For NPS, unresolved grievances after 30 days escalate to the NPS Trust; if the Trust does not resolve within 30 days or the subscriber is dissatisfied, an appeal to the Ombudsman may be preferred."
  },
  {
    scenario: "A company is aggrieved by an adjudicating officer's order passed under the SEBI Act imposing a penalty.",
    q: "What is the correct forum and time limit for challenging it?",
    options: [
      "Appeal to the Securities Appellate Tribunal within 45 days of receiving the order",
      "Appeal to the Banking Ombudsman within one month",
      "Complain on SCORES within 30 days",
      "Appeal to the Supreme Court within 60 days directly"
    ],
    correct: 0,
    explain: "An order by an adjudicating officer under the SEBI Act is appealable to the SAT (Section 15T) within 45 days. Only a SAT decision is then appealable to the Supreme Court, within 60 days."
  },
  {
    scenario: "A depositor cannot get back a fixed deposit placed with an NBFC, and interest has stopped.",
    q: "Which forum is appropriate?",
    options: [
      "The National Company Law Tribunal (NCLT) or the Consumer forum",
      "SEBI's SCORES portal",
      "The Insurance Ombudsman",
      "The NPS Trust"
    ],
    correct: 0,
    explain: "Non-repayment of deposits or interest by an NBFC is registered with the NCLT or the Consumer forum, in the prescribed form for the area of the company's registered office."
  },
  {
    q: "Across sectors, the common first step in every grievance redress mechanism is to:",
    options: [
      "Approach the concerned product/service provider (or its internal grievance cell) before escalating to a regulator, ombudsman or tribunal",
      "File in the Supreme Court immediately",
      "Approach the Securities Appellate Tribunal first",
      "Contact the Ministry of Company Affairs first"
    ],
    correct: 0,
    explain: "Whether capital markets, banking, insurance or pensions, the investor first approaches the concerned provider/internal system; only if unresolved does the grievance escalate to the regulator/ombudsman/tribunal, and ultimately the courts."
  },
  {
    q: "The 'law of limitation' is relevant to grievance redress because it:",
    options: [
      "Sets a time limit within which different complaints and the judicial process must be initiated",
      "Limits how much compensation can be awarded",
      "Caps the number of complaints per year",
      "Determines the adviser's fees"
    ],
    correct: 0,
    explain: "The law of limitation sets time limits for different types of complaints; the judicial (court) process, and ODR initiation, must be started within the time provided by the law of limitation."
  },
  {
    q: "The Banking Ombudsman and the Insurance Ombudsman are similar in that both:",
    options: [
      "Are approached only after the concerned institution fails to resolve the grievance satisfactorily, and can pass an award after hearing both sides",
      "Are appointed by SEBI",
      "Handle securities-market complaints",
      "Replace the internal grievance cell entirely"
    ],
    correct: 0,
    explain: "Both ombudsmen are approached after the institution's internal mechanism fails to satisfactorily resolve the grievance, and both can pass an award after considering both sides — though they are appointed by the RBI and the Government of India respectively."
  }
];
