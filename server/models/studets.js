const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: false,
    },
    campusName: {
        type: String,
        required: false,
    },
    studentDetails: {
        currentClass: {
            year: {
                type: String,
                required: false,
            },
            sem: {
                type: Number,
                required: false,
            },
        },
        emailId: {
            type: String,
            required: true,
            unique: true,
        },
        phoneNum: {
            type: String,
            required: false,
        },
    },
    schoolId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'School',
        required: true,
    },
    departmentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Department',
        required: true,
    },
    created: { type: Date, default: Date.now },
    internships: [{ type: mongoose.Schema.Types.ObjectId, ref: "Internship" }],
});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
