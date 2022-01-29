class Account {
  constructor(number, type, interestRate) {
    this._number = number;
    this._type = type;
    this._interestRate = interestRate;
  }
  get interestRate() {
    return this._interestRate;
  }
}
class AccountType {
  constructor(nameString) {
    this._name = nameString;
  }
}
const minus = new AccountType("마이너스");
const acc = new Account(100000, minus, 0.39);
console.log(acc.interestRate);
