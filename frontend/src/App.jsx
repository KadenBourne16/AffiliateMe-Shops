import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Activities/SignupActivity.jsx';
import Login from './Activities/LoginActivity.jsx';
import Dashboard from './Activities/DashboardActivity.jsx';
import './main.css'
import AdminDashboard from './Activities/AdminActivities/AdminDashboard.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path='/admindashboard/*' element = {<AdminDashboard />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
