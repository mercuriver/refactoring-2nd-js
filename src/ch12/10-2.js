class SpeciesDelegate {
  constructor(data, bird) {
    this._bird = bird;
  }
  get feather() {
    return this._feather || "보통이다";
  }
  get airSpeedVelocity() {
    return null;
  }
}

class EuropeanSwallowDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
  }
  get airSpeedVelocity() {
    return 35;
  }
}
class AfricanSwallowDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._numberOfCoconuts = data.numberOfCoconuts;
  }
  get airSpeedVelocity() {
    return 40 - 2 * this._numberOfCoconuts;
  }
}

class NorwegianBlueParrotDelegate extends SpeciesDelegate {
  constructor(data, bird) {
    super(data, bird);
    this._voltage = data.voltage;
    this._isNailed = data.isNailed;
  }
  get feather() {
    if (this._voltage > 100) return "그을렸다";
    return this._bird._feather || "예쁘다";
  }
  get airSpeedVelocity() {
    return this._isNailed ? 0 : 10 + this._voltage / 10;
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
        return new EuropeanSwallowDelegate(data, this);
      case "african":
        return new AfricanSwallowDelegate(data, this);
      case "norwegian":
        return new NorwegianBlueParrotDelegate(data, this);
      default:
        return new SpeciesDelegate(data, this);
    }
  }
  get name() {
    return this._name;
  }
  get feather() {
    return this._speciesDelegate.feather;
  }
  get airSpeedVelocity() {
    return this._speciesDelegate.airSpeedVelocity;
  }
}

const createBird = (data) => new Bird(data);

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
