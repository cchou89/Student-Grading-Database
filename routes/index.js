var express = require('express');
var router = express.Router();
var User = require("../models/user");
var MD5 = require("crypto-js/md5");

/* GET home page. */
router.get('/', function(request, response) {
    response.render('home');
});

/* show login form */
router.get("/login", function(request, response){
    response.render('login');
});

//handling login logic
router.post("/login", function(request, response){
    var username = request.body.username;
    var password = request.body.password;

    User.findByUsername(username, function (error, result) {
        if(error){
            request.flash("error", err.message);
            return response.render("login");
        }

    });

    var newLecture = {name: request.body.name,
        author: request.user._id ,
    };
    Lecture.create(newLecture, function (error) {
        if(error){
            request.flash('error', "Could not create the lecture");
            response.redirect("/lectures/new");
        } else {
            //redirect back to index
            response.redirect("/lectures");
        }
    });

});

// logout route
router.get("/logout", function(request, response){
    request.logout();
    request.flash('message', 'Logged out');
    response.redirect("/");
});

module.exports = router;
