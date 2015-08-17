'use strict';

const Model = require('./-base');

class Thermostat extends Model {
  static attrs() {
    const attr = this.attr;
    return {
      // readonly properties
      id: attr('string', { alias: 'device_id', readOnly: true }),
      name: attr('string', { readOnly: true }),
      humidity: attr('number', { readOnly: true }),
      hasLeaf: attr('boolean', { alias: 'has_leaf', readOnly: true }),
      canHeat: attr('boolean', { alias: 'can_heat', readOnly: true }),
      canCool: attr('boolean', { alias: 'can_cool', readOnly: true }),
      temperatureScale: attr('string', { alias: 'temperature_scale', readOnly: true }),

      // writeable properties
      state: attr('string', { alias: 'hvac_state' }),
      mode: attr('string', { alias: 'hvac_mode' }),
      fanTimerActive: attr('boolean', { alias: 'fan_timer_active' }),
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
