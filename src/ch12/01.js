class Party {
  get annualCost() {
    return this.monthlyCost * 12;
  }
}

class Employee extends Party {
  monthlyCost = 1;
}
class Department extends Party {
  monthlyCost = 2;
}

console.log(new Employee().annualCost);
console.log(new Department().annualCost);
