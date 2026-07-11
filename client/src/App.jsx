import Timeline from "./pages/Timeline";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import LandingLayout from "./layouts/LandingLayout";
import AuthLayout from "./layouts/AuthLayout";
import MainLayout from "./layouts/MainLayout";
import Landing from "./pages/Landing";
import { useAuth } from "./context/AuthContext";
import LoadingSpinner from "./components/LoadingSpinner";

function App() {
  const { user, loading } = useAuth();
  // important to prevent the Navigate to firing up to /login when
  // the context is still being passed on making user is currently null,
  // even if logged in
  if (loading) {
    return (
      <div className="h-screen w-screen">
        <LoadingSpinner />
      </div>
    );
    // here when we return the function exits here,
    // not running any of the actual content,
    // but when loading state changes, from true to false,
    // the whole App function is rendered again, this time, the actual content
    // shows up

    // NOTE: this loading global state variable from auth context should only be used for initial page load or refreshing the page, because it replaces the whole ui,
    // we dont want that to happen for every small change like login, logout etc, we would just use the local state variable and show the spinner for that component only and the website ui should still be visible
  }

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
          element={user ? <Timeline /> : <Navigate to="/login" />}
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
