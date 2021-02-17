const express = require('express');
const app = express();

const productRoutes = require('./api/routes/oscars');

//would ideally keep this dynamic such that restaurant name could be variable
app.use('/reviews/oscars/', productRoutes);

module.exports = app;