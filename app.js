var express = require('express'),
    app = express(),
    port = process.env.PORT || 3000,
    mongoose = require('mongoose'),
    Book = require('./api/models/book'),
    bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
//mongoose.connect('mongodb://localhost:49156/LibraryDB'); 

mongoose.connect('mongodb://mongodb:27017/LibraryDB');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const book = require('./api/models/book');
var routes = require('./api/routes/libraryRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Library API server started on: ' + port);



