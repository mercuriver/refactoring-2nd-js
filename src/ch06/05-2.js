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
  {
    name: "G",
    address: { state: "ST_G" },
  },
];
const inNewEngland = (stateCode) =>
  ["ST_A", "ST_B", "ST_C", "ST_D", "ST_E", "ST_F"].includes(stateCode);

const newEnglanders = someCustomers.filter((c) =>
  inNewEngland(c.address.state)
);

console.log(newEnglanders);
