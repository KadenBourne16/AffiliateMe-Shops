import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Activities/SignupActivity.jsx';
import Login from './Activities/LoginActivity.jsx';
import Dashboard from './Activities/DashboardActivity.jsx';
import './main.css'
import AdminDashboard from './Activities/AdminActivities/AdminDashboard.jsx';
import CreateShop from './Activities/ShopActivities/CreateShop.jsx'
import ShopMainActivity from './Activities/ShopActivities/ShopMainActivity.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path='/admindashboard/*' element = {<AdminDashboard />}/>
          <Route path='/OwnShops' element = {<CreateShop />}/>
          <Route path='/myshop/*' element={<ShopMainActivity/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
