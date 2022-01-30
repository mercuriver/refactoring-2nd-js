class Rating {
  constructor(voyage, history) {
    this._voyage = voyage;
    this._history = history;
  }

  get value() {
    const vpf = this.voyageProfitFactor;
    const vr = this.voyageRisk;
    const chr = this.captainHistoryRisk;
    if (vpf * 3 > vr + chr * 2) return "A";
    return "B";
  }
  get voyageRisk() {
    let result = 1;
    if (this._voyage.length > 4) result += 2;
    if (this._voyage.length > 8) result += this._voyage.length - 8;
    if (["중국", "동인도"].includes(this._voyage.zone)) result += 4;
    return Math.max(result, 0);
  }

  get captainHistoryRisk() {
    let result = 1;
    if (this._history.length < 5) result += 4;
    result += this._history.filter((v) => v.profit < 0).length;
    if (this._voyage.zone === "중국" && this.hasChinaHistory) result -= 2;
    return Math.max(result, 0);
  }

  get voyageProfitFactor() {
    let result = 2;
    if (this._voyage.zone === "중국") result += 1;
    if (this._voyage.zone === "동인도") result += 1;
    if (this._voyage.zone === "중국" && this.hasChinaHistory) {
      result += 3;
      if (this._history.length > 10) result += 1;
      if (this._voyage.length > 12) result += 1;
      if (this._voyage.length > 18) result -= 1;
    } else {
      if (this._history.length > 8) result += 1;
      if (this._voyage.length > 14) result -= 1;
    }
    return result;
  }

  get hasChinaHistory() {
    return this._history.some((v) => v.zone === "중국");
  }
}

class ExperiencedChinaRating extends Rating {}

const createRating = (voyage, histories) => {
  if (voyage.zone === "중국" && histories.some((v) => v.zone === "중국")) {
    return new ExperiencedChinaRating(voyage, histories);
  }
  return new Rating(voyage, histories);
};

const voyage = { zone: "서인도", length: 10 };
const histories = [
  { zone: "동인도", profit: 5 },
  { zone: "서인도", profit: 15 },
  { zone: "중국", profit: -2 },
  { zone: "서아프리카", profit: 7 },
];

const myRating = createRating(voyage, histories);
console.log({
  voyageRisk: myRating.voyageRisk,
  captainHistoryRisk: myRating.captainHistoryRisk,
  voyageProfitFactor: myRating.voyageProfitFactor,
  myRating: myRating.value,
});

const chinaRating = createRating({ zone: "중국", length: 10 }, histories);
console.log({
  voyageRisk: chinaRating.voyageRisk,
  captainHistoryRisk: chinaRating.captainHistoryRisk,
  voyageProfitFactor: chinaRating.voyageProfitFactor,
  myRating: chinaRating.value,
});
