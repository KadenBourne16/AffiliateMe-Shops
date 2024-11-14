import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './Activities/SignupActivity.jsx';
import Login from './Activities/LoginActivity.jsx';
import Dashboard from './Activities/DashboardActivity.jsx';
import './main.css'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
