import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patient",
      required: true,
    },

    doctor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Doctor",
      required: true,
    },

    appointmentDate: {
      type: Date,
      required: true,
    },

    appointmentTime: {
      type: String,
      required: true,
    },

    status: {
      type: String,
      enum: ["Booked", "Completed", "Cancelled"],
      default: "Booked",
    },

    symptoms: {
      type: String,
      default: "",
    },

    preVisitSummary: {
      urgency: String,
      chiefComplaint: String,
      suggestedQuestions: [String],
    },

    doctorNotes: {
      type: String,
      default: "",
    },

    prescription: {
      type: String,
      default: "",
    },

    postVisitSummary: {
      summary: String,
      medicationSchedule: String,
      followUp: String,
      originalNotes: String,
    },
  },
  {
    timestamps: true,
  }
);

const Appointment = mongoose.model(
  "Appointment",
  appointmentSchema
);

export default Appointment;
