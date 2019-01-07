var express = require('express'),
app = express(),
port = process.env.PORT || 3300,
mongoose = require('mongoose'),
bodyParser = require('body-parser');

// --- Mongoose instance connection url connection --- 
mongoose.Promise = global.Promise;

// ---  Local Mongo DB Instance - Connection String --- 
var localStr = 'mongodb://localhost/jsonPlaceholder';
var cloudStr = 'mongodb://<username>:<password>@cluster0-shard-00-00-socrk.mongodb.net:27017,cluster0-shard-00-01-socrk.mongodb.net:27017,cluster0-shard-00-02-socrk.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin';
mongoose.connect(localStr);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// ---  Initializing db variables --- 
var users = require('./api/models/usersModel');
var posts = require('./api/models/postsModel');
var comments = require('./api/models/commentsModel');
var photos = require('./api/models/photosModel');

// ---  Importing route --- 
var usersRoutes = require('./api/routes/usersRoutes');
var postsRoutes = require('./api/routes/postsRoutes');
var commentsRoutes = require('./api/routes/commentsRoutes');
var photosRoutes = require('./api/routes/photosRoutes');

// ---  Register the route --- 
usersRoutes(app);
postsRoutes(app);
commentsRoutes(app);
photosRoutes(app);

app.listen(port);

console.log('RESTful API server started on: ' + port);