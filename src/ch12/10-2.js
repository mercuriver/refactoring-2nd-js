class EuropeanSwallowDelegate {
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallowDelegate {
  constructor(data) {
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class Bird {
  constructor(data) {
    this._name = data.name;
    this._feather = data.feather;
    this._speciesDelegate = this.selectSpeciesDelegate(data);
  }
  selectSpeciesDelegate(data) {
    switch (data.type) {
      case "european":
        return new EuropeanSwallowDelegate(data);
      case "african":
        return new AfricanSwallowDelegate(data);
      default:
        return null;
    }
  }
  get name() {
    return this._name;
  }
  get feather() {
    return this._feather || "보통이다";
  }
  get airSpeedVelocity() {
    return this._speciesDelegate
      ? this._speciesDelegate.airSpeedVelocity
      : null;
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
      return new Bird(data);
    case "african":
      return new Bird(data);
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
