'use strict';

const Transport = require('./-transport');
const Thermostat = require('./thermostat');
const Devices = require('./devices');
const Auth = require('./auth');

class RestClient {
  constructor(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN) {
    this.tokens = { ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET };
    this.rootUrl = 'https://developer-api.nest.com';
    this.transport = new Transport();

    this.auth = new Auth(this);
    this.devices = new Devices(this);
    this.thermostat = new Thermostat(this);
  }
}

module.exports = RestClient;
