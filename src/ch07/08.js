class Person {
  constructor(name, department) {
    this._name = name;
    this._department = department;
  }
  get name() {
    return this._name;
  }
  get manager() {
    return this._department.manager;
  }
}

class Department {
  constructor(manager) {
    this._manager = manager;
  }
  get manager() {
    return this._manager;
  }
}

const person = new Person("AA", new Department("BB"));
console.log(person.name, person.manager);
