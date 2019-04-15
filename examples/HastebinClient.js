const tools = require('../index.js');

const hastebin = tools.hastebin;
const logger = tools.logger;

hastebin.post('var test = "test";\n\nconsole.log(test);', '.js')
  .then(postRes => {
    logger.log({ tag: 'POST RES' }, postRes);

    hastebin.get(postRes.link)
      .then(getRes => logger.log({ tag: 'GET RES' }, getRes))
      .catch(getErr => logger.error({ tag: 'GET ERROR' }, getErr));
  })
  .catch(postErr => logger.error({ tag: 'POST ERROR' }, postErr));