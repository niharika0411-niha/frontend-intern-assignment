import { useState } from "react";
import { FaBars, FaBell, FaTools, FaEnvelopeOpenText, FaChevronDown } from "react-icons/fa";
import { MdLogout } from "react-icons/md";
import userData from "../service/UserData.json"

export default function UserList() {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div className="flex min-h-screen bg-gray-100">
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
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Dashboard</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Messages</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Jobs</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Candidates</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Resumes</p>

          <p className="px-3 py-2 bg-yellow-400 text-black rounded">Employee Management</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Leave Management</p>
          <p className="px-3 py-2 hover:bg-gray-700 rounded">Performance Management</p>

          <p className="px-3 py-2 hover:bg-gray-700 rounded">Payroll Management</p>

          <button className="mt-10 bg-red-600 text-white px-3 py-2 rounded w-full flex items-center gap-2 justify-center">
            <MdLogout /> Log Out
          </button>
        </nav>
      </aside>

      {/* Main Section */}
      <main className="flex-1 p-6">
        <header className="flex items-center justify-between mb-6">
          <button className="text-2xl md:hidden">
            <FaBars />
          </button>
          <div className="flex items-center gap-3">
            <FaBell className="bg-yellow-400 p-2 text-white rounded-full text-xl" />
            <FaTools className="bg-blue-600 p-2 text-white rounded-full text-xl" />
            <FaEnvelopeOpenText className="bg-green-600 p-2 text-white rounded-full text-xl" />
          </div>
        </header>

        <div className="flex justify-between items-center mb-6">
          <h1 className="text-xl font-semibold">Dashboard / Employee Management</h1>
          <div className="flex items-center gap-2">
            <button className="bg-indigo-700 text-white px-4 py-2 rounded">All Candidates</button>
            <input
              type="text"
              placeholder="Search..."
              className="px-3 py-2 rounded border"
            />
          </div>
        </div>

        {/* User Table */}
        <section className="bg-white p-6 rounded shadow">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold">Employee Management</h2>
            <div className="flex gap-2">
              <button className="text-lg">🔍</button>
              <button className="bg-green-600 text-white px-4 py-2 rounded">Export</button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead className="bg-gray-200">
                <tr>
                  <th className="p-2">Name(s)</th>
                  <th className="p-2">Email</th>
                  <th className="p-2">Role</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                {userData.map((user, idx) => (
                  <tr key={idx} className="odd:bg-white even:bg-gray-100">
                    <td className="p-2 font-medium">{user.name}</td>
                    <td className="p-2">{user.email}</td>
                    <td className="p-2">{user.role}</td>
                    <td className="p-2">{user.status}</td>
                    <td className="p-2">
                      <div className="relative group">
                        <button className="bg-indigo-700 text-white px-4 py-1 rounded inline-flex items-center gap-2">
                          Actions <FaChevronDown />
                        </button>
                        <div className="absolute hidden group-hover:block bg-white border shadow-md mt-1 rounded w-32 z-10">
                          <button
                            className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                            onClick={() => setSelectedUser(user)}
                          >
                            View Profile
                          </button>
                          <button className="block w-full text-left px-4 py-2 hover:bg-gray-100">
                            Edit Profile
                          </button>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </main>

      {/* Modal */}
      {selectedUser && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative animate-fade-in">
            <button
              onClick={() => setSelectedUser(null)}
              className="absolute top-2 right-4 text-gray-600 text-lg hover:text-red-600"
            >
              ✖
            </button>
            <h2 className="text-xl font-bold mb-4">Profile Details</h2>
            <p><strong>Name:</strong> {selectedUser.name}</p>
            <p><strong>Email:</strong> {selectedUser.email}</p>
            <p><strong>Role:</strong> {selectedUser.role}</p>
            <p><strong>Status:</strong> {selectedUser.status}</p>
          </div>
        </div>
      )}
    </div>
  );
}