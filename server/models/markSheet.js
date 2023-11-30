const mongoose = require('mongoose');

const markSheetSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  supervisor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'InternshipSupervisor',
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  supervisionDate: {
    type: Date,
    required: true,
  },
});

const MarkSheet = mongoose.model('MarkSheet', markSheetSchema);

module.exports = MarkSheet;