const dateTime = new Date().getTime();
const timestamp = Math.floor(dateTime / 1000);
var mysql = require('mysql');
var LocalStrategy = require('passport-local').Strategy;
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root'
});

connection.config.queryFormat = function (query, values) {
  if (!values) return query;
  return query.replace(/\:%'"=-?(\w+)/g, function (txt, key) {
    if (values.hasOwnProperty(key)) {
      return this.escape(values[key]);
    }
    return txt;
  }.bind(this));
};

connection.query('USE kitsune');

module.exports = function(passport) {
    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        connection.query("select * from penguins where id = "+id,function(err,rows){ + connection.escape(id);
        	id.toString();
            done(err, rows);
        });
    });

    // =========================================================================
    // LOCAL SIGNUP ============================================================
    // =========================================================================
       passport.use('local-signup', new LocalStrategy({
        usernameField: 'username',
        passwordField: 'password',
        gameusernameField: 'username',
        nicknameField: 'nickname',
        passReqToCallback: true
    },

    function(req, username, password, done) {
        const email = req.body.email;
        const nickname = req.body.nickname;
        const inventory = '%1'; // This is what the user gets on register. You can set this to anything that you want like: %1%2%3%4%5%6%7%8%9%10%11%12%13%14%15%16
        const moderator = '0';
        const igloo = '1';
        const igloos = '1';
        console.log("Inventory is set to: " + inventory);
        console.log("Moderator is set to: " + moderator);
        console.log("Igloo is set to: " + igloo);
        console.log("Igloos is set to: " + igloos);

    passport.serializeUser(function(username, done) {
        done(null, username);
    });






if (req.body.username.indexOf('?', '<', '>', '@', 'á', 'ç', 'é', 'í', 'ó', 'Á', 'Ç', 'É', 'Í', 'Ó', '!', ':', ';', '%', '(', ')') > -1) {
    	return done(null, false, req.flash('signupMessage', 'Your username contained a blacklisted character.'));
} else {

        connection.query("select * from penguins where username = '"+username+"'",function(err,rows){ + connection.escape(username);
          username.toString();
			console.log(rows);
			console.log("above row object");
			if (err)
                return done(err);
			 if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'That email is already taken.'));
            } else {

                var newUserMysql = new Object();
                newUserMysql.igloos = igloos;
                newUserMysql.igloo = igloo;
                newUserMysql.moderator = moderator;
                newUserMysql.inventory = inventory;
                newUserMysql.email = email;
                newUserMysql.password = password; // use the generateHash function in our user model
                newUserMysql.username = username;
                newUserMysql.nickname = nickname;
                var insertQuery = "INSERT INTO penguins (`igloos`, `igloo`, `moderator`, `inventory`, `email`, `password`, `username`, `nickname` ) VALUES ('1','1','" + [moderator] + "', '" + [inventory] + "', '" + [email] +  "', + UPPER(MD5('" + [password] + "')), '" + [username] + "', '" + [username] + "');"; + connection.escape(username); + connection.escape(email);
                console.log(insertQuery);
                connection.query(insertQuery, function(err, rows) {
                    newUserMysql.id = rows.insertId;
                    return done(null, newUserMysql);
                    });
            };
        });
      }
    }));

    // =========================================================================
    // LOCAL LOGIN =============================================================
    // =========================================================================
    passport.use('local-login', new LocalStrategy({
        usernameField: 'email',
        passwordField: 'password',
        passReqToCallback: true
    },

    function(req, email, password, username, nickname, done) {
        connection.query("select * from penguins where username = '"+username+"'",function(err,rows){ + connection.escape(username);
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
