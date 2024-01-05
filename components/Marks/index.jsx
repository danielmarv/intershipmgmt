// MarkSheetForm.js

import { useState, useEffect } from 'react';
import Select from 'react-select';

const MarkSheetForm = ({ students, supervisors, onSubmit, handleSubmit }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedSupervisor, setSelectedSupervisor] = useState('');
  const [marks, setMarks] = useState('');

  const handleStudentChange = (selectedOption) => {
    setSelectedStudent(selectedOption);
  };

  const handleSupervisorChange = (selectedOption) => {
    setSelectedSupervisor(selectedOption);
  };

  const handleMarksChange = (e) => {
    setMarks(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Pass the selected values to the parent component for submission
    onSubmit({
      student: selectedStudent,
      supervisor: selectedSupervisor,
      marks: marks,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Student:</label>
        <Select
          value={selectedStudent}
          onChange={handleStudentChange}
          options={students.map((student) => ({ value: student._id, label: student.fullName }))}
          isSearchable
          placeholder="Search for a student..."
        />
      </div>
      <div>
        <label>Select Supervisor in the same district:</label>
        <Select
          value={selectedSupervisor}
          onChange={handleSupervisorChange}
          options={supervisors.map((supervisor) => ({ value: supervisor._id, label: supervisor.fullName }))}
          isSearchable
          placeholder="Search for a supervisor..."
        />
      </div>
      <div>
        <label>Marks:</label>
        <input type="number" value={marks} onChange={handleMarksChange} />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MarkSheetForm;
