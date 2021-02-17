const express = require('express');
const app = express();

const productRoutes = require('./api/routes/oscars');

// Would ideally keep this dynamic such that restaurant name could be 
// variable. Using ID for sake of time, would require a way to find the ID
// from yelp.
app.use('/reviews/:oscarsID', productRoutes);

module.exports = app;