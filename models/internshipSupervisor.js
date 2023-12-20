import { Schema, model, models } from 'mongoose';

const internshipSupervisorSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
  assignedStudents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
},
{ timestamps: true }
);

const InternshipSupervisor = models.InternshipSupervisor || model('InternshipSupervisor', internshipSupervisorSchema);

export default InternshipSupervisor;
