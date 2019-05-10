// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

/* eslint-disable no-undef */

// Requires - Packages
const { assert } = require('chai');

// Requires - Files
const { util, styles, logger, hastebin } = require('..');

describe('Util', () => {
  describe('#has', () => {
    it('should return true (Testing if an Object has a "name" property)', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'name'), true);
    });

    it('should return false (Testing if an Object has a "test" property)', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'test'), false);
    });

    it('should return true (Testing if an Object has a "name" property with the value "test")', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'name', 'test'), true);
    });

    it('should return false (Testing if an Object has a "name" property with the value "not test")', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'name', 'not test'), false);
    });

    it('should return true (Testing if an Array has an item called "name" in it)', () => {
      assert.deepStrictEqual(util.has(['name', 'test'], 'name'), true);
    });

    it('should return false (Testing if an Array has an item called "not test" in it)', () => {
      assert.deepStrictEqual(util.has(['name', 'test'], 'not test'), false);
    });

    it('should return true (Testing if an Array has an item called "test" in it)', () => {
      assert.deepStrictEqual(util.has(['name', 'test'], 'test', 'name'), true);
    });

    it('should return false (Testing if an Array has an item called "not test" in it)', () => {
      assert.deepStrictEqual(util.has(['name', 'test'], 'not test', 'name'), false);
    });

    it('should return true (Testing if an Array has an Object that has a "name" property)', () => {
      assert.deepStrictEqual(util.has([{ name: 'test' }], 'name'), true);
    });

    it('should return true (Testing if an Array has an Object that has a "name" property with the value "test")', () => {
      assert.deepStrictEqual(util.has([{ name: 'test' }], 'name', 'test'), true);
    });

    it('should return false (Testing if an Array has an Object that has a "name" property with the value "not test")', () => {
      assert.deepStrictEqual(util.has([{ name: 'test' }], 'name', 'not test'), false);
    });

    it('should throw an Error (Testing a null value)', () => {
      assert.throws(() => util.has(null), `The object parameter must be an Object or an Array value, not ${typeof null}.`);
    });
  });

  describe('#isArray', () => {
    it('should return true (Testing an Array)', () => {
      assert.deepStrictEqual(util.isArray([]), true);
    });

    it('should return false (Testing an Object)', () => {
      assert.deepStrictEqual(util.isArray({}), false);
    });
  });

  describe('#isObject', () => {
    it('should return true (Testing an Object)', () => {
      assert.deepStrictEqual(util.isObject({}), true);
    });

    it('should return false (Testing an Array)', () => {
      assert.deepStrictEqual(util.isObject([]), false);
    });
  });

  describe('#randomItem', () => {
    it('should return true (Testing a random item from this list: cat, dog, fish)', () => {
      const testArr = ['cat', 'dog', 'fish'];

      assert.deepStrictEqual(testArr.includes(util.randomItem(testArr)), true);
    });

    it('should throw an Error (Testing an Object as the Array parameter)', () => {
      assert.throws(() => util.randomItem({}), `The array parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing an Array with only 1 value)', () => {
      assert.throws(() => util.randomItem(['1']), 'The array Array must contain 2 values inside it.');
    });
  });

  describe('#randomNumber', () => {
    it('should return true (Testing a random number between 5 to 10 (Rounded))', () => {
      assert.deepStrictEqual([5, 6, 7, 8, 9, 10].includes(util.randomNumber(5, 10)), true);
    });

    it('should return true (Testing a random number between 5 to 10 (Not Rounded))', () => {
      const randomNumber = util.randomNumber(5, 10, false);

      assert.deepStrictEqual(randomNumber >= 5 && randomNumber < 11, true);
    });

    it('should throw an Error (Testing with no minimum parameter)', () => {
      assert.throws(() => util.randomNumber(undefined), `The minimum parameter must be a Number value, not ${typeof undefined}.`);
    });

    it('should throw an Error (Testing with no maximum parameter)', () => {
      assert.throws(() => util.randomNumber(1, undefined), `The maximum parameter must be a Number value, not ${typeof undefined}.`);
    });

    it('should throw an Error (Testing a String as the minimum parameter)', () => {
      assert.throws(() => util.randomNumber('test', 2), `The minimum parameter must be a Number value, not ${typeof 'test'}.`);
    });

    it('should throw an Error (Testing a String as the maximum parameter)', () => {
      assert.throws(() => util.randomNumber(1, 'test'), `The maximum parameter must be a Number value, not ${typeof 'test'}.`);
    });
  });
});

describe('Styles', () => {
  const colors = [
    styles.rgb([255, 0, 0]),
    styles.hex('#ffff00'),
    styles.hsv([180, 100, 100]),
    styles.hsl([120, 100, 50]),
    styles.hwb([240, 0, 0]),
    styles.lab([35, 80, -104]),
    styles.xyz([59, 28, 97]),
    styles.lch([88, 90, 149]),
    styles.cmyk([100, 50, 2, 2]),
    styles.ansi16(12),
    styles.ansi256(250),
    styles.keyword('DeepSkyBlue')
  ];

  describe('#_escapeCode', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles._escapeCode([255, 0, 0]), 'string');
    });

    it('should return ANSI Escape Code value (Background)', () => {
      assert.deepStrictEqual(typeof styles._escapeCode([255, 0, 0], 'background'), 'string');
    });

    it('should throw an Error (Testing an Object as rgb parameter)', () => {
      assert.throws(() => styles._escapeCode({}), `The rgb parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the rgb Array instead of 3)', () => {
      assert.throws(() => styles._escapeCode([17, 2]), 'The rgb Array must contain 3 values inside it.');
    });
  });

  describe('#rgb', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.rgb([255, 0, 0]), 'string');
    });

    it('should throw an Error (Testing an Object as rgb parameter)', () => {
      assert.throws(() => styles.rgb({}), `The RGB parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the rgb Array instead of 3)', () => {
      assert.throws(() => styles.rgb([17, 2]), 'The RGB Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 256)', () => {
      assert.throws(() => styles.rgb([-1, 50, 257]), 'The RGB Array values must be Numbers value.\nThe Red value should be equal or higher than 0, and lower or equal to 256\nThe Green value should be equal or higher than 0, and lower or equal to 256\nThe Blue value should be equal or higher than 0, and lower or equal to 256');
    });
  });

  describe('#hex', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.hex('#ffff00'), 'string');
    });
    it('should return ANSI Escape Code value (Testing without #)', () => {
      assert.deepStrictEqual(typeof styles.hex('ffff00'), 'string');
    });

    it('should throw an Error (Testing an Object as hex parameter)', () => {
      assert.throws(() => styles.hex({}), `The Hex parameter must be a String value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 3 values inside the hex String instead of 6)', () => {
      assert.throws(() => styles.hex('#fff'), 'The Hex parameter must be equal to 6 digits excluding \'#\'.');
    });
  });

  describe('#hsv', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.hsv([180, 100, 100]), 'string');
    });

    it('should throw an Error (Testing an Object as hsv parameter)', () => {
      assert.throws(() => styles.hsv({}), `The HSV parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the hsv Array instead of 3)', () => {
      assert.throws(() => styles.hsv([17, 2]), 'The HSV Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 100)', () => {
      assert.throws(() => styles.hsv([-1, 50, 101]), 'The HSV Array values must be Numbers value.\nThe H value should be equal or higher than 0, and lower or equal to 360\nThe S value should be equal or higher than 0, and lower or equal to 100\nThe V value should be equal or higher than 0, and lower or equal to 100');
    });
  });

  describe('#hsl', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.hsl([120, 100, 50]), 'string');
    });

    it('should throw an Error (Testing an Object as hsl parameter)', () => {
      assert.throws(() => styles.hsl({}), `The HSL parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the hsl Array instead of 3)', () => {
      assert.throws(() => styles.hsl([17, 2]), 'The HSL Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 100)', () => {
      assert.throws(() => styles.hsl([-1, 50, 101]), 'The HSL Array values must be Numbers value.\nThe H value should be equal or higher than 0, and lower or equal to 360\nThe S value should be equal or higher than 0, and lower or equal to 100\nThe L value should be equal or higher than 0, and lower or equal to 100');
    });
  });

  describe('#hwb', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.hwb([240, 0, 0]), 'string');
    });

    it('should throw an Error (Testing an Object as hwb parameter)', () => {
      assert.throws(() => styles.hwb({}), `The HWB parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the hwb Array instead of 3)', () => {
      assert.throws(() => styles.hwb([17, 2]), 'The HWB Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 100)', () => {
      assert.throws(() => styles.hwb([-1, 50, 101]), 'The HWB Array values must be Numbers value.\nThe H value should be equal or higher than 0, and lower or equal to 360\nThe W value should be equal or higher than 0, and lower or equal to 100\nThe B value should be equal or higher than 0, and lower or equal to 100');
    });
  });

  describe('#lab', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.lab([35, 80, -104]), 'string');
    });

    it('should throw an Error (Testing an Object as lab parameter)', () => {
      assert.throws(() => styles.lab({}), `The LAB parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the lab Array instead of 3)', () => {
      assert.throws(() => styles.lab([17, 2]), 'The LAB Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 128)', () => {
      assert.throws(() => styles.lab([-1, 50, 129]), 'The LAB Array values must be Numbers value.\nThe L value should be equal or higher than 0, and lower or equal to 100\nThe A value should be equal or higher than -128, and lower or equal to 128\nThe B value should be equal or higher than -128, and lower or equal to 128');
    });
  });

  describe('#xyz', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.xyz([59, 28, 97]), 'string');
    });

    it('should throw an Error (Testing an Object as xyz parameter)', () => {
      assert.throws(() => styles.xyz({}), `The XYZ parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the xyz Array instead of 3)', () => {
      assert.throws(() => styles.xyz([17, 2]), 'The XYZ Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 100)', () => {
      assert.throws(() => styles.xyz([-1, 50, 101]), 'The XYZ Array values must be Numbers value.\nThe X value should be equal or higher than 0, and lower or equal to 100\nThe Y value should be equal or higher than 0, and lower or equal to 100\nThe Z value should be equal or higher than 0, and lower or equal to 100');
    });
  });

  describe('#lch', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.lch([88, 90, 149]), 'string');
    });

    it('should throw an Error (Testing an Object as lch parameter)', () => {
      assert.throws(() => styles.lch({}), `The LCH parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the lch Array instead of 3)', () => {
      assert.throws(() => styles.lch([17, 2]), 'The LCH Array must contain 3 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 361)', () => {
      assert.throws(() => styles.lch([-1, 50, 361]), 'The LCH Array values must be Numbers value.\nThe L value should be equal or higher than 0, and lower or equal to 100\nThe C value should be equal or higher than 0, and lower or equal to 140\nThe H value should be equal or higher than 0, and lower or equal to 360');
    });
  });

  describe('#cmyk', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.cmyk([100, 50, 2, 2]), 'string');
    });

    it('should throw an Error (Testing an Object as cmyk parameter)', () => {
      assert.throws(() => styles.cmyk({}), `The CMYK parameter must be an Array value, not ${typeof {}}.`);
    });

    it('should throw an Error (Testing with only 2 values inside the cmyk Array instead of 4)', () => {
      assert.throws(() => styles.cmyk([17, 2]), 'The CMYK Array must contain 4 values inside it.');
    });

    it('should throw an Error (Testing with a value lower than 0 and higher than 100)', () => {
      assert.throws(() => styles.cmyk([-1, 50, 2, 101]), 'The CMYK Array values must be Numbers value.\nThe C value should be equal or higher than 0, and lower or equal to 100\nThe M value should be equal or higher than 0, and lower or equal to 100\nThe Y value should be equal or higher than 0, and lower or equal to 100\nThe K value should be equal or higher than 0, and lower or equal to 100');
    });
  });

  describe('#ansi16', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.ansi16(12), 'string');
    });

    it('should throw an Error (Testing a string as keyword parameter)', () => {
      assert.throws(() => styles.ansi16('test'), 'The ANSI16 value should be equal or higher than 0, and lower or equal to 16.');
    });

    it('should throw an Error (Testing with a value higher than 16)', () => {
      assert.throws(() => styles.ansi16(17), 'The ANSI16 value should be equal or higher than 0, and lower or equal to 16.');
    });
  });

  describe('#ansi256', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.ansi256(250), 'string');
    });

    it('should throw an Error (Testing a string as ansi256 parameter)', () => {
      assert.throws(() => styles.ansi256('test'), 'The ANSI256 value should be equal or higher than 0, and lower or equal to 256.');
    });

    it('should throw an Error (Testing with a value higher than 256)', () => {
      assert.throws(() => styles.ansi256(257), 'The ANSI256 value should be equal or higher than 0, and lower or equal to 256.');
    });
  });

  describe('#keyword', () => {
    it('should return ANSI Escape Code value (String)', () => {
      assert.deepStrictEqual(typeof styles.keyword('DeepSkyBlue'), 'string');
    });

    it('should throw an Error (Testing a null as keyword parameter)', () => {
      assert.throws(() => styles.keyword(null), `The keyword parameter must be a String value, not ${typeof null}.`);
    });

    it('should throw an Error (Testing with an invalid color keyword)', () => {
      assert.throws(() => styles.keyword('test'), 'Invalid color keyword.');
    });
  });

  describe('#rainbow', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.rainbow('rainbow colored-text'), 'string');
    });
  });

  describe('#random', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.random('random colored-text'), 'string');
    });
  });

  describe('#zebra', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.zebra('zebra colored-text'), 'string');
    });
  });

  describe('#map', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.map('test', colors, colors.length), 'string');
    });

    it('should throw an Error (Testing a null as text parameter)', () => {
      assert.throws(() => styles.map(null), `The text parameter must be a String value, not ${typeof null}.`);
    });

    it('should throw an Error (Testing an Object as colors parameter)', () => {
      assert.throws(() => styles.map('test', {}), `The colors parameter must be an Array value, not ${typeof {}}.`);
    });
  });

  describe('#stylify', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.stylify({ background: 'black', color: 'red', style: 'bold' }, 'styled-color'), 'string');
    });

    it('should return a string', () => {
      assert.deepStrictEqual(typeof styles.stylify({ background: undefined, color: undefined, style: undefined }, 'styled-color'), 'string');
    });

    it('should throw an Error (Testing with undefined as the options parameter)', () => {
      assert.throws(() => styles.stylify(undefined), `The options parameter must be an Object value, not ${typeof undefined}.`);
    });
  });

  describe('#background', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.background('bgGreen', 'styled-color'), 'string');
    });
  });

  describe('#color', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.color('red', 'styled-color'), 'string');
    });
  });

  describe('#style', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof styles.style('bold', 'styled-color'), 'string');
    });
  });
});

describe('Logger', () => {
  describe('#_log', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger._log({ options: { background: undefined, color: undefined, style: undefined, type: undefined, time: undefined, tag: undefined, format: undefined } }, ''), logger);
    });

    it('should throw an Error (Testing with null value as settings)', () => {
      assert.throws(() => logger._log(null), `The options parameter must be an Object value, not ${typeof null}.`);
    });

    it('should throw an Error (Testing without options property)', () => {
      assert.throws(() => logger._log({}), 'The options Object must contain an options Object, not undefined.');
    });

    it('should throw an Error (Testing with options property but Array value)', () => {
      assert.throws(() => logger._log({ options: [] }, ''), `The options Object must contain an options Object, not ${util.isArray([]) ? 'an Array' : typeof []}.`);
    });
  });

  describe('#important', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.important('important'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.important({
        name: 'important',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'important'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.important({
        name: 'important',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'important'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.important({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'important'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.important({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'important'), logger);
    });
  });

  describe('#success', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.success('success'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.success({
        name: 'success',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'success'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.success({
        name: 'success',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'success'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.success({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'success'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.success({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'success'), logger);
    });
  });

  describe('#fatal', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.fatal('fatal'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.fatal({
        name: 'fatal',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'fatal'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.fatal({
        name: 'fatal',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'fatal'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.fatal({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'fatal'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.fatal({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'fatal'), logger);
    });
  });

  describe('#trace', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.trace('trace'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.trace({
        name: 'trace',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'trace'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.trace({
        name: 'trace',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'trace'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.trace({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'trace'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.trace({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'trace'), logger);
    });
  });

  describe('#error', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.error('error'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.error({
        name: 'error',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'error'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.error({
        name: 'error',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'error'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.error({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'error'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.error({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'error'), logger);
    });
  });

  describe('#debug', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.debug('debug'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.debug({
        name: 'debug',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'debug',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'debug'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.debug({
        name: 'debug',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'debug',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'debug'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.debug({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'debug',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'debug'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.debug({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'debug',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'debug'), logger);
    });
  });

  describe('#info', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.info('info'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.info({
        name: 'info',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'info'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.info({
        name: 'info',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'info',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'info'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.info({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'info'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.info({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'info',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'info'), logger);
    });
  });

  describe('#warn', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.warn('warn'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.warn({
        name: 'warn',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'warn',
          time: true,
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'warn'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.warn({
        name: 'warn',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'warn',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'warn'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.warn({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'warn',
        time: true,
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'warn'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.warn({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'warn',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'warn'), logger);
    });
  });

  describe('#figlet', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.figlet('i'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.figlet({
        figlet: {
          font: 'Ghost',
          verticalLayout: 'default',
          horizontalLayout: 'default'
        },
        log: {
          name: 'figlet',
          options: {
            background: 'black',
            color: 'red',
            style: 'bold',
            type: 'log',
            time: 'MM/DD/YY',
            tag: true,
            format: (options) => {
              return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
            }
          }
        }
      }, 'Boo'), logger);
    });

    it('should return the Logger class (Testing with full log options Object)', () => {
      assert.deepStrictEqual(logger.figlet({
        log: {
          name: 'figlet',
          options: {
            background: 'black',
            color: 'red',
            style: 'bold',
            type: 'log',
            time: 'MM/DD/YY',
            tag: true,
            format: (options) => {
              return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
            }
          }
        }
      }, 'i'), logger);
    });

    it('should return the Logger class (Testing with full log options Object)', () => {
      assert.deepStrictEqual(logger.figlet({
        log: {
          name: 'figlet',
          options: {
            background: 'black',
            color: 'red',
            style: 'bold',
            type: 'log',
            time: false,
            tag: false,
            format: (options) => {
              return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
            }
          }
        }
      }, 'i'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.figlet({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'log',
        time: 'MM/DD/YY',
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'i'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.figlet({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'log',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'i'), logger);
    });
  });

  describe('#log', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.log([]), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.log({
        name: 'log',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'log',
          time: 'MM/DD/YY',
          tag: true,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'log'), logger);
    });

    it('should return the Logger class (Testing with full options Object)', () => {
      assert.deepStrictEqual(logger.log({
        name: 'log',
        options: {
          background: 'black',
          color: 'red',
          style: 'bold',
          type: 'log',
          time: false,
          tag: false,
          format: (options) => {
            return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
          }
        }
      }, 'log'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.log({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'log',
        time: 'MM/DD/YY',
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'log'), logger);
    });

    it('should return the Logger class (Testing with regular options Object)', () => {
      assert.deepStrictEqual(logger.log({
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'log',
        time: false,
        tag: false,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }, 'log'), logger);
    });
  });

  describe('#once', () => {
    it('should return the listeners count', () => {
      assert.deepStrictEqual(logger.once('log', (options) => { return options; }).listenerCount('log'), 1);
    });

    it('should throw an Error (Testing with options property but Array value)', () => {
      let message = `test is an invalid event name.\nAvailable events: ${logger.events.join(', ')}`;

      assert.throws(() => logger.once('test'), message);
    });
  });

  describe('#on', () => {
    it('should return the listeners count', () => {
      assert.deepStrictEqual(logger.on('log', (options) => { return options; }).listenerCount('log'), 2);
    });

    it('should throw an Error (Testing with options property but Array value)', () => {
      let message = `test is an invalid event name.\nAvailable events: ${logger.events.join(', ')}`;

      assert.throws(() => logger.on('test'), message);
    });
  });

  describe('#logs', () => {
    it('should return all the Logger logs', () => {
      assert.deepStrictEqual(util.isArray(logger.logs), true);
    });
  });

  describe('#methods', () => {
    it('should return all the Logger methods', () => {
      assert.deepStrictEqual(util.isArray(logger.methods), true);
    });
  });

  describe('#events', () => {
    it('should return all the Logger events', () => {
      assert.deepStrictEqual(util.isArray(logger.events), true);
    });
  });
});

describe('Hastebin', () => {
  describe('#post', () => {
    it('should return a Hastebin Object (Testing with full extension = .js)', async(done) => {
      return await hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
        .then(done())
        .catch(error => done(error));
    });

    it('should return a Hastebin Object (Testing with half extension = js)', async(done) => {
      return await hastebin.post('var test = \'test\';\n\nconsole.log(test);', 'js')
        .then(done())
        .catch(error => done(error));
    });

    it('should return a Hastebin Object (Testing without extension)', async(done) => {
      return await hastebin.post('var test = \'test\';\n\nconsole.log(test);')
        .then(done())
        .catch(error => done(error));
    });

    it('should throw an Error (Testing without the data parameter)', () => {
      assert.throws(() => hastebin.post(null), 'The data parameter is required.');
    });
  });

  describe('#get', () => {
    it('should return a Hastebin Object (Testing with extension)', async(done) => {
      return await hastebin.get('https://hastebin.com/about.md')
        .then(done())
        .catch(error => done(error));
    });

    it('should return a Hastebin Object (Testing without extension)', async(done) => {
      return await hastebin.get('https://hastebin.com/about')
        .then(done())
        .catch(error => done(error));
    });

    it('should throw an Error (Testing without the URL parameter)', () => {
      assert.throws(() => hastebin.get(null), `The url parameter must be a String value, not ${typeof null}.`);
    });

    it('should throw an Error (Testing with Google link)', () => {
      assert.throws(() => hastebin.get('https://www.google.com/'), 'Invalid url argument.');
    });
  });
});
