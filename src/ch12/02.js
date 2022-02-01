class Employee {
  // protected #name;
  // #name;
  _name;
  constructor(name) {
    // this.#name = name;
    this._name = name;
  }
}
class SalesPerson extends Employee {}
class Engineer extends Employee {}

console.log(new SalesPerson("AA")._name);
console.log(new Engineer("BB")._name);
