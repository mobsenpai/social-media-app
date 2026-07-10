import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function LandingLayout() {
  return (
    <div className="h-screen w-screen flex flex-col bg-canvas">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
    </div>
  );
}
