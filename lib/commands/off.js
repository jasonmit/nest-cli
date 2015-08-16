'use strict';

const SetStateTask = require('../tasks/state');
const readDeviceId = require('../utils/read-device-id');

module.exports = {
  name: 'off [deviceId]',
  description: 'turns off the HVAC',

  run: readDeviceId(function(id) {
    const task = new SetStateTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(id, 'off');
  })
};
