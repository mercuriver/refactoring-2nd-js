import createPerformanceCalculator from "./createPerformanceCalculator.js";

const createStatementData = (invoice, plays) => {
  const playFor = (aPerformance) => plays[aPerformance.playID];
  const totalAmount = (performances) =>
    performances.reduce((result, perf) => result + perf.amount, 0);
  const totalVolumeCredits = (performances) =>
    performances.reduce((result, perf) => result + perf.volumeCredits, 0);
  const enrichPerformance = (aPerformance) => {
    const calculator = createPerformanceCalculator(
      aPerformance,
      playFor(aPerformance)
    );
    const result = { ...aPerformance };
    result.play = calculator.play;
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  };

  const enrichPerformances = invoice.performances.map(enrichPerformance);
  return {
    customer: invoice.customer,
    performances: enrichPerformances,
    totalAmount: totalAmount(enrichPerformances),
    totalVolumeCredits: totalVolumeCredits(enrichPerformances),
  };
};

export default createStatementData;
