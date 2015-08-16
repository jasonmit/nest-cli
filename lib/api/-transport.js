'use strict';

const fetch = require('../utils/fetch');

class Adapter {
  post(url, optionalBody, optionalHeaders) {
    let body = optionalBody;
    let headers = optionalHeaders;

    if (!body) {
      body = {};
    }

    if (!optionalHeaders) {
      headers = {};
    }

    return fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      compress: true,
      headers
    });
  }

  put(url, optionalBody, optionalHeaders) {
    let body = optionalBody;
    let headers = optionalHeaders;

    if (!body) {
      body = {};
    }

    if (!optionalHeaders) {
      headers = {};
    }

    return fetch(url, {
      method: 'PUT',
      body: JSON.stringify(body),
      compress: true,
      headers
    });
  }

  get(url) {
    return fetch(url, {
      method: 'GET'
    });
  }
}

module.exports = Adapter;
