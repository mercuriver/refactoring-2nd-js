import dayjs from "dayjs";

class Booking {
  constructor(show, date) {
    this._show = show;
    this._date = date;
  }
  get date() {
    return this._date;
  }
  get show() {
    return this._show;
  }
  get hasTalkback() {
    return this.show.hasOwnProperty("talkback") && !this.isPeakDay;
  }
  get basePrice() {
    let result = this.show.price;
    if (this.isPeakDay) result += Math.round(result * 0.15);
    return result;
  }
  get isPeakDay() {
    return (
      this.date.isAfter(dayjs("2021-07-15")) &&
      this.date.isBefore(dayjs("2021-07-31"))
    );
  }
}

class PremiumBooking extends Booking {
  constructor(show, date, extras) {
    super(show, date);
    this._extras = extras;
  }
  get hasTalkback() {
    return this.show.hasOwnProperty("talkback");
  }
  get basePrice() {
    return Math.round(super.basePrice + this._extras.premiumFee);
  }
  get hasDinner() {
    return this._extras.hasOwnProperty("dinner") && !this.isPeakDay;
  }
}
