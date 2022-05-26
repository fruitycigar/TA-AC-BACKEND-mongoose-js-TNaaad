// require
var express = require('express');
var mongoose = require('mongoose');

// connecting to database
mongoose.connect("mongodb://localhost", (err) => {
    console.log(err ? err : 'Target down.')
});

// app instantiation
var app = express();

// routes
app.get('/', (req, res) => {
    res.send(`validate everything.`);
})

// listener
app.listen(3000, () => {
    console.log(`Server 3000 is now alert.`);
})