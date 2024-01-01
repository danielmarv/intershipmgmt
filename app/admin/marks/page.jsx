'use client';

import { useState, useEffect } from 'react';
import MarkSheetForm from '@components/Marks';

const Marks = () => {
  const [students, setStudents] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [submittedData, setSubmittedData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const studentsResponse = await fetch('/api/students');
        const studentsData = await studentsResponse.json();
        setStudents(studentsData);

        const supervisorsResponse = await fetch('/api/supervisors');
        const supervisorsData = await supervisorsResponse.json();
        setSupervisors(supervisorsData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const handleSubmit = (data) => {
    console.log('Submitted data:', data);
    setSubmittedData(data);
  };

  return (
    <div>
      <h1>Mark Sheet Form</h1>
      <MarkSheetForm students={students} supervisors={supervisors} onSubmit={handleSubmit} />
      {submittedData && (
        <div>
          <h2>Submitted Data</h2>
          <pre>{JSON.stringify(submittedData, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Marks;
