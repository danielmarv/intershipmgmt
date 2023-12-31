'use client';

import { useState } from 'react';
import MarkSheetForm from '@components/Marks';
const Marks = ({ students, supervisors }) => {
    const [submittedData, setSubmittedData] = useState(null);

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

    export async function getServerSideProps() {
    const studentsResponse = await fetch('/api/students');
    const students = await studentsResponse.json();

    const supervisorsResponse = await fetch('/api/supervisors');
    const supervisors = await supervisorsResponse.json();

    return {
        props: { students, supervisors },
    };
}

export default Marks;
