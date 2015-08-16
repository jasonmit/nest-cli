'use strict';

const ListDevices = require('../tasks/devices');

module.exports = {
  name: 'devices',
  description: 'get a list of known devices',
  alias: 'ls',
  priority: 97,
  options: ['-v, --verbose', 'output the raw response'],

  run(options) {
    const task = new ListDevices({
      app: this.app,
      ui: this.ui
    });

    return task.run({
      verbose: options.verbose
    });
  }
};
