// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, hastebin } = require('..');

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.log({ background: 'black', color: 'green', type: 'info', tag: 'POST RES' }, postRes);

    await hastebin.get(postRes.link)
      .then(getRes => logger.log({ background: 'black', color: 'green', type: 'info', tag: 'GET RES' }, getRes))
      .catch(getErr => logger.log({ background: 'black', color: 'red', type: 'error', tag: 'GET ERROR' }, getErr));
  })
  .catch(postErr => logger.log({ background: 'black', color: 'red', type: 'error', tag: 'POST ERROR' }, postErr));
