"use client";

import React, { useState, useEffect } from "react";
import HeaderNav from '@components/Layout/header';
import Button from '@components/Button';
import ContentBox from '@components/ContentBox';
import Table from '@components/Table';
import Toast from '@components/Toast';
import EmptyState from '@components/EmptyState';
// import ArrowDownIcon from '@public/assets/icons/arrow_down';
// import ArrowUpIcon from '@public/assets/icons/arrow_up';
// import { useWindowSize } from '@lib/Window/windowSize';
// import moment from 'moment';
// import { isEmpty } from 'underscore';
// import Spinner from '@components/Spinner';

// const CustomTable = ({
//   headers,
//   data,
//   sortableColumns,
//   onRowSelect,
//   dataTestId,
//   activeColumnIndex,
//   isLoading,
//   type,
// }) => {
//   const size = useWindowSize();
//   const [selectedRows, setSelectedRows] = useState([]);
//   const [sortColumn, setSortColumn] = useState(activeColumnIndex);
//   const [sortDirection, setSortDirection] = useState('asc');

//   const toggleRow = (rowIndex) => {
//     const selectedIndex = selectedRows.indexOf(rowIndex);
//     let newSelectedRows = [...selectedRows];

//     if (selectedIndex === -1) {
//       newSelectedRows.push(rowIndex);
//     } else {
//       newSelectedRows.splice(selectedIndex, 1);
//     }

//     setSelectedRows(newSelectedRows);
//     onRowSelect(newSelectedRows.map((selectedIndex) => data[selectedIndex]));
//   };

//   const handleSort = (columnIndex) => {
//     if (!sortableColumns.includes(columnIndex)) {
//       return;
//     }

//     if (columnIndex === sortColumn) {
//       setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
//     } else {
//       setSortColumn(columnIndex);
//       setSortDirection('asc');
//     }
//   };

//   const sortedData = !isEmpty(data) ? [...data] : [];
//   if (sortColumn !== null) {
//     sortedData.sort((a, b) => {
//       if (sortDirection === 'asc') {
//         return a[sortColumn] > b[sortColumn] ? 1 : -1;
//       } else {
//         return a[sortColumn] < b[sortColumn] ? 1 : -1;
//       }
//     });
//   }

//   return (
//     <div className='overflow-x-scroll md:overflow-x-hidden'>
//       <table
//         className='table-fixed border-collapse text-xs text-left w-auto md:w-full my-6'
//         data-testid={dataTestId}
//       >
//         <colgroup>
//             <col className='w-[61px]' />
//             {headers && headers.map((header, columnIndex) => (
//                 <col key={header}  />
//             ))}

//         </colgroup>
//         <thead>
//           <tr className='border-b border-b-slate-300 text-black-900'>
//             <th scope='col' className='px-4 pb-2'></th>
//             {headers && headers.map((header, columnIndex) => (
//               <th
//                 scope='col'
//                 key={header}
//                 className={`px-4 pb-2 font-normal ${
//                   sortColumn === columnIndex &&
//                   'bg-[#0000000F] flex justify-between items-center cursor-pointer'
//                 }`}
//                 onClick={() => handleSort(columnIndex)}
//               >
//                 {header}
//                 {sortableColumns.includes(columnIndex) && (
//                   <>
//                     {sortColumn === columnIndex &&
//                       (sortDirection === 'asc' ? < Image src={ArrowUpIcon} /> : <Image src={ArrowDownIcon} />)}
//                   </>
//                 )}
//               </th>
//             ))}
//           </tr>
//         </thead>

//         {isLoading ? (
//           <tbody>
//             <tr>
//               <td  className='mx-auto'>
//                 <Spinner />
//               </td>
//             </tr>
//           </tbody>
//         ) : (
//           <tbody>
//             {!isEmpty(sortedData) ? (
//               <>
//                 {sortedData.map((row, rowIndex) => (
//                   <tr key={rowIndex} className='border-b border-b-slate-300'>
//                     <td className='px-4 py-2 w-[61px] h-14'>
//                       <input
//                         type='checkbox'
//                         className='h-4 w-4 text-indigo-600 transition duration-150 ease-in-out'
//                         checked={selectedRows.includes(rowIndex)}
//                         onChange={() => toggleRow(rowIndex)}
//                       />
//                     </td>
//                     {Object.values(row).map((cell, cellIndex) => (
//                       <td key={cellIndex} className='px-4 py-2 font-normal'>
//                         {typeof cell === 'number'
//                           ? cell.toFixed(2)
//                           : moment(cell).isValid()
//                           ? moment(cell).format('MMM DD, YYYY')
//                           : cell}
//                       </td>
//                     ))}
//                   </tr>
//                 ))}
//               </>
//             ) : (
//               <tr>
//                 <td
//                 //   colSpan={(headers.length + 1).toString()}
//                   className='text-center pt-6 text-grey-300'
//                 >
//                   Unable to get {type} information
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         )}
//       </table>
//     </div>
//   );
// };

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
                Import data
              </Button>
              <div className='mr-[14px]'></div>
              <Button
                className={
                  'rounded-none text-white bg-blue-900 border border-blue-900 hover:bg-dark-blue hover:border-dark-blue font-medium text-sm'
                }
                path='/collocation/add_monitor'
              >
                <div className='mr-[10px]'>
                  {/* <BoxedAddIcon /> */}
                </div>
                Add monitors
              </Button>
            </div>
          ))}
      </HeaderNav>
      <ContentBox>
        {allStudents && allStudents.length > 0 ? (
          <div className="w-full">
            <table className="table-fixed border-collapse text-xs text-left w-auto md:w-full my-6">
              <thead>
                <tr className="border-b border-b-slate-300 text-black-900">
                  <th scope="col" className="px-4 pb-2">
                    Name
                  </th>
                  <th scope="col" className="px-4 pb-2">
                    Campus
                  </th>
                  <th scope="col" className="px-4 pb-2">
                    District
                  </th>
                  <th scope="col" className="px-4 pb-2">
                    Email
                  </th>
                  <th scope="col" className="px-4 pb-2">
                    Reg No.
                  </th>
                  <th scope="col" className="px-4 pb-2">
                    Practice
                  </th>
                </tr>
              </thead>
              <tbody>
                {allStudents.map((student, index) => (
                  <tr key={index} className="border-b border-b-slate-300">
                    <td className="px-4 py-2 font-normal">{student.fullName}</td>
                    <td className="px-4 py-2 font-normal">{student.campusName}</td>
                    <td className="px-4 py-2 font-normal">{student.districtName}</td>
                    <td className="px-4 py-2 font-normal">{student.emailId}</td>
                    <td className="px-4 py-2 font-normal">{student.regNo}</td>
                    <td className="px-4 py-2 font-normal">{student.schoolPractices}</td>
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