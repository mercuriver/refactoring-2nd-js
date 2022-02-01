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

const people = [
  new Male("A-M"),
  new Female("B-F"),
  new Male("C-M"),
  new Female("D-F"),
];
const numberOfMales = people.filter((p) => p instanceof Male).length;
