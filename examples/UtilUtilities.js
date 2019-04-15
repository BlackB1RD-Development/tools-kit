// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, util } = require('..');

logger.log({ tag: 'OBJECT?' }, util.isObject(new Array())); // False
logger.log({ tag: 'OBJECT?' }, util.isObject(new Object())); // True
logger.log({ tag: 'OBJECT?' }, util.isObject([])); // False
logger.log({ tag: 'OBJECT?' }, util.isObject({})); // True
logger.log({ tag: 'RANDOM ITEM' }, util.randomItem([1, 2, 3, 4])); // 3
logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10)); // 7
