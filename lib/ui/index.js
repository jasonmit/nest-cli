'use strict';

const colors = require('colors');
const Table = require('cli-table');
const ConsoleUI = require('console-ui');

function UI() {
  ConsoleUI.apply(this, arguments);
}

UI.prototype = Object.create(ConsoleUI.prototype);

Object.assign(UI.prototype, {
  constructor: UI,

  color(color, string) {
    return colors[color](string);
  },

  createTable(options) {
    return new Table(options);
  }
});

module.exports = UI;
