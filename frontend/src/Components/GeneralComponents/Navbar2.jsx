import { FaShoppingCart, FaSearch, FaUser , FaPowerOff } from 'react-icons/fa'; // Importing icons
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar2 = (props) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({});
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const storedLoggedIn = localStorage.getItem('loggedIn');
        setIsLoggedIn(storedLoggedIn === 'true');
    }, []);

    const logout = () => {
        localStorage.setItem('loggedIn', 'false');
        navigate('/');
    };

    useEffect(() => {
        setUserData(props.userInfo || {}); // Ensure userData is an object
    }, [props.userInfo]);

    const sendToLogin = () => {
        navigate('/');
    };

    const handleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

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

            {isLoggedIn ? (
                <div className='mr-10'>
                    <h1>Welcome <span className='text-xl text-green-500 font-bold'>{userData['username'] || 'User  '}</span></h1> {/* Access first_name safely */}
                </div>
            ) : null}

            {/* Cart Icon */}
            <div className="relative">
                <button className='flex mr-20'>
                    <h1 className='text-2xl text-green-500 font-extrabold'>55</h1>
                    <FaShoppingCart className="text-2xl cursor-pointer" />
                </button>
            </div>

            {/* Profile Button */}
            {isLoggedIn ? (
                <div className="relative">
                    <button className="bg-green-500 font-bold text-white px-4 py-2 rounded-3xl flex items-center" onClick={handleDropdown}>
                        <FaUser  className="mr-2" /> Profile
                    </button>
                    {showDropdown && (
                        <div className="absolute rounded-xl bg-white shadow-md text-center w-64
                         right-0 top-12">
                            <ul>
                                <li className="py-3 text-black mt-2 hover:bg-green-500 cursor-pointer">Set status</li>
                                <li className="py-3 text-black hover:bg-green-500 cursor-pointer">Profile & account</li>
                                <li className="py-3 text-black hover:bg-green-500 cursor-pointer">Feedback</li>
                                <li className="py-3 text-black hover:bg-green-500 cursor-pointer">Settings</li>
                                <li className="mb-2 py-3 text-black hover:bg-red-600 cursor-pointer " onClick={logout}>
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <button className="bg-green-500 text-white px-4 py-2 rounded flex items-center">
                    <FaUser  className="mr-2" onClick={sendToLogin} /> Login
                </button>
            )}
        </nav>
    );
};

export default NavBar2;