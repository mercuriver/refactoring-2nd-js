class Order {
  constructor(itemPrice, quantity) {
    this.itemPrice = itemPrice;
    this.quantity = quantity;
  }
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    return this.discountedPrice(basePrice);
  }

  get discountLevel() {
    return this.quantity > 100 ? 2 : 1;
  }

  discountedPrice(basePrice) {
    switch (this.discountLevel) {
      case 1:
        return basePrice * 0.95;
      case 2:
        return basePrice * 0.9;
      default:
        return basePrice;
    }
  }
}

const order = new Order(500, 10);
console.log(order.finalPrice);
