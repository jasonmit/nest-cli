'use strict';

const ConfigTask = require('../tasks/config');

module.exports = {
  name: 'config <key> [value]',
  description: 'get/set a configuration option',
  priority: 98,

  run() {
    const task = new ConfigTask({
      app: this.app,
      ui: this.ui
    });

    return task.run.apply(this, arguments);
  }
};
