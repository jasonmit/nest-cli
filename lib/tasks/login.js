'use strict';

const open = require('open');

const TaskClass = require('./-base');
const server = require('../auth/server');

class LoginTask extends TaskClass {
  calculateExpirery(seconds) {
    let d = new Date();
    d.setSeconds(d.getSeconds() + seconds);
    return d.toISOString();
  }

  run() {
    const task = this;
    const app = this.app;
    const ui = this.ui;
    const api = app.api;
    const CLIENT_ID = app.config.get('CLIENT_ID');
    const CLIENT_SECRET = app.config.get('CLIENT_SECRET');

    // create a local webserver for nest to return a pincode
    const auth = server(3000, { CLIENT_ID, CLIENT_SECRET });

    // open local webserver to retrieve the pincode
    open('http://localhost:3000/auth/nest');

    return ui.prompt('Enter Nest Pincode:').then((pin) => {
      auth.close();

      return api.auth.login(pin).then(function(json) {
        app.config.set('ACCESS_TOKEN', json.access_token);
        app.config.set('ACCESS_TOKEN_EXPIRES_IN', task.calculateExpirery(json.expires_in));
      });
    }).then(() => {
      ui.writeLine(ui.color('green', 'Successfully logged in'));
      process.exit(0);
    }).catch((ex) => {
      ui.log('error', ex && ex.message || ex);
      process.exit(1);
    });
  }
}

module.exports = LoginTask;
