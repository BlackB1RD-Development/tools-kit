// tools-kit 1.0.0
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires
const { hastebinURLS } = require('../../src/util.js');
const fetch = require('node-fetch');

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
    return new Promise((resolve, reject) => {
      if (!code) reject('The code argument is required.');

      extension = extension ? extension.startsWith('.') ? extension : `.${extension}` : null;

      const requestURL = hastebinURLS.documentsHttpsWWW;
      const requestOptions = {
        body: code,
        method: 'POST'
      };

      try {
        fetch(requestURL, requestOptions)
          .then(async(res) => {
            if (!res.ok) reject(res.statusText);

            const { key } = await res.json();

            const Hastebin = {
              link: hastebinURLS.httpsWWW + '/' + key + extension,
              host: hastebinURLS.httpsWWW,
              key: key,
              extension: extension,
              content: code,
              ratelimit: res.headers.get('x-ratelimit-limit'),
              ratelimit_remaining: res.headers.get('x-ratelimit-remaining'),
              status_txt: res.statusText,
              status_code: res.status
            };

            resolve(Hastebin);
          });
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * Get code from Hastebin
   * @param {String} url The URL to get the code from
   * @returns {Promise<Object>} Hastebin Object
   */
  static get(url) {
    return new Promise(async(resolve, reject) => {
      if (!url) reject('The url argument is required.');
      else if (typeof url !== 'string') reject('The url argument most be a string.');
      else if (!Object.values(hastebinURLS).includes(url.replace(/https?:\/\//, '').split('/').shift())) reject('Invalid url argument.');

      const link = {
        extension: url.replace(hastebinURLS.regex, '').includes('.') ? `.${url.replace(hastebinURLS.regex, '').split('.').pop()}` : '',
        host: hastebinURLS.documentsHttpsWWW,
        key: url.replace(hastebinURLS.regex, '').includes('.') ? url.replace(hastebinURLS.regex, '').split('.').shift() : url.replace(/https?:\/\//, '').split('/').pop()
      };
      const requestURL = link.host + '/' + link.key + link.extension;
      const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      };

      try {
        fetch(requestURL, requestOptions)
          .then(async(res) => {
            if (!res.ok) reject(res.statusText);

            const { key, data } = await res.json();

            const Hastebin = {
              link: hastebinURLS.httpsWWW + '/' + key + link.extension,
              host: hastebinURLS.httpsWWW,
              key: key,
              extension: link.extension,
              content: data,
              ratelimit: res.headers.get('x-ratelimit-limit'),
              ratelimit_remaining: res.headers.get('x-ratelimit-remaining'),
              status_txt: res.statusText,
              status_code: res.status
            };

            resolve(Hastebin);
          }, (error) => {
            reject(error.body && error.body.message ? error.body.message : error);
          });
      } catch (err) {
        reject(err);
      }
    });
  }
}

module.exports = Hastebin;
