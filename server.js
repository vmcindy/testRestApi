var express = require('express'),
app = express(),
port = process.env.PORT || 3300,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/jsonPlaceholder'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// initializing db variables
var users = require('./api/models/usersModel');
var posts = require('./api/models/postsModel');
var comments = require('./api/models/commentsModel');

// importing route
var usersRoutes = require('./api/routes/usersRoutes');
var postsRoutes = require('./api/routes/postsRoutes');
var commentsRoutes = require('./api/routes/commentsRoutes');

// register the route
usersRoutes(app);
postsRoutes(app);
commentsRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);