class Customer {
  constructor(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
}

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = new Customer(data.customer);
  }
  get customer() {
    return this._customer;
  }
}
