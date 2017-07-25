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
    var xssFilter = require('x-xss-protection')
    var Ddos = require('ddos');
    console.log('CPLiteServer register by Zaseth');


var accessLogStream = fs.createWriteStream(__dirname + '/access.log', {flags: 'a'}) // Stores FULL styled Apache logs here
app.use(morgan('combined',  {"stream": accessLogStream}));

// DDOS settings
var limit = 400;
var checkinterval = 1;
var burst = 10;
var maxexpiry = 120;
var ddos = new Ddos({burst,limit,silentStart:true,checkinterval,maxexpiry,testmode:true,responseStatus:429,errormessage:'Look buddy, Zaseth added a package to block large amounts of traffic. Just refresh the page if you did not intend to DDOS the server.',includeUserAgent:false,trustProxy:false,whitelist:['localhost', '127.0.0.1']});
// End of DDOS settings


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
    app.use(bodyParser.raw());
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

//XSS Protection Header
app.use(xssFilter())

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