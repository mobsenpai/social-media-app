import RssFeedIcon from "@mui/icons-material/RssFeed";
import ChatBubbleIcon from "@mui/icons-material/ChatBubble";
import DuoIcon from "@mui/icons-material/Duo";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import SearchBar from "./SearchBar";

export default function Sidebar() {
  return (
    <ul className="bg-panel text-canvas flex flex-col items-center gap-5 p-4 min-h-full">
      {/* The use of min-h-full is absolutely important here,
        because if not used then the heigt doesnt extend to the full,
        and if given h-full then it will only extend till overflow, and will show
        white background for the overflow items when scrolled */}
      <li className="md:hidden">
        <SearchBar />
      </li>

      <li className="cursor-pointer hover:text-surface">
        <RssFeedIcon />
        <span>Feed</span>
      </li>

      <li className="cursor-pointer hover:text-surface">
        <ChatBubbleIcon />
        <span>Chats</span>
      </li>

      <li className="cursor-pointer hover:text-surface">
        <DuoIcon />
        <span>Videos</span>
      </li>

      <li className="cursor-pointer hover:text-surface">
        <GroupIcon />
        <span>Groups</span>
      </li>

      <li className="cursor-pointer hover:text-surface">
        <BookmarkIcon />
        <span>Bookmarks</span>
      </li>

      <hr className="w-full text-surface" />

      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>

      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>

      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
      <li className="flex gap-5 items-center">
        <img
          src=""
          alt="profile image"
          className="cursor-pointer w-8 h-8 rounded-full object-cover bg-secondary"
        />
        <span>Jane Doe</span>
      </li>
    </ul>
  );
}
