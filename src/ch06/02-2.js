const gatherCustomerData = (out, aCustomer) => {
  out.push(["name", aCustomer.name]);
  out.push(["location", aCustomer.location]);
};
const reportLines = (aCustomer) => {
  const lines = [];
  gatherCustomerData(lines, aCustomer);
  return lines;
};

const customerA = { name: "a", location: "seoul" };
const customerB = { name: "b", location: "incheon" };

console.log(reportLines(customerA));
console.log(reportLines(customerB));
