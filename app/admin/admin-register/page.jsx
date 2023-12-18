'use client';
import Link from 'next/link';
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
                setSuccessMessage(`Registration successful! Your registration number is <br>
                ${data.regNo} and i's the on you will use to track your internship status.`);
                setFormData({
                    username: '',
                    password: '',
                });
            }, 5000);

            return () => clearTimeout(timeout);
        }
    }, [successMessage]);
    
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const createStudent = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const response = await fetch('/api/adminUser/new', {
                method: 'POST',
                body: JSON.stringify({
                    username: formData.username,
                    password: formData.password,

                })
            })
            if (response.ok) {
                const data = await response.json();
    
                setSuccessMessage(`Registration successful! Your registration number is <br>
                ${data.regNo} and i's the on you will use to track your internship status.`);
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
            <form onSubmit={createStudent} >
            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg  font-medium text-gray-600"
              >
                Username
              </label>
              <input
                required
                type="text"
                value={formData.username}
                onChange={(e) => setFormData({ ...formData,
                    username: e.target.value })}
                className="mt-2 px-2 py-2 text-lg w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 "
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Password
              </label>
              <input
                type="text"
                value={formData.password}
                onChange={(e) => setFormData({ ...formData,
                    password: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>
            <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href='/admin' className='text-grey-500 text-sm'>
          Cancel
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
          Register
        </button>
      </div>

            </form>
        </>
    );
};

export default CreateStudent;
