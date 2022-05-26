// requisites
var express = require('express');
var mongoose = require('mongoose');

// database connection
mongoose.connect("mongodb://localhost:27017/bogey", (err) => {
    console.log(err ? err : `Connected to database.`);
});

// instantiation
var app = express();

// listener
app.listen(3000, () => {
    console.log(`Bogey 3000 is firing on all fours.`);
})