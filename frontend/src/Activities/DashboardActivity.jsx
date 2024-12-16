import React, { useState, useEffect } from 'react';
import SideNavbar from '../Components/SidenNavbar';
import axios from 'axios';
import NavBar2 from '../Components/GeneralComponents/Navbar2';
import LoadingAnimation from '../Components/GeneralComponents/LoadingAnimation';
import { Routes, Route } from 'react-router-dom';
import ClothingActivity from './GeneralActivities/ClothingActivity';
import AutomobileActivity from './GeneralActivities/AutomobileActivity';
import BeautyActivity from './GeneralActivities/BeautyActivity';
import ElectronicsActivity from './GeneralActivities/ElectronicsActivity';
import HairActivity from './GeneralActivities/HairActivity';
import HomeActivity from './GeneralActivities/HomeActivity';
import JewelryActivity from './GeneralActivities/JewelryActivity';
import KidsActivity from './GeneralActivities/KidsActivity';
import LuggageActivity from './GeneralActivities/LuggageActivity';
import OfficeActivity from './GeneralActivities/OfficeActivity';
import PhonesActivity from './GeneralActivities/PhonesActivity';
import ShoesActivity from './GeneralActivities/ShoesActivity';
import SmallMenu from '../Components/GeneralComponents/SmallMenu';

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);
  const [loadingUser , setLoadingUser ] = useState(true);
  const [currUser , setCurrUser ] = useState({}); // Changed userData to currUser 

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    setTimeout(() => {
      if (storedLoggedIn === 'true') {
        setIsLoaded(true);
        setData(localStorage.getItem('userId'));
      } else {
        setIsLoaded(false);
      }
    }, 2000);
  }, []);

  const getUserById = async (id) => {
    setLoadingUser (true);
    try {
      const userById = await axios.get(`http://localhost:3000/affluencelink/getuserbyid/${id}`);
      setCurrUser (userById.data[0]); // Set currUser  instead of userData
      console.log("Fetched user data:", currUser); // Log the fetched data directly
    } catch (err) {
      console.log("Error message: ", err);
    } finally {
      setLoadingUser (false);
    }
  };

  useEffect(() => {
    if (data) {
      getUserById(data);
    }
  }, [data]);

  if (!isLoaded || loadingUser ) {
    return <LoadingAnimation />;
  }

  return (
    <div className="flex h-auto bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 h-screen sticky top-0 z-40">
        <SideNavbar />
      </div>
      {/* Main Content Area */}
      <div className="flex-grow">
        <NavBar2 userInfo={currUser } /> {/* Pass currUser  to NavBar2 */}
        <SmallMenu />
        <div className="overflow-y-auto" style={{ height: "calc(100vh - 64px)" }}>
          <div style={{ height: "1000px" }}>
            <Routes>
              <Route path="/" element={<ClothingActivity />} />
              <Route path="/automobile" element={<AutomobileActivity />} />
              <Route path="/beauty" element={<BeautyActivity />} />
              <Route path="/electronic" element={<ElectronicsActivity />} />
              <Route path="/hair" element={<HairActivity />} />
              <Route path="/home" element={<HomeActivity />} />
              <Route path="/jewelry" element={<JewelryActivity />} />
              <Route path="/kids" element={<KidsActivity />} />
              <Route path="/luggage" element={<LuggageActivity />} />
              <Route path="/office" element={<OfficeActivity />} />
              <Route path="/phones" element={<PhonesActivity />} />
              <Route path="/shoes" element={<ShoesActivity />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;