// requisitions
var express = require('express');
var mongoose = require('mongoose');

// Connect to Database
mongoose.connect("mongodb://localhost/assignment-1", (err) => {
    console.log(err ? err : "Connected to mongodb successfully.");
})

// app instantiation
var app = express();

// listener
app.listen(3000, () => {
    console.log(`3000 is out and about.`);
})