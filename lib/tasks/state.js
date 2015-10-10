'use strict';

const TaskClass = require('./-base');

class StateTask extends TaskClass {
  run(id, state) {
    const ui = this.ui;

    return this.app.api.thermostat.state(id, state).then((res) => {
      ui.writeLine(res);
    });
  }
}

module.exports = StateTask;
