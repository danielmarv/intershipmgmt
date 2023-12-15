// components/DataTable.js

import React, { useEffect, useRef } from 'react';
import $ from 'jquery';

const DataTable = ({ columns, data }) => {
  const tableRef = useRef();

  useEffect(() => {
    $(tableRef.current).DataTable();
  }, []);

  return (
    <table ref={tableRef}>
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {row.map((cell, cellIndex) => (
              <td key={cellIndex}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
