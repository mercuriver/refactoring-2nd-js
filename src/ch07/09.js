const findPerson = (people) => {
  const candidates = ["Don", "John", "Kent"];
  return people.find((p) => candidates.includes(p)) || "";
};
console.log(findPerson(["Doon", "Kay", "Johnn", "Peter", "Kent", "Clark"]));
