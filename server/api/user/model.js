var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var moment = require('moment');
var authService = require('../auth/service');

var userSchema = new Schema({
    firstName: { 
        type: String, required: true 
    },
    lastName: { 
        type: String, required: true 
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    username: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    },
    gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },
    age: { 
        type: Number, 
        required: true 
    },
    role: {
        type: String,
        required: true,
        enum: ["student", "parent", "teacher"]
    },
    created_at: String,
    updated_at: String
});


userSchema.pre('save', function(next){

    var currentDate = moment().format();

    this.updated_at = currentDate;

    if(!this.created_at)
        this.created_at = currentDate;

    if(this.isModified('password')){
        this.password = authService.encryptPassword(this.password);
    }

    next();
});

var User = mongoose.model('User', userSchema);

module.exports = User;