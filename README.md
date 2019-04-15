<p align="center">An easy to use, powerful and multi-functionality tools-kit library for NodeJS written entirely in JavaScript.</p>

<p align="center">
  <a href="https://www.npmjs.com/package/tools-kit">
    <img src="https://img.shields.io/npm/v/tools-kit.svg?style=flat-square" alt="npm" />
  </a>
  <a href="https://github.com/BlackB1RD-Development/tools-kit">
    <img src="https://img.shields.io/github/release/BlackB1RD-Development/tools-kit.svg?style=flat-square" alt="release" />
  </a>
  <a href="https://www.npmjs.com/package/tools-kit">
    <img src="https://img.shields.io/npm/dt/tools-kit.svg?style=flat-square" alt="downloads" />
  </a>
  <a href="https://www.npmjs.com/package/tools-kit">
    <img src="https://img.shields.io/node/v/tools-kit.svg?style=flat-square" alt="node" />
  </a>
  <a href="https://david-dm.org/BlackB1RD-Development/tools-kit">
    <img src="https://david-dm.org/BlackB1RD-Development/tools-kit.svg?style=flat-square" alt="dependencies" />
  </a>
  <a href="https://github.com/BlackB1RD-Development/tools-kit/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/tools-kit.svg?style=flat-square" alt="license" />
  </a>
  <a href="https://coveralls.io/github/BlackB1RD-Development/tools-kit?branch=master">
    <img src="https://coveralls.io/repos/github/BlackB1RD-Development/tools-kit/badge.svg?branch=master" alt="Coverage Status" />
  </a>
  <a href="https://travis-ci.org/BlackB1RD-Development/tools-kit">
    <img src="https://travis-ci.org/BlackB1RD-Development/tools-kit.svg?branch=master" alt="Build" />
  </a>
  <a href="https://github.com/BlackB1RD-Development/tools-kit">
    <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style" />
  </a>
  <br />
  <sub>© <a href="https://www.npmjs.com/package/tools-kit">Tools-Kit</a> By <a href="https://github.com/BlackB1RD-Development">BlackB1RD-Development</a> (<b><a href="https://github.com/RealBlackB1RD">@RealBlackB1RD</a></b>). All rights reserved.</sub>
</p>

## Features
- A Hastebin Client that can publish your beautiful code online or fetching an existing one.
- A Logger Manager that can style your logs with all the known Node.js console methods.
- A Color Manager that can style your text in all the possible ways.
- Easy to use and useful utilities that everyone use 😉
- Extremely configurable and debuggable.
- Well documented.

## Installation
```console
npm i tools-kit
```

## Tools-Kit Hastebin Client
With Tools-Kit Hastebin Client you can post and fetch code easily from [**Hastebin**][hastebin]. 
```javascript
const tools = require('tools-kit');

const hastebin = tools.hastebin;
const logger = tools.logger;

hastebin.post('var test = "test";\n\nconsole.log(test);', '.js')
  .then(postRes => {
    logger.log({ tag: 'POST RES' }, postRes);

    hastebin.get(postRes.link)
      .then(getRes => logger.log({ tag: 'GET RES' }, getRes))
      .catch(getErr => logger.error({ tag: 'GET ERROR' }, getErr));
  })
  .catch(postErr => logger.error({ tag: 'POST ERROR' }, postErr));
```

## Tools-Kit Logger Manager
With Tools-Kit Logger Manager you can log a styled and colored text into the console.
```javascript
const tools = require('tools-kit');

const logger = tools.logger;

logger.log('content'); // This will log the content to the console with the stock console settings.
```
Settings custom styling options:
```javascript
const tools = require('tools-kit');

const logger = tools.logger;
const settings = {
    background: 'blue',
    color: 'red',
    style: 'bold',
    type: 'info',
    time: true,
    tag: 'Red & Blue'
};

logger.log(settings, 'content'); // Resulting in a blue background, red colored text, and bold styled text: [20/01/2020 - 00:00:00 | Red & Blue]: content

const options = {
    time: 'MM-DD-YY',
    tag: 'Custom Time Format'
};

logger.log(options, 'content'); // Results: [01/20/2020 | Custom Time Format]: content
```

## Tools-Kit Color Manager
With Tools-Kit Color Manager you can transfer your simple text into a styled and modern one.
```javascript
const tools = require('tools-kit');

const color = tools.color;
const logger = tools.logger;

logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled-background'), 'normal background');
logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled-color'), 'normal color');
logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled-style'), 'normal style');
```
Using premade cool colors maps:
```javascript
const tools = require('tools-kit');

const color = tools.color;
const logger = tools.logger;

logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow colored-text'), 'normal text');
logger.log({ tag: 'RANDOM' }, color.random('random colored-text'), 'normal text');
logger.log({ tag: 'ZABRA' }, color.zabra('zabra colored-text'), 'normal text');
```

## Tools-Kit Utilities
With Tools-Kit Utilities you can use the functions that everyone uses in one simple line.
```javascript
const tools = require('tools-kit');

const util = tools.util;
const logger = tools.logger;

logger.log({ tag: 'OBJECT?' }, util.isObject(         new Array)); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(        new Object)); // true
logger.log({ tag: 'OBJECT?' }, util.isObject(                [])); // false
logger.log({ tag: 'OBJECT?' }, util.isObject(                {})); // true
logger.log({ tag: 'RANDOM ITEM' }, util.randomItem([1, 2, 3, 4])); // 3
logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(   5, 10)); // 7
```

## Changelog
See the [**Changes Log**][changelog] for more information about each update.

## Documentation
Read the [**Documentations**][documentations] for more information about each method.

## License
[**MIT**][license]

## Related Modules
- [node-fetch][node-fetch] — A light-weight module that brings window.fetch to Node.js.
- [moment][moment] — A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [figlet][figlet] — Creates ASCII Art from text. A full implementation of the FIGfont spec.

[hastebin]:https://hastebin.com/about.md
[documentations]:https://tools-kit.js.org/api
[changelog]:https://github.com/BlackB1RD-Development/tools-kit/blob/master/CHANGELOG.md
[license]:https://github.com/BlackB1RD-Development/tools-kit/blob/master/LICENSE.md
[node-fetch]: https://www.npmjs.com/package/node-fetch
[moment]: https://www.npmjs.com/package/moment
[figlet]: https://www.npmjs.com/package/figlet
