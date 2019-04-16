// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger } = require('..');

logger.log('content');
// Console > [20/02/2020 - 00:00:00 | LOG]: content

logger.important('Important log');
// Console > [20/02/2020 - 00:00:00 | IMPORTANT]: Important log

logger.success('Success log');
// Console > [20/02/2020 - 00:00:00 | SUCCESS]: Success log

logger.debug('Debugging log');
// Console > [20/02/2020 - 00:00:00 | DEBUG]: Debugging log

logger.error('Error log');
// Console > [20/02/2020 - 00:00:00 | ERROR]: Error log

logger.fatal('Fatal log');
// Console > [20/02/2020 - 00:00:00 | FATAL]: Fatal log

logger.trace('Trace log');
// Console > [20/02/2020 - 00:00:00 | TRACE]: Trace log

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

const settings = { // Support custom log options
  background: 'black',
  color: 'blue',
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
