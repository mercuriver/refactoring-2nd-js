const adjustCapital = (anInstrument) => {
  let result = 0;
  if (anInstrument.capital > 0) {
    if (anInstrument.interestRate > 0 && anInstrument.duration > 0) {
      result =
        (anInstrument.income / anInstrument.duration) *
        anInstrument.adjustmentFactor;
    }
  }
  return result;
};

console.log(adjustCapital({ income: 10, adjustmentFactor: 2 }));
console.log(adjustCapital({ income: 10, adjustmentFactor: 2, capital: 1 }));
console.log(
  adjustCapital({
    income: 10,
    adjustmentFactor: 2,
    capital: 1,
    interestRate: 1,
    duration: 1,
  })
);
