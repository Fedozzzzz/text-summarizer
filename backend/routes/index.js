const usersRouter = require('./users');
const nlpRouter = require('./nlp');

// const express = require('express');

function applyRouter(app) {
    app.use('/api/users', usersRouter);
    app.use('/api/nlp', nlpRouter);

    // app.use(express.json());
}

module.exports = { applyRouter };
