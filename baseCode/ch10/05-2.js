const registry = { billingPlans: { basic: "" } };
class Site {
  get customer() {
    return this._customer;
  }
}

class Customer {
  get name() {
    return this._name;
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
  let customerName;
  if (customer === "미확인 고객") customerName = "거주자";
  else customerName = customer.name;
};
const client2 = () => {
  const customer = new Site().customer;
  const plan =
    customer === "미확인 고객"
      ? registry.billingPlans.basic
      : customer.billingPlan;
};
const client3 = () => {
  const customer = new Site().customer;
  const weeksDelinquent =
    customer === "미확인 고객"
      ? 0
      : customer.paymentHistory.weeksDelinquentInLastYear;
};
