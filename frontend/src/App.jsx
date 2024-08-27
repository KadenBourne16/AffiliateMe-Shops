import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/affiliatemeSignUp.jsx';
import Login from './components/affiliatemeLogin.jsx';
import Dashboard from './components/affilaiteDashboard.jsx';

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
