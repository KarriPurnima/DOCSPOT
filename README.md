📁 DOCSPOT Project Structure
DOCSPOT/
├── 📂 frontend/
│   ├── 📂 src/
│   │   ├── 📂 components/
│   │   │   ├── 📄 PatientDashboard.js
│   │   │   ├── 📄 DoctorDashboard.js
│   │   │   ├── 📄 AppointmentBooking.js
│   │   │   ├── 📄 DoctorSearch.js
│   │   │   └── 📄 AdminPanel.js
│   │   ├── 📂 pages/
│   │   │   ├── 📄 Login.js
│   │   │   ├── 📄 Register.js
│   │   │   ├── 📄 Home.js
│   │   │   └── 📄 Profile.js
│   │   ├── 📂 services/
│   │   │   ├── 📄 api.js
│   │   │   ├── 📄 auth.js
│   │   │   └── 📄 appointments.js
│   │   ├── 📂 utils/
│   │   │   ├── 📄 helpers.js
│   │   │   └── 📄 constants.js
│   │   ├── 📂 styles/
│   │   │   ├── 📄 main.css
│   │   │   └── 📄 components.css
│   │   └── 📄 App.js
│   ├── 📄 package.json
│   └── 📄 package-lock.json
├── 📂 backend/
│   ├── 📂 controllers/
│   │   ├── 📄 authController.js
│   │   ├── 📄 appointmentController.js
│   │   ├── 📄 doctorController.js
│   │   ├── 📄 patientController.js
│   │   └── 📄 adminController.js
│   ├── 📂 models/
│   │   ├── 📄 User.js
│   │   ├── 📄 Doctor.js
│   │   ├── 📄 Patient.js
│   │   ├── 📄 Appointment.js
│   │   └── 📄 MedicalRecord.js
│   ├── 📂 routes/
│   │   ├── 📄 auth.js
│   │   ├── 📄 appointments.js
│   │   ├── 📄 doctors.js
│   │   ├── 📄 patients.js
│   │   └── 📄 admin.js
│   ├── 📂 middleware/
│   │   ├── 📄 auth.js
│   │   ├── 📄 validation.js
│   │   └── 📄 errorHandler.js
│   ├── 📂 config/
│   │   ├── 📄 database.js
│   │   ├── 📄 server.js
│   │   └── 📄 email.js
│   ├── 📂 utils/
│   │   ├── 📄 helpers.js
│   │   ├── 📄 emailService.js
│   │   └── 📄 fileUpload.js
│   ├── 📄 server.js
│   ├── 📄 package.json
│   └── 📄 package-lock.json
├── 📂 database/
│   ├── 📂 migrations/
│   │   ├── 📄 001_create_users_table.sql
│   │   ├── 📄 002_create_doctors_table.sql
│   │   ├── 📄 003_create_appointments_table.sql
│   │   └── 📄 004_create_medical_records_table.sql
│   ├── 📂 seeds/
│   │   ├── 📄 doctors_seed.sql
│   │   └── 📄 specialties_seed.sql
│   └── 📄 schema.sql
├── 📂 docs/
│   ├── 📄 API_Documentation.md
│   ├── 📄 User_Manual.md
│   ├── 📄 Deployment_Guide.md
│   └── 📂 diagrams/
│       ├── 📄 ER_Diagram.png
│       ├── 📄 System_Architecture.png
│       └── 📄 User_Flow.png
├── 📂 tests/
│   ├── 📂 unit/
│   │   ├── 📄 auth.test.js
│   │   ├── 📄 appointments.test.js
│   │   └── 📄 doctors.test.js
│   ├── 📂 integration/
│   │   ├── 📄 api.test.js
│   │   └── 📄 database.test.js
│   └── 📄 setup.js
├── 📂 uploads/
│   ├── 📂 documents/
│   ├── 📂 profile_pictures/
│   └── 📂 medical_records/
├── 📄 .env.example
├── 📄 .env
├── 📄 .gitignore
├── 📄 README.md
├── 📄 package.json
├── 📄 LICENSE
└── 📄 CONTRIBUTING.md
