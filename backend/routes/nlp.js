const express = require('express');
const summarizeTextRequest = require('../utils/summarizationHelpers');
const logger = require('../utils/logger');
const authMiddleware = require('../utils/authMiddleware');

const router = express.Router();

router.post('/summarize', authMiddleware, async (req, res) => {
    try {
        const { text } = req.body;
        const requestResult = await summarizeTextRequest(text);
        res.status(HTTPStatus.OK).send(requestResult.data);
    } catch (e) {
        logger.error(e);
        res.status(HTTPStatus.CONFLICT).send({ error: 'Error while login' });
    }
});

module.exports = router;
