'use strict';

class Auth {
  constructor(restClient) {
    this.restClient = restClient;
    this.tokens = restClient.tokens;
    this.transport = restClient.transport;
  }

  index() {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices?auth=${ACCESS_TOKEN}`;
    return this.transport.get(this.restClient.rootUrl + url);
  }

  read(deviceId) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${deviceId}?auth=${ACCESS_TOKEN}`;
    return this.transport.get(this.restClient.rootUrl + url);
  }

  write(deviceId, body) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/devices/thermostats/${deviceId}?auth=${ACCESS_TOKEN}`;
    return this.transport.put(this.restClient.rootUrl + url, body);
  }
}

module.exports = Auth;
