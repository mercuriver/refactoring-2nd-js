const disabilityAmount = (anEmployee) => {
  if (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  ) {
    return 0;
  }
  return 1;
};

console.log(
  disabilityAmount({
    seniority: 2,
    monthsDisabled: 13,
    isPartTime: false,
  })
);
