class EmployeeType {
  get capitalizedName() {
    return (
      this.toString().charAt(0).toUpperCase() +
      this.toString().slice(1).toLowerCase()
    );
  }
}

class Engineer extends EmployeeType {
  toString() {
    return "engineer";
  }
}
class Manager extends EmployeeType {
  toString() {
    return "manager";
  }
}
class Salesperson extends EmployeeType {
  toString() {
    return "salesperson";
  }
}

class Employee {
  constructor(name, type) {
    this._name = name;
    this._type = Employee.createEmployeeType(type);
  }
  static createEmployeeType(aString) {
    switch (aString) {
      case "engineer":
        return new Engineer();
      case "manager":
        return new Manager();
      case "salesperson":
        return new Salesperson();
      default:
        throw new Error(`${aString}라는 직원 유형은 없습니다.`);
    }
  }
  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }
  toString() {
    return `${this._name} is a ${this.type.capitalizedName}`;
  }
}

console.log(new Employee("a", "engineer").toString());
console.log(new Employee("b", "manager").toString());
console.log(new Employee("c", "salesperson").toString());
// console.log(new Employee("d", "nobody").toString());
