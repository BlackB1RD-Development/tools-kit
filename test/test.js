// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

/* eslint-disable no-undef */

// Requires - Packages
const assert = require('assert');

// Requires - Files
const { util, color, logger, hastebin } = require('..');

describe('Util', () => {
  describe('#has', () => {
    it('should return true (Checks if the Object has a "name" property)', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'name'), true);
    });

    it('should return false (Checks if the Object has a "test" property)', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'test'), false);
    });

    it('should return true (Checks if the Object has a "name" property with the value "test")', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'name', 'test'), true);
    });

    it('should return false (Checks if the Object has a "name" property with the value "not test")', () => {
      assert.deepStrictEqual(util.has({ name: 'test' }, 'name', 'not test'), false);
    });

    it('should return true (Checks if the Array has an item called "name" in it)', () => {
      assert.deepStrictEqual(util.has(['name', 'test'], 'name'), true);
    });

    it('should return false (Checks if the Array has an item called "test" in it)', () => {
      assert.deepStrictEqual(util.has(['name', 'test'], 'not test'), false);
    });
  });

  describe('#isArray', () => {
    it('should return false (Testing an Object)', () => {
      assert.deepStrictEqual(util.isArray({}), false);
    });

    it('should return true (Testing an Array)', () => {
      assert.deepStrictEqual(util.isArray([]), true);
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
    it('should return a random item from this list: cat, dog, fish', () => {
      const testArr = ['cat', 'dog', 'fish'];

      assert.deepStrictEqual(testArr.includes(util.randomItem(testArr)), true);
    });
  });

  describe('#randomNumber', () => {
    it('should return a random number between 5 to 10 (Rounded)', () => {
      const numbersArr = [5, 6, 7, 8, 9, 10];
 
      assert.deepStrictEqual(numbersArr.includes(util.randomNumber(5, 10)), true);
    });

    it('should return a random number between 5 to 10', () => {
      const randomNumber = util.randomNumber(5, 10, false);

      assert.deepStrictEqual(randomNumber >= 5 && randomNumber < 11, true);
    });
  });
});

describe('Color', () => {
  describe('#rainbow', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof color.rainbow('rainbow colored-text'), 'string');
    });
  });

  describe('#random', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof color.random('random colored-text'), 'string');
    });
  });

  describe('#zebra', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof color.zebra('zebra colored-text'), 'string');
    });
  });

  describe('#style', () => {
    it('should return a styled string', () => {
      assert.deepStrictEqual(typeof color.style({ color: 'red' }, 'styled-color'), 'string');
    });
  });
});

describe('Logger', () => {
  describe('#log', () => {
    it('should return the Logger class', () => {
      assert.deepStrictEqual(logger.log({ time: false, tag: false }, ''), logger);
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
    it('should return Hastebin Object', async(done) => {
      return await hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
        .then(done())
        .catch(error => done(error));
    });
  });

  describe('#get', () => {
    it('should return Hastebin Object', async(done) => {
      return await hastebin.get('https://hastebin.com/about.md')
        .then(done())
        .catch(error => done(error));
    });
  });
});
