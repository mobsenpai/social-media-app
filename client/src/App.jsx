import Home from "./pages/Home";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import { useAuth } from "./context/AuthContext";

function App() {
  const { user } = useAuth();

  return (
    <Routes>
      <Route element={<LandingLayout />}>
        <Route path="/" element={<Landing />} />
      </Route>

      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Route>

      {/*Protected pages */}
      <Route element={<MainLayout />}>
        <Route
          path="/feed"
          element={user ? <Home /> : <Navigate to="/login" />}
        />
        {/* Here Naviagte to used instead of Link to because we dont want to render any anchor tag here, we just want user to just redirect to login page */}
        <Route
          path="/profile/:id"
          element={user ? <Profile /> : <Navigate to="/login" />}
        />
      </Route>
    </Routes>
  );
}

export default App;
