const dotenv = require('dotenv');
dotenv.config();
const mongoose = require("mongoose");

mongoose.set("debug", true);
mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGO_URI);

const db = mongoose.connection;

db.once('open', async () => {
  console.log('Connected to MongoDB!');

  try {
    // Sample data for Practice collection
    const practiceData = [
      { practiceName: 'Practice 1' },
      { practiceName: 'Practice 2' },
      // Add more data as needed
    ];

    // Insert data into the Practice collection
    await db.collection('practices').insertMany(practiceData);

    console.log('Data uploaded to Practice collection successfully!');
  } catch (error) {
    console.error('Error uploading data:', error);
  } finally {
    // Disconnect from MongoDB after uploading data
    mongoose.disconnect();
  }
});

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