'use strict';

const TaskClass = require('./-base');

class ReadThermostatTask extends TaskClass {
  run(deviceId) {
    const ui = this.ui;
    const api = this.app.api;
    const table = this.ui.createTable();

    return api.thermostat.read(deviceId).then(function(thermostat) {
      table.push(
        { 'ID': thermostat.id },
        { 'Name': thermostat.name },
        { 'State': thermostat.state },
        { 'Mode': thermostat.mode },
        { 'Humidity': thermostat.humidity },
        { 'Target Temperature': thermostat.targetTemperatureF + '°F' },
        { 'Target Temperature Low': thermostat.targetTemperatureLowF + '°F' },
        { 'Target Temperature High': thermostat.targetTemperatureHighF + '°F' }
      );

      ui.writeLine(table.toString());
    });
  }
}

module.exports = ReadThermostatTask;
