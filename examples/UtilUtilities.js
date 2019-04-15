const tools = require('../index.js');

const util = tools.util;
const logger = tools.logger;

logger.log({ tag: 'OBJECT?' }, util.isObject(         new Array)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(        new Object)); // true
logger.log({ tag: 'OBJECT?' }, util.isObject(                [])); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(                {})); // true
logger.log({ tag: 'RANDOM ITEM' }, util.randomItem([1, 2, 3, 4])); // 3
logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(   5, 10)); // 7