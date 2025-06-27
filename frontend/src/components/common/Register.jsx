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
  MDBRadio,
} from 'mdb-react-ui-kit';
import axios from 'axios';
import './Register.css'; // <-- add this if you create extra styles

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fullName: '',
    email: '',
    password: '',
    phone: '',
    type: '',
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5001/api/user/register', user);
      if (res.data.success) {
        message.success('Registered Successfully');
        navigate('/login');
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

      {/* Register Container */}
      <div className="register-background">
        <MDBContainer className="py-5">
          <MDBCard style={{ border: 'none' }}>
            <MDBRow className="g-0 align-items-center">

              <MDBCol md="6">
                <MDBCardBody className="mx-4">
                  <h2 className="mb-4 fw-bold">Sign up to your account</h2>
                  <Form onSubmit={handleSubmit}>
                    <label className="my-1 form-label">Full name</label>
                    <MDBInput
                      name="fullName"
                      value={user.fullName}
                      onChange={handleChange}
                      type="text"
                      size="lg"
                      className="mb-3"
                    />

                    <label className="my-1 form-label">Email</label>
                    <MDBInput
                      name="email"
                      value={user.email}
                      onChange={handleChange}
                      type="email"
                      size="lg"
                      className="mb-3"
                    />

                    <label className="my-1 form-label">Password</label>
                    <MDBInput
                      name="password"
                      value={user.password}
                      onChange={handleChange}
                      type="password"
                      size="lg"
                      className="mb-3"
                    />

                    <label className="my-1 form-label">Phone</label>
                    <MDBInput
                      name="phone"
                      value={user.phone}
                      onChange={handleChange}
                      type="tel"
                      size="lg"
                      className="mb-3"
                    />

                    <Container className="my-3">
                      <MDBRadio
                        name="type"
                        value="admin"
                        checked={user.type === 'admin'}
                        onChange={handleChange}
                        label="Admin"
                        inline
                      />
                      <MDBRadio
                        name="type"
                        value="user"
                        checked={user.type === 'user'}
                        onChange={handleChange}
                        label="User"
                        inline
                      />
                    </Container>

                    <Button className="mb-4 bg-dark w-100" variant="dark" size="lg" type="submit">
                      Register
                    </Button>
                  </Form>

                  <p className="text-center" style={{ color: '#393f81' }}>
                    Have an account? <Link to={'/login'} style={{ color: '#393f81' }}>Login here</Link>
                  </p>
                </MDBCardBody>
              </MDBCol>

              <MDBCol md="6">
                <MDBCardImage src={p2} alt="doctor illustration" className="w-100 rounded-end register-image" />
              </MDBCol>

            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </>
  );
};

export default Register;
