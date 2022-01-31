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
  set type(arg) {
    this._type = arg;
  }
  get capitalizedType() {
    return (
      this._type.charAt(0).toUpperCase() + this._type.slice(1).toLowerCase()
    );
  }
  toString() {
    return `${this._name} is a ${this.capitalizedType}`;
  }
}

console.log(new Employee("a", "engineer").toString());
console.log(new Employee("b", "manager").toString());
console.log(new Employee("c", "salesperson").toString());
console.log(new Employee("d", "nobody").toString());
