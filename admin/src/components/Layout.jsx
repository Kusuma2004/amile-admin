import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import SideBar from './SideBar';

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="flex flex-grow mt-16"> {/* Add margin-top to account for the fixed NavBar */}
        <SideBar />
        <main className="flex-grow p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
