var mongoose = require('mongoose');
var Schema = mongoose.Scheme;

var articleScheme = new Schema({
     title: String,
     issue: Number
})