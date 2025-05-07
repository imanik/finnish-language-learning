import { useAuth } from "../../contexts/AuthContext";

function Header() {
  const { user, logout } = useAuth();

  return (
    <div className="flex justify-between p-4 bg-gray-100">
      <h1>Learn Finnish</h1>
      {user && (
        <div>
          <span className="mr-2">Hello, {user.username}</span>
          <button onClick={logout} className="bg-red-500 text-white px-2 py-1">Logout</button>
        </div>
      )}
    </div>
  );
}
