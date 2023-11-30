const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.on("error", (error) => {
    console.error("MongoDB connection error:", error);
  });
  
  db.once("open", () => {
    console.log("Connected to MongoDB!");
});

module.exports.Student = require("./students");
module.exports.Practice = require("./practice");
module.exports.InternshipSupervisor = require("./internshipSupervisor");
module.exports.AdminUser = require("./adminUsers");
module.exports.MarkSheet = require("./markSheet");