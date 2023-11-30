const express = require('express');
const router = express.Router();
const handle = require("../handlers");
router.post("/auth", handle.studentAuth);
router.post("/student-register", handle.registerStudent);

module.exports = router;