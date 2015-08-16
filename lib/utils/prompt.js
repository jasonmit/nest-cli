const denodeify = require('denodeify');
const promptly = require('promptly');

module.exports = denodeify(promptly.prompt);
