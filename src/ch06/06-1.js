import assert from "assert";
import { getDefaultOwner, setDefaultOwner } from "./06-1-defaultOwner.js";

const spaceship = {
  owner: getDefaultOwner(),
};

setDefaultOwner({ firstName: "Spike", lastName: "Spiegel" });
const swordfish = {
  owner: getDefaultOwner(),
};

console.log(spaceship, swordfish);

const owner1 = getDefaultOwner();

const owner2 = getDefaultOwner();
owner2.lastName = "스피겔";

assert.equal("Spiegel", owner1.lastName, "기존 값");
assert.equal("스피겔", owner2.lastName, "변경 값");

console.log({ owner1, owner2 });
