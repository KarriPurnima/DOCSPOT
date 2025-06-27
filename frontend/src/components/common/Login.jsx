import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { message } from 'antd';
import p2 from '../../images/p2.png';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const navigate = useNavigate();
  const [credentials, setCredentials] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/user/login', credentials);
      if (res.data.success) {
        message.success('Login Successful');

        // Store token and userData in localStorage
        localStorage.setItem('token', res.data.token);
        localStorage.setItem('userData', JSON.stringify(res.data.userData));

        // Navigate based on user type
        const { type } = res.data.userData;
        if (type === 'admin') {
          navigate('/adminHome');
        } else if (type === 'doctor') {
          navigate('/doctorhome');
        } else if (type === 'user') {
          navigate('/userhome');
        } else {
          // fallback
          navigate('/');
        }
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      message.error('Something went wrong');
    }
  };

  return (
    <>
      {/* Navbar */}
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand>
            <Link to={'/'} className="brand-link">MediCareBook</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto" />
            <Nav>
              <Link className="nav-item" to={'/'}>Home</Link>
              <Link className="nav-item" to={'/login'}>Login</Link>
              <Link className="nav-item" to={'/register'}>Register</Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Login Container */}
      <div className="login-background">
        <MDBContainer className="py-5">
          <MDBCard style={{ border: 'none' }}>
            <MDBRow className="g-0 align-items-center">

              <MDBCol md="6">
                <MDBCardBody className="mx-4">
                  <h2 className="mb-4 fw-bold">Welcome Back!</h2>
                  <Form onSubmit={handleSubmit}>
                    <label className="my-1 form-label">Email</label>
                    <MDBInput
                      name="email"
                      value={credentials.email}
                      onChange={handleChange}
                      type="email"
                      size="lg"
                      className="mb-3"
                    />

                    <label className="my-1 form-label">Password</label>
                    <MDBInput
                      name="password"
                      value={credentials.password}
                      onChange={handleChange}
                      type="password"
                      size="lg"
                      className="mb-3"
                    />

                    <Button className="mb-4 bg-dark w-100" variant="dark" size="lg" type="submit">
                      Login
                    </Button>
                  </Form>

                  <p className="text-center" style={{ color: '#393f81' }}>
                    Don't have an account? <Link to={'/register'} style={{ color: '#393f81' }}>Register here</Link>
                  </p>
                </MDBCardBody>
              </MDBCol>

              <MDBCol md="6">
                <MDBCardImage src={p2} alt="doctor illustration" className="w-100 rounded-end login-image" />
              </MDBCol>

            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
};

export default Login;
