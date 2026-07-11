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
        {/* here we add h-full, because we want this child to extend to parent height and also this passes down the height to its childrens which would be useful*/}
        {/* the flex-1 makes it stretch to take the full space but doesnt set the height and width properties */}
        <div className="flex-1 h-full hidden md:block overflow-y-auto scrollbar-thumb-primary scrollbar-track-secondary">
          <Sidebar />
        </div>

        <div className="flex-3 h-full overflow-y-auto scrollbar-thumb-primary scrollbar-track-secondary">
          {/* NOTE: the overflow-y-auto does set the height but i think thats not very explicit and we should set the height ourselves here */}
          <Outlet />
        </div>

        <div className="flex-1 h-full overflow-y-auto scrollbar-thumb-surface scrollbar-track-secondary">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
