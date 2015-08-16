'use strict';

const Transport = require('./-transport');
const Structure = require('./structure');
const Thermostat = require('./thermostat');
const Device = require('./device');
const Auth = require('./auth');

class RestClient {
  constructor(CLIENT_ID, CLIENT_SECRET, ACCESS_TOKEN) {
    this.tokens = { ACCESS_TOKEN, CLIENT_ID, CLIENT_SECRET };
    this.rootUrl = 'https://developer-api.nest.com';
    this.transport = new Transport();

    this.auth = new Auth(this);
    this.device = new Device(this);
    this.structure = new Structure(this);
    this.thermostat = new Thermostat(this);
  }
}

module.exports = RestClient;
