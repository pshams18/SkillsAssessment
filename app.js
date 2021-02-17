const express = require('express');
const app = express();

const productRoutes = require('./api/routes/oscars');

app.use('/reviews/oscars/:oscarsId', productRoutes);

module.exports = app;