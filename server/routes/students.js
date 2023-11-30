const express = require('express');
const router = express.Router();
const handle = require("../handlers");
router
  .route("/")
  .post( handle.studentAuth);
router.post("/student-register").get(student, handle.registerStudent);
