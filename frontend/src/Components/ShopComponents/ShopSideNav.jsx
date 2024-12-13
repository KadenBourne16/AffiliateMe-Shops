import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaStore, FaPlus, FaClipboardList, FaShoppingCart, FaSignOutAlt } from 'react-icons/fa';

function ShopSideNav() {
  const navItems = [
    { name: "Home", icon: <FaHome />, path: "/myshop/home" },
    { name: "Store", icon: <FaStore />, path: "/myshop/store" },
    { name: "Product (New)", icon: <FaPlus />, path: "/myshop/product" },
    { name: "Inventory", icon: <FaClipboardList />, path: "/myshop/inventory" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/myshop/orders" },
    { name: "Exit Shop", icon: <FaSignOutAlt />, path: "/dashboard" },
  ];

  return (
    <div className="w-64 h-screen bg-gradient-to-br from-gray-900 to-black sticky top-0 z-10">
      <h1 className="text-white text-xl font-bold p-4">Shop Name</h1>
      <ul className="space-y-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link to={item.path} className="flex items-center text-white hover:bg-green-500 transition-colors duration-200 p-3 cursor-pointer">
              <span className="mr-2">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShopSideNav;