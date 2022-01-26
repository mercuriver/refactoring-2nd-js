import assert from "assert";
class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer, isPriority) {
    assert(isPriority === true || isPriority === false);
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ name: "A" }, false);
bookcafe.addReservation({ name: "B" }, true);
console.log(bookcafe.reservation);
