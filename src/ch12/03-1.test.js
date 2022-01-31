import { describe, it } from "mocha";
import { expect } from "chai";
import { Employee, Department } from "./03-1.js";

describe("Employee", () => {
  it("should be an instance of Employee", () => {
    const e = new Employee("AA", "A001", 3000);
    expect(e.name).to.equal("AA");
    expect(e.monthlyCost).to.equal(3000);
  });
});
describe("Department", () => {
  it("should be an instance of Department", () => {
    const a = new Employee("AA", "A001", 3000);
    const b = new Employee("BB", "B002", 2500);
    const dep = new Department("영업", [a, b]);
    expect(dep.name).to.equal("영업");
    expect(dep.staff).to.deep.equal([a, b]);
  });
});
