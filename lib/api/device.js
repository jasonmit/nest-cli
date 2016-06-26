'use strict';

class Device {
  constructor(api) {
    this.api = api;
    this.tokens = api.tokens;
    this.transport = api.transport;
  }

  index() {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices?auth=${ACCESS_TOKEN}`;

    return this.transport.get(this.api.rootUrl + url);
  }
}

module.exports = Device;
