import { useState } from 'react'
import './App.css'
import Navbar2 from './folder/Navbar2.jsx'
import Login from './login/Login.jsx'
import Accueil from './Accueil/Accueil.jsx'
import Event from './Card/Card.jsx'


function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    <Navbar2 />
    <Accueil />
    <Event />
    </>
  )
  
}




export default App
