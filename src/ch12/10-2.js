class Bird {
  constructor(data) {
    this._name = data.name;
    this._feather = data.feather;
  }
  get name() {
    return this._name;
  }
  get feather() {
    return this._feather || "보통이다";
  }
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  constructor(data) {
    super(data);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  constructor(data) {
    super(data);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get feather() {
    if (this._voltage > 100) return "그을렸다";
    return this._feather || "예쁘다";
  }
  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
  }
}

const createBird = (data) => {
  switch (data.type) {
    case "european":
      return new EuropeanSwallow(data);
    case "african":
      return new AfricanSwallow(data);
    case "norwegian":
      return new NorwegianBlueParrot(data);
    default:
      return new Bird(data);
  }
};
const birds = [
  createBird({ type: "european", name: "유-제" }),
  createBird({ type: "african", name: "아-제-2", numberOfCoconuts: 2 }),
  createBird({ type: "african", name: "아-제-4", numberOfCoconuts: 4 }),
  createBird({
    type: "norwegian",
    name: "파-앵-3000-false",
    isNailed: false,
    voltage: 3000,
  }),
  createBird({
    type: "norwegian",
    name: "파-앵-50-true",
    isNailed: true,
    voltage: 50,
  }),
  new Bird({ name: "가짜새" }),
];

console.log(
  birds.map((b) => ({
    name: b.name,
    velocity: b.airSpeedVelocity,
    feather: b.feather,
  }))
);