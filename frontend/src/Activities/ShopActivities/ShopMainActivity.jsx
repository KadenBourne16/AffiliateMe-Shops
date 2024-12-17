import React from 'react';
import { Routes, Route } from 'react-router-dom';
import ShopAnalyticActivity from './ShopAnalyticActivity';
import ShopSideNav from '../../Components/ShopComponents/ShopSideNav';
import ShopProductsActivity from './ShopProductsActivity';
import StoreActivity from './StoreActivity'

function ShopMainActivity() {
    return (
        <div className='flex'>
            <ShopSideNav />
            <div className='flex-grow p-4'> {/* Added padding and flex-grow for content area */}
                <Routes>
                    <Route path='/home' element={<ShopAnalyticActivity />} />
                    <Route path='/product' element={<ShopProductsActivity />} />
                    <Route path='/store' element={<StoreActivity/>} />
                </Routes>
            </div>
        </div>
    );
}

export default ShopMainActivity;