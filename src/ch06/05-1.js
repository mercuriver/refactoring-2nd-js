class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}

const bookcafe = new Book();
bookcafe.addReservation({ name: "A" });
bookcafe.addReservation({ name: "B" });
console.log(bookcafe.reservation);
