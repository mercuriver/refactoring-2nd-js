const discount = (inputValue, quantity) => {
  const result = inputValue > 50 ? inputValue - 2 : inputValue;
  return quantity > 100 ? result - 1 : result;
};

console.log(discount(40, 90));
console.log(discount(70, 90));
console.log(discount(70, 110));
