const mongoose = require('mongoose');

const internshipSupervisorSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  assignedStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
});

const InternshipSupervisor = mongoose.model('InternshipSupervisor', internshipSupervisorSchema);

module.exports = InternshipSupervisor;
