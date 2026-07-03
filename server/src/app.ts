import express from "express";
import authRoutes from "./routes/auth";
import connectDB from "./config/database";
import router from "./routes";
import patientRoutes from "./routes/patient";
import dotenv from "dotenv";
import appointmentRoutes from "./routes/appointment";
import doctorRoutes from "./routes/doctor";
import cors from "cors";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
  })
);
connectDB();
app.use(express.json());
const PORT = 5000;

app.use("/", router);
app.use("/patients", patientRoutes);
app.use("/auth", authRoutes);
app.use("/appointments", appointmentRoutes);
app.use("/doctors", doctorRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});