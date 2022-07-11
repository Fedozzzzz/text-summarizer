import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/pages/HomePage/HomePage';
import LoginPage from './components/pages/LoginPage/LoginPage';
import PrivateRoute from './components/common/PrivateRoute/PrivateRoute';

import '../public/favicon.ico';
import './App.css';

function App() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<PrivateRoute />}>
                    <Route exact path="/" element={<HomePage />} />
                </Route>
                <Route exact path="/login" element={<LoginPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
