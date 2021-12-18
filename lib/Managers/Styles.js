// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Packages
const { format } = require('util');
const convert = require('color-convert');

// Requires - Files
const util = require('../Utilities/Util.js');
const { get, backgrounds, colors, styles, reset } = require('../../src/util.js');

// Assignments
const stylesObject = {};
const object = {};
const bgs = Object.keys(backgrounds);
const cls = Object.keys(colors);
const sty = Object.keys(styles);

bgs.forEach(name => {
  stylesObject[name] = {
    get() {
      this.styles.push(backgrounds[name]);
      return this;
    }
  };
});

cls.forEach(name => {
  stylesObject[name] = {
    get() {
      this.styles.push(colors[name]);
      return this;
    }
  };
});

sty.forEach(name => {
  stylesObject[name] = {
    get() {
      this.styles.push(styles[name]);
      return this;
    }
  };
});

const init = () => {
  Object.keys(stylesObject).forEach(name => {
    object[name] = {
      get() {
        const styleObject = Object.defineProperties(function style(...args) {
          return style.styles.join('') + format(...args) + reset;
        }, stylesObject);

        styleObject.styles = [];

        return styleObject[name];
      }
    };
  });

  return object;
};

/**
 * The package Utilities
 */
class Styles {
  /**
   * This method is not intended for external use!
   * @access private
   * @private
   * @returns {String} ANSI Escape Code to use when logging
   */
  static _escapeCode(rgb, type) {
    if (!util.isArray(rgb)) throw new Error(`The rgb parameter must be an Array value, not ${typeof rgb}.`);
    else if (rgb.length !== convert.rgb.channels) throw new Error(`The rgb Array must contain ${convert.rgb.channels} values inside it.`);

    const r = Number(rgb[0]);
    const g = Number(rgb[1]);
    const b = Number(rgb[2]);

    return !!type && type === 'background' ? `\u001B[48;2;${r};${g};${b}m` : `\u001B[38;2;${r};${g};${b}m`;
  }

  /**
   * Converts any RGB values into ANSI Escape Code value
   * @param {Array} rgb The RGB values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static rgb(rgb, type) {
    if (!util.isArray(rgb)) throw new Error(`The RGB parameter must be an Array value, not ${typeof rgb}.`);
    else if (rgb.length !== convert.rgb.channels) throw new Error(`The RGB Array must contain ${convert.rgb.channels} values inside it.`);

    const r = Number(rgb[0]);
    const g = Number(rgb[1]);
    const b = Number(rgb[2]);

    if (typeof (r && g && b) === 'number' && (r >= 0 && r <= 256) && (g >= 0 && g <= 256) && (b >= 0 && b <= 256)) return this._escapeCode(rgb, type);
    else throw new Error('The RGB Array values must be Numbers value.\nThe Red value should be equal or higher than 0, and lower or equal to 256\nThe Green value should be equal or higher than 0, and lower or equal to 256\nThe Blue value should be equal or higher than 0, and lower or equal to 256');
  }

  /**
   * Converts any Hex value into ANSI Escape Code value
   * @param {String} hex The Hex value to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static hex(hex, type) {
    if (typeof hex !== 'string') throw new Error(`The Hex parameter must be a String value, not ${typeof hex}.`);

    hex = hex.startsWith('#') ? hex.replace('#', '') : hex;

    if (hex.length !== 6) throw new Error('The Hex parameter must be equal to 6 digits excluding \'#\'.');

    return this._escapeCode(convert.hex.rgb(hex), type);
  }

  /**
   * Converts any HSV values into ANSI Escape Code value
   * @param {Array} hsv The HSV values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static hsv(hsv, type) {
    if (!util.isArray(hsv)) throw new Error(`The HSV parameter must be an Array value, not ${typeof hsv}.`);
    else if (hsv.length !== convert.hsv.channels) throw new Error(`The HSV Array must contain ${convert.hsv.channels} values inside it.`);

    const h = Number(hsv[0]);
    const s = Number(hsv[1]);
    const v = Number(hsv[2]);

    if (typeof (h && s && v) === 'number' && (h >= 0 && h <= 360) && (s >= 0 && s <= 100) && (v >= 0 && v <= 100)) return this._escapeCode(convert.hsv.rgb(hsv), type);
    else throw new Error('The HSV Array values must be Numbers value.\nThe H value should be equal or higher than 0, and lower or equal to 360\nThe S value should be equal or higher than 0, and lower or equal to 100\nThe V value should be equal or higher than 0, and lower or equal to 100');
  }

  /**
   * Converts any HSL values into ANSI Escape Code value
   * @param {Array} hsl The HSL values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static hsl(hsl, type) {
    if (!util.isArray(hsl)) throw new Error(`The HSL parameter must be an Array value, not ${typeof hsl}.`);
    else if (hsl.length !== convert.hsl.channels) throw new Error(`The HSL Array must contain ${convert.hsl.channels} values inside it.`);

    const h = Number(hsl[0]);
    const s = Number(hsl[1]);
    const l = Number(hsl[2]);

    if (typeof (h && s && l) === 'number' && (h >= 0 && h <= 360) && (s >= 0 && s <= 100) && (l >= 0 && l <= 100)) return this._escapeCode(convert.hsl.rgb(hsl), type);
    else throw new Error('The HSL Array values must be Numbers value.\nThe H value should be equal or higher than 0, and lower or equal to 360\nThe S value should be equal or higher than 0, and lower or equal to 100\nThe L value should be equal or higher than 0, and lower or equal to 100');
  }

  /**
   * Converts any HWB values into ANSI Escape Code value
   * @param {Array} hwb The HWB values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static hwb(hwb, type) {
    if (!util.isArray(hwb)) throw new Error(`The HWB parameter must be an Array value, not ${typeof hwb}.`);
    else if (hwb.length !== convert.hwb.channels) throw new Error(`The HWB Array must contain ${convert.hwb.channels} values inside it.`);

    const h = Number(hwb[0]);
    const w = Number(hwb[1]);
    const b = Number(hwb[2]);

    if (typeof (h && w && b) === 'number' && (h >= 0 && h <= 360) && (w >= 0 && w <= 100) && (b >= 0 && b <= 100)) return this._escapeCode(convert.hwb.rgb(hwb), type);
    else throw new Error('The HWB Array values must be Numbers value.\nThe H value should be equal or higher than 0, and lower or equal to 360\nThe W value should be equal or higher than 0, and lower or equal to 100\nThe B value should be equal or higher than 0, and lower or equal to 100');
  }

  /**
   * Converts any LAB values into ANSI Escape Code value
   * @param {Array} lab The LAB values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static lab(lab, type) {
    if (!util.isArray(lab)) throw new Error(`The LAB parameter must be an Array value, not ${typeof lab}.`);
    else if (lab.length !== convert.lab.channels) throw new Error(`The LAB Array must contain ${convert.lab.channels} values inside it.`);

    const l = Number(lab[0]);
    const a = Number(lab[1]);
    const b = Number(lab[2]);

    if (typeof (l && a && b) === 'number' && (l >= 0 && l <= 100) && (a >= -128 && a <= 128) && (b >= -128 && b <= 128)) return this._escapeCode(convert.lab.rgb(lab), type);
    else throw new Error('The LAB Array values must be Numbers value.\nThe L value should be equal or higher than 0, and lower or equal to 100\nThe A value should be equal or higher than -128, and lower or equal to 128\nThe B value should be equal or higher than -128, and lower or equal to 128');
  }

  /**
   * Converts any XYZ values into ANSI Escape Code value
   * @param {Array} xyz The XYZ values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static xyz(xyz, type) {
    if (!util.isArray(xyz)) throw new Error(`The XYZ parameter must be an Array value, not ${typeof xyz}.`);
    else if (xyz.length !== convert.xyz.channels) throw new Error(`The XYZ Array must contain ${convert.xyz.channels} values inside it.`);

    const x = Number(xyz[0]);
    const y = Number(xyz[1]);
    const z = Number(xyz[2]);

    if (typeof (x && y && z) === 'number' && (x >= 0 && x <= 100) && (y >= 0 && y <= 100) && (z >= 0 && z <= 100)) return this._escapeCode(convert.xyz.rgb(xyz), type);
    else throw new Error('The XYZ Array values must be Numbers value.\nThe X value should be equal or higher than 0, and lower or equal to 100\nThe Y value should be equal or higher than 0, and lower or equal to 100\nThe Z value should be equal or higher than 0, and lower or equal to 100');
  }

  /**
   * Converts any LCH values into ANSI Escape Code value
   * @param {Array} lch The LCH values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static lch(lch, type) {
    if (!util.isArray(lch)) throw new Error(`The LCH parameter must be an Array value, not ${typeof lch}.`);
    else if (lch.length !== convert.lch.channels) throw new Error(`The LCH Array must contain ${convert.lch.channels} values inside it.`);

    const l = Number(lch[0]);
    const c = Number(lch[1]);
    const h = Number(lch[2]);

    if (typeof (l && c && h) === 'number' && (l >= 0 && l <= 100) && (c >= 0 && c <= 140) && (h >= 0 && h <= 360)) return this._escapeCode(convert.lch.rgb(lch), type);
    else throw new Error('The LCH Array values must be Numbers value.\nThe L value should be equal or higher than 0, and lower or equal to 100\nThe C value should be equal or higher than 0, and lower or equal to 140\nThe H value should be equal or higher than 0, and lower or equal to 360');
  }

  /**
   * Converts any CMYK values into ANSI Escape Code value
   * @param {Array} cmyk The CMYK values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static cmyk(cmyk, type) {
    if (!util.isArray(cmyk)) throw new Error(`The CMYK parameter must be an Array value, not ${typeof cmyk}.`);
    else if (cmyk.length !== convert.cmyk.channels) throw new Error(`The CMYK Array must contain ${convert.cmyk.channels} values inside it.`);

    const c = Number(cmyk[0]);
    const m = Number(cmyk[1]);
    const y = Number(cmyk[2]);
    const k = Number(cmyk[3]);

    if (typeof (c && m && y && k) === 'number' && (c >= 0 && c <= 100) && (m >= 0 && m <= 100) && (y >= 0 && y <= 100) && (k >= 0 && k <= 100)) return this._escapeCode(convert.cmyk.rgb(cmyk), type);
    else throw new Error('The CMYK Array values must be Numbers value.\nThe C value should be equal or higher than 0, and lower or equal to 100\nThe M value should be equal or higher than 0, and lower or equal to 100\nThe Y value should be equal or higher than 0, and lower or equal to 100\nThe K value should be equal or higher than 0, and lower or equal to 100');
  }

  /**
   * Converts any ANSI16 values into ANSI Escape Code value
   * @param {String | Number} ansi16 The ANSI16 values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static ansi16(ansi16, type) {
    ansi16 = Number(ansi16);

    if (typeof ansi16 === 'number' && ansi16 >= 0 && ansi16 <= 16) return this._escapeCode(convert.ansi16.rgb(ansi16), type);
    else throw new Error('The ANSI16 value should be equal or higher than 0, and lower or equal to 16.');
  }

  /**
   * Converts any ANSI256 values into ANSI Escape Code value
   * @param {String | Number} ansi256 The ANSI256 values to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static ansi256(ansi256, type) {
    ansi256 = Number(ansi256);

    if (typeof ansi256 === 'number' && ansi256 >= 0 && ansi256 <= 256) return this._escapeCode(convert.ansi256.rgb(ansi256), type);
    else throw new Error('The ANSI256 value should be equal or higher than 0, and lower or equal to 256.');
  }

  /**
   * Converts any CSS color name keyword into ANSI Escape Code value
   * @param {String} keyword The CSS color name keyword to convert into ANSI Escape Code value
   * @param {String} [type] The type of the ANSI Escape Code to return either color or background value
   * @returns {String} ANSI Escape Code to use when logging
   */
  static keyword(keyword, type) {
    if (typeof keyword !== 'string') throw new Error(`The keyword parameter must be a String value, not ${typeof keyword}.`);

    keyword = keyword.toLowerCase();
    const rgb = convert.keyword.rgb(keyword);

    if (!util.isArray(rgb)) throw new Error('Invalid color keyword.');

    return this._escapeCode(convert.keyword.rgb(keyword), type);
  }

  /**
   * Style the supplied text
   * @param {String} name The background color name to apply to the text
   * @param {...any} args The content to apply the style to
   * @returns {String} The styled text
   */
  static background(name, ...args) {
    let background = '';

    if (typeof name === 'string' && get('backgrounds', name) !== false) background = get('backgrounds', name);

    return background + format(...args) + reset;
  }

  /**
   * Style the supplied text
   * @param {String} name The color name to apply to the text
   * @param {...any} args The content to apply the style to
   * @returns {String} The styled text
   */
  static color(name, ...args) {
    let color = '';

    if (typeof name === 'string' && get('colors', name) !== false) color = get('colors', name);

    return color + format(...args) + reset;
  }

  /**
   * Style the supplied text
   * @param {String} name The style name to apply to the text
   * @param {...any} args The content to apply the style to
   * @returns {String} The styled text
   */
  static style(name, ...args) {
    let style = '';

    if (typeof name === 'string' && get('styles', name) !== false) style = get('styles', name);

    return style + format(...args) + reset;
  }

  /**
   * Style the supplied text
   * @param {Object} options An Object with style properties
   * @param {String} [options.background] The background color name to apply to the text
   * @param {String} [options.color] The color name to apply to the text
   * @param {String} [options.style] The style name to apply to the text
   * @param {...any} args The content to apply the style to
   * @returns {String} The styled text
   */
  static stylify(options, ...args) {
    if (!util.isObject(options)) throw new Error(`The options parameter must be an Object value, not ${typeof options}.`);

    let background = '';
    let color = '';
    let style = '';

    if (typeof options.background === 'string') background = get('backgrounds', options.background);
    if (typeof options.color === 'string') color = get('colors', options.color);
    if (typeof options.style === 'string') style = get('styles', options.style);

    return background + color + style + format(...args) + reset;
  }

  /**
   * Returns a customized-colored letters
   * @param {String} text Text to customize with the supplied colors
   * @param {Array} colors Colors to customize the text with
   * @param {Number} [after] Start from the first color after certain number of letters
   * @returns {String} The transformed text
   */
  static map(text, colors, after) {
    if (typeof text !== 'string') throw new Error(`The text parameter must be a String value, not ${typeof text}.`);
    else if (!util.isArray(colors)) throw new Error(`The colors parameter must be an Array value, not ${typeof colors}.`);

    after = typeof after === 'number' && after < colors.length && after > 0 ? after : colors.length;

    let transformed = '';
    let i = 0;

    [...text].forEach(l => l === ' ' ? transformed += ' ' : transformed += colors[i++ % after] + l + reset);

    return transformed;
  }

  /**
   * Returns a rainbow-colored letters
   * @param {...any} args The content to apply the style to
   * @returns {String} The transformed text
   */
  static rainbow(...args) {
    const mapColors = [colors.lmagenta, colors.lblue, colors.lcyan, colors.lgreen, colors.lyellow, colors.lred];

    return this.map(format(...args), mapColors, mapColors.length);
  }

  /**
   * Returns a random-colored letters
   * @param {...any} args The content to apply the style to
   * @returns {String} The transformed text
   */
  static random(...args) {
    const mapColors = [...Object.values(backgrounds), ...Object.values(colors), ...Object.values(styles)];

    return this.map(format(...args), mapColors, mapColors.length);
  }

  /**
   * Returns an inverse-colored letters
   * @param {...any} args The content to apply the style to
   * @returns {String} The transformed text
   */
  static zebra(...args) {
    const mapColors = [reset, styles.inverse];

    return this.map(format(...args), mapColors, mapColors.length);
  }
}

Object.defineProperties(Styles, init());

module.exports = Styles;
