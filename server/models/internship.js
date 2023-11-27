const mongoose = require("mongoose");

const internshipSchema = new mongoose.Schema({
    studentId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true,
      },
    schoolName: {
        type: String,
        required: false,
    },
    townName: {
        type: String,
        required: false,
    },
    districtName: {
        type: String,
        required: false,
    },
    distanceFromBugemaCampuses: {
        kilometers: {
            type: Number,
            required: false,
        },
    },
    description: {
        type: String,
        required: true,
    },
    townName: {
        type: String,
        required: false,
    },
    districtName: {
        type: String,
        required: false,
    },
    distanceFromBugemaCampuses: {
        kilometers: {
            type: Number,
            required: false,
        },
    },
    schoolCategory: {
        type: String,
        required: false,
    },
    moneyPaid: {
        type: Number,
        required: false,
    },
    marks: {
        supervisor1: {
            type: Number,
            required: false,
        },
        supervisor2: {
            type: Number,
            required: false,
        },
    },
    internshipStatus: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        default: 'pending', 
    },
    created: { type: Date, default: Date.now },
});

const Internship = mongoose.model('Internship', internshipSchema);

module.exports = Internship;a);
