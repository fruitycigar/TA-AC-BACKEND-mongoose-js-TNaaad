// require
var express = require('express');
var mongoose = require('mongoose');

// Connect to data base
mongoose.connect("mongodb://localhost");

// instantiation
var app = express();

// routes
app.get('/', (req, res) => {
    res.send(`TOPGUN`);
})

// listener
app.listen(3000, () => {
    console.log(`Server 3000 is now alive and kicking.`);
})