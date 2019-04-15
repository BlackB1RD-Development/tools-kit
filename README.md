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
  <a href="https://nodei.co/npm/tools-kit/">
    <img src="https://nodei.co/npm/tools-kit.png">
  </a>
  <br />
  <sub>© <a href="https://www.npmjs.com/package/tools-kit">Tools-Kit</a> By <a href="https://github.com/BlackB1RD-Development">BlackB1RD-Development</a> (<b><a href="https://github.com/RealBlackB1RD">@RealBlackB1RD</a></b>). All rights reserved ©</sub>
</p>

## Features

- A [**Hastebin**][hastebin] Client that can publish your beautiful code online or fetching an existing one.
- A Logger Manager that can style your logs with all the known Node.js console methods.
- A Color Manager that can style your text in all the possible ways.
- Easy to use and useful utilities that everyone use 😉
- Extremely configurable and debuggable.
- Well documented.

## Installation

```console
npm install tools-kit
```

## Class Examples

Click to jump between class examples:

|     Class  Name     |                                 Class Description                                  |
|   ---------------   |   ------------------------------------------------------------------------------   |
|   Hastebin Client   |              Post and fetch code easily from [**Hastebin**][hastebin]              |
|        Logger       |                   Log a styled and colored text into the console                   |
|        Color        |    Transfer your simple text into a styled and modern one (Console support only)   |
|        Util         |           A collection of functions that everyone use in one simple line           |

## Tools-Kit Hastebin Client

With Tools-Kit [**Hastebin**][hastebin] Client you can post and fetch code easily from [**Hastebin**][hastebin].

```javascript
const { logger, hastebin } = require('tools-kit');

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.log({ background: 'black', color: 'green', type: 'log', tag: 'POST RES' }, postRes);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postRes.link)
      .then(getRes => {
        logger.log({ background: 'black', color: 'green', type: 'log', tag: 'GET RES' }, getRes);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getErr => {
        logger.log({ background: 'black', color: 'red', type: 'error', tag: 'GET ERROR' }, getErr);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Get Error
      });
  })
  .catch(postErr => {
    logger.log({ background: 'black', color: 'red', type: 'error', tag: 'POST ERROR' }, postErr);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Post Error
  });
```

## Tools-Kit Logger Manager

With Tools-Kit Logger Manager you can log a styled and colored text into the console.

```javascript
const { logger } = require('tools-kit');

logger.log('content');
// Console > [20/02/2020 - 00:00:00 | LOG]: content
```

Settings custom styling options:

```javascript
const { logger } = require('tools-kit');

const settings = { // Support custom log options
  background: 'black',
  color: 'blue',
  style: 'bold',
  type: 'info',
  time: true,
  tag: 'Black & Blue'
};

logger.log('content');
// Console > [20/02/2020 - 00:00:00 | LOG]: content

logger.log(settings, 'content');
// Console > [20/02/2020 - 00:00:00 | Black & Blue]: content

logger.log({ time: false }, 'log', 'no time');
// Console > [LOG]: log no time

logger.log({ time: 'MM-DD-YY' }, 'log', 'custom time format');
// Console > [02-20-2020 | LOG]: log custom time format

logger.log({ tag: false }, 'log', 'no tag');
// Console > [20/02/2020 - 00:00:00]: log no tag

logger.log({ tag: 'CUSTOM TAG' }, 'log', 'custom tag');
// Console > [20/02/2020 - 00:00:00 | CUSTOM TAG]: log custom tag

logger.log({ time: false, tag: false }, 'log', 'not tag', 'no time');
// Console > log not tag no time

logger // Support chain logging
  .log({ tag: 'FIRST LOG' }, 'First content')
  .log({ tag: 'SECOND LOG' }, 'Second content')
  .log({ tag: 'THIRD LOG' }, 'Third content');
/*
  Console > [20/02/2020 - 00:00:00 | FIRST LOG]: First content
  Console > [20/02/2020 - 00:00:00 | SECOND LOG]: Second content
  Console > [20/02/2020 - 00:00:00 | THIRD LOG]: Third content
*/
```

## Tools-Kit Color Manager

With Tools-Kit Color Manager you can transfer your simple text into a styled and modern one.

```javascript
// Requires - Files
const { logger, color } = require('tools-kit');

logger.log({ tag: 'STYLE' }, color.style({ background: 'gray' }, 'styled background'), 'normal background');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled background normal background

logger.log({ tag: 'STYLE' }, color.style({ color: 'red' }, 'styled color'), 'normal color');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled color normal color

logger.log({ tag: 'STYLE' }, color.style({ style: 'bold' }, 'styled style'), 'normal style');
// Console > [20/02/2020 - 00:00:00 | STYLE]: styled style normal style
```

Using premade cool colors maps:

```javascript
const { logger, color } = require('tools-kit');

logger.log({ tag: 'RAINBOW' }, color.rainbow('rainbow styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RAINBOW]: rainbow styled-text normal text

logger.log({ tag: 'RANDOM' }, color.random('random styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RANDOM]: random styled-text normal text

logger.log({ tag: 'ZABRA' }, color.zabra('zabra styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | ZABRA]: zabra styled-text zabra styled-text normal text
```

## Tools-Kit Utilities

With Tools-Kit Utilities you can use the functions that everyone uses in one simple line.

```javascript
const { logger, util } = require('tools-kit');

logger.log({ tag: 'OBJECT?' }, util.isObject(new Array()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject(new Object()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'OBJECT?' }, util.isObject([]));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject({}));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'RANDOM ITEM' }, util.randomItem(['cat', 'dog', 'fish']));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: dog

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: 7
```

## License

[**MIT**][license]

## Changelog

See the [**Changes Log**][changelog] for more information about each update.

## Documentations

Read the [**Documentations**][documentations] for more information about each method.

## Related Modules

- [node-fetch][node-fetch] — A light-weight module that brings window.fetch to Node.js.
- [moment][moment] — A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [figlet][figlet] — Creates ASCII Art from text. A full implementation of the FIGfont spec.

## Maintainers

- [BlackB1RD][blackb1rd]
- [JamesParkDev][james]

[hastebin]:https://hastebin.com/about.md
[license]:https://github.com/BlackB1RD-Development/tools-kit/blob/master/LICENSE.md
[changelog]:https://github.com/BlackB1RD-Development/tools-kit/blob/master/CHANGELOG.md
[documentations]:https://tools-kit.js.org/api
[node-fetch]: https://www.npmjs.com/package/node-fetch
[moment]: https://www.npmjs.com/package/moment
[figlet]: https://www.npmjs.com/package/figlet
[blackb1rd]: https://github.com/RealBlackB1RD
[james]: https://github.com/JamesParkDev