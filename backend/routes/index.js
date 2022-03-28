const cors = require('cors');
const bodyParser = require('body-parser');

// const clientsRouter = require('./clients/index');
// const bookTypesRouter = require('./bookTypes/index');
// const booksRouter = require('./books/index');
// const journalRouter = require('./journal/index');
const usersRouter = require('./users');

// const express = require('express');

function applyRouter(app) {
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(cors({ origin: config.http.allowedOrigin, credentials: true }));

    app.use('/api/users', usersRouter);

    // app.use(express.json());
}

module.exports = { applyRouter };
