const retreivePricingPlan = () => ({
  base: 50,
  unit: 100,
  discountThreshold: 7,
  discountFactor: 20,
});
const retreiveOrder = () => ({
  units: 8,
  isRepeat: true,
});
const chargeOrder = (charge) => console.log(charge);

const order = retreiveOrder();
const units = order.units;
const pricingPlan = retreivePricingPlan();
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);

let discount;
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;

const chargePerUnit = pricingPlan.unit;
const baseCharge = pricingPlan.base;
let charge;
charge = baseCharge + units * chargePerUnit;
charge = charge - discount;
chargeOrder(charge);
