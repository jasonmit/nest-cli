'use strict';

class SmokeDetector {
  constructor(restClient) {
    this.restClient = restClient;
    this.tokens = restClient.tokens;
    this.transport = restClient.transport;
  }
}

module.exports = SmokeDetector;
