// tools-kit 1.0.0
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires
const { checkAvailable, get, backgrounds, colors, styles, reset } = require('../../src/util.js');
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
   */
  static style(options, text) {
    if (!util.isObject(options)) return this.error('The style settings must be an Object.');
    else {
      var background = '';
      var color = '';
      var style = '';
      var transformed = '';

      if (typeof options.background === 'string') {
        if (!checkAvailable('backgrounds', options.background)) return this.error(`The background name that you supplied isn't exist.\nList of all the available backgrounds: ${Object.keys(backgrounds).join(', ')}`);
        else background = get('backgrounds', options.background);
      }

      if (typeof options.color === 'string') {
        if (!checkAvailable('colors', options.color)) return this.error(`The color name that you supplied isn't exist.\nList of all the available colors: ${Object.keys(colors).join(', ')}`);
        else color = get('colors', options.color);
      }

      if (typeof options.style === 'string') {
        if (!checkAvailable('styles', options.style)) return this.error(`The style name that you supplied isn't exist.\nList of all the available styles: ${Object.keys(styles).join(', ')}`);
        else style = get('styles', options.style);
      }

      transformed = color + background + style + text + reset;

      return transformed;
    }
  }

  /**
   * Returns a rainbow-colored letters
   * @param {String} text Text to convert into a rainbow color
   * @returns {String}
   */
  static rainbow(text) {
    if (typeof text !== 'string') return logger.error(`The text must be a String, not ${typeof text}`);

    var rainbowColors = [colors.hMagenta, colors.hBlue, colors.hCyan, colors.hGreen, colors.hYellow, colors.hRed];
    var transformed = '';
    var i = 0;
  
    text = text.split('');
  
    text.forEach(l => {
      if (l === ' ') return transformed += ' ';
      else transformed += rainbowColors[i++ % rainbowColors.length] + l + reset;
    });
  
    return transformed;
  }
  
  /**
   * Returns a random-colored letters
   * @param {String} text Text to convert into a random color
   * @returns {String}
   */
  static random(text) {
    if (typeof text !== 'string') return logger.error(`The text must be a String, not ${typeof text}`);

    var transformed = '';
  
    text = text.split('');
  
    text.forEach(l => {
      if (l === ' ') return transformed += ' ';
      else transformed += util.randomItem(Object.values(colors)) + l + reset;
    });
  
    return transformed;
  }
  
  /**
   * Returns an inverse-colored letters
   * @param {String} text Text to convert into a inverse color
   * @returns {String}
   */
  static zabra(text) {
    if (typeof text !== 'string') return logger.error(`The text must be a String, not ${typeof text}`);

    var transformed = '';
    var i = 0;
  
    text = text.split('');
  
    text.forEach(l => {
      if (l === ' ') return transformed += ' ';
      else transformed += (i++ % 2 === 0 ? reset + l : styles.inverse + l) + reset;
    });
  
    return transformed;
  }
}

module.exports = Color;
