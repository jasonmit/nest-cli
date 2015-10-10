'use strict';

const TaskClass = require('./-base');

class TempTask extends TaskClass {
  run(deviceId, mode, desiredTemp, low) {
    const ui = this.ui;
    const thermostat = this.app.api.thermostat;
    let result;

    switch (mode.toLowerCase()) {
    case 'heat-cool':
      result = thermostat.temp(deviceId, desiredTemp, low);
      break;
    case 'cool':
      result = thermostat.cool(deviceId, desiredTemp);
      break;
    case 'heat':
      result = thermostat.heat(deviceId, desiredTemp);
      break;
    }

    return result.then((res) => {
      ui.writeLine(res);
    });
  }
}

module.exports = TempTask;
