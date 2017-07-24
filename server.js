var path = require('path');
var express = require('express');
var helmet = require('helmet')
var process = require('process');
var replace = require("replace");
var fs = require('fs');
var net = require('net');
var S = require('string');
var io = require('socket.io');
var _ = require('lodash');
var Promise = require('bluebird');
var crossdomain = require('helmet-crossdomain');
var sleep = require('sleep');
var PcapWriter = require('./node_modules/node-pcap-writer/index');
var firewall = require('node-firewall');
var FirewallMap = require('node-firewall').FirewallMap
var program = require('commander');
var ping = require('ping');
var render = require('php-node')({bin:"e://xampp//php//php.exe"}); // You should modify this in needs
var phpnode = require('php-node')({bin:"e://xampp//php//php.exe"}); // You should modify this in needs
var sys = require('util');
var http = require('http');
var Ddos = require('ddos')
ipfilter = require('express-ipfilter').IpFilter;
morgan = require('morgan');
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
var credentials = require('./credentials.js');

// Load resources
const PORT = 80;
const WWW = 'localhost';
var robots = require('robots.txt');

//var db = require('./mysql_conf'); // MySQL configuration

// DDOS settings
var limit = 1000;
var checkinterval = 1;
var burst = 10;
var maxexpiry = 120;
var ddos = new Ddos({burst,limit,silentStart:true,checkinterval,maxexpiry,testmode:true,responseStatus:429,errormessage:'Look buddy, Zaseth added a package to block large amounts of traffic. Just refresh the page if you did not intend to DDOS the server.',includeUserAgent:false,trustProxy:false,whitelist:['localhost', '127.0.0.1']});
// End of DDOS settings

var datetime = new Date();
var fw = new firewall.Firewall('fw.main', '^/'); // Firewall

// Error catching
    if (!PORT && !WWW) {
        console.log('PORT or WWW is empty. Quitting...');
        process.exit(1);
    }
/*
    if (!db) {
        console.log('Database file not found. Quitting...');
        process.exit(1);
    }
*/
    if (!limit < 500) {
    } else {
        console.log('Limit is too low. Quitting...');
        process.exit(1);
    }
    if (!checkinterval) {
        console.log('Checkinterval is empty. Quitting...');
    }
    if (!burst < 3) {
    } else {
        console.log('Burst is too low. Quitting...');
        process.exit(1);
    }
    if (!maxexpiry) {
        console.log('Maxexpiry is empty. Quitting...');
        process.exit(1);
    }

// Begin
function sayIntro(){
console.log('x+++++++++++++++++++++++++++++++++++x');
console.log('x                                   x');
console.log('x                                   x');
console.log('x        CPLiteServer 2017          x');
console.log('x   A CPPS-SITE SERVER IN NODE      x');
console.log('x         MADE BY ZASETH            x');
console.log('x           BYE APACHE!             x');
console.log('x                                   x');
console.log('x+++++++++++++++++++++++++++++++++++x');
console.log(datetime);
console.log('Your crossdomain.xml is set to your WWW url (Thank me later)');
console.log('Preinstalled with the ICE CPPS Theme made by: AmusingThrone');
console.log('I do not own anything from the theme');
console.log('Creating your own SWFs is now supported, but commented out');
if(S(WWW).latinise().s) {
		console.log('[*] WWW checked');
};
}
sayIntro();

const app = express(); // Express launches here

var bodyParser = require('body-parser')
app.use(require('cookie-parser')(credentials.cookieSecret));

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

var accessLogStream = fs.createWriteStream(__dirname + '/logs/access.log', {flags: 'a'}, function(error) {
  if (error) {
    console.log('Access.log could not be created or overwritten.');
    process.exit(1);
  }
});

app.use(morgan('combined',  {"stream": accessLogStream})); // Logging begins at first
app.use(morgan('dev', {
    function (req, res) {
        return res.statusCode
    }, stream: process.stderr
}));

app.use(morgan('dev', {
    function (req, res) {
        return res.statusCode
    }, stream: process.stdout
}));

var io = require('socket.io').listen(3001); // Socket.io
var count = 0 // Socket.io count

app.use(ddos.express);
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

run();
function run() {
  var pcapWriter = new PcapWriter('./logs/test.pcap', 1500, 105);
	PcapWriter.prototype.writePacket = function(pkt, ts) {
    pcapWriter.close();
}
}

replace({
    regex: "localhost", // Standard regex input
    replacement: WWW,
    paths: ['node_modules/crossdomain/index.js'],
    recursive: true,
    silent: true,
});

app.use(helmet())
app.use(crossdomain()); // Auto build crossdomain

app.set('views', __dirname); // Part of the php patch
app.engine('php', phpnode); // Part of the php patch
app.set('view engine','jade'); // Part of the php patch

// Log file fixes
app.all('/play/v2/content/local/en/news/20110204/wget-log', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/local/en/news/20110204/wget-log.1', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/cannon/error_log', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/card/error_log', function(req, res) {
   res.render('index');
})
// Flash files
app.all('/play/v2/content/local/en/news/~news_crumbs.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/local/en/news/RECOVER_~news_crumbs.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/astro/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/card/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/cardjitsu/water/~water.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/cardjitsu/watersensei/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/dancing/~dance.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/fire/~fire.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/fish/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/four/~game.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/hydro/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/jetpack/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/mancala/~game.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/mine/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/mixmaster/~ChooseSong.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/mixmaster/~MixMaster.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/paddle/~paddle.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/pizzatron/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/rescue/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/roundup/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/sensei/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/senseiFire/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/shuffle/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/sled/~game.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/soaker/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/sub/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/thinice/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/treasurehunt/~TreasureHunt.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/waves/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/waves/code/~bootstrap.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/waves/code/~CatchinWaves.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/waves/code/cA247.as', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/content/crumbs.as', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/crumbs/global_crumbs.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/crumbs/gChicken.as', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/penguin/tf.swf.xfl/DOMDocument.xml', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/penguin/tf.swf.xfl/PublishSettings.xml', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/penguin/tf.swf.xfl/tf.swf.xfl.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/penguin/tf.swf.xfl/META-INF/metadata.xml', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/local/en/crumbs/local_crumbs.fla', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/local/en/crumbs/lChicken.as', function(req, res) {
   res.render('index');
})
// PHP fixes
app.all('/en/web_service/cover.php', function(req, res) {
   res.render('index');
})

app.all('/create_account/create_account.php', function(req, res) {
   res.render('index');
})

app.all('/en/web_service/epf.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/games.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/index.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/mascots.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/polaroids.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/puffle_care.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/puffles.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/rooms.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/stamps.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/weblogger.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/game_configs/cover.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/game_configs/games.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/game_configs/index.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/game_configs/newspapers.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/game_configs/paths.php', function(req, res) {
   res.render('index');
})
app.all('/en/web_service/game_configs/rooms.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/cover.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/epf.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/games.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/index.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/mascots.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/polaroids.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/puffle_care.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/puffles.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/rooms.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/stamps.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/weblogger.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/game_configs/cover.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/game_configs/games.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/game_configs/index.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/game_configs/newspapers.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/game_configs/paths.php', function(req, res) {
   res.render('index');
})
app.all('/play/en/web_service/game_configs/rooms.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/client/create_account.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/content/global/clothing/clothing.php', function(req, res) {
   res.render('index');
})
app.all('play/v2/content/local/en/music/index.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/en/web_service/cover.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/en/web_service/epf.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/en/web_service/games.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/en/web_service/mascots.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/en/web_service/polaroids.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/en/web_service/stamps.php', function(req, res) {
   res.render('index');
})
app.all('/play/v2/games/astro/index.php', function(req, res) {
   res.render('index');
})
app.all('/web_service/weblogger.php', function(req, res) {
   res.render('index');
})
app.get('/pma', function (req, res) {
  res.sendFile(path.join(__dirname+'/public/pma/phpmyadmin.html'));
});

fw.add('^/', ['role', 'user']);
firewall.map.add(fw);
firewall.use(app);

app.use(robots(__dirname + '/robots.txt'));
status = require('./lib/index.js'), function(error) {
if (error) {
  console.log('[WARNING]: /status is not found.'); // We will not process.exit here
}
}

app.use(status({
    url: '/status',
    version: false,
    uptime: true,
    check: function(req) {
        if (req.something == false) {
            return false;
        }
        return true;
    },
    responseContentType : 'json'
}));

require('events')
io.sockets.setMaxListeners(0);
io.sockets.on('connection', function(socket) {
    count++;
    io.sockets.emit('message', { count: count });
    io.sockets.on('disconnect', function(){
        count--;
        io.sockets.emit('message', { count: count });
    })
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname+'/index.html'));
    });

app.use(express.static(__dirname + '/public')); // Resources

app.get('/thankyou', function(req, res){
  res.render('thankyou.handlebars');
});

const csrfKey = '8hdh8ggd8IDNUIDGBopsd9dofodg';

app.get('/contact', function(req, res){
  res.render('contact.handlebars', { csrf: csrfKey});
});

var breakLine = "\r\n";
var seperateLine = "++++++++++++++";

app.post('/process', function(req, res, next){
  console.log('Someone just gave feedback!');
  res.redirect(303, '/thankyou');
    fs.appendFile('./contactdata/contactdata.txt',
    	seperateLine + breakLine + datetime + breakLine + 'CSRF: ' + req.body._csrf + breakLine + 'Email: ' + req.body.email + breakLine + 'Question: ' + req.body.ques + breakLine + 'Experience: ' + req.body.optradio + breakLine + seperateLine, function(err){
      if(err){
        return console.error(err);
      };
    });
  });

app.use(function(req,res){
    res.status(404);
    res.render('404.jade');
});

fs.stat('index.html', function(err, stat) {
    if(err == null) {
        console.log('[*] HTML file exists');
    } else if(err.code == 'ENOENT') {
        fs.writeFile('./logs/htmlerror.log', 'Missing index.html\n');
        console.log('[*] HTML file does not exist: ', err.code);
        console.log('[*] Quitting...');
        process.exit(1);
    }
});

// Taken from Github
function checkConnection(host, port, timeout) {
    return new Promise(function(resolve, reject) {
        timeout = timeout || 10000;
        var timer = setTimeout(function() {
            reject("timeout");
            socket.end();
        }, timeout);
        var socket = net.createConnection(port, host, function() {
            clearTimeout(timer);
            resolve();
            socket.end();
        });
        socket.on('error', function(err) {
            clearTimeout(timer);
            reject(err);
        });
    });
}

checkConnection(WWW, PORT).then(function() {
    console.log('[*] CPLiteServer is responding');
}, function(err) {
    console.log('[*] CPLiteServer is NOT responding');
    console.log('[*] Quitting...');
    process.exit(1);
})

app.set('trust proxy', function (ip) {
  if (ip === '127.0.0.1' || ip == 'localhost' || ip === '123.123.123.123') return true; // Trusted IP
  else return false;
});

app.disable('x-powered-by');
app.use(function (req, res, next) {
  res.setHeader("X-Powered-By", "Osama Bin Laden");
  next();
});

var ips = ['217.16.131.228']; // Blacklist ip
app.use(ipfilter(ips));

app.listen(PORT, WWW, function(){
    console.log('[*] CPLiteServer listening on: ' + WWW + ':' + PORT); // Launch
});
