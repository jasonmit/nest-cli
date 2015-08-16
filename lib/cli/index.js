'use strict';

const commander = require('commander');

const commands = require('../commands');

class CLI {
  constructor(app, ui) {
    commander
      .version(app.version);

    const commandContext = {
      ui: ui,
      app: app
    };

    Object.keys(commands).map(function(key) {
      return commands[key];
    }).sort(function(a, b) {
      if (!a.priority || a.priority && a.priority < b.priority) {
        return 1;
      }
      return -1;
    }).filter(function(command) {
      if (typeof command.isVisible === 'function') {
        return command.isVisible(app);
      }
      return true;
    }).forEach(function(command) {
      const cliCommand = commander.command(command.name);

      if (command.alias) {
        cliCommand.alias(command.alias);
      }

      if (command.options) {
        command.options.forEach(function(option) {
          cliCommand.option(option);
        });
      }

      cliCommand
        .description(command.description)
        .action(function() {
          return Promise.resolve(command.run.apply(commandContext, arguments)).catch(function(err) {
            ui.log('error', err);
          });
        });
    });
  }

  parse() {
    return commander.parse.apply(commander, arguments);
  }

  args() {
    return commander.args;
  }

  help() {
    return commander.help.apply(commander, arguments);
  }
}

module.exports = CLI;
