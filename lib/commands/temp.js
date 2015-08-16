'use strict';

const SetTempTask = require('../tasks/temp');
const readDeviceId = require('../utils/read-device-id');

module.exports = {
  name: 'temp <mode> <temp> [deviceId]',
  alias: 't',
  description: 'modes: cool, heat, heat-cool',

  run: readDeviceId(function(mode, temp, id) {
    const task = new SetTempTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(id, mode, temp);
  })
};
