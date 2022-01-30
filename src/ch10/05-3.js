import { rest } from "lodash";
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
  // const unknownComstomer = { isUnknown: true};
  res._customer.isUnknown = isUnknown(res._customer) ? true : false;

  return res;
};

const client1 = () => {
  const rawSite = acquireSiteData();
  const site = enrichSite(rawSite);
  const customer = site.customer;
  let customerName;
  if (isUnknown(customer)) customerName = "거주자";
  else customerName = customer.name;
};
const client2 = () => {
  const customer = acquireSiteData().customer;
  const plan = isUnknown(customer)
    ? registry.billingPlans.basic
    : customer.billingPlan;
};
const client3 = () => {
  const customer = acquireSiteData().customer;
  const weeksDelinquent = isUnknown(customer)
    ? 0
    : customer.paymentHsitry.weeksDelinquentInLastYear;
};
