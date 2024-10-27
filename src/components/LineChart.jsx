import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';

function LineChart() {
  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Weekly Progress',
        data: [3, 2, 4, 3, 2, 3, 3], // Adjust values to total 20
        borderColor: '#FD71AF',
        // backgroundColor: 'rgba(75, 192, 192, 0.2)',
      },
    ],
  };

  return (
    <div className="lineChartHolder">
        <Line 
          data={chartData} 
          options={{
              scales: {
                  y: {
                      ticks: {
                          stepSize: 1,
                          min: 1,
                          max: 5
                      },
                  }
              },
              plugins: {
                legend: {
                    display: false
                }
              }    
          }}
        />
    </div>
    // <></>
  );
}

export default LineChart;