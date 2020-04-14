var express = require("express");
var bodyParser = require("body-parser");
var flash = require('req-flash');
var app = express();
var path = require('path');
var User = require('./models/user');
var fileUpload = require('express-fileupload');
// var cors = require('cors');
const port = 12345;
var db = require('./models/db');
global.db = db;


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

//configure middleware
app.set('port', process.env.port || port); // set express to use this port
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
app.set('view engine', 'ejs'); // configure template engine
app.use(bodyParser.json()); // parse requests of content-type: application/json
app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type: application/x-www-form-urlencoded
app.use(express.static(path.join(__dirname, 'public'))); // configure express to use public folder

// simple route
app.get("/", (req, res) => {
    res.json({ message: "welcome." });
});

// set port, listen for requests
app.listen(3000, () => {
    console.log("Server is running on port 3000.");
});