import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from 'react-cookie';
import { ProvideAuth } from './hooks/authHook';
import App from './App';

// eslint-disable-next-line react/jsx-filename-extension
ReactDOM.render(<ProvideAuth><CookiesProvider><App /></CookiesProvider></ProvideAuth>, document.getElementById('root'));

/** TODO: Add prettier and husky + logger */
