class Order {
  constructor(itemPrice, quantity) {
    this.itemPrice = itemPrice;
    this.quantity = quantity;
  }
  get finalPrice() {
    const basePrice = this.quantity * this.itemPrice;
    let discountLevel = this.discountLevel;
    return this.discountedPrice(basePrice, discountLevel);
  }

  get discountLevel() {
    let discountLevel;
    if (this.quantity > 100) discountLevel = 2;
    else discountLevel = 1;
    return discountLevel;
  }

  discountedPrice(basePrice, discountLevel) {
    switch (discountLevel) {
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
