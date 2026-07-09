import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function MainLayout() {
  return (
    <div className="min-h-screen min-w-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 hidden md:block overflow-y-auto">
          <Sidebar />
        </div>

        <div className="flex-3 overflow-y-auto">
          <Outlet />
        </div>

        <div className="flex-1 overflow-y-auto">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
