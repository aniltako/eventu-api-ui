var morgan = require('morgan')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var cors = require('cors')

// setup global middleware

module.exports = function (app) {
	app.options('*', cors()); // include before other routes
	app.use(cors());
	app.use(morgan('dev'));
	app.use(cookieParser());
	app.use(bodyParser.urlencoded({extended: true}));
}
