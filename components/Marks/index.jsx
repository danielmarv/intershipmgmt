import Select from 'react-select';

const MarkSheetForm = ({ formData, setFormData, students, supervisors, onSubmit, handleSubmit }) => {

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Select Student:</label>
        <Select
          value={formData.student}
          onChange={(e) => setFormData({ ...formData,
          student: e.target.value })}
          options={students.map((student) => ({ value: student._id, label: student.fullName }))}
          isSearchable
          placeholder="Search for a student..."
        />
      </div>
      <div>
        <label>Select Supervisor in the same district:</label>
        <Select
          value={formData.supervisor}
          onChange={(e) => setFormData({ ...formData,
          supervisor: e.target.value })}
          options={supervisors.map((supervisor) => ({ value: supervisor._id, label: supervisor.fullName }))}
          isSearchable
          placeholder="Search for a supervisor..."
        />
      </div>
      <div>
        <label>Marks:</label>
        <input 
          type="number" 
          value={formData.marks}
          onChange={(e) => setFormData({ ...formData,
          marks: e.target.value })}
          />
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MarkSheetForm;
