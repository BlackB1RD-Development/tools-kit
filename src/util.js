// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

const hastebinURLS = {
  regex: /(https?:\/\/www.hastebin.com|https?:\/\/hastebin.com|www.hastebin.com|hastebin.com)\//i,
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

  lRed: '\u001B[41m',
  lGreen: '\u001B[42m',
  lYellow: '\u001B[43m',
  lBlue: '\u001B[44m',
  lMagenta: '\u001B[45m',
  lCyan: '\u001B[46m',
  lWhite: '\u001B[47m',

  hRed: '\u001B[101m',
  hGreen: '\u001B[102m',
  hYellow: '\u001B[103m',
  hBlue: '\u001B[104m',
  hMagenta: '\u001B[105m',
  hCyan: '\u001B[106m',
  hWhite: '\u001B[107m'
};

const colors = {
  black: '\u001B[30m',
  gray: '\u001B[90m',
  grey: '\u001B[90m',

  lRed: '\u001B[31m',
  lGreen: '\u001B[32m',
  lYellow: '\u001B[33m',
  lBlue: '\u001B[34m',
  lMagenta: '\u001B[35m',
  lCyan: '\u001B[36m',
  lWhite: '\u001B[37m',

  hRed: '\u001B[91m',
  hGreen: '\u001B[92m',
  hYellow: '\u001B[93m',
  hBlue: '\u001B[94m',
  hMagenta: '\u001B[95m',
  hCyan: '\u001B[96m',
  hWhite: '\u001B[97m'
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

const consoles = ['log', 'info', 'error', 'trace', 'warn', 'debug'];

module.exports = {
  // Hastebin Client
  hastebinURLS,

  // Logger Manager
  checkAvailability: function (from, item) {
    if (typeof from !== 'string' || typeof item !== 'string') return new Error('The parameters must be a string value.');

    item = item.toLowerCase();

    const bgs = Object.keys(backgrounds);
    const cls = Object.keys(colors);

    if (from === 'backgrounds') {
      if (!(cls.includes(item) && item === 'black' || item === 'gray' || item === 'grey' && item.startsWith('l') && item.startsWith('h'))) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());

      return bgs.includes(item);
    } else if (from === 'colors') {
      if (!(cls.includes(item) && item === 'black' || item === 'gray' || item === 'grey' && item.startsWith('l') && item.startsWith('h'))) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());

      return cls.includes(item);
    } else if (from === 'styles') return Object.keys(styles).includes(item);
    else if (from === 'consoles') return consoles.includes(item);
    else return false;
  },
  get: function (from, item) {
    if (typeof from !== 'string' || typeof item !== 'string') return new Error('The parameters must be a string value.');

    item = item.toLowerCase();

    if (from === 'backgrounds') {
      if (!(item === 'black' || item === 'gray' || item === 'grey' && item.startsWith('l') && item.startsWith('h'))) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());

      return backgrounds[item];
    } else if (from === 'colors') {
      if (!(item === 'black' || item === 'gray' || item === 'grey' && item.startsWith('l') && item.startsWith('h'))) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());

      return colors[item];
    } else if (from === 'styles') return styles[item];
    else if (from === 'consoles') return consoles[item];
    else return false;
  },
  backgrounds,
  consoles,
  colors,
  styles,
  reset: styles.reset
};
