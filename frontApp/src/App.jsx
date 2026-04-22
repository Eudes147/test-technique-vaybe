// hooks
import { useState } from 'react'


// Librairies
import { BrowserRouter, Routes, Route } from 'react-router-dom'

// Components
import Home from './pages/HomePage'
import AdminPage from './pages/AdminPage'
import SubmitPage from './pages/SubmitPage'
import CandidaturesPage from './pages/CandidaturesPage'



// Styles
import './App.css'

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/submit" element={<SubmitPage />} />
          <Route path="/dashboard" element={<CandidaturesPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
