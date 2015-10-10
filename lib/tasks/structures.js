'use strict';

const TaskClass = require('./-base');

class StructuresTask extends TaskClass {
  constructor(options) {
    super(options);

    this.table = this.ui.createTable({
      head: ['ID', 'Name', 'Thermostats', 'Smoke Alarms', 'Away'].map((heading) => {
        return this.ui.color('blue', heading);
      })
    });
  }

  run(options) {
    const ui = this.ui;
    const table = this.table;

    return this.app.api.structure.index().then((res) => {
      if (options.verbose) {
        return ui.writeLine(res);
      }

      Object.keys(res).map((key) => {
        return res[key];
      }).map((structure) => {
        return [
          structure.structure_id,
          structure.name,
          structure.thermostats.length,
          structure.smoke_co_alarms.length,
          structure.away
        ];
      }).forEach((structure) => {
        table.push(structure);
      });

      ui.writeLine(table.toString());
    });
  }
}

module.exports = StructuresTask;
