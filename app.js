//This file spins up the express application, which makes handling request easier.

const express = require('express');//This requires the package we just installed, express.
const app = express(); //The express() method creates a new express application.

//This sets up a "middleware" such that an incoming request has to go through app.use() and whatever we pass to it.
app.use((request, response, next) =>{
    response.status(200).json({
        message: 'It works!'
    });//This sends a response which takes in status code 200 (everything is okay) and sends it as a json response.
});

module.exports = app;