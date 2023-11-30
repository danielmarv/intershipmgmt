const express = require('express');
const router = express.Router();
const db = require("../models/models");
exports.getPractice =  async () => {
  try {
    const practices = await db.Practice.find();
    return practices;
  } catch (error) {
    console.error('Get all practices error:', error);
    throw new Error('Internal Server Error');
  }
};
  // Register student handler
  exports.registerStudent = async (req, res) => {
    try {
      // Create the student
      const newStudent = await db.Student.create({
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
  
      const savedStudent = await newStudent.save();
  
      res.status(201).json(savedStudent);
    } catch (error) {
      console.error('Register student error:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  };
  

// Student authentication route
exports.studentAuth =  async (req, res, next) => {
  try {
    const student = await db.Student.findOne({ regNo: req.body.studentDetails.regNo });

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

// router.post('/student-auth', async (req, res) => {
//   const { regNo } = req.body;
//   const authenticationResult = await authenticateStudentByRegNo(regNo);

//   if (authenticationResult.error) {
//     return res.status(404).json({ error: authenticationResult.error });
//   }

//   return res.status(200).json(authenticationResult);
// });


router.get('/track/:studentId', async (req, res) => {
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
});

module.exports = router;

