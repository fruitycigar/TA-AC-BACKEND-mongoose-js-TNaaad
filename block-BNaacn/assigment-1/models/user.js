// requisitions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// User Schema
var userSchema = new Schema({
    name: String,
    email: { String, lowercase: true } ,
    age: { Number, default: 0 },
    password: { minlength: 5 },
    createdAt: { Date, default: Date.now() }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema);

