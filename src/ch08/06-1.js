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

const pricingPlan = retreivePricingPlan();
const order = retreiveOrder();
const baseCharge = pricingPlan.base;
let charge;
const chargePerUnit = pricingPlan.unit;
const units = order.units;
let discount;
charge = baseCharge + units * chargePerUnit;
let discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
discount = discountableUnits * pricingPlan.discountFactor;
if (order.isRepeat) discount += 20;
charge = charge - discount;
chargeOrder(charge);
