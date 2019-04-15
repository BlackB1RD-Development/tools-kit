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

logger.log({ tag: 'PACKAGE NAME' }, tools.pName);
logger.log({ tag: 'PACKAGE VERSION' }, tools.pVersion);

logger.log({ tag: 'LOGGER LOGS' }, logger.logs);
logger.log({ tag: 'LOGGER EVENTS' }, logger.events);
logger.log({ tag: 'LOGGER METHODS' }, logger.methods);

logger.log({ tag: 'OBJECT?' }, util.isObject(null));
logger.log({ tag: 'OBJECT?' }, util.isObject(undefined));
logger.log({ tag: 'OBJECT?' }, util.isObject(true));
logger.log({ tag: 'OBJECT?' }, util.isObject(1));
logger.log({ tag: 'OBJECT?' }, util.isObject(''));
logger.log({ tag: 'OBJECT?' }, util.isObject([]));
logger.log({ tag: 'OBJECT?' }, util.isObject([{}]));
logger.log({ tag: 'OBJECT?' }, util.isObject({}));
logger.log({ tag: 'OBJECT?' }, util.isObject(new Date()));
logger.log({ tag: 'OBJECT?' }, util.isObject(new Error()));
logger.log({ tag: 'OBJECT?' }, util.isObject(new Array()));
logger.log({ tag: 'OBJECT?' }, util.isObject(new RegExp()));
logger.log({ tag: 'OBJECT?' }, util.isObject(new Object()));
logger.log({ tag: 'RANDOM ITEM' }, util.randomItem([1, 2, 3, 4]));
logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));

logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow colored-text'), 'normal text');
logger.log({ tag: 'RANDOM' }, color.random('random colored-text'), 'normal text');
logger.log({ tag: 'ZABRA' }, color.zabra('zabra colored-text'), 'normal text');
logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled-background'), 'normal background');
logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled-color'), 'normal color');
logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled-style'), 'normal style');

logger.log('content');
logger.log({
  background: 'blue',
  color: 'red',
  style: 'bold',
  type: 'info',
  time: true,
  tag: 'Red & Blue'
}, 'content');
logger.log({ background: 'blue' }, 'log', 'blue text background');
logger.log({ color: 'yellow' }, 'log', 'yellow text color');
logger.log({ style: 'bold' }, 'log', 'bold text style');
logger.log({ type: 'info' }, 'log', 'console info type');
logger.log({ time: false }, 'log', 'no time');
logger.log({ time: 'MM-DD-YY' }, 'log', 'custom time format');
logger.log({ tag: 'TEST' }, 'log', 'test tag');

logger.on('test', log => {
  logger.log({ tag: 'ON EVENT' }, `${log.name} triggered on`);
});

logger.once('important', log => {
  logger.log({ tag: 'ONCE EVENT' }, `${log.name} triggered once`);
});

logger.important('test', 'important', 'test');
logger.important('test', 'important', 'test');
logger.success('test', 'success', 'test');
logger.fatal('test', 'fatal', 'test');
logger.trace('test', 'trace', 'test');
logger.error('test', 'error', 'test');
logger.debug('test', 'debug', 'test');
logger.warn('test', 'warn', 'test');
logger.info('test', 'info', 'test');
logger.log('test', 'log', 'test');

// This methods listed below will take some time before being logged in to the console

logger.figlet('figlet', 'test');
logger.figlet({
  font: 'Ghost',
  horizontalLayout: 'default',
  verticalLayout: 'default'
}, 'figlet', 'Ghost');

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.log({ background: 'black', color: 'green', type: 'info', tag: 'POST RES' }, postRes);

    await hastebin.get(postRes.link)
      .then(getRes => logger.log({ background: 'black', color: 'green', type: 'info', tag: 'GET RES' }, getRes))
      .catch(getErr => logger.log({ background: 'black', color: 'red', type: 'error', tag: 'GET ERROR' }, getErr));
  })
  .catch(postErr => logger.log({ background: 'black', color: 'red', type: 'error', tag: 'POST ERROR' }, postErr));
