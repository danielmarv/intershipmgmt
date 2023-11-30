const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require("./models/models");
const studentRoutes = require('./routes/students');
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Internship Management System');
});

app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
