'use strict';

const TaskClass = require('./-base');

class AwayTask extends TaskClass {
  run(structureId, mode) {
    const ui = this.ui;
    return this.app.restClient.structure.away(structureId, mode).then(function(res) {
      ui.writeLine(res);
    });
  }
}

module.exports = AwayTask;
