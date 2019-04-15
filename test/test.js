// tools-kit 1.0.0
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires
const tools = require(`../index.js`);

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

logger.log({ tag: 'OBJECT?' }, util.isObject(          )); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(      null)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject( undefined)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(      true)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(         1)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(        '')); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(        [])); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(      [{}])); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(  new Date)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject( new Error)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject( new Array)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(new RegExp)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(new Object)); // true
logger.log({ tag: 'OBJECT?' }, util.isObject(        {})); // true
logger.log({ tag: 'RANDOM ITEM' }, util.randomItem([1, 2, 3, 4]));
logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));

logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow colored-text'), 'normal text');
logger.log({ tag: 'RANDOM' }, color.random('random colored-text'), 'normal text');
logger.log({ tag: 'ZABRA' }, color.zabra('zabra colored-text'), 'normal text');
logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled-background'), 'normal background');
logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled-color'), 'normal color');
logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled-style'), 'normal style');

logger.log('content'); // This will log the content to the console with the stock console settings.
logger.log({
  background: 'blue',
  color: 'red',
  style: 'bold',
  type: 'info',
  time: true,
  tag: 'Red & Blue'
}, 'content'); // Resulting in a blue background, red colored text, and bold styled text: [01/1/2020 - 00:00:00 | Red & Blue]: content
logger.log({ background: 'blue' }, 'log', 'blue text background');
logger.log({ color: 'yellow' }, 'log', 'yellow text color');
logger.log({ style: 'bold' }, 'log', 'bold text style');
logger.log({ type: 'info' }, 'log', 'console info type');
logger.log({ time: false }, 'log', 'no time');
logger.log({ time: 'MM-DD-YY' }, 'log', 'custom time format');
logger.log({ tag: 'TEST' }, 'log', 'test tag');

logger.on('test', function(log) {
  logger.log({ tag: 'ON EVENT' }, `${log.name} triggered on`);
});

logger.once('important', function(log) {
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
}, 'figlet', 'Ghost')

hastebin.post('var test = "test";\n\nconsole.log(test);', '.js')
  .then(postRes => {
    logger.log({ tag: 'POST RES' }, postRes);

    hastebin.get(postRes.link)
      .then(getRes => logger.log({ tag: 'GET RES' }, getRes))
      .catch(getErr => logger.error({ tag: 'GET ERROR' }, getErr));
  })
  .catch(postErr => logger.error({ tag: 'POST ERROR' }, postErr));
