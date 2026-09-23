import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';
import { Calendar, Clock, MapPin, Users, ArrowRight } from 'lucide-react';

function CardEvent(props) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="rounded-3 overflow-hidden" 
      style={{ 
        width: '22rem',
        border: isHovered ? '2px solid #FF0000' : '2px solid transparent',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease',
        transform: isHovered ? 'translateY(-6px)' : 'translateY(0)',
        boxShadow: isHovered 
          ? '0 12px 24px -6px rgba(255, 0, 0, 0.25)' 
          : '0 2px 8px rgba(0, 0, 0, 0.06)',
        cursor: 'pointer'
      }}
    >
      <div className="position-relative overflow-hidden">
        <Card.Img 
          variant="top" 
          src={props.img} 
          style={{ 
            height: '180px', 
            objectFit: 'cover',
            transition: 'transform 0.4s ease',
            transform: isHovered ? 'scale(1.05)' : 'scale(1)'
          }} 
        />

        <div 
          className="position-absolute top-0 start-0 m-3 bg-white text-dark rounded px-2 py-1 text-center shadow-sm"
          style={{ width: '50px', zIndex: 2 }}
        >
          <div className="fw-bold fs-5 leading-none">{props.day}</div>
          <div className="text-uppercase text-muted fw-bold" style={{ fontSize: '10px' }}>{props.month}</div>
        </div>

        <div className="position-absolute bottom-0 end-0 m-3" style={{ zIndex: 2 }}>
          <span className="badge bg-dark bg-opacity-50 text-white text-uppercase px-2 py-1 border border-white">
            {props.categorie}
          </span>
        </div>
      </div>

      <Card.Body className="p-4">
        <Card.Title className="fw-black text-uppercase fs-4 mb-3">
          {props.title}
        </Card.Title>

        <div className="d-flex flex-column gap-2 mb-3 text-secondary fw-medium" style={{ fontSize: '0.9rem' }}>
          <div className="d-flex align-items-center gap-2">
            <Calendar size={18} className="text-dark" />
            <span>{props.date}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <Clock size={18} className="text-dark" />
            <span>{props.horaire}</span>
          </div>
          <div className="d-flex align-items-center gap-2">
            <MapPin size={18} className="text-dark" />
            <span>{props.lieu}</span>
          </div>
        </div>

        <hr className="my-3 text-muted opacity-25" />

        <div className={`d-flex align-items-center gap-2 ${props.isManagement ? 'mb-0' : 'mb-4'} text-dark fw-bold`} style={{ fontSize: '0.9rem' }}>
          <Users size={18} />
          <span>{props.participants} participants</span>
        </div>

        {/* Masqué en mode gestion (EventManage) */}
        {!props.isManagement && (
          <>
            <Button 
              variant="danger" 
              className="w-100 text-uppercase border-0 d-flex align-items-center justify-content-center gap-2 mb-3 shadow-sm"
              style={{ 
                backgroundColor: isHovered ? '#D60000' : '#FF0000', 
                paddingTop: '15px', 
                paddingBottom: '15px', 
                fontSize: '1.05rem',
                fontWeight: 900,
                letterSpacing: '1px',
                transition: 'background-color 0.2s ease'
              }}
            >
              <span>S'INSCRIRE</span>
              <ArrowRight 
                size={22} 
                strokeWidth={3} 
                style={{
                  transition: 'transform 0.2s ease',
                  transform: isHovered ? 'translateX(4px)' : 'translateX(0)'
                }}
              />
            </Button>

            <div className="text-center">
              <Card.Link href="#" className="text-dark fw-bold text-decoration-underline small">
                Voir les inscrits
              </Card.Link>
            </div>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default CardEvent;