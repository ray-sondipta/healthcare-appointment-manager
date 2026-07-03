import { Link } from "react-router-dom";

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-100">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-700 to-cyan-600 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-8 py-6">

          <h1 className="text-4xl font-bold">
            🩺 Healthcare Appointment Manager
          </h1>

          <p className="text-blue-100 mt-2">
            Smart Appointment Booking & Follow-up Platform
          </p>

          <nav className="flex flex-wrap gap-3 mt-6">

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/">
              Register
            </Link>

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/login">
              Login
            </Link>

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/doctors">
              Doctors
            </Link>

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/book">
              Book Appointment
            </Link>

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/myappointments">
              My Appointments
            </Link>

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/create-doctor">
              Create Doctor
            </Link>

            <Link className="bg-white/20 hover:bg-white hover:text-blue-700 transition px-4 py-2 rounded-lg" to="/doctor-update">
              Doctor Update
            </Link>

          </nav>

        </div>
      </header>

      <main className="max-w-6xl mx-auto p-8">
        {children}
      </main>
    </div>
  );
}