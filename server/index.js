const express = require('express');
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require('dotenv');
const db = require("./models/models");
// const routes = require("./routes");
const studentRoutes = require('./routes/students')
dotenv.config();

const PORT = process.env.PORT || 3001;
app.use(cors());
app.use(bodyParser.json({ limit: "50mb" })); // accept data with 50mb limit


app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the Internship Management System');
});

app.use('/students', studentRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
