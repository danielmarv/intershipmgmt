import React, { useState, useEffect } from 'react';
import {getAllPractices, registerStudent} from '../../api/urls';
function Dropdown({ practices, value, onChange }) {
  return (
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {practices.map((practice) => (
        <option key={practice._id} value={practice._id}>
          {practice.practiceName}
        </option>
      ))}
      <option value="all">Both</option>
    </select>
  );
}

function NewAdmission() {
  const [practices, setPractices] = useState([]);
  const [formData, setFormData] = useState({
    fullName: '',
    campusName: '',
    schoolName: '',
    townName: '',
    districtName: '',
    distanceFromBugemaCampuses: {
      kilometers: 0,
    },
    schoolPractices: selectedValue,
    moneyPaid: 0,
    studentDetails: {
      regNo: '',
      currentClass: {
        year: '',
        sem: 1,
      },
      emailId: '',
      phoneNum: '',
    },
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedFormData = { ...formData };

    if (name === 'schoolPractices') {
      if (value === 'all') {
        updatedFormData[name] = [practice1._id, practice2._id];
      } else {
        updatedFormData[name] = [value];
      }
    } else {
      setNestedFormData(updatedFormData, name, value);
    };

    setNestedFormData(updatedFormData, name, value);
    setFormData({
      ...updatedFormData,
    });
  };

  const setNestedFormData = (data, keys, value) => {
    const keysArray = keys.split('.');
    const lastKey = keysArray.pop();
    keysArray.reduce((acc, key) => (acc[key] = acc[key] || {}), data)[lastKey] = value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
  
      const response = await fetch(registerStudent, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        console.log('Form submitted successfully!');
        // You can perform additional actions here if needed
      } else {
        console.error('Error submitting form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
  

  useEffect(() => {
    fetch(getAllPractices)
      .then((response) => response.json())
      .then((data) => setPractices(data))
      .catch((error) => console.error('Error fetching practices:', error));
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-hidden sm:rounded">
        <div className="px-4 py-5 sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-gray-600"
              >
                Full Name
              </label>
              <input
                required
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="campusName"
                className="block text-sm font-medium text-gray-600"
              >
                Campus Name
              </label>
              <input
                type="text"
                id="campusName"
                name="campusName"
                value={formData.campusName}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="schoolName"
                className="block text-sm font-medium text-gray-600"
              >
                School Name
              </label>
              <input
                type="text"
                id="schoolName"
                name="schoolName"
                value={formData.schoolName}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="townName"
                className="block text-sm font-medium text-gray-600"
              >
                Town Name
              </label>
              <input
                type="text"
                id="townName"
                name="townName"
                value={formData.townName}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="districtName"
                className="block text-sm font-medium text-gray-600"
              >
                District Name
              </label>
              <input
                type="text"
                id="districtName"
                name="districtName"
                value={formData.districtName}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-4">
              <label
                htmlFor="distanceFromBugemaCampuses.kilometers"
                className="block text-sm font-medium text-gray-600"
              >
                Distance from Bugema Campuses (km)
              </label>
              <input
                type="number"
                id="distanceFromBugemaCampuses.kilometers"
                name="distanceFromBugemaCampuses.kilometers"
                value={formData.distanceFromBugemaCampuses.kilometers}
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="studentDetails.currentClass.sem"
                className="block text-sm font-medium text-gray-600"
              >
                Current Class Semester
              </label>
              <input
                type="number"
                id="studentDetails.currentClass.sem"
                name="studentDetails.currentClass.sem"
                value={formData.studentDetails.currentClass.sem}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="studentDetails.emailId"
                className="block text-sm font-medium text-gray-600"
              >
                Email ID
              </label>
              <input
                type="email"
                id="studentDetails.emailId"
                name="studentDetails.emailId"
                value={formData.studentDetails.emailId}
                onChange={handleInputChange}
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label
                htmlFor="studentDetails.phoneNum"
                className="block text-sm font-medium text-gray-600"
              >
                Phone Number
              </label>
              <input
                type="tel"
                id="studentDetails.phoneNum"
                name="studentDetails.phoneNum"
                value={formData.studentDetails.phoneNum}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6">
              <label
                htmlFor="schoolPractices"
                className="block text-sm font-medium text-gray-600"
              >
                School Practices
              </label>
                <Dropdown
                  practices={practices}
                  value={formData.schoolPractices}
                  onChange={handleDropdownChange}
                  className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
                />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="moneyPaid"
                className="block text-sm font-medium text-gray-600"
              >
                Money Paid
              </label>
              <input
                type="number"
                id="moneyPaid"
                name="moneyPaid"
                value={formData.moneyPaid}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="studentDetails.regNo"
                className="block text-sm font-medium text-gray-600"
              >
                Registration Number
              </label>
              <input
                type="text"
                id="studentDetails.regNo"
                name="studentDetails.regNo"
                value={formData.studentDetails.regNo}
                onChange={handleInputChange}
                required
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

          </div>
        </div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewAdmission;

