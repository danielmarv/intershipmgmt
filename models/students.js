import { Schema, model, models } from "mongoose";

const StudentSchema = new Schema({
    fullName: {
        type: String,
        required: true,
    },
    campusName: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
        required: true,
    },
    townName: {
        type: String,
        required: true,
    },
    districtName: {
        type: String,
        required: true,
    },
    kilometers: {
        type: Number,
        required: false,
    },

    schoolPractices: {
        type: String,
        required: true,
    },
    moneyPaid: {
        type: Number,
        required: true,
    },
    regNo: {
        type: String,
        required: true,
        unique: true,
    },

    year: {
        type: String,
        required: true,
    },
    emailId: {
    type: String,
    required: true,
    unique: true,
    },
    phoneNum: {
    type: String,
    required: true,
    },
    markSheet: [
        {
            supervisor: {
                type: Schema.Types.ObjectId,
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
        },
    ],

},
{ timestamps: true }
);

const Student = models.Prompt || model('Student', StudentSchema);

export default Student;
