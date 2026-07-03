import express from "express";
import {
  bookAppointment,
  getAllAppointments,
  updateAppointmentStatus,
  getPatientAppointments,
} from "../controllers/appointmentController";

const router = express.Router();

router.post("/book", bookAppointment);

router.get("/", getAllAppointments);

router.put("/status", updateAppointmentStatus);

router.get("/patient/:patientId", getPatientAppointments);

export default router; router.put( 
    "/status", 
    updateAppointmentStatus
);