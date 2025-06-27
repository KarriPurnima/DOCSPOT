# DOCSPOT

Full-stack DOCSPOT with React frontend and Node.js backend.

## Features
- **Patient**: Book appointments, view history, manage profile
- **Doctor**: Schedule management, patient records, dashboard
- **Admin**: User management, doctor approvals, system analytics

## Tech Stack
- **Frontend**: React.js, CSS3, Axios
- **Backend**: Node.js, Express.js, MongoDB, JWT

## Installation

### 1. Clone & Install
```bash
git clone <repository-url>
cd medical-appointment-system

# Backend
cd backend && npm install

# Frontend  
cd frontend && npm install
```

### 2. Environment Setup

**Backend `.env`:**
```env
MONGO_URI=mongodb://127.0.0.1:27017/fixed_medical_appointment
PORT=5001
JWT_SECRET=YOUR_JWT_SECRET
```

**Frontend `.env`:**
```env
REACT_APP_API_URL=http://localhost:5001/api
```

### 3. Run Application
```bash
# Start MongoDB
mongod

# Terminal 1 - Backend
cd backend && nodemon index.js

# Terminal 2 - Frontend
cd frontend && npm start
```

## Access URLs
- Frontend: http://localhost:3000
- Backend API: http://localhost:5001/api
- Admin Panel: http://localhost:3000/admin
- Doctor Dashboard: http://localhost:3000/doctor

## API Endpoints
```
POST /api/auth/register    - Register user
POST /api/auth/login       - Login user
GET  /api/doctors          - Get doctors list
POST /api/appointments/book - Book appointment
GET  /api/appointments     - Get appointments
PUT  /api/appointments/:id - Update appointment
```

## Project Structure
```
├── backend/
│   ├── models/     # Database schemas
│   ├── routes/     # API routes
│   ├── controllers/# Business logic
│   └── server.js   # Main server file
├── frontend/
│   ├── src/
│   │   ├── components/  # React components
│   │   ├── pages/       # Page components
│   │   └── App.js       # Main app
│   └── public/
└── README.md
```

## Common Commands

### Development
```bash
# Backend dev mode
nodemon index.js

# Frontend dev mode
npm start

# Install dependencies
npm install
```

## Contributing
1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## License
MIT License




