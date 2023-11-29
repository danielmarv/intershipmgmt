const express = require('express');
const router = express.Router();
const studentHandlers = require('../handlers/studentAuth');

router.post('/register', studentHandlers.registerStudent);
router.get('/track/:studentId', studentHandlers.trackStudent);
router.post('/student-auth', studentHandlers.authenticateStudentByRegNo);

module.exports = router;
