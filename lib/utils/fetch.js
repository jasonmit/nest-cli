const nodeFetch = require('node-fetch');

function fetch(url, options) {
  return nodeFetch(url, options).then(function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return response.json();
    }

    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  });
}

module.exports = fetch;
