import BACKEND_PATH from '../config';

// eslint-disable-next-line import/prefer-default-export
export function getSummarizedText(text) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text),
    };
    return fetch(`${BACKEND_PATH}/api/books/max_days`, requestOptions).then((res) => res.json());
}
