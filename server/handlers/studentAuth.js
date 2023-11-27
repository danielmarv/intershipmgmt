const Student = require('../models/Student');

// Register student handler
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

    // Save the student to the database
    const savedStudent = await newStudent.save();

    res.status(201).json(savedStudent);
  } catch (error) {
    console.error('Register student error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = registerStudent;
