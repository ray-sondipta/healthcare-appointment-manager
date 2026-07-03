# Healthcare Appointment Manager

## Overview

Healthcare Appointment Manager is a full-stack web application that allows patients to register, log in, search for doctors, book appointments, and manage their appointments. Doctors can update appointment status, add consultation notes, and prescribe medications. The application also includes AI-powered summaries for appointments.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Axios
- Tailwind CSS

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication

## Features

- Patient Registration & Login
- Doctor Registration
- Search Doctors by Specialization
- Book Appointments
- View Appointment History
- Update Appointment Status
- AI-powered Pre-Visit Summary
- AI-powered Post-Visit Summary

## Project Structure

```
healthcare-appointment-manager/
├── client/
├── server/
└── README.md
```

## Installation

### Backend

```bash
cd server
npm install
npm run dev
```

### Frontend

```bash
cd client
npm install
npm run dev
```

## Environment Variables

Create a `.env` file inside the `server` folder.

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

## Live Deployment

- **Frontend:** https://healthcare-appointment-manager-zeta.vercel.app/
- **Backend:** https://healthcare-appointment-manager-avjx.onrender.com

## Author

**Sondipta Ray**


## 📸 Screenshots

### 🏠 Home Page

![Home](screenshots/home.png)

### 🔐 Login Page

![Login](screenshots/login.png)

### 📝 Success Page

![Register](screenshots/success.png)

### 👨‍⚕️ Doctor Page

![Doctors](screenshots/doctor.png)


