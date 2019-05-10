// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, util } = require('..');

logger.log({ tag: 'HAS?' }, util.has({}, 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'name', 'test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'name', 'not test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has(['name', 'test'], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has(['test', 'not test'], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([{ 'name': 'not test' }, { 'name': 'test' }], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has([{ 'name': 'not test' }, { 'name': 'test' }], 'test', 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([{ 'name': 'not test' }, { 'name': 'test' }], 'name', 'test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'ARRAY?' }, util.isArray(new Array()));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: true

logger.log({ tag: 'ARRAY?' }, util.isArray(new Object()));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: false

logger.log({ tag: 'ARRAY?' }, util.isArray([]));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: true

logger.log({ tag: 'ARRAY?' }, util.isArray({}));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject(new Object()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'OBJECT?' }, util.isObject(new Array()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject({}));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'OBJECT?' }, util.isObject([]));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'RANDOM ITEM' }, util.randomItem(['cat', 'dog', 'fish']));
// Console > [20/02/2020 - 00:00:00 | RANDOM ITEM]: fish

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));
// Console > [20/02/2020 - 00:00:00 | RANDOM NUMBER]: 8

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10, false)); // Default is true
// Console > [20/02/2020 - 00:00:00 | RANDOM NUMBER]: 9.478004123859458
