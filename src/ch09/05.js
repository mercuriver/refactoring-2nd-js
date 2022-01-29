class Customer {
  constructor(id) {
    this._id = id;
  }
  get id() {
    return this._id;
  }
}

let _repositoryData;
export const initialize = () => {
  _repositoryData = { customers: new Map() };
};
export const findCustomer = (id) => _repositoryData.customers.get(id);
export const registerCustomer = (id) => {
  if (!_repositoryData.customers.has(id)) {
    _repositoryData.customers.set(id, new Customer(id));
  }
  return id;
};

class Order {
  constructor(data) {
    this._number = data.number;
    this._customer = registerCustomer(data.customer);
  }
  get customer() {
    return findCustomer(this._customer);
  }
}

initialize();

const o = new Order({ number: 999, customer: 123 });
console.log(o, o.customer.id);
