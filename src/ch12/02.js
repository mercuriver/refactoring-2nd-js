class Employee {}
class SalesPerson extends Employee {
  #name = "SalesPerson name";
}
class Engineer extends Employee {
  #name = "Engineer name";
}

console.log(new SalesPerson().#name);
console.log(new Engineer().#name);
