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

const discountableUnits = Math.max(units - pricingPlan.discountThreshold, 0);
const discount =
  discountableUnits * pricingPlan.discountFactor + (order.isRepeat ? 20 : 0);

let charge = pricingPlan.base + units * pricingPlan.unit - discount;
chargeOrder(charge);
