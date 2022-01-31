class Party {}

export class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super();
    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  get name() {
    return this._name;
  }
  get monthlyCost() {
    return this._monthlyCost;
  }
}

export class Department extends Party {
  constructor(name, staff) {
    super();
    this._name = name;
    this._staff = staff;
  }
  get name() {
    return this._name;
  }
  get staff() {
    return this._staff;
  }
}
