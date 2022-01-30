class Rating {
  constructor(voyage, history) {
    this._voyage = voyage;
    this._history = history;
  }

  get value() {
    const vpf = voyageProfitFactor(this._voyage, this._history);
    const vr = voyageRisk(this._voyage);
    const chr = captainHistoryRisk(this._voyage, this._history);
    if (vpf * 3 > vr + chr * 2) return "A";
    return "B";
  }
}

// 투자 등급
const rating = (voyage, history) => {
  return new Rating(voyage, history).value;
};

// 항해 경로 위험요소
const voyageRisk = (voyage) => {
  let result = 1;
  if (voyage.length > 4) result += 2;
  if (voyage.length > 8) result += voyage.length - 8;
  if (["중국", "동인도"].includes(voyage.zone)) result += 4;
  return Math.max(result, 0);
};

// 중국을 경유하는가?
const hasChina = (history) => history.some((v) => v.zone === "중국");

// 선장의 항해 이력 위험요소
const captainHistoryRisk = (voyage, history) => {
  let result = 1;
  if (history.length < 5) result += 4;
  result += history.filter((v) => v.profit < 0).length;
  if (voyage.zone === "중국" && hasChina(history)) result -= 2;
  return Math.max(result, 0);
};

// 수익 요인
const voyageProfitFactor = (voyage, history) => {
  let result = 2;
  if (voyage.zone === "중국") result += 1;
  if (voyage.zone === "동인도") result += 1;
  if (voyage.zone === "중국" && hasChina(history)) {
    result += 3;
    if (history.length > 10) result += 1;
    if (voyage.length > 12) result += 1;
    if (voyage.length > 18) result -= 1;
  } else {
    if (history.length > 8) result += 1;
    if (voyage.length > 14) result -= 1;
  }
  return result;
};

const voyage = { zone: "서인도", length: 10 };
const histories = [
  { zone: "동인도", profit: 5 },
  { zone: "서인도", profit: 15 },
  { zone: "중국", profit: -2 },
  { zone: "서아프리카", profit: 7 },
];

const myRating = rating(voyage, histories);
console.log({
  voyageRisk: voyageRisk(voyage),
  captainHistoryRisk: captainHistoryRisk(voyage, histories),
  voyageProfitFactor: voyageProfitFactor(voyage, histories),
  myRating,
});
