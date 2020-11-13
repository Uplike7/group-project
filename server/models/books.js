let mongoose = require('mongoose');

// create a model class
let Book = mongoose.Schema({
    survey: String,
    purpose: String,
    creator: String,
    rating: Number
},
{
  collection: "books"
});

module.exports = mongoose.model('Book', Book);

