import { Schema, model, models } from 'mongoose';

const practiceSchema = new Schema({
  practiceName: {
    type: String,
    required: true,
  },
});

const Practice = models.Practice || model('Practice', practiceSchema);

export default Practice;
