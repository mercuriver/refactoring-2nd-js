class Organization {
  #name;
  #country;
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }
  get name() {
    return this.#name;
  }
  set name(aString) {
    this.#name = aString;
  }

  get country() {
    return this.#country;
  }
  set country(aCountryCode) {
    this.#country = aCountryCode;
  }
}

let result = "";
const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

const getOrganization = () => organization;

result += `<h1>${organization.name}</h1>`;

getOrganization().name = "라일락 & 구스베리";
result += `<h1>${getOrganization().name}</h1>`;

console.log(result);
