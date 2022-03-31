module.exports = {
    user: process.env.MYSQL_USER || 'fedor',
    host: process.env.MYSQL_HOST || 'mysql',
    port: process.env.MYSQL_PORT || '3306',
    database: process.env.MYSQL_DATABASE || 'db',
    password: process.env.MYSQL_PASSWORD || '1234',
    rootPassword: process.env.MYSQL_ROOT_PASSWORD || '1234',
};
