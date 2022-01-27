import { readJSON } from "../util/fileController.js";

const customerData = readJSON("src/ch07/01-2.json");

export const writeData = (customerId, year, month, amount) => {
  customerData[customerId].usages[year][month] = amount;
};

export const compareUsage = (customerId, laterYear, month) => {
  const later = customerData[customerId].usages[laterYear][month];
  const earlier = customerData[customerId].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};
export const getCustomer = () => customerData;
