class Person {
  _name;
  _department;
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
  get department() {
    return this._department;
  }
  set department(arg) {
    this._department = arg;
  }
}

class Department {
  _chargeCode;
  _manager;
  constructor(chargeCode, manager) {
    this._chargeCode = chargeCode;
    this._manager = manager;
  }
  get chargeCode() {
    return this._chargeCode;
  }
  set chargeCode(arg) {
    this._chargeCode = arg;
  }
  get manager() {
    return this._manager;
  }
  set manager(arg) {
    this._manager = arg;
  }
}

const feDev = new Department("WHATAP", "FE");
const person = new Person("A");
person.department = feDev;

console.log(
  person.department.chargeCode,
  person.department.manager,
  person.name
);
