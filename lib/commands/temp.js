'use strict';

const SetTempTask = require('../tasks/temp');
const readThermostatId = require('../utils/read-thermostat-id');

module.exports = {
  name: 'temp <mode> <temp> [thermostatId]',
  alias: 't',
  description: 'modes: cool, heat, heat-cool',

  run: readThermostatId(function(mode, temp, thermostatId) {
    const task = new SetTempTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(thermostatId, mode, temp);
  })
};
