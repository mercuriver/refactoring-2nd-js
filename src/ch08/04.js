const previousDateFromNow = (days) =>
  new Date(Date.now() - 1000 * 60 * 60 * 24 * days);
const recentDateCutoff = () => previousDateFromNow(3);

const renderPhoto = (outStream, aPhoto) => {
  outStream.write(`<img src="${aPhoto.url}" />`);
};

const emitPhotoData = (outStream, photo) => {
  outStream.write(`<p>제목: ${photo.title}</p>`);
  outStream.write(`<p>날짜: ${photo.date.toDateString()}</p>`);
};

const listRecentPhotos = (outStream, photos) => {
  photos
    .filter((p) => p.date > recentDateCutoff())
    .forEach((p) => {
      outStream.write("<div>\n");
      emitPhotoData(outStream, p);
      outStream.write(`<p>위치 정보: ${p.location}</p>`);
      outStream.write("</div>\n");
    });
};
const renderPerson = (outStream, person) => {
  outStream.write(`<p>${person.name}</p>\n`);
  renderPhoto(outStream, person.photo);
  emitPhotoData(outStream, person.photo);
  outStream.write(`<p>위치: ${person.photo.location}</p>`);
};

const photos = [
  {
    title: "custom-photo-1",
    location: "custom-location-A",
    date: previousDateFromNow(0),
    url: "http://abc.com/1",
  },
  {
    title: "custom-photo-2",
    location: "custom-location-B",
    date: previousDateFromNow(1),
    url: "http://abc.com/2",
  },
  {
    title: "custom-photo-3",
    location: "custom-location-C",
    date: previousDateFromNow(2),
    url: "http://abc.com/3",
  },
  {
    title: "custom-photo-4",
    location: "custom-location-D",
    date: previousDateFromNow(3),
    url: "http://abc.com/4",
  },
  {
    title: "custom-photo-5",
    location: "custom-location-E",
    date: previousDateFromNow(4),
    url: "http://abc.com/5",
  },
  {
    title: "custom-photo-6",
    location: "custom-location-F",
    date: previousDateFromNow(5),
    url: "http://abc.com/6",
  },
  {
    title: "custom-photo-7",
    location: "custom-location-G",
    date: previousDateFromNow(6),
    url: "http://abc.com/7",
  },
  {
    title: "custom-photo-8",
    location: "custom-location-H",
    date: previousDateFromNow(7),
    url: "http://abc.com/8",
  },
];
const outstream = {
  res: "",
  write(text) {
    this.res += text;
  },
};
outstream.write("** renderPerson **\n");
renderPerson(outstream, { name: "AA", photo: photos[0] });
outstream.write("\n\n** listRecentPhotos **\n");
listRecentPhotos(outstream, photos);
console.log(outstream.res);
