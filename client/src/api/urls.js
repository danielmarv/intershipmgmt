import axios from 'axios';

const HOST = 'http://localhost:3001';

export const registerStudent = async (formData) => {
  try {
    const response = await axios.post(`${HOST}/students/register`, formData);
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.error || 'Error registering student');
  }
};

export const authenticateStudent = async (regNo) => {
  try {
    const response = await axios.post(`${HOST}/students/student-auth`, { regNo });
    return response.data.studentData;
  } catch (error) {
    throw new Error(error.response.data.error || 'Authentication error');
  }
};

export const getAllPractices = async () => {
    try {
      const response = await axios.get(`${HOST}/students/student-practice`);
      return response.data;
    } catch (error) {
      throw new Error(error.response.data.error || 'Error getting all practices');
    }
  };

// const trackStudent = async () => {
//   try {
//     // Assume you have the studentData from authentication
//     const studentData = { /* ... */ };

//     const response = await axios.get(`${HOST}/track-student`, {
//       headers: {
//         // Include any necessary headers for authentication if required
//       },
//     });

//     return response.data;
//   } catch (error) {
//     throw new Error(error.response.data.error || 'Tracking error');
//   }
// };