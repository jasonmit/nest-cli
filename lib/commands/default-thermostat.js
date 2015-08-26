'use strict';

const ConfigTask = require('../tasks/config');

module.exports = {
  name: 'default-thermostat <thermostatId>',
  description: 'sets the default thermostat device id',
  priority: 97,

  run(thermostatId) {
    const task = new ConfigTask({
      app: this.app,
      ui: this.ui
    });

    return task.run('DEFAULT_THERMOSTAT', thermostatId);
  }
};
