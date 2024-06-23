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
    type: String,
    required: true,
  },
  NGO :{
    type: String,
    required: true,
  },
 
});

const cronjob = mongoose.model('cronjob', userSchema);

module.exports = cronjob;
