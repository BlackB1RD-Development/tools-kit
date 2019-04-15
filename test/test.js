// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

/* eslint-disable no-undef */

// Requires - Files
const assert = require('assert');
const tools = require('..');

// Assignments
const util = tools.util;
const color = tools.color;
const logger = tools.logger;
const hastebin = tools.hastebin;

describe('Util', () => {
  describe('#isObject', () => {
    it('should return true (Testing an Object)', () => {
      assert.deepStrictEqual(util.isObject({}), true);
    });
  });

  describe('#isObject', () => {
    it('should return false (Testing an Array)', () => {
      assert.deepStrictEqual(util.isObject([]), false);
    });
  });

  describe('#randomItem', () => {
    it('should return a random item from this list: cat, dog, fish', () => {
      let testArr = ['cat', 'dog', 'fish'];

      assert.deepStrictEqual(testArr.includes(util.randomItem(testArr)), true);
    });
  });

  describe('#randomNumber', () => {
    it('should return a random number between 5 to 10', () => {
      let numbersArr = [5, 6, 7, 8, 9, 10];
 
      assert.deepStrictEqual(numbersArr.includes(util.randomNumber(5, 10)), true);
    });
  });
});

describe('Color', () => {
  describe('#rainbow', () => {
    it('shouldn\'t return an Error', () => {
      assert.deepStrictEqual(typeof color.rainbow('rainbow colored-text'), 'string');
    });
  });

  describe('#random', () => {
    it('shouldn\'t return an Error', () => {
      assert.deepStrictEqual(typeof color.random('random colored-text'), 'string');
    });
  });

  describe('#zabra', () => {
    it('shouldn\'t return an Error', () => {
      assert.deepStrictEqual(typeof color.zabra('zabra colored-text'), 'string');
    });
  });

  describe('#style', () => {
    it('shouldn\'t return an Error', () => {
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
      assert.deepStrictEqual(Array.isArray(logger.logs), true);
    });
  });

  describe('#methods', () => {
    it('should return all the Logger methods', () => {
      assert.deepStrictEqual(Array.isArray(logger.methods), true);
    });
  });

  describe('#events', () => {
    it('should return all the Logger events', () => {
      assert.deepStrictEqual(Array.isArray(logger.events), true);
    });
  });
});

describe('Hastebin', () => {
  const hastebinObjProps = ['link', 'host', 'key', 'extension', 'content', 'ratelimit', 'ratelimit_remaining', 'status_txt', 'status_code'];

  describe('#post', () => {
    it('should return Hastebin Object', async() => {
      await hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
        .then(res => assert.deepStrictEqual(Object.keys(res), hastebinObjProps));
    });
  });

  describe('#get', () => {
    it('should return Hastebin Object', async() => {
      await hastebin.get('https://hastebin.com/about.md')
        .then(res => assert.deepStrictEqual(Object.keys(res), hastebinObjProps));
    });
  });
});
