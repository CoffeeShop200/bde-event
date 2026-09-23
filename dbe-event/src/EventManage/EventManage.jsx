import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form } from 'react-bootstrap';
import { Edit2, Trash2, Plus } from 'lucide-react';
import CardEvent from '../Card/CardEvent'; // Assurez-vous du bon chemin

const INITIAL_EVENTS = [
  {
    id: 1,
    title: 'CONFÉRENCE REACT',
    img: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=500',
    day: '15',
    month: 'OCT',
    categorie: 'TECH',
    date: '15 Octobre 2026',
    horaire: '18:00 - 20:00',
    lieu: 'Paris, France',
    participants: 120
  },
  {
    id: 2,
    title: 'ATELIER BOOTSTRAP',
    img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=500',
    day: '02',
    month: 'NOV',
    categorie: 'DESIGN',
    date: '02 Novembre 2026',
    horaire: '14:00 - 17:00',
    lieu: 'En ligne',
    participants: 45
  }
];

function EventManage() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const [formData, setFormData] = useState({
    id: null,
    title: '',
    img: '',
    day: '',
    month: '',
    categorie: '',
    date: '',
    horaire: '',
    lieu: '',
    participants: 0
  });

  // Ouvrir modal d'ajout
  const handleOpenCreateModal = () => {
    setIsEditing(false);
    setFormData({
      id: null,
      title: '',
      img: 'https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=500',
      day: '01',
      month: 'JAN',
      categorie: 'GÉNÉRAL',
      date: '1 Janvier 2026',
      horaire: '10:00 - 12:00',
      lieu: 'En ligne',
      participants: 0
    });
    setShowModal(true);
  };

  // Ouvrir modal d'édition
  const handleOpenEditModal = (event) => {
    setIsEditing(true);
    setFormData(event);
    setShowModal(true);
  };

  // Suppression
  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cet événement ?")) {
      setEvents(events.filter((item) => item.id !== id));
    }
  };

  // Soumission (Création / Édition)
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      setEvents(events.map((item) => (item.id === formData.id ? formData : item)));
    } else {
      setEvents([...events, { ...formData, id: Date.now() }]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <Container className="py-5">
      <div className="d-flex justify-content-between align-items-center mb-5">
        <div>
          <h1 className="fw-black text-uppercase mb-1">Gestion des Événements</h1>
          <p className="text-muted mb-0">Administrez et éditez vos cartes d'événements.</p>
        </div>
        <Button 
          variant="danger" 
          className="d-flex align-items-center gap-2 fw-bold text-uppercase px-4 py-3"
          onClick={handleOpenCreateModal}
          style={{ backgroundColor: '#FF0000', border: 'none' }}
        >
          <Plus size={20} strokeWidth={3} />
          <span>Créer un événement</span>
        </Button>
      </div>

      {/* Grille des cartes */}
      <Row className="g-4">
        {events.map((event) => (
          <Col key={event.id} xs={12} md={6} lg={4} className="d-flex justify-content-center">
            <div className="position-relative">
              {/* Actions Admin (Modifier / Supprimer) au-dessus de la Carte */}
              <div 
                className="position-absolute top-0 end-0 m-2 d-flex gap-2" 
                style={{ zIndex: 10 }}
              >
                <Button 
                  variant="dark" 
                  size="sm" 
                  className="rounded-circle p-2 shadow"
                  onClick={() => handleOpenEditModal(event)}
                  title="Modifier"
                >
                  <Edit2 size={16} />
                </Button>
                <Button 
                  variant="danger" 
                  size="sm" 
                  className="rounded-circle p-2 shadow"
                  onClick={() => handleDelete(event.id)}
                  title="Supprimer"
                >
                  <Trash2 size={16} />
                </Button>
              </div>

              {/* Utilisation directe de votre composant */}
              <CardEvent {...event} />
            </div>
          </Col>
        ))}
      </Row>

      {/* Modal Ajouter / Modifier */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered size="lg">
        <Modal.Header closeButton>
          <Modal.Title className="fw-bold text-uppercase">
            {isEditing ? "Modifier l'événement" : "Créer un événement"}
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit}>
          <Modal.Body className="p-4">
            <Row className="g-3">
              <Col md={12}>
                <Form.Group>
                  <Form.Label className="fw-bold">Titre de l'événement</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={8}>
                <Form.Group>
                  <Form.Label className="fw-bold">URL de l'image</Form.Label>
                  <Form.Control
                    type="text"
                    name="img"
                    value={formData.img}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={4}>
                <Form.Group>
                  <Form.Label className="fw-bold">Catégorie</Form.Label>
                  <Form.Control
                    type="text"
                    name="categorie"
                    value={formData.categorie}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label className="fw-bold">Jour (ex: 15)</Form.Label>
                  <Form.Control
                    type="text"
                    name="day"
                    value={formData.day}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={3}>
                <Form.Group>
                  <Form.Label className="fw-bold">Mois (ex: OCT)</Form.Label>
                  <Form.Control
                    type="text"
                    name="month"
                    value={formData.month}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Date complète (ex: 15 Octobre 2026)</Form.Label>
                  <Form.Control
                    type="text"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Horaire</Form.Label>
                  <Form.Control
                    type="text"
                    name="horaire"
                    value={formData.horaire}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>

              <Col md={6}>
                <Form.Group>
                  <Form.Label className="fw-bold">Lieu</Form.Label>
                  <Form.Control
                    type="text"
                    name="lieu"
                    value={formData.lieu}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Annuler
            </Button>
            <Button variant="danger" type="submit" style={{ backgroundColor: '#FF0000', border: 'none' }}>
              {isEditing ? 'Enregistrer' : 'Créer'}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Container>
  );
}

export default EventManage;