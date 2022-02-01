class Employee {
  constructor(name, type) {
    this.validateType(type);
    this._name = name;
    this._type = type;
  }
  validateType(arg) {
    if (!["engineer", "manager", "salesperson"].includes(arg))
      throw new Error(`${arg}라는 직원 유형은 없습니다.`);
  }
  get type() {
    return this._type;
  }
  toString() {
    return `${this._name} is a ${this.type}`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
}

const createEmployee = (name, type) => {
  switch (type) {
    case "engineer":
      return new Engineer(name, type);
    case "manager":
      return new Manager(name, type);
    case "salesperson":
      return new Salesperson(name, type);

    default:
      return new Employee(name, type);
  }
};

const a = createEmployee("a", "engineer");
const b = createEmployee("b", "manager");
const c = createEmployee("c", "salesperson");
// const d = createEmployee("d", "nobody");

console.log(a);
console.log(b);
console.log(c);
// console.log(d);
