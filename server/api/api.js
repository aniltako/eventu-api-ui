var router = require('express').Router();

/**
 *  Router configuration for different model
 */

 router.use('/signin/', require('.auth/routes'));