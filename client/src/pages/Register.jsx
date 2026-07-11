import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { register } from "../services/api";

export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      await register({ username, email, password });
      navigate("/login");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full flex flex-col items-center justify-center">
      {error && <div className="text-red text-xl">{error}</div>}

      <form
        onSubmit={handleSubmit}
        className="flex flex-col bg-primary p-10 rounded-md text-canvas"
      >
        <label className="text-lg">Username</label>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="bg-canvas text-surface border-b-4 focus:border-secondary outline-none rounded-md p-2"
        />
        <label className="text-lg">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-canvas text-surface border-b-4 focus:border-secondary outline-none rounded-md p-2"
        />
        <label className="mt-4 text-lg">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="bg-canvas text-surface border-b-4 focus:border-secondary outline-none rounded-md p-2"
        />

        <button
          type="submit"
          className="bg-secondary mt-4 rounded-md hover:bg-secondary/80 p-2 cursor-pointer"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        <Link
          to="/login"
          className="mt-4 hover:text-panel underline cursor-pointer"
        >
          Already have an account?
        </Link>
      </form>
    </div>
  );
}
