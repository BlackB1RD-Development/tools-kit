<p align="center">
  <img width="500" src="src/logo.png" alt="Tools-Kit Logo">
  <br>
  An easy to use, powerful and multi-functionality tools-kit library for NodeJS written entirely in JavaScript.
  <br>
  <br>
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
  <a href="https://github.com/BlackB1RD-Development/tools-kit/blob/master/LICENSE.md">
    <img src="https://img.shields.io/npm/l/tools-kit.svg?style=flat-square" alt="license" />
  </a>
  <a href="https://coveralls.io/github/BlackB1RD-Development/tools-kit?branch=master">
    <img src="https://coveralls.io/repos/github/BlackB1RD-Development/tools-kit/badge.svg?branch=master" alt="Coverage Status" />
  </a>
  <a href="https://travis-ci.org/BlackB1RD-Development/tools-kit">
    <img src="https://travis-ci.org/BlackB1RD-Development/tools-kit.svg?branch=master" alt="Build" />
  </a>
  <a href="https://app.fossa.com/projects/git%2Bgithub.com%2FBlackB1RD-Development%2Ftools-kit?ref=badge_shield" alt="FOSSA Status">
    <img src="https://app.fossa.com/api/projects/git%2Bgithub.com%2FBlackB1RD-Development%2Ftools-kit.svg?type=shield"/>
  </a>
  <a href="https://github.com/BlackB1RD-Development/tools-kit">
    <img src="https://img.shields.io/badge/code_style-XO-5ed9c7.svg" alt="Code Style" />
  </a>
  <br />
  <a href="https://nodei.co/npm/tools-kit/">
    <img src="https://nodei.co/npm/tools-kit.png">
  </a>
  <br />
  <sub>© <a href="https://www.npmjs.com/package/tools-kit">Tools-Kit</a> By <a href="https://github.com/BlackB1RD-Development">BlackB1RD-Development</a> (Author: <a href="https://github.com/RealBlackB1RD">@RealBlackB1RD</a>). All rights reserved ©</sub>
</p>

# Features

- A [**Hastebin**][hastebin] Client that can post and fetch code easily from [**Hastebin**][hastebin].
- A Logger Manager that can log a styled and colored text into the console.
- A Styles Manager that can transfer your simple text into a styled and modern one.
- A collection of easy to use and useful functions.
- Extremely configurable and debuggable.
- Well documented.

# Install

## NPM Through GitHub

```console
npm install BlackB1RD-Development/tools-kit --save
```

## NPM

```console
npm install tools-kit --save
```

## Yarn

```console
yarn add tools-kit
```

# Documentations

Read the [**Documentations**][documentations] for more information about each method.

# Table of Content

#### Click to jump between class examples

|              Class  Name              |                                 Class Description                                  |
|            ---------------            |   ------------------------------------------------------------------------------   |
|[**Hastebin Client**](#hastebin-client)|              Post and fetch code easily from [**Hastebin**][hastebin]              |
| [**Logger Manager**](#logger-manager) |                   Log a styled and colored text into the console                   |
| [**Styles Manager**](#styles-manager) |    Transfer your simple text into a styled and modern one (Console support only)   |
|      [**Utilities**](#utilities)      |                  A collection of easy to use and useful functions                  |

## Hastebin Client

With the [**Hastebin**][hastebin] Client you can post and fetch code easily from [**Hastebin**][hastebin].

```javascript
const { logger, hastebin } = require('tools-kit');

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.success({ tag: 'POST RES' }, postRes);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postRes.link)
      .then(getRes => {
        logger.success({ tag: 'GET RES' }, getRes);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getErr => {
        logger.error({ tag: 'GET ERROR' }, getErr);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Error: Get Error
      });
  })
  .catch(postErr => {
    logger.error({ tag: 'POST ERROR' }, postErr);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Error: Post Error
  });
```

## Logger Manager

With the Logger Manager you can log a styled and colored text into the console with pre made logging settings in each method.

```javascript
const { logger } = require('tools-kit');

logger.log('content');
// Console > [20/02/2020 - 00:00:00 | LOG]: content

logger.important('Important log');
// Console > [20/02/2020 - 00:00:00 | IMPORTANT]: Important log

logger.success('Success log');
// Console > [20/02/2020 - 00:00:00 | SUCCESS]: Success log

logger.fatal('Fatal log');
// Console > [20/02/2020 - 00:00:00 | FATAL]: Fatal log

logger.trace('Trace log');
// Console > [20/02/2020 - 00:00:00 | TRACE]: Trace log

logger.error('Error log');
// Console > [20/02/2020 - 00:00:00 | ERROR]: Error log

logger.debug('Debug log');
// Console > [20/02/2020 - 00:00:00 | DEBUG]: Debugging log

logger.info('Information log');
// Console > [20/02/2020 - 00:00:00 | INFO]: Information log

logger.warn('Warning log');
// Console > [20/02/2020 - 00:00:00 | WARN]: Warning log

logger.figlet('FIGLET', 'LOG');
/*
  Console > [20/02/2020 - 00:00:00 | FIGLET]:   _____ ___ ____ _     _____ _____   _     ___   ____
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  |  ___|_ _/ ___| |   | ____|_   _| | |   / _ \ / ___|
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |_   | | |  _| |   |  _|   | |   | |  | | | | |  _
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  |  _|  | | |_| | |___| |___  | |   | |__| |_| | |_| |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  |_|   |___\____|_____|_____| |_|   |_____\___/ \____|
  Console > [20/02/2020 - 00:00:00 | FIGLET]:
*/
```

Using custom options:

```javascript
const { logger } = require('tools-kit');

// Support custom logging options and rewriting of existing methods settings
const scsSettings = {
    time: 'H:mm',
    tag: 'PUBLISH SUCCESS',
    format: (options) => {
      return `[${options.tag}]: Published ${options.content} successfully at ${options.time}`;
    }
  }, errSettings = {
    time: 'H:mm',
    tag: 'PUBLISH ERROR',
    format: (options) => {
      return `[${options.tag}]: Couldn't publish ${options.content} at ${options.time}`;
    }
  }, settings = {
    tag: 'PUBLISH API',
    format: (options) => {
      return `[${options.tag}]: Publish API ${options.content} | Last Check: ${options.time}`;
    }
  }, figSettings = {
    figlet: {
      font: 'Ghost',
      verticalLayout: 'default',
      horizontalLayout: 'default'
    },
    log: {
      name: 'figlet',
      options: {
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'log',
        time: 'MM/DD/YY',
        tag: true,
        format: (options) => {
          return !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;
        }
      }
    }
  }, image = {
    name: 'logo.png',
    size: '5MB'
  }, api = {
    message: 'Internal Server Error',
    code: '500'
  };

logger.success(scsSettings, 'image named "%s" with a total size of %s', image.name, image.size);
// Console > [PUBLISH SUCCESS]: Published image named "logo.png" with a total size of 5MB successfully at 20:00

logger.error(errSettings, 'image named "%s" with a total size of %s', image.name, image.size);
// Console > [PUBLISH ERROR]: Couldn't publish image named "logo.png" with a total size of 5MB at 20:00

logger.info(settings, 'respond with %s status code and "%s" message', api.code, api.message);
// Console > [PUBLISH API]: Publish API respond with 500 status code and "Internal Server Error" message | Last Check: 20/2/2020 - 20:00:00

logger.log({ time: false }, 'log', 'no time');
// Console > [LOG]: log no time

logger.figlet(figSettings, 'Boo');
/*
  Console > [20/02/2020 - 00:00:00 | FIGLET]: .-. .-')
  Console > [20/02/2020 - 00:00:00 | FIGLET]: \  ( OO )
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  ;-----.\  .-'),-----.  .-'),-----.
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | .-.  | ( OO'  .-.  '( OO'  .-.  '
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | '-' /_)/   |  | |  |/   |  | |  |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | .-. `. \_) |  |\|  |\_) |  |\|  |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | |  \  |  \ |  | |  |  \ |  | |  |
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  | '--'  /   `'  '-'  '   `'  '-'  '
  Console > [20/02/2020 - 00:00:00 | FIGLET]:  `------'      `-----'      `-----'
*/

logger.log({ time: 'MM-DD-YY' }, 'log', 'custom time format');
// Console > [02-20-2020 | LOG]: log custom time format

logger.log({ tag: false }, 'log', 'no tag');
// Console > [20/02/2020 - 00:00:00]: log no tag

logger.log({ tag: 'CUSTOM TAG' }, 'log', 'custom tag');
// Console > [20/02/2020 - 00:00:00 | CUSTOM TAG]: log custom tag

logger.log({ time: false, tag: false }, 'log', 'no tag', 'no time');
// Console > log no tag no time

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

See more backgrounds, colors, styles & consoles types by clicking [**here**](#logger-options)

## Styles Manager

With the Styles Manager you can transfer your simple text into a styled and modern one.

```javascript
const { logger, style } = require('tools-kit');

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
```

Using pre-made cool colors maps:

```javascript
const { logger, color } = require('tools-kit');

logger.log({ tag: 'RAINBOW' }, styles.rainbow('rainbow styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RAINBOW]: rainbow styled-text normal text

logger.log({ tag: 'RANDOM' }, styles.random('random styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | RANDOM]: random styled-text normal text

logger.log({ tag: 'ZEBRA' }, styles.zebra('zebra styled-text'), 'normal text');
// Console > [20/02/2020 - 00:00:00 | ZEBRA]: zebra styled-text normal text
```

## Utilities

With Tools-Kit Utilities you can use the functions that everyone uses in one simple line.

```javascript
const { logger, util } = require('tools-kit');

logger.log({ tag: 'HAS?' }, util.has({}, 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'name', 'test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has({ name: 'test' }, 'name', 'not test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has(['name', 'test'], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has(['test', 'not test'], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([{ 'name': 'not test' }, { 'name': 'test' }], 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'HAS?' }, util.has([{ 'name': 'not test' }, { 'name': 'test' }], 'test', 'name'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: false

logger.log({ tag: 'HAS?' }, util.has([{ 'name': 'not test' }, { 'name': 'test' }], 'name', 'test'));
// Console > [20/02/2020 - 00:00:00 | HAS?]: true

logger.log({ tag: 'ARRAY?' }, util.isArray(new Array()));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: true

logger.log({ tag: 'ARRAY?' }, util.isArray(new Object()));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: false

logger.log({ tag: 'ARRAY?' }, util.isArray([]));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: true

logger.log({ tag: 'ARRAY?' }, util.isArray({}));
// Console > [20/02/2020 - 00:00:00 | ARRAY?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject(new Object()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'OBJECT?' }, util.isObject(new Array()));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'OBJECT?' }, util.isObject({}));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: true

logger.log({ tag: 'OBJECT?' }, util.isObject([]));
// Console > [20/02/2020 - 00:00:00 | OBJECT?]: false

logger.log({ tag: 'RANDOM ITEM' }, util.randomItem(['cat', 'dog', 'fish']));
// Console > [20/02/2020 - 00:00:00 | RANDOM ITEM]: fish

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10));
// Console > [20/02/2020 - 00:00:00 | RANDOM NUMBER]: 8

logger.log({ tag: 'RANDOM NUMBER' }, util.randomNumber(5, 10, false)); // Default is true
// Console > [20/02/2020 - 00:00:00 | RANDOM NUMBER]: 9.478004123859458
```

## Logger Options

### options.background

- `bgBlack`
- `bgGray`
- `bgGrey`
- `bgRed`
- `bgGreen`
- `bgYellow`
- `bgBlue`
- `bgMagenta`
- `bgCyan`
- `bgWhite`

#### Light Backgrounds

- `bgLBlack`
- `bgLRed`
- `bgLGreen`
- `bgLYellow`
- `bgLBlue`
- `bgLMagenta`
- `bgLCyan`
- `bgLWhite`

#### Bright Backgrounds

- `bgBGray`
- `bgBGrey`
- `bgBRed`
- `bgBGreen`
- `bgBYellow`
- `bgBBlue`
- `bgBMagenta`
- `bgBCyan`
- `bgBWhite`

### options.colors

- `black`
- `gray`
- `grey`
- `red`
- `green`
- `yellow`
- `blue`
- `magenta`
- `cyan`
- `white`

#### Light Colors

- `lblack`
- `lred`
- `lgreen`
- `lyellow`
- `lblue`
- `lmagenta`
- `lcyan`
- `lwhite`

#### Bright Colors

- `bgray`
- `bgrey`
- `bred`
- `bgreen`
- `byellow`
- `bblue`
- `bmagenta`
- `bcyan`
- `bwhite`

### options.style

- `reset` - Resets the current color to the default console color.
- `bold` - Make the text bold.
- `dim` - Emitting only a small amount of the text light.
- `italic` - Make the text *italic* styled - **Not widely supported**
- `underline` - Make the text _underline_ styled - **Not widely supported**
- `inverse`- Inverse the background and the foreground colors.
- `hidden` - Prints the text, but makes it invisible.
- `strikethrough` - Puts a horizontal line through the center of the text - **Not widely supported**

### options.type

- `log` - Prints to `stdout` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
- `error` - Prints to `stderr` with newline. Multiple arguments can be passed, with the first used as the primary message and all additional used as substitution values similar to `printf(3)` (the arguments are all passed to `util.format()`).
- `trace` - Prints to `stderr` the string 'Trace: ', followed by the `util.format()` formatted message and stack trace to the current position in the code.
- `debug`- The `console.debug()` function is an alias for `console.log()`.
- `info` - The `console.info()` function is an alias for `console.log()`.
- `warn` - The `console.warn()` function is an alias for `console.error()`.

### options.time

#### The `options.time` can be either of this two

- `Boolean` (true/false) - If to include the current time and date with the stock format when logging (Stock used [**moment**][moment] format: DD/M/YYYY - H:mm:ss)
- `String` - A custom [**moment**][moment] time format to use when logging

### options.tag

#### The `options.tag` can be either of this two

- `Boolean` (true/false) - If to include the a tag when logging
- `String` - A custom string value to use as a tag when logging (Case sensitive)

# Author

- [**BlackB1RD**][blackb1rd]

# Maintainers

- [**BlackB1RD-Development**][blackb1rd-development]

See also the list of [**contributors**](contributors) who participated in this project.

# Changelog

See the [**Changes Log**][changelog] for more information about each update.

# License

[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FBlackB1RD-Development%2Ftools-kit.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FBlackB1RD-Development%2Ftools-kit?ref=badge_large)

# Related Modules

- [**supports-color**][supports-color] — Detect whether a terminal supports color.
- [**color-convert**][color-convert] — Plain color conversion functions.
- [**node-fetch**][node-fetch] — A light-weight module that brings window.fetch to Node.js.
- [**moment**][moment] — A lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
- [**figlet**][figlet] — Creates ASCII Art from text. A full implementation of the FIGfont spec.

[hastebin]:https://hastebin.com/about.md
[changelog]:https://github.com/BlackB1RD-Development/tools-kit/blob/master/CHANGELOG.md
[contributors]:https://github.com/BlackB1RD-Development/tools-kit/contributors
[documentations]:https://tools-kit.js.org/api
[supports-color]: https://www.npmjs.com/package/supports-color
[color-convert]: https://www.npmjs.com/package/color-convert
[node-fetch]: https://www.npmjs.com/package/node-fetch
[moment]: https://www.npmjs.com/package/moment
[figlet]: https://www.npmjs.com/package/figlet
[blackb1rd]: https://github.com/RealBlackB1RD
[blackb1rd-development]: https://github.com/BlackB1RD-Development
