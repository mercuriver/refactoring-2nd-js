const raise = (factor) => (person) => {
  person.salary = person.salary.multiply(1 + factor);
};

const tenPercentRaise = raise(1.1);
const fivePercentRaise = raise(1.05);
