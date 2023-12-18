import { Schema, model, models } from 'mongoose';

const internshipSupervisorSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  // username: {
  //   type: String,
  //   required: true,
  //   unique: true,
  // },
  // password: {
  //   type: String,
  //   required: true,
  // },
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
