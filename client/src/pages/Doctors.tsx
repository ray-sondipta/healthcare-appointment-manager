import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

function Doctors() {
  const navigate = useNavigate();

  const [specialization, setSpecialization] = useState("");
  const [doctors, setDoctors] = useState<any[]>([]);

  const searchDoctors = async () => {
    try {
      const res = await api.get(
        `/doctors/specialization/${specialization}`
      );

      setDoctors(res.data.doctors);
    } catch {
      alert("Error fetching doctors");
    }
  };

  const bookDoctor = (doctor: any) => {
  localStorage.setItem(
    "selectedDoctor",
    JSON.stringify({
      _id: doctor._id,
      name: doctor.name,
      specialization: doctor.specialization,
    })
  );

  navigate("/book");
};

  return (
    <div className="max-w-5xl mx-auto">

      <h2 className="text-3xl font-bold text-blue-700 mb-6">
        🔍 Find a Doctor
      </h2>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

        <div className="flex gap-4">

          <input
            className="flex-1 border rounded-xl p-3"
            placeholder="Enter Specialization (e.g. Cardiologist)"
            value={specialization}
            onChange={(e) =>
              setSpecialization(e.target.value)
            }
          />

          <button
            onClick={searchDoctors}
            className="bg-blue-700 hover:bg-blue-800 text-white px-8 rounded-xl transition"
          >
            Search
          </button>

        </div>

      </div>

      <div className="grid md:grid-cols-2 gap-6">

        {doctors.map((doctor) => (

          <div
            key={doctor._id}
            className="bg-white rounded-2xl shadow-lg border p-6 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
          >

            <div className="flex items-center gap-4">

              <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-3xl">
                👨‍⚕️
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  {doctor.name}
                </h3>

                <p className="text-blue-600 font-medium">
                  {doctor.specialization}
                </p>
              </div>

            </div>

            <div className="mt-5 space-y-2 text-gray-700">

              <p>
                <strong>Experience:</strong> {doctor.experience} years
              </p>

              <p>
                <strong>Consultation Fee:</strong> ₹{doctor.consultationFee}
              </p>

            </div>

            <button
              onClick={() => bookDoctor(doctor)}
              className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white py-3 rounded-xl font-semibold transition"
            >
              📅 Book Appointment
            </button>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Doctors;