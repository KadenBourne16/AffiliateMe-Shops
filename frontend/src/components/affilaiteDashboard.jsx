import { Route, Routes, Link } from "react-router-dom";
import '../stylesheet/affiliateDashboard.css'
import Item from './affiliateItems.jsx'
import Orders from '../dashboardcomponents/affiliatemeOrders.jsx'

function Dashboard() {
  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h2>Dashboard</h2>
        <ul>
          <li><Link to="/dashboard/items">Items</Link></li>
          <li><Link to="/dashboard/orders">Orders</Link></li>
        </ul>
      </div>
      <div className="content">
        <Routes>
          <Route path="items" element={<Item />} />
          <Route path="orders" element={<Orders/>}></Route>
        </Routes>
      </div>
    </div>
  );
}

export default Dashboard;