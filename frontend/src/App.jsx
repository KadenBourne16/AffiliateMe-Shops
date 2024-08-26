import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './components/affiliatemeSignUp.jsx'
import Login from './components/affiliatemeLogin.jsx'

function App() {
  return (
    <div> {/* Add a root element */}
      <BrowserRouter>
        <Routes>
          <Route path='/signup' element={<SignUp/>} />
          <Route path='/login' element={<Login/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App