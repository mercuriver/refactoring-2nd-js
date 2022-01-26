let defaultOwnerData = { firstName: "마틴", lastName: "파울러" };

const getDefaultOwner = () => defaultOwnerData;
const sertDefaultOwner = (arg) => {
  defaultOwnerData = arg;
};

const spaceship = {
  owner: getDefaultOwner(),
};

sertDefaultOwner({ firstName: "Spike", lastName: "Spiegel" });
const swordfish = {
  owner: getDefaultOwner(),
};

console.log(spaceship, swordfish);
