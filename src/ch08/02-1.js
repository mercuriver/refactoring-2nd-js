class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._contract = new CustomerContract(new Date(), discountRate);
  }
  get discountRate() {
    return this._contract._discountRate;
  }
  _setDiscountRate(aNumber) {
    return (this._contract._discountRate = aNumber);
  }
  becomePreferred() {
    this._setDiscountRate(this.discountRate + 0.03);
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this.discountRate));
  }
}

class CustomerContract {
  constructor(startDate, discountRate) {
    this._startDate = startDate;
    this.discountRate = discountRate;
  }
  get discountRate() {
    return this._discountRate;
  }
  set discountRate(arg) {
    this._discountRate = arg;
  }
}

const customer1 = new Customer("AA", 0.1);

console.log(customer1.discountRate);
customer1.becomePreferred();
console.log(customer1.discountRate);
