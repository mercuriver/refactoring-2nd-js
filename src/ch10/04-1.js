const feathers = (birds) => new Map(birds.map((b) => [b.name, feather(b)]));
const velocities = (birds) => new Map(birds.map((b) => [b.name, velocity(b)]));

class Bird {
  constructor(birdObject) {
    Object.assign(this, birdObject);
  }

  get feather() {
    switch (this.type) {
      case "유럽 제비":
        return "보통이다";
      case "아프리카 제비":
        return this.numberOfCoconuts > 2 ? "지쳤다" : "보통이다";
      case "노르웨이 파랑 앵무":
        return this.voltage > 100 ? "그을렸다" : "예쁘다";
      default:
        return "알 수 없다";
    }
  }

  get velocity() {
    switch (this.type) {
      case "유럽 제비":
        return 35;
      case "아프리카 제비":
        return 40 - 2 * this.numberOfCoconuts;
      case "노르웨이 파랑 앵무":
        return this.isNailed ? 0 : 10 + this.voltage / 10;
      default:
        return null;
    }
  }
}

class EupropeanSwallow extends Bird {}
class AfricalSwallow extends Bird {}
class NorwegianBlueParrot extends Bird {}

const createBiard = (bird) => {
  switch (bird.type) {
    case "유럽 제비":
      return new EupropeanSwallow(bird);
    case "아프리카 제비":
      return new AfricalSwallow(bird);
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
