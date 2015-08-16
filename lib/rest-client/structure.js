'use strict';

class Auth {
  constructor(restClient) {
    this.restClient = restClient;
    this.tokens = restClient.tokens;
    this.transport = restClient.transport;
  }

  read(structureId) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures/${structureId}?auth=${ACCESS_TOKEN}`;
    return this.transport.get(this.restClient.rootUrl + url);
  }

  write(structureId, body) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures/${structureId}?auth=${ACCESS_TOKEN}`;
    console.log(body);
    return this.transport.put(this.restClient.rootUrl + url, body);
  }

  index() {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures?auth=${ACCESS_TOKEN}`;
    return this.transport.get(this.restClient.rootUrl + url);
  }

  away(structureId, mode) {
    if (arguments.length < 2) {
      throw new Error('Must specify structure id and an away-mode');
    }

    const normalizedMode = mode.toLowerCase();

    if (['home', 'auto-away', 'away', 'unknown'].indexOf(normalizedMode) === -1) {
      throw new Error('away-mode must be one of the following: home, auto-away, away, unknown');
    }

    return this.write(structureId, { away: 'home' });
  }
}

module.exports = Auth;
