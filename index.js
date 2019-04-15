// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const packageJSON = require('./package.json');
const Hastebin = require('./lib/Clients/Hastebin.js');
const Logger = require('./lib/Managers/Logger.js');
const Color = require('./lib/Managers/Color.js');
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

// Assignments
Kit.version = Kit.pVersion;
Kit.name = Kit.pName;

Kit.Hastebin = Hastebin;
Kit.hastebin = Hastebin;

Kit.Logger = Logger;
Kit.logger = Logger;

Kit.Color = Color;
Kit.color = Color;

Kit.Util = Util;
Kit.util = Util;

module.exports = Kit;
