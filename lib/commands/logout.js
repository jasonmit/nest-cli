'use strict';

const LogoutTask = require('../tasks/logout');

module.exports = {
  name: 'logout',
  description: 'logout of nest account',
  priority: 998,

  isVisible(app) {
    return !!app.config.get('ACCESS_TOKEN');
  },

  run(pin) {
    const task = new LogoutTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(pin);
  }
};
