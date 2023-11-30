const express = require('express');
const app = express();
const cors = require("cors");
const dotenv = require('dotenv');
const db = require("./models/models");
const routes = require("./routes");
dotenv.config();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Internship Management System');
});

app.use('/students', routes.student);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
