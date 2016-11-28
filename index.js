'use strict';

const pkg = require('./package.json');
const App = require('./lib/app');
const CLI = require('./lib/cli');
const UI = require('./lib/ui');

const ui = new UI({
  inputStream: process.stdin,
  outputStream: process.stdout
});

const app = new App(ui, pkg.version, process.env.NODE_ENV);
const cli = new CLI(app, ui);

cli.parse(process.argv);

if (!cli.args().length) {
  cli.help();
}
