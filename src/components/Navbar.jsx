import { Link } from "react-router-dom";
import { useUser } from "../context/UserContext";

export default function Navbar() {
  const { user } = useUser();

  return (
    <nav className="bg-white shadow px-6 py-4 flex justify-between items-center">
      <div className="text-xl font-bold">Admin Panel</div>
      <div className="space-x-6 flex items-center">
        <Link to="/dashboard" className="text-blue-600 hover:underline">
          Dashboard
        </Link>
        <Link to="/users" className="text-blue-600 hover:underline">
          Users
        </Link>
        {user && <span className="font-medium">Hello, {user.name}</span>}
      </div>
    </nav>
  );
}
