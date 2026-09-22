import { useState } from 'react'
import './App.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import Login from './login/Login.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    <Login />
    </>
  )
  
}




export default App
