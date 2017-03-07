// Dependencies
 express = require('express');
var bodyParser = require('body-parser');
var mongoose = require("mongoose");

// Models
var ToDo = require("./models/toDo.js");

// Initialize Express
var app = express();

//middleware
app.use(bodyParser.json());

//where static files live
app.use(express.static(__dirname + "/app"));

// Database configuration with mongoose
mongoose.connect("mongodb://localhost/ToDoSchema");
var db = mongoose.connection;
db.on("error", function(error) {
  console.log("Mongoose Error: ", error);
});
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Routes

// find ever task, completed and incomplete
app.get('/api/todo', function (req, res){
    //get data DB
    ToDo.find({}, function(err, data){
      // send to server.js
      res(data);
    });
});

// update task from incomplete to completed
app.post('/api/completed', function (req, res){
    //get data DB
    ToDo.findById(data.id, function(err, row){
      //chage from false --> true
      row.completed = true;
      row.save();
    });
});

// create a new task
app.post('/api/new', function (req, res){
    //get data DB
    ToDo.create(data.id, function(err, row){
      //chage from false --> true
      row.completed = true;
      row.save();
    });
});


//have the app listen to whatever is set as the PORT or 3000
app.listen(process.env.PORT || 3000);
