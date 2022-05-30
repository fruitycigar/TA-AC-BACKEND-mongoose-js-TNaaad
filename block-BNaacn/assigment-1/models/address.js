// requisitons
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Address Schema
var addressSchema = new Schema({
    village: String,
    city: { type: String, required: true },
    state: { type: String, required: true },
    pin: Number,
    user: { type: Scheme.Types.ObjectId, ref: User },
    favourites: [String]
}, { timestamps: true })

module.exports = mongoose.model('Address', addressSchema);