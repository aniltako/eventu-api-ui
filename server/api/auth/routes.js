var router = require('express').Router();
var controller = require('./controller');

/**
 *  Router for facebook api
 */

 router.route('/facebook')
    .post(controller.signin)

module.exports = router;