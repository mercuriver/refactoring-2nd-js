class EmployeeType {}

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
    this.validateType(type);
    this._name = name;
    this._type = type;
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

  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg))
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }
  get typeString() {
    return this._type.toString();
  }
  get type() {
    return this._type;
  }
  set type(arg) {
    this._type = Employee.createEmployeeType(arg);
  }
  get capitalizedName() {
    return (
      this.typeString.charAt(0).toUpperCase() +
      this.typeString.slice(1).toLowerCase()
    );
  }
  toString() {
    return `${this._name} is a ${this.capitalizedName}`;
  }
}

console.log(new Employee("a", "engineer").toString());
console.log(new Employee("b", "manager").toString());
console.log(new Employee("c", "salesperson").toString());
// console.log(new Employee("d", "nobody").toString());
