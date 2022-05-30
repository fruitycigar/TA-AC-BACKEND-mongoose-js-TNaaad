// requisitions
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Article Schema
var articleSchema = new Schema({
    title: String,
    description: String,
    tags: [String],
    likes: { type: Number, default: 0 },
    author: {type: Schema.Types.ObjectId, ref: user },
    comments: [String],
}, { timestamps: true })

// exports
module.exports('Articles', articleSchema);