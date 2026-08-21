#### **CHAPTER 6: MISCELLANEOUS ASPECTS OF RETIREMENT PLANNING** 

###### **LEARNING OBJECTIVES:** 

After studying this chapter, you should know about: 

- Advisor’s role in retirement planning 

- Calculations for retirement planning 

- Criteria to evaluate various retirement benefit products 

- Concept of Philanthropy 

##### **6.1 Advisor’s role in Retirement Planning** 

<mark>Investment advisers can play an important role in planning for retirement of their clients. They understand their clients’ financial goals and know when the client will need savings</mark> and on what they will be spending. 

<mark>While creating a detailed financial plan, the adviser will have a clear understanding of the financial assets that are accumulated, as well as other resources such as pensions, Social Security, part-time work, home equity, etc. The adviser then put these pieces of a puzzle together in a way that will result in reliable monthly income once client is retired. This regular income planning requires an in-depth knowledge of taxes, employer benefits, and retirement plan rules. Such knowledge often requires years of experience and training to</mark> accumulate. 

<mark>An investment adviser will be able to offer advice on:</mark> 

- <mark>When to take employer benefits in a way that is best for them</mark> 

- <mark>What pension distribution choices are right for their client needs</mark> 

- <mark>If an annuity is a suitable investment for any of their client</mark> 

- <mark>The amount of retirement income one could reasonably expect to have</mark> 

- <mark>What withdrawal rate is appropriate when withdrawing money from a traditional portfolio</mark> 

- <mark>How much of the money should be in guaranteed investments</mark> 

- <mark>What types of taxable income investments will generate</mark> 

- <mark>How can investments be restructured to reduce taxable income in retirement</mark> 

- <mark>If client should pay off mortgage before or during retirement</mark> 

- <mark>If a reverse mortgage is a good option for the client</mark> 

- <mark>Whether client should keep their life insurance policies or not</mark> 

<mark>An investment adviser will</mark> _<mark>not</mark>_ <mark>make recommendations until they understand the client’s expected time horizon, their level of experience with investments, their goals, and their tolerance for investment risk. They will also want to understand the need for guaranteed</mark> 

120 

<mark>income and get a thorough understanding of all the current resources such as assets,</mark> liabilities, and current and future sources of income. 

<mark>The adviser</mark> _<mark>will</mark>_ <mark>want to know where all the client investments are so that the investment portfolio, as a whole, will make sense and can be optimized to produce a steady stream of retirement income.</mark> 

##### **6.2 Calculations for Retirement Planning** 

Higher disposable incomes and easy availability of finance have increased the lifestyle of Indians. People who are in mid 30s are earning handsomely and have a comfortable lifestyle today. Children going in good school, have own house to live in and have a respectable social life. However, many of these lifestyle assets are mortgaged with lenders and one is burdened with many EMIs.  All these expenses bundled with high education cost leave very less for retirement savings. 

Further, the presence of inflation, i.e. the rate at which prices of all essential items increase every year, impacts one’s purchasing power in future. An item of Rs 100 today will cost Rs 107 next year if inflation rate is 7%. This means that the expenses increases by this rate every year and one will have to shell out much more than what is required today to meet their living. So if one is spending Rs 10000 p.m. today to meet their living, to sustain the current living standard he/she will require Rs 54724 p.m. after 25 years (expected inflation of 7%). Add to this, the risk of longevity i.e. the increase in the life expectancy, the retirement years can be really painful if not planned in advance. 

###### **Retirement corpus required** 

A person generally gets concerned when he/she sees the high amount of retirement corpus required for their golden years. Sometimes what they ask is beyond their means. But, one should take into consideration that retirement living is always based on ones existing lifestyle which he/she builds. Since inflation decreases the value of money (i.e. the purchasing power of money) the corpus requirement in future will always be higher for maintaining the same standard of living. 

Estimating the future requirements is necessary to ensure appropriate planning for later years of life. Although, the expenses at retirement are generally lower than the current expenses, as one is free from loan liabilities and children’s goals, the high cost of medication at higher age, however, should be considered while planning. One can estimate that expenses at retirement are roughly 50%-60% of one’s existing expenses if there are not any liabilities. 

121 

To calculate the retirement corpus one have to consider the longevity of life. One may expect life till 75 years but may live beyond 80 years of age, which may add another 5-10 more years. 

Given below is an estimation of retirement corpus for an individual who is at the age of 35 years and wishes to retire at the age of 60 years. Here, life expectancy is assumed till the age of 85 years. 

||**Scenario 1**|**Scenario 2**|**Scenario 3**|
|---|---|---|---|
|Monthly Income (Rs)<br>[GIVEN]|20000|30000|50000|
|Monthly Expense (Rs)|15000|25000|40000|
|Monthly expense for<br>Retirement (say,<br>60%) (Rs)|9000|15000|24000|
|Inflation rate p.a.|7%|7%|7%|
|No. of Years to retire<br>(60-35)|25|25|25|
|Monthly expense at<br>retirement (Rs)|9000*(1.07)^25=<br>48847|15000*(1.07)^25=<br>81411|24000*(1.07)^25=<br>130258|
|Life expectancy post<br>retirement (in years)|85|85|85|
|No. of Years post<br>Retirement (85-60)|25|25|25|
|Post Retirement<br>Inflation expected|6% p.a.|6% p.a.|6% p.a.|
|Return on the<br>retirement corpus|8% p.a.|8% p.a.|8% p.a.|
|**Retirement Corpus**<br>**Required    (Rs)#**|**1.17 cr**|**1.95 cr**|**3.11 cr**|



# For calculating Retirement Corpus, Present Value Formula in excel is used. 

###### **_Formula:   =PV(rate, nper, pmt, [fv], [type])_** 

The PV function uses the following arguments: 

|**Argument**|**Meaning**|**Inputs as per the above Example**|
|---|---|---|
|_rate_|The interest rate per compounding|Inflation adjusted return on the|
|(required argument)|period. A loan with a 12% annual<br>interest rate and monthly required<br>payments would have a monthly|retirement corpus is<br>{(1+8%)/(1+6%)-1} p.a. i.e. 1.89%<br>p.a.|



122 

|**Argument**|**Meaning**|**Inputs as per the above Example**|
|---|---|---|
||interest rate of 12%/12 or 1%.<br>Therefore, the rate would be 1%.|This is equivalent to 1.89%/12 p.m.<br>[This is same in all scenarios]|
|_nper_<br>(required argument)|The number of payment periods. For<br>example, a 3-year loan with monthly<br>payments would have 36 periods.<br>Therefore, nper would be 36 months.|Expected post retirement years is<br>25 years i.e. 300 months (25*12).<br>[This is same in all scenarios]|
|_pmt_<br>(required argument)|The fixed payment per period.|As calculated in above table:<br>Scenario 1: - Rs. 48847<br>Scenario 2: - Rs. 814111<br>Scenario 3: - Rs. 130258<br>[Since these are cash outflows i.e.<br>expenses, the amounts are prefixed<br>with a ‘minus’ sign]|
|_fv_<br>(optional argument)|An investment’s future value at the<br>end of all payment periods (nper). If<br>there is no input for fv, Excel will<br>assume the input is 0.|This is left blank.|
|_type_<br>(optional argument)|Type indicates when payments are<br>issued. There are only two inputs, 0<br>and 1. If type is omitted or 0 is the<br>input, payments are made at period<br>end. If set to 1, payments are made at<br>period beginning.|The payments are considered to be<br>made at the end of each period.<br>Thus, it is taken as 0 (i.e. left blank).|



The above data clearly shows the impact of inflation and indicates the need of retirement planning at an early stage. Procrastination or delay in planning impact the savings required for reaching the estimated corpus. 

The below table shows how the requirement for savings increases manifold when one delays the contribution towards retirement corpus. This can strain the finances in later years considering presence of other important goals and liabilities to meet. 

||**Scenario 1**|**Scenario 2**|**Scenario 3**|
|---|---|---|---|
|Retirement Corpus<br>required (Rs) [GIVEN]|1.18 crore|1.18 crore|1.18 crore|
|Age to start Investment<br>(Yrs)|30|35|40|
|Time horizon of<br>investing till retirement<br>(Yrs)*|60-30 = 30|60-35 = 25|60-40 = 20|



123 

|Returns Assumed (%)|12|12|12|
|---|---|---|---|
|**Monthly Savings**<br>**required to reach the**<br>**Corpus (Rs)#**|**3376**|**6280**|**11928**|



*Retirement age is 60 years. 

# For calculating monthly savings required to reach the corpus, PMT function in excel has been used. 

**_Formula:    =PMT(rate, nper, pv, [fv], [type])_** 

The PV function uses the following arguments: 

|**Argument**|**Meaning**|**Inputs as per the above Example**|
|---|---|---|
|_Rate_<br>(required)|The constant interest rate per period. It can<br>be supplied as a percentage or a decimal<br>number.<br>For example, if one makes annual payments<br>on a loan at an annual interest rate of 10<br>percent, use 10% or 0.1 for rate. Similarly, if<br>one makes monthly payments on the same<br>loan, then use 10%/12 or 0.00833 for rate.|It is given as 12% p.a. i.e. 12%/12<br>per month.<br>[This is same in all scenarios]|
|_Nper_<br>(required)|The number of payments for the loan, i.e. the<br>total number of periods over which the loan<br>should be paid.<br>For example, if one makes annual payments<br>on a 5-year loan, input 5 for nper. Similarly, if<br>one makes monthly payments on the same<br>loan, then multiply the number of years by<br>12, and use (5*12) 60 for nper.|<br>As calculated in above table:<br>Scenario 1: 30 years i.e. 360 months<br>Scenario 2: 25 years i.e. 300 months<br>Scenario 3: 20 years i.e. 240 months|
|_Pv_|The present value, i.e. the total amount that<br>all future payments are worth now. In case of<br>a loan, it is simply the original amount<br>borrowed.|<br>This is left blank.|
|_Fv_|The future value, or the cash balance you<br>wish to have after the last payment is made.<br>If omitted, the future value of the loan is<br>assumed to be zero (0).|The retirement corpus required at<br>the time of retirement is given as<br>Rs. 1.18 crore.<br>[This is same in all scenarios]|
|_Type_<br>(optional)|It specifies when the payments are due:|The payments are considered to be<br>made at the end of each period.<br>Thus, it is taken as 0 (i.e. left blank).|



124 

0 or omitted - payments are due at the end of each period. 1 - payments are due at the beginning of each period. 

###### **Benefits of stepping up Investment in the accumulation years** 

Accumulation years are filled with uncertainties. An emergency may arise which force to defer the contributions planned for retirement. There may be liabilities running which impact the savings ability. Any of such situations will be a deterrent to retirement goals, knowing that most retail investors rely on regular savings to accumulate for the future goals. 

Most of the investments towards retirement are fixed contributions and with limited savings. There is a probability that these fixed contributions fall short because one has insufficient of funds during the initial years of accumulation phase. One of the strategies to avoid these situations is stepping up the investment in accumulation years. 

In a stepping strategy, one steps up their contributions periodically with regular payments or with a lump sum amount. In a periodic step up strategy an individual starts with a fixed investment but steps up by a certain percentage every year. Such stepping up of contributions helps in maximizing the savings for retirement. It can be done through investments in EPF, NPS or mutual funds. 

###### For example: 

If one is eligible for any employer sponsored plans like EPF, they can contribute to the maximum amount. Similarly, if one is aged 50 years and above and wishes to boost savings, can consider investing through Voluntary Provident Fund. This will help in maximizing gains in retirement accumulation stage since returns are tax exempted in this avenue. 

If one has opted for NPS then there is no limit to invest. Beyond employers contribution one can invest any amount through various means of SIP or lump sum contribution plans to step up their investments either way. 

Lastly, mutual funds offer an option of step up Systematic Investment Plans (SIPs) where through an automated feature, the SIP contributions are increased after a specific period, <mark>for instance, Rs. 5000 in 2023, Rs. 5000+10% in 2024 and so on. This is done taking into consideration of the current income, prospective yearly increments and of course, financial goals. This lays down a set plan for the investor to reach the predetermined investment amount over a period of time. The main attraction about SIP is convenience. Investors can automate the payments on their salary day. Suppose, if the income increases by 10%, then</mark> 

125 

<mark>the investor can step-up their investment amount by at least 5% to 7%. With every annual bonus, hike or increment, one can step-up their SIP, adding more contributions to their retirement corpus.</mark> 

<mark>In all the methods illustrated above, stepping up the contributions helps in reaching the required retirement goals with the limited resources available.</mark> 

<mark>Let’s understand this from an example: Mr. A has to accumulate a retirement corpus of Rs 2.0 crore in 20 years. Assuming a rate of return of 12% per annum on his contributions, he will need a monthly fixed savings of Rs. 20,217 to reach the desired goal (using PMT formula in excel).</mark> 

<mark>Now if he steps up his monthly contributions by 7% annually then he can start with lower contributions initially and increase on yearly basis. This will help him to optimize his savings.</mark> 

<mark>Not all are able to generate higher saving initially. Starting with lower amount, the requirement increases with time, and thus one loses on compounding benefit. Stepping up strategy helps in increasing the investment proportionally as income increases leading to compounding of one’s wealth.</mark> 

###### **Impact of pre-retirement Withdrawals on retirement corpus** 

The statistics on EPF shows that many investors do not reach the retirement age with a good accumulation. Most of the accumulation in EPF is withdrawn before retirement for many other needs like children’s education, marriage, medical emergencies, and house purchase. Though this avenue provides liquidity to the investors, it is still used by many when not in need. 

Any withdrawal from retirement funds well before reaching the retirement will have a detrimental impact. The accumulation for retirement years will fall short of reaching the corpus if funds are withdrawn much early. Further, not having enough funds for the retirement years will force to either work for more years (i.e. postpone retirement) or adopt strategies to reduce your lifestyle so that the money can last longer than one have expected. 

Let’s consider the retirement product – Employees’ Provident Fund (EPF). It is a long term investment where returns are compounded, and provides tax deduction benefits. If one withdraws from his EPF account in pre-retirement stage, it will hurt his EPF accumulation for retirement years. 

126 

For example if Mr. E withdraws Rs 75000 from his EPF balance, where he has still 30 years to retirement, he will potentially lose Rs 8.66 lakh if his EPF balance earns 8.5% p.a. for this period. 

The above example clearly spells out the impact on the retirement fund if withdrawn early in pre-retirement stage. Even if one has financial difficulties while opting for such an option he/she needs to think whether he/she can fill the gap later and contribute more to reach their retirement corpus as planned and calculated. 

###### **Benefits of transferring retirement corpus from one employer to another** 

Retirement benefit products are structured for long term accumulation. The magic of compounding makes them an excellent product only when it is continued for long term. But there are situations like switching jobs where people end up losing this benefit as they are unable to shift the previous employer corpus. 

Let us consider an example on EPF. While switching jobs, one may open a new EPF account with the new employer. If done multiple times, it results in multiple EPF accounts. Apart from having operational issues, this has a cascading effect due to taxation of the older EPF balances if certain conditions are not met. Also, one ends up losing the compounding benefit on the older corpus which would have added to the retirement goal substantially. 

However, with UAN in force the rules of transferring EPF from one employer to another has eased out.<sup>22</sup> Now an employee can transfer EPF account from old employer to new employer completely online. But, to make it effective the employee has to ensure the UAN is updated along with KYC and personal details. 

Contrary to EPF, NPS has easier process of shifting corpus to new employer while switching jobs since one cannot have multiple NPS accounts. Once a Permanent Retirement Account Number (PRAN) is generated with an employer the same PRAN can be used to shift the corpus to new employer, if that is also a registered entity. If not, then the employee can still continue the PRAN under ‘All Citizen Model’. 

###### • **_Taxability Clause_** 

As already discussed in Chapter 5, taxability on withdrawals of EPF balance is based on the number of years of employment. If the employee changes his employer in less than 5 years and withdraws his old EPF balance, then the withdrawal becomes taxable. In such cases, the employee can transfer his PF account balance of the old employer to the new employer without incurring any tax incidence. Also, transferring of old PF balance to the new PF 

> 22 Universal Account Number (UAN) is a 12 digit unique number allotted to each employee contributing to the Employees Provident Fund (EPF). This number remains the same for each employee throughout their life irrespective of the number of times they have joined new organisations. 

127 

account will result in including the service period with old employer to compute the employee’s total service period. 

Under NPS, taxability on partial or full withdrawal is subject to various conditions (refer Chapter 5 for details). 

###### • **_Compounding Effect_** 

The other benefit of transferring the retirement corpus to new employer is compounding impact. Though NPS can be shifted without any difficulty, EPF has more stringent clauses. Unlike EPF, NPS can be converted to ‘All Citizen Account’ and one can continue the product for retirement.  This is not the case with EPF. 

The corpus lying with old employer will earn interest till the age of 58 years. However, the taxability of such corpus will depend upon certain criteria. Considering EPF is a long-term product with compounding interest and tax-free returns (upto certain limits), it is more beneficial when one continues to earn on the accumulated corpus. However, if one withdraws the old corpus without transferring the same to the new employer account, he has to start all over again with the new employer where the contribution requirement has already increased by then. One may or may not generate required savings now since they have other goals to plan.  By adding the older corpus you remain to the same path which you have planned earlier and reach your desired goal without any major impact on other financial goals. 

Thus, while switching jobs, transferring the existing retirement corpus from one employer to another is more beneficial and rewarding for meeting the retirement goal. 

##### **6.3 Criteria to evaluate various retirement benefit products** 

People often make mistake in selecting appropriate products for their retirement, which they have to shun later on. This impacts the retirement corpus they want to create through that product. It is important that any retirement benefit products should be evaluated on various parameters, before investing, to check its suitability to meet the end objectives. 

One of the best ways to evaluate any retirement benefit products is to consider life stages. In general, there are three life stages around retirement. 

###### **Pre-retirement** 

This is the phase where objective is to accumulate. One is 15 to 20 years away from retirement. Though there are other goals, which have to be met, with higher disposable income and no excess income requirement, the risk appetite is higher. While evaluating 

128 

retirement benefit products, one should look at products which allow money to grow even though downside risk may be there. The longer horizon will allow managing this risk by riding through cycles of downside. Any income benefit product may not be a viable option for this phase. 

A retirement benefit product at this phase should be evaluated on the following factors: 

1. Cost: Cost is one of the major factors in any long-term product. More the cost less is the earning and so the accumulation. In some products, the total cost may not be clear. 

2. Return: Since the focus is on accumulation and ample time is available, the product should be able to generate returns, which can beat inflation and grow money. 

3. Risk: There will be risk factors associated with a product which may offer higher returns. Understanding of these risks is absolutely important to ensure it aligns with one’s risk tolerance. 

4. Tax Efficiency: The impact of taxation can be high in long term products. Different products are treated differently under Income Tax provisions. Products where taxation impact can be reduced are considerable products for retirement. 

Employee benefits like EPF/ NPS are long term products and fit into the criterion for a retirement benefit product. There are other long term products like PPF and a few categories of Mutual Fund schemes which are considered for retirement planning. Before making a selection, these products should be evaluated on the above factors. 

###### **Retirement** 

The second stage is when one has retired. At this stage, the need will change as there will be a requirement of steady income along with growth of the accumulated corpus. There may not be any time horizon for this income requirement as the need is for the lifetime. 

2 types of products will be required – one which can generate income and other which can grow the corpus. For income generating products, evaluation should be done based on 2 factors: 

1. Inflation: The income generated need to beat inflation to sustain the longevity risk. How much income is generated for lifelong and how it beats inflation are important areas to evaluate in any product. 

2. Capital Protection: Along with income generation, the protection of the capital is also required. Any product, which generates income but fluctuates the capital may not be a viable option for this objective. 

129 

The second basket in this phase is the growth. The corpus needs to grow so that it can sustain longer. Here, long term products should be the choice as the horizon for this basket will be 10 to 15 years. The evaluation factors will remain the same as of pre-retirement phase but products may change. Now EPF, NPS may not be viable and so one may have to rely on PPF, certain categories of mutual funds and others. 

###### **Post Retirement** 

The third phase of the retirement planning is later years of life i.e. beyond 75 years. Now the objective shifts completely to generate the income, as long horizon to grow the money is no more viable. The protection of capital is the primary factor along with low return with least risk. These become the evaluation criteria for selecting any product in this phase. Also, one objective which adds now is leaving money for heirs where liquidity might be the primary factor. 

##### **6.4 Concept of Philanthropy** 

Philanthropy has been the talk of the town globally. The urge to do for others is not only limited to rich and wealthy, now many small income earners wish to contribute to their society. The reasons are not unexplained. India is the second largest population in the world. Being such a large country, it has to deal with many issues. The disparity between poor and rich is increasing as we are progressing. The poverty is on higher side and poor are not able to get the required attention. Unless the realm of poverty and issues of disabled are addressed, it is difficult for a country to march towards a real progress. However, this cannot be achieved by government initiatives alone, unless as a country everyone contributes to the cause. 

In our country, slowly but steady, individuals with any amount of income are willing to contribute for the noble causes. Within their capacity, they are coming forward to donate part of their income to ensure the needy are being taken care of. This also gives a satisfaction that one has contributed their share for better development of surroundings. 

**For Investment Advisers** : <mark>Communicating with their clients about their values and passions in life is a meaningful way to strengthen client relationships. It can also be enjoyable, and a natural part of building clients’ trust in the Investment Adviser.</mark> 

<mark>Below are the steps an Investment Adviser may follow to discuss philanthropy with their clients:</mark> 

<mark>▪</mark> **<mark>Starting the conversation</mark>** 

130 

<mark>Speaking with someone about their values does not have to be a serious, awkward conversation. In fact, it can be quite interesting. It is also an important opportunity to learn more about clients and invite further, more meaningful interactions going forward. (see Box 6.1)</mark> 

###### **Box 6.1: Sample conversation between an Investment Adviser and a Client** 

The conversation might start by saying: 

_<mark>I’m pleased with what we’ve accomplished together in preparing you for retirement. We’ve met your financial objectives and I hope you feel secure about your financial plan.</mark>_ 

_Now is when we like to talk a bit about your personal and family values. If you’re passionate about particular social or environmental causes, my team can help you address those values through a charitable giving plan. Is this something you’d be interested in talking more about?_ 

Even if clients haven’t given the topic much thought, advisers are at least opening the door to further discussion and providing them with advice and resources when they’re ready. 

###### <mark>▪</mark> **<mark>Timing it right</mark>** 

<mark>Choosing the right moment to introduce the topic of charitable giving can make the conversation flow easily. There are a number of situations that could naturally spark a conversation about Philanthropy, such as:</mark> 

- <mark>A liquidity event, such as the sale of a business or an inheritance</mark> 

- <mark>Whilst drafting or revisiting a will</mark> 

- <mark>A life event, such as retirement, marriage or the birth of children or grandchildren</mark> 

- <mark>During an annual client meeting</mark> 

###### <mark>▪</mark> **<mark>Following up</mark>** 

<mark>Now that the Investment Adviser has raised the topic of charitable giving with his clients, it is up to the adviser to follow up.</mark> 

While philanthropy is important to a lot of people in principle, it can easily fall to the bottom of a busy person’s to-do list. If they have expressed genuine interest in developing a charitable giving strategy, the clients will expect the Investment Adviser to follow up with resources and next steps. 

131 

