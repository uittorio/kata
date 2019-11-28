import { Portfolio, MarketData } from '../portolio'

fdescribe("Portfolio", () => {
    beforeAll(() => {

    });
    describe("when my portolio is empty", () => {
        it("prints an empty status", () => {
            const portolio: Portfolio = new Portfolio()
            expect(portolio.printStatus()).toBe(`company | shares | current price | current value | last operation`)
        })
    })

    describe("when I buy a share", () => {
        it("prints the share in my status ", () => {
            const portolio: Portfolio = new Portfolio()
            portolio.buy(1000, "Yadadad", "14/02/1990")
            expect(portolio.printStatus()).toBe([
                "company | shares | current price | current value | last operation",
                "Yadadad | 1000 | $5.00 | $5,000 | bought 1000 on 14/02/1990"
            ].join("\n"))
        })
    })

    describe("when I buy more than 1 shares", () => {
        it("prints the share in my status ", () => {
            const portolio: Portfolio = new Portfolio()
            portolio.buy(1000, "Yadadad", "14/02/1990")
            portolio.buy(500, "Another One", "14/02/1991")
            expect(portolio.printStatus()).toBe([
                "company | shares | current price | current value | last operation",
                "Yadadad | 1000 | $5.00 | $5,000 | bought 1000 on 14/02/1990",
                "Another One | 500 | $10.00 | $5,000 | bought 500 on 14/02/1991"
            ].join("\n"))
        });
    });

    describe("when I sell 1 share ", () => {
        it("prints the correct status ", () => {
            const portolio: Portfolio = new Portfolio()
            portolio.buy(500, "Another One", "14/02/1991")
            portolio.sell(500, "Another One", "15/02/1991")
            expect(portolio.printStatus()).toBe([
                "company | shares | current price | current value | last operation",
                "Another One | 500 | $10.00 | $5,000 | sold 500 on 15/02/1991"
            ].join("\n"))
        });
    });

})
