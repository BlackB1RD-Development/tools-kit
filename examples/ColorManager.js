// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, color } = require('..');

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
