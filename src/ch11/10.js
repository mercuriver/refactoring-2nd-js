class ChargeCalculator {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }
  get charge() {
    return (
      this._customer.baseRate * this._usage + this._provider.connectionCharge
    );
  }
}

const charge = (customer, usage, provider) =>
  new ChargeCalculator(customer, usage, provider).charge;

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = charge(customer, usage, provider);

console.log(monthCharge);
