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

const client = () => {
  const room = new Room(22, 24);
  const plan = new HeatingPlan(21, 25);

  const tempRange = room.daysTempRange;
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = plan.withinRange(low, high);

  if (!isWithinRange) {
    console.log("방 온도가 지정 범위를 벗어났습니다.");
  } else {
    console.log("적정 온도입니다.");
  }
};
client();
