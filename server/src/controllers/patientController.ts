import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Patient from "../models/Patient";

export const registerPatient = async (
  req: Request,
  res: Response
) => {
  try {
    const { name, email, password, age, phone } = req.body;

    const existingPatient = await Patient.findOne({ email });

    if (existingPatient) {
      return res.status(400).json({
        success: false,
        message: "Patient already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const patient = await Patient.create({
      name,
      email,
      password: hashedPassword,
      age,
      phone,
    });

    res.status(201).json({
      success: true,
      message: "Patient registered successfully",
      patient,
    });
  } catch (error: any) {
  console.error("REGISTER ERROR:", error);

  res.status(500).json({
    success: false,
    message: error.message,
  });
} }