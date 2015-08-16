function readDeviceId(cb) {
  return function() {
    var args = Array.prototype.slice.call(arguments);
    var id = args[args.length - 2];

    if (typeof id !== 'string' || !id) {
      id = this.app.config.get('DEFAULT_THERMOSTAT');
    }

    if (!id) {
      throw new Error('Device ID not specified');
    }

    args[args.length - 2] = id;
    return cb.apply(this, args);
  };
}

module.exports = readDeviceId;
