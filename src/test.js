// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { util, styles, logger, hastebin } = require('..');

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

logger.log({ tag: 'HAS?' }, util.has([{ name: 'not test' }, { name: 'test' }], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has([{ name: 'not test' }, { name: 'test' }], 'test', 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([{ name: 'not test' }, { name: 'test' }], 'name', 'test'));
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

/* Style Manager */

logger.log({ tag: 'STYLE' },
  styles.bgGreen('testing %s', 'background'),
  styles.red('testing %s', 'color'),
  styles.underline('testing %s', 'style'),
  styles.bgGreen.red.underline('testing %s', 'a style chain')
);
// Console > [20/02/2020 - 00:00:00 | STYLE]: testing background testing color testing style testing a style chain

logger.log({ tag: 'STYLE OBJECT' }, styles.stylify({ background: 'bgGreen' }, 'styled background'), 'normal background');
// Console > [20/02/2020 - 00:00:00 | STYLE OBJECT]: styled background normal background

logger.log({ tag: 'STYLE OBJECT' }, styles.stylify({ color: 'red' }, 'styled color'), 'normal color');
// Console > [20/02/2020 - 00:00:00 | STYLE OBJECT]: styled color normal color

logger.log({ tag: 'STYLE OBJECT' }, styles.stylify({ style: 'underline' }, 'styled style'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE OBJECT]: styled style normal style

logger.log({ tag: 'STYLE OBJECT' }, styles.stylify({ background: 'bgGreen', color: 'red', style: 'underline' }, 'styled text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | STYLE OBJECT]: styled text normal text

logger.log({ tag: 'STYLE METHOD' }, styles.background('bgGreen', 'styled background'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE METHOD]: styled background normal style

logger.log({ tag: 'STYLE METHOD' }, styles.color('red', 'styled color'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE METHOD]: styled color normal style

logger.log({ tag: 'STYLE METHOD' }, styles.style('underline', 'styled style'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE METHOD]: styled style normal style

logger.log({ tag: 'STYLE METHOD' }, styles.bgGreen.red.underline('styled text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | STYLE METHOD]: styled text normal text

const colors = [
  styles.rgb([255, 0, 0]),
  styles.hex('#ffff00'),
  styles.hsv([180, 100, 100]),
  styles.hsl([120, 100, 50]),
  styles.hwb([240, 0, 0]),
  styles.lab([35, 80, -104]),
  styles.xyz([59, 28, 97]),
  styles.lch([88, 90, 149]),
  styles.cmyk([100, 50, 0, 0]),
  styles.ansi16(12),
  styles.ansi256(250),
  styles.keyword('DeepSkyBlue')
];

logger.log({ tag: 'CUSTOM MAP' }, styles.map('custom map styled-text', colors), 'normal text');
// Console > [20/02/2020 - 00:00:00 | CUSTOM MAP]: custom map styled-text normal text

logger.log({ tag: 'RAINBOW' }, styles.rainbow('rainbow styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RAINBOW]: rainbow styled-text normal text

logger.log({ tag: 'RANDOM' }, styles.random('random styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RANDOM]: random styled-text normal text

logger.log({ tag: 'ZEBRA' }, styles.zebra('zebra styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | ZEBRA]: zebra styled-text normal text

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
    format: options => `[${options.tag}]: Published ${options.content} successfully at ${options.time}`
  },
  errorSettings = {
    time: 'H:mm',
    tag: 'PUBLISH ERROR',
    format: options => `[${options.tag}]: Couldn't publish ${options.content} at ${options.time}`
  },
  settings = {
    tag: 'PUBLISH API',
    format: options => `[${options.tag}]: Publish API ${options.content} | Last Check: ${options.time}`
  },
  figSettings = {
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
        format: options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      }
    }
  },
  image = {
    name: 'logo.png',
    size: '5MB'
  },
  api = {
    message: 'Internal Server Error',
    code: '500'
  };

logger.success(scsSettings, 'image named "%s" with a total size of %s', image.name, image.size);
// Console > [PUBLISH SUCCESS]: Published image named "logo.png" with a total size of 5MB successfully at 20:00

logger.error(errorSettings, 'image named "%s" with a total size of %s', image.name, image.size);
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

/* Hastebin Client */

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postResponse => {
    logger.success({ tag: 'POST RES' }, postResponse);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postResponse.link)
      .then(getResponse => {
        logger.success({ tag: 'GET RES' }, getResponse);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getError => {
        logger.error({ tag: 'GET ERROR' }, getError);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Error: Get Error
      });
  })
  .catch(postError => {
    logger.error({ tag: 'POST ERROR' }, postError);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Error: Post Error
  });
