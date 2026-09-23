import React, { useState } from 'react';
import { Container, Row, Col, Button, Modal, Form, Table } from 'react-bootstrap';
import { Edit2, Trash2, Plus, Users } from 'lucide-react';
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
    participants: 120,
    registeredUsers: [
      { id: 1, name: 'Jean Dupont', email: 'jean.dupont@example.com', date: '10/10/2026' },
      { id: 2, name: 'Marie Martin', email: 'marie.martin@example.com', date: '12/10/2026' }
    ]
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
    participants: 45,
    registeredUsers: [
      { id: 1, name: 'Sophie Bernard', email: 'sophie.b@example.com', date: '28/10/2026' }
    ]
  }
];

function EventManage() {
  const [events, setEvents] = useState(INITIAL_EVENTS);
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  // État pour le modal "Voir les inscrits"
  const [showParticipantsModal, setShowParticipantsModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

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
    participants: 0,
    registeredUsers: []
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
      participants: 0,
      registeredUsers: []
    });
    setShowModal(true);
  };

  // Ouvrir modal d'édition
  const handleOpenEditModal = (event) => {
    setIsEditing(true);
    setFormData(event);
    setShowModal(true);
  };

  // Ouvrir modal des inscrits
  const handleOpenParticipantsModal = (event) => {
    setSelectedEvent(event);
    setShowParticipantsModal(true);
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
      setEvents([...events, { ...formData, id: Date.now(), registeredUsers: [] }]);
    }
    setShowModal(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="bg-light min-vh-100 py-5" style={{ backgroundColor: '#f8f9fa' }}>
      <Container>
        {/* Header de la page */}
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-5 text-center text-md-start">
          <div className="mb-3 mb-md-0">
            <p className="text-danger fw-bold text-uppercase mb-2 tracking-wider">GESTION DES ÉVÉNEMENTS</p>
            <h1 className="fw-black text-uppercase mb-1">
              <span className="d-block text-dark">ADMINISTREZ ET ÉDITEZ</span>
              <span className="d-block text-dark fs-4">VOS CARTES D'ÉVÉNEMENTS.</span>
            </h1>
          </div>
          <Button 
            variant="danger" 
            className="d-flex align-items-center justify-content-center gap-2 fw-bold text-uppercase px-4 py-3 shadow-sm"
            onClick={handleOpenCreateModal}
            style={{ backgroundColor: '#FF0000', border: 'none' }}
          >
            <Plus size={20} strokeWidth={3} />
            <span>Créer un événement</span>
          </Button>
        </div>

        {/* Grille des cartes centrées */}
        <Row className="g-4 justify-content-center">
          {events.map((event) => (
            <Col key={event.id} xs={12} sm={10} md={6} lg={4} className="d-flex justify-content-center">
              {/* Conteneur unifié centré */}
              <div 
                className="d-flex flex-column align-items-center w-100" 
                style={{ maxWidth: '380px' }}
              >
                <div className="position-relative w-100">
                  {/* Actions Admin (Modifier / Supprimer) */}
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

                  {/* Carte d'événement */}
                  <CardEvent {...event} isManagement={true} showRegisterButton={false} />
                </div>

                {/* Bouton Voir les inscrits centré sous la carte */}
                <div className="w-100 mt-2">
                  <Button 
                    variant="outline-dark" 
                    className="w-100 d-flex align-items-center justify-content-center gap-2 fw-bold text-uppercase py-2 shadow-sm"
                    onClick={() => handleOpenParticipantsModal(event)}
                  >
                    <Users size={18} />
                    <span>Voir les inscrits ({event.registeredUsers ? event.registeredUsers.length : 0})</span>
                  </Button>
                </div>
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

        {/* Modal pour afficher la liste des inscrits */}
        <Modal show={showParticipantsModal} onHide={() => setShowParticipantsModal(false)} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title className="fw-bold text-uppercase">
              Inscrits - {selectedEvent?.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="p-4">
            {selectedEvent?.registeredUsers && selectedEvent.registeredUsers.length > 0 ? (
              <Table striped bordered hover responsive className="align-middle">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Nom / Prénom</th>
                    <th>Email</th>
                    <th>Date d'inscription</th>
                  </tr>
                </thead>
                <tbody>
                  {selectedEvent.registeredUsers.map((user, idx) => (
                    <tr key={user.id || idx}>
                      <td>{idx + 1}</td>
                      <td className="fw-bold">{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.date}</td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            ) : (
              <p className="text-center text-muted my-3">
                Aucun utilisateur inscrit pour cet événement.
              </p>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowParticipantsModal(false)}>
              Fermer
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </div>
  );
}

export default EventManage;