var express = require('express'),
app = express(),
port = process.env.PORT || 3300,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Task = require('./api/models/todoListModel');
var User = require('./api/models/usersModel');

var todoRoutes = require('./api/routes/todoListRoutes'); //importing route
var usersRoutes = require('./api/routes/usersRoutes'); //importing route

usersRoutes(app); //register the route
todoRoutes(app); //register the route

app.listen(port);

console.log('RESTful API server started on: ' + port);