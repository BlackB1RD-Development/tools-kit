// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Packages
const fetch = require('node-fetch');

// Requires - Files
const { hastebinURLS } = require('../../src/Util.js');
const logger = require('../Managers/Logger.js');

/**
 * The package Hastebin Client
 */
class Hastebin {
  /**
   * Post code on Hastebin
   * @param {Any} code The code to post
   * @param {String} [extension] The file extension to save with
   * @returns {Promise<Object>} Hastebin Object
   */
  static async post(code, extension) {
    if (!code) return logger.error('The code argument is required.');

    extension = extension ? extension.startsWith('.') ? extension : `.${extension}` : null;

    const requestURL = hastebinURLS.documentsHttpsWWW;
    const requestOptions = {
      body: code,
      method: 'POST'
    };

    await new Promise((resolve, reject) => {
      fetch(requestURL, requestOptions)
        .then(async res => {
          if (!res.ok) reject(new Error(res.statusText));

          const { key } = await res.json();

          const Hastebin = {
            link: hastebinURLS.httpsWWW + '/' + key + extension,
            host: hastebinURLS.httpsWWW,
            key,
            extension,
            content: code,
            ratelimit: res.headers.get('x-ratelimit-limit'),
            ratelimit_remaining: res.headers.get('x-ratelimit-remaining'),
            status_txt: res.statusText,
            status_code: res.status
          };

          resolve(Hastebin);
        })
        .catch(error => {
          reject(new Error(error.body && error.body.message ? error.body.message : error));
        });
    });
  }

  /**
   * Get code from Hastebin
   * @param {String} url The URL to get the code from
   * @returns {Promise<Object>} Hastebin Object
   */
  static async get(url) {
    if (!url) return logger.error('The url argument is required.');
    if (typeof url !== 'string') return logger.error('The url argument must be a string.');
    if (!Object.values(hastebinURLS).includes(url.replace(/https?:\/\//, '').split('/').shift())) return logger.error('Invalid url argument.');

    const link = {
      extension: url.replace(hastebinURLS.regex, '').includes('.') ? `.${url.replace(hastebinURLS.regex, '').split('.').pop()}` : '',
      host: hastebinURLS.documentsHttpsWWW,
      key: url.replace(hastebinURLS.regex, '').includes('.') ? url.replace(hastebinURLS.regex, '').split('.').shift() : url.replace(/https?:\/\//, '').split('/').pop()
    };
    const requestURL = link.host + '/' + link.key + link.extension;
    const requestOptions = {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    };

    await new Promise((resolve, reject) => {
      fetch(requestURL, requestOptions)
        .then(async res => {
          if (!res.ok) reject(new Error(res.statusText));

          const { key, data } = await res.json();

          const Hastebin = {
            link: hastebinURLS.httpsWWW + '/' + key + link.extension,
            host: hastebinURLS.httpsWWW,
            key,
            extension: link.extension,
            content: data,
            ratelimit: res.headers.get('x-ratelimit-limit'),
            ratelimit_remaining: res.headers.get('x-ratelimit-remaining'),
            status_txt: res.statusText,
            status_code: res.status
          };

          resolve(Hastebin);
        })
        .catch(error => {
          reject(new Error(error.body && error.body.message ? error.body.message : error));
        });
    });
  }
}

module.exports = Hastebin;
