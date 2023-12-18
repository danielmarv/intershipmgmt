"use client";

import React, { useState, useEffect } from "react";
import HeaderNav from '@components/Layout/header';
import Button from '@components/Button';
import ContentBox from '@components/ContentBox';
import Table from '@components/Table';
import Toast from '@components/Toast';
import EmptyState from '@components/EmptyState';
const Students = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

  const [allStudents, setAllStudents] = useState([]);

  const fetchStudents = async () => {
    setIsLoading(true)

    try {
        const response = await fetch("/api/student");
        
        if (!response.ok) {
            throw new Error(`Failed to fetch student data: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();

        setAllStudents(data);
    } catch (error) {
        console.error('Error fetching student data:', error);
    } finally {
        setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);  

  return (
    <>
      <HeaderNav category={'Administration'} component={'Student List'}>
        {isError && (
          <Toast
            type={'error'}
            timeout={5000}
            message={'Uh-oh! Server error. Please try again later.'}
          />
        )}
        {isLoading ||
          (allStudents && (
            <div className='flex'>
              <Button
                className={
                  'bg-white text-black-600 border border-black-600 opacity-30 hover:cursor-not-allowed font-medium text-sm'
                }
              >
                <div className='mr-[10px]'>
                  {/* <UploadIcon /> */}
                </div>
                Administration
              </Button>
              <div className='mr-[14px]'></div>
              <Button
                className={
                  'rounded-none text-white bg-blue-500 border border-blue-500 hover:bg-dark-blue hover:border-dark-blue font-medium text-sm'
                }
                path='/'
              >
                <div className='mr-[10px]'>
                  {/* <BoxedAddIcon /> */}
                </div>
                Home
              </Button>
            </div>
          ))}
      </HeaderNav>
      <ContentBox>
        {allStudents && allStudents.length > 0 ? (
          <div className="w-full">
            <table className="table-fixed border-collapse text-xs text-left w-auto md:w-full my-6 bg-white">
              <thead>
                <tr className="border-b border-b-slate-300 text-black-900">
                  <th scope="col" className="px-6 pb-2">
                    Name
                  </th>
                  <th scope="col" className="px-2 pb-2">
                    Campus
                  </th>
                  <th scope="col" className="px-4 pb-2">
                    District
                  </th>
                  <th scope="col" className="px-2 pb-2">
                    Email
                  </th>
                  <th scope="col" className="px-8 pb-2">
                    Reg No.
                  </th>
                  <th scope="col" className="px-2 pb-2">
                    Practice
                  </th>
                </tr>
              </thead>
              <tbody>
                {allStudents.map((student, index) => (
                  <tr key={index} className="border-b border-b-slate-300">
                    <td className="px-2 py-2 font-normal">{student.fullName}</td>
                    <td className="px-2 py-2 font-normal">{student.campusName}</td>
                    <td className="px-2 py-2 font-normal">{student.districtName}</td>
                    <td className="px-2 py-2 font-normal">{student.emailId}</td>
                    <td className="px-8 py-2 font-normal">{student.regNo}</td>
                    <td className="px-2 py-2 font-normal">{student.schoolPractices}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState />
        )}
      </ContentBox>
    </>
  );
};

export default Students;