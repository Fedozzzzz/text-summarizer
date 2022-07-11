const express = require('express');
const HTTPStatus = require('http-status-codes');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const { readConfig } = require('../config/index');
const { applyRouter } = require('../routes');
const logger = require('../utils/logger');
const morganMiddleware = require('../utils/morganMiddleware');
const { checkMysqlConnection } = require('../mysql');
// const _ = require('lodash');
// const { errorLogger, errorResponder } = require('../utils/errorsHandlers');

async function setupGlobals() {
    global.config = await readConfig();
    global.HTTPStatus = HTTPStatus;
}

function applyMiddlewares(app) {
    app.use(cors({ origin: config.http.allowedOrigin, credentials: true }));
    app.use(cookieParser());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(morganMiddleware);
    // app.use(errorLogger);
    // app.use(errorResponder);
}

async function runServer() {
    const app = express();

    const { port } = config.http;
    app.listen(port, () => logger.info(`Server started on port ${port}`));

    applyMiddlewares(app);
    applyRouter(app);
    try {
        await checkMysqlConnection();
    } catch (e) {
        logger.error(e);
    }

    return app;
}

async function run() {
    await setupGlobals();
    return runServer();
}

module.exports = {
    run,
};
