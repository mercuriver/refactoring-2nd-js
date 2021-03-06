class Employee {
  constructor(name) {
    this._name = name;
  }
  toString() {
    return `${this._name} is a`;
  }
}

class Engineer extends Employee {
  get type() {
    return "engineer";
  }
  toString() {
    return `${super.toString()} ${this.type}`;
  }
}

class Manager extends Employee {
  get type() {
    return "manager";
  }
  toString() {
    return `${super.toString()} ${this.type}`;
  }
}
class Salesperson extends Employee {
  get type() {
    return "salesperson";
  }
  toString() {
    return `${super.toString()} ${this.type}`;
  }
}

const createEmployee = (name, type) => {
  switch (type) {
    case "engineer":
      return new Engineer(name);
    case "manager":
      return new Manager(name);
    case "salesperson":
      return new Salesperson(name);
    default:
      throw new Error(`${type}라는 직원 유형은 없습니다.`);
  }
};

const a = createEmployee("a", "engineer");
const b = createEmployee("b", "manager");
const c = createEmployee("c", "salesperson");
// const d = createEmployee("d", "nobody");

console.log(a, a.toString());
console.log(b, b.toString());
console.log(c, c.toString());
// console.log(d, d.type);
