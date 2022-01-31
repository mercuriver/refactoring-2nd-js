const thermostat = {
  selectedTemperature: 25,
  currentTemperature: 27,
};

class HeatingPlan {
  constructor() {
    this._min = 21;
    this._max = 30;
  }

  targetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

const temperatureController = () => {
  const setToHeat = () => {
    console.log("setToHeat");
  };
  const setToCool = () => {
    console.log("setToCool");
  };
  const setOff = () => {
    console.log("setOff");
  };

  const heatingPlan = new HeatingPlan();
  if (
    heatingPlan.targetTemperature(thermostat.selectedTemperature) >
    thermostat.currentTemperature
  )
    setToHeat();
  else if (
    heatingPlan.targetTemperature(thermostat.selectedTemperature) <
    thermostat.currentTemperature
  )
    setToCool();
  else setOff();
};

temperatureController();
