'use strict';

class Thermostat {
  constructor(restClient) {
    this.restClient = restClient;
    this.tokens = restClient.tokens;
    this.transport = restClient.transport;
  }

  state(deviceId, state) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${deviceId}?auth=${ACCESS_TOKEN}`;

    return this.transport.put(this.restClient.rootUrl + url, {
      hvac_mode: state
    });
  }

  temp(deviceId, high, low) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${deviceId}?auth=${ACCESS_TOKEN}`;
    const desiredTemp = parseInt(high, 10);

    let body = {
      'target_temperature_high_f': desiredTemp,
      'target_temperature_low_f': parseInt(low, 10)
    };

    if (low === undefined) {
      body = {
        target_temperature_f: desiredTemp
      };
    }

    return this.transport.put(this.restClient.rootUrl + url, body);
  }

  cool(deviceId, desiredTemp) {
    return this.state(deviceId, 'cool').then(function() {
      return this.temp(deviceId, desiredTemp);
    }.bind(this));
  }

  heat(deviceId, desiredTemp) {
    return this.state(deviceId, 'heat').then(function() {
      return this.temp(deviceId, desiredTemp);
    }.bind(this));
  }

  off(deviceId) {
    return this.state(deviceId, 'off');
  }
}

module.exports = Thermostat;
