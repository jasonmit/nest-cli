'use strict';

const SetStateTask = require('../tasks/state');
const readThermostatId = require('../utils/read-thermostat-id');

module.exports = {
  name: 'off [thermostatId]',
  description: 'turns off the HVAC',

  run: readThermostatId(function(thermostatId) {
    const task = new SetStateTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(thermostatId, 'off');
  })
};
