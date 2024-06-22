const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
 
  email: {
    type: string,
    required: true,
   
  },
  password: {
    type: String,
    required: true,
  },
 
});

const User = mongoose.model('User1', userSchema);

module.exports = User;
