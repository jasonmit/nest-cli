'use strict';

const fs = require('fs');
const path = require('path');

function requireDir(dir) {
  return fs.readdirSync(dir).reduce((modules, filename) => {
    if (filename === 'index.js' || path.extname(filename) !== '.js') {
      return modules;
    }

    let moduleName = path.basename(filename, '.js');
    const __module__ = require(path.join(dir, moduleName));

    if (typeof __module__ === 'function' && __module__.name) {
      moduleName = __module__.name;
    }

    modules[moduleName] = __module__;
    return modules;
  }, {});
}

module.exports = requireDir;
