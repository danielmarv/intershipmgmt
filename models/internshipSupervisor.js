import { Schema, model, models } from 'mongoose';

const SupervisorSchema = new Schema({
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
      type: Schema.Types.ObjectId,
      ref: 'Student',
    },
  ],
},
{ timestamps: true }
);

const Supervisor = models.InternshipSupervisor || model('Supervisor', SupervisorSchema);

export default Supervisor;
