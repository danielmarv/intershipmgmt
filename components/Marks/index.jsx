// MarkSheetForm.js

import { useState, useEffect } from 'react';
import Select from 'react-select';

const MarkSheetForm = ({ students, supervisors, onSubmit }) => {
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [selectedSupervisor, setSelectedSupervisor] = useState(null);
  const [marks, setMarks] = useState('');

  useEffect(() => {
    // Reset supervisor when selected student changes
    setSelectedSupervisor(null);
  }, [selectedStudent]);

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
      student: selectedStudent ? selectedStudent.value : null,
      supervisor: selectedSupervisor ? selectedSupervisor.value : null,
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
          options={students.map((student) => ({ value: student.fullName, label: student.fullName }))}
          isSearchable
          placeholder="Search for a student..."
        />
      </div>
      <div>
        <label>Select Supervisor in the same district:</label>
        <Select
          value={selectedSupervisor}
          onChange={handleSupervisorChange}
          options={supervisors.map((supervisor) => ({ value: supervisor.fullName, label: supervisor.fullName }))}
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
