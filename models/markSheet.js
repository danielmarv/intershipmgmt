import { Schema, model, models } from 'mongoose';

const markSheetSchema = new Schema({
  student: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true,
  },
  supervisor: {
    type: Schema.Types.ObjectId,
    ref: 'Supervisor',
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },
  supervisionDate: {
    type: Date,
  },
},
{ timestamps: true }
);

const MarkSheet = models.MarkSheet || model('MarkSheet', markSheetSchema);

export default MarkSheet;