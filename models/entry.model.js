const mongoose = require('mongoose');

const EntrySchema = mongoose.Schema(
  {
    date: {
      type: String,
      required: [true, 'Please enter Date as 00/00/0000'],
    },
    feelings: {
      type: String,
      required: [false, 'What emotions are you feeling currently'],
    },

    entry: {
      type: String,
      required: [true, 'Tell Me Everything'],
    },
  },
  {
    timestamps: true, //shows the created at and updated at fields
  }
);

const Entry = mongoose.model('Entries', EntrySchema);

module.exports = Entry;
