import cloneDeep from "lodash/cloneDeep.js";

const RECORDS = [
  {
    name: "애크미 보스턴",
    location: "Malden MA",
    customer: {
      name: "애크미 산업",
      billingPlan: "plan-451",
      paymentHistory: {
        weeksDelinquentInLastYear: 7,
      },
    },
  },
  {
    name: "물류창고 15",
    location: "Malden MA",
    customer: "미확인 고객",
  },
];
const registry = { billingPlans: { basic: "" } };
class Site {
  get customer() {
    return this._customer;
  }
}
const acquireSiteData = () => new Site();

const isUnknown = (customer) =>
  customer === "미확인 고객" ? true : customer.isUnknown;

const enrichSite = (site) => {
  const res = cloneDeep(site);
  const unknownComstomer = {
    isUnknown: true,
    name: "거주자",
    billingPlan: registry.billingPlans.basic,
    paymentHistory: { weeksDelinquentInLastYear: 0 },
  };

  if (isUnknown(res._customer)) {
    res._customer = unknownComstomer;
  } else {
    res._customer.isUnknown = false;
  }

  return res;
};

const client1 = () => {
  const rawSite = acquireSiteData();
  const site = enrichSite(rawSite);
  const customerName = site.customer.name;
};
const client2 = () => {
  const rawSite = acquireSiteData();
  const site = enrichSite(rawSite);
  const plan = site.customer.billingPlan;
};
const client3 = () => {
  const rawSite = acquireSiteData();
  const site = enrichSite(rawSite);
  const weeksDelinquent =
    site.customer.paymentHistory.weeksDelinquentInLastYear;
};
