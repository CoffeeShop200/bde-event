
import { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row,Image } from 'react-bootstrap'
import './Login.css'
import { Link } from 'react-router-dom'
import logo from '../assets/skalinata-logo.png'
function Login() {
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(event) {
    event.preventDefault()
  }

  return (
    <main className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <Card className="login-card">
              <Card.Body>
    
                <p className="login-eyebrow">Bon retour</p>
                <Card.Title as="h1">Connectez-vous à votre compte</Card.Title>
                <Card.Text className="login-subtitle">
                  Saisissez vos informations pour accéder à votre espace événementiel.
                </Card.Text>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Adresse e-mail</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="loginPassword">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label>Mot de passe</Form.Label>
                      <a className="login-link" href="#forgot-password">Mot de passe oublié ?</a>
                    </div>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Saisissez votre mot de passe"
                        autoComplete="current-password"
                        required
                      />
                      <Button
                        className="password-toggle"
                        variant="outline-secondary"
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                        aria-label={showPassword ? 'Masquer le mot de passe' : 'Afficher le mot de passe'}
                      >
                        {showPassword ? 'Masquer' : 'Afficher'}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Form.Check
                    className="login-check mb-4"
                    type="checkbox"
                    id="remember-me"
                    label="Se souvenir de moi"
                  />

                  <Button className="login-submit w-100" type="submit">
                    Se connecter
                  </Button>
                </Form>

                <p className="login-footer">
                  Vous n&apos;avez pas de compte ? <Link className="login-link" to="/register">Créez-en un</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </main>
  )
}

export default Login