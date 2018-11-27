var router = require('express').Router();
var logger = require('../../utils/logger');
var controller = require('./controller');
var authService = require('../auth/service');
// var verifyUser = auth.verifyUser;
// var checkSuperUser = [auth.decodeToken(), auth.verifySuperUser()];
// var checkUser = auth.decodeToken;
// var verifyPassword = auth.verifyPassword;
// var checkNewPassword = auth.checkNewPassword;

/**
 * Check if the document with the params's id exists
 */
router.param('id', controller.params);

/**
 *  Route for getting all user own by super user
 */
// router.route('/')
// 	.get(checkSuperUser, controller.get)

/**
 *  Update and Delete route for user created by super user
 */
// router.route('/:id')
// 	.delete(checkSuperUser, controller.delete)
// 	.put(checkSuperUser, controller.put)

/**
 *  signUp route for company user
 */
router.route('/signUp')
    .post(authService.checkDuplicateUser(), controller.signUp)

/**
 *  singIn route for both company user and super admin user
 */
router.route('/login')
    .post(authService.verifyUser(), controller.login)



/*
 *  Route for update loggedIn user
 */
// router.route('/updateUserInfo/:id')
// 	.put(checkUser(), controller.updateUserInfo)

/**
 *  Route for change password
 */
router.route('/changePassword/:id')
	.put(
        // authService.verifyToken(), 
        authService.verifyPassword(), 
        controller.changePassword
    )

/**
 * Route for getting employer of respective user
 */
// router.route('/:id/employer')
// 	.get(controller.params, checkUser(), controller.getEmployerByCompanyName)
/**
 * Route for changing emailSetting for user
 */

// router.route('/:id/emailReportSettings')
// 	.put(checkUser(), controller.changeEmailReportSettings)

module.exports = router;