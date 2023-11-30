const express = require('express');
const app = express();
const dotenv = require('dotenv');
const db = require("./models/models");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Internship Management System');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
