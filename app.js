const express = require('express');
const app = express();

const logger = require('./middleware/logger');
const errorHandler = require('./middleware/errorHandler');

app.use(express.json());
app.use(logger);

// Routes
app.use('/users', require('./routes/userRoutes'));
app.use('/posts', require('./routes/postRoutes'));
app.use('/comments', require('./routes/commentRoutes'));

app.use(errorHandler);

module.exports = app;
