import React from 'react';

const NavBar = () => {
  return (
    <nav className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-700 text-white p-4 fixed top-0 left-0 w-full z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <span className="text-xl font-semibold text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            Admin Portal
          </span>
        </div>
        <div className="flex-grow flex justify-center items-center">
          <span className="text-xl font-semibold">
            Admin Portal
          </span>
        </div>
        <div className="flex space-x-4">
          <a href="/" className="hover:text-gray-300">Home</a>
          <a href="/about" className="hover:text-gray-300">About</a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
