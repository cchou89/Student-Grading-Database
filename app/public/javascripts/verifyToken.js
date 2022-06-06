//FORMAT OF TOKEN
//Authorization: Bearer <access_token>

module.exports = (request, response, next) => {
    //verify session
    console.log(request.session);
    if(request.session.username === undefined){
        request.flash('error', 'Please log in');
        response.redirect('../');
    }else{
        next();
    }
    // if(request.session.username){
    //     console.log("there is a session");
    //     console.log(request.session.username);
    //     //move on
    //     next();
    // }else{
    //     console.log("Houston we have a problem");
    //     //go back to login
    //     response.redirect('/');
    // }
};