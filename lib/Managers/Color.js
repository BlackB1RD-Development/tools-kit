// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { get, backgrounds, colors, styles, reset } = require('../../src/util.js');
const util = require('../Utilities/Util.js');

/**
 * The package Utilities
 */
class Color {
  /**
   * Style the supplied text
   * @param {Object} options The style options
   * @param {String} [options.background] The text background
   * @param {String} [options.color] The text color
   * @param {String} [options.style] The text style
   * @param {String} text The text to style
   * @returns {String} The transformed text
   */
  static style(options, text) {
    if (!util.isObject(options)) throw new Error(`The settings must be an Object, not ${typeof options}.`);
    else if (typeof text !== 'string') throw new Error(`The text must be a String, not ${typeof text}.`);

    let transformed = '';
    let background = '';
    let color = '';
    let style = '';

    if (typeof options.background === 'string') background = get('backgrounds', options.background);
    if (typeof options.color === 'string') color = get('colors', options.color);
    if (typeof options.style === 'string') style = get('styles', options.style);

    transformed = color + background + style + text + reset;

    return transformed;
  }

  /**
   * Returns a rainbow-colored letters
   * @param {String} text Text to convert into a rainbow color
   * @returns {String} The transformed text
   */
  static rainbow(text) {
    if (typeof text !== 'string') throw new Error(`The text must be a String, not ${typeof text}.`);

    const rainbowColors = [colors.lmagenta, colors.lblue, colors.lcyan, colors.lgreen, colors.lyellow, colors.lred];

    let transformed = '';
    let i = 0;

    text.split('').forEach(l => {
      if (l === ' ') transformed += ' ';
      else transformed += rainbowColors[i++ % rainbowColors.length] + l + reset;
    });

    return transformed;
  }

  /**
   * Returns a random-colored letters
   * @param {String} text Text to convert into a random color
   * @returns {String} The transformed text
   */
  static random(text) {
    if (typeof text !== 'string') throw new Error(`The text must be a String, not ${typeof text}.`);

    let transformed = '';

    text.split('').forEach(l => {
      if (l === ' ') transformed += ' ';
      else transformed += util.randomItem(Object.values(backgrounds).concat(Object.values(colors), Object.values(styles))) + l + reset;
    });

    return transformed;
  }

  /**
   * Returns an inverse-colored letters
   * @param {String} text Text to convert into a inverse color
   * @returns {String} The transformed text
   */
  static zebra(text) {
    if (typeof text !== 'string') throw new Error(`The text must be a String, not ${typeof text}.`);

    let transformed = '';
    let i = 0;

    text.split('').forEach(l => {
      if (l === ' ') transformed += ' ';
      else transformed += (i++ % 2 === 0 ? reset + l : styles.inverse + l) + reset;
    });

    return transformed;
  }
}

module.exports = Color;
