'use strict';

const Model = require('./-base');

class Thermostat extends Model {
  static attrs() {
    const attr = this.attr;
    return {
      id: attr('string', { alias: 'device_id', readOnly: true }),
      name: attr('string'),
      state: attr('string', { alias: 'hvac_state' }),
      mode: attr('string', { alias: 'hvac_mode' }),
      humidity: attr('number'),
      targetTemperatureF: attr('number', { alias: 'target_temperature_f'}),
      targetTemperatureLowF: attr('number', { alias: 'target_temperature_low_f'}),
      targetTemperatureHighF: attr('number', { alias: 'target_temperature_high_f'}),
      targetTemperatureC: attr('number', { alias: 'target_temperature_c'}),
      targetTemperatureLowC: attr('number', { alias: 'target_temperature_low_c'}),
      targetTemperatureHighC: attr('number', { alias: 'target_temperature_high_c'})
    };
  }
}

module.exports = Thermostat;
