// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

/**
 * The package Utilities
 */
class Util {
  /**
   * Checks if the Object or the Array has the property or the property value
   * @param {Object | Array} object Either an Object or an Array
   * @param {String | Number | Symbol} property The property to check for
   * @param {String | Number | Symbol} value The property value to check for
   * @returns {Boolean | Error} Either true or false
   */
  static has(object, property, value) {
    if (this.isObject(object)) {
      if (!value) return object.hasOwnProperty(property);
      else return object.hasOwnProperty(property) && object[property] === value ? true : false;
    } else if (this.isArray(object)) {
      if (!value) return object.includes(property) ? object.includes(property) : object.some(o => this.isObject(o) && o.hasOwnProperty(property) ? true : false);
      else return object.includes(property) ? object.includes(property) : object.some(o => this.isObject(o) && o.hasOwnProperty(property) ? o[property] === value ? true : false : false);
    } else throw new Error(`The object parameter must be an Object or an Array value, not ${typeof object}.`);
  }

  /**
   * Checks if an Object is a real Object
   * @param {Object} object An Object to check
   * @returns {Boolean} Either true or false
   */
  static isObject(object) {
    return !!object && object.constructor === Object && object === new Object(object) && Object.prototype.toString.call(object) === '[object Object]';
  }

  /**
   * Checks if an Object is an Array
   * @param {Object} object An Object to check
   * @returns {Boolean} Either true or false
   */
  static isArray(object) {
    return !!object && Array.isArray(object);
  }

  /**
   * Returns a random item from an Array
   * @param {Array} array An Array to random an item from
   * @returns {Any | Error} The random item
   */
  static randomItem(array) {
    if (!this.isArray(array)) throw new Error(`The array parameter must be an Array value, not ${typeof array}.`);
    else if (array.length < 2) throw new Error('The array Array must contain 2 values inside it.');

    return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Returns a random number between the minimum value to the maximum value supplied
   * @param {Number} minimum Minimum value
   * @param {Number} maximum Maximum value
   * @param {Boolean} [round] If to return a rounded number - Set to true by default
   * @returns {Number | Error} The random number
   */
  static randomNumber(minimum, maximum, round) {
    if (typeof minimum !== 'number') throw new Error(`The minimum parameter must be a Number value, not ${typeof minimum}.`);
    else if (typeof maximum !== 'number') throw new Error(`The maximum parameter must be a Number value, not ${typeof maximum}.`);

    round = typeof round === 'boolean' && !round ? false : true;

    return round ? Math.floor(Math.random() * (maximum - minimum + 1)) + minimum : Math.random() * (maximum - minimum + 1) + minimum;
  }
}

module.exports = Util;
