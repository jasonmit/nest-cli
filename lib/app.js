'use strict';

const api = require('./api');
const Config = require('./config');

class App {
  constructor(ui, version, env) {
    this.version = version;
    this.env = env || 'development';
    this.config = new Config(this.env);

    const CLIENT_ID = this.config.get('CLIENT_ID');
    const CLIENT_SECRET = this.config.get('CLIENT_SECRET');
    const ACCESS_TOKEN = this.config.get('ACCESS_TOKEN');

    this.api = new api(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN);
    this.ui = ui;
  }
}

module.exports = App;
