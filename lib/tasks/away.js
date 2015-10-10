'use strict';

const TaskClass = require('./-base');

class AwayTask extends TaskClass {
  run(structureId, mode) {
    const ui = this.ui;

    return this.app.api.structure.away(structureId, mode).then((res) => {
      ui.writeLine(res);
    });
  }
}

module.exports = AwayTask;
