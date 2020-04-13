var express = require("express");
var bodyParser = require("body-parser");
var flash = require('req-flash');
var app = express();
var path = require('path');
var User = require('./app/models/user');
var fileUpload = require('express-fileupload');
// var cors = require('cors');

// var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome." });
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});