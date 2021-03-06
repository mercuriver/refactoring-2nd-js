const registry = { billingPlans: { basic: "" } };

class Site {
  get customer() {
    return this._customer === "미확인 고객"
      ? new UnknownCustomer()
      : new Customer();
  }
}

class Customer {
  constructor() {
    this._name = "nameValue";
    this._billingPlan = "billingPlanValue";
    this._paymentHistory = { weeksDelinquentInLastYear: null };
  }
  get name() {
    return this._name;
  }
  get isUnknown() {
    return false;
  }
  get billingPlan() {
    return this._billingPlan;
  }
  set billingPlan(arg) {
    this._billingPlan = arg;
  }
  get paymentHistory() {
    return this._paymentHistory;
  }
}

class NullPaymentHistory {
  get weeksDelinquentInLastYear() {
    return 0;
  }
}

class UnknownCustomer {
  get isUnknown() {
    return true;
  }
  get name() {
    return "거주자";
  }
  get billingPlan() {
    return registry.billingPlans.basic;
  }
  set billingPlan(arg) {}
  get paymentHistory() {
    return new NullPaymentHistory();
  }
}

const client1 = () => {
  const customer = new Site().customer;
  //... 수많은 코드 ...
  const customerName = customer.name;
};
const client2 = () => {
  const customer = new Site().customer;
  const plan = customer.billingPlan;
};
const client3 = () => {
  const customer = new Site().customer;
  customer.billingPlan = "new Plan";
};
const client4 = () => {
  const customer = new Site().customer;
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear;
};
