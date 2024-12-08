// NavBar.js
import { FaShoppingCart, FaSearch, FaUser  } from 'react-icons/fa'; // Importing icons

const NavBar2 = () => {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-800 text-white sticky top-0 z-50 shadow">
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

      {/* Cart Icon */}
      <div className="relative mr-2">
        <FaShoppingCart className="text-2xl cursor-pointer" />
      </div>

      {/* Login Button */}
      <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
        <FaUser  className="mr-2" /> Login
      </button>
    </nav>
  );
};

export default NavBar2;