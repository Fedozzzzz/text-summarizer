const jwt = require('jsonwebtoken');
const logger = require('./logger');

module.exports = (req, res, next) => {
    try {
        const { accessToken: token } = req.cookies;
        const decodedToken = jwt.verify(token, config.auth.secret);
        const { userId } = decodedToken;
        req.userId = userId;
        next();
    } catch (e) {
        logger.info(`error:${e}`);
        res.status(401).json({
            error: 'Unauthorized',
        });
    }
};
