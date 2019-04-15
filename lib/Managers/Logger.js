// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Packages
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
   * @access private
   * @private
   * @param {Object} settings The log settings to pass when logging into the console
   * @param {...any} args The arguments to pass when logging into the console
   * @returns {Logger}
   */
  static _log(settings, ...args) {
    if (!util.isObject(settings)) return new Error('The log settings must be an Object.');
    else if (!settings.options) return new Error('The log settings must have an options Object.');
    else if (settings.options && !util.isObject(settings.options)) return new Error('The log settings options must be an Object.');

    let background = '';
    let color = '';
    let style = '';
    let type = '';
    let time = '';
    let tag = '';

    if (typeof settings.options.background === 'string') background = get('backgrounds', settings.options.background);
    if (typeof settings.options.color === 'string') color = get('colors', settings.options.color);
    if (typeof settings.options.style === 'string') style = get('styles', settings.options.style);
    if (typeof settings.options.type === 'string') type = settings.options.type;

    if (typeof settings.options.time === 'boolean' || typeof settings.options.time === 'string') {
      if (typeof settings.options.time === 'boolean' && settings.options.time === true) time = moment().format('DD/M/YYYY - H:mm:ss');
      else if (typeof settings.options.time === 'string') time = moment().format(settings.options.time);
    }

    if (typeof settings.options.tag === 'boolean' || typeof settings.options.tag === 'string') {
      if (typeof settings.options.tag === 'boolean' && settings.options.tag === true) tag = settings.name.toUpperCase();
      else if (typeof settings.options.tag === 'string') tag = settings.options.tag;
    }

    const prefix = time.length > 0 && tag.length > 0 ? `[${time} | ${tag}]: ` : time.length > 0 && tag.length <= 0 ? `[${time}]: ` : time.length <= 0 && tag.length > 0 ? `[${tag}]: ` : '';
    const logSettings = {
      name: settings.name,
      options: {
        background: settings.options.background,
        color: settings.options.color,
        style: settings.options.style,
        type: settings.options.type,
        time: settings.options.time,
        tag: settings.options.tag
      },
      args: args.map(arg => typeof arg === 'string' ? arg.replace(/\\u001b\[(\d+)m/gi, '') : arg)
    };

    loggerLogs.push(logSettings);
    emitter.emit(logSettings.name === 'error' ? 'err' : logSettings.name, logSettings);

    if (type === 'log') console.log(`${color}${background}${style}${prefix}`, ...args, reset);
    else if (type === 'info') console.info(`${color}${background}${style}${prefix}`, ...args, reset);
    else if (type === 'warn') console.warn(`${color}${background}${style}${prefix}`, ...args, reset);
    else if (type === 'error') console.error(`${color}${background}${style}${prefix}`, ...args, reset);
    else if (type === 'trace') console.trace(`${color}${background}${style}${prefix}`, ...args, reset);
    else if (type === 'debug') console.debug(`${color}${background}${style}${prefix}`, ...args, reset);
    else console.log(`${color}${background}${style}${prefix}`, ...args, reset);

    return Logger;
  }

  /**
   * Logging a stylish Important message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static important(...args) {
    const settings = {
      name: 'important',
      options: {
        background: 'red',
        color: 'white',
        style: 'bold',
        type: 'log',
        time: true,
        tag: 'IMPORTANT'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Success message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static success(...args) {
    const settings = {
      name: 'success',
      options: {
        background: 'black',
        color: 'green',
        style: 'bold',
        type: 'log',
        time: true,
        tag: 'SUCCESS'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Fatal Error message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static fatal(...args) {
    const settings = {
      name: 'fatal',
      options: {
        background: 'red',
        color: 'black',
        style: 'bold',
        type: 'error',
        time: true,
        tag: 'FATAL'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Trace Error message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static trace(...args) {
    const settings = {
      name: 'trace',
      options: {
        background: 'black',
        color: 'gray',
        style: 'bold',
        type: 'trace',
        time: true,
        tag: 'TRACE'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Error message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static error(...args) {
    const settings = {
      name: 'error',
      options: {
        background: 'black',
        color: 'red',
        style: 'bold',
        type: 'log',
        time: true,
        tag: 'ERROR'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Debug message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static debug(...args) {
    const settings = {
      name: 'debug',
      options: {
        background: 'black',
        color: 'cyan',
        style: 'bold',
        type: 'log',
        time: true,
        tag: 'DEBUG'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Warning message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static warn(...args) {
    const settings = {
      name: 'warn',
      options: {
        background: 'black',
        color: 'yellow',
        style: 'bold',
        type: 'warn',
        time: true,
        tag: 'WARN'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish Information message to the console
   * @param {...any} args The content to log into the console
   * @returns {Logger}
   */
  static info(...args) {
    const settings = {
      name: 'info',
      options: {
        background: 'black',
        color: 'blue',
        style: 'bold',
        type: 'info',
        time: true,
        tag: 'INFO'
      },
      args
    };

    return this.log(settings, ...args);
  }

  /**
   * Logging a stylish text with the Figlet package to the console
   * @param {Object} [options] The Logger logging options
   * @see See {@link https://www.npmjs.com/package/figlet|https://www.npmjs.com/package/figlet} For more Figlet options
   * @param {Object} [options.figlet] The Figlet package options
   * @param {String} [options.figlet.font] A string value that indicates the FIGlet font to use.
   * @param {String} [options.figlet.verticalLayout] A string value that indicates the horizontal layout to use.
   * @param {String} [options.figlet.horizontalLayout] A string value that indicates the vertical layout to use.
   * @see See {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more log options
   * @param {Object} [options.log] The Logger log options
   * @param {String} [options.log.background] A background color value to use when logging.
   * @param {String} [options.log.color] A color value to use when logging.
   * @param {String} [options.log.style] A style value to use when logging.
   * @param {String} [options.log.type] A console type to use when logging. Regular NodeJS 'console' methods.
   * @param {(Boolean | String)} [options.time] A time format to use when logging. Either a string of 'moment' package time format or a Boolean.
   * @param {String} [options.log.tag] A tag value to use when logging.
   * @param {...any} args Either the content or the settings and the content to log into the console
   * @returns {Logger}
   * @example <caption>Example usage of 'Logger.figlet()' method.</caption>
   *  const tools = require('tools-kit');
   *  const logger = tools.logger;
   *
   *  logger.figlet({
   *     // For more Figlet options read https://www.npmjs.com/package/figlet
   *     figlet: {
   *        font: 'Ghost',
   *        verticalLayout: 'default',
   *        horizontalLayout: 'default'
   *     },
   *     // For more Log options read https://www.npmjs.com/package/tools-kit
   *     log: {
   *        background: 'black',
   *        color: 'blue',
   *        style: 'bold',
   *        type: 'log',
   *        time: true,
   *        tag: 'COOL'
   *     }
   *  }, 'Some text', 'More text', 'And even more text!!!');
   */
  static figlet(...args) {
    const options = util.isObject(args[0]) ? args[0] : false;
    const content = options === false ? args : args.slice(1);
    const settings = {
      figlet: {
        font: options.figlet && options.figlet.font ? options.figlet.font : options && options.font ? options.font : null,
        verticalLayout: options.figlet && options.figlet.verticalLayout ? options.figlet.verticalLayout : options && options.verticalLayout ? options.verticalLayout : null,
        horizontalLayout: options.figlet && options.figlet.horizontalLayout ? options.figlet.horizontalLayout : options && options.horizontalLayout ? options.horizontalLayout : null
      },
      log: {
        name: 'figlet',
        options: {
          background: options.log && options.log.background ? options.log.background : options && options.background ? options.background : 'black',
          color: options.log && options.log.color ? options.log.color : options && options.color ? options.color : 'blue',
          style: options.log && options.log.style ? options.log.style : options && options.style ? options.style : 'bold',
          type: options.log && options.log.type ? options.log.type : options && options.type ? options.type : 'log',
          time: options.log && options.log.time ? options.log.time : options && options.time ? options.time : true,
          tag: options.log && options.log.tag ? options.log.tag : options && options.tag ? options.tag : 'FIGLET'
        },
        content
      }
    };

    content.forEach(text => {
      figlet.text(text, settings.figlet, (err, data) => {
        if (err) return this.log({ background: 'black', color: 'red', type: 'error', tag: 'FIGLET ERROR' }, err);

        if (data.includes('\n')) {
          data.split('\n').forEach(line => {
            this.log(settings.log, line);
          });
        } else this.log(settings.log, data);
      });
    });
  }

  /**
   * Logging a stylish Log message to the console
   * @param {Object} [options] The Logger logging options
   * @see {@link https://www.npmjs.com/package/tools-kit|https://www.npmjs.com/package/tools-kit} For more log options
   * @param {String} [options.background] A background color value to use when logging.
   * @param {String} [options.color] A color value to use when logging.
   * @param {String} [options.style] A style value to use when logging.
   * @param {String} [options.type] A console type to use when logging. Regular NodeJS 'console' methods.
   * @param {Boolean | String} [options.time] A time format to use when logging. Either a string of 'moment' package time format or a Boolean.
   * @param {String} [options.tag] A tag value to use when logging.'
   * @param {...any} args Either the content or the settings and the content to log into the console
   * @returns {Logger}
   * @example <caption>Example usage of 'Logger.log()' method.</caption>
   *  const tools = require('tools-kit');
   *  const logger = tools.logger;
   *
   *  // This will log the message to the console with the stock console settings
   *  logger.log('This will logged in the console with the stock console settings.');
   *
   *  // This will log a stylish message to the console with the settings you choose
   *  // For more Log options read https://www.npmjs.com/package/tools-kit
   *  logger.log({
   *     background: 'blue',
   *     color: 'red',
   *     style: 'bold',
   *     type: 'info',
   *     time: true,
   *     tag: 'Red & Blue'
   *  }, 'This logging message will logged into the console with red text color, blue background and a bold text style including a \'Red & Blue\' tag with the current time and the console.info method! Results: [01/1/2020 - 00:00:00 | Red & Blue]: content');
   */
  static log(...args) {
    const settings = util.isObject(args[0]) ? args[0] : false;
    const content = settings === false ? args : args.slice(1);

    const logSettings = {
      name: settings.name ? settings.name : 'log',
      options: {
        background: settings.options && settings.options.background ? settings.options.background : settings && settings.background ? settings.background : null,
        color: settings.options && settings.options.color ? settings.options.color : settings && settings.color ? settings.color : null,
        style: settings.options && settings.options.style ? settings.options.style : settings && settings.style ? settings.style : null,
        type: settings.options && settings.options.type ? settings.options.type : settings && settings.type ? settings.type : 'log',
        time: settings.options && (typeof settings.options.time === 'string' || typeof settings.options.time === 'boolean') ? settings.options.time : settings && (typeof settings.time === 'string' || typeof settings.time === 'boolean') ? settings.time : true,
        tag: settings.options && (typeof settings.options.tag === 'string' || typeof settings.options.tag === 'boolean') ? settings.options.tag : settings && (typeof settings.tag === 'string' || typeof settings.tag === 'boolean') ? settings.tag : true
      },
      content
    };

    return this._log(logSettings, ...content);
  }

  /**
   * Listen to a logger event
   * @param {string | symbol} event The event name to listen to
   * @param {...any} args Function to run when the event is triggered
   * @returns {emitter} Returns EventEmitter
   */
  static on(event, ...args) {
    if (!loggerEvents.includes(event)) return new Error(event, ' is an invalid event name.\nAvailable events: ', loggerEvents.join(', '));

    return emitter.on(event, ...args);
  }

  /**
   * Listen once to a logger event
   * @param {String | Symbol} event The event name to listen to
   * @param {...any} args Function to run when the event is triggered
   * @returns {emitter} Returns EventEmitter
   */
  static once(event, ...args) {
    if (!loggerEvents.includes(event)) return new Error(event, ' is an invalid event name.\nAvailable events: ', loggerEvents.join(', '));

    return emitter.once(event, ...args);
  }

  /**
   * An array with all the logger logging history
   * @returns {Array} All the logger logs
   * @readonly
   */
  static get logs() {
    return loggerLogs;
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
}

module.exports = Logger;
