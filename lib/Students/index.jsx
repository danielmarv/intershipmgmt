async function fetchStudentData() {
    try {
        const response = await fetch('/api/student');
        
        if (!response.ok) {
            throw new Error(`Failed to fetch student data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
    } catch (error) {
        console.error('Error fetching student data:', error);
    }
}

// Call the function
fetchStudentData();
