import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import img from '../assets/g5.jpg'

function Event() {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Footsal</Card.Title>
        <Card.Text>
          Match de footsal entre les étudiants du campus. Venez nombreux pour encourager votre équipe favorite et passer un bon moment !
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>22 septembre 2023</ListGroup.Item>
        <ListGroup.Item>18:00 - 20:00</ListGroup.Item>
        <ListGroup.Item>Campus Sport</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">S'inscrire</Card.Link>
        <Card.Link href="#">Voir les inscripts</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Event;