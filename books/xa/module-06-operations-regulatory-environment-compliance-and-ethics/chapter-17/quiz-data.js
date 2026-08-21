/* ==========================================================================
   NISM Learn — Chapter 17 question bank
   Operational Aspects of Investment Management
   MCQ bank only. One global: window.NISM_CH17_QUESTIONS.
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   `q`, `scenario` and each option render as HTML.
   ========================================================================== */

window.NISM_CH17_QUESTIONS = [
  /* ---- 17.1 Investors & the investing process ---- */
  {
    q: "Investors in the securities markets are broadly classified into:",
    options: [
      "Individual investors and institutional investors",
      "Rich investors and poor investors",
      "Domestic investors and government investors only",
      "Only companies and trusts"
    ],
    correct: 0,
    explain: "The broad classification is individual investors (residents, minors through guardians, HUF, NRIs, FPIs) and institutional investors (companies, trusts, charitable organisations, societies, pension/insurance funds, banks)."
  },
  {
    q: "How do institutional investors differ from individual investors in their decision-making?",
    options: [
      "They must follow a formal process — the Board/Trustees approve decisions, which must adhere to an approved asset-allocation pattern and be executed by authorised signatories",
      "They can invest without any documentation",
      "They never need Board approval",
      "They are exempt from all SEBI regulations"
    ],
    correct: 0,
    explain: "Institutional investors follow a formal process: the apex body (Board/Trustees) approves decisions, guidelines stipulate asset allocation and risk rules, and authorised signatories execute the documentation."
  },
  {
    q: "SEBI's concept of an 'Accredited Investor' is best described as an investor who:",
    options: [
      "Meets prescribed criteria on net-worth, income or assets under management, and gets access to products matching a greater risk appetite",
      "Has never invested before",
      "Is guaranteed higher returns by SEBI",
      "Cannot invest in mutual funds"
    ],
    correct: 0,
    explain: "Accredited Investors — individuals, sole proprietorships, HUFs, trusts, partnerships or companies meeting net-worth/income/AUM criteria — are expected to have greater ability and inclination for risk, so they can access products meeting that profile."
  },
  {
    scenario: "Ramesh wants to apply in a company's public issue (IPO). The issue is open for a limited subscription period.",
    q: "Since January 1, 2016, payment for a public-issue application must be made only through:",
    options: [
      "The ASBA (Application Supported by Blocked Amount) facility",
      "A physical cash payment at the registrar's office",
      "A post-dated cheque",
      "An outstation demand draft only"
    ],
    correct: 0,
    explain: "With effect from January 1, 2016, public-issue applications must use ASBA — an authorisation to the investor's bank to block the application money and release it only on allotment. SEBI has also introduced UPI with the block-funds (ASBA) facility for retail applications through intermediaries."
  },
  {
    scenario: "An adviser is told a client wants to put money into a Post Office small savings scheme, but the client is an NRI.",
    q: "What is the correct position?",
    options: [
      "NRIs cannot invest in the small savings schemes of the post office",
      "NRIs get double the interest on post office schemes",
      "NRIs must invest at least ₹1 crore in post office schemes",
      "There are no restrictions of any kind on NRI investors"
    ],
    correct: 0,
    explain: "The terms of offer can exclude certain categories of investors. For example, NRIs cannot invest in the small savings schemes of the post office."
  },
  {
    q: "Under Section 114B of the Income Tax Rules, PAN is generally required for most financial market transactions. Which of the following would still typically require a PAN card?",
    options: [
      "A bank fixed deposit exceeding ₹50,000",
      "Opening a Basic Savings Bank Deposit Account (BSBDA)",
      "A micro SIP of ₹40,000 a year by an individual",
      "An insurance premium of ₹30,000 paid in cash"
    ],
    correct: 0,
    explain: "A bank FD exceeding ₹50,000 requires PAN. A BSBDA needs no PAN; micro investments up to ₹50,000 aggregate by individuals are PAN-exempt; and cash insurance premium up to ₹50,000 needs no PAN."
  },
  {
    q: "In the case of mutual funds, shares, bonds and a demat account, the maximum number of joint holders in a purchase application is:",
    options: [
      "3",
      "2",
      "5",
      "Unlimited"
    ],
    correct: 0,
    explain: "MF, shares, bonds, demat accounts, POSB accounts and most company deposits allow up to 3 joint holders. A bank FD, the Senior Citizens Savings Scheme and the NSC allow a maximum of 2. An NPS account is held in the sole name of the subscriber."
  },
  {
    scenario: "A folio is held jointly by Anita (first holder) and her brother Vikas (second holder).",
    q: "Who receives the dividends, redemption proceeds and correspondence, and to whom does the tax liability accrue?",
    options: [
      "The first holder, Anita — payouts, tax benefits/liability and correspondence all go to the first holder",
      "Both holders equally in all respects",
      "The second holder, Vikas",
      "Whoever signs the transaction slip"
    ],
    correct: 0,
    explain: "The first holder's name creates the investment record: all payouts (dividend, interest, redemption), tax benefits/liability and correspondence go to the first holder, though all joint holders' names are maintained in the records."
  },
  {
    q: "Which of the following is NOT one of the mandatory investor-information fields an Investment Adviser must never miss?",
    options: [
      "The investor's social media handle",
      "Risk profiling of the investor",
      "PAN and KYC compliance status",
      "Bank account information of the sole/first holder"
    ],
    correct: 0,
    explain: "Mandatory fields include name, signature, address, bank account details, PAN, KYC compliance and — for an adviser — risk profiling, which is a requirement the adviser should never miss. A social media handle is not required."
  },
  {
    q: "A transaction slip used to make an additional investment in an existing mutual fund folio:",
    options: [
      "Requires only minimum details (name, folio number, scheme, plan) and does NOT need PAN/KYC proof to be submitted separately again",
      "Requires the full KYC and PAN documents to be attached afresh each time",
      "Can only be used to open a brand-new folio",
      "Is not permitted for systematic investment plans"
    ],
    correct: 0,
    explain: "Transaction slips need only minimum details for an existing folio; proof of PAN and KYC compliance need not be provided separately again. Additional investments can be lump sum or via SIP."
  },

  /* ---- 17.2 PAN & KYC process ---- */
  {
    q: "The prescribed form to apply for a PAN is:",
    options: [
      "Form 49A",
      "Form 60/61",
      "Form 15G",
      "Form 26AS"
    ],
    correct: 0,
    explain: "Form 49A is the prescribed application for a PAN, submitted with proof of identity and address. The Income Tax department has tied up with organisations such as UTI and NSDL to accept and verify it."
  },
  {
    scenario: "A client is making a transaction where PAN is mandatory, but he does not have a PAN card.",
    q: "What can he provide instead?",
    options: [
      "A declaration in Form 60/61 giving details of the transaction",
      "Nothing — he simply cannot transact under any circumstances",
      "A photocopy of his voter ID as a PAN substitute",
      "A self-declaration on plain paper with no format"
    ],
    correct: 0,
    explain: "Where PAN is mandatory but unavailable, a declaration in Form 60/61 giving transaction details has to be provided."
  },
  {
    scenario: "Priya, an individual, invests ₹40,000 across all schemes of a single fund house over a rolling 12-month period.",
    q: "What is the PAN position for this micro investment?",
    options: [
      "It is PAN-exempt — micro investments up to ₹50,000 aggregate per fund house by individuals are exempt; she must quote a 'PAN Exempt KYC Reference Number'",
      "PAN is always compulsory regardless of amount",
      "The exemption applies only to HUFs, not individuals",
      "She may invest up to ₹5 lakh without PAN"
    ],
    correct: 0,
    explain: "Micro investments up to ₹50,000 in aggregate under all schemes of a fund house (reckoned over a rolling 12 months or a financial year) by individual investors are PAN-exempt. Such investors quote a 'PAN Exempt KYC' Reference Number and hold only one such number."
  },
  {
    q: "The micro-investment exemption from PAN in mutual funds is available to:",
    options: [
      "Individual investors only — HUFs and non-individual investors are not eligible",
      "All investors including HUFs and companies",
      "Only foreign portfolio investors",
      "Only institutional investors"
    ],
    correct: 0,
    explain: "Micro investments made by individual investors alone are exempt from PAN. HUFs and non-individual investors are not eligible for the exemption."
  },
  {
    q: "The KYC (Know Your Customer) norms in India stem from which law?",
    options: [
      "The Prevention of Money Laundering Act (PMLA), 2002",
      "The Companies Act, 2013",
      "The Consumer Protection Act",
      "The Contract Act, 1872"
    ],
    correct: 0,
    explain: "To ensure illegal funds are not routed into Indian markets, the government promulgated the PMLA. KYC norms — verifying the identity of those entering financial transactions — flow from it."
  },
  {
    q: "The KYC process fundamentally involves verification of:",
    options: [
      "Proof of identity and proof of residence (address) of the customer",
      "Only the customer's mobile number",
      "The customer's credit score",
      "The customer's shareholding in listed companies"
    ],
    correct: 0,
    explain: "KYC verifies proof of identity (a photo document such as passport, driving licence, voter ID, Aadhaar) and proof of address, and also verifies the PAN card where available."
  },
  {
    scenario: "A first-time investor completes an online KYC form and provides documents through DigiLocker, and his KYC is completed using UIDAI Aadhaar authentication.",
    q: "Per SEBI's April 24, 2020 circular, is a separate In-Person Verification (IPV/VIPV) required?",
    options: [
      "No — IPV/VIPV is not required when KYC is completed using Aadhaar authentication/UIDAI verification or when documents are provided online via DigiLocker",
      "Yes — physical IPV is always mandatory with no exceptions",
      "Yes — but only if the investment exceeds ₹1 crore",
      "No — IPV is never required for any investor"
    ],
    correct: 0,
    explain: "The circular modifies IPV requirements: IPV/VIPV is not required where KYC is completed using Aadhaar authentication/UIDAI verification, or where the KYC form is submitted online and documents provided via DigiLocker or another source verifiable online."
  },
  {
    q: "Which is a required feature of a valid Video In-Person Verification (VIPV)?",
    options: [
      "It must be in a live environment, clear and still, with the investor recognisable and not covering the face, and be tamper-proof with date/time stamping",
      "It can be a pre-recorded video sent by the investor",
      "The investor's face may be partially covered",
      "No record of the person performing the VIPV need be kept"
    ],
    correct: 0,
    explain: "VIPV must be live, clear and still, with the investor easily recognisable and face uncovered; it includes random questions/OTP, must match the Aadhaar-authenticated photograph, and be digitally saved in a safe, tamper-proof, date/time-stamped, retrievable manner."
  },
  {
    q: "eSign, used in online KYC, is an electronic signature service that:",
    options: [
      "Lets an Aadhaar holder digitally sign and forward a document, operated under the Information Technology Act framework",
      "Is a physical rubber stamp",
      "Replaces the need for any Aadhaar or identity verification",
      "Can only be used by institutional investors"
    ],
    correct: 0,
    explain: "eSign is an online electronic signature service that lets an Aadhaar holder digitally sign and forward a document; its framework operates under the Second Schedule of the Information Technology Act and the controller's guidelines."
  },
  {
    q: "SEBI mandated a uniform KYC procedure across capital market intermediaries with effect from:",
    options: [
      "January 1, 2012",
      "January 1, 2016",
      "April 1, 2019",
      "March 1, 2025"
    ],
    correct: 0,
    explain: "To eliminate duplicate KYC across mutual funds, DPs, stock brokers, portfolio managers and others, SEBI mandated a uniform KYC procedure from January 1, 2012, enabled by the KYC Registration Agency (KRA) system. The new KYC form has two parts — common identity/address information and intermediary-specific information."
  },
  {
    q: "The Central KYC Records Registry (CKYCR) under the PML Rules is operated by:",
    options: [
      "CERSAI — the Central Registry of Securitisation and Asset Reconstruction and Security Interest of India",
      "SEBI directly",
      "The Reserve Bank of India directly",
      "The Income Tax Department"
    ],
    correct: 0,
    explain: "By notification dated November 26, 2015, the Government authorised CERSAI to perform the functions of the Central KYC Records Registry — receiving, storing, safeguarding and retrieving KYC records in digital form and issuing a unique KYC Identifier after de-duplication."
  },
  {
    q: "Registered Intermediaries are required to upload KYC records with the CKYCR for all individual accounts opened on or after:",
    options: [
      "August 1, 2016",
      "November 26, 2015",
      "January 1, 2012",
      "October 1, 2022"
    ],
    correct: 0,
    explain: "As per the 2015 amendment to the PML (Maintenance of Records) Rules, 2005, Registered Intermediaries must upload KYC records with the CKYCR for all individual accounts opened on or after August 1, 2016."
  },
  {
    q: "The Central KYC Record Registry caters to Reporting Entities of which regulators?",
    options: [
      "RBI, SEBI, IRDAI and PFRDA — all four major financial-sector regulators",
      "Only SEBI",
      "Only RBI and SEBI",
      "Only IRDAI and PFRDA"
    ],
    correct: 0,
    explain: "The Central KYC Record Registry, operating since 2016, caters to Reporting Entities of all four major financial-sector regulators: RBI, SEBI, IRDAI and PFRDA."
  },
  {
    scenario: "A customer submits a KYC Identifier to a new reporting entity.",
    q: "When can the entity still require the customer to submit documents again?",
    options: [
      "When there is a change in the customer's information, the current address needs verification, or enhanced due diligence/risk profiling is considered necessary",
      "Never — a KYC Identifier means documents can never be sought again",
      "Only if the customer invests more than ₹10 lakh",
      "Whenever the entity feels like it, without any reason"
    ],
    correct: 0,
    explain: "On a KYC Identifier, the entity downloads records from the CKYCR and need not seek documents again — unless the information has changed, the current address must be verified, or it is necessary for enhanced due diligence or building an appropriate risk profile."
  },
  {
    q: "SEBI's circular dated May 23, 2025 on inclusive digital KYC requires intermediaries to:",
    options: [
      "Offer assistive digital services so KYC is accessible to persons with disabilities, including those with visual impairments",
      "Discontinue all digital KYC processes",
      "Charge extra fees for disabled investors",
      "Restrict KYC to physical branches only"
    ],
    correct: 0,
    explain: "SEBI's May 23, 2025 circular reiterated its commitment to inclusive, accessible digital KYC — mandating intermediaries to offer assistive digital services to persons with disabilities, including the visually impaired."
  },

  /* ---- 17.3 Demat & Remat ---- */
  {
    q: "A depository is best described as an institution that:",
    options: [
      "Holds investors' securities in electronic form — analogous to a bank holding funds",
      "Lends money against gold",
      "Prints physical share certificates for companies",
      "Sets the price of shares on the exchange"
    ],
    correct: 0,
    explain: "A depository holds securities in electronic form and provides transaction services — comparable to a bank holding depositors' funds. The Depositories Act was passed in 1996."
  },
  {
    q: "The two depositories operational in India are:",
    options: [
      "NSDL and CDSL",
      "NSE and BSE",
      "SEBI and RBI",
      "CAMS and KFintech"
    ],
    correct: 0,
    explain: "The two operational depositories are National Securities Depository Ltd. (NSDL) and Central Depository Services (I) Ltd. (CDSL)."
  },
  {
    q: "SEBI regulations require all public issues above which size to be issued only in dematerialised form?",
    options: [
      "₹10 crore",
      "₹1 crore",
      "₹100 crore",
      "₹50 lakh"
    ],
    correct: 0,
    explain: "SEBI requires all public issues in excess of ₹10 crore to be issued only in dematerialised form."
  },
  {
    q: "That dematerialised securities are 'fungible' means:",
    options: [
      "Once dematerialised, a share has no distinctive certificate/folio number — ownership is described only by the number of shares held (identified by ISIN)",
      "The shares can be converted into cash instantly",
      "Each share keeps its unique certificate number forever",
      "The shares cannot be sold"
    ],
    correct: 0,
    explain: "Dematerialised securities are fungible — a share loses its distinctive certificate/distinctive/folio number; ownership is described by the number of shares held, identified by the 12-character ISIN."
  },
  {
    q: "In the dematerialisation process, the investor initiates the request by submitting to the DP:",
    options: [
      "The physical securities along with a Dematerialisation Request Form (DRF)",
      "A Rematerialisation Request Form (RRF)",
      "A power of attorney only",
      "A cancelled cheque only"
    ],
    correct: 0,
    explain: "The investor hands the securities to be dematerialised, along with the DRF, to the DP. A Dematerialisation Request Number (DRN) is generated and the certificates are sent to the R&T agent, which mutilates them stamped 'Surrendered for Dematerialisation'."
  },
  {
    q: "On dematerialisation, which of the following is TRUE about stamp duty?",
    options: [
      "No stamp duty is payable on dematerialisation, unlike other transfer-of-ownership transactions",
      "Double stamp duty is payable",
      "Stamp duty equal to the share value is payable",
      "Stamp duty is payable only for NRIs"
    ],
    correct: 0,
    explain: "Although effecting dematerialisation resembles a transfer of registered ownership, no stamp duty is payable on dematerialisation."
  },
  {
    scenario: "A client wants to physically transfer some shares in a company from one holder to another in 2024.",
    q: "What is the correct position?",
    options: [
      "Physical transfer of shares has been discontinued since April 1, 2019 — transfers must be in demat form",
      "Physical transfers are still fully permitted",
      "Physical transfers were discontinued only from 2022",
      "Only NRIs may transfer physically"
    ],
    correct: 0,
    explain: "Physical transfer of shares has been discontinued from April 1, 2019. (DRFs are required to be stored for at least 5 years.)"
  },
  {
    q: "Rematerialisation of securities is the process of:",
    options: [
      "Converting electronic holdings of a security back into physical form (via a Rematerialisation Request Form)",
      "Converting physical securities into electronic form",
      "Splitting one share into two",
      "Transferring shares to a nominee"
    ],
    correct: 0,
    explain: "Rematerialisation converts electronic holdings to physical form. The investor submits a Rematerialisation Request Form (RRF); the R&T agent assigns a new certificate number, ensures revenue stamps are affixed, and dispatches physical certificates."
  },
  {
    q: "During rematerialisation, the R&T agent must ensure that:",
    options: [
      "Applicable revenue stamps are affixed on the new certificates",
      "No stamps are ever required",
      "The shares stay fungible with no certificate number",
      "The depository remains the registered holder"
    ],
    correct: 0,
    explain: "In rematerialisation the R&T agent assigns a new certificate number and distinctive numbers, includes the beneficial owners in the Register of Members, and ensures applicable revenue stamps are affixed before dispatching certificates."
  },

  /* ---- 17.4 Power of Attorney ---- */
  {
    q: "In a Power of Attorney, the two parties are:",
    options: [
      "The grantor (primary investor granting the rights) and the holder/attorney (authorised to act)",
      "The buyer and the seller",
      "The bank and the depository",
      "The nominee and the legal heir"
    ],
    correct: 0,
    explain: "A PoA has the grantor (primary investor/account holder who grants rights) and the holder/attorney (authorised to execute an agreed set of actions). Both must comply with PAN and KYC norms."
  },
  {
    q: "Which action can a Power of Attorney holder generally NOT do?",
    options: [
      "Appoint or change a nominee, or open/close a bank or demat account",
      "Make a purchase transaction",
      "Pay for a purchase",
      "Redeem units on behalf of the grantor"
    ],
    correct: 0,
    explain: "A PoA holder can do normal transactions (purchase, payment, sale, redemption) but cannot appoint/change a nominee and cannot open or close a bank or demat account — those need the account holders' signatures. The grantor can also continue to operate the account."
  },
  {
    scenario: "A client asks whether her father can hold a Power of Attorney for her 15-year-old son's investments.",
    q: "What is the correct position?",
    options: [
      "There can be no PoA for a minor's transactions — the guardian plays the role similar to a PoA holder acting on behalf of the minor",
      "A PoA for a minor is allowed if notarised",
      "A minor can grant a PoA once he turns 12",
      "A PoA for a minor is allowed only for NRIs"
    ],
    correct: 0,
    explain: "Since minors cannot enter into valid contracts, there can be no PoA for a minor's transactions. The guardian acts on behalf of the minor, in a role similar to a PoA holder."
  },
  {
    q: "For a Power of Attorney executed in India to be valid, it must generally be:",
    options: [
      "Typed on non-judicial stamp paper, stamped per state rules, signed by the grantor on all pages, signed by both parties on the last page, and notarised (as required)",
      "Written on a plain paper with no signatures",
      "Signed only by the holder",
      "Registered with SEBI"
    ],
    correct: 0,
    explain: "A valid PoA is typed on non-judicial stamp paper, stamped per the state's rules, signed by the grantor on all pages and by both grantor and holder on the last page, and notarised where required (e.g. some mutual funds require notarisation)."
  },
  {
    q: "A General Power of Attorney typically:",
    options: [
      "Is very broad — giving the agent extensive powers (banking, filing tax returns, managing property, entering contracts, settling claims)",
      "Is limited to one specific act only",
      "Cannot cover banking transactions",
      "Automatically expires after one transaction"
    ],
    correct: 0,
    explain: "A General PoA gives the agent extensive powers to handle affairs when the investor cannot — including banking, filing tax returns, buying/selling/managing property, entering contracts and settling claims. A Specific/Limited PoA is confined to a designated act or acts."
  },

  /* ---- 17.5 NRIs & repatriation ---- */
  {
    q: "Under Section 6 of the Income Tax Act, an individual is deemed resident in India in a year if, among other tests, he is in India for:",
    options: [
      "182 days or more during the previous year",
      "Exactly 30 days during the year",
      "Any 10 days during the year",
      "The whole calendar year without a single day abroad"
    ],
    correct: 0,
    explain: "An individual is resident if in India for 182 days or more in the previous year, OR 60 days or more in the year and 365 days or more in the preceding 4 years (the 60-day test relaxes for citizens/PIOs visiting India). Otherwise he is a non-resident."
  },
  {
    q: "NRI is defined under FEMA (Notification No. 13 dated May 3, 2000) as:",
    options: [
      "A person resident outside India who is a citizen of India",
      "Any foreigner living in India",
      "A person who has never held an Indian passport",
      "Only a company registered abroad"
    ],
    correct: 0,
    explain: "Per Regulation 2 of FEMA Notification No. 13 dated May 3, 2000, a Non-Resident Indian means a person resident outside India who is a citizen of India."
  },
  {
    scenario: "An NRI makes an investment in India using funds remitted from abroad into his Non-Resident External (NRE) account.",
    q: "What is the repatriation position of the proceeds?",
    options: [
      "Freely repatriable — funds from an NRE/FCNR account (foreign-currency source) can be taken out without limit",
      "Non-repatriable — no NRE proceeds can ever leave India",
      "Repatriable only up to ₹50,000",
      "Repatriable only after 10 years"
    ],
    correct: 0,
    explain: "If the source is foreign currency (NRE/FCNR account, or a draft on a foreign bank supported by FIRC), proceeds are freely repatriable without limit. If the source is Indian rupees (NRO), proceeds are repatriable only up to USD 1 million per financial year, since the rupee is not fully convertible on capital account."
  },
  {
    q: "Investments made by an NRI from a Non-Resident Ordinary (NRO) account are repatriable:",
    options: [
      "Only up to USD 1 million per financial year",
      "Without any limit",
      "Never, under any circumstances",
      "Up to USD 10 million per month"
    ],
    correct: 0,
    explain: "Proceeds from an NRO account (rupee source) are repatriable only up to USD 1 million per financial year. NRE/FCNR-sourced proceeds are freely repatriable."
  },
  {
    q: "From January 2016, which self-declaration is mandatory for all Indian and NRI investors (existing and new)?",
    options: [
      "A FATCA / CRS self-declaration",
      "A guarantee of minimum returns",
      "A declaration of political affiliation",
      "A promise not to redeem for 5 years"
    ],
    correct: 0,
    explain: "The CBDT notified Rules 114F–114H requiring Indian financial institutions to seek additional tax/beneficial-owner information. From January 2016, a FATCA/CRS self-declaration is mandatory for all Indian and NRI investors."
  },
  {
    q: "The Portfolio Investment (NRI) Scheme (PINS) account is:",
    options: [
      "An RBI scheme, mandatory for NRIs/PIOs buying and selling listed shares/convertible debentures on a recognised Indian stock exchange, routed through a designated bank",
      "A scheme to avoid all taxes",
      "A pension scheme for foreign nationals",
      "A savings account with no restrictions"
    ],
    correct: 0,
    explain: "PINS is an RBI scheme, mandatory for NRIs/PIOs who wish to purchase and sell shares/convertible debentures of Indian companies or units of domestic mutual funds on a recognised exchange. All such transactions are routed through a PINS account with a designated bank, which reports to RBI."
  },
  {
    scenario: "An NRI already holds an NRE account and now wants to trade in listed shares on an Indian exchange.",
    q: "Does he need a separate PINS account?",
    options: [
      "Yes — even with an existing NRE account, a separate PINS account is required for trading in shares (only one NRE(PIS) and one NRO(PIS) allowed)",
      "No — the existing NRE account is enough",
      "No — PINS is only for FPIs",
      "Yes — but he can hold five PINS accounts"
    ],
    correct: 0,
    explain: "Even if the NRI has an existing NRE account, he must open a separate PINS account for trading in shares. An NRI/PIO can have only one PINS account at a time — one NRE(PIS) for repatriation-basis and one NRO(PIS) for non-repatriation-basis investment."
  },
  {
    q: "The ceiling on an individual NRI's purchase of the paid-up capital of an Indian company (under PINS) is generally:",
    options: [
      "5% individually, within an overall limit of 10% for all NRIs (extendable to 24% by a General Body resolution)",
      "50% individually",
      "No limit at all",
      "1% individually, 2% overall"
    ],
    correct: 0,
    explain: "NRIs cannot purchase more than 5% of the paid-up capital individually (on repatriation and non-repatriation basis together), subject to an overall 10% limit for all NRIs. The company can raise this to 24% by passing a General Body resolution."
  },
  {
    q: "For an NRI demat account, which statement is correct?",
    options: [
      "Separate demat accounts are needed for 'repatriable' and 'non-repatriable' securities; no RBI permission is needed to open one; and short selling and currency/commodity trading are not allowed",
      "One demat account can freely mix repatriable and non-repatriable securities",
      "RBI permission is mandatory to open any NRI demat account",
      "Short selling is freely allowed in an NRI demat account"
    ],
    correct: 0,
    explain: "NRIs must open separate demat accounts for repatriable and non-repatriable securities. No RBI permission is needed to open a demat account, but short selling and trading in the currency/commodity segments are not allowed using such accounts. For ownership, the first holder is taken into account."
  },

  /* ---- 17.6 Folio maintenance: address, name, status, lien, transmission, nomination ---- */
  {
    scenario: "A mutual fund investor moves to a new city and informs only his AMC and DP of the new address, but does not update the KRA.",
    q: "Is this sufficient for a change of address in capital-market records?",
    options: [
      "No — for capital-market transactions the change must be carried out in the KYC records with the KRA; merely informing the AMC/DP/broker is not sufficient",
      "Yes — informing the AMC and DP is always enough",
      "Yes — no address change is ever needed once KYC is done",
      "No — he must instead inform SEBI directly"
    ],
    correct: 0,
    explain: "For capital-market transactions the uniform KYC is done through the KRA; the KYC details change form (with documentary proof of the new address) must be filed so the KRA updates and communicates the change to all entities. Only informing the AMC/RTA/DP/broker/PMS is not sufficient."
  },
  {
    q: "A request to change the name in investment records (e.g. maiden to married name) should typically be supported by:",
    options: [
      "A name-change certificate / official gazette copy and, if applicable, a copy of the marriage certificate",
      "Only a verbal request over the phone",
      "A cancelled cheque alone",
      "The nominee's consent letter"
    ],
    correct: 0,
    explain: "A change-of-name request is supported by a name-change certificate from a regulatory authority, an official gazette copy announcing the new name, and a marriage certificate if applicable — via the prescribed form (e.g. KYC details change form)."
  },
  {
    scenario: "A resident investor becomes an NRI and must update his investments.",
    q: "Which of the following correctly reflects the required action?",
    options: [
      "Resident bank accounts are re-designated to NRO, a new NRI demat and trading account is opened, and existing securities move there on a non-repatriable basis",
      "Nothing needs to change — resident accounts continue as-is",
      "All existing investments must be compulsorily sold",
      "Only the mobile number needs updating"
    ],
    correct: 0,
    explain: "On becoming an NRI, resident accounts are re-designated to NRO, a new NRI demat/trading account is opened, and securities held in the resident demat account are transferred there on a non-repatriable basis. The KYC change form is filed with the KRA; existing small-savings schemes can continue with maturity credited to the NRO account."
  },
  {
    scenario: "Suresh has pledged his mutual fund units to a bank as collateral for a loan, and the lender has marked a lien.",
    q: "Which statement is correct while the lien is in force?",
    options: [
      "Suresh cannot redeem the units under lien, but dividends/benefits still go to him unless specifically barred by the lien holder",
      "Suresh can freely redeem the pledged units",
      "The units automatically transfer to the bank's name",
      "Suresh loses all rights including dividends immediately"
    ],
    correct: 0,
    explain: "An investor cannot redeem or transfer securities under lien until the lien holder authorises unmarking in writing. Dividends and other benefits still go to the investor unless specifically barred. 'Invoking' the lien means the lien holder sells/redeems the securities to recover dues — there is no transfer of securities to the lien holder."
  },
  {
    q: "For 'unmarking' (removal) of a lien to occur:",
    options: [
      "The lien holder must send a written communication; if the request is sent by the investor, it must also be signed by the pledgee/lender",
      "The investor can unilaterally remove it any time",
      "SEBI must approve each unmarking",
      "The lien can never be removed"
    ],
    correct: 0,
    explain: "Once the loan is repaid the securities are freed from lien. For unmarking, the lien holder should send a written communication; if the investor sends the request, it must also be signed by the pledgee/lender."
  },
  {
    q: "Transmission of investments refers to:",
    options: [
      "Passing on investments on the death of the investor to the persons entitled to receive them",
      "Selling investments on the open market",
      "Transferring investments to a broker",
      "Converting shares from physical to demat form"
    ],
    correct: 0,
    explain: "Transmission is passing on investments on the death of the investor: the deceased's name is removed and the investment is transferred to those entitled (joint holders, nominees or legal heirs, depending on how it was held)."
  },
  {
    scenario: "An account was held jointly by two holders, and it also carried a valid nomination. The first holder dies.",
    q: "Who has the superior right to the investments?",
    options: [
      "The surviving joint holder — the right of joint holders to transmission supersedes the right of the nominee",
      "The nominee — a nomination always beats joint holding",
      "The legal heirs, ignoring both",
      "SEBI decides case by case"
    ],
    correct: 0,
    explain: "If a folio was held jointly and had a nomination, the joint holders' right to transmission supersedes the nominee's right. (A nominee inherits only when the account was held singly.)"
  },
  {
    q: "If an investment account was held singly (one holder) with a valid nomination, on the holder's death it is transmitted to:",
    options: [
      "The nominee",
      "The legal heirs, ignoring the nomination",
      "The government",
      "The DP or AMC permanently"
    ],
    correct: 0,
    explain: "A single-holder account with a nomination is transmitted to the nominee. Without a nomination, it goes to legal heirs/claimants who can establish succession."
  },
  {
    q: "For simplified documentation in transmission, the threshold for dematerialised securities has been revised to:",
    options: [
      "₹15 lakh (for physical securities it is ₹5 lakh)",
      "₹50,000 for all cases",
      "₹1 crore",
      "There is no threshold"
    ],
    correct: 0,
    explain: "The threshold for simplified transmission documentation is ₹5 lakh for physical securities and ₹15 lakh for dematerialised securities. Below the threshold, requirements like a succession certificate/probate may be waived, with a death certificate, indemnity and NOC seen as adequate."
  },
  {
    q: "On the death of the Karta of an HUF, the investment is transmitted to:",
    options: [
      "The new Karta, on receipt of an indemnity bond signed by all the remaining co-parceners",
      "The nominee only",
      "The eldest daughter automatically",
      "The AMC, which keeps it in trust forever"
    ],
    correct: 0,
    explain: "On the death of the Karta of an HUF, the investment is transmitted to the new Karta on receipt of an indemnity bond signed by all the remaining co-parceners."
  },
  {
    q: "Which document must always be provided as evidence in every transmission request?",
    options: [
      "The death certificate",
      "A probate of will (always, everywhere)",
      "A succession certificate (always)",
      "A marriage certificate"
    ],
    correct: 0,
    explain: "A death certificate must be provided as evidence of death in all transmission requests. Probate/succession certificates are needed only in specific circumstances (e.g. no will, or above thresholds), and probate is not always needed in all parts of India."
  },
  {
    q: "Investors subscribing to mutual fund units on or after October 1, 2022 must:",
    options: [
      "Provide a nomination in the prescribed format OR opt out of nomination through a signed declaration",
      "Always nominate exactly three persons",
      "Never nominate anyone",
      "Nominate only their spouse"
    ],
    correct: 0,
    explain: "Investors subscribing to MF units on or after October 1, 2022 must provide a nomination in the prescribed format or opt out through a signed declaration. In MF/demat, nomination is mandatory for singly-held folios; nominations can be made only by individuals."
  },
  {
    q: "Effective from a revision, an investor can nominate up to how many persons in an account/folio?",
    options: [
      "10 persons",
      "3 persons",
      "5 persons",
      "1 person only"
    ],
    correct: 0,
    explain: "Per the nomination revisions effective 1 March 2025, investors can nominate up to 10 persons and must provide identifiers (PAN/Driving Licence/last 4 digits of Aadhaar), contact details, relationship, and the nominee's date of birth if a minor."
  },
  {
    q: "Which statement about assignment of an insurance policy is correct?",
    options: [
      "An assignment to a lender is absolute and cannot be changed, whereas an assignment (e.g. in case of early death) can be conditional",
      "All insurance assignments are conditional",
      "An insurance policy can never be assigned",
      "Only SEBI can assign an insurance policy"
    ],
    correct: 0,
    explain: "Assignment transfers an individual's rights/property to another. For insurance, an assignment to a lender is absolute (cannot be changed); an assignment in case of early death can be conditional. It is done by endorsement of the policy or a deed of assignment registered with the insurer."
  },

  /* ---- 17.7 Special investor categories: minors, minor-turned-major ---- */
  {
    q: "For an investment made on behalf of a minor:",
    options: [
      "The minor must be the sole or first holder, there can be no joint holders, and the guardian completes KYC and provides the guardian's PAN",
      "The minor can have two joint holders his own age",
      "The guardian need not do KYC",
      "A minor cannot invest under any structure"
    ],
    correct: 0,
    explain: "An investment for a minor cannot have joint holders — the minor must be sole or first holder. The guardian provides all details, completes KYC as if investing themselves, signs on the minor's behalf, and provides the guardian's PAN (and, depending on the product, the minor's PAN)."
  },
  {
    scenario: "A minor's existing natural guardian (father) has died, and the mother wishes to become the registered guardian for the minor's mutual fund folio.",
    q: "What is typically required?",
    options: [
      "A notarised/attested copy of the death certificate of the deceased guardian, plus documentation evidencing the new guardian's relationship and her KYC compliance",
      "Nothing — the change is automatic",
      "Only a verbal instruction",
      "A court order in every single case, with no alternative"
    ],
    correct: 0,
    explain: "If the previous guardian is deceased, a duly notarised/attested death certificate is submitted; the new natural guardian evidences the relationship, provides the attested signature in the minor's bank account, and completes KYC. If the existing guardian is alive, a consent/no-objection letter or a court order is needed."
  },
  {
    scenario: "A child in a mutual fund folio (held with guardian) is about to turn 18, but the minor-turned-major documents have not yet been submitted.",
    q: "What happens to the folio and its SIP on the date the minor attains majority?",
    options: [
      "The folio is frozen for the guardian's operation and all standing instructions (SIP/STP/SWP) are suspended until the minor-turned-major documents are received",
      "The SIP continues uninterrupted for years",
      "The folio is automatically closed and money refunded",
      "The guardian keeps full rights indefinitely"
    ],
    correct: 0,
    explain: "SIP/STP/SWP standing instructions are registered only till the minor attains majority. On that date, all such instructions are suspended if documents aren't received, and the folio is frozen for guardian operation — no transactions until the minor-turned-major documentation is completed."
  },
  {
    q: "When a minor becomes a major, the PAN card issued to the minor:",
    options: [
      "Must be resubmitted to the Income Tax authorities for a new card with the same number but the new adult signature",
      "Becomes invalid and a completely new PAN number is issued",
      "Continues to be used with the childhood signature forever",
      "Is not required any more"
    ],
    correct: 0,
    explain: "The PAN issued to a minor must be resubmitted for issuance of a new card with the same number but the minor-turned-major's new signature. Since a minor's demat account is single-name only, a new demat account is opened and securities transferred."
  },
  {
    scenario: "An NRI returns to India permanently and forgoes NRI status.",
    q: "Which account can a returning Indian open to hold foreign-currency balances transferred from NRE/FCNR(B) accounts?",
    options: [
      "A Resident Foreign Currency (RFC) account",
      "A fresh NRE account",
      "A PINS account",
      "A Basic Savings Bank Deposit Account only"
    ],
    correct: 0,
    explain: "On becoming a Resident Indian, the person cannot operate NRO/NRE/FCNR(B) accounts and opens a Resident Rupee Account. A Resident Foreign Currency (RFC) account may be opened to transfer balances from NRE/FCNR(B) and continue receiving foreign-currency funds."
  },
  {
    q: "Regarding adding or deleting a name in a mutual fund investment:",
    options: [
      "Mutual funds usually do NOT allow adding a name (it amounts to a transfer of units); the solution is to open a new folio with the desired holdings and move the units after closing the existing holding",
      "A name can be freely added to any MF folio at any time",
      "Names can be added but never deleted",
      "Only SEBI can add or delete a name"
    ],
    correct: 0,
    explain: "Because adding a name amounts to a transfer of units, mutual funds usually do not allow it. The solution is to open a new folio with the desired holding pattern and transfer the units after closing the existing holding. (Bank accounts, by contrast, allow name addition/deletion with the required documents and KYC.)"
  },

  /* ---- 17.8 Payment instruments ---- */
  {
    q: "For mutual fund investments, which payment mode is NOT permitted?",
    options: [
      "Outstation cheques and post-dated cheques (except post-dated cheques for SIPs)",
      "Local cheques",
      "At-par cheques",
      "NEFT/RTGS"
    ],
    correct: 0,
    explain: "Local and at-par cheques are accepted, but outstation cheques and post-dated cheques are not permitted (except post-dated cheques for SIP instalments, where the cheque date must match the chosen SIP date)."
  },
  {
    q: "The RTGS payment system is meant for transactions of:",
    options: [
      "₹2 lakh and above (there is no minimum amount for NEFT)",
      "Below ₹2 lakh only",
      "Exactly ₹50,000",
      "Any amount, with a ₹10 lakh ceiling"
    ],
    correct: 0,
    explain: "RTGS is for transactions of ₹2 lakh and above and settles continuously in real time; NEFT has no minimum amount and settles in batches. Both require the beneficiary's IFSC — an 11-character alphanumeric code (first 4 letters = bank, last 7 = branch)."
  },
  {
    q: "The two advantages of paying for a primary-market subscription through ASBA are that:",
    options: [
      "The money keeps earning interest in the bank account until allotment, and only the amount required for allotment is debited (eliminating refunds)",
      "The investor gets guaranteed allotment and a fixed return",
      "No PAN or KYC is ever needed",
      "The shares are allotted at half price"
    ],
    correct: 0,
    explain: "Under ASBA the application money stays in the investor's bank account (continuing to earn interest) and is blocked, not debited; only the amount required for allotment is debited at the time of allotment, eliminating the need for refunds."
  },
  {
    scenario: "A grandfather wants to pay ₹40,000 towards a mutual fund investment made in the name of his minor grandson.",
    q: "Is this third-party payment permitted?",
    options: [
      "Yes — grandparents/parents may pay up to ₹50,000 per transaction on behalf of a minor, subject to a third-party declaration and PAN/KYC compliance",
      "No — third-party payments are never allowed in any circumstance",
      "Yes — with no limit and no declaration",
      "Only if the grandson is an NRI"
    ],
    correct: 0,
    explain: "Third-party payments are generally not accepted, but exceptions exist: grandparents/parents paying up to ₹50,000 per transaction for a minor, an employer paying for an employee via payroll, and custodians paying for FPIs. A third-party declaration and PAN/KYC compliance are required."
  },
  {
    q: "Since September 2012 under the PMLA framework, cash investments in mutual funds are permitted:",
    options: [
      "Up to ₹50,000 per investor per mutual fund per financial year — but redemptions/dividends are paid only through banking channels",
      "Up to ₹5 lakh per year with cash redemptions",
      "With no limit at all",
      "Only for NRIs"
    ],
    correct: 0,
    explain: "SEBI has permitted cash MF investments up to ₹50,000 per investor per mutual fund per financial year (to reach small investors), subject to PMLA compliance. However, repayment via redemptions and dividends is only through banking channels."
  },
  {
    q: "The IFSC (Indian Financial System Code) required for NEFT/RTGS is:",
    options: [
      "An 11-character alphanumeric code unique to each bank branch",
      "A 9-digit numeric code identifying the city",
      "The same as the MICR code",
      "A 12-character ISIN"
    ],
    correct: 0,
    explain: "IFSC is an 11-character alphanumeric code unique to each branch (first four letters = bank identity, remaining seven = branch). MICR is the separate 9-digit code used for cheque clearing."
  },

  /* ---- 17.9 Documentation for advice & MITC ---- */
  {
    q: "The documentation essential to the process of financial advice is prescribed under:",
    options: [
      "The SEBI (Investment Adviser) Regulations, 2013",
      "The Companies Act, 2013",
      "The Depositories Act, 1996",
      "The Contract Act, 1872"
    ],
    correct: 0,
    explain: "The SEBI (Investment Adviser) Regulations, 2013 prescribe the documentation to make the process of financial advice complete — including a client agreement, information gathering, risk profiling and record maintenance."
  },
  {
    q: "Records maintained by an Investment Adviser must be kept for a period of:",
    options: [
      "Five years (and, if in electronic form, digitally signed)",
      "One year",
      "Ten years",
      "Six months"
    ],
    correct: 0,
    explain: "All records must be maintained for five years. Records may be physical or electronic; if electronic, they must be digitally signed."
  },
  {
    scenario: "A client asks his Investment Adviser to hold his money and directly execute trades on his behalf whenever the adviser sees fit.",
    q: "Per the Most Important Terms and Conditions (MITC), what is the correct position?",
    options: [
      "The IA cannot accept the client's funds/securities and cannot execute any trade without the client's specific positive consent on every trade",
      "The IA may hold funds and trade freely once appointed",
      "The IA can guarantee returns to justify holding the money",
      "The IA may take custody but not trade"
    ],
    correct: 0,
    explain: "Per the MITC: the IA only accepts fees (not funds/securities on the client's behalf), does not guarantee returns, and cannot execute any trade without the client's specific and positive consent on every trade. Assured/guaranteed-return schemes are prohibited."
  },
  {
    q: "Under the MITC, which of the following is TRUE about fees?",
    options: [
      "Advance fees cannot exceed one year's fees; cash payment is not allowed; and on premature termination the client gets a proportionate refund (IA may retain a breakage fee of at most one-quarter fee)",
      "The IA can demand five years' fees in advance in cash",
      "No refund is ever due on early termination",
      "There is no cap on fees for individual/HUF clients"
    ],
    correct: 0,
    explain: "Per the MITC: fees are capped by SEBI/IAASB (for individual/HUF clients); advance fees cannot exceed one year; cash is not allowed (cheque/bank transfer/UPI/CeFCoM by BSE); on premature termination the client gets a proportionate refund for the unexpired period, with the IA retaining at most a one-quarter breakage fee."
  },
  {
    q: "Under the MITC, an Investment Adviser should:",
    options: [
      "Never ask for the client's login credentials or OTPs for trading/demat/bank accounts, and (where available) advise direct (non-commission) plans",
      "Regularly collect the client's OTPs to transact faster",
      "Provide distribution services to the client's family for extra commission",
      "Share the client's password with group entities"
    ],
    correct: 0,
    explain: "Per the MITC, the IA shall never ask for the client's login credentials/OTPs; as part of conflict-of-interest management, no distribution services are provided to the client/family, and the IA advises direct (non-commission) plans where available."
  },

  /* ---- 17.10 MF through stock exchange platform ---- */
  {
    q: "The BSE and NSE mutual fund transaction platforms are respectively called:",
    options: [
      "BSE StAR MF and NSE NMF II",
      "SCORES and Smart ODR",
      "NSDL and CDSL",
      "CeFCoM and Digilocker"
    ],
    correct: 0,
    explain: "The BSE and NSE mutual fund platforms are called StAR (BSE) and NMF II (NSE) — the two types of stock-exchange platforms investors can use to buy and sell MF units."
  },
  {
    q: "To use a stock exchange platform to buy/sell mutual fund units on behalf of clients, a mutual fund distributor must:",
    options: [
      "Be registered with AMFI (Association of Mutual Funds in India)",
      "Be a member of the RBI",
      "Hold a banking licence",
      "Be an NRI"
    ],
    correct: 0,
    explain: "SEBI allows MF distributors to use recognised stock exchange platforms, provided the distributor is registered with AMFI. Units are purchased from and redeemed with the AMCs directly."
  },
  {
    q: "A key advantage of routing mutual fund transactions through the stock exchange platform is that:",
    options: [
      "Pay-in/pay-out of money and units flows through the exchange infrastructure and clearing corporation, which eliminates counterparty risk",
      "The investor is guaranteed a fixed return",
      "The distributor takes custody of the investor's money",
      "No demat account is ever involved"
    ],
    correct: 0,
    explain: "The distributor only handles the transaction; the pay-in/pay-out of money and units goes through the exchange infrastructure, involving the clearing corporation — which eliminates counterparty risk. SIP, STP, SWP and switch transactions are all possible."
  },
  {
    q: "For an Investment Adviser, a benefit of the stock-exchange MF platform's transaction feed is that:",
    options: [
      "The adviser can see the client's entire mutual fund portfolio and transaction status in one place, and family members can be clubbed together",
      "The adviser can trade without the client's knowledge",
      "It hides transaction details from the adviser",
      "It removes the need for any recordkeeping"
    ],
    correct: 0,
    explain: "The platform lets the adviser see the client's entire MF portfolio and transactions in one place, view transaction status, generate holding statements on demand, and club family members — supporting better, more transparent decision-making with almost no paperwork."
  }
];
