import { useState } from 'react'
import './App.css'
import Navbar2 from '/src/folder/Navbar2.jsx';
import Accueil from '/src/Accueil/Accueil.jsx';

function App() {
  const [count, setCount] = useState(0)
  return (
    <><Navbar2/>
    <Accueil/></>
  )
  
}




export default App
