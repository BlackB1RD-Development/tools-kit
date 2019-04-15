// tools-kit 1.0.0
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires
const logger = require('../Managers/Logger.js');

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
    if (!!object && object.constructor === Object && object === Object(object) && Object.prototype.toString.call(object) === '[object Object]') return true;
    else return false;
  }

  /**
   * Returns a random item from an Array
   * @param {Array} array An Array to random an item from
   * @returns {Any} The random item
   */
  static randomItem(array) {
    if (!Array.isArray(array)) return logger.error('The supplied parameter has to be an array.');
    else if (array.length < 2) return logger.error('The array must contain 2 values inside it.');
    else return array[Math.floor(Math.random() * array.length)];
  }

  /**
   * Returns a random number between the minimum value to the maximum value supplied
   * @param {Number} minimum Minimum value
   * @param {Number} maximum Maximum value
   * @returns {Number} The random number
   */
  static randomNumber(minimum, maximum) {
    if (!minimum) return logger.error('You must supply a minimum value.');
    else if (!maximum) return logger.error('You must supply a maximum value.');
    else if (typeof minimum !== 'number') return logger.error('The minimum value must be a number.');
    else if (typeof maximum !== 'number') return logger.error('The maximum value must be a number.');
    else return Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  }
}

module.exports = Util;
