let result = "";
const organization = { name: "애크미 구스베리", country: "GB" };

result += `<h1>${organization.name}</h1>`;

const getRawDataOfOrganization = () => {
  return organization;
};

getRawDataOfOrganization().name = "라일락 & 구스베리";
result += `<h1>${getRawDataOfOrganization().name}</h1>`;

console.log(result);
