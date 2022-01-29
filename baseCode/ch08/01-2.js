class Account {
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
  // 초과 인출 이자 계산
  get overdraftCharge() {
    if (this.type.isPremium) {
      const baseCharge = 10;
      if (this.daysOverdrawn <= 7) return baseCharge;
      return baseCharge + (this.daysOverdrawn - 7) * 0.85;
    }
    return this.daysOverdrawn * 1.75;
  }
}
