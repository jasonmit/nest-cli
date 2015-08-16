'use strict';

const ConfigTask = require('../tasks/config');

module.exports = {
  name: 'default-device <deviceId>',
  description: 'sets the default device id',
  priority: 97,

  run(deviceId) {
    const task = new ConfigTask({
      app: this.app,
      ui: this.ui
    });

    return task.run('DEFAULT_THERMOSTAT', deviceId);
  }
};
