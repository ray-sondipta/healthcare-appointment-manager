import { useState } from "react";
import api from "../services/api";

function DoctorUpdate() {
  const [form, setForm] = useState({
    appointmentId: "",
    status: "Completed",
    doctorNotes: "",
    prescription: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const update = async () => {
    try {
      const res = await api.put(
        "/appointments/status",
        form
      );

      alert(res.data.message);

      setForm({
        appointmentId: "",
        status: "Completed",
        doctorNotes: "",
        prescription: "",
      });
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="flex justify-center">

      <div className="bg-white rounded-2xl shadow-xl border p-8 w-full max-w-3xl">

        <h2 className="text-3xl font-bold text-blue-700 mb-2">
          🩺 Doctor Consultation
        </h2>

        <p className="text-gray-500 mb-8">
          Update the appointment after the consultation.
        </p>

        <div className="space-y-5">

          <input
            className="w-full border rounded-xl p-3"
            name="appointmentId"
            placeholder="Appointment ID"
            value={form.appointmentId}
            onChange={handleChange}
          />

          <select
            className="w-full border rounded-xl p-3"
            name="status"
            value={form.status}
            onChange={handleChange}
          >
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>

          <textarea
            className="w-full border rounded-xl p-3 h-32 resize-none"
            name="doctorNotes"
            placeholder="Doctor's Clinical Notes"
            value={form.doctorNotes}
            onChange={handleChange}
          />

          <textarea
            className="w-full border rounded-xl p-3 h-24 resize-none"
            name="prescription"
            placeholder="Prescription / Medicines"
            value={form.prescription}
            onChange={handleChange}
          />

          <button
            onClick={update}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
          >
            Save Consultation
          </button>

        </div>

      </div>

    </div>
  );
}

export default DoctorUpdate;
