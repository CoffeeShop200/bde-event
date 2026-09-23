import React, { useState } from 'react';
import { Container, Row, Col, Card, Table, Form, Button, Badge, InputGroup } from 'react-bootstrap';
import { Search, CheckCircle, Clock, XCircle, Trash2, Users } from 'lucide-react';

const INITIAL_RESERVATIONS = [
  { id: 101, eventTitle: 'CONFÉRENCE REACT', user: 'Jean Dupont', email: 'jean.dupont@email.com', date: '12 Septembre 2026', status: 'Confirmé' },
  { id: 102, eventTitle: 'CONFÉRENCE REACT', user: 'Sophie Martin', email: 'sophie.m@email.com', date: '15 Septembre 2026', status: 'En attente' },
  { id: 103, eventTitle: 'ATELIER BOOTSTRAP', user: 'Lucas Bernard', email: 'lucas.b@email.com', date: '18 Septembre 2026', status: 'Confirmé' },
  { id: 104, eventTitle: 'HACKATHON INNOVATION', user: 'Emma Petit', email: 'emma.p@email.com', date: '20 Septembre 2026', status: 'Annulé' },
  { id: 105, eventTitle: 'ATELIER BOOTSTRAP', user: 'Thomas Roux', email: 'thomas.r@email.com', date: '21 Septembre 2026', status: 'Confirmé' }
];

function ManageReservations() {
  const [reservations, setReservations] = useState(INITIAL_RESERVATIONS);
  const [search, setSearch] = useState('');
  const [filterEvent, setFilterEvent] = useState('ALL');
  const [filterStatus, setFilterStatus] = useState('ALL');

  const eventsList = ['ALL', ...new Set(reservations.map((r) => r.eventTitle))];

  const handleStatusChange = (id, newStatus) => {
    setReservations(
      reservations.map((item) => (item.id === id ? { ...item, status: newStatus } : item))
    );
  };

  const handleDelete = (id) => {
    if (window.confirm("Voulez-vous vraiment supprimer cette réservation ?")) {
      setReservations(reservations.filter((item) => item.id !== id));
    }
  };

  const filteredReservations = reservations.filter((r) => {
    const matchesSearch =
      r.user.toLowerCase().includes(search.toLowerCase()) ||
      r.email.toLowerCase().includes(search.toLowerCase());
    const matchesEvent = filterEvent === 'ALL' || r.eventTitle === filterEvent;
    const matchesStatus = filterStatus === 'ALL' || r.status === filterStatus;

    return matchesSearch && matchesEvent && matchesStatus;
  });

  const renderStatusBadge = (status) => {
    switch (status) {
      case 'Confirmé':
        return <Badge bg="success" className="px-2 py-1"><CheckCircle size={12} className="me-1" /> Confirmé</Badge>;
      case 'En attente':
        return <Badge bg="warning" text="dark" className="px-2 py-1"><Clock size={12} className="me-1" /> En attente</Badge>;
      case 'Annulé':
        return <Badge bg="danger" className="px-2 py-1"><XCircle size={12} className="me-1" /> Annulé</Badge>;
      default:
        return <Badge bg="secondary">{status}</Badge>;
    }
  };

  return (
    <Container className="py-5">
      <div className="mb-4">
        <p className="text-danger fw-bold text-uppercase mb-2 tracking-wider">GESTION DES RÉSERVATIONS</p>
        <h1 className="fw-black text-uppercase mb-1">
          <span className="d-block text-dark">SUIVER ET GÉRER</span>
          <span className="d-block text-dark fs-4">LES INSCRIPTIONS DES PARTICIPANTS À VOS ÉVÉNEMENTS.</span>
        </h1>
      </div>

      {/* Cartes de Statistiques (4 colonnes) */}
      <Row className="mb-4 g-3">
        <Col sm={6} md={3}>
          <Card className="border-0 shadow-sm rounded-3 p-3 h-100">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-dark text-white p-3 rounded-3">
                <Users size={22} />
              </div>
              <div>
                <span className="text-muted small fw-bold text-uppercase" style={{ fontSize: '0.75rem' }}>Total Inscrits</span>
                <h3 className="fw-black mb-0">{reservations.length}</h3>
              </div>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card className="border-0 shadow-sm rounded-3 p-3 h-100">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-success text-white p-3 rounded-3">
                <CheckCircle size={22} />
              </div>
              <div>
                <span className="text-muted small fw-bold text-uppercase" style={{ fontSize: '0.75rem' }}>Confirmées</span>
                <h3 className="fw-black mb-0">{reservations.filter((r) => r.status === 'Confirmé').length}</h3>
              </div>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card className="border-0 shadow-sm rounded-3 p-3 h-100">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-warning text-dark p-3 rounded-3">
                <Clock size={22} />
              </div>
              <div>
                <span className="text-muted small fw-bold text-uppercase" style={{ fontSize: '0.75rem' }}>En Attente</span>
                <h3 className="fw-black mb-0">{reservations.filter((r) => r.status === 'En attente').length}</h3>
              </div>
            </div>
          </Card>
        </Col>

        <Col sm={6} md={3}>
          <Card className="border-0 shadow-sm rounded-3 p-3 h-100">
            <div className="d-flex align-items-center gap-3">
              <div className="bg-danger text-white p-3 rounded-3">
                <XCircle size={22} />
              </div>
              <div>
                <span className="text-muted small fw-bold text-uppercase" style={{ fontSize: '0.75rem' }}>Annulées</span>
                <h3 className="fw-black mb-0">{reservations.filter((r) => r.status === 'Annulé').length}</h3>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      {/* Filtres et Recherche */}
      <Card className="border-0 shadow-sm rounded-3 mb-4 p-3">
        <Row className="g-3">
          <Col lg={6}>
            <InputGroup>
              <InputGroup.Text className="bg-white">
                <Search size={18} className="text-muted" />
              </InputGroup.Text>
              <Form.Control
                placeholder="Rechercher par nom ou email..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </InputGroup>
          </Col>

          <Col sm={6} lg={3}>
            <Form.Select value={filterEvent} onChange={(e) => setFilterEvent(e.target.value)}>
              {eventsList.map((evt, idx) => (
                <option key={idx} value={evt}>
                  {evt === 'ALL' ? 'Tous les événements' : evt}
                </option>
              ))}
            </Form.Select>
          </Col>

          <Col sm={6} lg={3}>
            <Form.Select value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="ALL">Tous les statuts</option>
              <option value="Confirmé">Confirmés</option>
              <option value="En attente">En attente</option>
              <option value="Annulé">Annulés</option>
            </Form.Select>
          </Col>
        </Row>
      </Card>

      {/* Tableau des Réservations */}
      <Card className="border-0 shadow-sm rounded-3 overflow-hidden">
        <Table responsive hover className="mb-0 align-middle">
          <thead className="bg-light text-uppercase small fw-bold">
            <tr>
              <th className="py-3 px-4">Participant</th>
              <th className="py-3">Événement</th>
              <th className="py-3">Date Réservation</th>
              <th className="py-3">Statut</th>
              <th className="py-3 text-end px-4">Changer Statut / Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredReservations.length > 0 ? (
              filteredReservations.map((r) => (
                <tr key={r.id}>
                  <td className="px-4">
                    <div className="fw-bold">{r.user}</div>
                    <div className="text-muted small">{r.email}</div>
                  </td>
                  <td className="fw-semibold text-danger">{r.eventTitle}</td>
                  <td className="text-muted fw-medium">{r.date}</td>
                  <td>{renderStatusBadge(r.status)}</td>
                  <td className="text-end px-4">
                    <div className="d-flex justify-content-end align-items-center gap-2">
                      <Form.Select
                        size="sm"
                        style={{ width: '130px' }}
                        value={r.status}
                        onChange={(e) => handleStatusChange(r.id, e.target.value)}
                      >
                        <option value="Confirmé">Confirmé</option>
                        <option value="En attente">En attente</option>
                        <option value="Annulé">Annulé</option>
                      </Form.Select>

                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() => handleDelete(r.id)}
                        title="Supprimer"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-5 text-muted">
                  Aucune réservation ne correspond à vos critères.
                </td>
              </tr>
            )}
          </tbody>
        </Table>
      </Card>
    </Container>
  );
}

export default ManageReservations;