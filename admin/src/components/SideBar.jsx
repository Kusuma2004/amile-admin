import React, { useState } from 'react';
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi';
import { FaTachometerAlt, FaUserGraduate, FaListAlt, FaChalkboardTeacher } from 'react-icons/fa';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 backdrop-blur-md border border-gray-800 text-white h-screen p-4 transition-all duration-300 ${isOpen ? 'w-64' : 'w-16'} rounded-lg shadow-lg`}>
      <div className="flex items-center justify-between mb-6">
        <h2 className={`text-xl font-semibold transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>Menu</h2>
        <button
          className="text-white p-2 rounded-full hover:bg-gray-600 transition-colors duration-300"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiOutlineChevronLeft size={24} /> : <HiOutlineChevronRight size={24} />}
        </button>
      </div>
      <ul className="flex flex-col">
        <li className="mb-4 flex items-center">
          <a href="/" className="flex items-center space-x-2 hover:text-gray-300">
            <FaTachometerAlt size={20} />
            {isOpen && <span>Dashboard</span>}
          </a>
        </li>
        <li className="mb-4 flex items-center">
          <a href="/students" className="flex items-center space-x-2 hover:text-gray-300">
            <FaUserGraduate size={20} />
            {isOpen && <span>Students Lists</span>}
          </a>
        </li>
        <li className="mb-4 flex items-center">
          <a href="/transactions" className="flex items-center space-x-2 hover:text-gray-300">
            <FaListAlt size={20} />
            {isOpen && <span>Transactions Lists</span>}
          </a>
        </li>
        <li className="mb-4 flex items-center">
          <a href="/mentors" className="flex items-center space-x-2 hover:text-gray-300">
            <FaChalkboardTeacher size={20} />
            {isOpen && <span>Mentor Lists</span>}
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideBar;
