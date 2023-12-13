

// components/InternshipRegistration.js
import React from 'react';

const InternshipRegistration = () => {
  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-semibold my-8">TRACK SCHOOL PRACTICE PROGRESS</h2>

      <form action="" className="bg-gray-100 p-4 rounded-md shadow-md mb-8">
      <div className="flex items-center">
          <div className="w-1/2 pr-2">
            <label htmlFor="intern" className="text-lg font-semibold block mb-2">
              REGISTRATION NUMBER:
            </label>
          </div>
          <div className="w-1/2 pl-2">
            <input
              type="text"
              className="form-input w-full p-2 border rounded-md"
              placeholder="REGISTRATION NUMBER"
            />
            <br />
            <input
              type="button"
              className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 cursor-pointer"
              value="CHECK STATUS"
            />
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        {/* Cards */}
        {/* Card 1 */}

        <div className="card text-center bg-gray-100 p-4 rounded-md shadow-md">
          <div className="card-header font-semibold">REGISTERED SCHOOL PRACTICE</div>
          <div className="card-body text-left">
            <h5 className="card-title">REGISTERED SCHOOL PRACTICE</h5>
            <p className="card-text">Either School Practice I or School Practice II or Both.</p>
          </div>
          <div className="card-footer text-muted">SCHOOL PRACTICE</div>
        </div>

        {/* Card 2 */}
        <div className="card text-center bg-gray-100 p-4 rounded-md shadow-md">
          <div className="card-header font-semibold">SUPERVISORS ASSIGNED</div>
          <div className="card-body text-left">
            <h5 className="card-title">SUPERVISORS:</h5>
            <p className="card-text">SUPERVISOR ONE:</p>
            <p className="card-text">SUPERVISOR TWO:</p>
          </div>
          <div className="card-footer text-muted">SCHOOL PRACTICE</div>
        </div>

        {/* Card 3 */}
        <div className="card text-center bg-gray-100 p-4 rounded-md shadow-md">
          <div className="card-header font-semibold">VISIT SCHEDULES</div>
          <div className="card-body text-left">
            <h5 className="card-title">SUPERVISION DATES:</h5>
            <p className="card-text">FIRST SUPERVISION:</p>
            <p className="card-text">SECOND SUPERVISION:</p>
          </div>
          <div className="card-footer text-muted">SCHOOL PRACTICE</div>
        </div>

        {/* Card 4 */}
        <div className="card text-center bg-gray-100 p-4 rounded-md shadow-md">
          <div className="card-header font-semibold">REPORT SUBMISSION STATUS</div>
          <div className="card-body text-left">
            <h5 className="card-title">REPORT STATUS</h5>
            <p className="card-text">Indicate if the report has been submitted or not.</p>
          </div>
          <div className="card-footer text-muted">SCHOOL PRACTICE</div>
        </div>

        {/* Card 5 */}
        <div className="card  bg-gray-100 p-4 rounded-md shadow-md">
          <div className="card-header font-semibold">RESULTS COMPUTATION</div>
          <div className="card-body text-left">
            <h5 className="card-title ">SUPERVISION RESULTS:</h5>
            <p className="card-text">SUPERVISOR I: SUPERVISOR II:</p>
            <p className="card-text">AVERAGE:</p>
          </div>
          <div className="card-footer text-muted">SCHOOL PRACTICE</div>
        </div>

        {/* Card 6 */}
        <div className="card text-center bg-gray-100 p-4 rounded-md shadow-md">
          <div className="card-header font-semibold">ERMS STATUS</div>
          <div className="card-body text-left">
            <h5 className="card-title">ERMS</h5>
            <p className="card-text">Indicate if the results have been entered in ERMS or NOT.</p>
          </div>
          <div className="card-footer text-muted">SCHOOL PRACTICE</div>
        </div>
      </div>
    </div>
  );
};

export default InternshipRegistration;

