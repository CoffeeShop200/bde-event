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
  const events = [
    { day: 3, title: 'Team sync', color: 'blue' },
    { day: 7, title: 'Design review', color: 'orange' },
    { day: 12, title: 'Product launch', color: 'red' },
    { day: 15, title: 'Workshop', color: 'green' },
    { day: 21, title: 'Client dinner', color: 'blue' },
    { day: 24, title: 'Project retro', color: 'orange' },
  ]

  const events2 = [
    {img: "img",
    title: "Team sync",
    description: "description de fou",
    startDate: "25/09/2026",
    startTime: "14:00",
    endDate: "25/09/2026",
    endTime: "15:00",
    location: "salle A"
    },
    {img: "img",
    title: "Design review",
    description: "description de fou",
    startDate: "25/09/2026",
    startTime: "14:00",
    endDate: "25/09/2026",
    endTime: "15:00",
    location: "salle A"
    },
    {img: "img",
    title: "Product launch",
    description: "description de fou",
    startDate: "25/09/2026",
    startTime: "14:00",
    endDate: "25/09/2026",
    endTime: "15:00",
    location: "salle A"
    },
    {img: "img",
    title: "Workshop",
    description: "description de fou",
    startDate: "25/09/2026",
    startTime: "14:00",
    endDate: "25/09/2026",
    endTime: "15:00",
    location: "salle A"
    },
    {img: "img",
    title: "Client dinner",
    description: "description de fou",
    startDate: "25/09/2026",
    startTime: "14:00",
    endDate: "25/09/2026",
    endTime: "15:00",
    location: "salle A"
    },
    {img: "img",
    title: "Project retro",
    description: "description de fou",
    startDate: "25/09/2026",
    startTime: "14:00",
    endDate: "25/09/2026",
    endTime: "15:00",
    location: "salle A"
    },
  ]

  return (
    <BrowserRouter>
      <Navbar2 />
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/calendrier" element={<Calendar events={events} events2={events2} />} />
        <Route path="/calendrier" element={<Calendar />} />
        <Route path="/admin/gerer-event" element={<EventManage />} />
        <Route path="/admin/gerer-reservations" element={<ReservationManage />} />
      </Routes>
    </BrowserRouter>
  )
}




export default App
