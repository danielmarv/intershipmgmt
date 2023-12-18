import React from 'react'
import ChartComponent from '@components/Chart';
const Dashboard = () => {
  return (
    <div>
      <div id="main" className="main-content flex-1 bg-gray-100 mt-12 md:mt-2 pb-24 md:pb-5">

          <div className="bg-white pt-3">
              <div className="rounded-tl-3xl bg-gradient-to-r from-blue-500 to-gray-600 p-4 shadow text-2xl text-white">
                  <h1 className="font-bold pl-2">Dashboard</h1>
              </div>
          </div>

          <div className="flex flex-wrap">
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  
                  <div className="bg-gradient-to-b from-green-200 to-green-100 border-b-4 border-green-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded-full p-5 bg-green-600"><i className="fa fa-wallet fa-2x fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h2 className="font-bold uppercase text-gray-600">Administrators</h2>
                              <p className="font-bold text-3xl">1 <span className="text-green-500"><i className="fas fa-caret-up"></i></span></p>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  
                  <div className="bg-gradient-to-b from-pink-200 to-pink-100 border-b-4 border-pink-500 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded-full p-5 bg-pink-600"><i className="fas fa-users fa-2x fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h2 className="font-bold uppercase text-gray-600">Students</h2>
                              <p className="font-bold text-3xl">249 <span className="text-pink-500"><i className="fas fa-exchange-alt"></i></span></p>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  
                  <div className="bg-gradient-to-b from-yellow-200 to-yellow-100 border-b-4 border-yellow-600 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded-full p-5 bg-yellow-600"><i className="fas fa-user-plus fa-2x fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h2 className="font-bold uppercase text-gray-600">Supervisors</h2>
                              <p className="font-bold text-3xl">2 <span className="text-yellow-600"><i className="fas fa-caret-up"></i></span></p>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-gradient-to-b from-blue-200 to-blue-100 border-b-4 border-blue-500 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded-full p-5 bg-blue-600"><i className="fas fa-server fa-2x fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h2 className="font-bold uppercase text-gray-600">Completed</h2>
                              <p className="font-bold text-3xl">84</p>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  
                  <div className="bg-gradient-to-b from-indigo-200 to-indigo-100 border-b-4 border-indigo-500 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded-full p-5 bg-indigo-600"><i className="fas fa-tasks fa-2x fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h2 className="font-bold uppercase text-gray-600">Pending</h2>
                              <p className="font-bold text-3xl">78</p>
                          </div>
                      </div>
                  </div>
                  
              </div>
              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  
                  <div className="bg-gradient-to-b from-red-200 to-red-100 border-b-4 border-red-500 rounded-lg shadow-xl p-5">
                      <div className="flex flex-row items-center">
                          <div className="flex-shrink pr-4">
                              <div className="rounded-full p-5 bg-red-600"><i className="fas fa-inbox fa-2x fa-inverse"></i></div>
                          </div>
                          <div className="flex-1 text-right md:text-center">
                              <h2 className="font-bold uppercase text-gray-600">Practices</h2>
                              <p className="font-bold text-3xl">3 <span className="text-red-500"><i className="fas fa-caret-up"></i></span></p>
                          </div>
                      </div>
                  </div>
                  
              </div>
          </div>


          <div className="flex flex-row flex-wrap flex-grow mt-2">

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                      <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                          <h2 className="font-bold uppercase text-gray-600">Practices</h2>
                      </div>
                      <div className="p-5">
                          <table className="w-full p-5 text-gray-700">
                              <thead>
                              <tr>
                                  <th className="text-left text-blue-900">Name</th>
                                  <th className="text-left text-blue-900">Students</th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr>
                                  <td>Practice 1</td>
                                  <td>40</td>
                              </tr>
                              <tr>
                                  <td>Practice 2</td>
                                  <td>80</td>
                              </tr>
                              <tr>
                                  <td>Both</td>
                                  <td>20</td>
                              </tr>
                              </tbody>
                          </table>

                          <p className="py-2"><a href="#">See More Practices...</a></p>

                      </div>
                  </div>
              </div>

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                      <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                          <h2 className="font-bold uppercase text-gray-600">Students</h2>
                      </div>
                      <div className="p-5">
                          <table className="w-full p-5 text-gray-700">
                              <thead>
                              <tr>
                                  <th className="text-left text-blue-900">Name</th>
                                  <th className="text-left text-blue-900">Reg No</th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr>
                                  <td>Ntege Daniel</td>
                                  <td>21/BCC/BU/R/0019</td>
                              </tr>
                              <tr>
                                  <td>Mugerwa Joseph</td>
                                  <td>21/BSE/BU/R/0001</td>
                              </tr>
                              </tbody>
                          </table>

                          <p className="py-2"><a href="#">See More Students...</a></p>

                      </div>
                  </div>
              </div>

              <div className="w-full md:w-1/2 xl:w-1/3 p-6">
                  <div className="bg-white border-transparent rounded-lg shadow-xl">
                      <div className="bg-gradient-to-b from-gray-300 to-gray-100 uppercase text-gray-800 border-b-2 border-gray-300 rounded-tl-lg rounded-tr-lg p-2">
                          <h2 className="font-bold uppercase text-gray-600">Supervisors</h2>
                      </div>
                      <div className="p-5">
                          <table className="w-full p-5 text-gray-700">
                              <thead>
                              <tr>
                                  <th className="text-left text-blue-900">Name</th>
                                  <th className="text-left text-blue-900">District</th>
                              </tr>
                              </thead>

                              <tbody>
                              <tr>
                                  <td>John Deo</td>
                                  <td>Luweero</td>
                              </tr>
                              <tr>
                                  <td>Allan Smith</td>
                                  <td>Kampala</td>
                              </tr>
                              </tbody>
                          </table>

                          <p className="py-2"><a href="#">See More Supervisors...</a></p>

                      </div>
                  </div>
              </div>


          </div>
      </div>
    </div>
  )
}

export default Dashboard;