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
  toString() {
    return `${this._name} is a ${this._type}`;
  }
}
const a = new Employee("a", "engineer");
const b = new Employee("b", "manager");
const c = new Employee("c", "salesperson");
const d = new Employee("d", "nobody");
