class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = [];
  }
  get production() {
    return this._production;
  }
  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment);
    this._production += anAdjustment.amount;
  }
}
