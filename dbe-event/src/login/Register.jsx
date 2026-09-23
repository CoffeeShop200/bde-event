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
import { Link, useNavigate } from 'react-router-dom'
import './Login.css'

function Register() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const [error, setError] = useState('')

  const navigate = useNavigate()

  function handleSubmit(event) {
    event.preventDefault()

    setError('')

    // Vérifie que les mots de passe correspondent
    if (password !== passwordConfirmation) {
      setError('Les mots de passe ne correspondent pas.')
      return
    }

    // Vérifie la longueur du mot de passe
    if (password.length < 8) {
      setError('Le mot de passe doit contenir au moins 8 caractères.')
      return
    }

    // Vérifie si un compte existe déjà avec cet e-mail
    const existingUser = JSON.parse(localStorage.getItem('user'))

    if (existingUser && existingUser.email === email) {
      setError('Un compte existe déjà avec cette adresse e-mail.')
      return
    }

    // Création du compte
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    }

    // Enregistre le compte dans le navigateur
    localStorage.setItem('user', JSON.stringify(user))

    // Redirection vers la page de connexion
    navigate('/login')
  }

  return (
    <main className="login-page">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={8} lg={6} xl={5}>
            <Card className="login-card">
              <Card.Body>

                <div className="login-brand" aria-hidden="true">
                  DB
                </div>

                <p className="login-eyebrow">
                  Rejoignez-nous
                </p>

                <Card.Title as="h1">
                  Créer votre compte
                </Card.Title>

                <Card.Text className="login-subtitle">
                  Inscrivez-vous pour accéder à votre espace événementiel.
                </Card.Text>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <Form onSubmit={handleSubmit}>

                  <Row>

                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="registerFirstName"
                      >
                        <Form.Label>
                          Prénom
                        </Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="Votre prénom"
                          autoComplete="given-name"
                          value={firstName}
                          onChange={(event) =>
                            setFirstName(event.target.value)
                          }
                          required
                        />
                      </Form.Group>
                    </Col>

                    <Col sm={6}>
                      <Form.Group
                        className="mb-3"
                        controlId="registerLastName"
                      >
                        <Form.Label>
                          Nom
                        </Form.Label>

                        <Form.Control
                          type="text"
                          placeholder="Votre nom"
                          autoComplete="family-name"
                          value={lastName}
                          onChange={(event) =>
                            setLastName(event.target.value)
                          }
                          required
                        />
                      </Form.Group>
                    </Col>

                  </Row>

                  <Form.Group
                    className="mb-3"
                    controlId="registerEmail"
                  >
                    <Form.Label>
                      Adresse e-mail
                    </Form.Label>

                    <Form.Control
                      type="email"
                      placeholder="vous@exemple.fr"
                      autoComplete="email"
                      value={email}
                      onChange={(event) =>
                        setEmail(event.target.value)
                      }
                      required
                    />
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="registerPassword"
                  >
                    <Form.Label>
                      Mot de passe
                    </Form.Label>

                    <InputGroup>

                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="8 caractères minimum"
                        autoComplete="new-password"
                        minLength={8}
                        value={password}
                        onChange={(event) =>
                          setPassword(event.target.value)
                        }
                        required
                      />

                      <Button
                        className="password-toggle"
                        variant="outline-secondary"
                        type="button"
                        onClick={() =>
                          setShowPassword((visible) => !visible)
                        }
                        aria-label={
                          showPassword
                            ? 'Masquer le mot de passe'
                            : 'Afficher le mot de passe'
                        }
                      >
                        {showPassword ? 'Masquer' : 'Afficher'}
                      </Button>

                    </InputGroup>
                  </Form.Group>

                  <Form.Group
                    className="mb-3"
                    controlId="registerPasswordConfirmation"
                  >
                    <Form.Label>
                      Confirmer le mot de passe
                    </Form.Label>

                    <InputGroup>

                      <Form.Control
                        type={
                          showConfirmation
                            ? 'text'
                            : 'password'
                        }
                        placeholder="Saisissez à nouveau votre mot de passe"
                        autoComplete="new-password"
                        minLength={8}
                        value={passwordConfirmation}
                        onChange={(event) =>
                          setPasswordConfirmation(
                            event.target.value
                          )
                        }
                        isInvalid={
                          passwordConfirmation.length > 0 &&
                          password !== passwordConfirmation
                        }
                        required
                      />

                      <Button
                        className="password-toggle"
                        variant="outline-secondary"
                        type="button"
                        onClick={() =>
                          setShowConfirmation(
                            (visible) => !visible
                          )
                        }
                        aria-label={
                          showConfirmation
                            ? 'Masquer la confirmation'
                            : 'Afficher la confirmation'
                        }
                      >
                        {showConfirmation
                          ? 'Masquer'
                          : 'Afficher'}
                      </Button>

                    </InputGroup>

                    <Form.Control.Feedback type="invalid">
                      Les mots de passe ne correspondent pas.
                    </Form.Control.Feedback>

                  </Form.Group>

                  <Form.Check
                    className="login-check mb-4"
                    type="checkbox"
                    id="accept-terms"
                    label={
                      <>
                        J&apos;accepte les conditions
                        d&apos;utilisation.
                      </>
                    }
                    required
                  />

                  <Button
                    className="login-submit w-100"
                    type="submit"
                  >
                    Créer mon compte
                  </Button>

                </Form>

                <p className="login-footer">
                  Vous avez déjà un compte ?{' '}

                  <Link
                    className="login-link"
                    to="/login"
                  >
                    Connectez-vous ici
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

export default Register