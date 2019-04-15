const tools = require('../index.js');

const color = tools.color;
const logger = tools.logger;

logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled-background'), 'normal background');
logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled-color'), 'normal color');
logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled-style'), 'normal style');
logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow colored-text'), 'normal text');
logger.log({ tag: 'RANDOM' }, color.random('random colored-text'), 'normal text');
logger.log({ tag: 'ZABRA' }, color.zabra('zabra colored-text'), 'normal text');