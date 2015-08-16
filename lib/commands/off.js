'use strict';

const SetStateTask = require('../tasks/state');
const readDeviceId = require('../utils/read-device-id');

module.exports = {
  name: 'off [thermostatId]',
  description: 'turns off the HVAC',

  run: readDeviceId(function(thermostatId) {
    const task = new SetStateTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(thermostatId, 'off');
  })
};
