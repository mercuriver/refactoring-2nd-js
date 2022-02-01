class Person {
  constructor(name, genderCode) {
    this._name = name;
    this._genderCode = genderCode || "X";
  }
  get name() {
    return this._name;
  }
  get genderCode() {
    return this._genderCode;
  }
  get isMale() {
    return this instanceof Male;
  }
}
class Male extends Person {}
class Female extends Person {}

const createPerson = (aRecord) => {
  switch (aRecord.gender) {
    case "M":
      return new Male(aRecord.name, aRecord.gender);
    case "F":
      return new Female(aRecord.name, aRecord.gender);
    default:
      return new Person(aRecord.name, aRecord.gender);
  }
};

const loadFromInput = (data) => data.map((aRecord) => createPerson(aRecord));

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
const numberOfMales = people.filter((p) => p.isMale);

console.log(numberOfMales);
