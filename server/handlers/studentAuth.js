const Student = require('../models/Student');
const express = require('express');
const router = express.Router();


// Generating the Internshipcode
const generateUniqueRandomNumericPortion = async () => {
    const min = 1000;
    const max = 9999;
  
    let isUnique = false;
    let randomNumericPortion;
  
    while (!isUnique) {
      randomNumericPortion = Math.floor(Math.random() * (max - min + 1)) + min;
      const existingStudent = await Student.findOne({ internshipCode: randomNumericPortion });
      isUnique = !existingStudent;
    }
  
    return randomNumericPortion;
  };

  // Register student handler
const registerStudent = async (req, res) => {
  try {
    const {
        fullName,
      schoolName,
      campusName,
      townName,
      districtName,
      distanceFromBugemaCampuses,
      schoolCategory,
      moneyPaid,
      currentClassYear,
      currentClassSem,
      emailId,
    } = req.body;

    const currentYear = new Date().getFullYear();
    const randomNumericPortion = generateUniqueRandomNumericPortion();
    const internshipCode = `${currentYear}/${randomNumericPortion}`;

    // Create the student
    const newStudent = new Student({
      fullName,
      campusName,
      schoolName,
      townName,
      districtName,
      distanceFromBugemaCampuses,
      schoolCategory,
      moneyPaid,
      studentDetails: {
        regNo,
        currentClass: { year: currentClassYear, sem: currentClassSem },
        emailId,
        phoneNum,
      },
      internshipCode,
    });
    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    console.error('Register student error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = registerStudent;

// Student authentication route
router.post('/authenticate', async (req, res) => {
  try {
    const { internshipCode } = req.body;
    const student = await Student.findOne({ internshipCode });

    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }
    if (student.internshipStatus === 'Approved') {
      // Student is approved, return relevant information
      return res.status(200).json({
        studentId: student._id,
        internshipStatus: student.internshipStatus,
      });
    } else if (student.internshipStatus === 'Rejected') {
      // Student is rejected, return relevant information
      return res.status(200).json({
        studentId: student._id,
        internshipStatus: student.internshipStatus,
        rejectionReason: student.rejectionReason, // Assuming there's a field for rejection reason
        // Add other relevant information as needed
      });
    } else {
      // Student is in pending status, return relevant information
      return res.status(200).json({
        studentId: student._id,
        internshipStatus: student.internshipStatus,
        // Add other relevant information as needed
      });
    }
  } catch (error) {
    console.error('Student authentication error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;

