const { createLogger, format, transports } = require('winston');

module.exports = createLogger({
    transports: new transports.Console(),
    level: 'http',
    format: format.combine(
        format.cli(),
        format.timestamp({
            format: 'MMM-DD-YYYY HH:mm:ss',
        }),
        format.printf(
            (info) => `${info.level}: [${[info.timestamp]}]: ${info.message}`,
        ),
    ),
});
