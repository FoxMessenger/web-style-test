// ==============
// Dependencies
// ==============
Console.log("server.js file loaded")
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');

const app = express();
const PORT = process.env.PORT || 3000;

// =================================
// Logging and Setting up Bodyparser
// =================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "*/*" }));

// ====================
// Static Folder
// ====================
// app.use(express.static('./server/static/'));

// ================
// Importing Routes
// ================
const apiRoutes = require('./server/controllers/api');
const routes = require('./server/controllers/api');

app.use('/api', apiRoutes);
app.use('/', routes);
app.listen(PORT, function() {
    console.log(`Server Running on Port: ${PORT}`)
});