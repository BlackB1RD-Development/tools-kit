// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { checkAvailability, get, backgrounds, colors, styles, reset } = require('../../src/Util.js');
const logger = require('../Managers/Logger.js');
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
    if (!util.isObject(options)) return logger.error('The style settings must be an Object.');

    let background = '';
    let color = '';
    let style = '';
    let transformed = '';

    if (typeof options.background === 'string') {
      if (!checkAvailability('backgrounds', options.background)) return logger.error(`The background name that you supplied isn't exist.\nList of all the available backgrounds: ${Object.keys(backgrounds).join(', ')}`);

      background = get('backgrounds', options.background);
    }

    if (typeof options.color === 'string') {
      if (!checkAvailability('colors', options.color)) return logger.error(`The color name that you supplied isn't exist.\nList of all the available colors: ${Object.keys(colors).join(', ')}`);

      color = get('colors', options.color);
    }

    if (typeof options.style === 'string') {
      if (!checkAvailability('styles', options.style)) return logger.error(`The style name that you supplied isn't exist.\nList of all the available styles: ${Object.keys(styles).join(', ')}`);

      style = get('styles', options.style);
    }

    transformed = color + background + style + text + reset;

    return transformed;
  }

  /**
   * Returns a rainbow-colored letters
   * @param {String} text Text to convert into a rainbow color
   * @returns {String} The transformed text
   */
  static rainbow(text) {
    if (typeof text !== 'string') return logger.error(`The text must be a String, not ${typeof text}`);

    const rainbowColors = [colors.hMagenta, colors.hBlue, colors.hCyan, colors.hGreen, colors.hYellow, colors.hRed];
    let transformed = '';
    let i = 0;

    text = text.split('');

    text.forEach(l => {
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
    if (typeof text !== 'string') return logger.error(`The text must be a String, not ${typeof text}`);

    let transformed = '';

    text = text.split('');

    text.forEach(l => {
      if (l === ' ') transformed += ' ';
      else transformed += util.randomItem(Object.values(colors)) + l + reset;
    });

    return transformed;
  }

  /**
   * Returns an inverse-colored letters
   * @param {String} text Text to convert into a inverse color
   * @returns {String} The transformed text
   */
  static zabra(text) {
    if (typeof text !== 'string') return logger.error(`The text must be a String, not ${typeof text}`);

    let transformed = '';
    let i = 0;

    text = text.split('');

    text.forEach(l => {
      if (l === ' ') transformed += ' ';
      else transformed += (i++ % 2 === 0 ? reset + l : styles.inverse + l) + reset;
    });

    return transformed;
  }
}

module.exports = Color;
