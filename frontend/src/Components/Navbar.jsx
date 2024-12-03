import React from 'react';
import { FaHome, FaShoppingCart, FaBoxOpen, FaStore, FaUsers } from 'react-icons/fa';
import {Link} from 'react-router-dom'


function Navbar() {
    const navigations = [
        { name: "Home", icon: <FaHome />, path: "/admindashboard" }, 
        { name: "Sales", icon: <FaShoppingCart />, path: "/admindashboard/sales" }, 
        { name: "Profits", icon: "%$", path: "/admindashboard/profits" }, 
        { name: "Products", icon: <FaBoxOpen />, path: "/admindashboard/products" }, 
        { name: "Shops", icon: <FaStore />, path: "/admindashboard/shops" }, 
        { name: "Customers", icon: <FaUsers />, path: "/admindashboard/customers" }
    ]
  return (
    <div>
        <div className='bg-blue-200 mt-0 w-screen flex flex-row py-3'>
            <h1 className='font-bold text-2xl'>AFFLUENCELINKS</h1>
            <ul className='ml-32 flex flex-row items-center'>
                {navigations.map((item, index) => {
                    return(
                    <li key={index} className='mx-10 space-x-3 hover:underline hover:text-blue-600'>
                        <Link to={item.path} className="flex items-center font-semibold hover:font-extrabold">
                            {item.icon}
                            {item.name}
                        </Link>
                    </li>
                    )
                })}
            </ul>
        </div>
    </div>
  )
}

export default Navbar;