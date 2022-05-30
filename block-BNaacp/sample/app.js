// requisitions
var express = require('express');
var mongoose = require('mongoose');
var User = require('./models/user');

// connecting to database
mongoose.connect("mongodb://localhost/sample", (err) => {
    console.log(err ? err : "Connection secured.");
})

// app instantiation
var app = express();

// middlewares
app.use(express.json());

// routes
app.get('/', (req, res) => {
    User.find(req.body, (err, users) => {
        res.json(users);
    })
})

app.post('/users', (req, res) => {
    User.create(req.body, (err, user) => {
        res.json(user);
    } )
})

app.get('/users/:id', (req, res) => {
    User.findById(req.params.id, (err, user) => {
        console.log(err);
        res.json(user);
    })
})

app.put('/users/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedUser) => {
        res.json(updatedUser);
    })
})

app.delete('/users', (req, res) => {
    User.findByIdAndDelete("62947e088bfb75c1991ccdeb", (err, user) => {
        console.log(err);
        res.send("User Destroyed.");
    })
})

// listener
app.listen(3000, () => {
    console.log(`Server 3000 is up and about.`);
})