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

const createEngineer = (name) => new Employee(name, "E");
const createEmployee = (name, typeCode) => new Employee(name, typeCode);

const client1 = () => {
  const document = {
    name: "name AA",
    empType: "M",
    leadEngineer: "leadEngineer BB",
  };

  const candidate = createEmployee(document.name, document.empType);
  const leadEngineer = createEngineer(document.leadEngineer);

  return { candidate: candidate, leadEngineer: leadEngineer };
};

console.log(client1());
