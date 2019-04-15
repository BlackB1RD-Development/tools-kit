// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

/**
 * The package Utilities
 */
class Util {
  /**
   * Checks if an Object is a real Object
   * @param {Object} object An Object to check
   * @returns {Boolean} Either true or false
   */
  static isObject(object) {
    if (!!object && object.constructor === Object && object === new Object(object) && Object.prototype.toString.call(object) === '[object Object]') return true;
    else return false;
  }

  /**
   * Returns a random item from an Array
   * @param {Array} array An Array to random an item from
   * @returns {Any} The random item
   */
  static randomItem(array) {
    if (!Array.isArray(array)) return new Error('The supplied parameter has to be an array.');
    else if (array.length < 2) return new Error('The array must contain 2 values inside it.');
    else return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Returns a random number between the minimum value to the maximum value supplied
   * @param {Number} minimum Minimum value
   * @param {Number} maximum Maximum value
   * @returns {Number} The random number
   */
  static randomNumber(minimum, maximum) {
    if (!minimum) return new Error('You must supply a minimum value.');
    else if (!maximum) return new Error('You must supply a maximum value.');
    else if (typeof minimum !== 'number') return new Error('The minimum value must be a number.');
    else if (typeof maximum !== 'number') return new Error('The maximum value must be a number.');
    else return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}

module.exports = Util;
