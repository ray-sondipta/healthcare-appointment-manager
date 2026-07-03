import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

import Register from "./pages/Register";
import Login from "./pages/Login";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import MyAppointments from "./pages/MyAppointments";
import CreateDoctor from "./pages/CreateDoctor";
import DoctorUpdate from "./pages/DoctorUpdate";

function App() {
  return (
    <BrowserRouter>

      <Layout>

        <Routes>

          <Route path="/" element={<Register />} />

          <Route path="/login" element={<Login />} />

          <Route path="/doctors" element={<Doctors />} />

          <Route path="/book" element={<BookAppointment />} />

          <Route
            path="/myappointments"
            element={<MyAppointments />}
          />

          <Route
            path="/create-doctor"
            element={<CreateDoctor />}
          />

          <Route
            path="/doctor-update"
            element={<DoctorUpdate />}
          />

        </Routes>

      </Layout>

    </BrowserRouter>
  );
}

export default App;