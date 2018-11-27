var logger = require('../../utils/logger');
var Promise = require('bluebird');
let User = require('./model');
var signToken = require('../auth/service').signToken;

var userService = () => {

	/**
	 * Return token {token : ""} if auth.verifyUser() return next user
	 * @param {*} user 
	 */
	var login = function (req, res) {

		return new Promise(function (resolve, reject) {

			let user = req.user;

			return resolve({token:signToken(user), userId: user._id});

		});
	};

	/**
	 * creating new user account
	 * @param {*} req 
	 * Return created user with decrypted password as superAdmin user can see and update later
	 */
	var signUp = function(req, res) {

		return new Promise(function (resolve, reject) {

			var user = new User(req.body);

			user.save(function(err){
				if(err){
					return reject({message: getErrorMessage(err)});
				}
				return resolve({token:signToken(user)});

			});

		});
	};

	/**
	 * Return user By userId
	 * @param {*} id 
	 */
	var getUserById = function (id) {

		return new Promise(function (resolve, reject) {

			User.findById(id, function(err, user) {
				if (err) return reject({message: getErrorMessage(err)});
			  
				if( user ){
					return resolve(user);
				}else {
					return reject("User doesn't exists or already deleted.")
				}
			});
		});
	};

	/**
	 * Change password for user 
	 * @param {*} req 
	 * Return user detail info with encrypted password
	 */
	var changePassword = function (req) {

		return new Promise(function (resolve, reject) {

			let user = new User(req.user);

			user.password = req.body.newPassword;

			user.save(function(err){
				if(err)
					return reject({message: getErrorMessage(err)});
				return resolve(user);
			});
		});
	};


	var getErrorMessage = function (error) {
		if(error.errmsg)
			return error.errmsg;
		else if(error.message)
			return error.message;
	};

	return {
		login,
		signUp,
		getUserById,
		changePassword
	}
};

module.exports = userService();