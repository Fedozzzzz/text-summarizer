const axios = require('axios');

async function summarizeTextRequest(text) {
    try {
        const requestData = JSON.stringify({ text });
        return await axios.post('http://summarizer:8000/summarize/', requestData);
    } catch (e) {
        const { error } = e.response.data;
        throw new Error(`Error in method "summarizeTextRequest": ${e} - ${error}`);
    }
}

module.exports = summarizeTextRequest;
