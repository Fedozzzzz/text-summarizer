const express = require('express');
const logger = require('../utils/logger');
const { getMysqlConnection, releaseMysqlConnection } = require('../mysql/index');

const router = express.Router();

router.post('/registration', async (req, res) => {
    const connection = await getMysqlConnection();
    try {
        const { email, password } = req.body;

        const queryResult = await connection.execute(`select *
                                                  from users where email=:email `, [email], { outFormat: oracledb.OBJECT });

        const user = queryResult.rows[0];
        if (!user || !isValidPassword(user, password)) {
            return res.status(HTTPStatus.UNAUTHORIZED).send({ error: 'incorrect email or password' });
        }
        res.status(HTTPStatus.OK).send({ ok: true });
    } catch (e) {
        console.error('error', e);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while login' });
    } finally {
        await releaseMysqlConnection(connection);
    }
});

router.post('/login', async (req, res) => {
    const connection = await getConnectionFromOracle();
    try {
        const { email, password } = req.body;

        const queryResult = await connection.execute(`select *
                                                  from users where email=:email `, [email], { outFormat: oracledb.OBJECT });

        const user = queryResult.rows[0];
        if (!user || !isValidPassword(user, password)) {
            return res.status(HTTPStatus.UNAUTHORIZED).send({ error: 'incorrect email or password' });
        }
        res.status(HTTPStatus.OK).send({ ok: true });
    } catch (e) {
        console.error('error', e);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while login' });
    } finally {
        await doReleaseConnection(connection);
    }
});

module.exports = router;
