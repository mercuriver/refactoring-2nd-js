import assert from "assert";

class ProductionPlan {
  constructor() {
    this._adjustments = [];
  }
  get production() {
    return this._adjustments.reduce((acc, p) => acc + p.amount, 0);
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}

const products = new ProductionPlan();
products.applyAdjustment({ name: "사과", amount: 10 });
products.applyAdjustment({ name: "바나나", amount: 20 });

console.log(products.production);
