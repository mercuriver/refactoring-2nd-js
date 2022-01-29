class Customer {
  constructor(name, discountRate) {
    this._name = name;
    this._discountRate = discountRate;
    this._contract = new CustomerContract(new Date());
  }
  get discountRate() {
    return this._discountRate;
  }
  _setDiscountRate(aNumber) {
    this._discountRate = aNumber;
  }

  becomePreferred() {
    this._setDiscountRate(this._discountRate + 0.03);
    // 다른 멋진 일들
  }
  applyDiscount(amount) {
    return amount.subtract(amount.multiply(this._discountRate));
  }
}

class CustomerContract {
  constructor(startDate) {
    this._startDate = startDate;
  }
}

const customer1 = new Customer("AA", 0.1);

console.log(customer1.discountRate);
customer1.becomePreferred();
console.log(customer1.discountRate);
