const express = require('express');
const router = express.Router();
const handle = require("../handlers/student");

router.post("/auth", handle.studentAuth);
router.post("/student-register", handle.registerStudent);
router.get("/practice", handle.getPractice);

module.exports = router;