class TemperatureRange {
  constructor(low, high) {
    this.high = high;
    this.low = low;
  }
}
class Room {
  constructor(min, max) {
    this.daysTempRange = new TemperatureRange(min, max);
  }
}
const room = new Room(22, 24);

class HeatingPlan {
  constructor(low, high) {
    this._temperatureRange = new TemperatureRange(low, high);
  }
  withinRange(bottom, top) {
    return (
      bottom >= this._temperatureRange.low && top <= this._temperatureRange.high
    );
  }
}
