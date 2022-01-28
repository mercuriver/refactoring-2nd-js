class Shipment {
  get trackingInfo() {
    return `${this._shippingCompany}: ${this._trackingNumber}`;
  }
  get shippingCompany() {
    return this._shippingCompany;
  }
  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }
  get trackingNumber() {
    return this._trackingNumber;
  }
  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }
}

const aShipment = new Shipment();
const vendor = { name: "A-SHIP", number: "010-1234-5678" };
aShipment.shippingCompany = vendor.name;
aShipment.trackingNumber = vendor.number;

console.log(aShipment.trackingInfo);
