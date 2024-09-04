import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { motion } from 'framer-motion';

const StudentsList = () => {
  const students = [
    { studentId: 'S01', name: 'John Doe' },
    { studentId: 'S02', name: 'Jane Smith' },
    { studentId: 'S03', name: 'Alice Johnson' },
    { studentId: 'S04', name: 'Bob Brown' },
    { studentId: 'S05', name: 'Charlie Davis' },
    { studentId: 'S06', name: 'Diana Evans' },
    { studentId: 'S07', name: 'Ethan Harris' },
    { studentId: 'S08', name: 'Fiona Green' },
    { studentId: 'S09', name: 'George Hill' },
    { studentId: 'S10', name: 'Hannah Ives' },
    { studentId: 'S11', name: 'Ian Johnson' },
    { studentId: 'S12', name: 'Jackie King' },
    { studentId: 'S13', name: 'Kyle Lewis' },
    { studentId: 'S14', name: 'Laura Miller' },
    { studentId: 'S15', name: 'Mia Nelson' },
    { studentId: 'S16', name: 'Nate OConnor' },
    { studentId: 'S17', name: 'Olivia Parker' },
    { studentId: 'S18', name: 'Paul Quinn' },
    // Add more students if needed
  ];

  const itemsPerPage = 10; // Number of items per page
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedIndex, setSelectedIndex] = useState(null); // State for selected index

  const totalPages = Math.ceil(students.length / itemsPerPage);

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
  const currentItems = students.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div
      className="p-6 shadow-md rounded-lg h-full"
      style={{
        background: 'linear-gradient(135deg, #e0f7fa 30%, #e1bee7 100%)',
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800 text-center">Students List</h2>
      <div className="overflow-x-auto mb-4">
        <table className="min-w-full border border-gray-300 bg-white shadow-lg rounded-lg">
          <thead className="bg-gradient-to-br from-gray-800 via-pink-600 to-gray-800 border-b">
            <tr>
              <th className="py-2 px-4 text-center text-white">Student ID</th>
              <th className="py-2 px-4 text-center text-white">Name</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((student, index) => (
              <motion.tr
                key={student.studentId}
                className={`border-b cursor-pointer ${
                  selectedIndex === startIndex + index ? 'bg-gray-200' : 'hover:bg-gray-100'
                }`}
                onClick={() => handleRowClick(startIndex + index)} // Adjust for global index
                animate={{
                  scale: selectedIndex === startIndex + index ? 1.05 : 1,
                  transition: { duration: 0.3 },
                }}
              >
                <td className="py-2 px-4 text-center text-gray-800">{student.studentId}</td>
                <td className="py-2 px-4 text-center text-gray-800">{student.name}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center items-center space-x-4 mt-4">
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

export default StudentsList;
