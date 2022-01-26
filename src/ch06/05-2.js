const someCustomers = [
  {
    name: "A",
    address: { state: "ST_A" },
  },
  {
    name: "B",
    address: { state: "ST_B" },
  },
  {
    name: "C",
    address: { state: "ST_C" },
  },
  {
    name: "D",
    address: { state: "ST_D" },
  },
  {
    name: "E",
    address: { state: "ST_E" },
  },
  {
    name: "F",
    address: { state: "ST_F" },
  },
];

const inNewEngland = (aCustomer) => {
  return ["ST_A", "ST_B", "ST_C", "ST_D", "ST_E", "ST_F"].includes(
    aCustomer.address.state
  );
};

const newEnglanders = someCustomers.filter((c) => inNewEngland(c));

console.log(newEnglanders);
