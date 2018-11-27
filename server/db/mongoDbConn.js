const config = require('../config/config');
const mongoose = require('mongoose');
const logger = require('../utils/logger');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(config.dbUrl)
    .then(() => {
        logger.log("Successfully connected to the database");    
    }).catch(err => {
        logger.log('Could not connect to the database. Exiting now...' + JSON.stringify(err));
        process.exit();
    });