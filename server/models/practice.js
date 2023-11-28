const mongoose = require('mongoose');

const practiceSchema = new mongoose.Schema({
  practiceName: {
    type: String,
    required: true,
  },
});

const Practice = mongoose.model('Practice', practiceSchema);

module.exports = Practice;
