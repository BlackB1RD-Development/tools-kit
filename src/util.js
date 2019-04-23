// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

const hastebinURLS = {
  regex: /(https?:\/\/www.hastebin.com|https?:\/\/hastebin.com|www.hastebin.com|hastebin.com)\/?/i,
  documentsHttpsWWW: 'https://www.hastebin.com/documents',
  documentsHttpWWW: 'http://www.hastebin.com/documents',
  documentsHttps: 'https://hastebin.com/documents',
  documentsHttp: 'http://hastebin.com/documents',
  documentsWWW: 'www.hastebin.com/documents',
  httpsWWW: 'https://www.hastebin.com',
  httpWWW: 'http://www.hastebin.com',
  https: 'https://hastebin.com',
  http: 'http://hastebin.com',
  www: 'www.hastebin.com',
  none: 'hastebin.com'
};

const backgrounds = {
  black: '\u001B[40m',
  gray: '\u001B[100m',
  grey: '\u001B[100m',

  lred: '\u001B[41m',
  lgreen: '\u001B[42m',
  lyellow: '\u001B[43m',
  lblue: '\u001B[44m',
  lmagenta: '\u001B[45m',
  lcyan: '\u001B[46m',
  lwhite: '\u001B[47m',

  bred: '\u001B[101m',
  bgreen: '\u001B[102m',
  byellow: '\u001B[103m',
  bblue: '\u001B[104m',
  bmagenta: '\u001B[105m',
  bcyan: '\u001B[106m',
  bwhite: '\u001B[107m'
};

const colors = {
  black: '\u001B[30m',
  gray: '\u001B[90m',
  grey: '\u001B[90m',

  lred: '\u001B[31m',
  lgreen: '\u001B[32m',
  lyellow: '\u001B[33m',
  lblue: '\u001B[34m',
  lmagenta: '\u001B[35m',
  lcyan: '\u001B[36m',
  lwhite: '\u001B[37m',

  bred: '\u001B[91m',
  bgreen: '\u001B[92m',
  byellow: '\u001B[93m',
  bblue: '\u001B[94m',
  bmagenta: '\u001B[95m',
  bcyan: '\u001B[96m',
  bwhite: '\u001B[97m'
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

function checkAvailability(from, item) {
  if (from === 'backgrounds') return bgs.includes(item);
  else if (from === 'colors') return cls.includes(item);
  else if (from === 'styles') return sty.includes(item);
  else return false;
}

function get(from, item) {
  if (typeof from !== 'string' || typeof item !== 'string') throw new Error('The parameters must be a string value.');

  item = item.toLowerCase();
  item = bgs.includes(item) || cls.includes(item) || sty.includes(item) ? item : 'b' + item;

  if (!checkAvailability(from, item)) return false;
  else if (from === 'backgrounds') return backgrounds[item];
  else if (from === 'colors') return colors[item];
  else if (from === 'styles') return styles[item];
  else return false;
}

module.exports = {
  // Hastebin Client
  hastebinURLS,

  // Logger Manager
  checkAvailability,
  get,
  backgrounds,
  colors,
  styles,
  reset: styles.reset
};
