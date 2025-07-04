# DOCSPOT

Full-stack DOCSPOT with React frontend and Node.js backend.

## 🖥️ Home Page

![Home Page](https://github.com/user-attachments/assets/265cd6a2-bb94-466c-9482-98ab6e500eda)

![Image](https://github.com/user-attachments/assets/eb992531-39ff-4f8f-b6da-fa6c6439013e)

## 🔐 Login Page

![Login Page](https://github.com/user-attachments/assets/373d7ec9-8b82-40c8-83a3-a4599cf05384)


## 📝 Register Page

![Register Page](https://github.com/user-attachments/assets/53848ae9-8148-45f1-b8c3-221e5cb05861)


## 🛠️ Admin Dashboard

![Admin Dashboard](https://github.com/user-attachments/assets/1dd89694-5bc9-464d-b459-7c4b18daf72d)


## 👤 User Dashboard

![User Dashboard](https://github.com/user-attachments/assets/c46d7238-8fd8-422d-b4e3-f47936bf4d3f)

![User Dashboard](https://github.com/user-attachments/assets/0a22f9c0-b67d-4c35-bbc6-6e5ca542f264)


## 🩺 Doctor Dashboard

![Doctor Dashboard](https://github.com/user-attachments/assets/d5afd5f3-af14-4a26-b233-835768382970)

![Doctor Dashboard](https://github.com/user-attachments/assets/65093028-6628-4483-868f-301fc97f504f)

## Features
- **Patient**: Book appointments, view history, manage profile
- **Doctor**: Schedule management, patient records, dashboard
- **Admin**: User management, doctor approvals, system analytics

## Tech Stack
- **Frontend**: React.js, CSS3, Axios
- **Backend**: Node.js, Express.js, MongoDB, JWT

## 📹 Demo Video

[Click here to watch the demo video](https://github.com/user-attachments/assets/bdcc0374-e9ef-4f3e-aff5-64edcfb700cc)

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

## ✨ Author

Karri Purnima https://github.com/KarriPurnima

## License
MIT License




