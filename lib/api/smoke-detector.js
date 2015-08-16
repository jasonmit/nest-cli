'use strict';

class SmokeDetector {
  constructor(api) {
    this.api = api;
    this.tokens = api.tokens;
    this.transport = api.transport;
  }
}

module.exports = SmokeDetector;
