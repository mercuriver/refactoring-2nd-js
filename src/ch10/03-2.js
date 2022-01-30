const adjustCapital = (anInstrument) => {
  let result = 0;
  if (anInstrument.capital <= 0) return result;
  if (anInstrument.interestRate <= 0 || anInstrument.duration <= 0)
    return result;

  result =
    (anInstrument.income / anInstrument.duration) *
    anInstrument.adjustmentFactor;

  return result;
};

const instrument = {
  income: 10,
  adjustmentFactor: 2,
  capital: 0,
  interestRate: 0,
  duration: 0,
};

console.log(adjustCapital(instrument));
console.log(adjustCapital({ ...instrument, capital: 1 }));
console.log(
  adjustCapital({
    ...instrument,
    capital: 1,
    interestRate: 1,
    duration: 1,
  })
);
