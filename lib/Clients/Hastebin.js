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
   * Post code on Hastebin
   * @param {Any} code The code to post
   * @param {String} [extension] The file extension to save with
   * @returns {Promise<Object>} Hastebin Object
   */
  static post(code, extension) {
    if (!code) throw new Error('The code argument is required.');

    extension = extension ? extension.startsWith('.') ? extension : `.${extension}` : null;

    const requestURL = hastebinURLS.documentsHttpsWWW;
    const requestOptions = {
      body: code,
      method: 'POST'
    };

    return new Promise(async(resolve, reject) => {
      await fetch(requestURL, requestOptions)
        .then(async res => {
          if (!res.ok) return reject(new Error(res.statusText));

          const { key } = await res.json();

          const HastebinObj = {
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

          return resolve(HastebinObj);
        })
        .catch(error => reject(new Error(error)));
    });
  }

  /**
   * Get code from Hastebin
   * @param {String} url The URL to get the code from
   * @returns {Promise<Object>} Hastebin Object
   */
  static get(url) {
    if (!url) throw new Error('The URL argument is required.');
    else if (typeof url !== 'string') throw new Error('The URL argument must be a string.');
    else if (!hastebinURLS.regex.test(url)) throw new Error('Invalid URL argument.');

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

    return new Promise(async(resolve, reject) => {
      await fetch(requestURL, requestOptions)
        .then(async res => {
          if (!res.ok) return reject(new Error(res.statusText));

          const { key, data } = await res.json();

          const HastebinObj = {
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

          return resolve(HastebinObj);
        })
        .catch(error => reject(new Error(error)));
    });
  }
}

module.exports = Hastebin;
