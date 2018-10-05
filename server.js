// ============
// Dependencies
// ============
const express = require('express');
const bodyParser = require('body-parser');

// The keys will be used to work in production or in development 
// const keys = require('./config/keys'); 

const app = express();
app.use(bodyParser.json());

// =================================
// Logging and Setting up Bodyparser
// =================================
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "*/*" }));

// =====================
// MYSQL Database access
// =====================
require('./models/Board');
const mysql = require('mysql');
const connectMysql = mysql.createConnection({
    host: "localhost",
    user: "username",
    password: "password"
  });

// ================
// Importing Routes
// ================
require('./controllers/apiRoutes')(app);
require('./controllers/clientSheetRoutes')(app);


const PORT = process.env.PORT || 1234
app.listen(PORT, function() {
    console.log(`Server Running on Port: ${PORT}`)
});