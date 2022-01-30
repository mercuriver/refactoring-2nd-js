const func = (anEmployee) =>
  anEmployee.onVacation && anEmployee.seniority > 10 ? 1 : 0.5;

console.log(
  func({
    onVacation: false,
    seniority: 2,
  }),
  func({
    onVacation: false,
    seniority: 20,
  }),
  func({
    onVacation: true,
    seniority: 2,
  }),
  func({
    onVacation: true,
    seniority: 20,
  })
);
