'use strict';

const existsSync = require('exists-sync');
const mkdirp = require('mkdirp');
const nconf = require('nconf');
const osenv = require('osenv');
const path = require('path');

class Config {
  constructor(env, configPath) {
    this.path = configPath;

    if (!this.path) {
      this.path = path.join(osenv.home(), '.nest-cli', env + '.json');
    }

    nconf.env().file(this.path);
  }

  exists() {
    return existsSync(this.path);
  }

  set(key, value) {
    nconf.set(key, value);
    this.save();
  }

  get(key) {
    return nconf.get(key);
  }

  remove(key) {
    nconf.set(key);
    this.save();
  }

  save() {
    if (!this.exists()) {
      mkdirp.sync(path.dirname(this.path));
    }

    nconf.save();
  }
}

module.exports = Config;
