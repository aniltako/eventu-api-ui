var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

var userInfoSchema = new Schema({

    userId: { type: String, required: true },
    education: [{ 
        academicDegree: { type: String, required: true },
        college: { type: String, required: true },
        startDate: { type: String },
        endDate: { type: String}
    }],
    experience: [{ 
        company: { type: String,  required: true },
        designation: { type: String, required: true },
        startDate: { type: String },
        endDate: { type: String}
    }],
    certifications: [{
        title: { type: String, required: true },
        sourceLink: { type: String },
        startDate: { type: String },
        endDate: { type: String}
    }],
    cvLink: { type: String },
    created_at: String,
    updated_at: String
});


userInfoSchema.pre('save', function(next){

    var currentDate = moment().format();

    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

    next();
});

var UserInfo = mongoose.model('User_Info', userInfoSchema);

module.exports = UserInfo;