import React, { useState, useEffect } from 'react';
import RegionsFile from '../../../utils/Regions.json'

const RegisterStore = () => {
  const [shopName, setShopName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [email, setEmail] = useState('');
  const [businessAddress, setBusinessAddress] = useState('');
  const [location, setLocation] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');

  const [region, setRegion] = useState('');
  const [regions, setRegions] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [selectedDistrict, setSelectedDistrict] = useState('');

  const handleRegister = (e) => {
    e.preventDefault();
    // Add logic to register the store
  };

  const setDistrict = (selectedRegion) => {
    const selectedRegionData = regions.find(region => region.name === selectedRegion);
    if (selectedRegionData) {
      setDistricts(selectedRegionData.sub_regions);
    }
  }

  useEffect(() => {
    const regionalValues = RegionsFile.regions;
    setRegions(regionalValues);
  }, []);

  return (
    <div className="absolute right-0 max-w-md w-96 bg-gradient-to-br from-gray-900 to-black bg-opacity-80 p-8 rounded-2xl shadow-2xln mt-20 mr-10">
      <h2 className="text-white text-2xl mb-6 font-bold text-center">
        Register Your Store
      </h2>
      <form onSubmit={handleRegister}>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="shopName">
            Shop Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="shopName"
            type="text"
            placeholder='e.g JohnDoe Grocery Shop'
            value={shopName}
            onChange={(e) => setShopName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="businessType">
            Business Type
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="businessType"
            value={businessType}
            placeholder="Select Business Type"
            onChange={(e) => setBusinessType(e.target.value)}
          >
            <option className="text-green-700 font-bold" value="">Select Business Type</option>
            <option value="Grocery Store">Grocery Store</option>
            <option value="Apparel Store">Apparel Store</option>
            <option value="Electronic Store">Electronic Store</option>
            <option value="Automobile">Automobile</option>
            <option value="General Store">General Store</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder='e.g example@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="businessAddress">
            Business Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="businessAddress"
            type="text"
            placeholder='postal/zip codes'
            value={businessAddress}
            onChange={(e) => setBusinessAddress(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
            State/Region
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            name="RegionSelect"
            placeholder="Select Region"
            value={region }
            onChange={(e) => {
              setRegion(e.target.value);
              setDistrict(e.target.value);
            }}
          >
            <option value="">Select Region</option>
            {regions && regions.map((regionalvalue) => (
              <option key={regionalvalue.name} value={regionalvalue.name}>{regionalvalue.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className='block tet-white text-sm font-bold'>
            District
          </label>
          <select className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline" 
          name=""
          value={selectedDistrict} 
          onChange={(e) => setSelectedDistrict(e.target.value)}
          >
            <option value="">Select District</option>
            {districts && districts.map((district) => (
              <option key={district} value={district}>{district}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder='e.g Wesley Grammar opposite'
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold mt-5 py-2 px-4 w-full rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Open Shop
        </button>
      </form>
    </div>
  );
};

export default RegisterStore;