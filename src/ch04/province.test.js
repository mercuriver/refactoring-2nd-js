import { describe, it } from "mocha";
import { assert } from "chai";

import Province from "./province.js";
import { sampleProvinceData } from "./util.js";

describe("province", () => {
  it("shortfall", () => {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});
