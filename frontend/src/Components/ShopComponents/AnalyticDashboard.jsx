import React from 'react';

function AnalyticDashboard() {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="relative">
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 rounded-full bg-white shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <i className="fas fa-search absolute left-3 top-2.5 text-white"></i>
        </div>
        <div className="flex items-center space-x-4">
          <i className="fas fa-cog text-gray-500"></i>
          <i className="fas fa-bell text-gray-500 relative">
            <span className="absolute top-0 right-0 inline-block w-2 h-2 bg-blue-500 rounded-full"></span>
          </i>
          <i className="fas fa-shopping-cart text-gray-500"></i>
          <img src="/background/picture1.jpg" alt="User  Avatar" className="w-10 h-10 rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-xl text-black">
          <h2 className="text-4xl font-semibold text-yellow-500">Good Afternoon, Jonathan!</h2>
          <p className="text-gray-500">Here's what happening with your store today</p>
          <div className="flex justify-between items-center mt-4">
            <div>
              <p className="text-gray-500">Today's visit</p>
              <p className="text-2xl font-semibold">14,209</p>
            </div>
            <div>
              <p className="text-gray-500">Today's total sales</p>
              <p className="text-2xl font-semibold">$21,349.29</p>
            </div>
            <img src="https://placehold.co/100x100" alt="Store Illustration" className="w-24 h-24" />
          </div>

          <div className="mt-4">
            <div className="bg-orange-100 text-orange-600 p-4 rounded-lg flex justify-between items-center mb-2">
              <p><span className="font-semibold">5 products</span> didn't publish to your Facebook page</p>
              <a href="#" className="text-orange-600 font-semibold">View products &gt;</a>
            </div>
            <div className="bg-blue-100 text-blue-600 p-4 rounded-lg flex justify-between items-center mb-2">
              <p><span className="font-semibold">7 orders</span> have payments that need to be captured</p>
              <a href="#" className="text-blue-600 font-semibold">View payments &gt;</a>
            </div>
            <div className="bg-gray-100 text-gray-600 p-4 rounded-lg flex justify-between items-center">
              <p><span className="font-semibold">50+ orders</span> need to be fulfilled</p>
              <a href="#" className="text-gray-600 font-semibold">View orders &gt;</a>
            </div>
          </div>
        </div>

        {/* Orders Section */}
        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-gray-500">Orders</p>
              <p className="text-2xl font-semibold">15,450</p>
              <p className="text-black">13,675 <span className="text-green-500">▲ 21.8%</span></p>
            </div>
            <div>
              <p className="text-gray-500">Items sold</p>
              <p className="text-2xl font-semibold">1,054</p>
              <p className="text-black">13,675 <span className="text-red-500">▼ 21.8%</span></p>
            </div>
            <div>
              <p className="text-gray-500">Refunds</p>
              <p className="text-2xl font-semibold">$145.65</p>
              < p className="text-black">13,675 <span className="text-green-500">▲ 21.8%</span></p>
            </div>
            <div>
              <p className="text-gray-500">Gross sale</p>
              <p className="text-2xl font-semibold">$100.26</p>
              <p className="text-black">$109.65 <span className="text-red-500">▼ 21.8%</span></p>
            </div>
            <div>
              <p className="text-gray-500">Shipping</p>
              <p className="text-2xl font-semibold">$365.53</p>
              <p className="text-black">13,675 <span className="text-green-500">▲ 21.8%</span></p>
            </div>
            <div>
              <p className="text-gray-500">Processing</p>
              <p className="text-2xl font-semibold">861</p>
              <p className="text-black">13,675 <span className="text-green-500">▲ 21.8%</span></p>
            </div>
          </div>
        </div>
      </div>

      {/* Weekly Sales */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <p className="text-gray-500">Weekly Sales</p>
          <p className="text-2xl font-semibold">$47K</p>
          <p className="text-green-500">+3.5%</p>
          <div className="mt-4">
            <img src="https://placehold.co/100x50" alt="Weekly Sales Chart" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <p className="text-gray-500">Product Share</p>
          <p className="text-2xl font-semibold">34.6%</p>
          <p className="text-green-500">▲ 3.5%</p>
          <div className="mt-4">
            <img src="https://placehold.co/100x50" alt="Product Share Chart" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <p className="text-gray-500">Market Share</p>
          <p className="text-2xl font-semibold">26M</p>
          <div className="mt-4">
            <img src="https://placehold.co/100x50" alt="Market Share Chart" />
          </div>
        </div>
      </div>

      {/* Total Order */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-black">
          <p className="text-gray-500">Total Order</p>
          <p className="text-2xl font-semibold">58.4K</p>
          <p className="text-red-500">▼ 13.6%</p>
          <div className="mt-4">
            <img src="https://placehold.co/100x50" alt="Total Order Chart" />
          </div>
        </div>

        {/* Total Sales */}
        <div className="col-span-2 bg-white p-6 rounded-lg shadow-md text-black">
          <div className="flex justify-between items-center mb-4">
            <p className="text-gray-500">Total Sales</p>
            <div className="flex items-center space-x-2">
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox text-blue-500" checked />
                <span className="ml-2 text-gray-500">Last Month: $32,502.00</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="form-checkbox text-orange-500" checked />
                <span className="ml-2 text-gray-500">Prev Year: $46,018.00</span>
              </div>
            </div>
          </div>
          <div>
            <img src="https://placehold.co/400x200" alt="Total Sales Chart" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AnalyticDashboard;