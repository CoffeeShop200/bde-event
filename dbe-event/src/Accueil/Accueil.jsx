import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CardEvent from '../Card/CardEvent.jsx';

import imgFootsal from '../assets/g5.jpg';
import Aflo1 from '../assets/aflokkat-salle.jpg';
import robot from '../assets/robot.jpg';

function Accueil() {
  return (
    <div className="bg-light min-vh-100 pb-5">
      <div className="py-5">
        <Container className="py-4">
          <p className="text-danger fw-bold text-uppercase mb-2 tracking-wider" style={{ letterSpacing: '2px', fontSize: '0.9rem' }}>
            AGENDA DU CAMPUS
          </p>
          
          <h1 className="fw-black text-uppercase lh-1 m-0" style={{ fontWeight: 900, fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>
            <span className="d-block text-dark">
              CE QUI SE PASSE
            </span>
            <span className="d-block text-danger">
              MAINTENANT.
            </span>
          </h1>
        </Container>
      </div>

      <Container className="pb-5">
        <Row className="g-4">
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <CardEvent 
              img={imgFootsal}
              day="22"
              month="SEP"
              categorie="Sport"
              title="Futsal"
              date="22 septembre 2026"
              horaire="18:00 - 20:00"
              lieu="Campus Sport"
              participants={18}
              onSubscribe={() => alert("Inscription au Futsal !")}
            />
          </Col>

          {/* Carte 2 */}
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <CardEvent 
              img={Aflo1}
              day="24"
              month="OCT"
              categorie="Culture"
              title="SOIRÉE Burger Quizz"
              date="24 octobre 2026"
              horaire="21:00"
              lieu="Le Cargo · Salle A"
              participants={12}
              onSubscribe={() => alert("Inscription à la soirée !")}
            />
          </Col>

          {/* Carte 3 */}
          <Col xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <CardEvent 
              img={robot}
              day="20"
              month="NOV"
              categorie="découverte"
              title="Atelier robotique"
              date="20 novembre 2026"
              horaire="14:30 - 16:30"
              lieu="Salle Capitellu"
              participants={20}
              onSubscribe={() => alert("Inscription à l'atelier robotique !")}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Accueil;