'use strict';

const winston = require('winston');
const Table = require('cli-table');
const colors = require('colors');

const prompt = require('../utils/prompt');

class UI {
  constructor() {
    this.logger = new winston.Logger({
      levels: {
        trace: 0,
        input: 1,
        verbose: 2,
        prompt: 3,
        debug: 4,
        info: 5,
        data: 6,
        help: 7,
        warn: 8,
        error: 9
      }
    });

    this.logger.add(winston.transports.Console, {
      level: 'trace',
      prettyPrint: true,
      colorize: true,
      silent: false,
      timestamp: false
    });
  }

  color(color, string) {
    return colors[color](string);
  }

  createTable(options) {
    return new Table(options);
  }

  prompt() {
    return prompt.apply(this, arguments);
  }

  writeLine(message) {
    console.log(message);
  }

  log(optionalType, consoleMessage) {
    let message = consoleMessage;
    let type = optionalType;

    if (arguments.length === 1) {
      message = optionalType;
      type = 'info';
    }

    return this.logger.log(type, message);
  }
}

module.exports = UI;
