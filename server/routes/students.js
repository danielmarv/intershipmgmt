const express = require('express');
const router = express.Router();
const handle = require("../handlers/student");
const auth = require('../middlewares/auth')

router.post("/auth",auth, handle.studentAuth);
router.post("/student-register",auth, handle.registerStudent);
router.get("/practice",auth, handle.getPractice);

module.exports = router;