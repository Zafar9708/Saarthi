import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import SignIn from './pages/SignIn'

function App() {
  return (
    <>
      <Routes>
        {/* Each route must be declared directly */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
