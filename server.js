var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Book = require('./api/models/book'), 
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/LibraryDB'); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const book = require('./api/models/book');
var routes = require('./api/routes/libraryRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('Library API server started on: ' + port);

book.insertMany([
    {
    title: "Suç ve Ceza",
    author: {
        name : "Dostoyevski",
        country : "Rusya",
        birtdate : "1821-10-11"
    },
    price : "100",
    isbn: "afwfwfw-111www",
    language : "Turkce",
    numberOfPages: 700
},
{
    title: "Suç ve Ceza",
    author: {
        name : "Dostoyevski",
        country : "Rusya",
        birtdate : "1821-10-11"
    },
    price : "100",
    isbn: "afwfwfw-111www",
    language : "Turkce",
    numberOfPages: 700
},
{
    title: "Suç ve Ceza",
    author: {
        name : "Dostoyevski",
        country : "Rusya",
        birtdate : "1821-10-11"
    },
    price : "100",
    isbn: "afwfwfw-111www",
    language : "Turkce",
    numberOfPages: 700
},
{
    title: "Suç ve Ceza",
    author: {
        name : "Dostoyevski",
        country : "Rusya",
        birtdate : "1821-10-11"
    },
    price : "100",
    isbn: "afwfwfw-111www",
    language : "Turkce",
    numberOfPages: 700
},
{
    title: "Suç ve Ceza",
    author: {
        name : "Dostoyevski",
        country : "Rusya",
        birtdate : "1821-10-11"
    },
    price : "100",
    isbn: "afwfwfw-111www",
    language : "Turkce",
    numberOfPages: 700
},
{
    title: "Suç ve Ceza",
    author: {
        name : "Dostoyevski",
        country : "Rusya",
        birtdate : "1821-10-11"
    },
    price : "100",
    isbn: "afwfwfw-111www",
    language : "Turkce",
    numberOfPages: 700
}
]).then(function(){
    console.log("Data inserted")  // Success
}).catch(function(error){
    console.log(error)      // Failure
});


