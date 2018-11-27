import _ from 'lodash';

// default config object for out api
let config = {
  	// just place the name of our possible NODE_ENV values for later
	dev: 'devlopment',
	prod: 'production',
	local: 'local',
	test: 'test',
	port: process.env.PORT || 8090
}

// check to see if the NODE_ENV was set, if not, the set to local
process.env.NODE_ENV = process.env.NODE_ENV || config.dev;
// set config.dev to whever the NODE_ENV is
config.env = process.env.NODE_ENV;

let envConfig;

// require could error out if
// the file don't exist so lets try this statement
// and fallback to an empty object if it does error out
try {
	envConfig = require('./' + config.env);
	// just making sure the require actually
	// got something back
  	envConfig = envConfig || {};
} catch (e) {
  	envConfig = {};
}

// merge the two config files together
// the envConfig file will overwrite properties
// on the config object
module.exports = _.merge(config, envConfig);
