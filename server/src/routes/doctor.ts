import express from "express";
import {
  createDoctor,
  getDoctorsBySpecialization,
  addLeaveDay,
} from "../controllers/doctorController";

const router = express.Router();

router.post("/create", createDoctor);
router.post("/leave", addLeaveDay);

router.get( 
    "/specialization/:specialization", 
    getDoctorsBySpecialization);

export default router;

