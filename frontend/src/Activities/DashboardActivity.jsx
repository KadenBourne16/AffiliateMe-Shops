import React, { useState, useEffect } from 'react';
import SideNavbar from '../Components/SidenNavbar';
import NavBar2 from '../Components/GeneralComponents/Navbar2';
import LoadingAnimation from '../Components/GeneralComponents/LoadingAnimation';
import { Routes, Route, Link } from 'react-router-dom';
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

  useEffect(() => {
    const storedLoggedIn = localStorage.getItem('loggedIn');
    if (storedLoggedIn === 'true') {
      setIsLoaded(true);
      setData('Welcome Back');
    } else {
      setIsLoaded(false);
    }
  }, []);

  if (!isLoaded) {
    return <LoadingAnimation />;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-64 h-screen sticky top-0 z-40">
        <SideNavbar />
      </div>
      {/* Main Content Area */}
      <div className="flex-grow">
        <NavBar2 />
        <SmallMenu />
        <div className="overflow-y-auto" style={{ height: "calc(100vh - 64px)" }}>
          <h1 className="text-2xl font-bold mb-4">{data}</h1>
          <div style={{ height: "1000px" }}>
            <Routes>
              <Route path="/" element={<ClothingActivity />} />
              <Route path="/clothing" element={<ClothingActivity />} />
              <Route path="/shoes" element={<ShoesActivity />} />
              <Route path="/luggage" element={<LuggageActivity />} />
              <Route path="/jewelry" element={<JewelryActivity />} />
              <Route path="/home" element={<HomeActivity />} />
              <Route path="/beauty" element={<BeautyActivity />} />
              <Route path="/kids" element={<KidsActivity />} />
              <Route path="/wedding" element={<KidsActivity />} />
              <Route path="/hair" element={<HairActivity />} />
              <Route path="/phones" element={<PhonesActivity />} />
              <Route path="/electronics" element={<ElectronicsActivity />} />
              <Route path="/office" element={<OfficeActivity />} />
              <Route path="/automobile" element={<AutomobileActivity />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
