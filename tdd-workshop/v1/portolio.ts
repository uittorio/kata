interface Operation {
    quantity: number;
    company: string;
    date: string
    price: number
    type: 'BUY' | 'SELL'
}

export class MarketData {
    private sharePrices: Map<string, number>;
    constructor() {
        this.sharePrices = new Map<string, number>();
        this.sharePrices.set('Yadadad', 5);
        this.sharePrices.set('Another One', 10);
    }
    getSharePrice(company: string): number {
        return this.sharePrices.get(company);
    }
}

export class Portfolio {
    private _ledger: Map<string, Operation[]>
    private marketData: MarketData;
    constructor() {
        this._ledger = new Map<string, Operation[]>()
        this.marketData = new MarketData();
    }

    shareValue(arg0: string, arg1: number) {
        throw new Error("Method not implemented.");
    }
    sell(quantity: number, company: string, date: string) {
        if (!this._ledger.has(company)) {
            this._ledger.set(company, [])
        }
        this._ledger.get(company).push({
            quantity, company, date, price: this.marketData.getSharePrice(company), type: 'SELL'
        })
    }
    printStatus(): string {
        this._ledger.entries()
        .map(operations) => {
            const last = operations[operations.length - 1]
        }`${company} | ${quantity} | $${price.toFixed(2)} | $${(price * quantity).toLocaleString()} | ${type === 'BUY' ? 'bought' : 'sold'} ${quantity} on ${date}`)
        
        return ["company | shares | current price | current value | last operation",
            ...sharesList].join("\n")
    }
    buy(quantity: number, company: string, date: string): void {
        if (!this._ledger.has(company)) {
            this._ledger.set(company, [])
        }
        this._ledger.get(company).push({
            quantity, company, date, price: this.marketData.getSharePrice(company), type: 'BUY'
        })
    }
    
}