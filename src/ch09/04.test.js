import { it } from "mocha";
import assert from "assert";
import { TelephoneNumber } from "./04.js";

it("telephone equals", function () {
  assert(
    new TelephoneNumber("010", "222-3333").equals(
      new TelephoneNumber("010", "222-3333")
    )
  );
});
