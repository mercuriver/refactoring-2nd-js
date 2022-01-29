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

const { units, isRepeat } = retreiveOrder();
const { base, unit, discountThreshold, discountFactor } = retreivePricingPlan();

const discountableUnits = Math.max(units - discountThreshold, 0);
const discount = discountableUnits * discountFactor + (isRepeat ? 20 : 0);

chargeOrder(base + units * unit - discount);
