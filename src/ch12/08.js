class Party {
  constructor(name) {
    this._name = name;
  }
  get name() {
    return this._name;
  }
}

class Employee extends Party {
  constructor(name, id, monthlyCost) {
    super(name);
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this._monthlyCost;
  }
  get id() {
    return this._id;
  }
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Department extends Party {
  constructor(name, staff) {
    super(name);
    this._staff = staff;
  }
  get staff() {
    return this._staff;
  }
  get monthlyCost() {
    return this._staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost, 0);
  }
  get headCount() {
    return this.staff.length;
  }
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

const a = new Employee("A", "123", 100);
const b = new Employee("B", "456", 200);
const sales = new Department("Sales", [a, b]);

console.log(a.annualCost);
console.log(b.annualCost);
console.log(sales.totalAnnualCost);
