'use strict';

const TaskClass = require('./-base');

class ReadThermostatTask extends TaskClass {
  run(deviceId) {
    const ui = this.ui;
    const api = this.app.api;

    var table = this.ui.createTable({
      head: ['ID', 'Name', 'State', 'Mode', 'Humidity', 'Target Temp.', 'Target Temp. Low', 'Target Temp. High'].map(function(heading) {
        return this.ui.color('blue', heading);
      }, this)
    });

    return api.thermostat.read(deviceId).then(function(thermostat) {
      table.push([
        thermostat.id,
        thermostat.name,
        thermostat.state,
        thermostat.mode,
        thermostat.humidity,
        thermostat.targetTemperatureF,
        thermostat.targetTemperatureLowF,
        thermostat.targetTemperatureHighF
      ]);

      ui.writeLine(table.toString());
    });
  }
}

module.exports = ReadThermostatTask;
