const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
  name: {
    type: String,
    required: true,
   
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  Date: {
    type: Date,
    required: true,
  },
  NGO :{
    type: String,
    required: true,
  },
 
});

const User = mongoose.model('User1', userSchema);

module.exports = User;
