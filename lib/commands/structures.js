'use strict';

const StructuresTask = require('../tasks/structures');

module.exports = {
  name: 'structures',
  description: 'list of structures associated with account',
  options: ['-v, --verbose', 'output the raw response'],

  run(options) {
    const task = new StructuresTask({
      app: this.app,
      ui: this.ui
    });

    return task.run({
      verbose: options.verbose
    });
  }
};
