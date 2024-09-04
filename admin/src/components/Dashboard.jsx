import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Dashboard = () => {
  // Data for each chart
  const studentData = {
    labels: ['Total Students'],
    datasets: [
      {
        label: 'Number of Students',
        data: [120], // Replace with dynamic data
        backgroundColor: ['rgba(75, 192, 192, 0.2)'],
        borderColor: ['rgba(75, 192, 192, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const mentorData = {
    labels: ['Total Mentors'],
    datasets: [
      {
        label: 'Number of Mentors',
        data: [45], // Replace with dynamic data
        backgroundColor: ['rgba(153, 102, 255, 0.2)'],
        borderColor: ['rgba(153, 102, 255, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const transactionData = {
    labels: ['Total Transactions'],
    datasets: [
      {
        label: 'Number of Transactions',
        data: [89], // Replace with dynamic data
        backgroundColor: ['rgba(255, 159, 64, 0.2)'],
        borderColor: ['rgba(255, 159, 64, 1)'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: '' },
    },
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Number of Students</h3>
          <Bar data={studentData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Students' } } }} />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Number of Mentors</h3>
          <Bar data={mentorData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Mentors' } } }} />
        </div>
        <div className="p-4 bg-white shadow-md rounded-lg">
          <h3 className="text-xl font-semibold mb-2">Number of Transactions</h3>
          <Bar data={transactionData} options={{ ...options, plugins: { ...options.plugins, title: { ...options.plugins.title, text: 'Transactions' } } }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
