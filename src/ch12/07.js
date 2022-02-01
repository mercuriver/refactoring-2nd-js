class Person {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    return "X";
  }
}
class Male extends Person {
  get genderCode() {
    return "M";
  }
}
class Female extends Person {
  get genderCode() {
    return "F";
  }
}

// const createPerson = (name) => new Person(name);
const createMale = (name) => new Male(name);
const createFemale = (name) => new Female(name);

const createPerson = (aRecord) => {
  let p;
  switch (aRecord.gender) {
    case "M":
      p = new Male(aRecord.name);
      break;
    case "F":
      p = new Female(aRecord.name);
      break;
    default:
      p = new Person(aRecord.name);
      break;
  }
  return p;
};

const loadFromInput = (data) => {
  const result = [];
  data.forEach((aRecord) => {
    result.push(createPerson(aRecord));
  });
  return result;
};

const peopleMeta = [
  { name: "A-M", gender: "M" },
  { name: "B-M", gender: "M" },
  { name: "C-M", gender: "M" },
  { name: "D-F", gender: "F" },
  { name: "E-F", gender: "F" },
  { name: "F-P", gender: "P" },
  { name: "G-P", gender: "O" },
];
const people = loadFromInput(peopleMeta);

const numberOfMales = people.filter((p) => p instanceof Male).length;

console.log(numberOfMales);
