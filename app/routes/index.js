var express = require('express');
var router = express.Router();
var User = require("../models/user");
var MD5 = require("crypto-js/md5");
var jwt = require("jsonwebtoken");

/* GET home page. */
router.get('/', function(request, response) {
    response.render('home');
});


//handling login logic
router.post("/", function(request, response){
    var username = request.body.username;
    var password = request.body.password;

    User.findByUsername(username, function (error, result) {
        if(error){
            request.flash("error", err.message);
            return response.render("home");
        }
    })
});

// logout route
router.get("/logout", function(request, response){
    request.logout();
    request.flash('message', 'Logged out');
    response.redirect("/");
});

module.exports = router;
