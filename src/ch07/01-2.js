import { readJSON } from "../util/fileController.js";

let customerData = readJSON("src/ch07/01-2.json");

class CustomerData {
  constructor(data) {
    this._data = data;
  }
}

const getCustomerData = () => customerData;
const getRawDataOfCustomers = () => customerData;
const setRawDataOfCustomers = (arg) => {
  customerData = new CustomerData(arg);
};

export const writeData = (customerId, year, month, amount) => {
  getRawDataOfCustomers()[customerId].usages[year][month] = amount;
};

export const compareUsage = (customerId, laterYear, month) => {
  const later = getRawDataOfCustomers()[customerId].usages[laterYear][month];
  const earlier =
    getRawDataOfCustomers()[customerId].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier };
};
export const getCustomer = () => customerData;
