class Employee {
  constructor(name) {
    this._name = name;
  }
  get isPrivileged() {
    return false;
  }
  assignCar() {
    console.log(this._name, "car assigned");
  }
}

class Manager extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) this.assignCar();
  }
  get isPrivileged() {
    return this._grade > 4;
  }
}

class Producer extends Employee {
  constructor(name, grade) {
    super(name);
    this._grade = grade;
    if (this.isPrivileged) this.assignCar();
  }
  get isPrivileged() {
    return this._grade > 4;
  }
}
