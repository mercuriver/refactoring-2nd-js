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
  withinRange(aNumberRange) {
    return (
      aNumberRange.low >= this._temperatureRange.low &&
      aNumberRange.high <= this._temperatureRange.high
    );
  }
}

const client = () => {
  const plan = new HeatingPlan(21, 25);
  if (!plan.withinRange(room.daysTempRange)) {
    console.log("방 온도가 지정 범위를 벗어났습니다.");
  } else {
    console.log("적정 온도입니다.");
  }
};
client();
