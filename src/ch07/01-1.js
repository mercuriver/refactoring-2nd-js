class Organization {
  constructor(data) {
    this._data = data;
  }
  get name() {
    return this._data.name;
  }
}

result += `<h1>${organization.name}</h1>`;

const getRawDataOfOrganization = () => {
  return organization;
};

getRawDataOfOrganization().name = "라일락 & 구스베리";
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

console.log(result);
