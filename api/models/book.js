const mongoose = require('mongoose');

const authorSchema = mongoose.Schema({
    name: { type: String, required: true },
    country: { type: String, required: true },
    birthDate: { type: Date, required: false },
  });

const bookSchema = mongoose.Schema({
  title: { type: String, required: true },
  author: { type: authorSchema, required: true },
  price: { type: String, required: true },
  isbn: { type: String, required: true },
  language: { type: String, required: true },
  numberOfPages: { type: Number, required: true },
  publisher: { type: String, required: false },
});

module.exports = mongoose.model('Book', bookSchema);

