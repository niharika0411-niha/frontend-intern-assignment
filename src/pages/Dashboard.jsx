import { useUser } from "../context/UserContext";
import { useEffect, useState } from "react";
import { FaBars, FaEnvelope, FaBriefcase, FaUsers, FaEye, FaDownload } from "react-icons/fa";
import { MdDashboard, MdLogout } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
export default function Dashboard() {
  const { user } = useUser();
  const [sidebarOpen, setSidebarOpen] = useState(true);
const navigate = useNavigate();

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-64 bg-[#0d1b2a] text-white p-6 hidden md:block">
        <div className="flex items-center mb-10">
          <div className="w-12 h-12 rounded-full bg-yellow-400 mr-4" />
          <div>
            <p className="font-bold">KRIS Admin</p>
            <p className="text-sm">Admin</p>
          </div>
        </div>

        <nav className="space-y-3 text-sm">
          <p className="mb-2 text-gray-300">Features</p>
          <div className="bg-yellow-400 text-black px-3 py-2 rounded flex items-center gap-2">
            <MdDashboard /> Dashboard
          </div>
          <p className="px-3 py-2 flex items-center gap-2 hover:bg-gray-700 rounded">
            <FaEnvelope /> Messages
          </p>

          <p className="mt-6 mb-2 text-gray-300">Recruitment</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Jobs</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Candidates</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Resumes</p>

          <p className="mt-6 mb-2 text-gray-300">Organization</p>
          <button onClick={() => navigate('/users')}><p className="px-3 py-2 hover:bg-gray-700 rounded">Employee Management</p></button>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Leave Management</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Performance Management</p>

          <p className="mt-6 mb-2 text-gray-300">KRIS Pay</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Payroll Management</p>

          <button className="mt-10 bg-red-600 text-white px-3 py-2 rounded w-full flex items-center gap-2 justify-center">
            <MdLogout /> Log Out
          </button>
        </nav>
      </aside>

      {/* Main Dashboard */}
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <button className="text-2xl md:hidden" onClick={() => setSidebarOpen(!sidebarOpen)}>
            <FaBars />
          </button>
          <div className="flex items-center gap-3">
            <button className="bg-blue-600 p-2 rounded-full text-white">🔧</button>
            <button className="bg-yellow-400 p-2 rounded-full text-white">🔔</button>
            <button className="bg-green-600 p-2 rounded-full text-white">✉️</button>
          </div>
        </header>

        {/* Search and Filters */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-2">
            <button className="bg-indigo-700 text-white px-4 py-2 rounded">All Candidates</button>
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded border"
            />
          </div>
        </div>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-yellow-400 text-white p-6 rounded">
            <FaEnvelope className="text-3xl mb-2" />
            <p className="text-xl font-bold">138 Messages</p>
          </div>
          <div className="bg-blue-600 text-white p-6 rounded">
            <FaBriefcase className="text-3xl mb-2" />
            <p className="text-xl font-bold">50 Jobs</p>
          </div>
          <div className="bg-green-600 text-white p-6 rounded">
            <FaUsers className="text-3xl mb-2" />
            <p className="text-xl font-bold">100 Candidates</p>
          </div>
        </div>

        {/* Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Applied Jobs */}
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-4">Applied Jobs</h2>
            <ul className="space-y-3">
              <li className="p-3 bg-gray-100 rounded">Sales Executive - Access Bank</li>
              <li className="p-3 bg-gray-100 rounded">User Experience Designer - Paystack</li>
              <li className="p-3 bg-gray-100 rounded">Product Manager - T-Pay</li>
            </ul>
          </section>

          {/* Employees */}
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-4">Employees</h2>
            <ul className="space-y-3">
              {[
                { name: "John Doe", role: "Product Manager" },
                { name: "Ginna Loe", role: "Sales Executive" },
                { name: "John Dore", role: "UI/UX Designer" }
              ].map((emp, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between p-3 bg-gray-100 rounded"
                >
                  <div>
                    <p className="font-semibold">{emp.name}</p>
                    <p className="text-sm">Role: {emp.role}</p>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-green-500 text-white px-3 py-1 rounded text-sm">
                      <FaEye />
                    </button>
                    <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm">
                      <FaDownload />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </section>

          {/* Candidates */}
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-4">Candidates</h2>
            <ul className="space-y-3">
              {[
                { name: "John Doe", score: 80 },
                { name: "Ginna Loe", score: 30 },
                { name: "James Foe", score: 87 }
              ].map((c, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded"
                >
                  <div>
                    <p className="font-semibold">{c.name}</p>
                    <p className="text-sm">Applied for: Product Manager</p>
                  </div>
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    ATS Score: {c.score}
                  </span>
                </li>
              ))}
            </ul>
          </section>

          {/* Payrolls */}
          <section className="bg-white p-4 rounded shadow">
            <h2 className="font-bold text-lg mb-4">April Payrolls</h2>
            <ul className="space-y-3">
              {[
                { name: "John Doe", amount: "₦500,000", status: "Paid" },
                { name: "Ginna Loe", amount: "₦150,000", status: "Processing" },
                { name: "James Foe", amount: "₦200,000", status: "Processing" }
              ].map((p, i) => (
                <li
                  key={i}
                  className="flex justify-between items-center p-3 bg-gray-100 rounded"
                >
                  <div>
                    <p className="font-semibold">{p.name}</p>
                    <p className="text-sm">Salary Amount: {p.amount}</p>
                  </div>
                  <span
                    className={`text-sm px-3 py-1 rounded-full text-white ${
                      p.status === "Paid"
                        ? "bg-green-500"
                        : "bg-yellow-500"
                    }`}
                  >
                    {p.status}
                  </span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </main>
    </div>
  );
}
