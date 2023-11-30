const mongoose = require('mongoose');
const Practice = require('./path-to-your-model/Practice'); // Adjust the path accordingly
const practicesData = [
  { practiceName: 'Practice 1' },
  { practiceName: 'Practice 2' },
  // Add more data as needed
];

// Insert data into the Practice table
Practice.insertMany(practicesData)
  .then((result) => {
    console.log('Data inserted successfully:', result);
  })
  .catch((error) => {
    console.error('Error inserting data:', error);
  })
  .finally(() => {
    // Disconnect from MongoDB after insertion
    mongoose.disconnect();
  });
