class SubclassResponsibilityError extends Error {}
class Party {
  get monthlyCost() {
    throw new SubclassResponsibilityError();
  }
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
// console.log(new Party().annualCost);
