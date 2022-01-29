class Organization {
  constructor(data) {
    this._title = data.title !== undefined ? data.title : data.name;
    this._country = data.country;
  }
  get name() {
    return this._title;
  }
  set name(aString) {
    this._title = aString;
  }
  get country() {
    return this._country;
  }
  set country(aCountry) {
    this._country = aCountry;
  }
}
const organization = new Organization({
  name: "애크미 구스베리",
  country: "GB",
});

console.log(organization);
