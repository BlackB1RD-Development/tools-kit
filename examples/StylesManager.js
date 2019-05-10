// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, styles } = require('..');

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
