'use strict';

const LoginTask = require('../tasks/login');

module.exports = {
  name: 'login',
  description: 'login to your nest account via oauth',
  priority: 999,

  run(pin) {
    const task = new LoginTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(pin);
  }
};
