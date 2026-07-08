import Navbar from "../components/Navbar";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";

export default function Home() {
  return (
    <div className="h-screen w-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 hidden md:block overflow-y-auto scrollbar-thumb-primary scrollbar-track-secondary">
          <Sidebar />
        </div>

        <div className="flex-3 overflow-y-auto scrollbar-thumb-primary scrollbar-track-secondary">
          <Feed />
        </div>

        <div className="flex-1 hidden md:block overflow-y-auto scrollbar-thumb-surface">
          <RightSidebar />
        </div>
      </div>
    </div>
  );
}
