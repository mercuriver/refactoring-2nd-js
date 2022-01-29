class AccountType {
  constructor(isPremium) {
    this._isPremium = isPremium;
  }
  // 초과 인출 이자 계산
  overdraftCharge(daysOverdrawn) {
    if (this.isPremium) {
      const baseCharge = 10;
      if (daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (daysOverdrawn - 7) * 0.85;
    }
    return daysOverdrawn * 1.75;
  }
}

class Account {
  daysOverdrawn;
  type = { isPremium: false };
  constructor(daysOverdrawn, type) {
    this.daysOverdrawn = daysOverdrawn;
    this.type = type;
  }
  // 은행 이자 계산
  get bankCharge() {
    let result = 4.5;
    if (this.daysOverdrawn > 0) result += this.overdraftCharge;
    return result;
  }

  get overdraftCharge() {}
}

const aa = new Account(10, { isPremium: true });
const bb = new Account(10, { isPremium: false });

console.log({
  name: "AA",
  charge: aa.bankCharge,
  overdraftCharge: aa.overdraftCharge,
});
console.log({
  name: "BB",
  charge: bb.bankCharge,
  overdraftCharge: bb.overdraftCharge,
});
