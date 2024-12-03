import React from 'react';
import Navbar from '../../Components/Navbar';
import { Routes, Route } from 'react-router-dom';
import DashboardHome from '../AdminActivities/DashboardHome'; // Fixed typo here
import Sales from '../AdminActivities/Sales' 

const AdminDashboard = () => {
    return (
        <div>
            <Navbar />
            <div>
                <Routes>
                    <Route path='/' element = {<DashboardHome />}/>
                    <Route path='/sales' element = {<Sales/>}/>
                </Routes>
            </div>
        </div>
    );
}

export default AdminDashboard;