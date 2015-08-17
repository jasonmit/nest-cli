'use strict';

const SetStateTask = require('../tasks/state');
const readThermostatId = require('../utils/read-thermostat-id');

module.exports = {
  name: 'state <mode> [thermostatId]',
  alias: 's',
  description: 'available modes: cool, heat, heat-cool, off',

  run: readThermostatId(function(mode, thermostatId) {
    const task = new SetStateTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(thermostatId, mode);
  })
};
