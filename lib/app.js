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

    const locale = this.config.get('LOCALE') || 'en';
    this._translations = require(`../translations/${locale}.json`)
  }

  get t() {
    return this._translations;
  }
}

module.exports = App;
