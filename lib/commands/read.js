'use strict';

const ReadDevice = require('../tasks/read');
const readDeviceId = require('../utils/read-device-id');

module.exports = {
  name: 'read [deviceId]',
  alias: 'r',
  description: 'reads a device by device id',

  run: readDeviceId(function(id) {
    const task = new ReadDevice({
      app: this.app,
      ui: this.ui
    });

    return task.run(id);
  })
};
