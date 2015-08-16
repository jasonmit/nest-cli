'use strict';

const url = require('url');

class Auth {
  constructor(api) {
    this.tokens = api.tokens;
    this.transport = api.transport;
  }

  login(code) {
    const requestUrl = url.format({
      protocol: 'https',
      hostname: 'api.home.nest.com',
      pathname: '/oauth2/access_token',
      query: {
        code: code,
        client_id: this.tokens.CLIENT_ID,
        client_secret: this.tokens.CLIENT_SECRET,
        grant_type: 'authorization_code'
      }
    });

    return this.transport.post(requestUrl);
  }
}

module.exports = Auth;
