import assert from "assert";

class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = [];
  }
  get production() {
    assert(this._production === this.calculatedProduction);
    return this._production;
  }
  get calculatedProduction() {
    return this._adjustments.reduce((acc, p) => acc + p.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}

const products = new ProductionPlan();
products.applyAdjustment({ name: "사과", amount: 10 });
products.applyAdjustment({ name: "바나나", amount: 20 });

console.log(products.production);
