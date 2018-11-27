var router = require('express').Router();
var logger = require('../../utils/logger');
var controller = require('./controller');
var authService = require('../auth/service');
// var verifyRequest = [authService.verifyToken(), authService.verifyLoginUser()]

/**
 *  save user_info for user
 */
router.route('/')
    .post(authService.verifyToken(), controller.saveUserInfo)
    .get(authService.verifyToken(), controller.getUserInfoByUserId)

router.route('/:userInfoId/:educationId')
    .delete(controller.deleteEducationById)

router.route('/:userInfoId/:experienceId')
    .delete(controller.deleteExperienceById)

router.route('/:userInfoId/:certificationId')
    .delete(controller.deleteCertificationById)

module.exports = router;