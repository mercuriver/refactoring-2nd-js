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

const o = new Order({ number: 999, customer: 123 });
console.log(o, o.customer.id);
