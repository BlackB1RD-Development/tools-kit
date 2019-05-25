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

logger.figlet('FIGLET', 'LOG');
/*
  Console > [20/02/2020 - 00:00:00 | FIGLET]:   _____ ___ ____ _     _____ _____   _     ___   ____
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  |  ___|_ _/ ___| |   | ____|_   _| | |   / _ \ / ___|
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |_   | | |  _| |   |  _|   | |   | |  | | | | |  _
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  |  _|  | | |_| | |___| |___  | |   | |__| |_| | |_| |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  |_|   |___\____|_____|_____| |_|   |_____\___/ \____|
  Console > [20/02/2020 - 00:00:00 | FIGLET]:
*/

// Support custom logging options and rewriting of existing methods settings
const scsSettings = {
    time: 'H:mm',
    tag: 'PUBLISH SUCCESS',
    format: (options) => {
      return `[${options.tag}]: Published ${options.content} successfully at ${options.time}`;
    }
  }, errSettings = {
    time: 'H:mm',
    tag: 'PUBLISH ERROR',
    format: (options) => {
      return `[${options.tag}]: Couldn't publish ${options.content} at ${options.time}`;
    }
  }, settings = {
    tag: 'PUBLISH API',
    format: (options) => {
      return `[${options.tag}]: Publish API ${options.content} | Last Check: ${options.time}`;
    }
  }, figSettings = {
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
  }, image = {
    name: 'logo.png',
    size: '5MB'
  }, api = {
    message: 'Internal Server Error',
    code: '500'
  };

logger.success(scsSettings, 'image named "%s" with a total size of %s', image.name, image.size);
// Console > [PUBLISH SUCCESS]: Published image named "logo.png" with a total size of 5MB successfully at 20:00

logger.error(errSettings, 'image named "%s" with a total size of %s', image.name, image.size);
// Console > [PUBLISH ERROR]: Couldn't publish image named "logo.png" with a total size of 5MB at 20:00

logger.info(settings, 'respond with %s status code and "%s" message', api.code, api.message);
// Console > [PUBLISH API]: Publish API respond with 500 status code and "Internal Server Error" message | Last Check: 20/2/2020 - 20:00:00

logger.log({ time: false }, 'log', 'no time');
// Console > [LOG]: log no time

logger.figlet(figSettings, 'Boo');
/*
  Console > [20/02/2020 - 00:00:00 | FIGLET]: .-. .-')
  Console > [20/02/2020 - 00:00:00 | FIGLET]: \  ( OO )
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  ;-----.\  .-'),-----.  .-'),-----.
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | .-.  | ( OO'  .-.  '( OO'  .-.  '
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | '-' /_)/   |  | |  |/   |  | |  |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | .-. `. \_) |  |\|  |\_) |  |\|  |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |  \  |  \ |  | |  |  \ |  | |  |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | '--'  /   `'  '-'  '   `'  '-'  '
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  `------'      `-----'      `-----'
*/

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
