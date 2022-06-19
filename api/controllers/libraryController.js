'use strict';

var mongoose = require('mongoose'),
  Book = mongoose.model('Book');

try {
  exports.get_all_books = function (req, res) {
    Book.find({}, function (err, task) {
      if (err)
        res.send(err);
        res.json(task);
    });
  };
} catch (error) {
  throw new Error("An unexpected error occurred. Error message: " + error.message);
}

try {
  exports.create_book = function (req, res) {
    var new_book = new Book(req.body);
    new_book.save(function (err, book) {
      if (err)
        res.send(err);
        res.json(book);
    });
  };
} catch (error) {
  throw new Error("An unexpected error occurred. Error message: " + error.message);
}


try {
  exports.get_book = function (req, res) {
    Book.findById(req.params.bookId, function (err, book) {
      if (err)
        res.send(err);
        res.json(book);
    });
  };
} catch (error) {
  throw new Error("An unexpected error occurred. Error message: " + error.message);
}

try {
  exports.update_book = function (req, res) {
    Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, function (err, book) {
      if (err)
        res.send(err);
        res.json(book);
    });
  };
} catch (error) {
  throw new Error("An unexpected error occurred. Error message: " + error.message);
}


exports.delete_book = function (req, res) {
  Book.remove({
    _id: req.params.bookId
  }, function (err, book) {
    if (err)
      res.send(err);
      res.json({ message: 'book deleted' });
  });
};