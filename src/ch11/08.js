class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() {
    return this._name;
  }
  get type() {
    return this._typeCode;
  }
  static get legalTypeCodes() {
    return {
      E: "Engineer",
      M: "Manager",
      S: "Salesperson",
    };
  }
}

const client1 = () => {
  const document = { name: "재남", empType: "M", leadEngineer: "로이" };
  const candidate = new Employee(document.name, document.empType);
  const leadEngineer = new Employee(document.leadEngineer, "E");
  return { candidate: candidate.name, leadEngineer: leadEngineer.name };
};

console.log(client1());
