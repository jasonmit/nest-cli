'use strict';

const SetState = require('../tasks/state');
const readDeviceId = require('../utils/read-device-id');

module.exports = {
  name: 'state <mode> [deviceId]',
  alias: 's',
  description: 'available modes: cool, heat, heat-cool, off',

  run: readDeviceId(function(mode, id) {
    const task = new SetState({
      app: this.app,
      ui: this.ui
    });

    return task.run(id, mode);
  })
};
