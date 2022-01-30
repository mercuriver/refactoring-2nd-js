const sendAlert = (p) => console.warn("악당 발견 =>", p);

const checkForMiscreants = (people) => {
  const p = people.find((p) => p === "조커" || p === "사루만");
  if (p) {
    sendAlert(p);
    return;
  }

  // if (people.some((p) => p === "조커" || p === "사루만")) {
  //   sendAlert();
  //   return;
  // }

  // if (people.some((p) => ["조커", "사루만"].includes(p))) {
  //   sendAlert();
  //   return;
  // }
};

checkForMiscreants([
  "슈퍼맨",
  "배트맨",
  "아이언맨",
  "사루만",
  "블랙위도우",
  "조커",
  "스파이더맨",
]);
