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

const a = new Employee("a", "engineer");
const b = new Employee("b", "manager");
const c = new Employee("c", "salesperson");
// const d = new Employee("d", "nobody");

console.log(a);
console.log(b);
console.log(c);
// console.log(d);
