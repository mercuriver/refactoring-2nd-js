class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get baseCharge() {
    return this._customer.baseRate * this._usage;
  }
  get charge() {
    return this.baseCharge + this._provider.connectionCharge;
  }
}

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = new ChargeCalculator(customer, usage, provider).charge;
console.log(monthCharge);
