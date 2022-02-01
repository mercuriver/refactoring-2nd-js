class Party {
  constructor(name) {
    this._name = name;
  }
}

export class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
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
    super(name);
    this._staff = staff;
  }
  get name() {
    return this._name;
  }
  get staff() {
    return this._staff;
  }
}

const a = new Employee("AA", "A001", 3000);
const b = new Employee("BB", "B002", 2500);
const dep = new Department("영업", [a, b]);

console.log(a._name, a);
console.log(b._name, b);
console.log(dep._name, dep);
