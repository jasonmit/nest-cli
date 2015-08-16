'use strict';

const TaskClass = require('./-base');

class ConfigTask extends TaskClass {
  run(key, value) {
    if (value === undefined) {
      return this.ui.writeLine(this.app.config.get(key));
    }

    return this.app.config.set(key, value);
  }
}

module.exports = ConfigTask;
