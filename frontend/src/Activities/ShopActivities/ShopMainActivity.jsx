import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopAnalyticActivity from './ShopAnalyticActivity';
import ShopSideNav from '../../Components/ShopComponents/ShopSideNav';
import ShopProductsActivity from './ShopProductsActivity';

function ShopMainActivity() {
    return (
        <div className='flex bg-black'>
            <ShopSideNav />
            <div className='flex-grow p-4'> {/* Added padding and flex-grow for content area */}
                <Routes>
                    <Route path='/home' element={<ShopAnalyticActivity />} />
                    <Route path='/product' element={<ShopProductsActivity />} />
                </Routes>
            </div>
        </div>
    );
}

export default ShopMainActivity;