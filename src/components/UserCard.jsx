export default function UserCard({ user, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white p-4 rounded shadow cursor-pointer hover:bg-blue-50 transition"
    >
      <h2 className="text-lg font-semibold">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
      <p className="text-sm text-gray-500">{user.role}</p>
      <span
        className={`inline-block mt-2 px-3 py-1 text-sm rounded-full ${
          user.status === "Active"
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {user.status}
      </span>
    </div>
  );
}
