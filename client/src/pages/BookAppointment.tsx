import { useEffect, useState } from "react";
import api from "../services/api";

function BookAppointment() {
  const [selectedDoctor, setSelectedDoctor] = useState<any>(null);

  const [form, setForm] = useState({
    patient: "",
    doctor: "",
    appointmentDate: "",
    appointmentTime: "",
    symptoms: "",
  });

  useEffect(() => {
    const patient = JSON.parse(
      localStorage.getItem("patient") || "{}"
    );

    const doctor = JSON.parse(
      localStorage.getItem("selectedDoctor") || "{}"
    );

    setSelectedDoctor(doctor);

    setForm((prev) => ({
      ...prev,
      patient: patient._id || "",
      doctor: doctor._id || "",
    }));
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const bookAppointment = async () => {
    try {
      const res = await api.post(
        "/appointments/book",
        form
      );

      alert(res.data.message);

      setForm((prev) => ({
        ...prev,
        appointmentDate: "",
        appointmentTime: "",
        symptoms: "",
      }));
    } catch (err: any) {
      alert(err.response?.data?.message || "Booking Failed");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white rounded-2xl shadow-xl border p-8 w-full max-w-2xl">

        <h2 className="text-3xl font-bold text-blue-700 mb-2">
          📅 Book Appointment
        </h2>

        <p className="text-gray-500 mb-6">
          Schedule your appointment with your selected doctor.
        </p>

        {selectedDoctor && (
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-6">

            <h3 className="text-lg font-semibold text-blue-700 mb-3">
              Selected Doctor
            </h3>

            <p>
              <strong>Name:</strong> {selectedDoctor.name}
            </p>

            <p>
              <strong>Specialization:</strong>{" "}
              {selectedDoctor.specialization}
            </p>

          </div>
        )}

        <div className="grid md:grid-cols-2 gap-5">

          <input
            className="border rounded-xl p-3"
            type="date"
            name="appointmentDate"
            value={form.appointmentDate}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3"
            name="appointmentTime"
            placeholder="10:00 AM"
            value={form.appointmentTime}
            onChange={handleChange}
          />

        </div>

        <textarea
          className="w-full border rounded-xl p-3 mt-5 h-32 resize-none"
          name="symptoms"
          placeholder="Describe your symptoms..."
          value={form.symptoms}
          onChange={handleChange}
        />

        <button
          onClick={bookAppointment}
          className="w-full mt-6 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition-all duration-300"
        >
          Confirm Appointment
        </button>

      </div>
    </div>
  );
}

export default BookAppointment;