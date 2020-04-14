var express = require("express");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var path = require('path');
var User = require('./models/user');
var fileUpload = require('express-fileupload');
var methodOverride = require('method-override');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

const port = 12345;
var db = require('./models/db');
global.db = db;
// set port, listen for requests
app.listen(port, () => {
    console.log(`Server is running on port ${port}.`);
});

//views engine
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(cookieParser());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(fileUpload());
app.use(methodOverride("_method"));
app.use(cors());

app.get("/", function (request,response){
    response.render('login.ejs', {
        title: 'cmpt470',
        message: 'grade  database',
    });

});


module.exports = app;