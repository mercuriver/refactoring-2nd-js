const registry = { billingPlans: { basic: "" } };

const createUnknownCustomer = () => ({
  isUnknown: true,
  name: "거주자",
  billingPlan: registry.billingPlans.basic,
  paymentHistory: { weeksDelinquentInLastYear: 0 },
});

const isUnknown = (arg) => arg.isUnknown;

class Site {
  get customer() {
    return this._customer === "미확인 고객"
      ? createUnknownCustomer()
      : new Customer();
  }
}

class Customer {
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
  const weeksDelinquent = customer.paymentHistory.weeksDelinquentInLastYear;
};
