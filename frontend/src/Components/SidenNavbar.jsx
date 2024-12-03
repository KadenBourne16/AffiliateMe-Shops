import React from 'react';
import { Link } from 'react-router-dom';
import { FaTshirt, FaShoePrints, FaSuitcase, FaGem, FaChild, FaHome, FaSpa, FaRing, FaCut, FaMobileAlt, FaTv, FaLaptop, FaCar } from 'react-icons/fa';

const SideNavbar = () => {
  const navItems = [
    { name: "Clothing", icon: <FaTshirt style={{ color: '#FF6347' }} />, path: "/clothing" },
    { name: "Shoes", icon: <FaShoePrints style={{ color: '#4682B4' }} />, path: "/shoes" },
    { name: "Luggage & Bags", icon: <FaSuitcase style={{ color: '#FFD700' }} />, path: "/luggage" },
    { name: "Watch & Jewelry", icon: <FaGem style={{ color: '#8A2BE2' }} />, path: "/jewelry" },
    { name: "Kids & Toys", icon: <FaChild style={{ color: '#32CD32' }} />, path: "/kids" },
    { name: "Home & Appliances", icon: <FaHome style={{ color: '#FF4500' }} />, path: "/home" },
    { name: "Beauty", icon: <FaSpa style={{ color: '#FF69B4' }} />, path: "/beauty" },
    { name: "Weddings", icon: <FaRing style={{ color: '#FF1493' }} />, path: "/weddings" },
    { name: "Hair", icon: <FaCut style={{ color: '#A0522D' }} />, path: "/hair" },
    { name: "Phones & Tel", icon: <FaMobileAlt style={{ color: '#1E90FF' }} />, path: "/phones" },
    { name: "Electronics", icon: <FaTv style={{ color: '#6A5ACD' }} />, path: "/electronics" },
    { name: "Computer & Office", icon: <FaLaptop style={{ color: '#20B2AA' }} />, path: "/office" },
    { name: "Automobile Accessory", icon: <FaCar style={{ color: '#FF8C00' }} />, path: "/automobile" }
  ];

  return (
    <div className="w-auto h-auto bg-gray-800 shadow-lg sticky right-0 top-0 z-auto">
    <h1 className="text-blue-700 font-bold text-xl p-4">AFFLUENCELINKS</h1>
    <ul className="space-y-1"> {/* Reduced spacing between items */}
      {navItems.map((item, index) => (
        <li key={index}>
          <Link to={item.path} className="flex items-center text-white hover:bg-blue-200 hover:text-white transition-colors duration-200 p-3 cursor-pointer"> {/* Reduced padding */}
            <span className="mr-2">{item.icon}</span>
            {item.name}
          </Link>
        </li>
      ))}
    </ul>
  </div>
  );
};

export default SideNavbar;