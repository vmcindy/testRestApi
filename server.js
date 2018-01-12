var express = require('express'),
app = express(),
port = process.env.PORT || 3300,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jsonPlaceHolder'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initializing db variables
var users = require('./api/models/usersModel');

// importing route
var usersRoutes = require('./api/routes/usersRoutes'); 

// register the route
usersRoutes(app); 

app.listen(port);

console.log('RESTful API server started on: ' + port);