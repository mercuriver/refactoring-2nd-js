class Employee {
  constructor(name, id, monthlyCost) {
    this._name = name;
    this._id = id;
    this._monthlyCost = monthlyCost;
  }
  get monthlyCost() {
    return this._monthlyCost;
  }
  get name() {
    return this._name;
  }
  get id() {
    return this._id;
  }
  get annualCost() {
    return this._monthlyCost * 12;
  }
}

class Department {
  constructor(name, staff) {
    this._name = name;
    this._staff = staff;
  }
  get name() {
    return this._name;
  }
  get staff() {
    return this._staff;
  }
  get totalMonthlyCost() {
    return this._staff
      .map((e) => e.monthlyCost)
      .reduce((sum, cost) => sum + cost, 0);
  }
  get headCount() {
    return this.staff.length;
  }
  get totalAnnualCost() {
    return this.totalMonthlyCost * 12;
  }
}

const a = new Employee("A", "123", 100);
const b = new Employee("B", "456", 200);
const sales = new Department("Sales", [a, b]);

console.log(a.annualCost);
console.log(b.annualCost);
console.log(sales.totalAnnualCost);
