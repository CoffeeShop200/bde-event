
import { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from 'react-bootstrap'
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'

function Login() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()
    setError('')

    // Récupère l'utilisateur enregistré dans le navigateur
    const savedUser = JSON.parse(localStorage.getItem('user'))

    // Vérifie les identifiants
    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {
      // Enregistre la connexion
      localStorage.setItem('isLoggedIn', 'true')

      // Redirige vers la page d'accueil
      navigate('/')
    } else {
      setError('Adresse e-mail ou mot de passe incorrect.')
    }
  }

  return (
    <main className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={5} xl={4}>
            <Card className="login-card">
              <Card.Body>

                <p className="login-eyebrow">Bon retour</p>

                <Card.Title as="h1">
                  Connectez-vous à votre compte
                </Card.Title>

                <Card.Text className="login-subtitle">
                  Saisissez vos informations pour accéder à votre espace événementiel.
                </Card.Text>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <Form onSubmit={handleSubmit}>

                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Adresse e-mail</Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      value={email}
                      onChange={(event) => setEmail(event.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="loginPassword">

                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label>Mot de passe</Form.Label>

                      <a
                        className="login-link"
                        href="#forgot-password"
                      >
                        Mot de passe oublié ?
                      </a>
                    </div>

                    <InputGroup>

                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Saisissez votre mot de passe"
                        autoComplete="current-password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        required
                      />

                      <Button
                        className="password-toggle"
                        variant="outline-secondary"
                        type="button"
                        onClick={() =>
                          setShowPassword((visible) => !visible)
                        }
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

                  <Button
                    className="login-submit w-100"
                    type="submit"
                  >
                    Se connecter
                  </Button>

                </Form>

                <p className="login-footer">
                  Vous n&apos;avez pas de compte ?{' '}
                  <Link
                    className="login-link"
                    to="/register"
                  >
                    Créez-en un
                  </Link>
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