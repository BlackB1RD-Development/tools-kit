// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Packages
const fetch = require('node-fetch');

// Requires - Files
const { hastebinURLS } = require('../../src/util.js');

/**
 * The package Hastebin Client
 */
class Hastebin {
  /**
   * Post data on Hastebin
   * @param {Any} data The data to post
   * @param {String} [extension] The file extension to save with
   * @returns {Promise<Object>} Hastebin Object
   */
  static post(data, extension) {
    if (!data) throw new Error('The data parameter is required.');

    const link = {
      extension: extension ? extension.startsWith('.') ? extension : `.${extension}` : '',
      host: hastebinURLS.httpsWWW,
      key: null
    };
    const request = {
      url: hastebinURLS.documentsHttpsWWW,
      options: {
        method: 'POST',
        body: data
      }
    };

    return new Promise(async (resolve, reject) => {
      await fetch(request.url, request.options)
        .then(async response => {
          if (!response.ok) return reject(new Error(response.statusText));

          const { key } = await response.json();

          const HastebinObject = {
            link: link.host + '/' + key + link.extension,
            host: link.host,
            key,
            extension: link.extension,
            content: data,
            ratelimit: response.headers.get('x-ratelimit-limit'),
            ratelimit_remaining: response.headers.get('x-ratelimit-remaining'),
            status_txt: response.statusText,
            status_code: response.status
          };

          return resolve(HastebinObject);
        })
        .catch(error => reject(new Error(error)));
    });
  }

  /**
   * Get data from Hastebin
   * @param {String} url The URL to get the data from
   * @returns {Promise<Object>} Hastebin Object
   */
  static get(url) {
    if (typeof url !== 'string') throw new Error(`The url parameter must be a String value, not ${typeof url}.`);
    else if (!hastebinURLS.regex.test(url)) throw new Error('Invalid url argument.');

    const link = {
      extension: url.replace(hastebinURLS.regex, '').includes('.') ? `.${url.replace(hastebinURLS.regex, '').split('.').pop()}` : '',
      host: hastebinURLS.httpsWWW,
      key: url.replace(hastebinURLS.regex, '').includes('.') ? url.replace(hastebinURLS.regex, '').split('/').pop().split('.').shift() : url.replace(/https?:\/\//, '').split('/').pop()
    };
    const request = {
      url: hastebinURLS.documentsHttpsWWW + '/' + link.key + link.extension,
      options: {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }
    };

    return new Promise(async (resolve, reject) => {
      await fetch(request.url, request.options)
        .then(async response => {
          if (!response.ok) return reject(new Error(response.statusText));

          const { key, data } = await response.json();

          const HastebinObject = {
            link: link.host + '/' + key + link.extension,
            host: link.host,
            key,
            extension: link.extension,
            content: data,
            ratelimit: response.headers.get('x-ratelimit-limit'),
            ratelimit_remaining: response.headers.get('x-ratelimit-remaining'),
            status_txt: response.statusText,
            status_code: response.status
          };

          return resolve(HastebinObject);
        })
        .catch(error => reject(new Error(error)));
    });
  }
}

module.exports = Hastebin;
