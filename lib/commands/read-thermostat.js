'use strict';

const ReadThermostatTask = require('../tasks/read-thermostat');
const readThermostatId = require('../utils/read-thermostat-id');

module.exports = {
  name: 'read [thermostatId]',
  alias: 'r',
  description: 'read a thermostat by device id',

  run: readThermostatId(function(thermostatId) {
    const task = new ReadThermostatTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(thermostatId);
  })
};
