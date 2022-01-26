const moreThanFiveLateDeliveries = (aDriver) =>
  aDriver.numberOfLateDeliveries > 5;
const rating = (aDriver) => (moreThanFiveLateDeliveries(aDriver) ? 2 : 1);
