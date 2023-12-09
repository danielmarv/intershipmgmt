'use client';
import React from 'react';
import Link from 'next/link';

const  NewAdmission = ({type, formData, setFormData, submitting,  handleSubmit, handleChange}) => {

  return (
    <div className="w-full max-w-full flex-col">
      <h1 className="head_text text-center">
                <span className="blue_gradient">{type} Student</span>
            </h1>
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden sm:rounded py-5">
        <div className="px-0.5 py-5 sm:p-1">
          <div className="grid grid-cols-6 gap-6 p-2 ">
            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg  font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                required
                type="text"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData,
                    fullName: e.target.value })}
                className="mt-2 px-2 py-2 text-lg w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 "
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Campus Name
              </label>
              <input
                type="text"
                value={formData.campusName}
                onChange={(e) => setFormData({ ...formData,
                    campusName: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 "
              />
              <select
                  value={formData.campusName}
                  onChange={(e) => setFormData({ ...formData,
                    campusName: e.target.value })}
                  className="mt-2 px-2 py-2 text-lg w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 "
                >
                  <option value="Practice 1">Main Campus</option>
                  <option value="Practice 2">Kampala Campus</option>
                  <option value="Both">Arua Campus</option>
                  
                </select>
            </div>
</div>   
<div className="grid grid-cols-6 gap-6 p-2"> 
        <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                School Name
              </label>
              <input
                type="text"
                value={formData.schoolName}
                onChange={(e) => setFormData({ ...formData,
                    schoolName: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Town Name
              </label>
              <input
                type="text"
                value={formData.townName}
                onChange={(e) => setFormData({ ...formData,
                  townName: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>
</div>
<div className="grid grid-cols-6 gap-6 p-2">
            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                District Name
              </label>
              <input
                type="text"
                value={formData.districtName}
                onChange={(e) => setFormData({ ...formData,
                  districtName: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Distance from Bugema Campuses (km)
              </label>
              <input
                type="number"
                value={formData.kilometers}
                onChange={(e) => setFormData({ ...formData,
                  kilometers: e.target.value })}
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>
</div>
<div className="grid grid-cols-6 gap-6 p-2">
            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Year
              </label>
              <input
                type="year"
               value={formData.year}
                onChange={(e) => setFormData({ ...formData,
                  year: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Email ID
              </label>
              <input
                type="email"
                value={formData.emailId}
                onChange={(e) => setFormData({ ...formData,
                emailId: e.target.value })}
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>
</div>
<div className="grid grid-cols-6 gap-6 p-2">
            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                value={formData.phoneNum}
                onChange={(e) => setFormData({ ...formData,
                phoneNum: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                School Practices
              </label>
                <select
                  value={formData.schoolPractices}
                  onChange={(e) => setFormData({ ...formData,
                    schoolPractices: e.target.value })}
                  className="mt-2 px-2 py-2 text-lg w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 "
                >
                  <option value="Practice 1">Practice 1</option>
                  <option value="Practice 2">Practice 2</option>
                  <option value="Both">Both</option>
                </select>
            </div>
</div>
        <div className="grid grid-cols-6 gap-6 p-2">
            <div className="col-span-6 sm:col-span-3">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Money Paid
              </label>
              <input
                type="text"
                value={formData.moneyPaid}
                onChange={(e) => setFormData({ ...formData,
                moneyPaid: e.target.value })}
                required
                className="mt-2 px-2 py-2  w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 h-4">
              <label
                className=" text-lg font-medium text-gray-600"
              >
                Registration Number
              </label>
              <input
                type="text"
                value={formData.regNo}
                onChange={(e) => setFormData({ ...formData,
                  regNo: e.target.value })}
                required
                className="mt-2 px-2 py-2 w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-lg"
              />
            </div>
          </div>
          

        </div>
      </div>
      <div className='flex-end mx-3 mb-5 gap-4'>
        <Link href='/' className='text-grey-500 text-sm'>
          Cancel
        </Link>
        <button
          type="submit"
          disabled={submitting}
          className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
        >
          {submitting ? `${type}...` : type}
        </button>
      </div>
    </form>
    </div>
  );
}

export default NewAdmission;
