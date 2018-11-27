var userInfoService = require('./service');
var logger = require('../../utils/logger');

exports.saveUserInfo = function(req, res, next){

    userInfoService.saveUserInfo(req, res)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};

exports.getUserInfoByUserId = function(req, res, next){

    userInfoService.getUserInfoByUserId(req, res)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};

exports.deleteEducationById = function(req, res, next){

    const userInfoId = req.params.userInfoId;
    const educationId = req.params.educationId;

    userInfoService.deleteEducationById(userInfoId, educationId)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};

exports.deleteExperienceById = function(req, res, next){

    const userInfoId = req.params.userInfoId;
    const experienceId = req.params.experienceId;

    userInfoService.deleteExperienceById(userInfoId, experienceId)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};

exports.deleteCertificationById = function(req, res, next){

    const userInfoId = req.params.userInfoId;
    const certificationId = req.params.certificationId;

    userInfoService.deleteCertificationById(userInfoId, certificationId)
        .then(function (result) {
            res.status(200).json(result);
        })
        .catch(function (err) {
            return res.status(400).send(err);
        });
};

