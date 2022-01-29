const renderPhoto = (aPhoto) => `<img src="${aPhoto.url}" />`;

const emitPhotoData = (aPhoto) =>
  [
    `<p>제목: ${aPhoto.title}</p>`,
    `<p>위치: ${aPhoto.location}</p>`,
    `<p>날짜: ${aPhoto.date.toDateString()}</p>`,
  ].join("\n");

const renderPerson = (person) => {
  const result = [];
  result.push(`<p>${person.name}</p>`);
  result.push(renderPhoto(person.photo));
  result.push(emitPhotoData(person.photo));
  return result.join("\n");
};

const photoDiv = (p) => ["<div>", emitPhotoData(p), "</div>"].join("\n");

const photo = {
  title: "Photo-AA",
  location: "Lo-A",
  date: new Date(),
  url: "http://abc.com",
};
console.log("** renderPerson **\n", renderPerson({ name: "AA", photo }));
console.log("\n** photoDiv **\n", photoDiv(photo));
