let mongoose = require('mongoose');

// create a model class
let Survey = mongoose.Schema({
    survey: String,
    purpose: String,
    creator: String,
    rating: Number
},
{
  collection: "survey"
});

module.exports = mongoose.model('Survey', Survey);
