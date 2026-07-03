import { Request, Response } from "express";
import Appointment from "../models/Appointment";
import Doctor from "../models/Doctor";
import Patient from "../models/Patient";
import {
  generatePreVisitSummary,
  generatePostVisitSummary,
} from "../services/aiService";

export const bookAppointment = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      patient,
      doctor,
      appointmentDate,
      appointmentTime,
      symptoms,
    } = req.body;

    const patientExists = await Patient.findById(patient);

    if (!patientExists) {
      return res.status(404).json({
        success: false,
        message: "Patient not found",
      });
    }

    const doctorExists = await Doctor.findById(doctor);

    if (!doctorExists) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    if (doctorExists.leaveDays.includes(appointmentDate)) {
      return res.status(400).json({
        success: false,
        message: "Doctor is on leave on this date.",
      });
    }

    const existingAppointment = await Appointment.findOne({
      doctor,
      appointmentDate,
      appointmentTime,
    });

    if (existingAppointment) {
      return res.status(400).json({
        success: false,
        message: "Doctor is already booked for this slot.",
      });
    }

    const aiSummary = await generatePreVisitSummary(symptoms);

    const appointment = await Appointment.create({
      patient,
      doctor,
      appointmentDate,
      appointmentTime,
      symptoms,
      preVisitSummary: aiSummary,
    });

    return res.status(201).json({
      success: true,
      message: "Appointment booked successfully",
      appointment,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllAppointments = async (
  req: Request,
  res: Response
) => {
  try {
    const appointments = await Appointment.find()
      .populate("patient", "name email phone")
      .populate("doctor", "name specialization");

    return res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateAppointmentStatus = async (
  req: Request,
  res: Response
) => {
  try {
    const {
      appointmentId,
      status,
      doctorNotes,
      prescription,
    } = req.body;

    const appointment = await Appointment.findById(
      appointmentId
    );

    if (!appointment) {
      return res.status(404).json({
        success: false,
        message: "Appointment not found",
      });
    }

    appointment.status = status;

    if (doctorNotes) {
      appointment.doctorNotes = doctorNotes;
    }

    if (prescription) {
      appointment.prescription = prescription;
    }

    if (doctorNotes) {
      appointment.postVisitSummary =
        await generatePostVisitSummary(doctorNotes);
    }

    await appointment.save();

    return res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
      appointment,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getPatientAppointments = async (
  req: Request,
  res: Response
) => {
  try {
    const { patientId } = req.params;

    const appointments = await Appointment.find({
      patient: patientId,
    })
      .populate(
        "doctor",
        "name specialization consultationFee"
      )
      .sort({ appointmentDate: -1 });

    return res.status(200).json({
      success: true,
      count: appointments.length,
      appointments,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};