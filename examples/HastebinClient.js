// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, hastebin } = require('..');

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postRes => {
    logger.success({ tag: 'POST RES' }, postRes);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postRes.link)
      .then(getRes => {
        logger.success({ tag: 'GET RES' }, getRes);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getErr => {
        logger.error({ tag: 'GET ERROR' }, getErr);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Error: Get Error
      });
  })
  .catch(postErr => {
    logger.error({ tag: 'POST ERROR' }, postErr);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Error: Post Error
  });
