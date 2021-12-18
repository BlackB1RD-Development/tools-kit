// Tools-Kit By BlackB1RD-Development. All rights reserved ©
// Website: https://tools-kit.js.org/
// Project: https://github.com/BlackB1RD-Development/tools-kit
// License: MIT

// Requires - Files
const { logger, hastebin } = require('..');

hastebin.post('var test = \'test\';\n\nconsole.log(test);', '.js')
  .then(async postResponse => {
    logger.success({ tag: 'POST RES' }, postResponse);
    // Console > [20/02/2020 - 00:00:00 | POST RES]: HastebinObject{}

    await hastebin.get(postResponse.link)
      .then(getResponse => {
        logger.success({ tag: 'GET RES' }, getResponse);
        // Console > [20/02/2020 - 00:00:00 | GET RES]: HastebinObject{}
      })
      .catch(getError => {
        logger.error({ tag: 'GET ERROR' }, getError);
        // Console > [20/02/2020 - 00:00:00 | GET ERROR]: Error: Get Error
      });
  })
  .catch(postError => {
    logger.error({ tag: 'POST ERROR' }, postError);
    // Console > [20/02/2020 - 00:00:00 | POST ERROR]: Error: Post Error
  });
