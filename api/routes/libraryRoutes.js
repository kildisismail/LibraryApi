'use strict';
module.exports = function(app) {
  var books = require('../controllers/libraryController');

  // todoList Routes
  app.route('/book')
    .get(books.get_all_books)
    .post(books.create_book);


  app.route('/book/:bookId')
    .get(books.get_book)
    .put(books.update_book)
    .delete(books.delete_book);

};
