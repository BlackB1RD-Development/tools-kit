// tools-kit 1.0.0
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
  black: "\x1b[40m",
  gray: "\x1b[100m",
  grey: "\x1b[100m",

  lRed: "\x1b[41m",
  lGreen: "\x1b[42m",
  lYellow: "\x1b[43m",
  lBlue: "\x1b[44m",
  lMagenta: "\x1b[45m",
  lCyan: "\x1b[46m",
  lWhite: "\x1b[47m",

  hRed: "\x1b[101m",
  hGreen: "\x1b[102m",
  hYellow: "\x1b[103m",
  hBlue: "\x1b[104m",
  hMagenta: "\x1b[105m",
  hCyan: "\x1b[106m",
  hWhite: "\x1b[107m",
};

const colors = {
  black: "\x1b[30m",
  gray: "\x1b[90m",
  grey: "\x1b[90m",

  lRed: "\x1b[31m",
  lGreen: "\x1b[32m",
  lYellow: "\x1b[33m",
  lBlue: "\x1b[34m",
  lMagenta: "\x1b[35m",
  lCyan: "\x1b[36m",
  lWhite: "\x1b[37m",

  hRed: "\x1b[91m",
  hGreen: "\x1b[92m",
  hYellow: "\x1b[93m",
  hBlue: "\x1b[94m",
  hMagenta: "\x1b[95m",
  hCyan: "\x1b[96m",
  hWhite: "\x1b[97m",
};

const styles = {
  reset: "\x1b[0m",
  bold: "\x1b[1m",
  dim: "\x1b[2m",
  italic: "\x1b[3m",
  underline: "\x1b[4m",
  inverse: "\x1b[7m",
  hidden: "\x1b[8m",
  strikethrough: "\x1b[9m"
};

const consoles = {
  log: console.log,
  info: console.info,
  error: console.error,
  trace: console.trace,
  warn: console.warn,
  debug: console.debug
};

function checkAvailable(from, item) {
  if (typeof from !== 'string' || typeof item !=='string' || typeof from !== 'string' && typeof item !=='string') return new Error('The parameters must be a string value.')

  item = item.toLowerCase();

  const bgs = Object.keys(backgrounds);
  const cls = Object.keys(colors);
  const sty = Object.keys(styles);
  const con = Object.keys(consoles);

  if (from === 'backgrounds') {
    const bgsInclude = bgs.includes(item) ? true : false;

    if (!bgsInclude) {
      if (item === 'black' || item === 'gray' || item === 'grey') item = item;
      else if (!item.startsWith('l') && !item.startsWith('h')) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    }

    return bgs.includes(item) ? true : false;
  } else if (from === 'colors') {
    const clsInclude = cls.includes(item) ? true : false;

    if (!clsInclude) {
      if (item === 'black' || item === 'gray' || item === 'grey') item = item;
      else if (!item.startsWith('l') && !item.startsWith('h')) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());
    }

    return cls.includes(item) ? true : false;
  } else if (from === 'styles') return sty.includes(item) ? true : false;
  else if (from === 'consoles') return con.includes(item) ? true : false;
  else return new Error('Invalid from name.');
}

function get(from, item) {
  if (typeof from !== 'string' || typeof item !=='string' || typeof from !== 'string' && typeof item !=='string') return new Error('The parameters must be a string value.')

  item = item.toLowerCase();

  if (from === 'backgrounds') {
    if (item === 'black' || item === 'gray' || item === 'grey') item = item;
    else if (!item.startsWith('l') && !item.startsWith('h')) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());    

    return backgrounds[item];
  } else if (from === 'colors') {
    if (item === 'black' || item === 'gray' || item === 'grey') item = item;
    else if (!item.startsWith('l') && !item.startsWith('h')) item = 'l' + item.replace(item.charAt(0), item.charAt(0).toUpperCase());    

    return colors[item];
  } else if (from === 'styles') return styles[item];
  else if (from === 'consoles') return consoles[item];
  else return new Error('Invalid from name.');
}

module.exports = {
  // Hastebin Client
  hastebinURLS: hastebinURLS,

  // Loggers Manager
  checkAvailable: checkAvailable,
  backgrounds: backgrounds,
  colors: colors,
  styles: styles,
  reset: styles.reset,
  get: get
};
