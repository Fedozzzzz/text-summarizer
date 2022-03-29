const axios = require('axios');
const logger = require('../utils/logger');

async function summarizeTextRequest(text) {
    try {
        return await axios.post('http://0.0.0.0:8000/summarize', {
            text,
        });
    } catch (err) {
        logger.error('An error occurred in method "summarizeTextRequest"');
        return null;
    }
}

module.exports = summarizeTextRequest;
