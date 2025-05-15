import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Login() {
  const { login } = useUser();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      login({ name: email.split("@")[0], email });
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Side (Form) */}
      <div className="bg-white flex flex-col justify-center p-10">
        <h2 className="text-3xl font-bold text-blue-800 mb-2">Login</h2>
        <p className="text-gray-600 mb-6">Login to your account.</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">E-mail Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-1">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="flex justify-between items-center text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" /> Remember me
            </label>
            <button type="button" className="text-blue-600 hover:underline">
              Reset Password?
            </button>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-800 text-white py-2 rounded-md hover:bg-blue-900"
          >
            Sign In
          </button>

          <p className="text-center text-sm text-gray-600 mt-4">
            Don’t have an account yet?{' '}
            <span className="text-blue-700 font-semibold cursor-pointer">Join KRIS today.</span>
          </p>
        </form>
      </div>

      {/* Right Side (Banner) */}
      <div className="hidden md:flex items-center justify-center bg-blue-900 text-white relative">
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 max-w-md text-center p-8">
          <h2 className="text-2xl font-semibold mb-4">
            Manage all <span className="text-yellow-400">HR Operations</span> from the comfort of your home.
          </h2>
        </div>
      </div>
    </div>
  );
}
