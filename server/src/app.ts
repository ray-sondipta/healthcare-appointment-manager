import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/database";

import authRoutes from "./routes/auth";
import patientRoutes from "./routes/patient";
import appointmentRoutes from "./routes/appointment";
import doctorRoutes from "./routes/doctor";
import router from "./routes";

dotenv.config();

const app = express();

/* ---------------- MIDDLEWARE ---------------- */

app.use(
  cors({
    origin: "*", // IMPORTANT: allows frontend on any domain (Render/Vercel)
  })
);

app.use(express.json());

/* ---------------- DATABASE ---------------- */

connectDB();

/* ---------------- ROUTES ---------------- */

app.use("/", router);
app.use("/auth", authRoutes);
app.use("/patients", patientRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/doctors", doctorRoutes);

/* ---------------- HEALTH CHECK ---------------- */

app.get("/", (req, res) => {
  res.send("Healthcare API Running 🚀");
});

/* ---------------- SERVER ---------------- */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});