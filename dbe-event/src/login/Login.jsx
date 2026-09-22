
import { useState } from 'react'
import { Button, Card, Col, Container, Form, InputGroup, Row } from 'react-bootstrap'
import './Login.css'

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
                <div className="login-brand" aria-hidden="true">DB</div>
                <p className="login-eyebrow">Welcome back</p>
                <Card.Title as="h1">Sign in to your account</Card.Title>
                <Card.Text className="login-subtitle">
                  Enter your details to continue to the event dashboard.
                </Card.Text>

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="loginEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="you@example.com"
                      autoComplete="email"
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="loginPassword">
                    <div className="d-flex justify-content-between align-items-center">
                      <Form.Label>Password</Form.Label>
                      <a className="login-link" href="#forgot-password">Forgot password?</a>
                    </div>
                    <InputGroup>
                      <Form.Control
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        autoComplete="current-password"
                        required
                      />
                      <Button
                        className="password-toggle"
                        variant="outline-secondary"
                        type="button"
                        onClick={() => setShowPassword((visible) => !visible)}
                        aria-label={showPassword ? 'Hide password' : 'Show password'}
                      >
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputGroup>
                  </Form.Group>

                  <Form.Check
                    className="login-check mb-4"
                    type="checkbox"
                    id="remember-me"
                    label="Remember me"
                  />

                  <Button className="login-submit w-100" type="submit">
                    Sign in
                  </Button>
                </Form>

                <p className="login-footer">
                  Don&apos;t have an account? <a className="login-link" href="#create-account">Create one</a>
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