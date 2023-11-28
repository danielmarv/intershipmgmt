const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
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
  distanceFromBugemaCampuses: {
    kilometers: {
      type: Number,
      required: false,
    },
  },
  schoolCategory: {
    type: String,
    enum: ['prac1', 'prac2'],
    default: 'prac1',
    required: true,
  },
  moneyPaid: {
    type: Number,
    required: true,
  },
  studentDetails: {
    regNo: {
      type: String,
      required: true,
      unique: true,
    },
    currentClass: {
      year: {
        type: String,
        required: true,
      },
      sem: {
        type: Number,
        required: true,
      },
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
  },
  internshipCode: {
    type: String,
    required: true,
    unique: true,
  },

});

const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
