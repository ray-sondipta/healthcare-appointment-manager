# Healthcare Appointment Manager

## Overview

Healthcare Appointment Manager is a full-stack web application that allows patients to register, log in, search for doctors by specialization, book appointments, and view appointment history. Doctors can be added to the system and update appointment status with notes and prescriptions. The project also includes AI-powered pre-visit and post-visit summaries.

## Tech Stack

### Frontend
- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend
- Node.js
- Express.js
- TypeScript
- MongoDB Atlas
- Mongoose
- JWT Authentication

## Features

- Patient Registration & Login
- Doctor Management
- Search Doctors by Specialization
- Book Appointments
- View Appointment History
- Update Appointment Status
- AI Generated Pre-Visit Summary
- AI Generated Post-Visit Summary

## Project Structure

```
healthcare-appointment-manager/
│
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
MONGO_URI=Your_MongoDB_Atlas_URI
JWT_SECRET=Your_JWT_Secret
```

## Author

**Sondipta Ray**
