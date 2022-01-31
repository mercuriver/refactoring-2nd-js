class ChargeCalculator {
  charge(customer, usage, provider) {
    return customer.baseRate * usage + provider.connectionCharge;
  }
}

const charge = (customer, usage, provider) =>
  new ChargeCalculator().charge(customer, usage, provider);

const customer = { baseRate: 100 };
const usage = 1000;
const provider = { connectionCharge: 50 };
const monthCharge = charge(customer, usage, provider);

console.log(monthCharge);
