/* ==========================================================================
   NISM Series-X-A · Module 3 · Chapter 9 — Investing in Fixed Income Securities
   Question bank for the end-of-chapter assessment.

   Shapes:
     Standard  { q, options:[...], correct, explain }
     Scenario  { scenario, q, options:[...], correct, explain }
   `correct` indexes the ORIGINAL options order (the engine shuffles).
   q / scenario / options render as HTML.
   ========================================================================== */

window.NISM_CH09_QUESTIONS = [

  /* ---------- 9.1 Debt market & financing ---------- */
  {
    q: "How does debt financing fundamentally differ from equity financing?",
    options: [
      "Debt involves borrowing with fixed obligations; equity grants ownership rights",
      "Debt grants ownership rights; equity is a loan",
      "Both give the investor voting rights",
      "Debt investors always rank below equity investors on default"
    ],
    correct: 0,
    explain: "Debt financing means borrowing with fixed obligations (coupon + principal); equity financing grants ownership rights. Debt is generally safer as it is often secured by physical assets, and ranks ahead of equity."
  },
  {
    q: "Why are debt investments generally considered relatively safer than equity?",
    options: [
      "They are often secured by physical assets",
      "They always offer higher returns",
      "They carry voting rights",
      "Governments guarantee all corporate bonds"
    ],
    correct: 0,
    explain: "Debt is relatively safer because it is often secured by physical assets. However, in case of default, recovering funds can be a lengthy legal process, so a company's goodwill is a key factor in honouring obligations."
  },
  {
    q: "India's debt market has three key segments. Which grouping is correct?",
    options: [
      "(a) Government securities (G-secs, T-bills, SDLs); (b) PSU & bank bonds; (c) private-sector bonds, debentures & commercial papers",
      "(a) Equity shares; (b) preference shares; (c) debentures",
      "(a) Mutual funds; (b) AIFs; (c) PMS",
      "(a) Call money; (b) equity; (c) real estate"
    ],
    correct: 0,
    explain: "The three segments are: Government securities (G-secs, T-bills, SDLs); PSU and bank bonds; and private-sector instruments like bonds, debentures and commercial papers."
  },

  /* ---------- 9.2 Bond market ecosystem ---------- */
  {
    q: "Why are bonds referred to as 'fixed income securities'?",
    options: [
      "The issuer agrees to pay a fixed coupon periodically and repay a fixed principal (face value) at maturity",
      "Their market price never changes",
      "Their yield is fixed by SEBI",
      "They always pay the same as a bank fixed deposit"
    ],
    correct: 0,
    explain: "Bonds create fixed financial obligations: the issuer pays a fixed coupon periodically and repays the fixed face value at maturity. These fixed obligations are the most defining characteristic of bonds."
  },
  {
    q: "On the basis of term to maturity, a debt obligation with a maturity of one year or less is classified as a:",
    options: [
      "Money market security",
      "Capital market security",
      "Perpetual bond",
      "Convertible bond"
    ],
    correct: 0,
    explain: "Bonds with a year or less to maturity are money market securities; obligations with maturities in excess of one year are capital market securities. So a long-term bond becomes a money market security as it approaches maturity."
  },
  {
    q: "According to the workbook, all G-Secs are normally coupon-bearing with which coupon frequency and tenor?",
    options: [
      "Semi-annual coupons, with a tenor of 5 to 30 years",
      "Monthly coupons, with a tenor of 1 to 3 years",
      "Annual coupons, with a tenor of 40 to 50 years",
      "Zero coupon, with a tenor under 1 year"
    ],
    correct: 0,
    explain: "All G-Secs are normally coupon (interest-rate) bearing and have semi-annual coupon/interest payments, with a tenor between 5 and 30 years. Maturity period is also known as tenor or tenure."
  },
  {
    q: "If the prevailing market interest rate is ABOVE a bond's coupon rate, the bond will sell at:",
    options: [
      "A discount to par value",
      "A premium to par value",
      "Exactly par value",
      "Twice its par value"
    ],
    correct: 0,
    explain: "If the market interest rate is above the coupon rate, the bond sells at a discount to par. If the market rate is below the coupon, it sells at a premium. They are equal only when the coupon and market rate are the same (par)."
  },
  {
    q: "As per regulation, what is the maximum number of ISINs that can mature for an issuer in one financial year?",
    options: [
      "12",
      "5",
      "24",
      "There is no limit"
    ],
    correct: 0,
    explain: "A maximum of 12 ISINs can mature in one financial year. Companies re-issue existing ISINs; the limit of 12 applies to completely new issuances (ISINs). Unlike equity, a company can have many bond issues outstanding at once."
  },
  {
    scenario: "Sunrise Ltd issues a bond that gives Sunrise itself the right to redeem all or part of the outstanding bonds before the specified maturity date.",
    q: "What kind of bond is this, and what key risk does it create for the investor?",
    options: [
      "A callable bond — it creates reinvestment risk for the investor",
      "A puttable bond — it protects the investor",
      "A convertible bond — it creates equity dilution risk",
      "A perpetual bond — it creates inflation risk"
    ],
    correct: 0,
    explain: "A callable bond gives the ISSUER the right to redeem early. The issuer calls when interest rates fall, forcing the investor to reinvest the returned principal at lower rates — this is reinvestment risk. Callable bonds are advantageous to the issuer."
  },
  {
    q: "A put provision in a bond gives whom the right to do what?",
    options: [
      "The bondholder the right to sell the bond back to the issuer at a pre-determined price on specified dates",
      "The issuer the right to buy back the bond early",
      "The bondholder the right to convert the bond into equity",
      "The issuer the right to skip coupon payments"
    ],
    correct: 0,
    explain: "A put provision benefits the bondholder — it guarantees a pre-specified selling price at the redemption dates, letting the holder sell the bond back to the issuer. (A call option benefits the issuer.)"
  },
  {
    q: "A convertible bond is best described as:",
    options: [
      "A plain vanilla bond plus an embedded equity-conversion option",
      "A bond that the issuer can redeem early",
      "A bond with no maturity date",
      "A bond whose coupon resets with inflation"
    ],
    correct: 0,
    explain: "A convertible bond is a combination of a plain vanilla bond plus an embedded equity conversion option — it gives the bondholder the right to exchange the bond for a specified number of common shares of the issuing company."
  },

  /* ---------- 9.3 Risks ---------- */
  {
    q: "The two broad groups of risk in bonds are market risk and credit risk. Market risk arises mainly from:",
    options: [
      "Changes in interest-rate levels in the economy",
      "A change in the creditworthiness of the borrower",
      "The bond being prematurely called",
      "The issuer defaulting on principal"
    ],
    correct: 0,
    explain: "Market risk comes from changes in interest-rate levels; credit (default) risk comes from changes in the creditworthiness of the borrower. These are the two major sources of bond risk."
  },
  {
    q: "The price of a bond and the market interest rate share what relationship?",
    options: [
      "Inverse — if rates rise, the bond's price falls",
      "Direct — if rates rise, the bond's price rises",
      "No relationship at all",
      "They are always exactly equal"
    ],
    correct: 0,
    explain: "The bond price is inversely related to interest-rate movements. If interest rates rise, bond prices fall (potential capital loss); if rates fall, bond prices rise."
  },
  {
    scenario: "Priya buys bonds but is worried that if she has to sell before maturity, a rise in interest rates could erode her capital.",
    q: "Which strategy can obviate this interest-rate risk?",
    options: [
      "Hold till maturity (HTM) — on maturity she receives what was initially contracted",
      "Sell immediately at a discount",
      "Convert the bonds to equity",
      "Only buy callable bonds"
    ],
    correct: 0,
    explain: "Holding till maturity (HTM) obviates interest-rate risk because on maturity the investor receives exactly what was initially contracted (face value + final coupon), regardless of interim price swings."
  },
  {
    q: "Reinvestment risk is specifically the risk that:",
    options: [
      "Interest rates may DECREASE during the life of the bond, forcing coupons to be reinvested at lower rates",
      "Interest rates may increase, raising the bond's price",
      "The issuer defaults on the principal",
      "The bond cannot be sold in the market"
    ],
    correct: 0,
    explain: "Reinvestment risk is the risk that interest rates may decrease during the bond's life, so periodic coupons get reinvested at lower rates. If an investor wants to hold to maturity, reinvestment risk is very high."
  },
  {
    q: "The cascading rating downgrades in the IL&FS case of August–September 2018 are cited as an example of which risk?",
    options: [
      "Downgrade risk",
      "Exchange rate risk",
      "Event risk",
      "Volatility risk"
    ],
    correct: 0,
    explain: "Downgrade risk arises when an issuer's rating is lowered after investors buy its bonds — the bonds' price drops as the company's cost of funds rises. The IL&FS downgrades of Aug–Sep 2018 are the workbook's example."
  },
  {
    q: "Corporate (non-Government) bonds pay a 'spread' over comparable Government securities. As market conditions deteriorate and liquidity tightens, the spread generally:",
    options: [
      "Increases, as risk appetite drops",
      "Decreases, as risk appetite rises",
      "Stays exactly constant",
      "Falls to zero"
    ],
    correct: 0,
    explain: "Spread risk: the spread over comparable G-secs changes dynamically. In tight liquidity or bad market conditions, risk appetite drops and the spread increases. Higher-rated papers command far lower spreads than lower-rated papers."
  },
  {
    q: "Default risk is best defined as:",
    options: [
      "The possibility of non-payment of coupon or principal when due",
      "The risk that a bond is called early",
      "The risk that inflation erodes real returns",
      "The risk that a bond is illiquid"
    ],
    correct: 0,
    explain: "Default risk is the possibility of non-payment of coupon or principal when due. The spread measures a bond's default risk; junk bonds with very high default risk pay very high interest rates."
  },
  {
    q: "Regarding liquidity risk and credit quality, the workbook notes that:",
    options: [
      "The better the credit quality (e.g. G-Sec or AAA), the LOWER the impact cost",
      "The better the credit quality, the HIGHER the impact cost",
      "Impact cost is unrelated to credit quality",
      "Short-term instruments are the least liquid"
    ],
    correct: 0,
    explain: "Liquidity risk is common on long-term bonds; short-term instruments are more liquid. The better the credit quality of the bond (G-Sec or AAA-rated corporate), the lower the impact cost."
  },
  {
    scenario: "An Indian company issues Masala Bonds — rupee-denominated bonds sold to foreign investors, where the Rupee amount is fixed.",
    q: "The foreign investors are chiefly exposed to which risk?",
    options: [
      "Exchange rate (currency) risk",
      "Call risk",
      "Volatility risk",
      "Political risk only"
    ],
    correct: 0,
    explain: "Masala Bonds expose investors to exchange-rate risk: the Rupee amount is fixed, so foreign investors receiving Indian Rupees must buy foreign currency for repatriation, bearing the currency risk."
  },
  {
    q: "To protect against a sudden rise in inflation eroding real returns, investors typically prefer:",
    options: [
      "Floating-rate bonds or inflation-indexed bonds",
      "Fixed-rate long-term bonds",
      "Zero coupon bonds",
      "Callable bonds"
    ],
    correct: 0,
    explain: "A fixed-rate bond ignores changing future scenarios, so higher inflation lowers its real return. When expected inflation is high, investors prefer floating-rate or inflation-indexed bonds — though the market segment for these is limited."
  },
  {
    q: "Volatility risk chiefly affects which type of bond?",
    options: [
      "Bonds with embedded options",
      "Plain vanilla fixed-rate G-secs",
      "Zero coupon bonds",
      "Bank fixed deposits"
    ],
    correct: 0,
    explain: "Volatility risk affects bonds with embedded options — the pricing of an embedded-option bond takes the volatility level into account."
  },
  {
    q: "During the Covid-19 pandemic the travel industry was severely hit and many firms could not service their debt. This illustrates:",
    options: [
      "Event risk",
      "Interest rate risk",
      "Reinvestment risk",
      "Downgrade risk"
    ],
    correct: 0,
    explain: "Event risk refers to an unexpected/unplanned event that forces an investment's value to drop substantially. The Covid-19 hit to the travel industry is the workbook's example; exposure differs by sector."
  },

  /* ---------- 9.4 Pricing of bonds ---------- */
  {
    q: "The typical par (face) value convention in the workbook is:",
    options: [
      "₹100 for a Government bond and ₹10,000 for a corporate bond",
      "₹1,000 for both Government and corporate bonds",
      "₹10,000 for Government and ₹100 for corporate bonds",
      "₹1 lakh for both"
    ],
    correct: 0,
    explain: "Par (face) value is typically ₹100 for a Government bond but ₹10,000 for a corporate bond. The periodic coupon is calculated on the face value; face value is also the redemption value of a plain vanilla bond."
  },
  {
    q: "A trader quotes a bid price of 106.35 for a bond. This means the trader is willing to buy at:",
    options: [
      "106.35% of the face value (a premium)",
      "₹106.35 in total for the whole bond",
      "A 6.35% discount to face value",
      "106.35 times the face value"
    ],
    correct: 0,
    explain: "The market quotes bonds as a percentage of price. A bid of 106.35 means buying at 106.35% of face value. Bonds trading above face value are premium bonds; below, discount bonds. At maturity the price is pulled to par (100)."
  },
  {
    q: "Which instruments are ALWAYS issued at a discount to par value?",
    options: [
      "Treasury Bills and Commercial Papers",
      "Fixed-rate G-secs and corporate debentures",
      "Perpetual bonds and convertible bonds",
      "Sovereign Gold Bonds"
    ],
    correct: 0,
    explain: "Treasury Bills, Commercial Papers etc. are always issued at a discount to par: the investor pays less than par at purchase and receives par at maturity. The difference is the return."
  },
  {
    scenario: "A bond pays an annual coupon of ₹10 on a ₹100 face value with 5 years to maturity. Similar securities currently yield 8% in the market.",
    q: "Using the workbook's present-value model, the price of this annual-coupon bond is closest to:",
    options: [
      "₹107.99",
      "₹100.00",
      "₹92.00",
      "₹118.00"
    ],
    correct: 0,
    explain: "Discounting the five ₹10 coupons and the ₹100 principal at 8% gives ₹107.9854. Because the 10% coupon exceeds the 8% market yield, the bond trades at a premium to par."
  },
  {
    scenario: "Take the same bond (10% coupon, 5 years, 8% yield, ₹100 face value), but now it pays coupons semi-annually (₹5 every 6 months, discounted at 4% per period).",
    q: "How does its price compare with the annual-coupon version (₹107.99)?",
    options: [
      "Higher — about ₹108.11, due to the greater frequency of compounding",
      "Lower — about ₹104.00",
      "Exactly the same — ₹107.99",
      "Exactly ₹100, since coupon still exceeds yield"
    ],
    correct: 0,
    explain: "The semi-annual bond is valued at ₹108.1109 — higher than the annual bond's ₹107.9854 — because of the greater frequency of compounding. The first-period discount factor is 1/1.04 = 0.9615."
  },
  {
    q: "For a zero-coupon instrument, price P and yield relate as P = 100 / (1 + r × Days-to-Maturity/365). What is the single cash flow that gives a zero-coupon bond its value?",
    options: [
      "A single redemption (face value) cash flow at maturity",
      "Semi-annual coupons plus principal",
      "Monthly coupons with no principal",
      "A perpetual stream of coupons"
    ],
    correct: 0,
    explain: "A zero-coupon bond has a single cash flow — the face value at maturity. It is issued at a discount and redeemed at par; the pricing formula can be rearranged to compute its YTM."
  },
  {
    q: "For a bond selling at a DISCOUNT, the relationship among Coupon Rate (CR), Current Yield (CY) and Yield-to-Maturity (YTM) is:",
    options: [
      "CR < CY < YTM",
      "CR > CY > YTM",
      "CR = CY = YTM",
      "CY > YTM > CR"
    ],
    correct: 0,
    explain: "At par: CR = CY = YTM. At a discount: CR < CY < YTM. At a premium: CR > CY > YTM. A discount bond's YTM exceeds its coupon rate."
  },
  {
    q: "The 'dirty price' of a bond is defined as:",
    options: [
      "Clean price plus accrued interest",
      "Clean price minus accrued interest",
      "Only the accrued interest",
      "The face value minus the coupon"
    ],
    correct: 0,
    explain: "Dirty price = clean price + accrued interest, and is also called the full price or invoice price — the amount the buyer actually pays the seller. The market trades on the basis of clean price, and all yield/price formulas use the clean price."
  },
  {
    q: "Which statement about the price–yield relationship is CORRECT?",
    options: [
      "It is inverse and non-linear (convex); longer maturity and lower coupon both increase price sensitivity",
      "It is direct and linear",
      "Longer-maturity bonds are less sensitive to rate changes",
      "Higher-coupon bonds are more price-sensitive"
    ],
    correct: 0,
    explain: "The price–yield curve has a negative slope (inverse), and the movement across it is non-linear (convex). A longer maturity increases sensitivity to rate changes, and the lower a bond's coupon, the greater its price sensitivity."
  },
  {
    scenario: "A perpetual bond has an 8% coupon on a face value of ₹100. An investor requires an annual yield of 6%.",
    q: "What is the value of this perpetuity?",
    options: [
      "₹133.33",
      "₹100.00",
      "₹80.00",
      "₹106.00"
    ],
    correct: 0,
    explain: "A perpetual bond pays coupons indefinitely and never repays face value. Value = coupon ÷ required yield = (100 × 8%) ÷ 6% = 8 ÷ 0.06 = ₹133.33."
  },
  {
    q: "A defining feature of a perpetual bond is that it:",
    options: [
      "Pays coupons indefinitely but never repays the face value and has no maturity date",
      "Repays face value after 30 years",
      "Pays no coupon at all",
      "Automatically converts to equity"
    ],
    correct: 0,
    explain: "A perpetual bond continuously pays the agreed coupon but never pays the face value and has no maturity date — the issuer is not bound to repay principal."
  },

  /* ---------- 9.5 Traditional yield measures ---------- */
  {
    scenario: "A 10-year 8.24% coupon bond (₹100 par) is selling for ₹103.00.",
    q: "What is its current yield?",
    options: [
      "8%",
      "8.24%",
      "10.3%",
      "6.9%"
    ],
    correct: 0,
    explain: "Current yield = annual coupon ÷ current market price = 8.24 ÷ 103 = 8%. Current yield uses the coupon over the market price, not the par value."
  },
  {
    q: "Yield to Maturity (YTM) is best described as:",
    options: [
      "The discount rate that equates the present value of a bond's future cash flows to its current market price — its internal rate of return",
      "The coupon rate stated on the bond",
      "The annual coupon divided by the current price",
      "The rate at which a bond can be called"
    ],
    correct: 0,
    explain: "YTM is the discount rate equating the PV of all remaining cash flows to the current market price — the expected return if held to maturity, also called the bond's internal rate of return. It is usually found by trial-and-error or software."
  },
  {
    q: "In Excel's YIELD(settlement, maturity, rate, price, redemption, frequency, basis) function for an Indian Government bond, the correct 'frequency' and 'basis' arguments are:",
    options: [
      "Frequency 2 (semi-annual) and basis 4 (30/360)",
      "Frequency 1 (annual) and basis 1 (actual/actual)",
      "Frequency 4 (quarterly) and basis 3 (actual/365)",
      "Frequency 12 (monthly) and basis 0"
    ],
    correct: 0,
    explain: "For Indian Government bonds, frequency = 2 (two coupon payments per year) and basis = 4 (the 30/360 day-count convention)."
  },
  {
    q: "Which day-count convention is followed in the Indian bond market, and which in the money market (e.g. T-Bills)?",
    options: [
      "Bond market: 30/360; money market: actual/365",
      "Bond market: actual/365; money market: 30/360",
      "Both use actual/actual",
      "Both use 30/360"
    ],
    correct: 0,
    explain: "The Indian bond market uses 30/360 (30 days per month, 360 per year). The money market uses actual/365 — so T-Bills, being money-market instruments, follow the money-market convention."
  },
  {
    q: "A bond pays a 4.20% annual coupon. If instead the coupon is paid every month, the equivalent 'effective yield' becomes about:",
    options: [
      "4.28%",
      "4.20%",
      "5.04%",
      "3.50%"
    ],
    correct: 0,
    explain: "Effective yield is the equivalent rate producing the same year-end amount under compounding. A 4.20% annual coupon paid monthly is worth about 4.28% — the more frequent compounding raises the effective yield above the nominal rate."
  },
  {
    q: "Yield to Call (YTC) measures:",
    options: [
      "The estimated rate of return for a bond held to its first call date",
      "The return if a bond is held to maturity",
      "The coupon divided by the face value",
      "The rate at which coupons are reinvested"
    ],
    correct: 0,
    explain: "A bond with an embedded call option raises risk for investors; yield to call measures the estimated rate of return for bonds held to the first call date."
  },

  /* ---------- 9.6 Yield curve ---------- */
  {
    q: "A NORMAL yield curve is:",
    options: [
      "Upward-sloping — long-term rates exceed short-term rates because of higher risk premia for longer maturities",
      "Downward-sloping — short-term rates exceed long-term rates",
      "Flat — the same yield at all maturities",
      "Humped — medium-term yields highest"
    ],
    correct: 0,
    explain: "A normal yield curve slopes upward: long-term rates are higher than short-term yields because the risk premium is higher for longer maturities."
  },
  {
    scenario: "In an economy, short-term interest rates have risen above long-term rates, producing a downward-sloping yield curve.",
    q: "This is which type of curve, and what does it often signal?",
    options: [
      "An inverted yield curve — it can indicate the economy may head into recession",
      "A normal yield curve — signalling strong growth",
      "A flat yield curve — signalling stable rates",
      "A humped yield curve — signalling a temporary shock"
    ],
    correct: 0,
    explain: "When short-term rates exceed long-term rates the curve is inverted. It can arise from high policy rates or severe asset-liability mismatch and often indicates the economy may go into recession (so future-issued bonds would carry lower coupons)."
  },
  {
    q: "A HUMPED yield curve is one where:",
    options: [
      "Medium-term yields are higher than both short-term and long-term yields",
      "Yields are identical at every maturity",
      "Long-term yields are the highest",
      "Short-term yields are the highest"
    ],
    correct: 0,
    explain: "In a humped yield curve, the short-term and long-term yields are both lower than the medium-term yield — the curve bulges in the middle. A flat curve, by contrast, shows no difference between short- and long-term yields."
  },

  /* ---------- 9.7 Duration ---------- */
  {
    q: "Macaulay Duration of a bond measures:",
    options: [
      "The time taken to recover the initial investment in present-value terms — the bond's payback period, in years",
      "The bond's total life to maturity, always",
      "The coupon rate of the bond",
      "The bond's credit rating"
    ],
    correct: 0,
    explain: "Duration (Macaulay Duration) is the time taken to recover the initial investment in present-value terms — the payback period to break even — expressed in years. The greater the duration, the more volatile the return to interest-rate changes."
  },
  {
    q: "Which bond has a duration EQUAL to its remaining maturity?",
    options: [
      "A zero-coupon bond",
      "A high-coupon bond",
      "A perpetual bond",
      "A floating-rate bond"
    ],
    correct: 0,
    explain: "Duration is always less than or equal to the bond's life to maturity. Only a zero-coupon bond (no interim coupons) has a duration equal to its remaining maturity."
  },
  {
    q: "How does Modified Duration relate to Macaulay Duration?",
    options: [
      "Modified duration = Macaulay duration ÷ (1 + periodic market interest rate), so it is generally lower",
      "Modified duration is always higher than Macaulay duration",
      "They are always exactly equal",
      "Modified duration is Macaulay duration multiplied by the coupon"
    ],
    correct: 0,
    explain: "Modified duration = Macaulay duration ÷ (1 + periodic interest rate/discount rate), and shows the % change in price for a change in rates — so a bond's modified duration is generally lower than its Macaulay duration. Convexity measures the curvature of the price–yield relationship."
  },

  /* ---------- 9.8 Money market ---------- */
  {
    q: "The money market covers lending and borrowing of funds with maturities ranging from:",
    options: [
      "Overnight to one year",
      "One year to five years",
      "Five years to thirty years",
      "Only overnight"
    ],
    correct: 0,
    explain: "The money market provides ultra-short to short-term lending/borrowing with maturities from overnight to one year. A liquid money market is critical to financial stability and is the primary transmission channel of the central bank's monetary policy."
  },
  {
    q: "The call money market in India is:",
    options: [
      "A purely interbank market for unsecured (uncollateralised) overnight funds, restricted to Scheduled Commercial Banks and Primary Dealers",
      "Open to all retail investors for secured lending",
      "A market for 15-day to 1-year secured funds",
      "A market only for corporates issuing commercial paper"
    ],
    correct: 0,
    explain: "Call money is unsecured lending/borrowing, a purely interbank market restricted to Scheduled Commercial Banks (SCBs) and Primary Dealers (PDs), dealt on RBI's NDS-CALL platform, and predominantly overnight."
  },
  {
    q: "Match the money-market tenor: 'Notice Money' and 'Term Money' respectively cover:",
    options: [
      "2–14 days; and 15 days–1 year",
      "Overnight; and 2–14 days",
      "15 days–1 year; and overnight",
      "1–3 years; and 3–5 years"
    ],
    correct: 0,
    explain: "Notice money is uncollateralised interbank funds beyond overnight and up to 14 days (2–14 days); term money extends this for 15 days to 1 year. Both are dealt/reported on RBI's NDS-CALL platform."
  },
  {
    scenario: "In November 2018, CCIL's 'Collateralized Borrowing and Lending Obligation' (CBLO), launched in 2003, was converted into a new triparty repo product.",
    q: "What is this product called, and what special treatment do funds borrowed on it get?",
    options: [
      "TREP (traded on TREPS) — funds borrowed are exempt from RBI's CRR/SLR computation and the security acquired is eligible for SLR",
      "Market Repo (traded on CROMS) — with no regulatory exemptions",
      "Call money — counted fully towards CRR/SLR",
      "Commercial Paper — an unsecured discount instrument"
    ],
    correct: 0,
    explain: "CBLO was converted into TREP on 5 November 2018, traded on TREPS (Tri-Party Repo Dealing System) with CCIL as Central Counterparty. Funds borrowed on TREPS are exempt from CRR/SLR computation, and the security acquired is eligible for SLR."
  },
  {
    q: "Treasury Bills (T-bills) in India are:",
    options: [
      "Zero-coupon securities issued at a discount and redeemed at par, normally in 91, 182 and 364-day tenors",
      "Semi-annual coupon-paying securities of 5–30 years",
      "Perpetual bonds issued by corporates",
      "Inflation-indexed bonds issued by RBI"
    ],
    correct: 0,
    explain: "T-bills are short-term money-market instruments — zero-coupon securities issued at a discount and redeemed at par. RBI conducts weekly auctions for 91, 182 and 364-day T-bills. The 14-day T-bill is not for public consumption (used for state-government surpluses)."
  },
  {
    q: "A Commercial Paper (CP) is used by Indian corporates to:",
    options: [
      "Raise short-term UNSECURED funds; it is a discounted instrument for ₹5 lakh and multiples, for 7 days to 1 year",
      "Raise long-term secured funds for 10–20 years",
      "Borrow overnight interbank funds",
      "Issue equity to the public"
    ],
    correct: 0,
    explain: "A CP raises short-term unsecured funds — a discounted instrument (like T-bills), issued for ₹5 lakh and multiples, for maturities of 7 days to one year. Only corporates with a good credit rating (typically minimum the second-highest) and the required net worth can issue CPs; used for working capital."
  },
  {
    q: "Certificates of Deposit (CDs) can be issued for maturities of:",
    options: [
      "7 days to 1 year by banks, and 1 year to 3 years by Financial Institutions",
      "Overnight only, by any entity",
      "10 to 20 years, by infrastructure companies",
      "Only 91, 182 or 364 days, by the Government"
    ],
    correct: 0,
    explain: "A CD is issued against funds deposited at a bank or eligible FI, for ₹1 lakh and multiples. Banks issue CDs for 7 days to 1 year; Financial Institutions can issue for 1 year to 3 years."
  },
  {
    q: "Triparty repo on corporate bonds currently includes only which securities?",
    options: [
      "Select AAA-category bonds, and A1+ rated CPs and CDs",
      "All listed and unlisted bonds regardless of rating",
      "Only Government securities",
      "Junk bonds rated below BBB"
    ],
    correct: 0,
    explain: "Triparty repo in corporate bonds (launched 2017 by stock exchanges) currently includes only select AAA-category bonds and A1+ rated CPs and CDs. CBR (repo in corporate bonds) was introduced by RBI in 2010."
  },

  /* ---------- 9.9 Government debt market ---------- */
  {
    q: "Why is the Government securities (G-Sec) market so important beyond funding the government?",
    options: [
      "It provides the benchmark interest rates for pricing various products and is an indirect channel for monetary policy",
      "It is the only market open to retail investors",
      "It offers the highest returns of any market",
      "It is the least regulated segment"
    ],
    correct: 0,
    explain: "The G-Sec market is the most active segment of the Indian fixed-income market. Besides meeting the government's funding needs, it provides benchmark interest rates for pricing products and schemes, and is an indirect channel for monetary policy."
  },
  {
    q: "In the G-Sec market, Primary Dealers (PDs) play a key role by:",
    options: [
      "Market making — providing firm two-way (buy and sell) quotes for Government securities",
      "Issuing the Government securities themselves",
      "Regulating the market on behalf of SEBI",
      "Guaranteeing returns to retail investors"
    ],
    correct: 0,
    explain: "Primary Dealers play a very important role as market makers, providing firm two-way (buy and sell) quotes for G-secs. Banks historically hold G-secs for SLR requirements; RBI is also a very large holder for its market-liquidity window."
  },
  {
    scenario: "Consider '5.77% GS 2030', issued on 3 August 2020 and maturing on 3 August 2030 — a fixed-rate dated G-Sec.",
    q: "What half-yearly coupon does it pay per ₹100 face value, and on which dates?",
    options: [
      "2.885% on 3 February and 3 August each year",
      "5.77% on 3 August each year",
      "1.4425% every quarter",
      "Nothing — it is a zero-coupon bond"
    ],
    correct: 0,
    explain: "Fixed-rate bonds pay a fixed coupon, but semi-annually. '5.77% GS 2030' pays 2.885% (half of the 5.77% annual coupon) every six months, on 3 February and 3 August, on ₹100 face value, until maturity."
  },
  {
    q: "For dated G-Secs, when a COUPON payment date and a REDEMPTION (maturity) date each fall on a holiday, the payments are made:",
    options: [
      "Coupon on the NEXT working day; redemption on the PREVIOUS working day",
      "Both on the next working day",
      "Both on the previous working day",
      "Coupon on the previous working day; redemption on the next working day"
    ],
    correct: 0,
    explain: "When a coupon date falls on a holiday, the coupon is paid on the next working day; but redemption proceeds are paid on the previous working day if the maturity date falls on a holiday. The PDO of RBI handles issue, coupon and principal payments."
  },
  {
    q: "Floating Rate Bonds (FRBs), first introduced by the Government of India in September 1995, pay a coupon that is:",
    options: [
      "Variable and reset at pre-announced intervals, majorly linked to the 182-day T-Bill rate",
      "Fixed for the entire life of the bond",
      "Linked to the price of gold",
      "Always zero until maturity"
    ],
    correct: 0,
    explain: "FRBs pay a variable coupon reset at pre-announced intervals, majorly linked to the 182-day (6-month) T-Bill rate. Since retail participation is low, the success of FRBs has not been satisfactory."
  },
  {
    q: "In Inflation Indexed Bonds (IIBs), what is protected against inflation?",
    options: [
      "BOTH the principal amount and the coupon flows",
      "Only the principal amount",
      "Only the coupon flows",
      "Neither — IIBs pay a fixed rate"
    ],
    correct: 0,
    explain: "In IIBs both the principal and coupon flows are protected against inflation. (In Capital Indexed Bonds, only the principal is linked to an inflation index.) India's first IIBs (WPI-linked) were issued in June 2013; CPI-linked ones in December 2013."
  },
  {
    scenario: "A retail investor wants a G-Sec-based instrument with ZERO reinvestment risk, created by breaking a regular G-Sec into its separate cash flows.",
    q: "Which instrument fits, and why does it have zero reinvestment risk?",
    options: [
      "STRIPS — being effectively zero-coupon bonds, they have no interim coupons to reinvest",
      "Floating Rate Bonds — because the coupon resets",
      "Sovereign Gold Bonds — because they are linked to gold",
      "Savings (Taxable) Bonds — because they are for retail investors"
    ],
    correct: 0,
    explain: "STRIPS (Separate Trading of Registered Interest and Principal of Securities) are separate ZCBs made by splitting a G-Sec's cash flows. Being zero-coupon, they have no interim coupons to reinvest, so zero reinvestment risk — attractive to retail/non-institutional investors."
  },
  {
    q: "Sovereign Gold Bonds (SGBs) are:",
    options: [
      "Gold-linked instruments denominated in units of one gram of gold, paying a fixed coupon and redeemed at an IBJA-based gold price",
      "Zero-coupon bonds issued at a discount",
      "Floating-rate bonds linked to the 182-day T-Bill",
      "Bonds guaranteed to double in value"
    ],
    correct: 0,
    explain: "SGBs are commodity-linked instruments denominated in units of one gram of gold and multiples. They pay a fixed coupon per annum (semi-annually) on the nominal value and are redeemed at the simple average of the India Bullion and Jewellers Association (IBJA) closing gold price of the previous 3 business days."
  },
  {
    q: "Uday bonds, issued by State Governments to help turn around power distribution companies (DISCOMs), are notable because they:",
    options: [
      "Are NOT eligible for SLR status",
      "Are the safest SLR securities available",
      "Are issued by the Central Government",
      "Pay no coupon"
    ],
    correct: 0,
    explain: "State Government Securities (SGSs) are generally SLR-eligible and pay semi-annual coupons. Uday bonds are special securities for the financial turnaround of DISCOMs, and are NOT eligible for SLR status."
  },

  /* ---------- 9.10 Corporate debt market ---------- */
  {
    q: "A major obstacle to an active secondary market in Indian corporate bonds for individual investors is:",
    options: [
      "Non-availability of trading platforms with a guaranteed central counterparty (CCP) facility; participants are largely wholesale/institutional",
      "That corporate bonds are banned for retail investors",
      "That corporate bonds pay no interest",
      "That there is no demand for any debt in India"
    ],
    correct: 0,
    explain: "Corporate debt has a low share of total debt issuance; demand is largely institutional. The largely wholesale/institutional nature of secondary participants and the non-availability of trading platforms with guaranteed CCP facility are primary obstacles to an active secondary market for individuals."
  },
  {
    q: "Under the Companies Act, appointment of a Debenture Trustee (DT) is compulsory when debentures/bonds are issued with a maturity of more than:",
    options: [
      "18 months",
      "12 months",
      "36 months",
      "60 months"
    ],
    correct: 0,
    explain: "Appointment of a DT is compulsory if debentures/bonds are issued with maturity of more than 18 months. DTs are registered under the SEBI (Debenture Trustees) Regulations, 1993, and protect debenture holders' interests."
  },
  {
    q: "On default by the issuer, a Debenture Trustee has the power to:",
    options: [
      "Appoint nominee directors on the issuer's board and sell the secured property to redeem the debentures",
      "Only send a warning letter with no further action",
      "Convert the debentures into equity automatically",
      "Increase the coupon rate unilaterally"
    ],
    correct: 0,
    explain: "In the event of default, DTs can appoint nominee directors on the issuer's board and have the power and authority to sell the secured property to redeem the debentures. They hold the secured property on behalf of, and for the benefit of, debenture holders."
  },
  {
    q: "In the Indian corporate bond market, a 'Retail Individual Investor' is defined as one who bids/applies for securities worth:",
    options: [
      "₹2 lakh or less",
      "₹5 lakh or less",
      "₹10 lakh or less",
      "₹1 crore or less"
    ],
    correct: 0,
    explain: "A 'Retail Individual Investor' bids or applies for securities for ₹2 lakh or less. A 'Designated stock exchange' is one with nationwide trading terminals on which debt securities are listed."
  },
  {
    q: "Why are company deposits NOT treated as securities under the SCRA?",
    options: [
      "They are not transferable",
      "They are issued by the Government",
      "They pay no interest",
      "They are always secured by assets"
    ],
    correct: 0,
    explain: "Company (fixed) deposits are time deposits issued by companies for 1, 2 or 3 years at a fixed rate usually higher than bank FDs. They are not securities per the SCRA definition because they are not transferable."
  },

  /* ---------- 9.11 Small savings instruments ---------- */
  {
    q: "Bank fixed deposits are considered safe partly because each depositor is insured by the DICGC up to:",
    options: [
      "₹5 lakh (across all branches of a given bank, including interest)",
      "₹1 lakh per account",
      "₹10 lakh per branch",
      "The full deposit amount with no limit"
    ],
    correct: 0,
    explain: "Each depositor is insured up to ₹5 lakh by the Deposit Insurance and Credit Guarantee Corporation (DICGC), covering all deposits and interest across branches of a given bank. FDs can run from 7 days to 10 years."
  },
  {
    q: "The 5-year tax-saving bank FD under Section 80C offers deductions up to ₹1.5 lakh but comes with:",
    options: [
      "A lock-in period of 5 years",
      "No lock-in at all",
      "A guaranteed 10% return",
      "Exemption of interest from tax"
    ],
    correct: 0,
    explain: "Investment in specified 5-year bank FDs is eligible for Section 80C deductions up to ₹1.5 lakh, but these deposits carry a 5-year lock-in. Senior citizens (over 60) typically get 0.25%–0.75% extra interest."
  },
  {
    scenario: "The Floating Rate GoI Savings Bond was launched on 1 July 2020 with an initial rate of 7.15%; its rate resets twice a year.",
    q: "The interest rate on this bond is linked to which benchmark, and by what margin?",
    options: [
      "The National Savings Certificate (NSC) rate, plus 35 basis points (0.35%)",
      "The 182-day T-Bill rate, plus 100 basis points",
      "The repo rate, minus 50 basis points",
      "The price of gold, plus 2%"
    ],
    correct: 0,
    explain: "The Floating Rate GoI Bond's interest is linked to the prevailing NSC rate, set at 35 bps (0.35%) over it, reset every six months. NRIs cannot invest, it is held only in demat (bond ledger account), and the interest is taxable."
  },
  {
    q: "The Public Provident Fund (PPF), instituted in 1968, has which of these features?",
    options: [
      "A 15-year deposit account; one account per person; HUFs and NRIs cannot open one; no joint account (nomination allowed)",
      "A 5-year account open to NRIs and HUFs",
      "A 21-year account only for girl children",
      "A monthly-income scheme with a 5-year term"
    ],
    correct: 0,
    explain: "PPF is a 15-year deposit account with a designated bank or post office. A person can hold only one PPF account (plus one as guardian of a minor). HUFs and NRIs cannot open PPF accounts, and joint accounts are not allowed, though nomination is available."
  },
  {
    q: "The National Savings Certificate (NSC VIII issue) is issued with a tenor of:",
    options: [
      "5 years, with interest compounded annually and paid on maturity",
      "15 years, with interest paid monthly",
      "1 year, redeemed at par",
      "21 years, for girl children only"
    ],
    correct: 0,
    explain: "NSCs are issued with a 5-year tenor; interest is compounded annually, accumulated and paid on maturity. Investment enjoys Section 80C benefits, and accrued interest is deemed reinvested (also 80C-eligible). NRIs, HUFs, companies and trusts cannot purchase NSCs."
  },
  {
    scenario: "A 62-year-old retiree wants a government scheme designed specifically for people of his age.",
    q: "Which scheme is meant for him, and who is generally NOT eligible?",
    options: [
      "Senior Citizens' Saving Scheme (SCSS) — NRIs, PIOs and HUFs are not eligible",
      "Sukanya Samriddhi Account — open to everyone over 60",
      "Public Provident Fund — restricted to those under 60",
      "Kisan Vikas Patra — only for senior citizens"
    ],
    correct: 0,
    explain: "The SCSS is available only to senior citizens aged 60+ (55 in case of VRS/superannuation, within a month of receiving benefits; no age limit for eligible retired Defence personnel). It can be held individually or jointly with a spouse. NRIs, PIOs and HUFs are not eligible."
  },
  {
    q: "The Post Office Monthly Income Scheme (POMIS) has a term of 5 years. The maximum investment limits are:",
    options: [
      "₹4.5 lakh for a single account and ₹9 lakh for a jointly-held account",
      "₹1.5 lakh single and ₹3 lakh joint",
      "No maximum limit at all",
      "₹15 lakh single and ₹30 lakh joint"
    ],
    correct: 0,
    explain: "POMIS provides regular monthly income over a 5-year term. Minimum investment is ₹1,500; maximum is ₹4.5 lakh for a single account and ₹9 lakh if held jointly. Premature withdrawal is allowed after 1 year (with penalties)."
  },
  {
    q: "Which statement about Kisan Vikas Patra (KVP) is CORRECT?",
    options: [
      "There is no tax incentive for the investment, and the interest is taxed on accrual basis; it is transferable",
      "It offers Section 80C benefits and tax-free interest",
      "It is available only to NRIs and HUFs",
      "It matures on the girl child turning 21"
    ],
    correct: 0,
    explain: "KVP requires a minimum ₹1,000 (multiples of ₹1,000), has no maximum, and its maturity depends on the applicable interest rate. There is no tax incentive and interest is taxed on accrual. Nomination, joint holding and transfer (by endorsement and delivery) are available. NRIs and HUFs cannot invest."
  },
  {
    scenario: "A father opens a Sukanya Samriddhi Account for his 8-year-old daughter and deposits ₹250 in the first year.",
    q: "Which of these features of the scheme is CORRECT?",
    options: [
      "The account matures 21 years from opening; partial withdrawal (up to 50%) is allowed after she turns 18; deposits qualify under Section 80C",
      "The account can be opened for a child up to age 18",
      "The minimum annual deposit is ₹5,000",
      "It matures when the girl turns 60"
    ],
    correct: 0,
    explain: "The Sukanya Samriddhi Account is for a girl child (age ≤10 at opening), opened by a guardian, minimum ₹250 and maximum ₹1.5 lakh per financial year. It matures 21 years from opening; partial withdrawal up to 50% of the prior year-end balance is allowed after age 18; deposits qualify for Section 80C."
  },
  {
    q: "Small saving schemes (PPF, NSC, SCSS, KVP, Sukanya Samriddhi, Post Office schemes) share which central attraction?",
    options: [
      "The implicit guarantee of the government, which is the borrower",
      "Guaranteed equity-like returns",
      "Freedom from any lock-in",
      "Exemption from all regulation"
    ],
    correct: 0,
    explain: "The main attraction of small saving schemes is the implicit guarantee of the government, which is the borrower. They are offered through the post office and select banks to encourage regular saving."
  }
];
