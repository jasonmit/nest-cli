'use strict';

const Device = require('./device');
const Structure = require('./structure');
const Transport = require('./-transport');
const Thermostat = require('./thermostat');

class api {
  constructor(PRODUCT_ID, PRODUCT_SECRET, ACCESS_TOKEN) {
    this.tokens = { ACCESS_TOKEN, PRODUCT_ID, PRODUCT_SECRET };
    this.rootUrl = 'https://developer-api.nest.com';
    this.transport = new Transport();

    this.device = new Device(this);
    this.structure = new Structure(this);
    this.thermostat = new Thermostat(this);
  }
}

module.exports = api;
