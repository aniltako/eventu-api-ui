var userService = require('./service');
var logger = require('../../utils/logger');
var util = require('util');

exports.params = function (req, res, next, id) {

	logger.log("Checking user with id ", id);

	userService.getUserById(id)
		.then(function (user) {
			if(user === null){
				return res.status(400).send({message:'No user with that id ' + id});
			}else{
				req.user = user;
				return next();
				// return null;
			}

		})
		.catch(function (err) {
			return res.status(400).send(err);
		});
}

exports.signUp = function(req, res, next){

    userService.signUp(req, res)
        .then(function (result) {
            return res.send(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};

exports.login = function(req, res, next){

    userService.login(req, res)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
}

// exports.delete = function(req, res, next){

// 	userService.deleteUser(req)
// 		.then(function (result) {

// 			return res.send(result);
// 		})
// 		.catch(function (err) {
// 			return res.status(400).send(err);
// 		});
// };


// exports.put = function(req, res, next){

// 	 //check if the body has field companyName
//     req.checkBody('companyName', 'companyName is required').notEmpty();

// 	req.getValidationResult().then(function(result) {
//         if (!result.isEmpty()) {
//             //send msg if the required field missing
//             res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
//             return;
//         }else {

//             userService.updateUser(req)
// 				.then(function (result) {

// 					return res.send(result);
// 				})
// 				.catch(function (err) {
// 					return res.status(400).send(err);
// 				});
//         }
//     });	
// };

// exports.updateUserInfo = function(req, res, next){

// 	userService.updateUserInfo(req)
// 		.then(function (result) {

// 			return res.send(result);
// 		})
// 		.catch(function (err) {
// 			return res.status(400).send(err);
// 		});
// };

exports.changePassword = function(req, res, next){

	userService.changePassword(req)
		.then(function (result) {
			return res.status(200).send(result);
		})
		.catch(function (err) {
			return res.status(400).send(err);
		});
};


// exports.getEmployerByCompanyName = function(req, res, next){
//     userService.getEmployerByCompanyName(req)
//         .then(function (result) {

//             return res.send(result);
//         })
//         .catch(function (err) {
//             return res.status(400).send(err);
//         });
// }

// exports.changeEmailReportSettings = (req, res, next) => {

// 	//check if the body has field daily, weekly, email and monthly
//     req.checkBody('emailReportSetting.daily', 'Daily email report setting is required and must be boolean').notEmpty();
//     req.checkBody('emailReportSetting.weekly', 'Weekly email report setting is required and must be boolean').notEmpty();
//     req.checkBody('emailReportSetting.monthly', 'Monthly email report setting is required and must be boolean').notEmpty();	

// 	req.getValidationResult().then(function(result) {
//         if (!result.isEmpty()) {
//             //send msg if the required field missing
//             res.status(400).send('There have been validation errors: ' + util.inspect(result.array()));
//             return;
//         }else {

//             userService.updateUserEmailReportSetting(req)
// 				.then( (result) => {
// 					return res.send(result);
// 				})
// 				.catch((err) => {
// 					return res.status(400).send(err)
// 				})
//         }
//     });	
	
// }