import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database";

import router from "./routes";
import authRoutes from "./routes/auth";
import patientRoutes from "./routes/patient";
import appointmentRoutes from "./routes/appointment";
import doctorRoutes from "./routes/doctor";

dotenv.config();

const app = express();

// Connect Database
connectDB();

// Middleware
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://healthcare-appointment-manager-zeta.vercel.app",
    ],
    credentials: true,
  })
);

// Routes
app.use("/", router);
app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/doctors", doctorRoutes);

// Start Server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
