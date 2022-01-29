class ProductionPlan {
  constructor(production) {
    this._adjustments = [];
    this._initialProduction = production;
  }
  get production() {
    return this._adjustments.reduce(
      (acc, p) => acc + p.amount,
      this._initialProduction
    );
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
  }
}

const products = new ProductionPlan(0);
products.applyAdjustment({ name: "사과", amount: 10 });
products.applyAdjustment({ name: "바나나", amount: 20 });

const products2 = new ProductionPlan(10);
products2.applyAdjustment({ name: "사과", amount: 10 });
products2.applyAdjustment({ name: "바나나", amount: 20 });

console.log(products.production, products2.production);
