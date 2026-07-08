import ApartmentIcon from "@mui/icons-material/Apartment";
import PersonIcon from "@mui/icons-material/Person";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import SearchBar from "../components/SearchBar";

export default function Navbar() {
  return (
    <div className="shadow-md bg-primary flex justify-between items-center sticky top-0 text-canvas px-4 py-3">
      {/* Navbar left*/}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-1">
          <ApartmentIcon fontSize="large" />
          <h1 className="text-2xl">Loruki</h1>
        </div>

        <ul className="flex items-center gap-2">
          <li className="transition duration-300 hover:bg-secondary hover:text-surface px-1 py-1 rounded-md cursor-pointer">
            Home
          </li>

          <li className="transition duration-300 hover:bg-secondary hover:text-surface px-1 py-1 rounded-md cursor-pointer">
            Timeline
          </li>
        </ul>
      </div>

      {/* Navbar center */}
      <div className="hidden md:flex justify-center mx-4">
        <SearchBar />
      </div>

      {/* Navbar right */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-5">
          <div className="cursor-pointer relative hidden md:block hover:text-canvas/50 transition duration-300">
            <PersonIcon />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-secondary text-primary flex items-center justify-center text-xs">
              0
            </span>
          </div>

          <div className="cursor-pointer relative hidden md:block hover:text-canvas/50 transition duration-300">
            <ChatBubbleIcon />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-secondary text-primary flex items-center justify-center text-xs">
              0
            </span>
          </div>

          <div className="cursor-pointer relative hidden md:block hover:text-canvas/50 transition duration-300">
            <NotificationsIcon />
            <span className="absolute -top-2 -right-2 h-4 w-4 rounded-full bg-secondary text-primary flex items-center justify-center text-xs">
              0
            </span>
          </div>
        </div>

        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
      </div>
    </div>
  );
}
