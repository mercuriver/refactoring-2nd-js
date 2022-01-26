import cloneDeep from "lodash/cloneDeep.js";

const acquireReading = () => ({
  customer: "ivan",
  quantity: 10,
  month: 5,
  year: 2017,
});

const baseRate = (month, year) => year - 2000 + month;

export const enrichReading = (origin) => {
  const result = cloneDeep(origin);
  result.baseCharge = baseRate(result.month, result.year) * result.quantity;
  result.taxableCharge = Math.max(
    0,
    result.baseCharge - (result.year - 2000) * 0.1
  );
  return result;
};

const client1 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.baseCharge;
};

const client2 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);

  return aReading.taxableCharge;
};

const client3 = () => {
  const rawReading = acquireReading();
  const aReading = enrichReading(rawReading);
  return aReading.baseCharge;
};

[client1, client2, client3].forEach((c) => console.log(c()));
