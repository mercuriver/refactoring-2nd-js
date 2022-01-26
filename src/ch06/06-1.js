import { getDefaultOwner, setDefaultOwner } from "./06-1-defaultOwner.js";

const spaceship = {
  owner: getDefaultOwner(),
};

setDefaultOwner({ firstName: "Spike", lastName: "Spiegel" });
const swordfish = {
  owner: getDefaultOwner(),
};

console.log(spaceship, swordfish);
