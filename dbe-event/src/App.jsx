import { useState } from 'react'

import './App.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Login from './login/Login.jsx'
import Register from './login/Register.jsx'
import Calendar from './calendar/calendar.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendar" element={<Calendar />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
