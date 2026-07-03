import express from "express";
import { registerPatient } from "../controllers/patientController";
import { loginPatient } from "../controllers/authController";

const router = express.Router();

// Register
router.post("/register", registerPatient);

// Login
router.post("/login", loginPatient);

export default router;