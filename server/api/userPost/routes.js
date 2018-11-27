var router = require('express').Router();
var logger = require('../../utils/logger');
var controller = require('./controller');
var authService = require('../auth/service');
var verifyRequest = [authService.verifyToken(), authService.verifyLoginUser()]

/**
 *  save user_info for user
 */
router.route('/')
    .post(controller.saveUserPost)

module.exports = router;