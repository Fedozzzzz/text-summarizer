const express = require('express');
const jwt = require('jsonwebtoken');
const logger = require('../utils/logger');
const { getMysqlConnection, releaseMysqlConnection } = require('../mysql/index');
const {
    encryptPassword,
    isValidPassword,
    generateSalt,
} = require('../utils/passwordHelpers');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();
const HOURS_24 = 86400;

async function getUserByEmail(connection, email) {
    const [rows] = await connection.query('select * from users where email=?', [email]);
    return rows[0];
}

router.post('/registration', async (req, res) => {
    const connection = await getMysqlConnection();
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(connection, email);
        if (user) {
            res.status(HTTPStatus.CONFLICT).send({ error: 'User with this email already exists' });
            return;
        }
        const salt = generateSalt();
        const encryptedPassword = encryptPassword(password, salt);
        const sqlQuery = 'insert into users(email, password, salt) values ?';
        await connection.query(sqlQuery, [email, encryptedPassword, salt]);
        res.status(HTTPStatus.OK).send({ ok: true });
    } catch (err) {
        logger.error(`Error: ${err}`);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while registration' });
    } finally {
        await releaseMysqlConnection(connection);
    }
});

router.post('/login', async (req, res) => {
    const connection = await getMysqlConnection();
    try {
        const { email, password } = req.body;
        const user = await getUserByEmail(connection, email);

        if (!user || !isValidPassword(user, password)) {
            res.status(HTTPStatus.UNAUTHORIZED)
                .send({ error: 'incorrect email or password' });
            return;
        }
        const token = jwt.sign({ id: user.id }, config.auth.secret, {
            expiresIn: HOURS_24,
        });
        res.cookie('accessToken', token, { domain: 'localhost', httpOnly: true });
        res.status(HTTPStatus.OK).send({ id: user.id, email: user.email });
    } catch (err) {
        logger.error(`Error: ${err}`);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while login' });
    } finally {
        await releaseMysqlConnection(connection);
    }
});

router.post('/logout', async (req, res) => {
    try {
        res.clearCookie('accessToken');
        res.status(HTTPStatus.OK).end();
    } catch (err) {
        logger.error(`Error: ${err}`);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while login' });
    }
});

router.get('/checkLoggedIn', authMiddleware, async (req, res) => {
    try {
        res.status(HTTPStatus.OK).end();
    } catch (err) {
        logger.error(`Error: ${err}`);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while check user logged in' });
    }
});

module.exports = router;
