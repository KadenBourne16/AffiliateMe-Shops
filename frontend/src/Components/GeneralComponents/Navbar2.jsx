// NavBar.js
import { FaShoppingCart, FaSearch, FaUser  } from 'react-icons/fa'; // Importing icons
import { useEffect, useState } from 'react';
import {useNavigate} from 'react-router-dom';

const NavBar2 = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

const logout = () => {
  localStorage.setItem('loggedIn', 'false');
  navigate('/');
}

const sendToLogin = () => {
  navigate('/');
}

  return (
    <nav className="flex items-center justify-between p-4 bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-blur-lg text-white sticky top-0 z-50 shadow">
      {/* Logo and App Name */}
      <div className="flex items-center">
        <img src="path-to-your-logo.png" alt="Logo" className="h-10" />
      </div>

      {/* Search Bar */}
      <div className="flex items-center mx-auto">
        <input
          type="text"
          placeholder="Search..."
          className="border-2 border-green-500 rounded-l px-4 py-2 focus:outline-none"
        />
        <button className="bg-green-500 text-white rounded-r px-4 py-2 flex items-center">
          <FaSearch />
        </button>
      </div>

      { isLoggedIn ? (
        <div className='mr-10'>
            <h1>Welcome username</h1>
        </div>
      ):null
    }

      {/* Cart Icon */}
      <div className="relative">
        <button className='flex mr-20'>
          <h1 className='text-2xl text-green-500 font-extrabold'>55</h1>
          <FaShoppingCart className="text-2xl cursor-pointer" />
        </button>
      </div>

      {/* Login Button */}
      {isLoggedIn ? (
        <button className="bg-red-500 text-white px-4 py-2 rounded flex items-center">
          <FaUser className="mr-2" onClick={logout}/> Logout
        </button>
      ) : (
        <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
          <FaUser className="mr-2" onClick={sendToLogin}/> Login
        </button>
      )}

    </nav>
  );
};

export default NavBar2;