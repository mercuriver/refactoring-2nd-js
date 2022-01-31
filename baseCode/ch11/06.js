const thermostat = {
  selectedTemperature: 25,
  currentTemperature: 27,
};

class HeatingPlan {
  get targetTemperature() {
    if (thermostat.selectedTemperature > this._max) return this._max;
    else if (thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}

const temperatureController = () => {
  const setToHeat = () => {};
  const setToCool = () => {};
  const setOff = () => {};

  const heatingPlan = new HeatingPlan();
  if (heatingPlan.targetTemperature > thermostat.currentTemperature)
    setToHeat();
  else if (heatingPlan.targetTemperature < thermostat.currentTemperature)
    setToCool();
  else setOff();
};
