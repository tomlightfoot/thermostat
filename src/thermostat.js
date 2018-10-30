function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.PowerSavingMode = true;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.up = function () {
  if (this.isMaximumTemperature()) {
    return;
  }
  return this.temperature += 1;
};

Thermostat.prototype.down = function () {
  if (this.isMinimumTemperature()) {
    return;
  }
  return this.temperature -= 1;
};

Thermostat.prototype.isMinimumTemperature = function () {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.isMaximumTemperature = function () {
  if (this.isPowerSavingModeOn()) {
    return this.temperature === this.MAX_LIMIT_PSM_ON;
  }
  return this.temperature === this.MAX_LIMIT_PSM_OFF;
};

Thermostat.prototype.isPowerSavingModeOn = function () {
  return this.PowerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOff = function () {
  this.PowerSavingMode = false;
};

Thermostat.prototype.switchPowerSavingModeOn = function () {
  this.PowerSavingMode = true;
};
