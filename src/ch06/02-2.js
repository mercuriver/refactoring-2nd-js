const reportLines = (aCustomer) => {
  const lines = [];
  lines.push(["name", aCustomer.name]);
  lines.push(["location", aCustomer.location]);
  return lines;
};

const customerA = { name: "a", location: "seoul" };
const customerB = { name: "b", location: "incheon" };

console.log(reportLines(customerA));
console.log(reportLines(customerB));
