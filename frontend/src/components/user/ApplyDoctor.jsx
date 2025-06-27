import { Col, Form, Input, Row, TimePicker, message } from 'antd';
import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import moment from 'moment';

function ApplyDoctor({ userId }) {
   const [doctor, setDoctor] = useState({
      fullName: '',
      email: '',
      phone: '',
      address: '',
      specialization: '',
      experience: '',
      fees: '',
      timings: [],
   });

   const [loading, setLoading] = useState(false);

   // Check token validity on component mount
   useEffect(() => {
      const checkTokenValidity = async () => {
         const token = localStorage.getItem('token');
         
         if (!token) {
            message.error('No authentication token found. Please login again.');
            return;
         }

         try {
            // Test token validity with a simple API call
            await axios.get('http://localhost:5001/api/user/profile', {
               headers: {
                  Authorization: `Bearer ${token}`
               }
            });
         } catch (error) {
            console.error('Token validation error:', error);
            if (error.response?.status === 401) {
               message.error('Your session has expired. Please login again.');
               localStorage.removeItem('token');
               // Redirect to login if needed
               // window.location.href = '/login';
            }
         }
      };

      checkTokenValidity();
   }, []);

   const handleTimingChange = (times) => {
      if (times && times.length === 2) {
         const formattedTimings = [
            times[0].format('HH:mm'),
            times[1].format('HH:mm')
         ];
         setDoctor({ ...doctor, timings: formattedTimings });
      } else {
         setDoctor({ ...doctor, timings: [] });
      }
   };

   const handleChange = (e) => {
      setDoctor({ ...doctor, [e.target.name]: e.target.value });
   };

   const validateToken = () => {
      const token = localStorage.getItem('token');
      
      if (!token) {
         message.error('No authentication token found. Please login again.');
         return null;
      }

      // Check if token looks valid (basic format check)
      try {
         const tokenParts = token.split('.');
         if (tokenParts.length !== 3) {
            throw new Error('Invalid token format');
         }
         
         // Decode the payload to check expiration
         const payload = JSON.parse(atob(tokenParts[1]));
         const currentTime = Math.floor(Date.now() / 1000);
         
         console.log('Token payload:', payload);
         console.log('Current time:', currentTime);
         console.log('Token expires at:', payload.exp);
         
         if (payload.exp && payload.exp < currentTime) {
            throw new Error('Token has expired');
         }
         
         return token;
      } catch (error) {
         console.error('Token validation error:', error);
         message.error('Invalid or expired token. Please login again.');
         localStorage.removeItem('token');
         return null;
      }
   };

   const handleSubmit = async () => {
      // Validate token first
      const token = validateToken();
      if (!token) {
         return;
      }

      // Validate required fields
      if (!doctor.fullName || !doctor.email || !doctor.phone || !doctor.address || 
          !doctor.specialization || !doctor.experience || !doctor.fees || 
          doctor.timings.length === 0) {
         message.error('Please fill in all required fields');
         return;
      }

      // Additional validation
      if (!doctor.email.includes('@')) {
         message.error('Please enter a valid email address');
         return;
      }

      if (doctor.phone.length < 10) {
         message.error('Please enter a valid phone number');
         return;
      }

      setLoading(true);

      try {
         console.log('Submitting doctor application...');
         console.log('Doctor data:', doctor);
         console.log('User ID:', userId);
         console.log('Token:', token.substring(0, 50) + '...');

         const requestData = {
            doctor: {
               ...doctor,
               userId: userId // Include userId in doctor object
            },
            userId: userId
         };

         console.log('Request data:', requestData);

         const res = await axios.post('http://localhost:5001/api/user/registerdoc', 
            requestData,
            {
               headers: {
                  'Authorization': `Bearer ${token}`,
                  'Content-Type': 'application/json'
               },
               timeout: 30000 // 30 second timeout
            }
         );

         console.log('Response:', res.data);

         if (res.data.success) {
            message.success(res.data.message || 'Doctor application submitted successfully!');
            
            // Reset form after successful submission
            setDoctor({
               fullName: '',
               email: '',
               phone: '',
               address: '',
               specialization: '',
               experience: '',
               fees: '',
               timings: [],
            });
         } else {
            message.error(res.data.message || 'Failed to submit application');
         }
      } catch (error) {
         console.error('Error submitting application:', error);
         
         if (error.response) {
            // Server responded with error status
            console.error('Error response:', error.response.data);
            console.error('Error status:', error.response.status);
            
            if (error.response.status === 401) {
               message.error('Authentication failed. Please login again.');
               localStorage.removeItem('token');
               // Redirect to login
               // window.location.href = '/login';
            } else if (error.response.status === 403) {
               message.error('You are not authorized to perform this action.');
            } else if (error.response.status === 500) {
               message.error('Server error. Please try again later.');
            } else {
               message.error(error.response.data?.message || 'Failed to submit application');
            }
         } else if (error.request) {
            // Network error
            console.error('Network error:', error.request);
            message.error('Network error. Please check your connection and try again.');
         } else {
            // Other error
            console.error('Error:', error.message);
            message.error('Something went wrong. Please try again.');
         }
      } finally {
         setLoading(false);
      }
   };

   return (
      <Container>
         <h2 className='text-center p-3'>Apply for Doctor</h2>
         <Form onFinish={handleSubmit} className='m-3' layout="vertical">
            <h4>Personal Details:</h4>
            <Row gutter={20}>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Full Name" required>
                     <Input 
                        name='fullName' 
                        value={doctor.fullName} 
                        onChange={handleChange} 
                        placeholder='Enter full name'
                        size="large"
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Phone" required>
                     <Input 
                        value={doctor.phone} 
                        onChange={handleChange} 
                        name='phone' 
                        placeholder='Your phone number'
                        size="large"
                        maxLength={10}
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Email" required>
                     <Input 
                        value={doctor.email} 
                        onChange={handleChange} 
                        name='email' 
                        type='email' 
                        placeholder='Your email address'
                        size="large"
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={24} lg={24}>
                  <Form.Item label="Address" required>
                     <Input.TextArea 
                        value={doctor.address} 
                        onChange={handleChange} 
                        name='address' 
                        placeholder='Your complete address'
                        rows={3}
                        size="large"
                     />
                  </Form.Item>
               </Col>
            </Row>
            
            <h4 className="mt-4">Professional Details:</h4>
            <Row gutter={20}>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Specialization" required>
                     <Input 
                        value={doctor.specialization} 
                        onChange={handleChange} 
                        name='specialization' 
                        placeholder='Your specialization (e.g., Cardiology)'
                        size="large"
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Experience (Years)" required>
                     <Input 
                        value={doctor.experience} 
                        onChange={handleChange} 
                        type='number' 
                        name='experience' 
                        placeholder='Years of experience' 
                        min="0"
                        size="large"
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Consultation Fees" required>
                     <Input 
                        value={doctor.fees} 
                        onChange={handleChange} 
                        name='fees' 
                        type='number' 
                        placeholder='Consultation fees' 
                        min="0"
                        prefix="₹"
                        size="large"
                     />
                  </Form.Item>
               </Col>
               <Col xs={24} md={12} lg={8}>
                  <Form.Item label="Available Timings" required>
                     <TimePicker.RangePicker 
                        format="HH:mm" 
                        onChange={handleTimingChange}
                        placeholder={['Start Time', 'End Time']}
                        size="large"
                        style={{ width: '100%' }}
                     />
                  </Form.Item>
               </Col>
            </Row>
            
            <div className="d-flex justify-content-center mt-4">
               <button 
                  className="btn btn-primary btn-lg px-5" 
                  type="submit"
                  disabled={loading}
                  style={{ minWidth: '200px' }}
               >
                  {loading ? (
                     <>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Submitting...
                     </>
                  ) : (
                     'Submit Application'
                  )}
               </button>
            </div>
         </Form>
      </Container>
   );
}

export default ApplyDoctor;