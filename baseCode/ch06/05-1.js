class Book {
  _reservations = [];

  get reservation() {
    return this._reservations;
  }

  addReservation(customer) {
    this._reservations.push(customer);
  }
}
