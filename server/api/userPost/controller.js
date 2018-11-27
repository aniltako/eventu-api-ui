var userPostService = require('./service');
var logger = require('../../utils/logger');

exports.saveUserPost = function(req, res, next){

    let userPostRequest = req.body;

    userPostService.saveUserPost(userPostRequest)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};
