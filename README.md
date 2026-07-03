# 🏥 Healthcare Appointment Manager

A full-stack healthcare web application where patients can register, log in, search doctors, book appointments, and view their medical history. Doctors can manage appointments and update patient records. The system also includes AI-generated pre and post visit summaries.

---

## 🌐 Live Demo

- Frontend: https://healthcare-appointment-manager-zeta.vercel.app/
- Backend: https://healthcare-appointment-manager-avjx.onrender.com

---

## ⚙️ Tech Stack

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

---

## ✨ Features

- 👤 Patient Registration & Login
- 🩺 Doctor Management
- 🔍 Search Doctors by Specialization
- 📅 Book Appointments
- 📋 View Appointments
- ✏️ Update Appointment Status
- 🤖 AI-powered Pre-Visit Summary
- 🤖 AI-powered Post-Visit Summary

---

## 📁 Project Structure

```
healthcare-appointment-manager/
│
├── client/
├── server/
├── screenshots/
└── README.md
```

---

## 📸 Screenshots

### 🏠 Home Page
![Home](screenshots/home.png)

### 🔐 Login Page
![Login](screenshots/login.png)

### 📝 Register Page
![Register](screenshots/register.png)

### 👨‍⚕️ Doctors Page
![Doctors](screenshots/doctors.png)

---

## 🚀 Installation

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

---

## 🔐 Environment Variables

Create a `.env` file inside `server/`:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
```

---

## 👨‍💻 Author

**Sondipta Ray**