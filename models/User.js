const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// create UserSchema
const UserSchema = new Schema({
   name: {
      type: String,
      required: true
   },
   email: {
      required: true,
      type: String
   },
   password: {
      type: String,
      required: true
   },
   avatar: {
      type: String
   },
   date: {
      type: Date,
      default: Date.now
   },
});

module.exports = mongoose.model('users', UserSchema);