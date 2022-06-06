const sql = require("./db.js");

// constructor
const User = function(user) {
    this.username = user.username;
    this.password = user.password;
};

User.findByUsername = (username, result) => {
    sql.query(`SELECT * FROM users WHERE username = ${username}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found customer: ", res[0]);
            result(null, res[0]);
            return;
        }

        // not found Customer with the id
        result({ kind: "not_found" }, null);
    });
};

module.exports = User;