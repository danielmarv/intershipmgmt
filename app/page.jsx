'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateStudent = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState();
    const [successMessage, setSuccessMessage] = useState('');

    useEffect(() => {
        if (successMessage) {
            alert(successMessage);
            const timeout = setTimeout(() => {
                setSuccessMessage(`Registration successful! Your registration number is ${formData.regNo}`);
                setFormData({
                    fullName: '',
                    campusName: '',
                    schoolName: '',
                    townName: '',
                    districtName: '',
                    kilometers: '',
                    schoolPractices: '',
                    moneyPaid: '',
                    regNo: '',
                    year: '',
                    emailId: '',
                    phoneNum: '',
                });
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [successMessage]);
    
    const [formData, setFormData] = useState({
        fullName: '',
        campusName: '',
        schoolName: '',
        townName: '',
        districtName: '',
        kilometers: '',
        schoolPractices: '',
        moneyPaid: '',
        regNo: '',
        year: '',
        emailId: '',
        phoneNum: '',
    });
    const createStudent = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/student/new', {
                method: 'POST',
                body: JSON.stringify({
                    fullName: formData.fullName,
                    campusName: formData.campusName,
                    schoolName: formData.schoolName,
                    townName: formData.townName,
                    districtName: formData.districtName,
                    kilometers: formData.kilometers,
                    schoolPractices: formData.schoolPractices,
                    moneyPaid: formData.moneyPaid,
                    regNo: formData.regNo,
                    year: formData.year,
                    emailId: formData.emailId,
                    phoneNum: formData.phoneNum,

                })
            })
            if (response.ok) {
                const data = await response.json();
    
                setSuccessMessage(`Registration successful! Your registration number is ${data.regNo}`);
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            {successMessage && (
                <div style={{ color: 'green' }}>{successMessage}</div>
            )}
            <Form 
                type="Register"
                formData={formData}
                setFormData={setFormData}
                submitting={submitting}
                handleSubmit={createStudent}
            />
        </>
    );
};

export default CreateStudent;