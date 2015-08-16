'use strict';

class Thermostat {
  constructor(api) {
    this.api = api;
    this.tokens = api.tokens;
    this.transport = api.transport;
  }

  read(thermostatId) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${thermostatId}?auth=${ACCESS_TOKEN}`;
    return this.transport.get(this.api.rootUrl + url);
  }

  write(thermostatId, body) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${thermostatId}?auth=${ACCESS_TOKEN}`;
    return this.transport.put(this.api.rootUrl + url, body);
  }

  state(thermostatId, state) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${thermostatId}?auth=${ACCESS_TOKEN}`;

    return this.transport.put(this.api.rootUrl + url, {
      hvac_mode: state
    });
  }

  temp(thermostatId, high, low) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${thermostatId}?auth=${ACCESS_TOKEN}`;
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

    return this.transport.put(this.api.rootUrl + url, body);
  }

  cool(thermostatId, desiredTemp) {
    return this.state(thermostatId, 'cool').then(function() {
      return this.temp(thermostatId, desiredTemp);
    }.bind(this));
  }

  heat(thermostatId, desiredTemp) {
    return this.state(thermostatId, 'heat').then(function() {
      return this.temp(thermostatId, desiredTemp);
    }.bind(this));
  }

  off(thermostatId) {
    return this.state(thermostatId, 'off');
  }
}

module.exports = Thermostat;
