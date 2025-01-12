/* eslint-disable react/no-unescaped-entities */
'use client';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: [4000, 3000, 2000, 2780, 1890, 2390, 3490],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Dataset 2',
      data: [2400, 1398, 9800, 3908, 4800, 3800, 4300],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Monthly Sales',
    },
  },
};

export default function ChartsPage() {
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8">Charts</h1>
      
      <div className="bg-white p-6 rounded-lg shadow mb-8">
        <div className="h-96">
          <Bar options={options} data={data} />
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">More Charts Coming Soon...</h2>
        <p className="text-gray-600">We'll be adding more chart types in the future.</p>
      </div>
    </div>
  );
}
