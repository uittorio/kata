import { Portfolio, MarketData } from '../portolio'

describe("when operating with my stock ", () => {
    it('should record all the operation', () => {
        const portfolio: Portfolio = new Portfolio();
        portfolio.buy(1000, "Old School Waterfall Software LTD", "14/02/1990");
        portfolio.buy(400, "Crafter Masters Limited", "09/06/2016");
        portfolio.buy(700, "XP Practitioners Incorporated", "10/12/2018");
        portfolio.sell(500, "Old School Waterfall Software LTD", "11/12/2018");

        portfolio.shareValue("Old School Waterfall Software LTD", 5.75);
        portfolio.shareValue("Crafter Masters Limited", 17.25);
        portfolio.shareValue("XP Practitioners Incorporated", 25.55);

        expect(portfolio.printStatus()).toBe(`
        company | shares | current price | current value | last operation
        Old School Waterfall Software LTD | 500 | $5.75 | $2,875.00 | sold 500 on 11/12/2018
        Crafter Masters Limited | 400 | $17.25 | $6,900.00 | bought 400 on 09/06/2016
        XP Practitioners Incorporated | 700 | $25.55 | $17,885.00 | bought 700 on 10/12/2018"
        `)
    });
});
