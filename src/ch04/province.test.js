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

  it("change production", () => {
    asia.producers[0].production = 20;
    expect(asia.shortfall).equal(-6);
    // 하나의 it 구문 내에는 하나의 속성 검증만을 하는 것이 바람직 하다.
    // expect(asia.profit).equal(292);
  });

  it("zero demand", function () {
    asia.demand = 0;
    expect(asia.shortfall).equal(-25);
    expect(asia.profit).equal(0);
  });

  it("negative demand", function () {
    asia.demand = -1;
    expect(asia.shortfall).equal(-26);
    expect(asia.profit).equal(-10);
  });
});

describe("no producers", () => {
  let noProducers;
  beforeEach(() => {
    const data = { name: "no producers", producers: [], demand: 30, price: 20 };
    noProducers = new Province(data);
  });

  it("shortfall", () => {
    expect(noProducers.shortfall).equal(30);
  });
  it("profit", () => {
    expect(noProducers.profit).equal(0);
  });
});
