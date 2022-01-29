class TelephoneNumber {
  constructor(areaCode, number) {
    this._areaCode = areaCode;
    this._number = number;
  }
  get areaCode() {
    return this._areaCode;
  }
  get number() {
    return this._number;
  }
}

class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
  }
  get officeAreaCode() {
    return this._telephoneNumber.areaCode;
  }
  set officeAreaCode(arg) {
    this._telephoneNumber.areaCode = arg;
  }
  get officeNumber() {
    return this._telephoneNumber.number;
  }
  set officeNumber(arg) {
    this._telephoneNumber.number = arg;
  }
}

const p = new Person();
p.officeAreaCode = "82";
p.officeNumber = "222-3333";
console.log(p.officeAreaCode, p.officeNumber);
