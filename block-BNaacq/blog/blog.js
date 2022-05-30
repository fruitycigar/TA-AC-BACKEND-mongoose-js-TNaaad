// requisitions
var express = require('express');
var mongoose = require('mongoose');

// Connect to Database
mongoose.connect("mongodb://localhost/blog", (err) => {
    console.log(err ? err : "Connection established.");
})

// app instantiation
var app = express();

// routes
app.get('/', (req, res) => {
    res.send(`This is the blog. Screw you, and you country.`);
})

// listener
app.listen(3000, () => {
    console.log(`Server 3000 is now LIVE.`);
})