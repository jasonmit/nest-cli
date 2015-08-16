'use strict';

const TaskClass = require('./-base');

class DevicesTask extends TaskClass {
  constructor(options) {
    super(options);

    this.table = this.ui.createTable({
      head: ['ID', 'Name', 'State', 'Mode', 'Humidity', 'Target Temp.', 'Target Temp. Low', 'Target Temp. High'].map(function(heading) {
        return this.ui.color('blue', heading);
      }, this)
    });
  }

  run(options) {
    const ui = this.ui;
    const table = this.table;

    return this.app.restClient.device.index().then(function(res) {
      if (options.verbose) {
        return ui.writeLine(res);
      }

      const thermostats = res.thermostats;

      Object.keys(thermostats).map(function(key) {
        return thermostats[key];
      }).map(function(thermostat) {
        return [
          thermostat.device_id,
          thermostat.name,
          thermostat.hvac_state,
          thermostat.hvac_mode,
          thermostat.humidity,
          thermostat.target_temperature_f,
          thermostat.target_temperature_low_f,
          thermostat.target_temperature_high_f
        ];
      }).forEach(function(thermostat) {
        table.push(thermostat);
      });

      ui.writeLine(table.toString());
    });
  }
}

module.exports = DevicesTask;
