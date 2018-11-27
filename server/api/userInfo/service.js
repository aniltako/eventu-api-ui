var logger = require('../../utils/logger');
var Promise = require('bluebird');
let UserInfo = require('./model');

var userInfoService = () => {

	var saveUserInfo = function(req, res) {

		return new Promise(function (resolve, reject) {

			var tempUserInfo = req.body;
			tempUserInfo.userId = req.decoded.id;

			var userInfo = new UserInfo(tempUserInfo);

			userInfo.save(function(err){
				if(err)
					return reject({message: getErrorMessage(err)});
				return resolve(userInfo);

			});

		});
	};

	
	var getUserInfoById = function (id) {

		return new Promise(function (resolve, reject) {

			UserInfo.findById(id, function(err, userInfo) {
				if (err) return reject({message: err.errmsg});
				return resolve(userInfo);
			});
		});
	};
	
	var getUserInfoByUserId = function (req, res) {

		return new Promise(function (resolve, reject) {

			const userId = req.decoded.id;

			UserInfo.find({'userId': userId }, function(err, userInfo) {
				if (err) return reject({message: err.errmsg});
			  
				return resolve(userInfo);
				
			});
		});
    };
    
	var deleteEducationById = function (userInfoId, educationId) {

		return new Promise(function (resolve, reject) {

            UserInfo.findByIdAndUpdate(userInfoId, {
                $pull: {
                    education: {_id: educationId}
                }
            }, {new: true}, function(err, user) {
				if (err) return reject({message: err.errmsg});
			  
				if( user ){
					return resolve(user);
				}else {
					return reject("User doesn't exists or already deleted.")
				}
			});
		});
    };
    
	var deleteExperienceById = function (userInfoId, experienceId) {

		return new Promise(function (resolve, reject) {

            UserInfo.findByIdAndUpdate(userInfoId, {
                $pull: {
                    education: {_id: experienceId}
                }
            }, {new: true}, function(err, user) {
				if (err) return reject({message: err.errmsg});
			  
				if( user ){
					return resolve(user);
				}else {
					return reject("User doesn't exists or already deleted.")
				}
			});
		});
    };
    
	var deleteCertificationById = function (userInfoIdreq, certificationId) {

		return new Promise(function (resolve, reject) {

            UserInfo.findByIdAndUpdate(userInfoId, {
                $pull: {
                    education: {_id: certificationId}
                }
            }, {new: true}, function(err, user) {
				if (err) return reject({message: err.errmsg});
			  
				if( user ){
					return resolve(user);
				}else {
					return reject("User doesn't exists or already deleted.")
				}
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
		saveUserInfo,
		getUserInfoById,
		getUserInfoByUserId,
        deleteEducationById,
        deleteExperienceById,
		deleteCertificationById
	}
};

module.exports = userInfoService();