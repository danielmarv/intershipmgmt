// ChartComponent.jsx
"use client";
import React from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';

const ChartComponent = ({ chartType, chartData, chartOptions }) => {
  const ChartType = getChartComponent(chartType);

  return (
    <div>
      {ChartType && <ChartType data={chartData} options={chartOptions} />}
    </div>
  );
};

const getChartComponent = (type) => {
  switch (type) {
    case 'bar':
      return Bar;
    case 'line':
      return Line;
    case 'doughnut':
      return Doughnut;
    default:
      return null;
  }
};

export default ChartComponent;
