import BACKEND_PATH from '../config';

export async function register(email, password) {
    const req = {
        email,
        password,
    };
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
    };
    return fetch(
        `${BACKEND_PATH}/api/users/registration`,
        requestOptions,
    );
}

export async function login(email, password) {
    const req = {
        email,
        password,
    };
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(req),
    };
    return fetch(
        `${BACKEND_PATH}/api/users/login`,
        requestOptions,
    );
}

export async function logout() {
    const requestOptions = {
        method: 'POST',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(
        `${BACKEND_PATH}/api/users/logout`,
        requestOptions,
    );
}

export async function checkLoggedIn() {
    const requestOptions = {
        method: 'GET',
        credentials: 'include',
        headers: { 'Content-Type': 'application/json' },
    };
    return fetch(
        `${BACKEND_PATH}/api/users/checkLoggedIn`,
        requestOptions,
    );
}

// creds:
//         email: 'fedozzz',
//         password: '1234',
