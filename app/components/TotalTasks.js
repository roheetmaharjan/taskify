import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ['Completed Tasks', 'Pending'],
  datasets: [
    {
      label: '# of Tasks',
      data: [12, 19],
      backgroundColor: [
        '#4b4bc3',
        '#D9E8FB',
      ]
    },
  ],
};

export function TotalTasks() {
  return <Doughnut data={data} />;
}
