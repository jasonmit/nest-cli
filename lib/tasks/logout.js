'use strict';

const TaskClass = require('./-base');

class LogoutTask extends TaskClass {
  run() {
    this.app.config.remove('ACCESS_TOKEN');
    this.app.config.remove('ACCESS_TOKEN_EXPIRES_IN');
  }
}

module.exports = LogoutTask;
