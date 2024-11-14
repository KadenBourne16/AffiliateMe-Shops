// 
import React from 'react';
import SideNavbar from '../Components/SidenNavbar.jsx'

function Dashboard() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-white shadow-lg">
        <SideNavbar />
      </div>
      {/* Main Content Area */}
      <div className="flex-grow p-4 bg-gray-100">
        <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
        <p>Items</p>
        {/* You can add more content here */}
      </div>
    </div>
  );
}

export default Dashboard;