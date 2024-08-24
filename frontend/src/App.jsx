import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/affiliatemeSignUp.jsx'

function App() {
  return (
    <div> {/* Add a root element */}
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SignUp/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App