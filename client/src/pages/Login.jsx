import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { login } from "../services/api";
import { useAuth } from "../context/AuthContext";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login: authLogin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // when pressed submit again after an error,
    // the error should go away while its loading
    setError("");
    setLoading(true);
    try {
      const response = await login({ email, password });
      authLogin(response.data);
      navigate("/feed");
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
          {loading ? "Logging in..." : "Login"}
        </button>

        <Link
          to="/register"
          className="mt-4 hover:text-panel underline cursor-pointer"
        >
          Don't have an account?
        </Link>
      </form>
    </div>
  );
}
