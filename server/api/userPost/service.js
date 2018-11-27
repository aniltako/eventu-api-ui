var logger = require('../../utils/logger');
var Promise = require('bluebird');
let UserPost = require('./model');

var userPostService = () => {

	/**
	 * creating userPost
	 * @param {*} req 
	 * Return created userPost
	 */
	var saveUserPost = function(userPostRequest) {

		return new Promise(function (resolve, reject) {

			var userPost = new UserPost(userPostRequest);

			userPost.save(function(err){
				if(err){
					logger.log(JSON.stringify(err));
					if(err.errmsg)
						return reject({message: err.errmsg});
					else
						return reject({message: err.message})
				}
				return resolve(userPost);

			});

		});
	};

	return {
		saveUserPost
	}
};

module.exports = userPostService();