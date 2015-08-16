'use strict';

class Auth {
  constructor(restClient) {
    this.restClient = restClient;
    this.tokens = restClient.tokens;
    this.transport = restClient.transport;
  }

  index() {
    const ACCESS_TOKEN = this.tokens.ACCESS_TOKEN;
    const url = `/structures?auth=${ACCESS_TOKEN}`;
    return this.transport.get(this.restClient.rootUrl + url);
  }
}

module.exports = Auth;
