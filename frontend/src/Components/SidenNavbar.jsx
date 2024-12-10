import React from 'react';
import { Link } from 'react-router-dom';
import {FaTshirt, FaShoePrints, FaSuitcase, FaGem, FaChild, FaHome, FaSpa, FaRing, FaCut, FaMobileAlt, FaTv, FaLaptop, FaCar, FaUserFriends, FaTruck, FaStore} from 'react-icons/fa';

const SideNavbar = () => {
  const navItems = [
    { name: "Clothing", icon: <FaTshirt style={{ color: '#FF6347' }} />, path: "/dashboard/clothing" },
    { name: "Shoes", icon: <FaShoePrints style={{ color: '#4682B4' }} />, path: "/dashboard/shoes" },
    { name: "Luggage & Bags", icon: <FaSuitcase style={{ color: '#FFD700' }} />, path: "/dashboard/luggage" },
    { name: "Watch & Jewelry", icon: <FaGem style={{ color: '#8A2BE2' }} />, path: "/dashboard/jewelry" },
    { name: "Kids & Toys", icon: <FaChild style={{ color: '#32CD32' }} />, path: "/dashboard/kids" },
    { name: "Home & Appliances", icon: <FaHome style={{ color: '#FF4500' }} />, path: "/dashboard/home" },
    { name: "Beauty", icon: <FaSpa style={{ color: '#FF69B4' }} />, path: "/dashboard/beauty" },
    { name: "Weddings", icon: <FaRing style={{ color: '#FF1493' }} />, path: "/dashboard/weddings" },
    { name: "Hair", icon: <FaCut style={{ color: '#A0522D' }} />, path: "/dashboard/hair" },
    { name: "Phones & Tel", icon: <FaMobileAlt style={{ color: '#1E90FF' }} />, path: "/dashboard/phones" },
    { name: "Electronics", icon: <FaTv style={{ color: '#6A5ACD' }} />, path: "/dashboard/electronics" },
    { name: "Computer & Office", icon: <FaLaptop style={{ color: '#20B2AA' }} />, path: "/dashboard/office" },
    { name: "Automobile Accessory", icon: <FaCar style={{ color: '#FF8C00' }} />, path: "/dashboard/automobile" },
    { name: "Affiliates", icon: <FaUserFriends style={{ color: '#4CAF50' }} />, path: "/dashboard/affiliates" },
    { name: "DeliveryAgents", icon: <FaTruck style={{ color: '#2196F3' }} />, path: "/dashboard/deliveryagents" },
    { name: "Shops", icon: <FaStore style={{ color: '#FF9800' }} />, path: "/dashboard/shops" }
  ];

  return (
    <div className="w-auto h-screen bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-blur-lg shadow-lg sticky right-0 top-0 z-auto">
      <h1 className="text-green-500 font-bold text-xl p-4">AFFLUENCELINKS</h1>
      <ul className="space-y-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="flex items-center text-white hover:bg-green-500 hover:text-white transition-colors duration-200 p-3 cursor-pointer">
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
