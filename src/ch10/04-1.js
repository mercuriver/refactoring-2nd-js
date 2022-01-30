const feathers = (birds) => new Map(birds.map((b) => [b.name, feather(b)]));
const velocities = (birds) => new Map(birds.map((b) => [b.name, velocity(b)]));

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get feather() {
    return "알 수 없다";
  }

  get velocity() {
    return null;
  }
}

class EuropeanSwallow extends Bird {
  get feather() {
    return "보통이다";
  }
  get velocity() {
    return 35;
  }
}
class AfricanSwallow extends Bird {
  get feather() {
    return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
  }

  get velocity() {
    return 40 - 2 * this.numberOfCoconuts;
  }
}
class NorwegianBlueParrot extends Bird {
  get feather() {
    return this.voltage > 100 ? "그을렸다" : "예쁘다";
  }

  get velocity() {
    return this.isNailed ? 0 : 10 + this.voltage / 10;
  }
}

const createBiard = (bird) => {
  switch (bird.type) {
    case "유럽 제비":
      return new EuropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricanSwallow(bird);
    case "노르웨이 파랑 앵무":
      return new NorwegianBlueParrot(bird);
    default:
      return new Bird(bird);
  }
};

const feather = (bird) => createBiard(bird).feather;
const velocity = (bird) => createBiard(bird).velocity;

const birds = [
  { name: "유-제", type: "유럽 제비" },
  { name: "아-제-2", type: "아프리카 제비", numberOfCoconuts: 2 },
  { name: "아-제-4", type: "아프리카 제비", numberOfCoconuts: 4 },
  {
    name: "파-앵-false-3000",
    type: "노르웨이 파랑 앵무",
    isNailed: false,
    voltage: 3000,
  },
  {
    name: "파-앵-true-50",
    type: "노르웨이 파랑 앵무",
    isNailed: true,
    voltage: 50,
  },
];

console.log(...feathers(birds));
console.log(...velocities(birds));
