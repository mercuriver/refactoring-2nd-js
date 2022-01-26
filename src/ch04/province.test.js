import { describe, it } from "mocha";
import { assert, expect } from "chai";

import Province from "./province.js";
import { sampleProvinceData } from "./util.js";

describe("province", () => {
  it("shortfall - assert", () => {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });

  it("shortfall - expect", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).equal(5);
  });

  it("profit", () => {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).equal(230);
  });
});
