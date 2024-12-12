import { FaTshirt, FaUserAlt, FaTruck, FaCog, FaExclamationCircle } from 'react-icons/fa';
import {Link} from 'react-router-dom'

function SmallMenu() {
  return (
    <div className="absolute right-7 mt-4 w-auto h-auto py-4 bg-gradient-to-br from-gray-900 to-black bg-opacity-80 backdrop-blur-lg shadow-lg rounded-xl" >
      <div className="space-y-4">
        <Link to="/OwnShops" className="flex items-center px-4 py-2 text-white hover:bg-green-700">
          <FaTshirt className="mr-2" />
          Own Shop
        </Link>
        <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-green-700">
          <FaUserAlt className="mr-2" />
          Be AffluenceLegend
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-green-700">
          <FaTruck className="mr-2" />
          Be DeliveryAgent
        </a>
      </div>
      <div className='text-white justify-center text-center'>--------------------</div>
      <div className="space-y-4 mt-auto">
        <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-green-700">
          <FaCog className="mr-2" />
          Settings
        </a>
        <a href="#" className="flex items-center px-4 py-2 text-white hover:bg-green-700">
          <FaExclamationCircle className="mr-2" />
          Report Problems
        </a>
      </div>
    </div>
  )
}

export default SmallMenu