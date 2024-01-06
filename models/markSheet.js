import { Schema, model, models } from 'mongoose';

const markSheetSchema = new Schema({
  student: {
    type: String,
    required: true,
  },
  supervisor: {
    type: String,
    required: true,
  },
  marks: {
    type: Number,
    required: true,
  },

},
{ timestamps: true }
);

const MarkSheet = models.MarkSheet || model('MarkSheet', markSheetSchema);

export default MarkSheet;