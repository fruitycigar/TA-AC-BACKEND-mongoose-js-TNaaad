// requisitions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [ String ],
    createdAt: { Date, default: Date.now() },
    likes: { Number, default: 0 }
})

module.exports = mongoose.model('Article', articleSchema);