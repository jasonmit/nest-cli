'use strict';

const API = require('./api');
const Config = require('./config');

class App {
  constructor(ui, version, env) {
    this.version = version;
    this.env = env || 'development';
    this.config = new Config(this.env);

    const PRODUCT_ID = this.config.get('PRODUCT_ID');
    const PRODUCT_SECRET = this.config.get('PRODUCT_SECRET');
    const ACCESS_TOKEN = this.config.get('ACCESS_TOKEN');

    this.api = new API(PRODUCT_ID, PRODUCT_SECRET, ACCESS_TOKEN);
    this.ui = ui;
  }
}

module.exports = App;
