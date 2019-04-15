// tools-kit 1.0.0
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires
const packageJSON = require('./package.json');
const Hastebin = require('./lib/Clients/Hastebin.js');
const Logger = require('./lib/Managers/Logger.js');
const Color = require('./lib/Managers/Color.js');
const Util = require('./lib/Utilities/Util.js');

/**
 * The Tools-Kit package
 */
class Kit {
  /**
   * The package version
   * @returns {String} The package version
   * @readonly
   */
  static get pVersion() {
    return packageJSON.version;
  }

  /**
   * The package name
   * @returns {String} The package name
   * @readonly
   */
  static get pName() {
    return packageJSON.name;
  }
}

Kit.version = Kit.pVersion;
Kit.name = Kit.pName;

Kit.util = Util;
Kit.color = Color;
Kit.logger = Logger;
Kit.hastebin = Hastebin;

module.exports = Kit;
