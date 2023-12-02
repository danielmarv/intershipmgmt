import { Schema, model, models } from 'mongoose';

const markSheetSchema = new Schema({
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

const MarkSheet = models.MarkSheet || model('MarkSheet', markSheetSchema);

export default MarkSheet;