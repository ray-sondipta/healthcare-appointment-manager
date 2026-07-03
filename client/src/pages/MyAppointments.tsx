import { useState } from "react";
import api from "../services/api";

function MyAppointments() {
  const [patientId, setPatientId] = useState("");
  const [appointments, setAppointments] = useState<any[]>([]);

  const fetchAppointments = async () => {
    try {
      const res = await api.get(
        `/appointments/patient/${patientId}`
      );

      setAppointments(res.data.appointments);
    } catch {
      alert("Error fetching appointments");
    }
  };

  return (
    <div className="max-w-6xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        📅 My Appointments
      </h2>

      <div className="bg-white shadow-lg rounded-2xl p-6 mb-8">

        <div className="flex gap-4">

          <input
            className="flex-1 border rounded-xl p-3"
            placeholder="Enter Patient ID"
            value={patientId}
            onChange={(e) => setPatientId(e.target.value)}
          />

          <button
            onClick={fetchAppointments}
            className="bg-blue-700 text-white px-8 rounded-xl hover:bg-blue-800 transition"
          >
            View
          </button>

        </div>

      </div>

      <div className="grid gap-6">

        {appointments.map((a) => (

          <div
            key={a._id}
            className="bg-white shadow-lg rounded-2xl p-6 border"
          >

            <div className="flex justify-between items-center">

              <div>

                <h3 className="text-2xl font-bold">
                  👨‍⚕️ {a.doctor.name}
                </h3>

                <p className="text-blue-600">
                  {a.doctor.specialization}
                </p>

              </div>

              <span
                className={`px-4 py-2 rounded-full text-white font-semibold ${
                  a.status === "Completed"
                    ? "bg-green-600"
                    : a.status === "Cancelled"
                    ? "bg-red-600"
                    : "bg-yellow-500"
                }`}
              >
                {a.status}
              </span>

            </div>

            <div className="grid md:grid-cols-2 gap-4 mt-6">

              <p>
                <strong>📅 Date:</strong>{" "}
                {new Date(a.appointmentDate).toLocaleDateString()}
              </p>

              <p>
                <strong>⏰ Time:</strong> {a.appointmentTime}
              </p>

              <p>
                <strong>💰 Fee:</strong> ₹
                {a.doctor.consultationFee}
              </p>

            </div>

            {a.preVisitSummary && (
              <div className="mt-6 bg-blue-50 rounded-xl p-4">

                <h4 className="font-bold text-blue-700 mb-2">
                  AI Pre-Visit Summary
                </h4>

                <p>
                  <strong>Urgency:</strong>{" "}
                  {a.preVisitSummary.urgency}
                </p>

                <p>
                  <strong>Chief Complaint:</strong>{" "}
                  {a.preVisitSummary.chiefComplaint}
                </p>

              </div>
            )}

            {a.postVisitSummary && (
              <div className="mt-6 bg-green-50 rounded-xl p-4">

                <h4 className="font-bold text-green-700 mb-2">
                  AI Post-Visit Summary
                </h4>

                <p>{a.postVisitSummary.summary}</p>

                <p className="mt-2">
                  <strong>Medication:</strong>{" "}
                  {a.postVisitSummary.medicationSchedule}
                </p>

                <p className="mt-2">
                  <strong>Follow-up:</strong>{" "}
                  {a.postVisitSummary.followUp}
                </p>

              </div>
            )}

          </div>

        ))}

      </div>

    </div>
  );
}

export default MyAppointments;