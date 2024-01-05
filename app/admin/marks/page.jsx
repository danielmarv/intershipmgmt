'use client';

import { useState, useEffect } from 'react';
import MarkSheetForm from '@components/Marks';

const Marks = () => {
  const [students, setStudents] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [formData, setFormData] = useState({
    student: '',
    supervisor: '',
    marks: '',
  });


  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await fetch('/api/student');
        const studentsData = await studentsResponse.json();
        setStudents(studentsData);

        const supervisorsResponse = await fetch('/api/supervisor');
        const supervisorsData = await supervisorsResponse.json();
        setSupervisors(supervisorsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/marks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          student: formData.student,
          supervisor: formData.supervisor,
          marks: formData.marks,
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setSubmittedData(result);
        console.error('Failed to submit data:', response.status);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div>
      <h1>Mark Sheet Form</h1>
      <MarkSheetForm students={students} supervisors={supervisors} onSubmit={handleSubmit} />
    </div>
  );
};

export default Marks;
