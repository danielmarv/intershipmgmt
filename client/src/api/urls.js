const HOST = process.env.HOST

const generateFrontendUrl = (endpoint, params = '') => {
    return `${HOST}/${endpoint}/${params}`;
};
  
  // Example usage
export const registerUrl = generateFrontendUrl('register');
export const trackUrl = generateFrontendUrl('track', ':studentId');
export const studentAuthUrl = generateFrontendUrl('student-auth');
export const studentPracticeUrl = generateFrontendUrl('student-practice');