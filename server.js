//Dependencies
var express = require('express');

//using express
var app = express();


//Created a port number
var port = 3000;

//Listening for the connection of the port
app.listen(port, function() {
    console.log("listening on port:" + port);
});

