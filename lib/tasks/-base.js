'use strict';

class Task {
  constructor(options) {
    this.app = options.app;
    this.ui = options.ui;
  }

  run() {
    throw new Error('Not implemented');
  }
}

module.exports = Task;
