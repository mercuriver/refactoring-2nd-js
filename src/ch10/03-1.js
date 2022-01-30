const payAmount = (employee) => {
  if (employee.isSeperated) return { amount: 0, reasonCode: "SEP" };
  if (employee.isRetired) return { amount: 0, reasonCode: "RET" };
  return { amount: 100, reasonCode: "WRK" };
};

console.log(payAmount({}));
console.log(payAmount({ isSeperated: true }));
console.log(payAmount({ isRetired: true }));
