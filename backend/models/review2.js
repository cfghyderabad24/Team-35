const mongoose = require('mongoose');


const review2Schema = new mongoose.Schema({
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


const Review2 = mongoose.model('User', review2Schema);

module.exports = Review2;
