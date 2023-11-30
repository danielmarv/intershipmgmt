const Student = require('../models/Student');
const express = require('express');
const router = express.Router();
const Practice = require('../models/practice');

const getAllPractices = async () => {
  try {
    const practices = await Practice.find();
    return practices;
  } catch (error) {
    console.error('Get all practices error:', error);
    throw new Error('Internal Server Error');
  }
};
  // Register student handler
  const registerStudent = async (req, res) => {
    try {
      const allPractices = await getAllPractices();

      // Validate selected practices
      const invalidPractices = selectedPractices.filter(practice => !allPractices.find(p => p.practiceName === practice));
      if (invalidPractices.length > 0) {
        return res.status(400).json({ error: `Invalid practices: ${invalidPractices.join(', ')}` });
      }

      // Check if both practices are selected
      const isBothPracticesSelected = selectedPractices.length === allPractices.length;

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
        selectedPractices,
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
      });

      if (isBothPracticesSelected) {
        // If both practices are selected, associate with all practices
        newStudent.schoolPractices = allPractices.map(practice => practice._id);
      } else {
        // Otherwise, associate with selected practices
        const associatedPractices = await createPractices(selectedPractices);
        newStudent.schoolPractices = associatedPractices;
      }
  
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
      studentData: student.toObject(),
    };
  } catch (error) {
    console.error('Student authentication error:', error);
    return { error: 'Internal Server Error' };
  }
};

router.post('/student-auth', async (req, res) => {
  const { regNo } = req.body;
  const authenticationResult = await authenticateStudentByRegNo(regNo);

  if (authenticationResult.error) {
    return res.status(404).json({ error: authenticationResult.error });
  }

  return res.status(200).json(authenticationResult);
});

module.exports = router;

const trackStudent = async (req, res) => {
  try {
    // Extract student data from the authentication result
    const { studentData } = res.locals;

    // Filter out fields with null or undefined values
    const filteredStudentData = Object.fromEntries(
      Object.entries(studentData).filter(([_, value]) => value !== null && value !== undefined)
    );

    res.status(200).json(filteredStudentData);
  } catch (error) {
    console.error('Track student error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = {
  registerStudent,
  authenticateStudentByRegNo,
  trackStudent,
};

