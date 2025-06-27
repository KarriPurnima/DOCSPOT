import React, { useState } from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { Container, Button, Row, Col, Card, Modal } from 'react-bootstrap';
import './Home.css'; // You'll need to create this CSS file

// You can replace this with your actual image import
import p3 from '../../images/p3.webp'

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const scrollToFeatures = () => {
    const featuresSection = document.getElementById('features-section');
    if (featuresSection) {
      featuresSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <>
      {/* Enhanced Navbar */}
      <Navbar expand="lg" className="custom-navbar shadow-sm">
        <Container fluid>
          <Navbar.Brand className="brand-logo">
            <Link to={'/'} className="brand-link">
              <i className="fas fa-heartbeat me-2"></i>
              MediCareBook
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            </Nav>
            <Nav className="nav-links">
              <Link to={'/'} className="nav-link-custom">
                <i className="fas fa-home me-1"></i>Home
              </Link>
              <Link to={'/login'} className="nav-link-custom">
                <i className="fas fa-sign-in-alt me-1"></i>Login
              </Link>
              <Link to={'/register'} className="nav-link-custom">
                <i className="fas fa-user-plus me-1"></i>Register
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section className="hero-section">
        <Container fluid>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="hero-content">
              <div className="hero-text">
                <h1 className="hero-title">
                  <span className="gradient-text">Effortlessly schedule</span>
                  <br />
                  your doctor appointments
                </h1>
                <p className="hero-subtitle">
                  with just a few clicks, putting your health in your hands
                </p>
                <p className="hero-description">
                  No queues, no waiting rooms - healthcare convenience redefined
                </p>
                <div className="hero-buttons">
                  <Button className="cta-primary">
                    <Link to={'/Login'} className="button-link">
                      <i className="fas fa-search me-2"></i>
                      Find a Doctor Now
                    </Link>
                  </Button>
                  <Button variant="outline-primary" className="cta-secondary ms-3" onClick={handleShowModal}>
                    <i className="fas fa-play me-2"></i>
                    How it Works
                  </Button>
                </div>
                
                {/* Stats */}
                <div className="stats-container mt-4">
                  <div className="stat-item">
                    <h3>50K+</h3>
                    <p>Happy Patients</p>
                  </div>
                  <div className="stat-item">
                    <h3>500+</h3>
                    <p>Qualified Doctors</p>
                  </div>
                  <div className="stat-item">
                    <h3>24/7</h3>
                    <p>Support Available</p>
                  </div>
                </div>
              </div>
            </Col>
            
            <Col lg={6} className="hero-image">
              <div className="image-container">
                <div className="floating-card card-1">
                  <i className="fas fa-calendar-check text-primary"></i>
                  <span>Easy Booking</span>
                </div>
                <div className="floating-card card-2">
                  <i className="fas fa-user-md text-success"></i>
                  <span>Expert Doctors</span>
                </div>
                <div className="floating-card card-3">
                  <i className="fas fa-clock text-warning"></i>
                  <span>Save Time</span>
                </div>
                <img src={p3} alt="Medical professionals" className="hero-main-image" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section id="features-section" className="features-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">Why Choose MediCareBook?</h2>
              <p className="section-subtitle">Experience healthcare booking like never before</p>
            </Col>
          </Row>
          <Row>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <h4>Easy Online Booking</h4>
                  <p>Book appointments anytime, anywhere with our user-friendly platform. No more phone calls or waiting on hold.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <h4>Trusted Professionals</h4>
                  <p>Connect with verified, qualified healthcare providers in your area. Read reviews and choose the best fit for your needs.</p>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-4">
              <Card className="feature-card h-100">
                <Card.Body className="text-center">
                  <div className="feature-icon">
                    <i className="fas fa-bell"></i>
                  </div>
                  <h4>Smart Reminders</h4>
                  <p>Never miss an appointment with our intelligent reminder system. Get notifications via SMS and email.</p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* About Section */}
      <section className="about-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center mb-5">
              <h2 className="section-title">About MediCareBook</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={6} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <h4 className="mb-3">Revolutionizing Healthcare Access</h4>
                  <p>
                    Booking a doctor appointment has never been easier. With our convenient online platform, 
                    you can quickly and effortlessly schedule your appointments from the comfort of your own home. 
                    No more waiting on hold or playing phone tag with busy receptionists.
                  </p>
                  <p>
                    Our user-friendly interface allows you to browse through a wide range of doctors and 
                    healthcare providers, making it simple to find the perfect match for your needs.
                  </p>
                </Card.Body>
              </Card>
            </Col>
            <Col lg={6} className="mb-4">
              <Card className="about-card">
                <Card.Body>
                  <h4 className="mb-3">Advanced Booking System</h4>
                  <p>
                    With our advanced booking system, you can say goodbye to the hassle of traditional 
                    appointment booking. Our platform offers real-time availability, allowing you to 
                    choose from a range of open slots that fit your schedule.
                  </p>
                  <p>
                    We offer same-day and next-day appointment options for urgent cases. No more waiting 
                    weeks for an available slot. We prioritize your health and ensure prompt access to medical care.
                  </p>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="cta-section py-5">
        <Container>
          <Row>
            <Col lg={12} className="text-center">
              <h2 className="cta-title">Ready to Take Control of Your Health?</h2>
              <p className="cta-subtitle">Join thousands of satisfied users who trust MediCareBook</p>
              <Button className="cta-final">
                <Link to={'/register'} className="button-link">
                  Get Started Today
                  <i className="fas fa-arrow-right ms-2"></i>
                </Link>
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* How it Works Modal */}
      <Modal show={showModal} onHide={handleCloseModal} size="lg" centered>
        <Modal.Header closeButton className="border-0">
          <Modal.Title className="w-100 text-center">
            <i className="fas fa-play-circle text-primary me-2"></i>
            How MediCareBook Works
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="px-4 py-4">
          <Row>
            <Col md={4} className="text-center mb-4">
              <div className="step-icon">
                <i className="fas fa-search"></i>
              </div>
              <h5 className="mt-3 mb-2">1. Search & Choose</h5>
              <p className="text-muted">Browse through our network of qualified doctors and specialists. Filter by location, specialty, and availability.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="step-icon">
                <i className="fas fa-calendar-alt"></i>
              </div>
              <h5 className="mt-3 mb-2">2. Book Appointment</h5>
              <p className="text-muted">Select your preferred date and time slot. Fill in your basic information and medical requirements.</p>
            </Col>
            <Col md={4} className="text-center mb-4">
              <div className="step-icon">
                <i className="fas fa-check-circle"></i>
              </div>
              <h5 className="mt-3 mb-2">3. Get Confirmation</h5>
              <p className="text-muted">Receive instant confirmation with appointment details. Get reminders via SMS and email.</p>
            </Col>
          </Row>
          <div className="text-center mt-4">
            <Button className="cta-primary" onClick={handleCloseModal}>
              <Link to={'/register'} className="button-link">
                Get Started Now
              </Link>
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}

export default Home