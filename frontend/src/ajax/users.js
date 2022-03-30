import BACKEND_PATH from '../config';

// eslint-disable-next-line import/prefer-default-export
export async function getSummarizedText(text) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(text),
    };
    console.log(requestOptions);
    const res = await fetch(`${BACKEND_PATH}/api/users/summarize`, requestOptions);
    // const res = await fetch('http://localhost:8000/summarize', requestOptions);
    return res.json();
}
