// requisitions
const { application } = require('express');
var express = require('express');
var mongoose = require('mongoose');

// database connect
mongoose.connect("mongodb://localhost", (err) => {
    console.log(err ? err : 'Connection secured.');
})

// instantiation
var app = express();

// routes
app.get('/', (req, res) => {
    res.send(`I feel the need... THE NEED, FOR SPEED!`);
})

// listener
app.listen(3000, () => {
    console.log(`Listening at 3000. We're good.`);
})