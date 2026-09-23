import { useState } from 'react'
import { Badge, Button, Card, Col, Container, Dropdown, Row } from 'react-bootstrap'
import './calendar.css'

const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
]

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export const events = [
  { day: 3, title: 'Team sync', color: 'blue' },
  { day: 7, title: 'Design review', color: 'orange' },
  { day: 12, title: 'Product launch', color: 'red' },
  { day: 15, title: 'Workshop', color: 'green' },
  { day: 21, title: 'Client dinner', color: 'blue' },
  { day: 24, title: 'Project retro', color: 'orange' },
]

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 8, 1))
  const [selectedDate, setSelectedDate] = useState(12)

  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const firstDay = new Date(year, month, 1).getDay()
  const daysInMonth = new Date(year, month + 1, 0).getDate()
  const previousMonthDays = new Date(year, month, 0).getDate()
  const days = Array.from({ length: 42 }, (_, index) => {
    const dayNumber = index - firstDay + 1
    if (dayNumber < 1) return { day: previousMonthDays + dayNumber, muted: true }
    if (dayNumber > daysInMonth) return { day: dayNumber - daysInMonth, muted: true }
    return { day: dayNumber, muted: false }
  })

  function changeMonth(offset) {
    setCurrentDate(new Date(year, month + offset, 1))
    setSelectedDate(null)
  }

  function goToToday() {
    const today = new Date()
    setCurrentDate(new Date(today.getFullYear(), today.getMonth(), 1))
    setSelectedDate(today.getDate())
  }

  return (
    <main className="calendar-page">
      <Container>
        <div className="calendar-header">
          <div className="calendar-eyebrow">Your schedule</div>
          <h1 className="calendar-title">Calendar</h1>
          <p className="calendar-subtitle">Keep track of your events, meetings, and important dates.</p>
        </div>

        <Row className="g-4">
          <Col lg={8}>
            <Card className="calendar-panel">
              <div className="calendar-toolbar d-flex align-items-center justify-content-between gap-2">
                <div className="d-flex align-items-center gap-2">
                  <Button variant="light" size="sm" aria-label="Previous month" onClick={() => changeMonth(-1)}>&lsaquo;</Button>
                  <span className="month-label">{monthNames[month]} {year}</span>
                  <Button variant="light" size="sm" aria-label="Next month" onClick={() => changeMonth(1)}>&rsaquo;</Button>
                </div>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-secondary" size="sm">Month</Dropdown.Toggle>
                  <Dropdown.Menu><Dropdown.Item active>Month</Dropdown.Item><Dropdown.Item>Week</Dropdown.Item><Dropdown.Item>Day</Dropdown.Item></Dropdown.Menu>
                </Dropdown>
              </div>
              <div className="calendar-grid">
                {weekDays.map((weekDay) => <div className="weekday" key={weekDay}>{weekDay}</div>)}
                {days.map(({ day, muted }, index) => (
                  <div className={`calendar-day ${muted ? 'muted' : ''} ${!muted && day === selectedDate ? 'selected' : ''}`} key={`${day}-${index}`} onClick={() => !muted && setSelectedDate(day)}>
                    <span className="day-number">{day}</span>
                    {!muted && events.filter((event) => event.day === day).map((event) => <span className={`event-pill ${event.color}`} key={event.title}>{event.title}</span>)}
                  </div>
                ))}
              </div>
            </Card>
          </Col>
          <Col lg={4}>
            <Card className="agenda-panel h-100">
              <div className="d-flex align-items-start justify-content-between">
                <div><h2 className="agenda-heading">Upcoming events</h2><p className="agenda-date">September 12, 2025</p></div>
                <Badge bg="light" text="dark">{events.length} events</Badge>
              </div>
              {[['09:00', 'Product stand-up', 'Conference room A'], ['11:30', 'Design review', 'Studio 2'], ['16:00', 'Project retro', 'Online meeting']].map(([time, title, location]) => (
                <div className="agenda-item" key={title}><span className="agenda-time">{time}</span><div><p className="agenda-event-title">{title}</p><span className="agenda-location">{location}</span></div></div>
              ))}
              <Button className="w-100 mt-3" variant="dark" onClick={goToToday}>Go to today</Button>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Calendar