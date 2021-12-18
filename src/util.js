// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Packages
const { stdout } = require('supports-color');

// Assignments
const hastebinURLS = {
  regex: /(https?:\/\/www.toptal.com\/developers\/hastebin|https?:\/\/toptal.com\/developers\/hastebin|www.toptal.com\/developers\/hastebin|toptal.com\/developers\/hastebin)\/?/i,
  documentsHttpsWWW: 'https://www.toptal.com/developers/hastebin/documents',
  documentsHttpWWW: 'http://www.toptal.com/developers/hastebin/documents',
  documentsHttps: 'https://toptal.com/developers/hastebin/documents',
  documentsHttp: 'http://toptal.com/developers/hastebin/documents',
  documentsWWW: 'www.toptal.com/developers/hastebin/documents',
  httpsWWW: 'https://www.toptal.com/developers/hastebin',
  httpWWW: 'http://www.toptal.com/developers/hastebin',
  https: 'https://toptal.com/developers/hastebin',
  http: 'http://toptal.com/developers/hastebin',
  www: 'www.toptal.com/developers/hastebin',
  none: 'toptal.com/developers/hastebin'
};

const backgrounds = {
  bgBlack: stdout.has16m ? '\u001B[48;2;0;0;0m' : '\u001B[40m',
  bgGray: stdout.has16m ? '\u001B[48;2;128;128;128m' : '\u001B[100m',
  bgGrey: stdout.has16m ? '\u001B[48;2;128;128;128m' : '\u001B[100m',
  bgRed: stdout.has16m ? '\u001B[48;2;255;0;0m' : '\u001B[41m',
  bgGreen: stdout.has16m ? '\u001B[48;2;0;255;0m' : '\u001B[42m',
  bgYellow: stdout.has16m ? '\u001B[48;2;255;255;0m' : '\u001B[43m',
  bgBlue: stdout.has16m ? '\u001B[48;2;0;0;255m' : '\u001B[44m',
  bgMagenta: stdout.has16m ? '\u001B[48;2;255;0;255m' : '\u001B[45m',
  bgCyan: stdout.has16m ? '\u001B[48;2;0;255;255m' : '\u001B[46m',
  bgWhite: stdout.has16m ? '\u001B[48;2;255;255;255m' : '\u001B[47m',

  bgLBlack: '\u001B[40m',
  bgLRed: stdout.has16m ? '\u001B[48;2;255;85;85m' : '\u001B[41m',
  bgLGreen: stdout.has16m ? '\u001B[48;2;85;255;85m' : '\u001B[42m',
  bgLYellow: stdout.has16m ? '\u001B[48;2;255;255;85m' : '\u001B[43m',
  bgLBlue: stdout.has16m ? '\u001B[48;2;85;85;255m' : '\u001B[44m',
  bgLMagenta: stdout.has16m ? '\u001B[48;2;255;85;255m' : '\u001B[45m',
  bgLCyan: stdout.has16m ? '\u001B[48;2;85;255;255m' : '\u001B[46m',
  bgLWhite: stdout.has16m ? '\u001B[48;2;255;255;255m' : '\u001B[47m',

  bgBGray: '\u001B[100m',
  bgBGrey: '\u001B[100m',
  bgBRed: stdout.has16m ? '\u001B[48;2;255;0;0m' : '\u001B[101m',
  bgBGreen: stdout.has16m ? '\u001B[48;2;0;255;0m' : '\u001B[102m',
  bgBYellow: stdout.has16m ? '\u001B[48;2;255;255;0m' : '\u001B[103m',
  bgBBlue: stdout.has16m ? '\u001B[48;2;0;0;255m' : '\u001B[104m',
  bgBMagenta: stdout.has16m ? '\u001B[48;2;255;0;255m' : '\u001B[105m',
  bgBCyan: stdout.has16m ? '\u001B[48;2;0;255;255m' : '\u001B[106m',
  bgBWhite: stdout.has16m ? '\u001B[48;2;255;255;255m' : '\u001B[107m'
};

const colors = {
  black: stdout.has16m ? '\u001B[38;2;0;0;0m' : '\u001B[30m',
  gray: stdout.has16m ? '\u001B[38;2;128;128;128m' : '\u001B[90m',
  grey: stdout.has16m ? '\u001B[38;2;128;128;128m' : '\u001B[90m',
  red: stdout.has16m ? '\u001B[38;2;255;0;0m' : '\u001B[31m',
  green: stdout.has16m ? '\u001B[38;2;0;255;0m' : '\u001B[32m',
  yellow: stdout.has16m ? '\u001B[38;2;255;255;0m' : '\u001B[33m',
  blue: stdout.has16m ? '\u001B[38;2;0;0;255m' : '\u001B[34m',
  magenta: stdout.has16m ? '\u001B[38;2;255;0;255m' : '\u001B[35m',
  cyan: stdout.has16m ? '\u001B[38;2;0;255;255m' : '\u001B[36m',
  white: stdout.has16m ? '\u001B[38;2;255;255;255m' : '\u001B[37m',

  lblack: '\u001B[30m',
  lred: stdout.has16m ? '\u001B[38;2;255;85;85m' : '\u001B[31m',
  lgreen: stdout.has16m ? '\u001B[38;2;85;255;85m' : '\u001B[32m',
  lyellow: stdout.has16m ? '\u001B[38;2;255;255;85m' : '\u001B[33m',
  lblue: stdout.has16m ? '\u001B[38;2;85;85;255m' : '\u001B[34m',
  lmagenta: stdout.has16m ? '\u001B[38;2;255;85;255m' : '\u001B[35m',
  lcyan: stdout.has16m ? '\u001B[38;2;85;255;255m' : '\u001B[36m',
  lwhite: stdout.has16m ? '\u001B[38;2;255;255;255m' : '\u001B[37m',

  bgray: '\u001B[90m',
  bgrey: '\u001B[90m',
  bred: stdout.has16m ? '\u001B[38;2;255;0;0m' : '\u001B[91m',
  bgreen: stdout.has16m ? '\u001B[38;2;0;255;0m' : '\u001B[92m',
  byellow: stdout.has16m ? '\u001B[38;2;255;255;0m' : '\u001B[93m',
  bblue: stdout.has16m ? '\u001B[38;2;0;0;255m' : '\u001B[94m',
  bmagenta: stdout.has16m ? '\u001B[38;2;255;0;255m' : '\u001B[95m',
  bcyan: stdout.has16m ? '\u001B[38;2;0;255;255m' : '\u001B[96m',
  bwhite: stdout.has16m ? '\u001B[38;2;255;255;255m' : '\u001B[97m'
};

const styles = {
  reset: '\u001B[0m',
  bold: '\u001B[1m',
  dim: '\u001B[2m',
  italic: '\u001B[3m',
  underline: '\u001B[4m',
  inverse: '\u001B[7m',
  hidden: '\u001B[8m',
  strikethrough: '\u001B[9m'
};

const bgs = Object.keys(backgrounds);
const cls = Object.keys(colors);
const sty = Object.keys(styles);

const checkAvailability = (from, item) => {
  if (from === 'backgrounds') return bgs.includes(item);
  else if (from === 'colors') return cls.includes(item);
  else if (from === 'styles') return sty.includes(item);
  else return false;
};

const get = (from, item) => {
  if (typeof from !== 'string' || typeof item !== 'string') throw new Error('The parameters must be a string value.');

  item = from === 'backgrounds' ? (!bgs.includes(item) ? bgs.includes('bg' + item.charAt(0).toUpperCase() + item.slice(1)) ? 'bg' + item.charAt(0).toUpperCase() + item.slice(1) : item : item) : item;

  if (!checkAvailability(from, item)) return false;
  else if (from === 'backgrounds') return backgrounds[item];
  else if (from === 'colors') return colors[item];
  else if (from === 'styles') return styles[item];
  else return false;
};

module.exports = {
  // Hastebin Client
  hastebinURLS,

  // Logger Manager
  backgrounds,
  colors,
  styles,
  checkAvailability,
  get,
  reset: styles.reset
};
