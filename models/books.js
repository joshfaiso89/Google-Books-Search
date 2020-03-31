const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const bookSchema = new Schema({
    title: {type: String, required: true}, 
    author: {type: String, required: true},
    description: {type: String, required: false},
    picture: {type: String, required: false},
    hyperLink: {type: String, required: false}
})

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;