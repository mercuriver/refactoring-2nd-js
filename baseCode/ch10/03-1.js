const payAmount = (employee) => {
  let result;
  if (employee.isSeperated) result = { amount: 0, reasonCode: "SEP" };
  // 퇴사한 직원
  else {
    if (employee.isRetired) result = { amount: 0, reasonCode: "RET" };
    // 은퇴한 직원
    else {
      // 급여 계산 로직
      result = { amount: 100, reasonCode: "WRK" }; // 재직
    }
  }
  return result;
};
