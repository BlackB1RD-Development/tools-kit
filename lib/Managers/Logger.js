// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Packages
const Util = require('util');
const events = require('events');
const figlet = require('figlet');
const moment = require('moment');

// Requires - Files
const { get, reset } = require('../../src/util.js');
const util = require('../Utilities/Util.js');

// Assignments
const loggerEvents = ['important', 'success', 'fatal', 'trace', 'err', 'debug', 'warn', 'info', 'figlet', 'log'];
const loggerLogs = [];
const methods = ['important', 'success', 'fatal', 'trace', 'error', 'debug', 'warn', 'info', 'figlet', 'log'];
const emitter = new events.EventEmitter();

/**
 * The package Logger Manager
 */
class Logger {
  /**
   * This method is not intended for external use!
   * @access private
   * @private
   * @returns {Logger} The Logger class
   */
  static _log(options, ...args) {
    if (!util.isObject(options)) throw new Error(`The options parameter must be an Object value, not ${typeof options}.`);
    else if (!util.isObject(options.options)) throw new Error(`The options Object must contain an options Object, not ${util.isArray(options.options) ? 'an Array' : typeof options.options}.`);

    let background = '';
    let color = '';
    let style = '';
    let type = '';
    let time = '';
    let tag = '';
    let format = options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`;

    if (typeof options.options.background === 'string') background = get('backgrounds', options.options.background);
    if (typeof options.options.color === 'string') color = get('colors', options.options.color);
    if (typeof options.options.style === 'string') style = get('styles', options.options.style);
    if (typeof options.options.type === 'string') type = options.options.type;

    if (typeof options.options.time === 'boolean' || typeof options.options.time === 'string') {
      if (typeof options.options.time === 'boolean' && options.options.time === true) time = moment().format('DD/M/YYYY - H:mm:ss');
      else if (typeof options.options.time === 'string') time = moment().format(options.options.time);
    }

    if (typeof options.options.tag === 'boolean' || typeof options.options.tag === 'string') {
      if (typeof options.options.tag === 'boolean' && options.options.tag === true) tag = options.name.toUpperCase();
      else if (typeof options.options.tag === 'string') tag = options.options.tag;
    }

    if (typeof options.options.format === 'function') format = options.options.format({ time, tag, content: Util.format(...args) });

    const settings = {
      name: options.name,
      options: {
        background: options.options.background,
        color: options.options.color,
        style: options.options.style,
        type: options.options.type,
        time: options.options.time,
        tag: options.options.tag
      },
      args: args.map(arg => typeof arg === 'string' ? arg.replace(/\\u001b\[(\d+)m/gi, '') : arg)
    };

    loggerLogs.push(settings);
    emitter.emit(settings.name === 'error' ? 'err' : settings.name, settings);

    const toLog = [`${color}${background}${style}${format}${reset}`];

    if (type === 'log') console.log(...toLog);
    else if (type === 'info') console.info(...toLog);
    else if (type === 'warn') console.warn(...toLog);
    else if (type === 'error') console.error(...toLog);
    else if (type === 'trace') console.trace(...toLog);
    else if (type === 'debug') console.debug(...toLog);
    else console.log(...toLog);

    return Logger;
  }

  /**
   * Logging a stylish important message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.important(options, ...content) or logger.important(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.important()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.important(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.important('Or just stock options');
   */
  static important(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'important',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'red',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'info',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'IMPORTANT',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Success message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.success(options, ...content) or logger.success(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.success()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.success(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.success('Or just stock options');
   */
  static success(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'success',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'green',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'info',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'SUCCESS',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Fatal Error message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.fatal(options, ...content) or logger.fatal(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.fatal()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.fatal(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.fatal('Or just stock options');
   */
  static fatal(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'fatal',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'red',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'error',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'FATAL',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Trace message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.trace(options, ...content) or logger.trace(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.trace()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.trace(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.trace('Or just stock options');
   */
  static trace(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'trace',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'gray',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'trace',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'TRACE',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Error message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.error(options, ...content) or logger.error(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.error()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.error(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.error('Or just stock options');
   */
  static error(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'error',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'red',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'error',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'ERROR',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Debug message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.debug(options, ...content) or logger.debug(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.debug()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.debug(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.debug('Or just stock options');
   */
  static debug(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'debug',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'cyan',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'info',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'DEBUG',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Information message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.info(options, ...content) or logger.info(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.info()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.info(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.info('Or just stock options');
   */
  static info(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'info',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'blue',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'info',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'INFO',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish Warning message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.warn(options, ...content) or logger.warn(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.warn()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.warn(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.warn('Or just stock options');
   */
  static warn(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'warn',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : 'yellow',
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : 'bold',
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'warn',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'WARN',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Logging a stylish text to the console using the Figlet package
   * @param {Object} [options] The options object to use with this method and the Figlet package
   * @see See {@link https://www.npmjs.com/package/figlet|https://www.npmjs.com/package/figlet} For more Figlet options
   * @param {Object} [options.figlet] The Figlet package options
   * @param {String} [options.figlet.font] A string value that indicates the FIGlet font to use.
   * @param {String} [options.figlet.verticalLayout] A string value that indicates the vertical layout to use.
   * @param {String} [options.figlet.horizontalLayout] A string value that indicates the horizontal layout to use.
   * @see See {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more Loging options
   * @param {Object} [options.log] The method options
   * @param {String} [options.log.background] A string value that indicates the background color name.
   * @param {String} [options.log.color] A string value that indicates the color name.
   * @param {String} [options.log.style] A string value that indicates the style name.
   * @param {String} [options.log.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.log.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.log.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {Function} [options.log.format] A function that returns a string value that indicates the order of the time, tag and content.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.figlet(options, ...content) or logger.figlet(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.figlet()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    // For more Figlet options see https://www.npmjs.com/package/figlet
   *    figlet: {
   *      font: 'Ghost',
   *      verticalLayout: 'default',
   *      horizontalLayout: 'default'
   *    },
   *    // For more Log options see https://www.npmjs.com/package/tools-kit
   *    log: {
   *      background: 'black',
   *      color: 'magenta',
   *      style: 'bold',
   *      type: 'log',
   *      time: true,
   *      tag: 'FIGLET IS COOL'
   *    }
   *  };
   *
   *  logger.figlet(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.figlet('Or just stock options');
   */
  static figlet(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      figlet: {
        font: options && options.font ? options.font : options.options && options.options.font ? options.options.font : options.figlet && options.figlet.font ? options.figlet.font : null,
        verticalLayout: options && options.verticalLayout ? options.verticalLayout : options.options && options.options.verticalLayout ? options.options.verticalLayout : options.figlet && options.figlet.verticalLayout ? options.figlet.verticalLayout : null,
        horizontalLayout: options && options.horizontalLayout ? options.horizontalLayout : options.options && options.options.horizontalLayout ? options.options.horizontalLayout : options.figlet && options.figlet.horizontalLayout ? options.figlet.horizontalLayout : null
      },
      log: {
        name: options && options.name ? options.name : options.log && options.log.name ? options.log.name : 'figlet',
        options: {
          background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : options.log && options.log.background ? options.log.background : null,
          color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : options.log && options.log.color ? options.log.color : 'white',
          style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : options.log && options.log.style ? options.log.style : 'bold',
          type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : options.log && options.log.type ? options.log.type : 'log',
          time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : options.log && options.log.time ? options.log.time : true,
          tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : options.log && options.log.tag ? options.log.tag : 'FIGLET',
          format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options.log && options.log.format ? options.log.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
        },
        args: content
      }
    };

    const toLog = figlet.textSync(Util.format(...content), settings.figlet);

    toLog.split('\n').forEach(line => {
      this._log(settings.log, line);
    });

    return Logger;
  }

  /**
   * Logging a stylish Log message to the console
   * @param {Object} [options] The options object to use with this method
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more information
   * @param {String} [options.background] A string value that indicates the background color name.
   * @param {String} [options.color] A string value that indicates the color name.
   * @param {String} [options.style] A string value that indicates the style name.
   * @param {String} [options.type] A string value that indicates the console type. (NodeJS 'console' methods)
   * @param {(Boolean | String)} [options.time] A string value that indicates a time format (moment package format), or a boolean value that indicates if to use a default time format.
   * @param {(Boolean | String)} [options.tag] A string value that indicates a tag name, or a boolean value that indicates if to use a tag when logging.
   * @param {...any} args Either the content or the options and the content to log into the console. logger.log(options, ...content) or logger.log(...content)
   * @returns {Logger} The Logger class
   * @example <caption>Example usage of 'Logger.log()' method.</caption>
   *  const { logger } = require('tools-kit');
   *  const options = {
   *    background: 'black',
   *    color: 'green',
   *    style: 'bold',
   *    type: 'log',
   *    time: true,
   *    tag: 'CUSTOM OPTIONS'
   *  };
   *
   *  logger.log(options, 'Some text', 'More text', 'And even more text!!!');
   *  logger.log('Or just stock options');
   */
  static log(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options ? args.slice(1) : args;
    const settings = {
      name: options.name ? options.name : 'log',
      options: {
        background: options && options.background ? options.background : options.options && options.options.background ? options.options.background : null,
        color: options && options.color ? options.color : options.options && options.options.color ? options.options.color : null,
        style: options && options.style ? options.style : options.options && options.options.style ? options.options.style : null,
        type: options && options.type ? options.type : options.options && options.options.type ? options.options.type : 'log',
        time: options && (typeof options.time === 'string' || typeof options.time === 'boolean') ? options.time : options.options && (typeof options.options.time === 'string' || typeof options.options.time === 'boolean') ? options.options.time : true,
        tag: options && (typeof options.tag === 'string' || typeof options.tag === 'boolean') ? options.tag : options.options && (typeof options.options.tag === 'string' || typeof options.options.tag === 'boolean') ? options.options.tag : 'LOG',
        format: options && options.format ? options.format : options.options && options.options.format ? options.options.format : options => !options.time && !options.tag ? options.content : !options.time ? `[${options.tag}]: ${options.content}` : !options.tag ? `[${options.time}]: ${options.content}` : `[${options.time} | ${options.tag}]: ${options.content}`
      },
      args: content
    };

    return this._log(settings, ...content);
  }

  /**
   * Listen once to a logger event
   * @param {String | Symbol} event The event name to listen to
   * @param {...any} args Functions to run when the event is triggered
   * @returns {emitter} Returns the EventEmitter Class
   */
  static once(event, ...args) {
    if (!loggerEvents.includes(event)) throw new Error(`${event} is an invalid event name.\nAvailable events: ${loggerEvents.join(', ')}`);

    return emitter.once(event, ...args);
  }

  /**
   * Listen to a logger event
   * @param {string | symbol} event The event name to listen to
   * @param {...any} args Functions to run when the event is triggered
   * @returns {emitter} Returns the EventEmitter Class
   */
  static on(event, ...args) {
    if (!loggerEvents.includes(event)) throw new Error(`${event} is an invalid event name.\nAvailable events: ${loggerEvents.join(', ')}`);

    return emitter.on(event, ...args);
  }

  /**
   * A list of all the logger methods
   * @returns {Array} All the logger methods
   * @readonly
   */
  static get methods() {
    return methods;
  }

  /**
   * A list of all the logger events
   * @returns {Array} All the logger events
   * @readonly
   */
  static get events() {
    return loggerEvents;
  }

  /**
   * An array with all the logger logging history
   * @returns {Array} All the logger logs
   * @readonly
   */
  static get logs() {
    return loggerLogs;
  }
}

module.exports = Logger;
