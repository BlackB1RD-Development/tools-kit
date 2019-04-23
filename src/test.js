// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const tools = require('..');

// Assignments
const util = tools.util;
const color = tools.color;
const logger = tools.logger;
const hastebin = tools.hastebin;

/* Util Utilities */

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
// Console > [20/02/2020 - 00:00:00 | RANDOM ITEM]: dog

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));
// Console > [20/02/2020 - 00:00:00 | RANDOM ITEM]: 7

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10, false)); // Default is true
// Console > [20/02/2020 - 00:00:00 | RANDOM ITEM]: 9.051817302079687

/* Color Manager */

logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled background'), 'normal background');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled background normal background

logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled color'), 'normal color');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled color normal color

logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled style'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled style normal style

logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RAINBOW]: rainbow styled-text normal text

logger.log({ tag: 'RANDOM' }, color.random('random styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RANDOM]: random styled-text normal text

logger.log({ tag: 'ZEBRA' }, color.zebra('zebra styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | ZEBRA]: zebra styled-text zebra styled-text normal text

/* Logger Manager */

logger.log('content');
// Console > [20/02/2020 - 00:00:00 | LOG]: content

logger.important('Important log');
// Console > [20/02/2020 - 00:00:00 | IMPORTANT]: Important log

logger.success('Success log');
// Console > [20/02/2020 - 00:00:00 | SUCCESS]: Success log

logger.fatal('Fatal log');
// Console > [20/02/2020 - 00:00:00 | FATAL]: Fatal log

logger.trace('Trace log');
// Console > [20/02/2020 - 00:00:00 | TRACE]: Trace log

logger.error('Error log');
// Console > [20/02/2020 - 00:00:00 | ERROR]: Error log

logger.debug('Debug log');
// Console > [20/02/2020 - 00:00:00 | DEBUG]: Debugging log

logger.info('Information log');
// Console > [20/02/2020 - 00:00:00 | INFO]: Information log

logger.warn('Warning log');
// Console > [20/02/2020 - 00:00:00 | WARN]: Warning log

logger.figlet({}, 'FIGLET', 'LOG');
/*
Console > [20/02/2020 - 00:00:00 | FIGLET]:   _     ___   ____
Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |   / _ \ / ___|
Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |  | | | | |  _
Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |__| |_| | |_| |
Console > [20/02/2020 - 00:00:00 | FIGLET]:  |_____\___/ \____|
Console > [20/02/2020 - 00:00:00 | FIGLET]:
Console > [20/02/2020 - 00:00:00 | FIGLET]:   _____ ___ ____ _     _____ _____
Console > [20/02/2020 - 00:00:00 | FIGLET]:  |  ___|_ _/ ___| |   | ____|_   _|
Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |_   | | |  _| |   |  _|   | |
Console > [20/02/2020 - 00:00:00 | FIGLET]:  |  _|  | | |_| | |___| |___  | |
Console > [20/02/2020 - 00:00:00 | FIGLET]:  |_|   |___\____|_____|_____| |_|
Console > [20/02/2020 - 00:00:00 | FIGLET]:
*/

const settings = { // Support custom logging options
  background: 'black',
  color: 'bMagenta',
  style: 'bold',
  type: 'info',
  time: true,
  tag: 'Black & Blue'
};

logger.log(settings, 'content');
// Console > [20/02/2020 - 00:00:00 | Black & Blue]: content

logger.log({ time: false }, 'log', 'no time');
// Console > [LOG]: log no time

logger.log({ time: 'MM-DD-YY' }, 'log', 'custom time format');
// Console > [02-20-2020 | LOG]: log custom time format

logger.log({ tag: false }, 'log', 'no tag');
// Console > [20/02/2020 - 00:00:00]: log no tag

logger.log({ tag: 'CUSTOM TAG' }, 'log', 'custom tag');
// Console > [20/02/2020 - 00:00:00 | CUSTOM TAG]: log custom tag

logger.log({ time: false, tag: false }, 'log', 'no tag', 'no time');
// Console > log no tag no time

logger // Support chain logging
  .log({ tag: 'FIRST LOG' }, 'First content')
  .log({ tag: 'SECOND LOG' }, 'Second content')
  .log({ tag: 'THIRD LOG' }, 'Third content');
/*
  Console > [20/02/2020 - 00:00:00 | FIRST LOG]: First content
  Console > [20/02/2020 - 00:00:00 | SECOND LOG]: Second content
  Console > [20/02/2020 - 00:00:00 | THIRD LOG]: Third content
*/

/* Hastebin Client */

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.log({ background: 'black', color: 'green', type: 'log', tag: 'POST RES' }, postRes);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postRes.link)
      .then(getRes => {
        logger.log({ background: 'black', color: 'green', type: 'log', tag: 'GET RES' }, getRes);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getErr => {
        logger.log({ background: 'black', color: 'red', type: 'error', tag: 'GET ERROR' }, getErr);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Get Error
      });
  })
  .catch(postErr => {
    logger.log({ background: 'black', color: 'red', type: 'error', tag: 'POST ERROR' }, postErr);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Post Error
  });
