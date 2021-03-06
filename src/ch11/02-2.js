const usd = (aNumber) =>
  new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
  }).format(aNumber / 100);

const topBand = (usage) => (usage > 200 ? usage - 200 : 0);

const withinBand = (usage, bobttom, top) =>
  usage > bobttom ? Math.min(usage, top) - bobttom : 0;

const baseCharge = (usage) => {
  if (usage < 0) return usd(0);
  const amount =
    withinBand(usage, 0, 100) * 0.03 +
    withinBand(usage, 100, 200) * 0.05 +
    withinBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
};

console.log(
  baseCharge(-1000),
  baseCharge(0),
  baseCharge(50),
  baseCharge(1000),
  baseCharge(15000)
);
