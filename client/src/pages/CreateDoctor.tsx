import { useState } from "react";
import api from "../services/api";

function CreateDoctor() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    specialization: "",
    experience: "",
    phone: "",
    consultationFee: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const createDoctor = async () => {
    try {
      const res = await api.post("/doctors/create", {
        ...form,
        experience: Number(form.experience),
        consultationFee: Number(form.consultationFee),
      });

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        password: "",
        specialization: "",
        experience: "",
        phone: "",
        consultationFee: "",
      });
    } catch (err: any) {
      alert(err.response?.data?.message || "Failed");
    }
  };

  return (
    <div className="flex justify-center">

      <div className="bg-white shadow-xl rounded-2xl border p-8 w-full max-w-3xl">

        <h2 className="text-3xl font-bold text-blue-700 mb-2">
          👨‍⚕️ Create Doctor
        </h2>

        <p className="text-gray-500 mb-8">
          Add a new doctor to the healthcare system.
        </p>

        <div className="grid md:grid-cols-2 gap-5">

          <input
            className="border rounded-xl p-3"
            name="name"
            placeholder="Doctor Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3"
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3"
            name="specialization"
            placeholder="Specialization"
            value={form.specialization}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3"
            type="number"
            name="experience"
            placeholder="Experience (Years)"
            value={form.experience}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <input
            className="border rounded-xl p-3 md:col-span-2"
            type="number"
            name="consultationFee"
            placeholder="Consultation Fee (₹)"
            value={form.consultationFee}
            onChange={handleChange}
          />

        </div>

        <button
          onClick={createDoctor}
          className="w-full mt-8 bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl font-semibold transition"
        >
          Create Doctor
        </button>

      </div>

    </div>
  );
}

export default CreateDoctor;