import Container from 'react-bootstrap/Container';
import CardEvent from '../Card/CardEvent';

function Accueil() {
  return (
    <>
    <div className="bg-light py-5">
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
    <CardEvent title="Match " text="Match de footsal entre les étudiants du campus. Venez nombreux pour encourager votre équipe favorite et passer un bon moment !" />
    </>
  );
}

export default Accueil;