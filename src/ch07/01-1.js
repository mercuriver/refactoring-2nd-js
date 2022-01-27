class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  get name() {
    return this._name;
  }
  get country() {
    return this._country;
  }

  set name(aString) {
    this._name = aString;
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
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
