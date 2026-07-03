import { Request, Response } from "express";
import Doctor from "../models/Doctor";

export const createDoctor = async (
  req: Request,
  res: Response
) => {
  try {
    console.log(req.body);

    const doctor = await Doctor.create(req.body);

    return res.status(201).json({
      success: true,
      message: "Doctor created successfully",
      doctor,
    });
  } catch (error: any) {
    console.error(error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getDoctorsBySpecialization = async (
  req: Request,
  res: Response
) => {
  try {
    const specialization = req.params.specialization as string;

    const doctors = await Doctor.find({
      specialization: {
        $regex: specialization,
        $options: "i",
      },
    });

    return res.status(200).json({
      success: true,
      count: doctors.length,
      doctors,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const addLeaveDay = async (
  req: Request,
  res: Response
) => {
  try {
    const { doctorId, leaveDate } = req.body;

    const doctor = await Doctor.findById(doctorId);

    if (!doctor) {
      return res.status(404).json({
        success: false,
        message: "Doctor not found",
      });
    }

    if (!doctor.leaveDays.includes(leaveDate)) {
      doctor.leaveDays.push(leaveDate);
    }

    await doctor.save();

    return res.status(200).json({
      success: true,
      message: "Leave day added successfully",
      doctor,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};