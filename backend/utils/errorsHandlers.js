const logger = require('./logger');

const errorLogger = (err, req, res, next) => {
    logger.error(`An error occurred: ${err.message}`);
    next(err); // calling next middleware
};

const errorResponder = (err, req, res, next) => {
    if (res.headersSent) {
        return next(err);
    }
    res.header('Content-Type', 'application/json');
    const { status = HTTPStatus.CONFLICT, message = 'Internal server error' } = err;
    return res.status(status).send({ error: message });
};

module.exports = {
    errorLogger,
    errorResponder,
};
