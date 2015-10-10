'use strict';

const AwayTask = require('../tasks/away');

module.exports = {
  name: 'away <mode> [structureId]',
  description: 'available modes: home, away, auto-away, unknown',

  run(mode, structureId) {
    const task = new AwayTask({
      app: this.app,
      ui: this.ui
    });

    return task.run(structureId, mode);
  }
};
