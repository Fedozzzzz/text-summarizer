const morgan = require('morgan');
const logger = require('./logger');

module.exports = morgan(
    ':method :url :status :res[content-length] - :response-time ms',
    {
        stream: {
            write: (message) => logger.http(message.trim()),
        },
    },
);
