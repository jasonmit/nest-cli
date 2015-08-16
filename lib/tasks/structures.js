'use strict';

const TaskClass = require('./-base');

class StructuresTask extends TaskClass {
  constructor(options) {
    super(options);

    this.table = this.ui.createTable({
      head: ['ID', 'Name', 'Thermostats', 'Smoke Alarms', 'Away'].map(function(heading) {
        return this.ui.color('blue', heading);
      }, this)
    });
  }

  run(options) {
    const ui = this.ui;
    const table = this.table;

    return this.app.restClient.structure.index().then(function(res) {
      if (options.verbose) {
        return ui.writeLine(res);
      }

      Object.keys(res).map(function(key) {
        return res[key];
      }).map(function(structure) {
        return [
          structure.structure_id,
          structure.name,
          structure.thermostats.length,
          structure.smoke_co_alarms.length,
          structure.away
        ];
      }).forEach(function(structure) {
        table.push(structure);
      });

      ui.writeLine(table.toString());
    });
  }
}

module.exports = StructuresTask;
