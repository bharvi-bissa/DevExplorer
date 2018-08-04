const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//create Schema

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    refs: "users"
  },
  text: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  avatar: {
    type: String
  },
  //   array of objects
  likes: [
    {
      user: {
        type: Schema.type.ObjectId,
        refs: users
      }
    }
  ],
  //   array of objects
  comments: [
    {
      user: {
        type: Schema.type.ObjectId,
        ref: users
      },

      text: {
        type: String,
        required: true
      },
      avatar: {
        type: String
      },
      date: {
        type: Date,
        default: Date.now
      }
    }
  ],

  date: {
    type: Date,
    default: Date.now
  }
});
