class Party {}

class Employee extends Party {
  monthlyCost = 1;
  get annualCost() {
    return this.monthlyCost * 12;
  }
}
class Department extends Party {
  monthlyCost = 2;
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

console.log(new Employee().annualCost);
console.log(new Department().annualCost);
