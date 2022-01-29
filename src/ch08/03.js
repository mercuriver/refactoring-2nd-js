const renderPhoto = (aPhoto) => {
  return `<img src="${aPhoto.url}" />`;
};
const emitPhotoData = (aPhoto) => {
  const result = [];
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
};

const renderPerson = (person) => {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(`<p>제목: ${person.photo.title}</p>`);
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
};

const zz_emitPhotoData = (aPhoto) => {
  const result = [];
  result.push(`<p>제목: ${aPhoto.title}</p>`);
  result.push(`<p>위치: ${aPhoto.location}</p>`);
  result.push(`<p>날짜: ${aPhoto.date.toDateString()}</p>`);
  return result.join("\n");
};

const photoDiv = (p) => ["<div>", zz_emitPhotoData(p), "</div>"].join("\n");

const photo = {
  title: "Photo-AA",
  location: "Lo-A",
  date: new Date(),
  url: "http://abc.com",
};
console.log("** renderPerson **\n", renderPerson({ name: "AA", photo }));
console.log("\n** photoDiv **\n", photoDiv(photo));
