import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function MainLayout() {
  return (
    <div className="h-screen w-screen flex flex-col">
      {/* NOTE: difference between h-screen and h-full so use min-h-full not min-h-screen */}
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 hidden md:block overflow-y-auto scrollbar-thumb-primary scrollbar-track-secondary">
          <Sidebar />
        </div>

        <div className="flex-3 overflow-y-auto scrollbar-thumb-primary scrollbar-track-secondary">
          <Outlet />
        </div>

        <div className="flex-1 overflow-y-auto scrollbar-thumb-surface scrollbar-track-secondary">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
