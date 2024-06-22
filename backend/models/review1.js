const mongoose = require('mongoose');

const review1Schema = new mongoose.Schema({
  ngo: {
    type: String,
    required: true,
    
  },
  dov: {
    type: Date,
   required:true
  },
  review: {
    type: String,
    required: true,
  },
 
});

const Review1 = mongoose.model('Review1', review1Schema);

module.exports = Review1;
