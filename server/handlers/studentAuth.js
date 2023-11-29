const Student = require('../models/Student');
const express = require('express');
const router = express.Router();
const Practice = require('../models/practice');
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
        selectedPractices, // Assuming you receive an array of selected practices from the request
      } = req.body;
  
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

      const associatedPractices = await Promise.all(
        selectedPractices.map(async (practiceName) => {
          const practice = await Practice.findOne({ practiceName }) || new Practice({ practiceName });
          await practice.save();
          return practice._id;
        })
      );
  
      newStudent.schoolPractices = associatedPractices;
  
      const savedStudent = await newStudent.save();
  
      res.status(201).json(savedStudent);
    } catch (error) {
      console.error('Register student error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  
module.exports = registerStudent;

// Student authentication route
const authenticateStudentByRegNo = async (regNo) => {
  try {
    const student = await Student.findOne({ 'studentDetails.regNo': regNo });

    if (!student) {
      return { error: 'Student not found' };
    }

    return {
      studentId: student._id,
      
    };
  } catch (error) {
    console.error('Student authentication error:', error);
    return { error: 'Internal Server Error' };
  }
};

// Example usage in a route
router.post('/authenticate', async (req, res) => {
  const { regNo } = req.body;
  const authenticationResult = await authenticateStudentByRegNo(regNo);

  if (authenticationResult.error) {
    return res.status(404).json({ error: authenticationResult.error });
  }

  // Return relevant information without redirection
  return res.status(200).json(authenticationResult);
});


