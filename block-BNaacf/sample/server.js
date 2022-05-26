// requisitions
var express = require('express');
var mongoose = require('mongoose');

// connecting to database
mongoose.connect("mongodb://localhost", (err) => {
    console.log(err ? err : `Connected, bitches!`);
})

// App initiation
var app = express();

// routes
app.get('/', (req, res) => {
    res.send(`Target-rich environment.`);
})

// listener
app.listen(3000, () => {
    console.log(`Prime time, 3000.`);
})