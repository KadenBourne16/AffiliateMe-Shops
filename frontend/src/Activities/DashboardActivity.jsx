// Dashboard.js
import React from 'react';
import SideNavbar from '../Components/SidenNavbar';
import NavBar2 from '../Components/GeneralComponents/Navbar2';

function Dashboard() {
  return (
    <div className='flex h-screen'>
      {/* Sidebar */}
      <div className="w-64 h-screen sticky top-0 z-40">
        <SideNavbar />
      </div>

      {/* Main Content Area */}
      <div className="flex-grow">
        <NavBar2 />
        <div className='overflow-y-auto' style={{ height: "calc(auto - 64px)" }}>
          <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
          <div style={{ height: "1000px" }}> {/* Placeholder for content */}
            {/* Your dashboard content goes here */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;