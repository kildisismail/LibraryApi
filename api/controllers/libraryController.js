'use strict';

var mongoose = require('mongoose'),
  Book = mongoose.model('Book');
// import * as libraryService from '../services/libraryService';
const libraryService = require('../services/libraryService');

exports.get_all_books = async (req, res) => {
  try {
    const result = await libraryService.getAllBook();
    res.json({
      result: true,
      data: result,
      time: new Date()
    });
  } catch (error) {
    res.json({
      result: false,
      data: null,
      message: error.message,
      time: new Date()
    });
  }
};


exports.create_book = async (req, res) => {
  try {
    const result = await libraryService.createBook(req);
    return res.json({
      result: true,
      data: result,
      time: new Date()
    });

  } catch (error) {
    res.json({
      result: false,
      data: null,
      message: error.message,
      time: new Date()
    });
  }
};

exports.get_book = function (req, res) {
  try {
    Book.findById(req.params.bookId, function (err, book) {
      if (err)
        res.send(err);
      return res.json({
        result: true,
        data: book,
        time: new Date()
      });
    });
  } catch (error) {
    res.json({
      result: false,
      data: null,
      message: error.message,
      time: new Date()
    });
  }
};

exports.update_book = function (req, res) {
  try {
    Book.findOneAndUpdate({ _id: req.params.bookId }, req.body, { new: true }, function (err, book) {
      if (err)
        res.send(err);
        return res.json({
          result: true,
          data: book,
          time: new Date()
        });
      });
  } catch (error) {
    res.json({
      result: false,
      data: null,
      message: error.message,
      time: new Date()
    });
  }
};

exports.delete_book = function (req, res) {
  try {
    Book.remove({
      _id: req.params.bookId
    }, function (err, book) {
      if (err)
        res.send(err);
        return res.json({
          result: true,
          message: 'book deleted',
          time: new Date()
        });
    });
  } catch (error) {
    res.json({
      result: false,
      data: null,
      message: error.message,
      time: new Date()
    });
  }
};