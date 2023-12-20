import axios from 'axios';

export const fetchStudentData = async (req) => {
    const response = await axios.get('/api/student');
    return response;
};
  

