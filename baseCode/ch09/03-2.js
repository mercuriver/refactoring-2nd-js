class ProductionPlan {
  constructor(production) {
    this._adjustments = [];
    this._production = production;
  }
  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
