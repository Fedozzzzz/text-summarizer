const mysql = require('mysql2/promise');
const logger = require('../utils/logger');

async function getMysqlConnection() {
    return mysql.createConnection({
        host: config.mysql.host,
        port: config.mysql.port,
        user: config.mysql.user,
        database: config.mysql.database,
        password: config.mysql.password,
    });
}

async function releaseMysqlConnection(connection) {
    try {
        connection.end();
        logger.info('Connection to MySQL server has been closed');
    } catch (e) {
        logger.error(e);
    }
}

async function checkMysqlConnection() {
    let connection;
    try {
        connection = await getMysqlConnection();
        logger.info('Testing connection to MySQL...');
        await connection.connect();
        logger.info('Connection to MySQL server successfully established');
    } catch (e) {
        logger.error(`An error occurred while testing connection to MySQL: ${e}`);
    } finally {
        await releaseMysqlConnection(connection);
        logger.info('Connection to MySQL was closed');
    }
}

module.exports = {
    getMysqlConnection,
    releaseMysqlConnection,
    checkMysqlConnection,
};
