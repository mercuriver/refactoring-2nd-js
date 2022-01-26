let defaultOwner = { firstName: "마틴", lastName: "파울러" };

const spaceship = {
  owner: defaultOwner,
};

defaultOwner = { firstName: "로버트", lastName: "마틴" };

console.log(spaceship);
