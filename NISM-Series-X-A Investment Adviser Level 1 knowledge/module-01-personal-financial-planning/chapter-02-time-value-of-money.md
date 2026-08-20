**<u>CHAPTER 2: TIME VALUE OF MONEY</u>** 

##### **LEARNING OBJECTIVES:** 

After studying this chapter, you should know about: 

- Time Value of Money 

- Concept of Annuity 

- Concept of Perpetuity 

#### **2.1 Time Value of Money** 

The value of money does not remain the same at all points of time. The money available at the present time is worth more than the same amount in the future since it has the potential to earn returns (or interest as the case may be). Consider the following options, assuming there is no uncertainty associated with the cash flow: 

- Receiving Rs.100 now 

- Receiving Rs.100 after one month 

All investors would prefer to receive the cash flow now, rather than wait for a month, though the amount to be received has the same value. This preference is attributed to the following reasons: 

- Instinctive preference for current consumption over future consumption. 

- Ability to invest the Rs.100 for a month like a bank account or deposit and earn a return so that it grows in value to more than Rs. 100 after one month. 

Clearly, Rs.100 available now is not equivalent to Rs.100 received after a month. The value associated with the same sum of money received at various points on the timeline is called the time value of money (popularly known as TVM). The time value of money received in earlier periods as compared to that received in later time periods will be higher. Since most decisions in finance involve cash flows spread over more than one period (monthly, quarterly, yearly etc.) the time value of money is a key principle in financial decision-making. 

31 

##### **Box 1.1 DID YOU Know - DYK or Historical Perspective** 

Records dating as far back as 5000 BC indicate that the Mesopotamians, Hittites, Phoenicians, and Egyptians charged interest when they loaned such items as olives, dates, seeds, and animals. The time value of any loaned item was perhaps easiest to see with the loaning of seeds because any successfully planted seed would yield a plant that would produce more additional seeds. Thus, it was wise to get seeds in the ground, both to yield a healthy crop and to have more seeds for future plantings.<sup>*</sup> 

Since money has time value, it is not possible to compare cash flows received in different time periods. Consider the above example: suppose the Rs.100 received now is placed in a one-month bank deposit yielding 6 % p.a. After a month, the value would grow to Rs.100.50. If an investor has to opt for receiving Rs.100 after a month, then he needs to be compensated by Rs.0.50, the amount that has been foregone by waiting for a month.  The two options will be equivalent from the investor’s point of view if the option is to receive Rs.100 now or Rs.100.50 after one month. 

When time values are taken into account, the following points need to be noted: 

● Future inflows are discounted by a relevant rate to reach their present value; this rate is known as the discount rate or return rate or interest rate. 

● Present inflows are increased at a relevant rate to reach their future values: this rate is known as the compound interest rate. 

● The later in the future a cash flow is likely to be received, the lower its value at the current time. Rs.100 available after one month is more valuable today than Rs.100 available after one year, which has a better value today than Rs.100 available after 5 years. ● The higher the discount rate, the lower the present value of future cash flows. A higher rate means that investors have to forego more returns by opting to receive the money today instead of future cash flows. 

For example, Rs 1,000 received after 3 years when discounted at 5 per cent is worth Rs 864 today but the same amount discount at 8 per cent is worth only Rs 794. 

In any time, value situation, the important parameters are: a. Cash inflows or outflows: These could be either in the form of single period cash flow or in the form of an annuity or a stream of uneven or even cash flows. b. Rate of interest: Also known as compounding rate or discount rate or reinvestment rate. c. Time Period: This may be annual or any other fraction thereof like monthly, quarterly etc. d. Frequency of cash flows, which may or may not be fixed. Financial problems involving time value of money are usually concerned with calculating one of the above parameters. 

> * _(https://www.encyclopedia.com/finance/encyclopedias-almanacs-transcripts-and-maps/time-valuemoney)_ 

32 

#### **2.2 Calculate the following** 

#### **2.2.1 Present value** 

Present value is the amount that you would pay today for a cash flow that comes in the future. It brings the future value down to today’s price. It is based on the basic principle of time value of money that value of money keeps reducing as time passes. 

There are two ways in which the present value can be calculated. 

If there is a future value that has been given then this can be brought to the present by discounting it by the rate of return. This will give an idea of what the value of the future amount is worth today. 

PV = FV/(1+r)^n 

Where 

FV= Future Value 

PV= Present Value 

r = rate of return for each compounding period 

n = number of compounding periods 

For a one time receipt, PV is calculated as per the following formulae: 

PV = C/(1+r)^n 

In case of a regular cash flow the present value can be calculated by the following formula 

PV = C * ((1-(1/(1+r)^n))/r) 

Where C is the regular cash flow 

For example, Shyam is going to receive a sum of Rs 6,500 a year for the next 8 years at an interest rate of 7 percent. He would like to know whether he should take the cash flow or a lump sum now and what this would be worth 

In this case using the formula or the excel function the Present value would come to 

PV = 6500/(1.07)^1  + 6500 /(1.07)^2 + 6500 / (1.07)^3 + 6500 /(1.07)^4 + 6500 / (1.07)^5 + 6500/( 1.07)^6 + 6500 / (1.07) ^7 + 6500 / (1.07)^8=38813.44 

The present value can also be arrived at using the formula for a regular receipt 

33 

###### Function Arguments 



<!-- Start of picture text -->
Function Arguments ? bs<br>Py a<br>Rate | 0.07| t = 0.07<br>Nper 38 kt = 86<br>Pmt | -6500 *) = 6500<br>Fv jo kt = 0<br>Type t =<br>= 38813.44029<br><!-- End of picture text -->



<!-- Start of picture text -->
Returns the present value of an investment: the total amount that a series of future payments is worth now.<br><!-- End of picture text -->

Rate is the interest rate per period. For example, use 65/4 for quarterly payments at 6% APR, 

Formula result = 738,813.44 Help on this function 



<!-- Start of picture text -->
Cancel<br><!-- End of picture text -->

#### **2.2.2 Future value** 

Future value represents what something is worth at some point in the future. There can be various amounts for which such a future value might need to be calculated and this will give an idea of the erosion in value from the current period. 

FV = PV (1+r)^n 

#### Where 

FV= Future Value 

PV= Present Value 

r = rate of return for each compounding period 

n = number of compounding periods 

Note that the rate of return for each compounding period has to be adjusted for the frequency of compounding. For example, if an investment pays 8% interest p.a. compounded quarterly, then the applicable rate of return for each compounding period is 8%/4, or 2%. Or it can be different for different periods in future. 

The number of compounding periods (n) refers to the periodicity with which interest is paid on the investment during the year. For example, the Post Office Monthly Income Scheme (MIS) pays interest every month, while the Senior Citizens Scheme pays every quarter. The greater the frequency of compounding, the more often interest is paid on interest, and the greater are returns earned through compounding. 

Consider the following example. 

Krishna invests Rs.5 lakhs in a 5 year bank deposit that pays 8% interest compounded annually. What is the interest he earns from the investment in the following three scenarios? 

Scenario: 1 The interest is used to pay the college fees of his daughter and there is no compounding. 

Scenario: 2 The cumulative option is chosen and the interest is paid at maturity i.e. interest is compounded yearly. 

Scenario: 3 If the interest is instead compounded quarterly and he chooses the cumulative option. 

#### <u>Under Scenario 1</u> 

The interest income earned is: Rs.5 lakhs x 8% x 5=Rs.200,000 

35 

There is no compounding benefit since the interest is taken out and used and not re-invested. This is also known the simple interest. 

#### <u>Under scenario 2</u> 

The maturity value will be= 500,000 x (1+8%)^5= Rs.734,664 

Interest income earned over 5 years = Rs.734,664- Rs.500,000= Rs.234,664 

_The interest income is higher because the interest earned each year is re-invested and earns interest too. This is the compounding benefit._ 

#### <u>Under scenario 3</u> 

Here the interest is compounded quarterly so this requires the rate to be divided by 4 while the total quarterly period are 20 during the 5 years 

The maturity value will be= 500,000 x (1+(8%/4)^20) 

= 500,000 x (1+2%)^20= Rs.742,974 

Interest income earned over 5 years = Rs.742,974- Rs.500,000= Rs.242,974 

_The interest income is higher than scenario 2 because the frequency of compounding is higher. The interest is paid each quarter and this earns interest for the remaining period._ 

The future value of an investment can be easily computed in EXCEL using the FV function which prompts the user to input the interest rate, the number of total periods in the investment, the payment made each period, and whether payment is made at the beginning or end of the period. 

#### **FV( rate, nper, [pmt], [pv], [type] )** 

For example, a sum of Rs 5,000 growing at 8 per cent per annum will become Rs 7346.64 in 5 years 

FV (0.08,5,,-5000,,0) Type is 1, assuming the cash flow is happening at the beginning of the period. 

FV = 7346.64 

#### **2.2.3 Rate of return** 

The rate of return is the percentage rate that is earned on a particular investment. There are times when the investor has just the amount that has been earned but this needs to be converted into a rate of return. This will enable proper comparison with other instrument and options that are present in the market and will aid in proper decision making too. 

36 

r= (Fvs/pvyG/n) — 4 

CAGR = ((1.2) ^ (1/2)) - 1 

= 1.095 – 1 

= 0.095 

= 9.5% 

In Excel the CAGR can be found out by the Rate Formula 

CAGR = RATE(Years,,-PV,FV) 

In the above example 

NPER or years =2 

PV = -100 

FV = 120 

=RATE(2,,-100,120) 

=0.0954 or 9.54% 

CAGR is the accepted standard measure of return on investment in financial markets, except in case of returns that involve periods of less than one year. 

The following example shows how CAGR is computed for a mutual fund investment. 

Assume that Rs. 10.50 was invested in a mutual fund and redeemed for Rs. 12.25 at the end of 3 years. What is the compounded rate of return? 

In this problem, Rs.10.50 grew at some compounded rate to become Rs.12.25 at the end of 3 years. To solve for the CAGR, we use the formula:  CAGR = ((12.25/10.5) ^ (1/3)) – 1 = 5.27% 

The same formula may be applied for fractional compounding periods. Consider this example: 

An investor purchased mutual fund units at an NAV of Rs.11. After 450 days, she redeemed it at Rs.13.50. What is her compounded rate of return, assume that it’s a non-leap year? 

In order to use the CAGR formula, period of 450 days has to be converted into years or 450/365 years. 

CAGR = ((13.5/11) ^ (365/450)) – 1 

= 0.1807 = 18.07% 

38 

#### **2.2.4 Periodic investments or pay-outs** 

There are a lot of areas where the investor will be making a regular or a periodic payment. The most common example is that of a loan, where there is a regular Equated Monthly Instalment (EMI) being paid out to the lender each month. It is essential to know the amount that would be paid, so that there can be a proper planning made of how the amount should be accumulated. 

This can be obtained using Excel using the PMT formula where the inputs will be the following 

r = the rate of interest on the loan 

Nper = the number of periods for which the loan has to be repaid 

PV = the value of the loan that has to be repaid 

The figure that emerges will be the EMI that will have to be paid. 

For example, Satish is thinking of taking a loan of Rs 30 lakh for the purchase of a house property in his hometown. The current rate of interest is 6.5 per cent with a monthly reset and he is looking for a 20 year loan. What would be his monthly EMI? 

In this case, all the relevant details are available. One thing to take care of is that the interest rate would have to be divided by 12 because the period for this is monthly. At the same time the period of payment is monthly so this would become 240 months. 

Entering the figures into the formula it will be 

PMT =(0.065/12,240,-3000000) type is 0 assuming EMI is payable at the end of the month PMT = 22367.19 

The final EMI figure that would have to be paid comes to around Rs 22,367. This kind of calculation can be done, so that the client is able to know whether the amount is affordable for them. Also, any change in the interest rate can also be applied to witness the kind of impact that is seen in the monthly payments and the change therein. 

For example, in the above case if the interest rate falls to 6.25 per cent then what will be the EMI for the 20 year loan. In this case 

PMT= (0.0625/12,240.-3000000) 

PMT =21927.85 

39 

This shows that the EMI will fall to around Rs 21,928 when the interest rate falls by 0.25 per cent from the earlier case. Changes at any point of time during the loan period can be seen through this calculation. 

#### **2.2.5 Period of the loan (NPER)** 

There are times when a person would like to know the time period within which they would be able to pay off an amount. Given the fact that there is a capital amount that is present along with the loan interest and a fixed amount repaid each month the amount in which the loan can be repaid can be known. This is also known by its Excel term NPER. 

The details that are vital here is the 

r = rate of interest on the loan 

PMT = the equal payment on the loan 

PV = The present value of all the future payments 

For example, a person wants to know the NPER of a loan that is worth Rs 5 lakh now and where the EMI is Rs 12,000 per month. The rate of interest on the loan is 8 per cent. 

In this case too since this is a monthly payment the interest rate would have to be divided by 12 and putting this into the Excel formula we get =NPER(0.08/12,-12000,500000). 

= 48.97 

The result is 48.97 months. This gives a clear idea about the time period in which the payment would be complete. 

The NPER is useful to calculate the time period of repayment and this is then matched with the EMI payable, so that it can be affordable for the individual. 

#### **2.2.6 Annuity** 

An annuity is a sum of money paid at regular periods, such as monthly, quarterly, annually. A common example of an annuity is pension. Annuities can be of two types (1) Fixed annuity and (2) Flexible annuity. 

Fixed Annuity means that fixed returns are received at regular periods. For instance, a fixed deposit with a bank paying 5.5 % p.a. on the investment for a predetermined term assured (for example, for the next 5 years). 

40 

Floating annuities are those in which the returns are benchmarked to inflation or index returns or any other return as specified in the indenture agreement at the time of buying. So, the annuities paid are not fixed, but change in line with the chosen benchmark. 

Annuities are used extensively during retirement wherein there is the need for a regular cash flow and this is generated by several investment instruments. There are various terms by which an annuity is referred to but the key point is that the feature of all these are that there is a regular sum of money being received. 

There are two types of annuities that can be received on an investment: 

#### **Ordinary Annuity** 

An annuity is differentiated based on the time period when the payment on it is made. In case of an ordinary annuity the payment is made at the end of the relevant time period. Most of the annuities are of this type as the payment comes at the end of the period. Consider for example a bond, which pays out a sum of money. This is received at the end of the year if the payment is made annually and this becomes an ordinary annuity. 

The way to calculate an annuity is to look at the present value of such a cash flow. This will tell you what the future payments are worth at the present time. This can also be used to make various calculations in terms of how much is required in order to ensure a certain payment in the future. 

The calculation for an ordinary annuity can be done as a normal present value formula. 

For example, consider an annuity that is paid out each year of Rs 5,000 and this is at a rate of return of 10 per cent for a period of 4 years. In this case the present value of the annuity would come out to 

PV = PV(0.1,4,-5000) type 0, assuming end of the year 

PV = 15849.33 

When the PV calculation is made in excel there is a row for details to be entered called type present in the formula. This is usually left blank and it takes the default position of the payment coming at the end of the period. 

There can also be the use of an annuity table for the purpose of the calculation. An annuity table gives a multiple for different rates of interest and varying time periods. One can just look up the annuity table figure and then use this in the calculation. 

For example, consider a person who wants to value an annuity of Rs 12,000 a year for 10 years at 5 per cent per annum. The normal PV calculation will give the answer as: 

41 

#### PV =PV(0.05,10,-12000) 

PV = 92,660 

Looking at the annuity table the annuity factor for 10 years at 5 per cent is 7.7217 

So, PV = 12000 X 7.7217 

PV = 92,660 

#### **Annuity Due** 

There is a change that occurs in an annuity due as compared to an ordinary annuity and this is with respect to the time period when the payment is made. Here the payment is made at the start of the period instead of at the end of the period. This will impact the value of the annuity because if you are a person receiving the payment then you are getting it at the start of the year which gives the chance for this to be deployed during the year. 

In order to get the value of such an annuity the present value of the cash flow would need to be calculated. As compared to an ordinary annuity there is an additional figure that will come in the calculation. 

The calculation for an ordinary annuity can be done using the PV function but here in the type column instead of leaving it blank or 0, the number 1 is entered. 

For example, consider an annuity that is paid out each year of Rs 5,000 and this is at a rate of return of 10 per cent for a period of 4 years. This is the same case that was considered in the ordinary annuity working but here if the payment is made at the start of the year as is the case with an annuity due then the calculation will become 

PV =PV(0.1,4,-5000,,1) 

PV = 17434.26 

As can be seen from above, the payment at the start of the period raises the value of the annuity. One has to consider this from various angles. It is more valuable for a person to receive an annuity due because they get the money earlier which can be invested to earn further return. For someone who has to make payments for any purpose at the start of the period then this is more costly because they are losing the opportunity of earning on that particular capital for the duration of the year for which the amount would have otherwise remained with them. 

#### **2.2.7 Perpetuity** 

42 

Perpetuity is a cash flow from an investment that goes on forever. A normal instrument would have a specific time period for which the cash flow might be received but in case of perpetuity there is no finite period for which the cash flow is received. There are perpetual bonds that are issued by entities and these are the best example of real life perpetuity. In these bonds the cash flow keeps coming year after year. The other common life example would be pensions that are payable to pensioner till their life term. 

The perpetuity provides a constant cash flow for an unlimited time period. In order to calculate the value of perpetuity one has to find its present value. This is given by 

PV = C/ (1+r)^1 + C/(1+r)^2 + C/(1+r)^3 +..... 

PV = C/r 

#### Where 

PV = Present Value 

C = Cash flow 

r = discount rate 

The constant stream of a similar cash flow will ultimately lead to the calculation being made as the cash flow divided by the discount rate. 

#### Example 

A bond pays out Rs 10,000 as interest on an annual basis and this is a perpetual bond. If the discount rate or the interest rate is 8 per cent then the valuation of the perpetuity would be as under: 

PV = C/r 

PV = 10,000/0.08 

PV = 125,000 

43 

