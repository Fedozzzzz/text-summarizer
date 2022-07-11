import BACKEND_PATH from '../config';

// eslint-disable-next-line import/prefer-default-export
export async function getSummarizedText(text) {
    const requestOptions = {
        credentials: 'include',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(text),
    };
    return fetch(
        `${BACKEND_PATH}/api/nlp/summarize`,
        requestOptions,
    );
}
