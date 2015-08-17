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
      hasLeaf: attr('boolean', {readOnly: true }),
      canHeat: attr('boolean', { readOnly: true }),
      canCool: attr('boolean', { readOnly: true }),
      temperatureScale: attr('string', { readOnly: true }),

      // writeable properties
      state: attr('string', { alias: 'hvac_state' }),
      mode: attr('string', { alias: 'hvac_mode' }),
      fanTimerActive: attr('boolean'),
      targetTemperatureF: attr('number'),
      targetTemperatureLowF: attr('number'),
      targetTemperatureHighF: attr('number'),
      targetTemperatureC: attr('number'),
      targetTemperatureLowC: attr('number'),
      targetTemperatureHighC: attr('number')
    };
  }
}

module.exports = Thermostat;
