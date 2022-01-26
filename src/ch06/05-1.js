import assert from "assert";
class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ name: "A" });
bookcafe.addReservation({ name: "B" });
console.log(bookcafe.reservation);
