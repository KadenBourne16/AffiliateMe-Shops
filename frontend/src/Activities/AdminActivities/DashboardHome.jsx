import React from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaDollarSign, FaMoneyBillWave, FaClipboardList, FaTruck, FaStore } from 'react-icons/fa';

function DashboardHome() {
    const properties = {
        width: "3em",
        height: "6em",
        opacity: "20%"
    }

    const cardData = [
        { title: "Purchase", count: 120, link: "", icon: <FaShoppingCart style={properties} /> },
        { title: "Sales", count: 200, link: "", icon: <FaDollarSign style={properties} /> },
        { title: "Profit", count: 80, link: "", icon: <FaMoneyBillWave style={properties} /> },
        { title: "Orders", count: 150, link: "", icon: <FaClipboardList style={properties} /> },
        { title: "Deliveries", count: 90, link: "", icon: <FaTruck style={properties} /> },
        { title: "Shops", count: 23, link: "", icon: <FaStore style={properties} /> },

    ];

    return (
        <div className='flex flex-col gap-3 pt-5 items-center'>
            <div className='flex flex-wrap gap-3 w-3/6'>
                {cardData.map((data, index) => (
                    <div key={index} className='container mx-2 bg-blue-400 shadow-lg rounded-md grid grid-cols-3 w-auto self-center'>
                        <div className='col-span-2 ml-4'>
                            <h1 className='font-semibold text-xl'>{data.title}</h1>
                            <p className='text-5xl font-bold'>{data.count}</p>
                            <div>
                                <Link className="text-blue-900" to={`/admindashboard/${data.title.toLowerCase()}`}> {/* Example link destination */}
                                    More Info
                                </Link>
                            </div>
                        </div>
                        <div className='mr-4 h-full w-auto'>
                            {data.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default DashboardHome;