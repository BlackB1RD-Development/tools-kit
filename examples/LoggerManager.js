const tools = require('../index.js');

const logger = tools.logger;
const settings = {
    background: 'blue',
    color: 'red',
    style: 'bold',
    type: 'info',
    time: true,
    tag: 'Red & Blue'
};

logger.log('content'); // This will log the content to the console with the stock console settings.
logger.log(settings, 'content'); // Resulting in a blue background, red colored text, and bold styled text: [20/01/2020 - 00:00:00 | Red & Blue]: content

const options = {
    time: 'MM-DD-YY',
    tag: 'Custom Time Format'
};

logger.log(options, 'content'); // Results: [01/20/2020 | Custom Time Format]: content