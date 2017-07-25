const dateTime = new Date().getTime();
const timestamp = Math.floor(dateTime / 1000);
var mysql = require('mysql');
var LocalStrategy = require('passport-local').Strategy;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

connection.query('USE kitsune');

connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:%'"=-?(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) { // Update
var sql68 = "SELECT * FROM penguins WHERE id=" + mysql.escape(id); // Update
connection.query(sql68, function(err,rows){ // Update
            done(err, rows);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
       passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        nicknameField: 'nickname',
        passReqToCallback: true
    },

    function(req, username, password, done) {
        const email = req.body.email;
        const nickname = req.body.nickname;
        const inventory = '%1'; // This is what the user gets on register. You can set this to anything that you want like: %1%2%3%4%5%6%7%8%9%10%11%12%13%14%15%16
        const moderator = '0'; // Auto set to 0 (False)
        const igloo = '1'; // Gives main igloo
        const igloos = '1'; // Puts main igloo in backpack
        console.log("Inventory is set to: " + inventory);
        console.log("Moderator is set to: " + moderator);
        console.log("Igloo is set to: " + igloo);
        console.log("Igloos is set to: " + igloos);

    passport.serializeUser(function(username, done) {
        done(null, username);
    });


var sql69 = "SELECT * FROM penguins WHERE username=" + mysql.escape(username); // Update
connection.query(sql69, function (err, rows) { // Update
            console.log(rows);
            console.log(sql69); // Update
            console.log("above row object");
            if (err) return done(err); // Update
             if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'Invalid login.'));
            } else {

                    var newUserMysql = { // Update
                        igloos: igloos,
                        igloo: igloo,
                        moderator: moderator,
                        inventory: inventory,
                        email: email,
                        password: password,
                        username: username,
                        nickname: nickname
                    };
                var insertQuery = "INSERT INTO penguins (`igloos`, `igloo`, `moderator`, `inventory`, `email`, `password`, `username`, `nickname` ) VALUES ('1','1','" + [moderator] + "', '" + [inventory] + "', " + mysql.escape(email) +  ", UPPER(MD5(" + mysql.escape(password) + ")), " + mysql.escape(username) + ", " + mysql.escape(username) + ");"; // Update
                console.log(insertQuery);
                    connection.query(insertQuery, [newUserMysql.igloos, newUserMysql.igloo, newUserMysql.moderator, newUserMysql.inventory, newUserMysql.email, newUserMysql.password, newUserMysql.username, newUserMysql.nickname],function(err, rows) { // Update
                    newUserMysql.id = rows.insertId;
                    return done(null, newUserMysql);
                    });
            };
        });
    }));

// Login is not used, so please also do not use it as I am too lazy to escape the query xd


    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },

    function(req, email, password, username, nickname, done) {
        connection.query("SELECT * FROM penguins WHERE username = '"+username+"'",function(err,rows){ + connection.escape(username);
            username.toString();
            if (err) return done(err);
            if (!rows.length) {
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }

            if (!(rows[0].password == [password])) return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.'));

            return done(null, rows[0]);
        });
    }));
}