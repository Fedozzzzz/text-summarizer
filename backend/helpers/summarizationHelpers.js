const axios = require('axios');

async function summarizeTextRequest(text) {
    try {
        return await axios.post('https://0.0.0.0:8000/summarize', {
            todo: text,
        });
    } catch (err) {
        // console.error('error', err);
        return null;
    }
}

module.exports = summarizeTextRequest;
