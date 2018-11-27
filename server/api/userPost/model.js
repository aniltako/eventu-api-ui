var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');

const DAYS = ["ALL", "SUNDAY", "MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "SATURDAY"];

var userPostSchema = new Schema({

    userId: { type: String, required: true },
    status: { type: Boolean, required: true },
    subject: [{ 
        subjects: [{type: String, required: true}],
        grade: [{type: String, required: true}],
    }],
    available: [{ 
        from: { type: Number, required: true},
        to: { type: Number, required: true},
        day: { type: String, uppercase: true, required: true, enum: DAYS}
    }],
    totalStudent: { type: Number },
    deadline: { type: String, required: true },
    created_at: String,
    updated_at: String
});


userPostSchema.pre('save', function(next){

    var currentDate = moment().format();

    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

    next();
});

var UserPost = mongoose.model('user_post', userPostSchema);

module.exports = UserPost;