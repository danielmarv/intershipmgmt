const express = require('express');
const router = express.Router();
const studentHandlers = require('../handlers/studentAuth');

router.post('/register', studentHandlers.registerStudent);
router.get('/track/:studentId', studentHandlers.trackStudent);
router.post('/student-auth', studentHandlers.authenticateStudentByRegNo);
router.post('/student-practice', studentHandlers.getAllPractices);

module.exports = router;
