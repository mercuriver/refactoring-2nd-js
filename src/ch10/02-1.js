function isNotEligibleForDisability(anEmployee) {
  return (
    anEmployee.seniority < 2 ||
    anEmployee.monthsDisabled > 12 ||
    anEmployee.isPartTime
  );
}

const disabilityAmount = (anEmployee) =>
  isNotEligibleForDisability(anEmployee) ? 0 : 1;

console.log(
  disabilityAmount({
    seniority: 2,
    monthsDisabled: 13,
    isPartTime: false,
  })
);

console.log(
  disabilityAmount({
    seniority: 2,
    monthsDisabled: 10,
    isPartTime: false,
  })
);
