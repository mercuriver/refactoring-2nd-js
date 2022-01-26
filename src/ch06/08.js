class NumberRagne {
  constructor(min, max) {
    this._data = { min, max };
  }
  get min() {
    return this._data.min;
  }
  get max() {
    return this._data.max;
  }
}
const station = {
  name: "ZB1",
  readings: [
    { temp: 47, time: "2016-11-10 09:10" },
    { temp: 53, time: "2016-11-10 09:20" },
    { temp: 58, time: "2016-11-10 09:30" },
    { temp: 53, time: "2016-11-10 09:40" },
    { temp: 51, time: "2016-11-10 09:50" },
  ],
};
const operatingPlan = {
  temperatureFloor: 50,
  temperatureCeiling: 56,
};

const readingsOutsideRange = (station, min, max, range) =>
  station.readings.filter((r) => r.temp < range.min || r.temp > range.max);

const range = new NumberRagne(
  operatingPlan.temperatureFloor,
  operatingPlan.temperatureCeiling
);

console.log(
  readingsOutsideRange(
    station,
    operatingPlan.temperatureFloor,
    operatingPlan.temperatureCeiling,
    range
  )
);
