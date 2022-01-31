class Person {
  constructor(id, name) {
    this._id = id;
    this._name = name;
  }
  get name() {
    return this._name;
  }
  set name(name) {
    this._name = name;
  }
  get id() {
    return this._id;
  }
}
const martin = new Person("1234", "Martin");
martin.name = "New Martin";

console.log(martin);
