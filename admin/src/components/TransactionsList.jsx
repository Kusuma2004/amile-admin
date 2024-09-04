import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const TransactionsList = () => {
  const transactions = [
    { id: 'T001', date: '2024-09-01', amount: '$100' },
    { id: 'T002', date: '2024-09-02', amount: '$250' },
    { id: 'T003', date: '2024-09-03', amount: '$300' },
    { id: 'T004', date: '2024-09-04', amount: '$400' },
    { id: 'T005', date: '2024-09-05', amount: '$500' },
    { id: 'T006', date: '2024-09-06', amount: '$600' },
    { id: 'T007', date: '2024-09-07', amount: '$700' },
    { id: 'T008', date: '2024-09-08', amount: '$800' },
    { id: 'T009', date: '2024-09-09', amount: '$900' },
    { id: 'T010', date: '2024-09-10', amount: '$1000' },
    { id: 'T011', date: '2024-09-11', amount: '$1100' },
    { id: 'T012', date: '2024-09-12', amount: '$1200' },
    // Add more transactions if needed
  ];

  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null); // State for selected index

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => (prevPage < totalPages ? prevPage + 1 : 1));
    setSelectedIndex(null); // Clear selected index when changing pages
  };

  const handlePrevious = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : totalPages));
    setSelectedIndex(null); // Clear selected index when changing pages
  };

  const handleRowClick = (index) => {
    setSelectedIndex(index);
  };

  // Calculate the starting index for slicing
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = transactions.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className="p-6 shadow-md rounded-lg h-full"
      style={{
        background: 'linear-gradient(135deg, #e0f7fa 30%, #e1bee7 100%)',
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Transactions List</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
          <thead className="bg-gradient-to-br from-gray-800 via-pink-600 to-gray-800 border-b">
            <tr>
              <th className="py-2 px-4 text-left text-white">Transaction ID</th>
              <th className="py-2 px-4 text-left text-white">Date</th>
              <th className="py-2 px-4 text-left text-white">Amount</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((transaction, index) => (
              <motion.tr
                key={transaction.id}
                className={`border-b cursor-pointer ${
                  selectedIndex === startIndex + index ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleRowClick(startIndex + index)} // Adjust for global index
                animate={{
                  scale: selectedIndex === startIndex + index ? 1.05 : 1,
                  transition: { duration: 0.3 },
                }}
              >
                <td className="py-2 px-4 text-center text-gray-800">{transaction.id}</td>
                <td className="py-2 px-4 text-center text-gray-800">{transaction.date}</td>
                <td className="py-2 px-4 text-center text-gray-800">{transaction.amount}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-between items-center">
        <button
          onClick={handlePrevious}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          <FaArrowLeft size={16} />
        </button>
        <button
          onClick={handleNext}
          className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
        >
          <FaArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default TransactionsList;
