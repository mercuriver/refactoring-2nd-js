class Person {
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
  get chargeCode() {
    return this.department.chargeCode;
  }
  get manager() {
    return this.department.manager;
  }
}

class Department {
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

const dev = new Department("Dev", "AA");
const person = new Person("BB");
person.department = dev;

console.log(person.chargeCode, person.manager, person.name);
