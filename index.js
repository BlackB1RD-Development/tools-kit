// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const packageJSON = require('./package.json');
const Hastebin = require('./lib/Clients/Hastebin.js');
const Logger = require('./lib/Managers/Logger.js');
const Styles = require('./lib/Managers/Styles.js');
const Util = require('./lib/Utilities/Util.js');

/**
 * The Tools-Kit package class
 */
class Kit {
  /**
   * The package version
   * @returns {String} The package version
   * @access private
   * @private
   * @readonly
   */
  static get pVersion() {
    return packageJSON.version;
  }

  /**
   * The package name
   * @returns {String} The package name
   * @access private
   * @private
   * @readonly
   */
  static get pName() {
    return packageJSON.name;
  }
}

module.exports = {
  /**
   * The package version
   * @returns {String} The package version
   */
  name: Kit.pName,
  /**
   * The package name
   * @returns {String} The package name
   */
  version: Kit.pVersion,
  Hastebin,
  hastebin: Hastebin,
  Logger,
  logger: Logger,
  Styles,
  styles: Styles,
  Util,
  util: Util
};
