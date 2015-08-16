'use strict';

const TaskClass = require('./-base');

class ReadThermostatTask extends TaskClass {
  run(deviceId) {
    const ui = this.ui;
    const api = this.app.api;

    return api.thermostat.read(deviceId).then(function(res) {
      ui.writeLine(res);
    });
  }
}

module.exports = ReadThermostatTask;
