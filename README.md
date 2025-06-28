# DOCSPOT

Full-stack DOCSPOT with React frontend and Node.js backend.

## 🖥️ Home Page

![Home Page](https://github.com/user-attachments/assets/265cd6a2-bb94-466c-9482-98ab6e500eda)

![Image](https://github.com/user-attachments/assets/eb992531-39ff-4f8f-b6da-fa6c6439013e)

## 🔐 Login Page

![Login Page](https://github.com/user-attachments/assets/373d7ec9-8b82-40c8-83a3-a4599cf05384)


## 📝 Register Page

![Register Page](https://github.com/user-attachments/assets/5062a472-fef6-4b5c-895e54fbbd81fd83)

## Features
- **Patient**: Book appointments, view history, manage profile
- **Doctor**: Schedule management, patient records, dashboard
- **Admin**: User management, doctor approvals, system analytics

## Tech Stack
- **Frontend**: React.js, CSS3, Axios
- **Backend**: Node.js, Express.js, MongoDB, JWT

## 📹 Demo Video

[Click here to watch the demo video](https://drive.google.com/drive/folders/1yGO20TBS6oq1sfYr6acyTI2QzTLnxa6t)

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




