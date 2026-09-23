import { useState } from 'react'
import './App.css'
import Navbar2 from './folder/Navbar2.jsx'
import Login from './login/Login.jsx'
import Acceuil from './Accueil/Accueil.jsx'

function App() {
  const [count, setCount] = useState(0)
  return (
    <> 
    <Navbar2 />
    <Acceuil />
    </>
  )
  
}




export default App
