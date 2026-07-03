import { useState } from "react";
import api from "../services/api";

function Register() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const register = async () => {
    try {
      const res = await api.post("/auth/register", {
        ...form,
        age: Number(form.age),
      });

      alert(res.data.message);

      setForm({
        name: "",
        email: "",
        password: "",
        age: "",
        phone: "",
      });
    } catch (err: any) {
      alert(err.response?.data?.message || err.message);
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8 border">
        <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">
          Patient Registration
        </h2>

        <div className="space-y-4">
          <input
            className="w-full border rounded-lg p-3"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />

          <input
            className="w-full border rounded-lg p-3"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />

          <input
            className="w-full border rounded-lg p-3"
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />

          <input
            className="w-full border rounded-lg p-3"
            name="age"
            placeholder="Age"
            value={form.age}
            onChange={handleChange}
          />

          <input
            className="w-full border rounded-lg p-3"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />

          <button
            onClick={register}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-lg font-semibold transition"
          >
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;