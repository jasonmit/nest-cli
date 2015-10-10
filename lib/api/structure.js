'use strict';

class Structure {
  constructor(api) {
    this.api = api;
    this.tokens = api.tokens;
    this.transport = api.transport;
  }

  read(structureId) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures/${structureId}?auth=${ACCESS_TOKEN}`;

    return this.transport.get(this.api.rootUrl + url);
  }

  write(structureId, body) {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures/${structureId}?auth=${ACCESS_TOKEN}`;

    return this.transport.put(this.api.rootUrl + url, body);
  }

  index() {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures?auth=${ACCESS_TOKEN}`;

    return this.transport.get(this.api.rootUrl + url);
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

module.exports = Structure;
