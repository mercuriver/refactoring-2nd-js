import { describe, it } from "mocha";
import { assert, expect } from "chai";

import Province from "./province.js";
import { sampleProvinceData } from "./util.js";

describe("province", () => {
  let asia;
  beforeEach(() => {
    asia = new Province(sampleProvinceData());
  });

  it("shortfall - assert", () => {
    assert.equal(asia.shortfall, 5);
  });

  it("shortfall - expect", () => {
    expect(asia.shortfall).equal(5);
  });

  it("profit", () => {
    expect(asia.profit).equal(230);
  });
});
