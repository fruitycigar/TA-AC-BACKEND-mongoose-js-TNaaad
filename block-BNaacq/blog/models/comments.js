// require
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// commentSchema
var commentSchema = new Schema({
    content: String,
    author: { type: Schema.Types.ObjectId, ref: user },
    article: { type: Schema.Types.ObjectId, ref: article },
}, { timestamps: true })

module.exports('Comments', commentSchema);