const HOST = process.env.HOST

const generateFrontendUrl = (endpoint, params = '') => {
    return `${HOST}/${endpoint}/${params}`;
  };
  
  // Example usage
  const registerUrl = generateFrontendUrl('register');
  const trackUrl = generateFrontendUrl('track', ':studentId');
  const studentAuthUrl = generateFrontendUrl('student-auth');