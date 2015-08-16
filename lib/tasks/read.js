'use strict';

const TaskClass = require('./-base');

class ReadTask extends TaskClass {
  run(deviceId) {
    const ui = this.ui;
    const restClient = this.app.restClient;

    return restClient.devices.read(deviceId).then(function(res) {
      ui.writeLine(res);
    });
  }
}

module.exports = ReadTask;
