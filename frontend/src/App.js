import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import "../public/favicon.ico";
import "./App.css";

function App() {
    return (
    // eslint-disable-next-line react/jsx-filename-extension
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
