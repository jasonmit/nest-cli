'use strict';

const TaskClass = require('./-base');

class DevicesTask extends TaskClass {
  thermostatTable(thermostats) {
    var table = this.ui.createTable({
      head: ['ID', 'Name', 'State', 'Mode', 'Humidity', 'Target Temp.', 'Target Temp. Low', 'Target Temp. High'].map((heading) => {
        return this.ui.color('blue', heading);
      })
    });

    Object.keys(thermostats).map((key) => {
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

    this.ui.writeLine(table.toString());
  }

  alarmTable(alarms) {
    const table = this.ui.createTable({
      head: ['ID', 'Name', 'Battery Health', 'Smoke State', 'CO State', 'Online'].map((heading) => {
        return this.ui.color('blue', heading);
      })
    });

    Object.keys(alarms).map((key) => {
      return alarms[key];
    }).map((alarm) => {
      return [
        alarm.device_id,
        alarm.name,
        alarm.battery_health,
        alarm.smoke_alarm_state,
        alarm.co_alarm_state,
        alarm.is_online
      ];
    }).forEach((alarm) => {
      table.push(alarm);
    });

    this.ui.writeLine(table.toString());
  }

  run(options) {
    const ui = this.ui;

    return this.app.api.device.index().then((res) => {
      if (options.verbose) {
        return ui.writeLine(res);
      }

      if (res.thermostats) {
        this.thermostatTable(res.thermostats);
      }

      if (res.smoke_co_alarms) {
        this.alarmTable(res.smoke_co_alarms);
      }
    });
  }
}

module.exports = DevicesTask;
