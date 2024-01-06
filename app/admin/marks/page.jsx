'use client';

import { useState, useEffect } from 'react';
import MarkSheetForm from '@components/Marks';
import Toast from '@components/Toast';

const Marks = () => {
  const [students, setStudents] = useState([]);
  const [supervisors, setSupervisors] = useState([]);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState(false); 


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

  const handleSubmit = async (data) => {
    // e.preventDefault();
    setSubmitting(true);
    try {
      const response = await fetch('/api/marks', {
        method: 'POST',
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSubmitted(true);
        console.error('Failed to submit data:', response.status);
      }
    } catch (error) {
      console.error('Error submitting data:', error);
      setErrors(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      {submitted && <Toast type={'success'} timeout={8000} message={'Marks created succussfully'} />}
      {errors && <Toast type={'errors'} timeout={8000} message={`${errors}`} />}

      <MarkSheetForm 
        students={students} 
        supervisors={supervisors}
        // formData={formData}
        // setFormData={setFormData} 
        submitting={submitting}
        onSubmit={handleSubmit} 
      />

    </>

  );
};

export default Marks;
