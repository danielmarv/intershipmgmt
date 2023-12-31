// MarkSheetForm.js

import { useState, useEffect } from 'react';

const MarkSheetForm = ({ students, supervisors, onSubmit }) => {
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedSupervisor, setSelectedSupervisor] = useState('');
  const [marks, setMarks] = useState('');

  useEffect(() => {
    // Reset supervisor when selected student changes
    setSelectedSupervisor('');
  }, [selectedStudent]);

  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
  };

  const handleSupervisorChange = (e) => {
    setSelectedSupervisor(e.target.value);
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

  // Filter supervisors based on the selected student's district
  const filteredSupervisors = supervisors.filter(
    (supervisor) => supervisor.district === students.find((student) => student._id === selectedStudent)?.district
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Student:</label>
        <select value={selectedStudent} onChange={handleStudentChange}>
          <option value="" disabled>Select a student</option>
          {students.map((student) => (
            <option key={student._id} value={student._id}>
              {student.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Select Supervisor in the same district:</label>
        <select value={selectedSupervisor} onChange={handleSupervisorChange}>
          <option value="" disabled>Select a supervisor</option>
          {filteredSupervisors.map((supervisor) => (
            <option key={supervisor._id} value={supervisor._id}>
              {supervisor.name}
            </option>
          ))}
        </select>
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
