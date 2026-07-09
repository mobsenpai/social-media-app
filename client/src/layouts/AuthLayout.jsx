import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function AuthLayout() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col bg-canvas">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
