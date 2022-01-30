const sendAlert = (p) => console.warn("악당 발견 =>", p);

const checkForMiscreants = (people) => {
  for (const p of people) {
    if (p === "조커" || p === "사루만") {
      sendAlert(p);
      return;
    }
  }
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
