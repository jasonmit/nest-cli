'use strict';

class Model {
  constructor(data) {
    Object.defineProperty(this, '_data', {
      enumerable: false,
      value: data
    });

    Object.defineProperty(this, 'transforms', {
      value: {
        number(value) {
          return parseInt(value, 10);
        },
        string(value) {
          return value + '';
        },
        boolean(value) {
          return !!value;
        }
      },
      enumerable: false
    });

    const attributes = this.constructor.attrs();

    for (let attrKey in attributes) {
      let alias = attrKey;
      const attribute = attributes[attrKey];
      if (attribute.options.alias) {
        alias = attribute.options.alias;
      }
      this[attrKey] = this.transforms[attribute.type](this._data[alias]);
    }
  }

  static attr(valueType, options) {
    return {
      type: valueType,
      options: options || {}
    };
  }
}

module.exports = Model;
