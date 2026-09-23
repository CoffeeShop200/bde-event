import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Navbar2 from './folder/Navbar2.jsx'
import Login from './login/Login.jsx'
import Register from './login/Register.jsx'
import Calendar from './calendar/calendar.jsx'
import Acceuil from './Accueil/Accueil.jsx'
import EventManage from './EventManage/EventManage.jsx'
import ReservationManage from './ReservationManage/ReservationManage.jsx'

function App(props) {
  const events = {
    3: [{ title: 'Team sync', color: 'blue' }],
    7: [{ title: 'Design review', color: 'orange' }],
    12: [{ title: 'Product launch', color: 'red' }],
    15: [{ title: 'Workshop', color: 'green' }],
    21: [{ title: 'Client dinner', color: 'blue' }],
    24: [{ title: 'Project retro', color: 'orange' }],
  }
  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendrier" element={<Calendar />} />
        <Route path="/admin/gerer-event" element={<EventManage />} />
        <Route path="/admin/gerer-reservations" element={<ReservationManage />} />
      </Routes>
    </BrowserRouter>
  )
}




export default App
