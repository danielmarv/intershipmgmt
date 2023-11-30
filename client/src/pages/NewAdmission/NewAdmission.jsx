// import React, { useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import AcademicDetailsForm from "./sc_forms/AcademicDetailsForm";
// import GuardianDetailsForm from "./sc_forms/GuardianDetailsForm";
// import IndividualDetailsForm from "./sc_forms/IndividualDetailsForm";
// import PreviousSchoolDetailsForm from "./sc_forms/PreviousSchoolDetailsForm";

// function UpdateSpan() {
//   return <span className="text-gray-300">N/A</span>;
// }

// function NewAdmission() {
//   const [newStudent, setNewStudent] = useState({
//     studentFirstName: "",
//     studentMiddleLastName: "",
//     studentDateOfBirth: "",
//     studentReligion: "",
//     studentCaste: "",
//     studentEmail: "",
//     studentSex: "",
//     studentBloodGroup: "",
//     fatherFullName: "",
//     motherFullName: "",
//     addressStreet: "",
//     addressCity: "",
//     addressState: "",
//     addressZipCode: "",
//     studentId: "SVPSAS230001",
//     dateOfAdmission: "",
//     classEnrolled: "",
//     sectionAssigned: "",
//     guardianFullName: "",
//     guardianEmail: "",
//     guardianPhone: "",
//     guardianWhatsApp: "",
//     previousSchoolName: "",
//     previousSchoolAddress: "",
//   });

//   const submitButtonRef = useRef();

//   const submitFormHandler = (event) => {
//     event.preventDefault();
//     alert("Form Submitted");
//     setNewStudent({
//       studentFirstName: "",
//       studentMiddleLastName: "",
//       studentDateOfBirth: "",
//       studentReligion: "",
//       studentCaste: "",
//       studentEmail: "",
//       studentSex: "",
//       studentBloodGroup: "",
//       fatherFullName: "",
//       motherFullName: "",
//       addressStreet: "",
//       addressCity: "",
//       addressState: "",
//       addressZipCode: "",
//       studentId: "SVPSAS230001",
//       dateOfAdmission: "",
//       classEnrolled: "",
//       sectionAssigned: "",
//       guardianFullName: "",
//       guardianEmail: "",
//       guardianPhone: "",
//       guardianWhatsApp: "",
//       previousSchoolName: "",
//       previousSchoolAddress: "",
//     });
//   };

//   const submitAlt = () => {
//     submitButtonRef.current.click();
//   };

//   return (
//     <div className="w-full bg-gray-50 px-3 py-5 xl:px-20 xl:py-12">
//       <header className="ie-na-header flex w-full justify-between">
//         <h3 className="text-xl font-semibold text-gray-900">New Admission</h3>
//         <div className="flex gap-4">
//           <button
//             onClick={submitAlt}
//             className="h-9 rounded border border-blue-700 bg-blue-700 px-8 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800"
//           >
//             Admit
//           </button>
//           <Link
//             to="/newadmission/bulkadmit"
//             className="hidden h-9 rounded border border-gray-300 bg-white px-8 text-base font-medium text-gray-700 transition-all hover:border-gray-800 hover:bg-gray-800 hover:text-white sm:flex sm:items-center sm:justify-center"
//           >
//             Bulk Admit
//           </Link>
//         </div>
//       </header>
//       <div className="ie-na-content mt-5 flex w-full flex-col gap-10 2xl:flex-row">
//         <form
//           onSubmit={submitFormHandler}
//           className="flex w-full flex-col items-end gap-10 2xl:max-w-5xl"
//         >
//           <div className="IndividualDetails w-full rounded-md border border-gray-200 bg-white">
//             <div className="border-b border-gray-200 py-4 px-6">
//               <span className="text-lg font-medium">Individual Details</span>
//             </div>
//             <IndividualDetailsForm
//               newStudent={newStudent}
//               setNewStudent={setNewStudent}
//             />
//           </div>

//           <div className="personalDetails w-full rounded-md border border-gray-200 bg-white">
//             <div className="border-b border-gray-200 py-4 px-6">
//               <span className="text-lg font-medium">Academic Details</span>
//             </div>
//             <AcademicDetailsForm
//               newStudent={newStudent}
//               setNewStudent={setNewStudent}
//             />
//           </div>

//           <div className="personalDetails w-full rounded-md border border-gray-200 bg-white">
//             <div className="border-b border-gray-200 py-4 px-6">
//               <span className="text-lg font-medium">Guardian Details</span>
//             </div>
//             <GuardianDetailsForm
//               newStudent={newStudent}
//               setNewStudent={setNewStudent}
//             />
//           </div>

//           <div
//             id="previous-school"
//             className="personalDetails w-full rounded-md border border-gray-200 bg-white"
//           >
//             <div className="border-b border-gray-200 py-4 px-6">
//               <span className="text-lg font-medium">
//                 Previous School Details
//               </span>
//             </div>
//             <PreviousSchoolDetailsForm
//               newStudent={newStudent}
//               setNewStudent={setNewStudent}
//             />
//           </div>
//           <button
//             ref={submitButtonRef}
//             type="submit"
//             className="rounded border border-blue-700 bg-blue-700 px-10 py-2 text-base font-medium text-white transition-all hover:border-blue-800 hover:bg-blue-800"
//           >
//             Admit
//           </button>
//         </form>

//         <div className="ie-nc-summary h-fit flex-1 rounded-md border border-gray-200 bg-white py-4 px-6">
//           <span className="summaryTitle text-lg font-medium">Summary</span>
//           <div className="summaryInfo mt-3 rounded-md bg-gray-50 p-5">
//             <span className="text block w-fit rounded-full bg-gray-900 px-3 py-1 text-xs text-white">
//               {newStudent.studentId}
//             </span>
//             <span className="mt-2 block whitespace-normal text-3xl font-semibold text-gray-900">
//               {newStudent.studentFirstName != "" ? (
//                 newStudent.studentFirstName +
//                 " " +
//                 newStudent.studentMiddleLastName
//               ) : (
//                 <UpdateSpan />
//               )}
//             </span>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Class Enrolled: </span>
//               <span>
//                 {newStudent.classEnrolled != "" ? (
//                   newStudent.classEnrolled
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Section Assigned: </span>
//               <span>
//                 {newStudent.sectionAssigned != "" ? (
//                   newStudent.sectionAssigned
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Blood Group: </span>
//               <span>
//                 {newStudent.studentBloodGroup != "" ? (
//                   newStudent.studentBloodGroup
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Date Of Birth: </span>
//               <span>
//                 {newStudent.studentDateOfBirth != "" ? (
//                   newStudent.studentDateOfBirth
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Address: </span>
//               <span>
//                 {newStudent.addressStreet != "" ? (
//                   newStudent.addressStreet
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Guardian's Name: </span>
//               <span>
//                 {newStudent.guardianFullName != "" ? (
//                   newStudent.guardianFullName
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//             <div className="mt-2 text-sm font-medium text-gray-700">
//               <span className="font-semibold">Phone: </span>
//               <span>
//                 {newStudent.guardianPhone != "" ? (
//                   newStudent.guardianPhone
//                 ) : (
//                   <UpdateSpan />
//                 )}
//               </span>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default NewAdmission;

import React, { useState } from 'react';

function NewAdmission() {
  const [formData, setFormData] = useState({
    fullName: '',
    campusName: '',
    schoolName: '',
    townName: '',
    districtName: '',
    distanceFromBugemaCampuses: {
      kilometers: 0,
    },
    schoolPractices: [],
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission, you can send the formData to your backend or perform any other actions
  };

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
                htmlFor="studentBloodGroup"
                className="block text-sm font-medium text-gray-600"
              >
                Blood Group
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
                htmlFor="fatherFullName"
                className="block text-sm font-medium text-gray-600"
              >
                Father's full name
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
                htmlFor="motherFullName"
                className="block text-sm font-medium text-gray-600"
              >
                Mother's full name
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
                htmlFor="addressStreet"
                className="block text-sm font-medium text-gray-600"
              >
                Street address
              </label>
              <input
                type="text"
                name="addressStreet"
                id="addressStreet"
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label
                htmlFor="addressCity"
                className="block text-sm font-medium text-gray-600"
              >
                City
              </label>
              <input
                type="text"
                name="addressCity"
                id="addressCity"
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="addressState"
                className="block text-sm font-medium text-gray-600"
              >
                State / Province
              </label>
              <input
                required
                type="text"
                name="addressState"
                id="addressState"
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label
                htmlFor="addressZipCode"
                className="block text-sm font-medium text-gray-600"
              >
                ZIP / Postal code
              </label>
              <input
                type="text"
                name="addressZipCode"
                id="addressZipCode"
                className="mt-2 block w-full rounded border-gray-300 focus:border-blue-700 focus:ring-blue-700 sm:text-sm"
              />
            </div>
          </div>
        </div>
      </div>
      <div>
        <label htmlFor="fullName">Full Name:</label>
        <input
          type="text"
          id="fullName"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="campusName">Campus Name:</label>
        <input
          type="text"
          id="campusName"
          name="campusName"
          value={formData.campusName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="schoolName">School Name:</label>
        <input
          type="text"
          id="schoolName"
          name="schoolName"
          value={formData.schoolName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="townName">Town Name:</label>
        <input
          type="text"
          id="townName"
          name="townName"
          value={formData.townName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="districtName">District Name:</label>
        <input
          type="text"
          id="districtName"
          name="districtName"
          value={formData.districtName}
          onChange={handleInputChange}
          required
        />
      </div>

      <div>
        <label htmlFor="distanceFromBugemaCampuses.kilometers">Distance from Bugema Campuses (km):</label>
        <input
          type="number"
          id="distanceFromBugemaCampuses.kilometers"
          name="distanceFromBugemaCampuses.kilometers"
          value={formData.distanceFromBugemaCampuses.kilometers}
          onChange={handleInputChange}
        />
      </div>
      <div>
  <label htmlFor="distanceFromBugemaCampuses.kilometers">Distance from Bugema Campuses (km):</label>
  <input
    type="number"
    id="distanceFromBugemaCampuses.kilometers"
    name="distanceFromBugemaCampuses.kilometers"
    value={formData.distanceFromBugemaCampuses.kilometers}
    onChange={handleInputChange}
  />
</div>

<div>
  <label htmlFor="schoolPractices">School Practices:</label>
  {/* Assuming schoolPractices is an array of strings, you can use a textarea for multiple values */}
  <textarea
    id="schoolPractices"
    name="schoolPractices"
    value={formData.schoolPractices.join('\n')}
    onChange={handleInputChange}
  ></textarea>
</div>

<div>
  <label htmlFor="moneyPaid">Money Paid:</label>
  <input
    type="number"
    id="moneyPaid"
    name="moneyPaid"
    value={formData.moneyPaid}
    onChange={handleInputChange}
    required
  />
</div>

<div>
  <label htmlFor="studentDetails.regNo">Registration Number:</label>
  <input
    type="text"
    id="studentDetails.regNo"
    name="studentDetails.regNo"
    value={formData.studentDetails.regNo}
    onChange={handleInputChange}
    required
  />
</div>

<div>
  <label htmlFor="studentDetails.currentClass.year">Current Class Year:</label>
  <input
    type="text"
    id="studentDetails.currentClass.year"
    name="studentDetails.currentClass.year"
    value={formData.studentDetails.currentClass.year}
    onChange={handleInputChange}
    required
  />
</div>

<div>
  <label htmlFor="studentDetails.currentClass.sem">Current Class Semester:</label>
  <input
    type="number"
    id="studentDetails.currentClass.sem"
    name="studentDetails.currentClass.sem"
    value={formData.studentDetails.currentClass.sem}
    onChange={handleInputChange}
    required
  />
</div>

<div>
  <label htmlFor="studentDetails.emailId">Email ID:</label>
  <input
    type="email"
    id="studentDetails.emailId"
    name="studentDetails.emailId"
    value={formData.studentDetails.emailId}
    onChange={handleInputChange}
    required
  />
</div>

<div>
  <label htmlFor="studentDetails.phoneNum">Phone Number:</label>
  <input
    type="tel"
    id="studentDetails.phoneNum"
    name="studentDetails.phoneNum"
    value={formData.studentDetails.phoneNum}
    onChange={handleInputChange}
    required
  />
</div>

      {/* Add more fields for other properties in a similar way */}
      
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
}

export default NewAdmission;

