const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    profile_pic:{
        type:String
    },
    name: {
    type: String,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
  phone: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  }
});

Users = mongoose.model('User',userSchema);
module.exports = Users



