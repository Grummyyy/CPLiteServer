    var express = require('express')
    var app = express()
    var passport = require('passport')
    var session = require('express-session')
    var bodyParser = require('body-parser')
    var env = require('dotenv').load()
    var exphbs = require('express-handlebars')
    var flash = require('connect-flash');
    morgan = require('morgan');
    var fs = require('fs');

    console.log('CPLiteServer register by Zaseth');


var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}) // Stores FULL styled Apache logs here
app.use(morgan('combined',  {"stream": accessLogStream}));

app.use(morgan('dev', { // dev is a mode for logging and is displayed on the terminal
    function (req, res) {
        return res.statusCode
    }, stream: process.stderr
}));


app.use(morgan('dev', {
    function (req, res) {
        return res.statusCode
    }, stream: process.stdout
}));



    //For BodyParser
    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(flash());

    // For Passport
    app.use(session({
        secret: '8DHS8ijsdihgsf9d9fmio',
        resave: true,
        saveUninitialized: true
    })); // session secret
    app.use(passport.initialize());
    app.use(passport.session()); // persistent login sessions

app.use(express.static('public'))

//Disable Express Header
app.disable('x-powered-by');
    //For Handlebars
    app.set('views', './app/views')
    app.engine('hbs', exphbs({
        extname: '.hbs'
    }));
    app.set('view engine', '.hbs');

    app.get('/', function(req, res) {
        res.send('Waddup dawg');
    });


    //Models
    var models = require("./app/models");


    //Routes
    var authRoute = require('./app/routes/auth.js')(app, passport);


    //load passport strategies
    require('./app/config/passport/passport.js')(passport, models.user);


    //Sync Database
    models.sequelize.sync().then(function() {
        console.log('Nice! Database looks fine')

    }).
    catch (function(err) {
        console.log(err, "Something went wrong with the Database Update!")
    });



    app.listen(5000, function(err) {
        if (!err) console.log("Site is live");
        else console.log(err)

    });