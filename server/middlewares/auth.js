// middleware.js

const db = require("../models/models");

async function fetchStudentData(req, res, next) {
  try {
    // Assuming you have a way to get the student data from the request, 
    // for example, by extracting a student ID from the request params.
    const studentId = req.params.studentId;
    
    // Fetch student data from the database using the studentId
    const studentData = await db.Student.findOne({ _id: studentId });

    if (!studentData) {
      return res.status(404).json({ error: 'Student not found' });
    }

    // Set the student data to res.locals for future routes to access
    res.locals.studentData = studentData.toObject();
    
    // Call the next middleware or route handler
    next();
  } catch (error) {
    console.error('Fetch student data error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

module.exports = { fetchStudentData };
