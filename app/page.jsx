'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreateStudent = () => {
    const router = useRouter();
    const [submitting, setSubmitting] = useState();
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

            if(response.ok) {
                router.push('/')
            }
        } catch (error) {
            console.log(error)
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <Form 
            type="Create"
            formData={formData}
            setFormData={setFormData}
            submitting={submitting}
            handleSubmit={createStudent}
        />
    )
};

export default CreateStudent;