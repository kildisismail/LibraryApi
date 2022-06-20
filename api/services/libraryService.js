const mongoose = require('mongoose');
const Book = mongoose.model('Book');

const getAllBook = async () => {
    try {
        const books = await Book.find({});
        return books;
    } catch (error) {
        throw new Error(error);
    }
}

const createBook = async (req, res) => {
    try {
        var new_book = new Book(req.body);
        return await new_book.save();
    } catch (error) {
        throw new Error(error);
    }
};

const getBook = async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        return await book.send(res.body);
    } catch (error) {
        throw new Error(error);
    }
}

module.exports = { getAllBook, createBook, getBook };
