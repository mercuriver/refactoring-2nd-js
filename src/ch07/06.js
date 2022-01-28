class TrackingInformation {
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

class Shipment {
  constructor() {
    this._trackingInformation = new TrackingInformation();
  }
  get trackingInfo() {
    return `${this._trackingInformation.shippingCompany}: ${this._trackingInformation.trackingNumber}`;
  }
  get trackingInformation() {
    return this._trackingInformation;
  }
  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }
  set shippingCompany(arg) {
    this._trackingInformation.shippingCompany = arg;
  }
  set trackingNumber(arg) {
    this._trackingInformation.trackingNumber = arg;
  }
}

const aShipment = new Shipment();
const vendor = { name: "A-SHIP", number: "010-1234-5678" };
aShipment.shippingCompany = vendor.name;
aShipment.trackingNumber = vendor.number;

console.log(aShipment.trackingInfo);
